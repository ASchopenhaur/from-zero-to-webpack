module.exports = ({ server } = {}) => ({
    presets: [
      [ "env", {
        targets: server ? {node: 'current'} : {browsers: ['> 5%', 'last 2 versions', 'ie 11']},
        modules: false
      }],
      'react',
      'es2015'
    ],
    env: {
      development: {
        plugins: [
          "babel-plugin-transform-react-jsx-self",
          "babel-plugin-transform-react-jsx-source"
        ]
      }
    }
  });