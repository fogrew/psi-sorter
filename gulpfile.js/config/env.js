const env = require('minimist')(process.argv.slice(2))

let localConfig = {}

if (env.debug) { localConfig.debug = env.debug }
if (env.proxy) { localConfig.proxy = env.proxy }
if (env.host) { localConfig.host = env.host }
if (env.ui) { localConfig.ui = { port: env.ui } }
if (env.port) { localConfig.port = env.port }
if (env.ghostMode) { localConfig.ghostMode = env.ghostMode } // can be {clicks: true, forms: true, scroll: false}
if (env.logLevel) { localConfig.logLevel = env.logLevel } // can be "info", "debug", "warn", or "silent"
if (env.logConnections) { localConfig.logConnections = env.logConnections }
if (env.logFileChanges) { localConfig.logFileChanges = env.logFileChanges }
if (env.logPrefix) { localConfig.logPrefix = env.logPrefix }
if (env.logSnippet) { localConfig.logSnippet = env.logSnippet }
if (env.reloadOnRestart) { localConfig.reloadOnRestart = env.reloadOnRestart }
if (env.notify) { localConfig.notify = env.notify }
if (env.open) { localConfig.open = env.open }

module.exports = localConfig
