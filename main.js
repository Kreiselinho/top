var map = L.map('map').setView([48.139722, 11.574444], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        var marker = L.marker([48.139722, 11.574444]).addTo(map);
        marker.bindPopup("<b>Hello Munich!</b><br>I am a popup.").openPopup();