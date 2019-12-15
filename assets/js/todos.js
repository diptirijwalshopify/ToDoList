

//When a task is completed
$("ul").on("click", "li", function(){ // this means on clicking an 'li' inside of a 'ul'
    $(this).toggleClass("done");
});

//when a new task is added
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        let newTask = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newTask + "</li>");
    }
});

//when a task is to be deleted
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove(); //here $(this) refers to $(span).parent or the element that was faded out
    });
    //to stop event bubbling 
    //i.e. triggering other events in li,ul and body, since span in contained in these elements
    event.stopPropagation(); 
});

$(".fa-plus-square").on("click", function(){
    $("input[type='text']").fadeToggle(300);
});

/*
//corresponding VanillaJS


*/