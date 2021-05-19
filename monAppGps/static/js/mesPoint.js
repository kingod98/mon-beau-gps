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

/*
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
} */




var myGeoJSON = 


  {"type":"Feature","features":

    [{"type":"Feature",
    "id":"f86c97ac-4980-44f5-9e23-7254c56a6eb5",
    "geometry":{"type":"Point","coordinates":[3.81468603,43.61202399]},
    "properties":{"name":"9"}},
    
    {"type":"Feature",
    "id":"ddd3ba5a-574f-4fd4-baf0-e09c37ae41e1",
    "geometry":{"type":"Point","coordinates":[3.81606118,43.61343086]},
    "properties":{"name":"10"}},
    
    {"type":"Feature",
    "id":"76dcc3a3-aae3-4f83-8eaa-64bff775b74c",
    "geometry":{"type":"Point","coordinates":[3.81075562,43.61391128]},
    "properties":{"name":"3"}},
    
    {"type":"Feature",
    "id":"8dc4a410-d852-4dac-b458-2b3c1438500c",
    "geometry":{"type":"Point","coordinates":[3.812713,43.61007596]},
    "properties":{"name":"6"}},
    
    {"type":"Feature",
    "id":"db7f6000-c771-4255-bfcb-51f8d79e5e8d",
    "geometry":{"type":"Point","coordinates":[3.81504477,43.61081189]},
    "properties":{"name":"8"}},

    {"type":"Feature",
    "id":"89a825a7-fdcd-4316-ae89-dac1fc43159f",
    "geometry":{"type":"Point","coordinates":[3.81582202,43.60979457]},
    "properties":{"name":"7"}},
    
    {"type":"Feature",
    "id":"a381b358-5401-4b1d-a077-015ed46b986a",
    "geometry":{"type":"Point","coordinates":[3.8173477,43.61521087]},
    "properties":{"name":"2"}},
    
    {"type":"Feature",
    "id":"55d6320a-0db4-430a-84c6-a9cfbf021271",
    "geometry":{"type":"Point","coordinates":[3.81050081,43.60977293]},
    "properties":{"name":"5"}},
    
    {"type":"Feature",
    "id":"2c9d6c70-6cda-4f58-a4c7-c4702136f02e",
    "geometry":{"type":"Point","coordinates":[3.81798214,43.61980403]},
    "properties":{"2":"","name":"1"}},
    
    {"type":"Feature",
    "id":"1b419bd0-04ac-49ef-92f6-dc505faa3590",
    "geometry":{"type":"Point","coordinates":[3.80792382,43.61237638]},
    "properties":{"name":"4"}}]}

export {myGeoJSON}
