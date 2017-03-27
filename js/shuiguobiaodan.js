
// $('li.dropdown[hover="1"],.dropdown-menu[hover="1"]').mouseover(function() {   
//      	$(this).addClass('open');    
//  	}).mouseout(function() {        
//  		$(this).removeClass('open');    
//  	}); 





$('.dropdown[hover="1"]').mouseover(function() {   
     	$(this).addClass('open');    
 	}).mouseout(function() {        
 		$(this).removeClass('open');    
 	});

$(function(){
	$('[data-toggle="tooltip"]').tooltip();
});
$(function  () {
	$('[data-toggle="tooltip"]').tooltip();

	$('[data-toggle="collapse"]').click(function  () {
		console.log($(this).attr('aria-expanded'));
		if ($(this).attr('aria-expanded')=='true') {
			$(this).html("+");
		}else{
			$(this).html("-");
		}
	})
})