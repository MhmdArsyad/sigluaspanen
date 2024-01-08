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
var format_LuasPanenhaJerukSiam_0 = new ol.format.GeoJSON();
var features_LuasPanenhaJerukSiam_0 = format_LuasPanenhaJerukSiam_0.readFeatures(json_LuasPanenhaJerukSiam_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LuasPanenhaJerukSiam_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LuasPanenhaJerukSiam_0.addFeatures(features_LuasPanenhaJerukSiam_0);var lyr_LuasPanenhaJerukSiam_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LuasPanenhaJerukSiam_0, 
                style: style_LuasPanenhaJerukSiam_0,
    title: 'Luas Panen [ha] Jeruk Siam <br />\
    <img src="styles/legend/LuasPanenhaJerukSiam_0_0.png" /> Sedikit<br />\
    <img src="styles/legend/LuasPanenhaJerukSiam_0_1.png" /> Sedang<br />\
    <img src="styles/legend/LuasPanenhaJerukSiam_0_2.png" /> Banyak<br />'
        });

lyr_LuasPanenhaJerukSiam_0.setVisible(true);
var layersList = [baseLayer,lyr_LuasPanenhaJerukSiam_0];
lyr_LuasPanenhaJerukSiam_0.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'JerukSiam': 'JerukSiam', });
lyr_LuasPanenhaJerukSiam_0.set('fieldImages', {'Kecamatan': 'TextEdit', 'JerukSiam': 'TextEdit', });
lyr_LuasPanenhaJerukSiam_0.set('fieldLabels', {'Kecamatan': 'header label', 'JerukSiam': 'inline label', });
lyr_LuasPanenhaJerukSiam_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});