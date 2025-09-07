
async function loadLayerConfig() {
    var sourceConfig = {
        //"dod_data":{type:"vector",url: "mapbox://raanan-g.5xvfacr0"}
    };
    var layerConfig = [
        // {
        //     "id":layer,
        //     "type":"fill",
        //     'source': "dod_data",
        //     'layout': {'visibility': "visible"},
        //     'paint': {
        //         'fill-color': [
        //             'case', // if null --> grey
        //             ['==', ['get', layer], null],
        //             "#d3d3d3",
        //             // if value exists, display color scheme
        //             [
        //                 'interpolate',
        //                 ['linear'],
        //                 ['get', layer],
        //     20,"#ffff00",40,"#81f15e",60,"#00cd8e",
        //     80,"#009c9b",100,"#00688b",120,"#002f61"
        //             ]
        //             ],
        //         'fill-opacity':0
        // },
        //     'source-layer': 'dod_geodata_with_delta-717pvo'
        // },
    ];

    return sourceConfig, layerConfig;
}

async function initLayers(map, sourceConfig, layerConfig) {

    Object.entries(sourceConfig).forEach(([name, source]) => {
        map.addSource(name, source);
    });

    layerConfig.forEach(function(layer, i) {
        map.addLayer(layer);
    });
}

window.initLayers = initLayers;

window.loadLayerConfig = loadLayerConfig;