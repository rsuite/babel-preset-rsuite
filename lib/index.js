const UnstyledComponents = [
  'Schema',
  'DOMHelper',
  'Whisper',
  'SafeAnchor',
  'Portal',
  'IntlProvider',
  'Affix',
  'RangeSlider'
];

module.exports = function(context, opts = {}) {
  const { style, theme, libraryDirectory = 'lib' } = opts;
  const getDefaultStyle = name => {
    const componentName = name.match(new RegExp(`rsuite\/${libraryDirectory}\/(\\S*)`))[1];
    const lessPath = `rsuite/${libraryDirectory}/${componentName}/styles`;

    if (UnstyledComponents.indexOf(componentName) >= 0) {
      return false;
    }

    // Use theme styles
    if (theme) {
      return `${lessPath}/themes/${theme}`;
    }

    return lessPath;
  };

  return {
    plugins: [
      [
        require('babel-plugin-import')['default'],
        {
          libraryName: 'rsuite',
          libraryDirectory: libraryDirectory,
          camel2DashComponentName: false,
          style: style === true ? getDefaultStyle : style
        }
      ]
    ]
  };
};
