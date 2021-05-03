/*
marche paaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaas
ca serait bien de séparer le script logo du html principal
*/


function afficherLogo (lacarte){
    L.Control.Watermark = L.Control.extend({
    onAdd: function(lacarte) {
        var img = L.DomUtil.create('img');
        
        img.src = '{{url_for('static', filename='logo.jpg')}}';
        img.style.width = '250px';
        
        return img;
    },
    
    onRemove: function(lacarte) {
        // Nothing to do here
    }
});

L.control.watermark = function(opts) {
    return new L.Control.Watermark(opts);
}

L.control.watermark({ position: 'bottomleft' }).addTo(lacarte);

}

export {afficherLogo}