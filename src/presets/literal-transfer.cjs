module.exports = () => ({
  plugins: [
    require("@babel/plugin-transform-template-literals"),
  ]
  // plugins: [[
  //   'babel-plugin-import',
  //   {
  //     libraryName: '@mui/material',
  //     libraryDirectory: '',
  //     camel2DashComponentName: false,
  //   },
  //   'core',
  // ],
  // [
  //   'babel-plugin-import',
  //   {
  //     libraryName: '@mui/icons-material',
  //     libraryDirectory: '',
  //     camel2DashComponentName: false,
  //   },
  //   'icons',
  // ],
  // ]
});