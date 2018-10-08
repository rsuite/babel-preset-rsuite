const kebabCase = string => string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

module.exports = function(context, opts = {}) {
  const { style } = opts;
  const getDefaultStyle = name => {
    const componentName = name.match(/rsuite\/lib\/(\S*)/)[1];
    return `rsuite/lib/styles/${kebabCase(componentName)}`;
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
