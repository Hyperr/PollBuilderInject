		
		var pollBuilderButtons = [];
		PollBuilderInject.map('body.template-collection', '.product-item', function(item)
		{
			var img = PollBuilderInject.absoluteURL( item.querySelector('.product-item-photo img').src );
			var lnk = PollBuilderInject.absoluteURL( item.querySelector('a.product-item-photo').getAttribute('href') );
			
			var caption = item.querySelector('.caption');
			caption.setAttribute('draggable', 'true');
			PollBuilderInject.addDataElement(caption, img, lnk);
			
			var button = document.createElement('div');
			button.setAttribute('class', 'poll-builer-add-button');
			button.innerHTML = 'Add to Poll';
			var s = button.style;
			s.color = '#fff';
			s.background = '#65c402';
			s.cursor = 'pointer';
			s.padding = '3px 7px';
			s.transition = 'opacity 0.4s';
			s.opacity = '0';
			s.pointerEvents = 'none';
			s.fontFamily = "'Work Sans', sans-serif";
			s.textTransform = 'uppercase';
			s.position = 'absolute';
			s.right = '50%';
			s.bottom = '50%';
			s.transform = 'translate(50%, 50%)';
			s.whiteSpace = 'nowrap';
			s.zIndex = '99';
			item.append(button);
			pollBuilderButtons.push(button);
			PollBuilderInject.addDataElement(button, img, lnk);
		})
		
		var pollBuilderOptions = {
			side:'left',
			addButtons:'.poll-builer-add-button',
			builderOffsetX:40,
			builderOffsetY:40,
			buttonOffsetX:40,
			buttonOffsetY:40,
			buttonImage: 'data:image/png;base64,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',
			buttonImageHover: 'data:image/png;base64,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',
			buttonStyles: '',
			zIndex: 9999
		}
		PollBuilderInject.embed('jyrYBBYooL7L8Lgb', pollBuilderOptions, function(){
			pollBuilder.addEventListener("pb:maximized", function(){
				pollBuilderButtons.map(function(button){
					button.style.opacity = '1';
					button.style.pointerEvents = 'auto';
				})
			})
			pollBuilder.addEventListener("pb:minimized", function(){
				pollBuilderButtons.map(function(button){
					button.style.opacity = '0';
					button.style.pointerEvents = 'none';
				})
			})
		})