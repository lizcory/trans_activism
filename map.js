

  mapboxgl.accessToken = 'pk.eyJ1IjoiZXZjb3J5IiwiYSI6ImNrZzhuZDUzeTBjZ2oyc3BjbmE1cmZrbnkifQ.lQXtozEwTyP33-8zN1hi_A';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/evcory/ckmqruueh1e3c17pq0nifltu2',
    center: [-98.131278,39.820130], // starting position
    zoom: "3.25" // starting zoom
  });


  map.addControl(new mapboxgl.NavigationControl());


  // popups
  map.on('click', function(e) {
    var features = map.queryRenderedFeatures(e.point, {
      layers: ['transrightsarehumanrights-15000'] // replace this with the name of the layer
    });
  
    if (!features.length) {
      return;
    }
  
    var feature = features[0];
  
    var popup = new mapboxgl.Popup({ offset: [0, -15] })
      .setLngLat(feature.geometry.coordinates)
      .setHTML('<h3>' + feature.properties.tweet + '</h3><p>' + feature.properties.created_at + '</p><p>' + feature.properties.place_info_full_name + '</p>')
      .addTo(map);

    

    // var features_state = map.queryRenderedFeatures(e.point, {
      // layers: ['geo-json-states-bills'] // replace this with the name of the layer
    // });
    // 
    // if (!features_state.length) {
      // return;
    // }

    // var popup_state = new mapboxgl.Popup({ offset: [0, -15] })
      // .setLngLat(feature.geometry.coordinates)
      // .setHTML('<h3>' + feature.properties.bill_count + '</h3>')
      // .addTo(map);
  
});
