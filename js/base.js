var navPart = $(".base-nav-part"),
	subnav = $(".base-subnav");
navPart.bind('click',function(){
	if(subnav.css('display') == 'none'){
		subnav.css('display','block');
	} else {
		subnav.css('display','none');
	}
});