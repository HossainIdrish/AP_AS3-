require([
  "esri/WebScene",
  "esri/views/SceneView",
  "esri/Camera",
  "esri/widgets/Home",
  "dojo/domReady!"
], function(WebScene, SceneView, Camera, Home) {

  var scene = new WebScene({
    portalItem: {
      id: "8046207c1c214b5587230f5e5f8efc77"  // Scene ID
    }
  });

  // Define the initial camera position to 42.3770° N, 71.1167° W
  var initialCamera = new Camera({
    position: {
      longitude: -71.1167,
      latitude: 42.3770,
      z: 2500 // Adjust elevation as needed
    },
    tilt: 0,
    heading: 0
  });

  var view = new SceneView({
    container: "viewDiv",
    map: scene,
    viewingMode: "global",
    camera: initialCamera, // Set to the initial camera position
    environment: {
      lighting: {
        date: new Date(),
        directShadowsEnabled: true,
        cameraTrackingEnabled: false
      }
    },
  });

  var homeBtn = new Home({
    view: view
  });

  // Add the home button to the top left corner of the view
  view.ui.add(homeBtn, "top-left");

  // Event listeners for buttons to change views
  document.getElementById('downtown').addEventListener('click', function() {
    view.goTo({
      target: camera
    });
  });

  document.getElementById('bu').addEventListener('click', function() {
    view.goTo({
      target: camera2
    });
  });

  document.getElementById('v3').addEventListener('click', function() {
    view.goTo({
      target: camera3
    });
  });

  // Button setup for display and adding to view UI
  var downtownButton = document.getElementById('downtown');
  var buButton = document.getElementById('bu');
  var v3Button = document.getElementById('v3');

  [downtownButton, buButton, v3Button].forEach(function(button) {
    button.style.display = 'flex';
    view.ui.add(button, 'top-right');
  });

});
