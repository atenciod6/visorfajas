require([
  "esri/Map",
  "esri/layers/FeatureLayer",
  "esri/layers/MapImageLayer",
  "esri/views/MapView",
  "esri/widgets/BasemapGallery",
  "esri/widgets/Home",
  "esri/widgets/Expand",
  "esri/widgets/LayerList",
  "esri/widgets/Legend",
  "esri/widgets/Locate",
  "esri/widgets/Search",
  "esri/widgets/ScaleBar"
  
], function(Map, FeatureLayer, MapImageLayer, MapView, BasemapGallery, Home, Expand, LayerList, Legend, Locate, Search, ScaleBar){
  var map = new Map({
    basemap: "streets"
  });
  var view = new MapView({
    container: "viewDiv",  // Reference to the scene div created in step 5
    map: map,  // Reference to the map object created before the scene
    zoom: 6,  // Sets zoom level based on level of detail (LOD)
    center: [-75, -9]  // Sets center point of view using longitude,latitude
  });

  var MILBase = new MapImageLayer({
          url: "http://geo.ana.gob.pe/arcgis/rest/services/SERV_CARTOGRAFIA_BASE_UTM18S/MapServer",
          title: "Cartografía Base"
        });
  map.add(MILBase);
  
    var MILAmbAdm = new MapImageLayer({
        url: "http://geo.ana.gob.pe/arcgis/rest/services/SERV_AMBITOS_ADMINISTRATIVOS/MapServer",
        title: "Ámbitos Administrativos",
        sublayers:[
            {
                id: 3,
                title: "Consejo de Recursos Hídricos de Cuenca",
                visible: false,
                popupTemplate: PUcrhc
            },{
                id: 2,
                title: "Unidades hidrográficas",
                visible: false,
                popupTemplate: PUuh
            },{
                id: 1,
                title: "Administración Local de Agua",
                visible: true,
                popupTemplate: PUala
            },{
                id: 0,
                title: "Autoridad Administrativa del Agua",
                visible: true,
                popupTemplate: PUaaa
            }
        ]
    });
    map.add(MILAmbAdm);

    var FLPunCri = new FeatureLayer({
        url: "http://geo.ana.gob.pe/arcgis/rest/services/SERV_PUNTOS_CRITICOS/MapServer/0",
        title: "Puntos Críticos",
        outFields: ["*"],
        popupTemplate: PUPunCri
    });
    map.add(FLPunCri);

    var FLFajas = new FeatureLayer({
        url: "http://geo.ana.gob.pe/arcgis/rest/services/GeoHidroV2/GESTION_RIESGO_DESASTRE/MapServer/35",
        title: "Fajas Marginales",
        outFields: ["*"],
        popupTemplate: PUfajas
    });
    map.add(FLFajas);
    
    var searchWidget = new Search({
        view: view
    });
    // Add the search widget to the top right corner of the view
    view.ui.add(searchWidget, {
        position: "top-right"
    });
    
    var layerList = new LayerList({
        view: view,
        container: document.createElement("div")
      });
      
      // Create an Expand instance and set the content
      // property to the DOM node of the basemap gallery widget
      var layerListExpand = new Expand({
        view: view,
        content: layerList,
        expandTooltip: "Lista de capas"
      });
      // Add the expand instance to the ui
      view.ui.add(layerListExpand, "top-right");
  
  
    var basemapGallery = new BasemapGallery({
        view: view,
        container: document.createElement("div")
    });
      // Create an Expand instance and set the content
      // property to the DOM node of the basemap gallery widget
      // Use an Esri icon font to represent the content inside
      // of the Expand widget
    var bgExpand = new Expand({
        view: view,
        content: basemapGallery,
        expandTooltip: "Galería de Mapas Base"
    });
    // close the expand whenever a basemap is selected
    basemapGallery.watch("activeBasemap", function() {
        var mobileSize = view.heightBreakpoint === "xsmall" || view.widthBreakpoint ===
          "xsmall";
        if (mobileSize) {
          bgExpand.collapse();
        }
    });
    // Add the expand instance to the ui
    view.ui.add(bgExpand, "top-right");

  var logo = document.createElement("img");
      logo.src = "images/logo.png";
  view.ui.add(logo, "top-left");

    var homeBtn = new Home({
      view: view
    });

  // Add the home button to the top left corner of the view
  view.ui.add(homeBtn, "top-left");
  
  var locateBtn = new Locate({
        view: view
      });
  // Add the locate widget to the top left corner of the view
  view.ui.add(locateBtn, {
    position: "top-left"
  });

  var scaleBar = new ScaleBar({
    view: view,
    unit: "dual" // The scale bar displays both metric and non-metric units.
  });
  // Add the widget to the bottom left corner of the view
  view.ui.add(scaleBar, {
    position: "bottom-left"
  });
 
  var legend = new Legend({
      view: view,
        layerInfos: [{
          layer: FLFajas,
          title: "Fajas Marginales"
        },{
          layer: FLPunCri,
          title: "Puntos Críticos"
        },{
          layer: MILAmbAdm,
          title: "Ámbitos Administrativos"
        },{
          layer: MILBase,
          title: "Cartografía Base"
        }],
        container: document.createElement("div")
    });
  var lExpand = new Expand({
        view: view,
        content: legend,
        expandTooltip: "Leyenda"
    });
    
    // Add widget to the bottom right corner of the view
      view.ui.add(lExpand, "top-right");     
      
      view.ui.move("zoom", "top-left");
});