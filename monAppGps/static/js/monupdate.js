var $SCRIPT_ROOT = {{ request.script_root|tojson|safe }};

var intervalID = setInterval(update_values,500);

function getRandomFloat(min, max) {
    return (Math.random() * (max - min) + min) };


var myjson; //decl&arer la comme globale


function update_values() {
        
    $.getJSON($SCRIPT_ROOT + '/_stuff', 
        function(data) {
          $('#result').text(data.result) 
          $('#result1').text(data.result1)
          console.log(data);
          console.log(lon);
          myjson =data; //on rentre dedan pour lui attroibué la dat
          });
         
} /////////////////////////// on arrive a yu accéder en dehor de update_value() !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!




       
 