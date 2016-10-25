// check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("clicked");
	
})
// click on x to delete todo
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	})
	e.stopPropagation();
})
// add new todo in input field
$("input[type='text']").keypress(function(e){
	if(e.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append( "<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})