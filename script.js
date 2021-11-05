$(document).ready(function(){
    $("#logo2").fadeOut(function(){
        $("#logo2").show(2000);
    });
 $("#pgf1").hide(function(){
    $("#pgf1").show(2000);
    });

});

$(document).ready(function(){
    $("#com1").hide(function(){
        });
 
    $("#rimgA").click(function(){
    $("#com1").slideDown(1000);
        });
        
});

$(document).ready(function(){
    $("#com2").hide(function(){
    });
 
 $("#rimgB").click(function(){
 $("#com2").slideDown(1000);
 
    });
});
$(document).ready(function(){
 $("#com3").hide(function(){
     });
 $("#rimgC").click(function(){
    $("#com3").slideDown(1000);
    
   });
});

$(document).ready(function(){
$("#btn2").click(function(){
$(".flightform").fadeOut();
    });

$(".msg").hide();
});

$(document).ready(function(){
$("#btn2").click(function(){
$(".msg").fadeIn(3000);
    });

});
$(document).ready(function(){
$("#searchb").hide();
$("#btnh").click(function(){
$("#searchb").show();
    });
});

$(document).ready(function(){
    $("#himg").hide(function(){
    });
 
 $("#home1").click(function(){
     $("#home1").hide();
 $("#himg").fadeIn(1000);
 
    });
});

var app = angular.module('appone', []);
app.controller('apponeCtrl', function($scope) {
   
 $scope.city=['Beijing','Moscow','New York','Toronto','Berlin','Mexico City','Vancouver'];
     
});

