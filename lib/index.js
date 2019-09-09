const UnstyledComponents = [
  'Schema',
  'DOMHelper',
  'Whisper',
  'SafeAnchor',
  'Portal',
  'IntlProvider'
];

module.exports = function(context, opts = {}) {
  const { style, theme } = opts;
  const getDefaultStyle = name => {
    const componentName = name.match(/rsuite\/lib\/(\S*)/)[1];
    const lessPath = `rsuite/lib/${componentName}/styles`;

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
          libraryDirectory: 'lib',
          camel2DashComponentName: false,
          style: style === true ? getDefaultStyle : style
        }
      ]
    ]
  };
};
