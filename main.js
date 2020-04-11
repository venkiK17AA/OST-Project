$(document).ready(function(){
    initial();
    $("#name-submit").on("click",function(){
        var name = $("#name-input").val();
        if(name){
            start(name);
        }
    })
});
function initial(){
    $(".winner").hide();
    $(".question-one").hide();
    $(".question-two").hide();
    $(".question-three").hide();
    $(".question-four").hide();
    $(".question-five").hide();
    $(".game-over").hide();
}
function hideAllQuestions(){
    $(".question-one").hide();
    $(".question-two").hide();
    $(".question-three").hide();
    $(".question-four").hide();
    $(".question-five").hide();
}
function gameover(){
    $(".game-over").show();
    $(".name").hide();
}
function start(name){
    $(".question-one").show();
    $(".name").html("<h1>HI " + name +"</h1>")
    $("#one-submit").on("click", function(){
        var radioValue = $("input[name='one']:checked").val();
        if(radioValue == "c"){
            $(".question-one").hide();
            $(".name").hide();
            $(".question-two").show();
        }
        else{
            hideAllQuestions();
            gameover();
        }
    });
    $("#two-submit").on("click", function(){
        var radioValue = $("input[name='two']:checked").val();
        if(radioValue == "b"){
            $(".question-two").hide();
            $(".question-three").show();
        }
        else{
            hideAllQuestions();
            gameover();
        }
    });
    $("#three-submit").on("click", function(){
        var radioValue = $("input[name='three']:checked").val();
        if(radioValue == "a"){
            $(".question-three").hide();
            $(".question-four").show();
        }
        else{
            hideAllQuestions();
            gameover();
        }
    });
    $("#four-submit").on("click", function(){
        var radioValue = $("input[name='four']:checked").val();
        if(radioValue == "d"){
            $(".question-four").hide();
            $(".question-five").show();
        }
        else{
            hideAllQuestions();
            gameover();
        }
    });
    $("#five-submit").on("click", function(){
        var radioValue = $("input[name='five']:checked").val();
        if(radioValue == "a"){
            $(".question-five").hide();
            $.ajax({
                type:"POST",  
                url:"./winner.php",  
                data:"name="+name,  
                success:function(data){  
                    $(".winner").show();
                    $(".winner").html("<h1> YOU WON "+ name +"</h1>");
                    console.log(data);        
                }
            });
        }
        else{
            hideAllQuestions();
            gameover();
        }
    });
    $(".retry").on("click",function(){
        location.reload();
    })
}