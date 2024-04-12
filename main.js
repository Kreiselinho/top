let lat = 48.139722;
let lng = 11.574444;
let zoom = 13;


let map = L.map('map', {
    center: [lat, lng],
    zoom: zoom
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.control.scale({
    imperial: false
}).addTo(map);

let jsonData = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-124.636604, 47.908683]
            },
            "properties": {
                "nr": 1,
                "user": "webmapping",
                "name": "La Push, Washington",
                "wikipedia": "https://de.wikipedia.org/wiki/La_Push_(Washington)"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [173.68222, -42.41167]
            },
            "properties": {
                "nr": 2,
                "user": "lealucia",
                "name": "Bamberg",
                "wikipedia": "https://de.wikipedia.org/wiki/Bamberg"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [12.566667, 43.35]
            },
            "properties": {
                "nr": 3,
                "user": "Ylenia",
                "name": "Gubbio",
                "wikipedia": "https://de.wikipedia.org/wiki/Gubbio"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-19.511292, 63.5321038]
            },
            "properties": {
                "nr": 4,
                "user": "danielwebmap",
                "name": "Skógafoss Waterfall",
                "wikipedia": "https://de.wikipedia.org/wiki/Skógafoss"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-19.063889, 63.988611]
            },
            "properties": {
                "nr": 5,
                "user": "meritkoch",
                "name": "Landmannalaugar",
                "wikipedia": "https://de.wikipedia.org/wiki/Landmannalaugar"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [10.979589, 47.416604]
            },
            "properties": {
                "nr": 6,
                "user": "NiklasSchw",
                "name": "Schneefernerhaus",
                "wikipedia": "https://de.wikipedia.org/wiki/Schneefernerhaus"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [8.27, 50]
            },
            "properties": {
                "nr": 7,
                "user": "czackl",
                "name": "Mainz",
                "wikipedia": "https://de.wikipedia.org/wiki/Mainz"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [175.679722, -37.8575]
            },
            "properties": {
                "nr": 8,
                "user": "madeleinehll",
                "name": "Hobbiton Movie Set, Auckland",
                "wikipedia": "https://en.wikipedia.org/wiki/Hobbiton_Movie_Set"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [7.86675, 45.9369]
            },
            "properties": {
                "nr": 9,
                "user": "sophiest01",
                "name": "Dufourspitze",
                "wikipedia": "https://de.wikipedia.org/wiki/Dufourspitze"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [11.286111, 47.32]
            },
            "properties": {
                "nr": 10,
                "user": "Johanna135",
                "name": "Gipfelstürmernadel",
                "wikipedia": "https://de.wikipedia.org/wiki/Gipfelstürmernadel"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [11.421666666667, 47.426944444444]
            },
            "properties": {
                "nr": 11,
                "user": "amjusi",
                "name": "Karwendel",
                "wikipedia": "https://www.wikiwand.com/de/Karwendel"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [6.363708, 49.469972]
            },
            "properties": {
                "nr": 12,
                "user": "laurent2997",
                "name": "Schengen",
                "wikipedia": "https://de.wikipedia.org/wiki/Schengen"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [77.516667, 34.15]
            },
            "properties": {
                "nr": 13,
                "user": "marcelboehm",
                "name": "Ladakh",
                "wikipedia": "https://de.wikipedia.org/wiki/Ladakh"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [13.433611, 47.776389]
            },
            "properties": {
                "nr": 14,
                "user": "annagruber263",
                "name": "Salzkammergut",
                "wikipedia": "https://de.wikipedia.org/wiki/Salzkammergut"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [11.574444, 48.139722]
            },
            "properties": {
                "nr": 15,
                "user": "kreiselinho",
                "name": "Munich",
                "wikipedia": "https://de.wikipedia.org/wiki/M%C3%BCnchen"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [12.970926, 67.8802837]
            },
            "properties": {
                "nr": 16,
                "user": "bendai98",
                "name": "Lofoten",
                "wikipedia": "Top Page"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-16.64235, 28.27273]
            },
            "properties": {
                "nr": 17,
                "user": "marcfk",
                "name": "Teide National Park",
                "wikipedia": "https://de.wikipedia.org/wiki/Teide"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [11.616667, 52.133333]
            },
            "properties": {
                "nr": 18,
                "user": "ernstanton",
                "name": "Magdeburg",
                "wikipedia": "https://de.wikipedia.org/wiki/Magdeburg"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [11.799173, 45.873466]
            },
            "properties": {
                "nr": 19,
                "user": "laurauniibk",
                "name": "Monte Grappa",
                "wikipedia": "https://de.wikipedia.org/wiki/Monte_Grappa"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [11.250278, 46.816944]
            },
            "properties": {
                "nr": 20,
                "user": "sebspr",
                "name": "Passeiertal",
                "wikipedia": "https://de.wikipedia.org/wiki/Passeier"
            }
        }
    ]
};

L.geoJSON(jsondata, {}).bindPopup(function (layer) {
    let prop = layer.feature.properties
    return `
    <b>${prop.name}</b>
    <ul>
        <li>Breite: ${layer.feature.geometry.coordinates[1].toFixed(5)} </li>
        <li>Länge: ${layer.feature.geometry.coordinates[0].toFixed(5)} </li>
        <li><a href = "https://${layer.feature.properties.user}.github.io/top">Etappenseite</a> </li>
        <li><a href = "${layer.feature.properties.wikipedia}">Wikipediaseite</a> </li>
    </ul>
`;
}).addTo(map);
