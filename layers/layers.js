var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_apphh_schulen_dwh_1 = new ol.format.GeoJSON();
var features_apphh_schulen_dwh_1 = format_apphh_schulen_dwh_1.readFeatures(json_apphh_schulen_dwh_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_apphh_schulen_dwh_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_apphh_schulen_dwh_1.addFeatures(features_apphh_schulen_dwh_1);cluster_apphh_schulen_dwh_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_apphh_schulen_dwh_1
});
var lyr_apphh_schulen_dwh_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_apphh_schulen_dwh_1, 
                style: style_apphh_schulen_dwh_1,
                interactive: true,
                title: '<img src="styles/legend/apphh_schulen_dwh_1.png" /> app:hh_schulen_dwh'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_apphh_schulen_dwh_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_apphh_schulen_dwh_1];
lyr_apphh_schulen_dwh_1.set('fieldAliases', {'Name': 'Name', 'Schul_ID': 'ID', 'Schulform': 'Schulform', 'Schulicon': 'Schulicon', 'Adresse': 'Adresse', 'Ort': 'Ort', 'bezirk': 'bezirk', 'stadtteil': 'stadtteil', 'Telefon': 'Telefon-Nr.', 'FAX': 'FAX', 'rechtsform': 'rechtsform', 'internet': 'Homepage', 'email': 'email', 'is_rebbz': 'is_rebbz', 'name_rebbz': 'name_rebbz', 'schueleranzahl': 'Schüleranzahl (2019)', 'schueleranzahl_schuljahr': 'schueleranzahl_schuljahr', });
lyr_apphh_schulen_dwh_1.set('fieldImages', {'Name': 'TextEdit', 'Schul_ID': 'TextEdit', 'Schulform': 'TextEdit', 'Schulicon': 'Hidden', 'Adresse': 'TextEdit', 'Ort': 'Hidden', 'bezirk': 'Hidden', 'stadtteil': 'Hidden', 'Telefon': 'TextEdit', 'FAX': 'Hidden', 'rechtsform': 'Hidden', 'internet': 'TextEdit', 'email': 'Hidden', 'is_rebbz': 'Hidden', 'name_rebbz': 'Hidden', 'schueleranzahl': 'TextEdit', 'schueleranzahl_schuljahr': 'Hidden', });
lyr_apphh_schulen_dwh_1.set('fieldLabels', {'Name': 'inline label', 'Schul_ID': 'inline label', 'Schulform': 'inline label', 'Adresse': 'inline label', 'Telefon': 'inline label', 'internet': 'inline label', 'schueleranzahl': 'inline label', });
lyr_apphh_schulen_dwh_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});