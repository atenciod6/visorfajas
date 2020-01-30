var PUaaa = {
  title:"Autoridad Administrativa del Agua: {NAME_AAA}",
  content:[{
      type: "fields",
      fieldInfos: [{
          fieldName: "AREA_KM2",
          label: "Área (km²)",
          visible: true,
            format: {
            digitSeparator: true,
            places: 0
            }
      }]
  }]
};

var PUala = {
    title:"Administración Local de Agua: {NAME_ALA}",
    content:[{
        type: "fields",
        fieldInfos: [{
            fieldName: "AREA_KM2",
            label: "Área (km²)",
            visible: true,
              format: {
              digitSeparator: true,
              places: 2
              }
        }]
    }]
};

var PUuh = {
    title:"Unidad hidrográfica: {NOMBRE}",
    content:[{
        type: "fields",
        fieldInfos: [{
            fieldName: "AREA_KM2",
            label: "Área (km²)",
            visible: true,
              format: {
              digitSeparator: true,
              places: 2
              }
        }]
    }]
};

var PUcrhc = {
    title:"Consejo de Recursos Hídricos de Cuenca: {NOMBRE}",
    content:[{
        type: "fields",
        fieldInfos: [{
            fieldName: "AREA_KM2",
            label: "Área (km²)",
            visible: true,
              format: {
              digitSeparator: true,
              places: 2
              }
        }]
    }]
};

var PUfajas = { // autocasts as new PopupTemplate()
    title: "Fajas margianles: {DBAnaPublic.IDE.FajasMarginales.NOMCUE}",
    content: [{
      // It is also possible to set the fieldInfos outside of the content
      // directly in the popupTemplate. If no fieldInfos is specifically set
      // in the content, it defaults to whatever may be set within the popupTemplate.
      type: "fields",
      fieldInfos: [{
        fieldName: "DBAnaPublic.IDE.FajasMarginales.TIPCUE",
        label: "Tipo"
      }, {
        fieldName: "DBAnaPublic.IDE.FajasMarginales.MARGEN",
        label: "Margen"
      }, {
        fieldName: "DBAnaPublic.IDE.FajasMarginales.RESAPROB",
        label: "Resolución de aprobación"
      },{
        fieldName: "DBAnaPublic.IDE.FajasMarginales.ESTE",
        label: "Este",
        format: {
          digitSeparator: true,
          places: 2
        }
      },{
        fieldName: "DBAnaPublic.IDE.FajasMarginales.NORTE",
        label: "Norte",
        format: {
          digitSeparator: true,
          places: 2
        }
      },{
        fieldName: "DBAnaPublic.IDE.FajasMarginales.ZONAUTM",
        label: "Zona UTM"
      },{
        fieldName: "DBAnaPublic.IDE.FajasMarginales.NOMDEP",
        label: "Departamento"
      },{
        fieldName: "DBAnaPublic.IDE.FajasMarginales.NOMPROV",
        label: "Provincia"
      },{
        fieldName: "DBAnaPublic.IDE.FajasMarginales.NOMDIST",
        label: "Distrito"
      },{
        fieldName: "DBANAPUBLIC.IDE.FAJASLINK.LINK",
        label: "Descarga",
        visible: false
      }]
    },{
        type: "text",
        text: "<b>Ver resolución de aprobación</b>"
      },{
            type: "media",
            mediaInfos: [{
//                title: "Ver enlace",
//                caption: "tree species",
                type: "image",
                value: {
                    sourceURL: "http://ftp.ana.gob.pe/docs/images/ResolucionView.jpg",
                    linkURL: "{DBANAPUBLIC.IDE.FAJASLINK.LINK}"
                }
            }]
        }]
  };

var PUPunCri = { // autocasts as new PopupTemplate()
    title: "Puntos críticos: {ANIO}",
    content: [{
      // It is also possible to set the fieldInfos outside of the content
      // directly in the popupTemplate. If no fieldInfos is specifically set
      // in the content, it defaults to whatever may be set within the popupTemplate.
      type: "fields",
      fieldInfos: [
        {
            fieldName: "ACTIVIDAD",
            label: "Actividad"
        },{
            fieldName: "NOMDEP",
            label: "Departamento"
        },{
            fieldName: "NOMPROV",
            label: "Provincia"
        },{
            fieldName: "NOMDIST",
            label: "Distrito"
        },{
            fieldName: "SECTOR",
            label: "Sector"
        },{
            fieldName: "ESTE",
            label: "Este",
            format: {
              digitSeparator: true,
              places: 2
            }
        },{
            fieldName: "NORTE",
            label: "Norte",
            format: {
              digitSeparator: true,
              places: 2
            }
        },{
            fieldName: "NOMAAA",
            label: "AAA"
      },{
            fieldName: "NOMALA",
            label: "ALA"
      },{
            fieldName: "PRESUP",
            label: "Presupuesto (S/)",
            format: {
              digitSeparator: true,
              places: 2
            }
        },{
            fieldName: "VIVIENDAS",
            label: "Viviendas",
            format: {
              digitSeparator: true,
              places: 0
            }
        },{
            fieldName: "AREACULT",
            label: "Cultivos (ha)",
            format: {
              digitSeparator: true,
              places: 2
            }
        },{
            fieldName: "VIA",
            label: "Carreteras (km)",
            format: {
              digitSeparator: true,
              places: 2
            }
        },{
            fieldName: "RIO_QDA",
            label: "Cuerpo de agua"
      },{
            fieldName: "relationships/0/ENLACE",
            label: "Zona UTM",
            visible: false
      }]
    },{
        type: "text",
        text: "<b>Ver ficha descriptiva</b>"
      }
        /*"<a href={relationships/0/ENLACE}><b>Ver resolución de aprobación</b></a>"*/
        ,{
            type: "media",
            mediaInfos: [{
                /*title: "Ver enlace",
                caption: "tree species",*/
                type: "image",
                value: {
                    sourceURL: "http://ftp.ana.gob.pe/docs/images/ResolucionView.jpg",
                    linkURL: "{relationships/0/ENLACE}"
                }
            }]
        }
]
  };