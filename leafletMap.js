const Hhtml_script = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
    integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
    crossorigin=""/>
     <!-- Make sure you put this AFTER Leaflet's CSS -->
    <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
    integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
    crossorigin=""></script>
    <style>
      #map {
        width: 100%; 
        height: 100vh; 
      }
    </style>
    <title>Mapa</title>
</head>


<body>
    
   
    <div id="map"></div>
    
    
</body>


<script>
    const map = L.map("map",{
      maxZoom: 18,
      minZoom: 16,
      maxBounds:[
          //south west
          [-0.010621, -51.089818],
          //north east
          [0.002849, -51.081320]
        ],
    });
      // Initializes map
      map.setView([-0.002893, -51.083855], 17);
    
      // Sets initial coordinates and zoom level
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        
        attribution:
          '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);
      
      //Marcador fixo
      var popup = L.popup()
        .setLatLng([-0.002893, -51.083855])
        .setContent("Teste do popup.")
        .openOn(map);

        L.marker([-0.002944, -51.084273])
        .addTo(map)
        .bindPopup("Bloco de computação.");
      
    //Adiciona um marcador ou um popup
      function onMapClick(e) {
        popup
          .setLatLng(e.latlng)
          .setContent("You clicked the map at " + e.latlng.toString())
          .openOn(map);
      }

      function addMarker(e) {
        L.marker(e.latlng)
          .addTo(map)
          .bindPopup("Teste <br> <input type= 'text' > ");
      }

      map.on("click", addMarker);

      
      
    </script>
  </body>
</html>
    
    const map = L.map('map').setView([51.505, -0.09], 13);
</script>
</html>

`

export default Hhtml_script