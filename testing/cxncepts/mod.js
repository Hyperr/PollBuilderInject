var doEmbed = PollBuilderInject.map('body.template-collection', '.product-item', function(item)
{
	if (PollBuilderInject.hasDataElement(item, '.product-link'))
		return;
	
	var img = PollBuilderInject.absoluteURL( PollBuilderInject.getBackgroundImage( item.querySelector('.product-image') ) );
	var lnk = PollBuilderInject.absoluteURL( item.querySelector('.product-link').getAttribute('href') );
	
	var dragger = item.querySelector('.product-link');
	dragger.setAttribute('draggable', 'true');
	PollBuilderInject.addDataElement(dragger, img, lnk);
	
	var button = PollBuilderInject.defaultButton(img, lnk);
	var s = button.style;
	s.borderRadius = '2px';
	s.position = 'absolute';
	s.right = '50%';
	s.top = '50%';
	s.transform = 'translate(50%, 50%)';
	dragger.append(button);
}, 1000)
var pollBuilderOptions = {
	addButtons:'.poll-builer-add-button',
	//builderOffsetX:'3vw',
	//builderOffsetY:'3vw',
	//buttonOffsetX:'3vw',
	//buttonOffsetY:'3vw',
	//buttonImage: 'data:image/png;base64,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',
	//buttonImageHover: 'data:image/png;base64,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',
	//buttonImages2x: true,
	//buttonStyles: '',
	//zIndex: 100
}
if (doEmbed) {
	PollBuilderInject.embed('lM2aGpiiA0GzDfTh', pollBuilderOptions, function(){
	    PollBuilderInject.autoHideButtons('.poll-builer-add-button');
	})
}