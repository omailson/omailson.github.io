// Search popup
$('.search > .fa-search').click(function(){
   	$('.search_popup').slideDown('', function() {});
   	$('.search > .fa-search').toggleClass('active');
   	$('.search > .fa-remove').toggleClass('active');
 });

 $('.search > .fa-remove').click(function(){
   	$('.search_popup').slideUp('', function() {});
   	$('.search > .fa-search').toggleClass('active');
   	$('.search > .fa-remove').toggleClass('active');
 });

// Mobile menu
 $('.menubutton').click(function(){
   	$('header nav').slideToggle('', function() {});
 });

// Responsive videos
 $(".post_video").fitVids();
