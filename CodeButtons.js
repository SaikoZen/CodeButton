$(document).ready(function(){
    
    var button = $("button").addClass("defaultButton");
    
    $("#reset").click(button);

    var makeRed = $("button").click(function(){

    $(this).addClass("redButton");
    
    })

/*    $("#button1").click(function(){
        $(this).addClass("redButton");
    })
    $("#button2").click(function(){
        $(this).addClass("redButton");
    })
    $("#button3").click(function(){
        $(this).addClass("redButton");
    })
    $("#button5").click(function(){
        $(this).addClass("redButton"); 
    }) */

    $("#button4").click(function(){
        $(this).addClass("greenButton");
        
        $("#button2").click(function(){
            $(this).addClass("greenButton");

            $("#button3").click(function(){
                $(this).addClass("greenButton");

                $("#button5").click(function(){
                    $(this).addClass("greenButton");

                    $("#button1").click(function(){
                        $(this).addClass("greenButton");
                        alert("You have unlocked the code");
                        $("#reset").show();

                          $("#reset").click(function(){
                            $("button").addClass(button);   
                          })
                    })
                })
            })
        })

    }); 

  
    


});















