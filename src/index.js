

/*******************************************************
 * Copyright (C) 2016 PTP APP LLC - All Rights Reserved
 * Unauthorized copying of this file, in whole or in part, via any medium is strictly prohibited.
 * Proprietary and Confidential
 *******************************************************/

import URLToolkit from 'url-toolkit'

class PollBuilderInject
{
	/**
		The main mapping function for usage when injecting the poll builder into the page.
	*/
	static map(requirements, itemSelector, logic)
	{
		// figure out if page meets requirements and should have poll builder injected
		if (Array.isArray(requirements)) {
			if (!requirements.some(document.querySelector(sel)))
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
		var items;
		if (Array.isArray(itemSelector))
			items = itemSelector;
		else if (typeof itemSelector === 'function')
			items = itemSelector();
		else if (typeof itemSelector === 'string')
			items = document.querySelectorAll(itemSelector);
		else
			throw new Error('Invalid item selector value');
		
		// for every item run the logic supplied
		for (var item of items)
			logic(item);
		
		// return true for success
		return true;
	}
	
	// shortcut that can be used by the mapping logic functions for the adding of data element
	static addDataElement(elem, image, link)
	{
		var obj = {image:image};
		if (link) obj.link = link;
		
		elem.setAttribute('data-poll-builder', JSON.stringify(obj));
	}
	
	// adds the poll builder embedding script to the page, and then embeds sticky-style
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
		script.src = 'https://scripts.gethyperr.com/desktop/latest.js';
		document.getElementsByTagName('head')[0].appendChild(script);
	}
	
	// makes a url such as `/folder/resource.ext` or `folder/resource.ext` and converts to proper absolute URL
	static absoluteURL(url)
	{
		return URLToolkit.buildAbsoluteURL(document.location.href, url);
	}
}

window.PollBuilderInject = PollBuilderInject;
