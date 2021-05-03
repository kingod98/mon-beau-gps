    /* marche bien
    malheureusement j'ai du tout redeclarer dans perimetre.py
    il faut centraliser, je veux qu'un seul fichier dans lequel déclarer mes points sur la cartes
    */
    
    
    function onEachFeature(feature, layer) {           // fonction popup
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.name) {
        layer.bindPopup(feature.properties.name);
    }
}        


export { onEachFeature} 

 var myGeoJSON = {"type": "Feature", "features":
 
                        [{"type": "Feature", 
                            "id": "0ba4eb16-0992-4060-8f56-19f8324797fe", 
                      "geometry": {"type": "Point","coordinates": [3.66190904, 43.3987499]},
                    "properties": {"name": "skatepark"}}, 

                        {"type": "Feature", 
                           "id": "10d568b7-76a2-47a9-b13f-dbc85ebfae85", 
                     "geometry": {"type": "Point","coordinates": [3.70212835, 43.43624723]}, 
                   "properties": {"name": "seteagglo"}}, 

                        {"type": "Feature", 
                           "id": "fcdf5ea3-d835-4e99-9cd4-aee047b0e081", 
                     "geometry": {"type": "Point","coordinates": [3.6699483, 43.40873483]},
                   "properties": {"name": "auchan"}}, 

                        {"type": "Feature",
                           "id": "d8f17189-9f0b-4a97-b21f-7598d53ec85e", 
                     "geometry": {"type": "Point","coordinates": [3.71465234, 43.41354452]}, 
                   "properties": {"name": "mcdo"}},

                        {"type": "Feature", 
                           "id": "1351e404-73fd-410d-9862-0f187e995ec6", 
                     "geometry": {"type": "Point","coordinates": [3.70144955, 43.39300369]}, 
                   "properties": {"name": "briselame"}}, 

                        {"type": "Feature",
                           "id": "21cc06c4-cb37-45be-97f7-29a5dd9f1ee3", 
                     "geometry": {"type": "Point","coordinates": [3.70104226, 43.40378048]}, 
                   "properties": {"name": "lidl"}}, 

                        {"type": "Feature", 
                           "id": "a43a65b9-917c-4f18-a0c6-37e1932a0165", 
                     "geometry": {"type": "Point","coordinates": [3.69679972, 43.41241039]}, 
                   "properties": {"name": "gare"}},

                        {"type": "Feature", 
                           "id": "c45b513e-c798-4dc4-9438-71633d561c97", 
                     "geometry": {"type": "Point","coordinates": [3.6792865, 43.39280638]}, 
                   "properties": {"name": "corniche"}}
                   ]
} 


export {myGeoJSON}