'use strict'

const path = require('path')
const cwd = process.cwd()
const paths = {}

paths.dev = path.join(cwd, '/dev')
paths.assets = path.join(cwd, '/docs')

paths.source = {}
paths.public = {}

paths.source.styles = paths.dev + '/styles'
paths.source.scripts = paths.dev + '/scripts'
paths.source.images = paths.dev + '/images'

paths.public.styles = paths.assets + '/css'
paths.public.scripts = paths.assets + '/js'
paths.public.images = paths.assets + '/i'

module.exports = paths
