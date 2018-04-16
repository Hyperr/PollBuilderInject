

/*******************************************************
 * Copyright (C) 2017 PTP APP LLC - All Rights Reserved
 * Unauthorized copying of this file, in whole or in part, via any medium is strictly prohibited.
 * Proprietary and Confidential
 *******************************************************/

import URLToolkit from 'url-toolkit'

class PollBuilderInject
{
	static version = '1.1.1';
	
	/**
		The main mapping function for usage when injecting the poll builder into the page.
	*/
	static map(requirements, itemSelector, logic, intvl)
	{
		// figure out if page meets requirements and should have poll builder injected
		if (Array.isArray(requirements)) {
			if (!requirements.some(sel=>document.querySelector(sel)))
				return false;
		} else if (typeof requirements === 'function') {
			if (!requirements())
				return false;
		} else if (typeof requirements === 'string') {
			if (!document.querySelector(requirements))
				return false;
		} else {
			if (!requirements)
				return false;
		}
		
		// figure out what elements on the page are the items themselves
		var items, item;
		if (Array.isArray(itemSelector))
			items = itemSelector;
		else if (typeof itemSelector === 'function')
			items = itemSelector();
		else if (typeof itemSelector === 'string')
			items = document.querySelectorAll(itemSelector);
		else
			throw new Error('Invalid item selector value');
		
		// for every item run the logic supplied
		for (item of items) {
			if (PollBuilderInject._mapped.indexOf(item) < 0) {
				PollBuilderInject._mapped.push(item);
				logic(item);
			}
		}
		
		// If an interval is supplied, check again on that interval.
		// This is specifically for the purpose of pages that load more
		// items dynamically, so that it can detect new items later.
		if (intvl) {
			clearInterval(PollBuilderInject._interval);
			PollBuilderInject._interval = setInterval(()=>{
				PollBuilderInject.map(requirements, itemSelector, logic);
			}, intvl)
		}
		
		// if the buttons are set up and have instruction to automatically update every new mapping, then do so
		// this also connects the button to the poll builder, since by nature at this point the builder is already instantiated
		if (PollBuilderInject._buttonUpdateSelector) {
			PollBuilderInject.autoHideButtons(PollBuilderInject._buttonUpdateSelector);
			pollBuilder.addButtons(PollBuilderInject._buttonUpdateSelector);
		}
		
		// return true for success
		return true;
	}
	static _mapped = [];
	static _interval = null;
	
	/**
		Adds the poll builder embedding script to the page, and then embeds sticky-style.
	*/
	static embed(token, options, callback)
	{
		// allow (token, callback) format if no options
		if (typeof options === 'function' && typeof callback === 'undefined')
			callback = options;
		
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.async = true;
		script.addEventListener('load', function(){
			pollBuilder.embedSticky(token, options || {});
			callback();
		});
		script.src = 'https://scripts.gethyperr.com/pollbuilder-embed/latest.js';
		document.getElementsByTagName('head')[0].appendChild(script);
	}
	
	/**
		Shortcut that can be used by the mapping logic functions for the adding of data element.
	*/
	static addDataElement(elem, image, link)
	{
		var obj = {image:image};
		if (link) obj.link = link;
		
		elem.setAttribute('data-poll-builder', JSON.stringify(obj));
	}
	
	/**
		Checks an element for the presence of the data element.
	*/
	static hasDataElement(elem, child = null)
	{
		var check = child ? elem.querySelector(child) : elem;
		return check.hasAttribute('data-poll-builder');
	}
	
	/**
		Makes a url such as `/folder/resource.ext` or `folder/resource.ext` and converts to proper absolute URL.
	*/
	static absoluteURL(url)
	{
		return URLToolkit.buildAbsoluteURL(document.location.href, url);
	}
	
	/**
		Reads a computed background url for an element (useful when finding an image url that's applied via CSS)
	*/
	static getBackgroundImage(element)
	{
		var comp = window.getComputedStyle(element);
		
		if (comp && comp.getPropertyValue) {
			var bg = comp.getPropertyValue('background-image');
			if (!bg) return null;
			return bg.replace(/^\s*?url\(('|")(.*)('|")\)/, '$2');
		} else {
			return null;
		}	
	}
	
	/**
		Creates a default template for an "Add to Poll" button and returns it.
	*/
	static defaultButton(img, lnk)
	{
		var button = document.createElement('div');
		button.setAttribute('class', 'poll-builer-add-button');
		button.innerHTML = 'Add to Poll';
		button.addEventListener('click', function(evt){ evt.preventDefault(); });
		var s = button.style;
		s.cursor = 'pointer';
		s.padding = '4px 10px';
		s.transition = 'opacity 0.4s';
		s.opacity = '0';
		s.pointerEvents = 'none';
		s.fontSize = '14px';
		s.color = '#fff';
		s.background = '#000';
		s.whiteSpace = 'nowrap';
		
		if (img && lnk)
			PollBuilderInject.addDataElement(button, img, lnk);
		
		return button;
	}
	
	/**
		Automatically sets up buttons (either as an array/nodelist of elements, a single element, or a query selector) to show/hide as poll builder does.
		@note - must ONLY be called after successful loading of the pollBuilder object/script (i.e. on the callback)
		@note - can be called multiple times to add more each time
	*/
	static autoHideButtons(btns = '.poll-builer-add-button', autoUpdate = false)
	{
		if (autoUpdate)
		{
			if (typeof btns === 'string')
				PollBuilderInject._buttonUpdateSelector = btns;
			else
				throw new Error('To use autoUpdate you must supply a query selector string as the main button identifier.');
		}
		
		
		if (typeof btns === 'string')
			btns = Array.prototype.slice.call( document.querySelectorAll(btns) );
		else if (btns instanceof NodeList)
			btns = Array.prototype.slice.call(btns);
		else if (!Array.isArray(btns))
			btns = [btns];
		
		PollBuilderInject._buttons = mergeArrays(PollBuilderInject._buttons, btns);
		
		if (!PollBuilderInject._buttonsListening)
		{
			pollBuilder.addEventListener("pb:maximized", function(){
				PollBuilderInject._buttonsShowing = true;
				PollBuilderInject._buttons.map(function(button){
					button.style.opacity = '1';
					button.style.pointerEvents = 'auto';
				})
			})
			pollBuilder.addEventListener("pb:minimized", function(){
				PollBuilderInject._buttonsShowing = false;
				PollBuilderInject._buttons.map(function(button){
					button.style.opacity = '0';
					button.style.pointerEvents = 'none';
				})
			})
			PollBuilderInject._buttonsListening = true;
		}
		
		// if is currently showing already, turn the recent additions on
		if (PollBuilderInject._buttonsShowing) {
			btns.map(button => {
				button.style.opacity = '1';
				button.style.pointerEvents = 'auto';
			});
		}
		
		// private function
		function mergeArrays(a1, a2)
		{
			var a = a1.concat(a2);
			for(var i=0; i<a.length; ++i)
				for(var j=i+1; j<a.length; ++j)
					if(a[i] === a[j])
						a.splice(j--, 1);

			return a;
		}
	}
	static _buttonsShowing = false;
	static _buttonUpdateSelector = null;
	static _buttonsListening = false;
	static _buttons = [];
}

window.PollBuilderInject = PollBuilderInject;


