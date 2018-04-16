console.log('v 5');
var doEmbed = PollBuilderInject.map('body.template-collection', '.col-product', function(item)
{
	var img = PollBuilderInject.absoluteURL( item.querySelector('.featured-image').src );
	var lnk = PollBuilderInject.absoluteURL( item.querySelector('.grid-link').getAttribute('href') );
	
	var dragger = item.querySelector('.featured-image');
	dragger.setAttribute('draggable', 'true');
	PollBuilderInject.addDataElement(dragger, img, lnk);
	
	var button = PollBuilderInject.defaultButton(img, lnk);
	var s = button.style;
	s.position = 'absolute';
	s.right = '50%';
	s.bottom = '14px';
	s.transform = 'translateX(50%)';
	s.padding = '7px 20px 6px';
	s.fontWeight = 'bold';
    s.letterSpacing = '2.5px';
    s.borderRadius = '5px';
	s.border = '1px solid #333';
	s.zIndex = 2;
	
	item.querySelector('.grid-link__image-centered').appendChild(button);
})
var pollBuilderOptions = {
	addButtons:'.poll-builer-add-button'
}
if (doEmbed) {
	PollBuilderInject.embed('eXn7qmWqqHOG9wpD', pollBuilderOptions, function(){
	    PollBuilderInject.autoHideButtons('.poll-builer-add-button');
	})
}
