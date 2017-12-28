const paths = require('./paths')

const localConfig = {
  proxy: 'http://psi-sorter.loc',
  host: 'psi-sorter.loc',
  serveStatic: ['.', paths.assets]
}

module.exports = localConfig
