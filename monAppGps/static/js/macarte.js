var map = L.map('map').setView([43, 3], 5);

L.tileLayer('https://api.maptiler.com/maps/toner/{z}/{x}/{y}.png?key=vla4kokt42kz0fo59w2O',{
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 1,
    attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
    crossOrigin: true
    }).addTo(map);

var laBranche = L.icon({
    iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
    shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',//la ptite ombre pour la branche
    iconSize: [38,95],
    iconAnchor: [22,94],
    shadowAnchor: [4,62],//pareil pour l'ombre
    popupAnchor: [12,-90]//Pour bien placer la popup sur l'icon, pour bien voir la ptite branche
    })
    
/*
    var intervalID = setInterval(update_values,500);

    var lon = null;

    function getRandomFloat(min, max) {
      return Math.random() * (max - min) + min; }


      var app = {};
      var myjson; //decl&arer la comme globale
  var $SCRIPT_ROOT = { request.script_root|tojson|safe };

      function update_values() {
  
        
        $.getJSON($SCRIPT_ROOT + '/_stuff1', 
                   
        function(data) {
          $('#result').text(data.result) 
          $('#result1').text(data.result1)
          console.log(data)
          lon = data.result
          console.log(lon);
          myjson =data; //on rentre dedan pour lui attroibué la data
          dataready();  //puis balance la fonction une fois que c'est fait (pas avant !!!)
          });
         
        } /////////////////////////// on arrive a yu accéder en dehor de update_value() !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        function dataready(){
             console.log(myjson)
             
          };
*/
var maPosition = L.marker([43,36],{icon: laBranche}).addTo(map);