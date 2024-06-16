/*******************************************************************************
 * Model *
 ******************************************************************************/
var m = {};

m.selectedImgCol = ee.ImageCollection('users/harleyzhang/StepwatAppRasters/emptyImgCol');
m.empty = ee.ImageCollection('users/harleyzhang/StepwatAppRasters/emptyImgCol'); // duplicate empty imgcol to reset download url
m.col = ee.Image('users/harleyzhang/STEPWAT2bands');

m.biomassPalette = ["#F7FCB9", "#EDF8B0", "#E0F3A7", "#D1EC9E", "#BFE596", "#ADDD8E", "#98D486", "#83CA7D", "#6CC173", "#54B668", "#41AB5D", "#329C51", "#288C47", "#1D7B3E", "#106A37", "#005A32"];
m.changePalette = ["#800026", "#bd0026", "#e31a1c", "#fc4e2a", "#fd8d3c", "#feb24c", "#fed976", "#ffeda0", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"];

m.imgInfo = {
  bands: {
    ////////// BIG SAGEBRUSH
    'Potential Big Sagebrush Biomass, Current (1981-2010), Light Grazing': {
      bname: 'BigSagebrushBiomass_LightGrazing_1981-2010',
      vis: {
        min: 162,
        max: 999,
      }
    },
    'Change in Potential Big Sagebrush Biomass, Mid-Century (2031-2060), RCP4.5, Light Grazing': {
      bname: 'ChangeBigSagebrushBiomass_LightGrazing_RCP45_2031-2060',
      vis: {
        min: -380,
        max: 380,
      }
    },
    'Change in Potential Big Sagebrush Biomass, Mid-Century (2031-2060), RCP8.5, Light Grazing': {
      bname: 'ChangeBigSagebrushBiomass_LightGrazing_RCP85_2031-2060',
      vis: {
        min: -380,
        max: 380,
      }
    },
    'Change in Potential Big Sagebrush Biomass, End-Century (2071-2100), RCP4.5, Light Grazing': {
      bname: 'ChangeBigSagebrushBiomass_LightGrazing_RCP45_2071-2100',
      vis: {
        min: -380,
        max: 380,
      }
    },
    'Change in Potential Big Sagebrush Biomass, End-Century (2071-2100), RCP8.5, Light Grazing': {
      bname: 'ChangeBigSagebrushBiomass_LightGrazing_RCP85_2071-2100',
      vis: {
        min: -380,
        max: 380,
      }
    },
    'Potential Big Sagebrush Biomass, Current (1981-2010), Light Grazing, Wildfire On': {
      bname: 'BigSagebrushBiomass_LightGrazing_Wildfire_1981-2010',
      vis: {
        min: 162,
        max: 999,
      }
    },
    'Change in Potential Big Sagebrush Biomass, Mid-Century (2031-2060), RCP4.5, Light Grazing, Wildfire On': {
      bname: 'ChangeBigSagebrushBiomass_LightGrazing_Wildfire_RCP45_2031-2060',
      vis: {
        min: -380,
        max: 380,
      }
    },
    'Change in Potential Big Sagebrush Biomass, Mid-Century (2031-2060), RCP8.5, Light Grazing, Wildfire On': {
      bname: 'ChangeBigSagebrushBiomass_LightGrazing_Wildfire_RCP85_2031-2060',
      vis: {
        min: -380,
        max: 380,
      }
    },
    'Change in Potential Big Sagebrush Biomass, End-Century (2071-2100), RCP4.5, Light Grazing, Wildfire On': {
      bname: 'ChangeBigSagebrushBiomass_LightGrazing_Wildfire_RCP45_2071-2100',
      vis: {
        min: -380,
        max: 380,
      }
    },
    'Change in Potential Big Sagebrush Biomass, End-Century (2071-2100), RCP8.5, Light Grazing, Wildfire On': {
      bname: 'ChangeBigSagebrushBiomass_LightGrazing_Wildfire_RCP85_2071-2100',
      vis: {
        min: -380,
        max: 380,
      }
    },
    ////////// PERENNIAL C3 GRASSES
    'Potential Perennial C3 Grasses Biomass, Current (1981-2010), Light Grazing': {
      bname: 'C3PgrassBiomass_LightGrazing_1981-2010',
      vis: {
        min: 50,
        max: 79,
      }
    },
    'Change in Potential Perennial C3 Grasses Biomass, Mid-Century (2031-2060), RCP4.5, Light Grazing': {
      bname: 'ChangeC3PgrassBiomass_LightGrazing_RCP45_2031-2060',
      vis: {
        min: -64,
        max: 64,
      }
    },
    'Change in Potential Perennial C3 Grasses Biomass, Mid-Century (2031-2060), RCP8.5, Light Grazing': {
      bname: 'ChangeC3PgrassBiomass_LightGrazing_RCP85_2031-2060',
      vis: {
        min: -64,
        max: 64,
      }
    },
    'Change in Potential Perennial C3 Grasses Biomass, End-Century (2071-2100), RCP4.5, Light Grazing': {
      bname: 'ChangeC3PgrassBiomass_LightGrazing_RCP45_2071-2100',
      vis: {
        min: -64,
        max: 64,
      }
    },
    'Change in Potential Perennial C3 Grasses Biomass, End-Century (2071-2100), RCP8.5, Light Grazing': {
      bname: 'ChangeC3PgrassBiomass_LightGrazing_RCP85_2071-2100',
      vis: {
        min: -64,
        max: 64,
      }
    },
    'Potential Perennial C3 Grasses Biomass, Current (1981-2010), Light Grazing, Wildfire On': {
      bname: 'C3PgrassBiomass_LightGrazing_Wildfire_1981-2010',
      vis: {
        min: 50,
        max: 79,
      }
    },
    'Change in Potential Perennial C3 Grasses Biomass, Mid-Century (2031-2060), RCP4.5, Light Grazing, Wildfire On': {
      bname: 'ChangeC3PgrassBiomass_LightGrazing_Wildfire_RCP45_2031-2060',
      vis: {
        min: -64,
        max: 64,
      }
    },
    'Change in Potential Perennial C3 Grasses Biomass, Mid-Century (2031-2060), RCP8.5, Light Grazing, Wildfire On': {
      bname: 'ChangeC3PgrassBiomass_LightGrazing_Wildfire_RCP85_2031-2060',
      vis: {
        min: -64,
        max: 64,
      }
    },
    'Change in Potential Perennial C3 Grasses Biomass, End-Century (2071-2100), RCP4.5, Light Grazing, Wildfire On': {
      bname: 'ChangeC3PgrassBiomass_LightGrazing_Wildfire_RCP45_2071-2100',
      vis: {
        min: -64,
        max: 64,
      }
    },
    'Change in Potential Perennial C3 Grasses Biomass, End-Century (2071-2100), RCP8.5, Light Grazing, Wildfire On': {
      bname: 'ChangeC3PgrassBiomass_LightGrazing_Wildfire_RCP85_2071-2100',
      vis: {
        min: -64,
        max: 64,
      }
    },
    ////////// PERENNIAL C4 GRASSES
    'Potential Perennial C4 Grasses Biomass, Current (1981-2010), Light Grazing': {
      bname: 'C4PgrassBiomass_LightGrazing_1981-2010',
      vis: {
        min: 24,
        max: 50,
      }
    },
    'Change in Potential Perennial C4 Grasses Biomass, Mid-Century (2031-2060), RCP4.5, Light Grazing': {
      bname: 'ChangeC4PgrassBiomass_LightGrazing_RCP45_2031-2060',
      vis: {
        min: -51,
        max: 51,
      }
    },
    'Change in Potential Perennial C4 Grasses Biomass, Mid-Century (2031-2060), RCP8.5, Light Grazing': {
      bname: 'ChangeC4PgrassBiomass_LightGrazing_RCP85_2031-2060',
      vis: {
        min: -51,
        max: 51,
      }
    },
    'Change in Potential Perennial C4 Grasses Biomass, End-Century (2071-2100), RCP4.5, Light Grazing': {
      bname: 'ChangeC4PgrassBiomass_LightGrazing_RCP45_2071-2100',
      vis: {
        min: -51,
        max: 51,
      }
    },
    'Change in Potential Perennial C4 Grasses Biomass, End-Century (2071-2100), RCP8.5, Light Grazing': {
      bname: 'ChangeC4PgrassBiomass_LightGrazing_RCP85_2071-2100',
      vis: {
        min: -51,
        max: 51,
      }
    },
    'Potential Perennial C4 Grasses Biomass, Current (1981-2010), Light Grazing, Wildfire On': {
      bname: 'C4PgrassBiomass_LightGrazing_Wildfire_1981-2010',
      vis: {
        min: 24,
        max: 50,
      }
    },
    'Change in Potential Perennial C4 Grasses Biomass, Mid-Century (2031-2060), RCP4.5, Light Grazing, Wildfire On': {
      bname: 'ChangeC4PgrassBiomass_LightGrazing_Wildfire_RCP45_2031-2060',
      vis: {
        min: -51,
        max: 51,
      }
    },
    'Change in Potential Perennial C4 Grasses Biomass, Mid-Century (2031-2060), RCP8.5, Light Grazing, Wildfire On': {
      bname: 'ChangeC4PgrassBiomass_LightGrazing_Wildfire_RCP85_2031-2060',
      vis: {
        min: -51,
        max: 51,
      }
    },
    'Change in Potential Perennial C4 Grasses Biomass, End-Century (2071-2100), RCP4.5, Light Grazing, Wildfire On': {
      bname: 'ChangeC4PgrassBiomass_LightGrazing_Wildfire_RCP45_2071-2100',
      vis: {
        min: -51,
        max: 51,
      }
    },
    'Change in Potential Perennial C4 Grasses Biomass, End-Century (2071-2100), RCP8.5, Light Grazing, Wildfire On': {
      bname: 'ChangeC4PgrassBiomass_LightGrazing_Wildfire_RCP85_2071-2100',
      vis: {
        min: -51,
        max: 51,
      }
    },
    ////////// PERENNIAL GRASSES
    'Potential Perennial Grasses Biomass, Current (1981-2010), Light Grazing': {
      bname: 'PgrassBiomass_LightGrazing_1981-2010',
      vis: {
        min: 46,
        max: 118,
      }
    },
    'Change in Potential Perennial Grasses Biomass, Mid-Century (2031-2060), RCP4.5, Light Grazing': {
      bname: 'ChangePgrassBiomass_LightGrazing_RCP45_2031-2060',
      vis: {
        min: -61,
        max: 61,
      }
    },
    'Change in Potential Perennial Grasses Biomass, Mid-Century (2031-2060), RCP8.5, Light Grazing': {
      bname: 'ChangePgrassBiomass_LightGrazing_RCP85_2031-2060',
      vis: {
        min: -61,
        max: 61,
      }
    },
    'Change in Potential Perennial Grasses Biomass, End-Century (2071-2100), RCP4.5, Light Grazing': {
      bname: 'ChangePgrassBiomass_LightGrazing_RCP45_2071-2100',
      vis: {
        min: -61,
        max: 61,
      }
    },
    'Change in Potential Perennial Grasses Biomass, End-Century (2071-2100), RCP8.5, Light Grazing': {
      bname: 'ChangePgrassBiomass_LightGrazing_RCP85_2071-2100',
      vis: {
        min: -61,
        max: 61,
      }
    },
    'Potential Perennial Grasses Biomass, Current (1981-2010), Light Grazing, Wildfire On': {
      bname: 'PgrassBiomass_LightGrazing_Wildfire_1981-2010',
      vis: {
        min: 46,
        max: 118,
      }
    },
    'Change in Potential Perennial Grasses Biomass, Mid-Century (2031-2060), RCP4.5, Light Grazing, Wildfire On': {
      bname: 'ChangePgrassBiomass_LightGrazing_Wildfire_RCP45_2031-2060',
      vis: {
        min: -61,
        max: 61,
      }
    },
    'Change in Potential Perennial Grasses Biomass, Mid-Century (2031-2060), RCP8.5, Light Grazing, Wildfire On': {
      bname: 'ChangePgrassBiomass_LightGrazing_Wildfire_RCP85_2031-2060',
      vis: {
        min: -61,
        max: 61,
      }
    },
    'Change in Potential Perennial Grasses Biomass, End-Century (2071-2100), RCP4.5, Light Grazing, Wildfire On': {
      bname: 'ChangePgrassBiomass_LightGrazing_Wildfire_RCP45_2071-2100',
      vis: {
        min: -61,
        max: 61,
      }
    },
    'Change in Potential Perennial Grasses Biomass, End-Century (2071-2100), RCP8.5, Light Grazing, Wildfire On': {
      bname: 'ChangePgrassBiomass_LightGrazing_Wildfire_RCP85_2071-2100',
      vis: {
        min: -61,
        max: 61,
      }
    },
    ////////// ANNUAL C3 GRASSES
    'Potential Annual C3 Grasses Biomass, Current (1981-2010), Light Grazing': {
      bname: 'C3AgrassBiomass_LightGrazing_1981-2010',
      vis: {
        min: 2,
        max: 64,
      }
    },
    'Change in Potential Annual C3 Grasses Biomass, Mid-Century (2031-2060), RCP4.5, Light Grazing': {
      bname: 'ChangeC3AgrassBiomass_LightGrazing_RCP45_2031-2060',
      vis: {
        min: -61,
        max: 61,
      }
    },
    'Change in Potential Annual C3 Grasses Biomass, Mid-Century (2031-2060), RCP8.5, Light Grazing': {
      bname: 'ChangeC3AgrassBiomass_LightGrazing_RCP85_2031-2060',
      vis: {
        min: -61,
        max: 61,
      }
    },
    'Change in Potential Annual C3 Grasses Biomass, End-Century (2071-2100), RCP4.5, Light Grazing': {
      bname: 'ChangeC3AgrassBiomass_LightGrazing_RCP45_2071-2100',
      vis: {
        min: -61,
        max: 61,
      }
    },
    'Change in Potential Annual C3 Grasses Biomass, End-Century (2071-2100), RCP8.5, Light Grazing': {
      bname: 'ChangeC3AgrassBiomass_LightGrazing_RCP85_2071-2100',
      vis: {
        min: -61,
        max: 61,
      }
    },
    'Potential Annual C3 Grasses Biomass, Current (1981-2010), Light Grazing, Wildfire On': {
      bname: 'C3AgrassBiomass_LightGrazing_Wildfire_1981-2010',
      vis: {
        min: 2,
        max: 64,
      }
    },
    'Change in Potential Annual C3 Grasses Biomass, Mid-Century (2031-2060), RCP4.5, Light Grazing, Wildfire On': {
      bname: 'ChangeC3AgrassBiomass_LightGrazing_Wildfire_RCP45_2031-2060',
      vis: {
        min: -61,
        max: 61,
      }
    },
    'Change in Potential Annual C3 Grasses Biomass, Mid-Century (2031-2060), RCP8.5, Light Grazing, Wildfire On': {
      bname: 'ChangeC3AgrassBiomass_LightGrazing_Wildfire_RCP85_2031-2060',
      vis: {
        min: -61,
        max: 61,
      }
    },
    'Change in Potential Annual C3 Grasses Biomass, End-Century (2071-2100), RCP4.5, Light Grazing, Wildfire On': {
      bname: 'ChangeC3AgrassBiomass_LightGrazing_Wildfire_RCP45_2071-2100',
      vis: {
        min: -61,
        max: 61,
      }
    },
    'Change in Potential Annual C3 Grasses Biomass, End-Century (2071-2100), RCP8.5, Light Grazing, Wildfire On': {
      bname: 'ChangeC3AgrassBiomass_LightGrazing_Wildfire_RCP85_2071-2100',
      vis: {
        min: -61,
        max: 61,
      }
    },
    ////////// FORBS
    'Potential Forbs Biomass, Current (1981-2010), Light Grazing': {
      bname: 'ForbBiomass_LightGrazing_1981-2010',
      vis: {
        min: 18,
        max: 34,
      }
    },
    'Change in Potential Forbs Biomass, Mid-Century (2031-2060), RCP4.5, Light Grazing': {
      bname: 'ChangeForbBiomass_LightGrazing_RCP45_2031-2060',
      vis: {
        min: -8,
        max: 8,
      }
    },
    'Change in Potential Forbs Biomass, Mid-Century (2031-2060), RCP8.5, Light Grazing': {
      bname: 'ChangeForbBiomass_LightGrazing_RCP85_2031-2060',
      vis: {
        min: -8,
        max: 8,
      }
    },
    'Change in Potential Forbs Biomass, End-Century (2071-2100), RCP4.5, Light Grazing': {
      bname: 'ChangeForbBiomass_LightGrazing_RCP45_2071-2100',
      vis: {
        min: -8,
        max: 8,
      }
    },
    'Change in Potential Forbs Biomass, End-Century (2071-2100), RCP8.5, Light Grazing': {
      bname: 'ChangeForbBiomass_LightGrazing_RCP85_2071-2100',
      vis: {
        min: -8,
        max: 8,
      }
    },
    'Potential Forbs Biomass, Current (1981-2010), Light Grazing, Wildfire On': {
      bname: 'ForbBiomass_LightGrazing_Wildfire_1981-2010',
      vis: {
        min: 18,
        max: 34,
      }
    },
    'Change in Potential Forbs Biomass, Mid-Century (2031-2060), RCP4.5, Light Grazing, Wildfire On': {
      bname: 'ChangeForbBiomass_LightGrazing_Wildfire_RCP45_2031-2060',
      vis: {
        min: -8,
        max: 8,
      }
    },
    'Change in Potential Forbs Biomass, Mid-Century (2031-2060), RCP8.5, Light Grazing, Wildfire On': {
      bname: 'ChangeForbBiomass_LightGrazing_Wildfire_RCP85_2031-2060',
      vis: {
        min: -8,
        max: 8,
      }
    },
    'Change in Potential Forbs Biomass, End-Century (2071-2100), RCP4.5, Light Grazing, Wildfire On': {
      bname: 'ChangeForbBiomass_LightGrazing_Wildfire_RCP45_2071-2100',
      vis: {
        min: -8,
        max: 8,
      }
    },
    'Change in Potential Forbs Biomass, End-Century (2071-2100), RCP8.5, Light Grazing, Wildfire On': {
      bname: 'ChangeForbBiomass_LightGrazing_Wildfire_RCP85_2071-2100',
      vis: {
        min: -8,
        max: 8,
      }
    },
  }
};

/*******************************************************************************
 * Components *
 ******************************************************************************/
var c = {};

c.controlPanel = ui.Panel();
c.map = ui.Map();

c.preload = {};
c.preload.rasterName = "Potential Big Sagebrush Biomass, Current (1981-2010), Light Grazing";
c.preload.img = m.col.select(m.imgInfo.bands[c.preload.rasterName].bname);

c.dividers = {};
c.dividers.divider1 = ui.Panel();
c.dividers.divider2 = ui.Panel();
c.dividers.divider3 = ui.Panel();

c.info = {};
c.info.titleLabel = ui.Label('STEPWAT2 App');
c.info.aboutLabel = ui.Label('Test app for STEPWAT2 interpolated data for sagebrush biomass.');

c.info.panel = ui.Panel([
  c.info.titleLabel, c.info.aboutLabel
]);
//HERE
c.soilStep = {};
c.soilStep.label = ui.Label('Select type of data');
c.soilStep.checkbox = ui.Select({
  placeholder: 'Select data type',
  items: [
    {value: 'STEPWAT2', label: 'Plant community'}, 
    {value: 'SOILWAT2', label: 'Soil water'}
  ],
  onChange: changeSoilOrStep
});

c.soilStep.panel = ui.Panel([c.soilStep.label, c.soilStep.checkbox]);

c.checkLayer = {};
c.checkLayer.label = ui.Label('Select layer(s) to display');
c.checkLayer.plantTypeLabel = ui.Label('Plant Functional Type:');
c.checkLayer.plantType = ['Big Sagebrush', 'Perennial C3 Grasses', 'Perennial C4 Grasses', 'Perennial Grasses', 'Annual C3 Grasses', 'Forbs'];
c.checkLayer.timeLabel = ui.Label('Time Period and Scenario:');
c.checkLayer.time = ['Current (1981-2010)', 'Mid-Century (2031-2060), RCP4.5', 'Mid-Century (2031-2060), RCP8.5', 
                     'End-Century (2071-2100), RCP4.5', 'End-Century (2071-2100), RCP8.5'];
c.checkLayer.grazingLabel = ui.Label('Grazing:');
c.checkLayer.grazing = ['Light', 'Moderate', 'Heavy', 'Very Heavy'];
c.checkLayer.fireLabel = ui.Label('Wildfire:');
c.checkLayer.fire = ['On', 'Off'];

c.checkLayer.plantTypePanel = ui.Panel();
c.checkLayer.timePanel = ui.Panel();
c.checkLayer.grazingPanel = ui.Panel();
c.checkLayer.firePanel = ui.Panel();
c.checkLayer.applyButton = ui.Button('Apply');
c.checkLayer.clearButton = ui.Button('Clear map');
c.checkLayer.comboErrorMsg = ui.Label('Note: some combinations of selected layers do not exist.', {shown: false});
c.checkLayer.checkErrorMsg = ui.Label('Error: check at least one box under each heading.', {shown: false});
c.checkLayer.panel = ui.Panel([c.dividers.divider1, c.checkLayer.label, c.checkLayer.plantTypeLabel, c.checkLayer.plantTypePanel, 
                               c.checkLayer.timeLabel, c.checkLayer.timePanel, c.checkLayer.grazingLabel, 
                               c.checkLayer.grazingPanel, c.checkLayer.fireLabel, c.checkLayer.firePanel, 
                               c.checkLayer.applyButton, c.checkLayer.clearButton, c.checkLayer.comboErrorMsg, c.checkLayer.checkErrorMsg]);

c.checkLayer.checkType = c.checkLayer.plantType.map(function (name) {
  var checkbox = ui.Checkbox({label: name, style: {margin: '8px 0px 0px 8px'}});         // Make the checkbox,
  c.checkLayer.plantTypePanel.add(checkbox);   // put it on panel,
  return {'checkbox': checkbox, 'name': name}; // remember it for later
});
c.checkLayer.checkTime = c.checkLayer.time.map(function (name) {
  var checkbox = ui.Checkbox({label: name, style: {margin: '8px 0px 0px 8px'}});
  c.checkLayer.timePanel.add(checkbox);
  return {'checkbox': checkbox, 'name': name};
});
c.checkLayer.checkGrazing = c.checkLayer.grazing.map(function (name) {
  var checkbox = ui.Checkbox({label: name, style: {margin: '8px 0px 0px 8px'}});
  c.checkLayer.grazingPanel.add(checkbox);
  return {'checkbox': checkbox, 'name': name};
});
c.checkLayer.checkFire = c.checkLayer.fire.map(function (name) {
  var checkbox = ui.Checkbox({label: name, style: {margin: '8px 0px 0px 8px'}});
  c.checkLayer.firePanel.add(checkbox);
  return {'checkbox': checkbox, 'name': name};
});

c.drawTool = {};
c.drawTool.label = ui.Label('Select your area of interest');
c.drawTool.drawLabel = ui.Label('Draw a shape:');
c.drawTool.drawshape = ui.Button('Draw', drawPolygon);
c.drawTool.panel = ui.Panel([c.drawTool.label, c.drawTool.drawLabel, c.drawTool.drawshape]);

c.inputCoords = {};
c.inputCoords.label = ui.Label('Enter rectangle coordinates:');
c.inputCoords.NElabel = ui.Label('North-East corner:');
c.inputCoords.north = ui.Textbox({
  placeholder: 'Latitude',
  onChange: function(value) {
    c.inputCoords.north.setValue(value);
    return(value);
  },
  style: {width: '150px', margin: '0px 0px 8px 8px'}
});
c.inputCoords.east = ui.Textbox({
  placeholder: 'Longitude',
  onChange: function(value) {
    c.inputCoords.east.setValue(value);
    return(value);
  },
  style: {width: '150px', margin: '0px 0px 8px 8px'}
});
c.inputCoords.NEpanel = ui.Panel({
  widgets: [c.inputCoords.north, c.inputCoords.east],
  layout: ui.Panel.Layout.flow('horizontal')
});
c.inputCoords.SWlabel = ui.Label('South-West corner:');
c.inputCoords.south = ui.Textbox({
  placeholder: 'Latitude',
  onChange: function(value) {
    c.inputCoords.south.setValue(value);
    return(value);
  },
  style: {width: '150px', margin: '0px 0px 8px 8px'}
});
c.inputCoords.west = ui.Textbox({
  placeholder: 'Longitude',
  onChange: function(value) {
    c.inputCoords.west.setValue(value);
    return(value);
  },
  style: {width: '150px', margin: '0px 0px 8px 8px'}
});
c.inputCoords.SWpanel = ui.Panel({
  widgets: [c.inputCoords.south, c.inputCoords.west],
  layout: ui.Panel.Layout.flow('horizontal')
});
c.inputCoords.addRectangleButton = ui.Button('Add rectangle', inputRectangle);
c.inputCoords.panel = ui.Panel([c.inputCoords.label, c.inputCoords.NElabel, c.inputCoords.NEpanel, 
                                c.inputCoords.SWlabel, c.inputCoords.SWpanel, c.inputCoords.addRectangleButton]);

c.clearshape = ui.Button('Clear polygons', clearGeometry);

c.downloadTool = {};
c.downloadTool.downloadLabel = ui.Label('Download your data');
c.downloadTool.getlink = ui.Button('Get download link', downloadImg);
c.downloadTool.downloadUrl = ui.Label('Download', {shown: false});
c.downloadTool.errorMsg = ui.Label('Error: please select less layers or a smaller area.', {shown: false});
c.downloadTool.panel = ui.Panel([c.downloadTool.downloadLabel, c.downloadTool.getlink, c.downloadTool.downloadUrl, c.downloadTool.errorMsg]);

// point ID widget group 
c.pointId = {};
c.pointId.pointLat = '';
c.pointId.pointLon = '';
c.pointId.label = ui.Label('Click on the map to view data values');
c.pointId.labelLat = ui.Label('Lat:');
c.pointId.textboxLat = ui.Textbox({
  placeholder: '',
  onChange: function(value) {
    c.pointId.textboxLat.setValue(value);
    return(value);
  },
  style: {width: '100px', margin: '5px 0px 0px 4px'}
});
c.pointId.labelLon = ui.Label('Lon:');
c.pointId.textboxLon = ui.Textbox({
  placeholder: '',
  onChange: function(value) {
    c.pointId.textboxLon.setValue(value);
    return(value);
  },
  style: {width: '100px', margin: '5px 0px 0px 0px'}
});
c.pointId.textboxShow = ui.Button({
  label: 'Show Value',
  style: {width: '80px', margin: '4px 0px 0px 12px'}
});
c.pointId.panelLat = ui.Panel({
  widgets:[c.pointId.labelLat, c.pointId.textboxLat],
  layout: ui.Panel.Layout.flow('horizontal')
});
c.pointId.panelLon = ui.Panel({
  widgets:[c.pointId.labelLon, c.pointId.textboxLon, c.pointId.textboxShow],
  layout: ui.Panel.Layout.flow('horizontal')
});
c.pointId.textboxPanel = ui.Panel([c.pointId.panelLat, c.pointId.panelLon]);
c.pointId.errorMsg = ui.Label('Error: point has no associated data values.');
c.pointId.panel = ui.Panel([c.pointId.label, c.pointId.textboxPanel]);

// HERE
c.stepwat = {};
c.stepwat.panel = ui.Panel([c.checkLayer.panel, c.dividers.divider2, c.drawTool.panel, c.inputCoords.panel, c.clearshape, c.dividers.divider3, c.downloadTool.panel]);

c.soilwat = {};

// legend widget group
c.legend = {};
c.legend.title = ui.Label();
c.legend.colorbar = ui.Panel({
  style: { padding: '0' },
  layout: ui.Panel.Layout.Flow('horizontal')
});
c.legend.absoluteLabel1 = ui.Label();
c.legend.absoluteLabel2 = ui.Label();
c.legend.absoluteLabel3 = ui.Label();
c.legend.absoluteLabel4 = ui.Label();
c.legend.absoluteLabel5 = ui.Label();
c.legend.absoluteLabel6 = ui.Label();
c.legend.absoluteLabel7 = ui.Label();
c.legend.absoluteLabel8 = ui.Label();
c.legend.absoluteLabel9 = ui.Label();
c.legend.absoluteLabel10 = ui.Label();
c.legend.absoluteLabel11 = ui.Label();
c.legend.absoluteLabel12 = ui.Label();
c.legend.absoluteLabel13 = ui.Label();
c.legend.absoluteLabel14 = ui.Label();
c.legend.absoluteLabel15 = ui.Label();
c.legend.absoluteLabel16 = ui.Label();
c.legend.absoluteLabel17 = ui.Label();
c.legend.absoluteCurrentSubtitle = ui.Label('Biomass (g/m²)');
c.legend.absoluteChangeSubtitle = ui.Label('Δ Biomass (g/m²)');

c.legend.absoluteLabelPanel = ui.Panel({
  widgets: [c.legend.absoluteLabel1, c.legend.absoluteLabel2, c.legend.absoluteLabel3, c.legend.absoluteLabel4, c.legend.absoluteLabel5, c.legend.absoluteLabel6, 
            c.legend.absoluteLabel7, c.legend.absoluteLabel8, c.legend.absoluteLabel9, c.legend.absoluteLabel10, c.legend.absoluteLabel11, 
            c.legend.absoluteLabel12, c.legend.absoluteLabel13, c.legend.absoluteLabel14, c.legend.absoluteLabel15, c.legend.absoluteLabel16, c.legend.absoluteLabel17],
  layout: ui.Panel.Layout.flow('horizontal'),
  style: {textAlign: 'center'}
});

c.legend.percentSubtitle = ui.Label('Δ Biomass (%)');
c.legend.percentLabel1 = ui.Label();
c.legend.percentLabel2 = ui.Label();
c.legend.percentLabel3 = ui.Label();
c.legend.percentLabel4 = ui.Label();
c.legend.percentLabel5 = ui.Label();
c.legend.percentLabel6 = ui.Label();
c.legend.percentLabel7 = ui.Label();
c.legend.percentLabel8 = ui.Label();
c.legend.percentLabel9 = ui.Label();
c.legend.percentLabel10 = ui.Label();
c.legend.percentLabel11 = ui.Label();
c.legend.percentLabel12 = ui.Label();
c.legend.percentLabel13 = ui.Label();
c.legend.percentLabel14 = ui.Label();
c.legend.percentLabel15 = ui.Label();
c.legend.percentLabel16 = ui.Label();
c.legend.percentLabel17 = ui.Label();

c.legend.percentLabelPanel = ui.Panel({
  widgets: [c.legend.percentLabel1, c.legend.percentLabel2, c.legend.percentLabel3, c.legend.percentLabel4, c.legend.percentLabel5, c.legend.percentLabel6, 
            c.legend.percentLabel7, c.legend.percentLabel8, c.legend.percentLabel9, c.legend.percentLabel10, c.legend.percentLabel11, 
            c.legend.percentLabel12, c.legend.percentLabel13, c.legend.percentLabel14, c.legend.percentLabel15, c.legend.percentLabel16, c.legend.percentLabel17],
  layout: ui.Panel.Layout.flow('horizontal'),
  style: {textAlign: 'center'}
});

c.legend.greyzero = makeGrey('Biomass (g/m²) = 0');
c.legend.greyzero.style().set({ shown: false });
c.legend.panel = ui.Panel([c.legend.title, c.legend.greyzero, c.legend.percentSubtitle, c.legend.percentLabelPanel, c.legend.colorbar, c.legend.absoluteLabelPanel, 
                           c.legend.absoluteCurrentSubtitle, c.legend.absoluteChangeSubtitle]);

/*******************************************************************************
 * Composition *
 ******************************************************************************/
ui.root.clear();
ui.root.add(c.controlPanel);
ui.root.add(c.map);
c.map.add(c.legend.panel);
c.map.add(c.pointId.panel);
c.map.setCenter(-112, 42, 5.1);
c.map.setOptions('hybrid');
c.map.style().set('cursor', 'crosshair');
c.map.setControlVisibility({mapTypeControl: false});
c.map.drawingTools().setDrawModes(["polygon"]); // only polygon draw mode available
c.map.drawingTools().setShape(null); // select polygon by default

// HERE
c.controlPanel.add(c.soilStep.panel);
c.controlPanel.add(c.stepwat.panel);
//c.controlPanel.add(c.soilwat.panel);

/*******************************************************************************
 * Styling *
 ******************************************************************************/
var s = {};

c.controlPanel.style().set({
  width: '350px'
});

s.infoText = {
  fontSize: '20px',
  fontWeight: 'bold'
};
s.aboutText = {
  fontSize: '13px',
  color: '505050'
};
s.widgetTitle = {
  fontSize: '18px',
  fontWeight: '900',
  margin: '8px 0px 0px 8px',
  color: '4b9c4b'
};
s.checkLayerTitle = {
  fontSize: '14px',
  fontWeight: 'bold',
  color: '333',
  margin: '17px 8px 3px 8px',
};
s.mainButton = {
  stretch: 'horizontal',
  //border: '5px solid #5cb85c',
};
s.clearButton = {
  stretch: 'horizontal',
  color: '7d7d7d'
};
s.checkbox = {
  stretch: 'horizontal'
};
s.divider = {
  backgroundColor: 'd6d6d6',
  height: '8px',
  margin: '5px 0px'
};

s.error = {
  color: 'A83232',
  margin: '15px 8px'
};

c.info.titleLabel.style().set(s.infoText);
c.info.aboutLabel.style().set(s.aboutText);

//HERE
c.soilStep.label.style().set(s.widgetTitle);
c.soilStep.checkbox.style().set(s.checkbox);

c.checkLayer.label.style().set(s.widgetTitle);
c.checkLayer.plantTypeLabel.style().set(s.checkLayerTitle);
c.checkLayer.timeLabel.style().set(s.checkLayerTitle);
c.checkLayer.grazingLabel.style().set(s.checkLayerTitle);
c.checkLayer.fireLabel.style().set(s.checkLayerTitle);

c.checkLayer.applyButton.style().set(s.mainButton);
c.checkLayer.clearButton.style().set(s.clearButton);
c.checkLayer.comboErrorMsg.style().set(s.error);
c.checkLayer.checkErrorMsg.style().set(s.error);

c.dividers.divider1.style().set(s.divider);
c.dividers.divider2.style().set(s.divider);
c.dividers.divider3.style().set(s.divider);

c.drawTool.label.style().set(s.widgetTitle);
c.drawTool.drawLabel.style().set(s.checkLayerTitle);
c.drawTool.drawshape.style().set(s.mainButton);
c.clearshape.style().set(s.clearButton);

c.inputCoords.label.style().set(s.checkLayerTitle);
c.inputCoords.addRectangleButton.style().set(s.mainButton);

c.downloadTool.downloadLabel.style().set(s.widgetTitle);
c.downloadTool.getlink.style().set(s.mainButton);
c.downloadTool.errorMsg.style().set(s.error);

// point ID style
c.pointId.panel.style().set({
  position: 'bottom-right',
  width: '265px',
  height: '350px'
});
c.pointId.label.style().set({ fontWeight: 'bold'});
c.pointId.errorMsg.style().set(s.error);

//legend style
s.opacityWhiteMed = {
  backgroundColor: 'rgba(255, 255, 255, 0.8)'
};
s.opacityWhiteNone = {
  backgroundColor: 'rgba(255, 255, 255, 0)'
};
//HERE
s.legendPercentSubtitle = {
  fontSize: '11px',
  margin: '0px 0px 0px 225px'
};
s.legendAbsoluteSubtitle = {
  fontSize: '11px',
  margin: '0px 0px 6px 225px'
};
s.legendLabel = {
  margin: '5px 0px 5px 0px',
  fontSize: '9px',
  stretch: 'horizontal'
};
c.legend.title.style().set({
  fontWeight: 'bold',
  fontSize: '13px',
  color: '383838'
});
c.legend.title.style().set(s.opacityWhiteNone);
c.legend.colorbar.style().set({
  margin: '0px 14px',
});
c.legend.absoluteCurrentSubtitle.style().set(s.opacityWhiteNone);
c.legend.absoluteCurrentSubtitle.style().set(s.legendAbsoluteSubtitle);
c.legend.absoluteChangeSubtitle.style().set(s.opacityWhiteNone);
c.legend.absoluteChangeSubtitle.style().set(s.legendAbsoluteSubtitle);
c.legend.absoluteLabel1.style().set(s.legendLabel);
c.legend.absoluteLabel1.style().set(s.opacityWhiteNone);
c.legend.absoluteLabel2.style().set(s.legendLabel);
c.legend.absoluteLabel2.style().set(s.opacityWhiteNone);
c.legend.absoluteLabel3.style().set(s.legendLabel);
c.legend.absoluteLabel3.style().set(s.opacityWhiteNone);
c.legend.absoluteLabel4.style().set(s.legendLabel);
c.legend.absoluteLabel4.style().set(s.opacityWhiteNone);
c.legend.absoluteLabel5.style().set(s.legendLabel);
c.legend.absoluteLabel5.style().set(s.opacityWhiteNone);
c.legend.absoluteLabel6.style().set(s.legendLabel);
c.legend.absoluteLabel6.style().set(s.opacityWhiteNone);
c.legend.absoluteLabel7.style().set(s.legendLabel);
c.legend.absoluteLabel7.style().set(s.opacityWhiteNone);
c.legend.absoluteLabel8.style().set(s.legendLabel);
c.legend.absoluteLabel8.style().set(s.opacityWhiteNone);
c.legend.absoluteLabel9.style().set(s.legendLabel);
c.legend.absoluteLabel9.style().set(s.opacityWhiteNone);
c.legend.absoluteLabel10.style().set(s.legendLabel);
c.legend.absoluteLabel10.style().set(s.opacityWhiteNone);
c.legend.absoluteLabel11.style().set(s.legendLabel);
c.legend.absoluteLabel11.style().set(s.opacityWhiteNone);
c.legend.absoluteLabel12.style().set(s.legendLabel);
c.legend.absoluteLabel12.style().set(s.opacityWhiteNone);
c.legend.absoluteLabel13.style().set(s.legendLabel);
c.legend.absoluteLabel13.style().set(s.opacityWhiteNone);
c.legend.absoluteLabel14.style().set(s.legendLabel);
c.legend.absoluteLabel14.style().set(s.opacityWhiteNone);
c.legend.absoluteLabel15.style().set(s.legendLabel);
c.legend.absoluteLabel15.style().set(s.opacityWhiteNone);
c.legend.absoluteLabel16.style().set(s.legendLabel);
c.legend.absoluteLabel16.style().set(s.opacityWhiteNone);
c.legend.absoluteLabel17.style().set(s.legendLabel);
c.legend.absoluteLabel17.style().set(s.opacityWhiteNone);
c.legend.absoluteLabelPanel.style().set(s.opacityWhiteNone);
//HERE
c.legend.percentSubtitle.style().set(s.opacityWhiteNone);
c.legend.percentSubtitle.style().set(s.legendPercentSubtitle);
c.legend.percentLabel1.style().set(s.legendLabel);
c.legend.percentLabel1.style().set(s.opacityWhiteNone);
c.legend.percentLabel2.style().set(s.legendLabel);
c.legend.percentLabel2.style().set(s.opacityWhiteNone);
c.legend.percentLabel3.style().set(s.legendLabel);
c.legend.percentLabel3.style().set(s.opacityWhiteNone);
c.legend.percentLabel4.style().set(s.legendLabel);
c.legend.percentLabel4.style().set(s.opacityWhiteNone);
c.legend.percentLabel5.style().set(s.legendLabel);
c.legend.percentLabel5.style().set(s.opacityWhiteNone);
c.legend.percentLabel6.style().set(s.legendLabel);
c.legend.percentLabel6.style().set(s.opacityWhiteNone);
c.legend.percentLabel7.style().set(s.legendLabel);
c.legend.percentLabel7.style().set(s.opacityWhiteNone);
c.legend.percentLabel8.style().set(s.legendLabel);
c.legend.percentLabel8.style().set(s.opacityWhiteNone);
c.legend.percentLabel9.style().set(s.legendLabel);
c.legend.percentLabel9.style().set(s.opacityWhiteNone);
c.legend.percentLabel10.style().set(s.legendLabel);
c.legend.percentLabel10.style().set(s.opacityWhiteNone);
c.legend.percentLabel11.style().set(s.legendLabel);
c.legend.percentLabel11.style().set(s.opacityWhiteNone);
c.legend.percentLabel12.style().set(s.legendLabel);
c.legend.percentLabel12.style().set(s.opacityWhiteNone);
c.legend.percentLabel13.style().set(s.legendLabel);
c.legend.percentLabel13.style().set(s.opacityWhiteNone);
c.legend.percentLabel14.style().set(s.legendLabel);
c.legend.percentLabel14.style().set(s.opacityWhiteNone);
c.legend.percentLabel15.style().set(s.legendLabel);
c.legend.percentLabel15.style().set(s.opacityWhiteNone);
c.legend.percentLabel16.style().set(s.legendLabel);
c.legend.percentLabel16.style().set(s.opacityWhiteNone);
c.legend.percentLabel17.style().set(s.legendLabel);
c.legend.percentLabel17.style().set(s.opacityWhiteNone);
c.legend.percentLabelPanel.style().set(s.opacityWhiteNone);

c.legend.panel.style().set({
  position: 'bottom-left',
  width: '550px',
  padding: '0px'});
c.legend.panel.style().set(s.opacityWhiteMed);

// Loop through setting divider style.
Object.keys(c.dividers).forEach(function(key) {
  c.dividers[key].style().set(s.divider);
});

/*******************************************************************************
 * Behaviors *
 ******************************************************************************/
var imgCol;
var imgCol2;
var imgCol3;
var imgCol4;
var imgCol5;
var bandName;
var newImgCol;

var sldRampCurrentC = // bins for current C3Pgrass, C4Pgrass, C3Agrass
  '<RasterSymbolizer>' +
    '<ColorMap type="intervals" extended="false" >' +
      '<ColorMapEntry color="#a9a9a9" quantity="0" />' +
      '<ColorMapEntry color="#F7FCB9" quantity="0.000000001" />' +
      '<ColorMapEntry color="#EDF8B0" quantity="0.125" />' +
      '<ColorMapEntry color="#E0F3A7" quantity="0.25" />' +
      '<ColorMapEntry color="#D1EC9E" quantity="0.375" />' +
      '<ColorMapEntry color="#BFE596" quantity="0.5" />' +
      '<ColorMapEntry color="#ADDD8E" quantity="0.625" />' +
      '<ColorMapEntry color="#98D486" quantity="0.75" />' +
      '<ColorMapEntry color="#83CA7D" quantity="0.875" />' +
      '<ColorMapEntry color="#6CC173" quantity="1" />' +
      '<ColorMapEntry color="#54B668" quantity="1.125" />' +
      '<ColorMapEntry color="#41AB5D" quantity="1.25" />' +
      '<ColorMapEntry color="#329C51" quantity="1.375" />' +
      '<ColorMapEntry color="#288C47" quantity="1.5" />' +
      '<ColorMapEntry color="#1D7B3E" quantity="1.625" />' +
      '<ColorMapEntry color="#106A37" quantity="1.75" />' +
      '<ColorMapEntry color="#005A32" quantity="1.875" />' +
    '</ColorMap>' +
  '</RasterSymbolizer>';

var sldRampCurrentOther = // bins for current others
  '<RasterSymbolizer>' +
    '<ColorMap type="intervals" extended="false" >' +
      '<ColorMapEntry color="#F7FCB9" quantity="0" />' +
      '<ColorMapEntry color="#EDF8B0" quantity="0.125" />' +
      '<ColorMapEntry color="#E0F3A7" quantity="0.25" />' +
      '<ColorMapEntry color="#D1EC9E" quantity="0.375" />' +
      '<ColorMapEntry color="#BFE596" quantity="0.5" />' +
      '<ColorMapEntry color="#ADDD8E" quantity="0.625" />' +
      '<ColorMapEntry color="#98D486" quantity="0.75" />' +
      '<ColorMapEntry color="#83CA7D" quantity="0.875" />' +
      '<ColorMapEntry color="#6CC173" quantity="1" />' +
      '<ColorMapEntry color="#54B668" quantity="1.125" />' +
      '<ColorMapEntry color="#41AB5D" quantity="1.25" />' +
      '<ColorMapEntry color="#329C51" quantity="1.375" />' +
      '<ColorMapEntry color="#288C47" quantity="1.5" />' +
      '<ColorMapEntry color="#1D7B3E" quantity="1.625" />' +
      '<ColorMapEntry color="#106A37" quantity="1.75" />' +
      '<ColorMapEntry color="#005A32" quantity="1.875" />' +
    '</ColorMap>' +
  '</RasterSymbolizer>';
  
var sldRampChangeC = // bins for change in biomass
  '<RasterSymbolizer>' +
    '<ColorMap type="intervals" extended="false" >' +
      '<ColorMapEntry color="#800026" quantity="0" />' +
      '<ColorMapEntry color="#bd0026" quantity="0.3" />' +
      '<ColorMapEntry color="#e31a1c" quantity="0.6" />' +
      '<ColorMapEntry color="#fc4e2a" quantity="0.75" />' +
      '<ColorMapEntry color="#fd8d3c" quantity="0.9" />' +
      '<ColorMapEntry color="#feb24c" quantity="0.925" />' +
      '<ColorMapEntry color="#fed976" quantity="0.95" />' +
      '<ColorMapEntry color="#ffeda0" quantity="0.975" />' +
      '<ColorMapEntry color="#a9a9a9" quantity="0.999999999" />' +
      '<ColorMapEntry color="#deebf7" quantity="1" />' +
      '<ColorMapEntry color="#c6dbef" quantity="1.025" />' +
      '<ColorMapEntry color="#9ecae1" quantity="1.05" />' +
      '<ColorMapEntry color="#6baed6" quantity="1.075" />' +
      '<ColorMapEntry color="#4292c6" quantity="1.1" />' +
      '<ColorMapEntry color="#2171b5" quantity="1.25" />' +
      '<ColorMapEntry color="#08519c" quantity="1.4" />' +
      '<ColorMapEntry color="#084184" quantity="1.7" />' +
      '<ColorMapEntry color="#08306b" quantity="2" />' +
    '</ColorMap>' +
  '</RasterSymbolizer>';
  
var sldRampChangeOther = // bins for change in biomass
  '<RasterSymbolizer>' +
    '<ColorMap type="intervals" extended="false" >' +
      '<ColorMapEntry color="#800026" quantity="0" />' +
      '<ColorMapEntry color="#bd0026" quantity="0.3" />' +
      '<ColorMapEntry color="#e31a1c" quantity="0.6" />' +
      '<ColorMapEntry color="#fc4e2a" quantity="0.75" />' +
      '<ColorMapEntry color="#fd8d3c" quantity="0.9" />' +
      '<ColorMapEntry color="#feb24c" quantity="0.925" />' +
      '<ColorMapEntry color="#fed976" quantity="0.95" />' +
      '<ColorMapEntry color="#ffeda0" quantity="0.975" />' +
      '<ColorMapEntry color="#deebf7" quantity="1" />' +
      '<ColorMapEntry color="#c6dbef" quantity="1.025" />' +
      '<ColorMapEntry color="#9ecae1" quantity="1.05" />' +
      '<ColorMapEntry color="#6baed6" quantity="1.075" />' +
      '<ColorMapEntry color="#4292c6" quantity="1.1" />' +
      '<ColorMapEntry color="#2171b5" quantity="1.25" />' +
      '<ColorMapEntry color="#08519c" quantity="1.4" />' +
      '<ColorMapEntry color="#084184" quantity="1.7" />' +
      '<ColorMapEntry color="#08306b" quantity="2" />' +
    '</ColorMap>' +
  '</RasterSymbolizer>';

function changeSoilOrStep () {
  if (c.soilStep.checkbox.getValue() === 'STEPWAT2'){
    c.stepwat.panel.style().set({ shown: true });
    //c.soilwat.panel.style().set({ shown: false });
  }

  if (c.soilStep.checkbox.getValue() === 'SOILWAT2'){
    c.stepwat.panel.style().set({ shown: false });
    //c.soilwat.panel.style().set({ shown: true });
  }
}

function preloadRaster() {
    imgCol = m.col.select(m.imgInfo.bands[c.preload.rasterName].bname);
      imgCol2 = imgCol.subtract(m.imgInfo.bands[c.preload.rasterName].vis.min);
      imgCol3 = imgCol2.multiply(2);
      imgCol4 = m.imgInfo.bands[c.preload.rasterName].vis.max - m.imgInfo.bands[c.preload.rasterName].vis.min;
      imgCol5 = imgCol3.divide(imgCol4);
    c.map.addLayer(imgCol5.sldStyle(sldRampCurrentOther), {}, c.preload.rasterName);
    m.selectedImgCol = m.selectedImgCol.merge(imgCol);
}

function addBandCurrentC() {
  if (m.imgInfo.bands[bandName] !== undefined) {
    imgCol = m.col.select(m.imgInfo.bands[bandName].bname);
      imgCol2 = imgCol.subtract(m.imgInfo.bands[bandName].vis.min);
      imgCol3 = imgCol2.multiply(2);
      imgCol4 = m.imgInfo.bands[bandName].vis.max - m.imgInfo.bands[bandName].vis.min;
      imgCol5 = imgCol3.divide(imgCol4);
    c.map.addLayer(imgCol5.sldStyle(sldRampCurrentC), {}, bandName);
    m.selectedImgCol = m.selectedImgCol.merge(imgCol);
  } else {
    c.checkLayer.comboErrorMsg.style().set({ shown: true });
  }
}

function addBandCurrentOther() {
  if (m.imgInfo.bands[bandName] !== undefined) {
    imgCol = m.col.select(m.imgInfo.bands[bandName].bname);
      imgCol2 = imgCol.subtract(m.imgInfo.bands[bandName].vis.min);
      imgCol3 = imgCol2.multiply(2);
      imgCol4 = m.imgInfo.bands[bandName].vis.max - m.imgInfo.bands[bandName].vis.min;
      imgCol5 = imgCol3.divide(imgCol4);
    c.map.addLayer(imgCol5.sldStyle(sldRampCurrentOther), {}, bandName);
    m.selectedImgCol = m.selectedImgCol.merge(imgCol);
  } else {
    c.checkLayer.comboErrorMsg.style().set({ shown: true });
  }
}

function addBandChangeC() {
  if (m.imgInfo.bands[bandName] !== undefined) {
    imgCol = m.col.select(m.imgInfo.bands[bandName].bname);
      imgCol2 = imgCol.add(m.imgInfo.bands[bandName].vis.max);
      imgCol3 = imgCol2.divide(m.imgInfo.bands[bandName].vis.max);
    c.map.addLayer(imgCol3.sldStyle(sldRampChangeC), {}, bandName);
    m.selectedImgCol = m.selectedImgCol.merge(imgCol);
  } else {
    c.checkLayer.comboErrorMsg.style().set({ shown: true });
  }
}

function addBandChangeOther() {
  if (m.imgInfo.bands[bandName] !== undefined) {
    imgCol = m.col.select(m.imgInfo.bands[bandName].bname);
      imgCol2 = imgCol.add(m.imgInfo.bands[bandName].vis.max);
      imgCol3 = imgCol2.divide(m.imgInfo.bands[bandName].vis.max);
    c.map.addLayer(imgCol3.sldStyle(sldRampChangeOther), {}, bandName);
    m.selectedImgCol = m.selectedImgCol.merge(imgCol);
  } else {
    c.checkLayer.comboErrorMsg.style().set({ shown: true });
  }
}

c.checkLayer.applyButton.onClick(function () {
  c.map.layers().reset(); // Remove all existing layers
  m.selectedImgCol = m.empty; // clear download-ready bands
  c.legend.panel.style().set({ shown: true });
  c.legend.greyzero.style().set({ shown: false });
  c.checkLayer.checkErrorMsg.style().set({ shown: true });

  c.checkLayer.checkType.forEach(function (plant) {
    if (plant.checkbox.getValue()) {
      
      c.checkLayer.checkTime.forEach(function (time) {
        if (time.checkbox.getValue()) {
          
          c.checkLayer.checkGrazing.forEach(function (grazing) {
            if (grazing.checkbox.getValue()) {
              
              c.checkLayer.checkFire.forEach(function (fire) {
                if (fire.checkbox.getValue()) {
                  c.checkLayer.checkErrorMsg.style().set({ shown: false });
                  if (time.name == "Current (1981-2010)") {
                    if (fire.name == "On") {
                      bandName = "Potential " + plant.name + " Biomass, " + time.name + ", " + grazing.name + " Grazing, Wildfire On";
                      print(plant.name)
                    } else {
                      bandName = "Potential " + plant.name + " Biomass, " + time.name + ", " + grazing.name + " Grazing";
                    }
                    if (plant.name == "Perennial C3 Grasses") {
                        addBandCurrentC();
                      } else if (plant.name == "Perennial C4 Grasses") {
                        addBandCurrentC();
                      } else if (plant.name == "Annual C3 Grasses") {
                        addBandCurrentC();
                      } else {
                        addBandCurrentOther();
                      }
                    updateLegendCurrent();
                  } else {
                    if (fire.name == "On") {
                      bandName = "Change in Potential " + plant.name + " Biomass, " + time.name + ", " + grazing.name + " Grazing, Wildfire On";
                    } else {
                      bandName = "Change in Potential " + plant.name + " Biomass, " + time.name + ", " + grazing.name + " Grazing";
                    }
                    if (plant.name == "Perennial C3 Grasses") {
                        addBandChangeC();
                      } else if (plant.name == "Perennial C4 Grasses") {
                        addBandChangeC();
                      } else if (plant.name == "Annual C3 Grasses") {
                        addBandChangeC();
                      } else {
                        addBandChangeOther();
                      }
                    updateLegendChange();
                  }
                }
              });
            }
          });
        }
      });
      if (plant.name == "Perennial C3 Grasses") {
        c.legend.greyzero.style().set({ shown: true });
      } else if (plant.name == "Perennial C4 Grasses") {
        c.legend.greyzero.style().set({ shown: true });
      } else if (plant.name == "Annual C3 Grasses") {
        c.legend.greyzero.style().set({ shown: true });
      } else {
      c.legend.greyzero.style().set({ shown: false });
    }}
  });
  /*if (m.selectedImgCol.size().getInfo() === 0) {
    c.checkLayer.checkErrorMsg.style().set({ shown: true });
  } else {
    c.checkLayer.checkErrorMsg.style().set({ shown: false });
  }*/
});

c.checkLayer.clearButton.onClick(function () {
  c.map.layers().reset();
  m.selectedImgCol = m.empty; // clear past download-ready bands
  c.legend.panel.style().set({ shown: false });
});

//make grey box + label for legend
function makeGrey(name) {
  var colorBox = ui.Label({
    style: {
      backgroundColor: '#a9a9a9',
      padding: '6px',
      margin: '0px 0 0px 8px'
    }
  });
  var description = ui.Label({
    value: name,
    style: {margin: '0px 0 0px 5px', backgroundColor: 'rgba(255, 255, 255, 0)', fontSize: '11px'}
  });
  return ui.Panel({
    widgets: [colorBox, description],
    layout: ui.Panel.Layout.Flow('horizontal'),
    style: {backgroundColor: 'rgba(255, 255, 255, 0)'}
});
}

// make colorbar for legend
function makeColorbar(color) {
  return ui.Label({
    style: {
      backgroundColor: color,
      padding: '8px 16.3px',
      margin: '0'
    }
  });
}

// legend for preloaded raster
function preloadLegend() {
  if (m.imgInfo.bands[c.preload.rasterName] !== undefined) {
    for (var i = 0; i < 16; i++) {
      c.legend.colorbar.add(makeColorbar(m.biomassPalette[i]));
    }
    c.legend.percentLabelPanel.style().set({ shown: false });
    c.legend.percentSubtitle.style().set({ shown: false });
    c.legend.absoluteChangeSubtitle.style().set({ shown: false });
    
    c.legend.title.setValue(c.preload.rasterName);
    var range = m.imgInfo.bands[c.preload.rasterName].vis.max - m.imgInfo.bands[c.preload.rasterName].vis.min;
    c.legend.absoluteLabel1.setValue(m.imgInfo.bands[c.preload.rasterName].vis.min);
    c.legend.absoluteLabel2.setValue((range * 0.0625 + m.imgInfo.bands[c.preload.rasterName].vis.min).toFixed(1));
    c.legend.absoluteLabel3.setValue((range * 0.125 + m.imgInfo.bands[c.preload.rasterName].vis.min).toFixed(1));
    c.legend.absoluteLabel4.setValue((range * 0.1875 + m.imgInfo.bands[c.preload.rasterName].vis.min).toFixed(1));
    c.legend.absoluteLabel5.setValue((range * 0.25 + m.imgInfo.bands[c.preload.rasterName].vis.min).toFixed(1));
    c.legend.absoluteLabel6.setValue((range * 0.3125 + m.imgInfo.bands[c.preload.rasterName].vis.min).toFixed(1));
    c.legend.absoluteLabel7.setValue((range * 0.375 + m.imgInfo.bands[c.preload.rasterName].vis.min).toFixed(1));
    c.legend.absoluteLabel8.setValue((range * 0.4375 + m.imgInfo.bands[c.preload.rasterName].vis.min).toFixed(1));
    c.legend.absoluteLabel9.setValue((range * 0.5 + m.imgInfo.bands[c.preload.rasterName].vis.min).toFixed(1));
    c.legend.absoluteLabel10.setValue((range * 0.5625 + m.imgInfo.bands[c.preload.rasterName].vis.min).toFixed(1));
    c.legend.absoluteLabel11.setValue((range * 0.625 + m.imgInfo.bands[c.preload.rasterName].vis.min).toFixed(1));
    c.legend.absoluteLabel12.setValue((range * 0.6875 + m.imgInfo.bands[c.preload.rasterName].vis.min).toFixed(1));
    c.legend.absoluteLabel13.setValue((range * 0.75 + m.imgInfo.bands[c.preload.rasterName].vis.min).toFixed(1));
    c.legend.absoluteLabel14.setValue((range * 0.8125 + m.imgInfo.bands[c.preload.rasterName].vis.min).toFixed(1));
    c.legend.absoluteLabel15.setValue((range * 0.875 + m.imgInfo.bands[c.preload.rasterName].vis.min).toFixed(1));
    c.legend.absoluteLabel16.setValue((range * 0.9375 + m.imgInfo.bands[c.preload.rasterName].vis.min).toFixed(1));
    c.legend.absoluteLabel17.setValue(m.imgInfo.bands[c.preload.rasterName].vis.max);
    c.legend.panel.style().set({ shown: true });
  } else {
    c.legend.panel.style().set({ shown: false });
  }
}
// legend when checkboxes are applied
// for current rasters
function updateLegendCurrent() {
  c.legend.colorbar.widgets().reset();
  if (m.imgInfo.bands[bandName] !== undefined) {
    for (var i = 0; i < 16; i++) {
      c.legend.colorbar.add(makeColorbar(m.biomassPalette[i]));
    }
    c.legend.percentLabelPanel.style().set({ shown: false });
    c.legend.percentSubtitle.style().set({ shown: false });
    c.legend.absoluteChangeSubtitle.style().set({ shown: false });
    c.legend.title.setValue(bandName);
    
    var range = m.imgInfo.bands[bandName].vis.max - m.imgInfo.bands[bandName].vis.min;
    c.legend.absoluteLabel1.setValue(m.imgInfo.bands[bandName].vis.min);
    c.legend.absoluteLabel2.setValue((range * 0.0625 + m.imgInfo.bands[bandName].vis.min).toFixed(1));
    c.legend.absoluteLabel3.setValue((range * 0.125 + m.imgInfo.bands[bandName].vis.min).toFixed(1));
    c.legend.absoluteLabel4.setValue((range * 0.1875 + m.imgInfo.bands[bandName].vis.min).toFixed(1));
    c.legend.absoluteLabel5.setValue((range * 0.25 + m.imgInfo.bands[bandName].vis.min).toFixed(1));
    c.legend.absoluteLabel6.setValue((range * 0.3125 + m.imgInfo.bands[bandName].vis.min).toFixed(1));
    c.legend.absoluteLabel7.setValue((range * 0.375 + m.imgInfo.bands[bandName].vis.min).toFixed(1));
    c.legend.absoluteLabel8.setValue((range * 0.4375 + m.imgInfo.bands[bandName].vis.min).toFixed(1));
    c.legend.absoluteLabel9.setValue((range * 0.5 + m.imgInfo.bands[bandName].vis.min).toFixed(1));
    c.legend.absoluteLabel10.setValue((range * 0.5625 + m.imgInfo.bands[bandName].vis.min).toFixed(1));
    c.legend.absoluteLabel11.setValue((range * 0.625 + m.imgInfo.bands[bandName].vis.min).toFixed(1));
    c.legend.absoluteLabel12.setValue((range * 0.6875 + m.imgInfo.bands[bandName].vis.min).toFixed(1));
    c.legend.absoluteLabel13.setValue((range * 0.75 + m.imgInfo.bands[bandName].vis.min).toFixed(1));
    c.legend.absoluteLabel14.setValue((range * 0.8125 + m.imgInfo.bands[bandName].vis.min).toFixed(1));
    c.legend.absoluteLabel15.setValue((range * 0.875 + m.imgInfo.bands[bandName].vis.min).toFixed(1));
    c.legend.absoluteLabel16.setValue((range * 0.9375 + m.imgInfo.bands[bandName].vis.min).toFixed(1));
    c.legend.absoluteLabel17.setValue(m.imgInfo.bands[bandName].vis.max);
    c.legend.panel.style().set({ shown: true });
  } else {
    c.legend.panel.style().set({ shown: false });
  }
}

// for change in biomass rasters
function updateLegendChange() {
  c.legend.colorbar.widgets().reset();
  if (m.imgInfo.bands[bandName] !== undefined) {
    for (var i = 0; i < 16; i++) {
      c.legend.colorbar.add(makeColorbar(m.changePalette[i]));
    }
    c.legend.percentLabelPanel.style().set({ shown: true });
    c.legend.percentSubtitle.style().set({ shown: true });
    c.legend.absoluteCurrentSubtitle.style().set({ shown: false });
    c.legend.absoluteChangeSubtitle.style().set({ shown: true });
    
    c.legend.title.setValue(bandName);
    
    c.legend.percentLabel1.setValue(-100);
    c.legend.percentLabel2.setValue(-70);
    c.legend.percentLabel3.setValue(-40);
    c.legend.percentLabel4.setValue(-25);
    c.legend.percentLabel5.setValue(-10);
    c.legend.percentLabel6.setValue(-7.5);
    c.legend.percentLabel7.setValue(-5);
    c.legend.percentLabel8.setValue(-2.5);
    c.legend.percentLabel9.setValue(0);
    c.legend.percentLabel10.setValue(2.5);
    c.legend.percentLabel11.setValue(5);
    c.legend.percentLabel12.setValue(7.5);
    c.legend.percentLabel13.setValue(10);
    c.legend.percentLabel14.setValue(25);
    c.legend.percentLabel15.setValue(40);
    c.legend.percentLabel16.setValue(70);
    c.legend.percentLabel17.setValue(100);
    
    c.legend.absoluteLabel1.setValue(m.imgInfo.bands[bandName].vis.min);
    c.legend.absoluteLabel2.setValue((m.imgInfo.bands[bandName].vis.min * 0.7).toFixed(1));
    c.legend.absoluteLabel3.setValue((m.imgInfo.bands[bandName].vis.min * 0.4).toFixed(1));
    c.legend.absoluteLabel4.setValue((m.imgInfo.bands[bandName].vis.min * 0.25).toFixed(1));
    c.legend.absoluteLabel5.setValue((m.imgInfo.bands[bandName].vis.min * 0.1).toFixed(1));
    c.legend.absoluteLabel6.setValue((m.imgInfo.bands[bandName].vis.min * 0.075).toFixed(1));
    c.legend.absoluteLabel7.setValue((m.imgInfo.bands[bandName].vis.min * 0.05).toFixed(1));
    c.legend.absoluteLabel8.setValue((m.imgInfo.bands[bandName].vis.min * 0.025).toFixed(1));
    c.legend.absoluteLabel9.setValue(0);
    c.legend.absoluteLabel10.setValue((m.imgInfo.bands[bandName].vis.max * 0.025).toFixed(1));
    c.legend.absoluteLabel11.setValue((m.imgInfo.bands[bandName].vis.max * 0.05).toFixed(1));
    c.legend.absoluteLabel12.setValue((m.imgInfo.bands[bandName].vis.max * 0.075).toFixed(1));
    c.legend.absoluteLabel13.setValue((m.imgInfo.bands[bandName].vis.max * 0.1).toFixed(1));
    c.legend.absoluteLabel14.setValue((m.imgInfo.bands[bandName].vis.max * 0.25).toFixed(1));
    c.legend.absoluteLabel15.setValue((m.imgInfo.bands[bandName].vis.max * 0.4).toFixed(1));
    c.legend.absoluteLabel16.setValue((m.imgInfo.bands[bandName].vis.max * 0.7).toFixed(1));
    c.legend.absoluteLabel17.setValue(m.imgInfo.bands[bandName].vis.max);
    c.legend.panel.style().set({ shown: true });
  } else {
    c.legend.panel.style().set({ shown: false });
  }
}

// point ID tool
var renamedImg;
var numberSelected;
function fixBandNames() {
  numberSelected = m.selectedImgCol.size().getInfo();
  var list = ee.List([]);
  var listOfImages = m.selectedImgCol.toList(numberSelected);
  for(var i = 0; i < numberSelected; i++) {
    var indexedImg = ee.Image(listOfImages.get(i));
    list = list.add(indexedImg.bandNames().get(0));
  }
  var img = m.selectedImgCol.toBands();
  renamedImg = img.select(img.bandNames()).rename(list);
}

var chart;
var pointValue;
var numb;
c.map.onClick(function (coords) {
  c.pointId.panel.widgets().reset();
  fixBandNames();
  var point = ee.Geometry.Point(coords.lon, coords.lat);
  c.pointId.textboxLat.setValue(coords.lat.toFixed(4));
  c.pointId.textboxLon.setValue(coords.lon.toFixed(4));
  c.pointId.panel.widgets().set(0, c.pointId.label);
  c.pointId.panel.widgets().set(1, c.pointId.textboxPanel);
  
  if (bandName !== undefined) {
    pointValue = renamedImg.reduceRegion({ geometry: point, scale: 30, reducer: ee.Reducer.first() });
    numb = pointValue.getNumber(m.imgInfo.bands[bandName].bname).getInfo();
    c.map.layers().set(numberSelected, ui.Map.Layer(point, { color: "FF0000" }, "Point"));
    if (numb !== null) {
      chart = ui.Chart.image.byRegion(renamedImg, point, null, 30).setChartType("ColumnChart");
      chart.style().set({
        position: "bottom-left",
        width: "230px",
        height: "200px",
      });
      c.pointId.panel.widgets().add(chart);
      if (numberSelected == 1) {
        chart.setOptions({
        colors: ['787878'],
        title: "",
        vAxis: { title: "Biomass (g/m²)" },
        hAxis: { title: bandName, textStyle: {color: "white"} },
      });
      } else {
      chart.setOptions({
        colors: ['D9D9D9', 'D5D5D5', 'D2D2D2', 'CFCFCF', 'CCCCCC', 'C8C8C8', 'C5C5C5', 'C2C2C2', 'BFBFBF', 'BBBBBB',
'B8B8B8', 'B5B5B5', 'B2B2B2', 'AEAEAE', 'ABABAB', 'A8A8A8', 'A5A5A5', 'A1A1A1', '9E9E9E', '9B9B9B',
'989898', '959595', '919191', '8E8E8E', '8B8B8B', '888888', '848484', '818181', '7E7E7E', '7B7B7B',
'777777', '747474', '717171', '6E6E6E', '6A6A6A', '676767', '646464', '616161', '5D5D5D', '5A5A5A',
'575757', '545454', '515151', '4D4D4D', '4A4A4A', '474747', '444444', '404040', '3D3D3D', '3A3A3A',
'373737', '333333', '303030', '2D2D2D', '2A2A2A', '262626', '232323', '202020', '1D1D1D', '191919'],
        title: "",
        vAxis: { title: "Biomass (g/m²)" },
        hAxis: { title: "Layers", textStyle: {color: "white"} },
      });
      }
    } else {
      c.pointId.panel.widgets().add(c.pointId.errorMsg);
    }
    
  } else {
    pointValue = c.preload.img.reduceRegion({ geometry: point, scale: 30, reducer: ee.Reducer.first()
    });
    numb = pointValue.getNumber(m.imgInfo.bands[c.preload.rasterName].bname).getInfo();
    c.map.layers().set(1, ui.Map.Layer(point, { color: "FF0000" }, "Point"));
    if (numb !== null) {
      chart = ui.Chart.image.byRegion(c.preload.img, point, null, 30).setChartType("ColumnChart");
      chart.style().set({
        position: "bottom-left",
        width: "230px",
        height: "200px",
      });
      chart.setOptions({
        colors: ['787878'],
        title: "",
        vAxis: { title: "Biomass (g/m²)" },
        hAxis: { title: c.preload.rasterName, textStyle: {color: "white"} },
      });
      c.pointId.panel.widgets().add(chart);
    } else {
      c.pointId.panel.widgets().add(c.pointId.errorMsg);
    }
  }
});

c.pointId.textboxShow.onClick(function () {
  c.pointId.panel.widgets().reset();
  fixBandNames();
  var lati = ee.Number.parse(c.pointId.textboxLat.getValue());
  var long = ee.Number.parse(c.pointId.textboxLon.getValue());
  var point = ee.Geometry.Point(long, lati);
  c.pointId.panel.widgets().set(0, c.pointId.label);
  c.pointId.panel.widgets().set(1, c.pointId.textboxPanel);
  
  if (bandName !== undefined) {
    pointValue = renamedImg.reduceRegion({ geometry: point, scale: 30, reducer: ee.Reducer.first() });
    numb = pointValue.getNumber(m.imgInfo.bands[bandName].bname).getInfo();
    c.map.layers().set(numberSelected, ui.Map.Layer(point, { color: "FF0000" }, "Point"));
    if (numb !== null) {
      chart = ui.Chart.image.byRegion(renamedImg, point, null, 30).setChartType("ColumnChart");
      chart.style().set({
        position: "bottom-left",
        width: "230px",
        height: "200px",
      });
      c.pointId.panel.widgets().add(chart);
      if (numberSelected == 1) {
        colors: ['787878'],
        chart.setOptions({
        title: "",
        vAxis: { title: "Biomass (g/m²)" },
        hAxis: { title: bandName, textStyle: {color: "white"} },
      });
      } else {
      chart.setOptions({
        colors: ['D9D9D9', 'D5D5D5', 'D2D2D2', 'CFCFCF', 'CCCCCC', 'C8C8C8', 'C5C5C5', 'C2C2C2', 'BFBFBF', 'BBBBBB',
'B8B8B8', 'B5B5B5', 'B2B2B2', 'AEAEAE', 'ABABAB', 'A8A8A8', 'A5A5A5', 'A1A1A1', '9E9E9E', '9B9B9B',
'989898', '959595', '919191', '8E8E8E', '8B8B8B', '888888', '848484', '818181', '7E7E7E', '7B7B7B',
'777777', '747474', '717171', '6E6E6E', '6A6A6A', '676767', '646464', '616161', '5D5D5D', '5A5A5A',
'575757', '545454', '515151', '4D4D4D', '4A4A4A', '474747', '444444', '404040', '3D3D3D', '3A3A3A',
'373737', '333333', '303030', '2D2D2D', '2A2A2A', '262626', '232323', '202020', '1D1D1D', '191919'],
        title: "",
        vAxis: { title: "Biomass (g/m²)" },
        hAxis: { title: "Layers", textStyle: {color: "white"} },
      });
      }
    } else {
      c.pointId.panel.widgets().add(c.pointId.errorMsg);
    }
    
  } else {
    pointValue = c.preload.img.reduceRegion({ geometry: point, scale: 30, reducer: ee.Reducer.first()
    });
    numb = pointValue.getNumber(m.imgInfo.bands[c.preload.rasterName].bname).getInfo();
    c.map.layers().set(1, ui.Map.Layer(point, { color: "FF0000" }, "Point"));
    if (numb !== null) {
      chart = ui.Chart.image.byRegion(c.preload.img, point, null, 30).setChartType("ColumnChart");
      chart.style().set({
        position: "bottom-left",
        width: "230px",
        height: "200px",
      });
      chart.setOptions({
        colors: ['787878'],
        title: "",
        vAxis: { title: "Biomass (g/m²)" },
        hAxis: { title: c.preload.rasterName, textStyle: {color: "white"} },
      });
      c.pointId.panel.widgets().add(chart);
    } else {
      c.pointId.panel.widgets().add(c.pointId.errorMsg);
    }
  }
});

// drawing tool
function clearGeometry() {
  c.map.drawingTools().layers().reset();
}
function drawPolygon() {
  c.map.drawingTools().setShape('polygon');
  c.map.drawingTools().draw();
}

// rectangle coordinate input tool
function setGeom(geometry){
  c.map.drawingTools().addLayer([geometry]);
}

function inputRectangle() {
  var W = ee.Number.parse(c.inputCoords.west.getValue());
  var S = ee.Number.parse(c.inputCoords.south.getValue());
  var E = ee.Number.parse(c.inputCoords.east.getValue());
  var N = ee.Number.parse(c.inputCoords.north.getValue());
  var rectangleGeoJSON = ee.Geometry.Rectangle([
    [W, S],
    [E, N]
  ]);
  rectangleGeoJSON.evaluate(setGeom);
}

// download
var downloadArgs;
var url;
var aoi;
var fullSizeLayer = ee.Geometry.Rectangle([
  [-123, 49],
  [-102, 34],
]);
function downloadImg() {
  fixBandNames();
  c.map.drawingTools().setShape(null);
  if (bandName !== undefined) {
    if (c.map.drawingTools().layers().get(0) !== undefined) {
      aoi = c.map.drawingTools().layers().get(0).toGeometry().dissolve();
      downloadArgs = {
        name: "StepwatApp",
        filePerBand: true,
        region: aoi
      };
      var img_clip = renamedImg.clip(aoi);
      var img_clip_double_mask = img_clip.mask(img_clip.mask()); // redundant mask
      url = img_clip_double_mask.getDownloadURL(downloadArgs);
    } else {
      downloadArgs = {
        name: "StepwatApp",
        filePerBand: true,
        region: fullSizeLayer.toGeoJSONString()
      };
      url = renamedImg.getDownloadURL(downloadArgs);
    }
  } else {
    if (c.map.drawingTools().layers().get(0) !== undefined) {
      aoi = c.map.drawingTools().layers().get(0).toGeometry().dissolve();
      downloadArgs = {
        name: "StepwatApp",
        filePerBand: true,
        region: aoi
      };
      url = c.preload.img.getDownloadURL(downloadArgs);
    } else {
      downloadArgs = {
        name: "StepwatApp",
        filePerBand: true,
        region: fullSizeLayer.toGeoJSONString()
      };
      url = c.preload.img.getDownloadURL(downloadArgs);
    }
  }
  c.downloadTool.downloadUrl.setUrl(url);
  c.downloadTool.downloadUrl.style().set({ shown: true });
}

/*******************************************************************************
 * Initialize *
 ******************************************************************************/
preloadRaster();
preloadLegend();
