var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LuasPanenhaCabai_0 = new ol.format.GeoJSON();
var features_LuasPanenhaCabai_0 = format_LuasPanenhaCabai_0.readFeatures(json_LuasPanenhaCabai_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LuasPanenhaCabai_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LuasPanenhaCabai_0.addFeatures(features_LuasPanenhaCabai_0);var lyr_LuasPanenhaCabai_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LuasPanenhaCabai_0, 
                style: style_LuasPanenhaCabai_0,
    title: 'Luas Panen [ha] Cabai<br />\
    <img src="styles/legend/LuasPanenhaCabai_0_0.png" /> Sedikit<br />\
    <img src="styles/legend/LuasPanenhaCabai_0_1.png" /> Sedang<br />\
    <img src="styles/legend/LuasPanenhaCabai_0_2.png" /> Banyak<br />'
        });

lyr_LuasPanenhaCabai_0.setVisible(true);
var layersList = [baseLayer,lyr_LuasPanenhaCabai_0];
lyr_LuasPanenhaCabai_0.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'CbBesar': 'CbBesar', 'CbKecil': 'CbKecil', });
lyr_LuasPanenhaCabai_0.set('fieldImages', {'Kecamatan': 'TextEdit', 'CbBesar': 'TextEdit', 'CbKecil': 'TextEdit', });
lyr_LuasPanenhaCabai_0.set('fieldLabels', {'Kecamatan': 'header label', 'CbBesar': 'inline label', 'CbKecil': 'inline label', });
lyr_LuasPanenhaCabai_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});