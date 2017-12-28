const localConfig = require('./local')
const env = require('./env')

const defaults = {
  port: 3000,
  ui: {
    port: 8081
  },
  ghostMode: false,
  logPrefix: 'psi-sorter',
  logLevel: 'info',
  logConnections: false,
  logSnippet: false,
  reloadOnRestart: true,
  notify: false,
  open: false
}

const config = Object.assign(defaults, localConfig, env)

module.exports = config
