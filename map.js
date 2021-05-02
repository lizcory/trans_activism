mapboxgl.accessToken = 'pk.eyJ1IjoiZXZjb3J5IiwiYSI6ImNrZzhuZDUzeTBjZ2oyc3BjbmE1cmZrbnkifQ.lQXtozEwTyP33-8zN1hi_A';

var map = new mapboxgl.Map({
    container: 'map',
    // style: 'mapbox://styles/evcory/ckmqruueh1e3c17pq0nifltu2',
    style: 'mapbox://styles/evcory/cko6k9kdl2m9517kq8z3pah9g',
    center: [-98.131278,39.820130], // starting position
    zoom: "3.25" // starting zoom
  });


map.addControl(new mapboxgl.NavigationControl());

map.addControl(L.mapbox.legendControl(legend));

map.legendControl.addLegend(document.getElementById('legend').innerHTML)


// // cluster GeoJSON points
// var index = supercluster({radius: 40, maxZoom: 16}).load(geojson.features);
// // get GeoJSON clusters given a bounding box and zoom
// var clusters = index.getClusters([-180, -85, 180, 85], 2);
// // get a JSON vector tile in the same format as GeoJSON-VT
// var tile = index.getTile(7, 523, 125);
  

  // popups
  map.on('click', function(e) {
    var features = map.queryRenderedFeatures(e.point, {
      layers: ['transrightsarehumanrights-15000'] // replace this with the name of the layer
    });

    if (!features.length) {
      return;
    }


    var feature = features[0];

    console.log(feature);


    var popup = new mapboxgl.Popup({ offset: [0, -15] })
      .setLngLat(feature.geometry.coordinates)
      .setHTML(
        // '<h3>' + 
        // feature.properties.tweet + 
        // '</h3><p>' + 
        '<p>' + 
        feature.properties.created_at + 
        '</p><p>' + 
        feature.properties.place_info_full_name + 
        '</p>')
      // .setLngLat(feature.geometry.coordinates)
      .addTo(map);

  });
