
  mapboxgl.accessToken = 'pk.eyJ1IjoiZXZjb3J5IiwiYSI6ImNrZzhuZDUzeTBjZ2oyc3BjbmE1cmZrbnkifQ.lQXtozEwTyP33-8zN1hi_A';
  var map = new mapboxgl.Map({
    container: 'map',
    // style: 'mapbox://styles/evcory/ckmqruueh1e3c17pq0nifltu2',
    // center: [-98.131278,39.820130], // starting position
    // zoom: "3.25" // starting zoom


    style: 'mapbox://styles/evcory/cko6k9kdl2m9517kq8z3pah9g',
    center: [-96.131278,39.820130], // starting position
    zoom: "2.8" // starting zoom
  });


  map.addControl(new mapboxgl.NavigationControl());


  // popups
  map.on('click', function(e) {
    var features = map.queryRenderedFeatures(e.point, {
      layers: ['transrightsarehumanrights-15000'] // replace this with the name of the layer
    })
    if (!features.length) {
      return;
    }

    let feature = features[0];

    var popup = new mapboxgl.Popup({ offset: [0, -15] })
      .setLngLat(feature.geometry.coordinates)
      .setHTML(
      // '<h3>' + 
      // feature.properties.X + 
      // '</h3><p>' + 
      '<h3>' +
      feature.properties.place_info_full_name + 
      '</h3><p>' + 
      'Tweet date: ' +
      '<br>' +
      feature.properties.created_at + 
      '</p>')
      .addTo(map);

});


// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'transrightsarehumanrights-15000', function () {
  map.getCanvas().style.cursor = 'pointer';
  });
   
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'transrightsarehumanrights-15000', function () {
  map.getCanvas().style.cursor = '';
  });



//   map.on('hover', 'geo-json-states-bills', function (e) {
//     new mapboxgl.Popup()
//     .setLngLat(e.lngLat)

//     .setHTML(
//       '<h3>' +
//       e.features[0].properties.NAME + 
//       '</h3>' +
//       '<p>' +
//       'Bills: ' + 
//       e.features[0].properties.bill_count + 
//       '</p>'
//       )

//     // .setHTML(e.features[0].properties.bill_count)
//     .addTo(map);
//     });


//     // Change the cursor to a pointer when the mouse is over the states layer.
// map.on('mouseenter', 'geo-json-states-bills', function () {
//   map.getCanvas().style.cursor = 'pointer';
//   });
   
// // Change it back to a pointer when it leaves.
// map.on('mouseleave', 'tgeo-json-states-bills', function () {
//   map.getCanvas().style.cursor = '';
//   });



// // When the user moves their mouse over the state-fill layer, we'll update the
// // feature state for the feature under the mouse.
// map.on('mousemove', 'geo-json-states-bills', function (e) {
//   if (e.features.length > 0) {
//   if (hoveredStateId !== null) {
//   map.setFeatureState(
//   { source: 'bill_count', id: hoveredStateId },
//   { hover: false }
//   );
//   }
//   hoveredStateId = e.features[0].id;
//   map.setFeatureState(
//   { source: 'bill_count', id: hoveredStateId },
//   { hover: true }
//   );
//   }
//   });
   
//   // When the mouse leaves the state-fill layer, update the feature state of the
//   // previously hovered feature.
//   map.on('mouseleave', 'geo-json-states-bills', function () {
//   if (hoveredStateId !== null) {
//   map.setFeatureState(
//   { source: 'bill_count', id: hoveredStateId },
//   { hover: false }
//   );
//   }
//   hoveredStateId = null;
//   });