const Path = require('path')
const { Parcel } = require('@parcel/core')
const Bundler = require('parcel-bundler')

function buildV2() {
  const bundler = new Parcel({
    entries: './demo/index.html',
    defaultConfig: '@parcel/config-default',
    shouldContentHash: false,
    shouldDisableCache: true,
    defaultTargetOptions: {
      sourceMaps: false,
      publicUrl: 'aaa',
    },

  })

  bundler.run()
}

async function buildV1() {
  const entryFiles = Path.join(__dirname, './demo/index.html')

  const bundler = new Bundler(entryFiles, {
    cache: false,
    contentHash: false,
    publicUrl: 'aaa',
    sourceMaps: false,
    minify: false,
  })
  bundler.on('bundled', (bundle) => {
    console.log('🚀 ~ bundler.on ~ bundle:', bundle.entryAsset)
    bundle.entryAsset?.type === 'html'
      && bundle.entryAsset?.ast?.walk((node) => {
        if (
          node.type === 'tag'
          && node.name === 'meta'
        ) {
          console.log('🚀 ~ &&bundle.entryAsset?.ast?.walk ~ node:', node)
          const value = node.attribs.content
          // Do something with the custom meta tag value, e.g. log it
          console.log(`Custom meta value: ${value}`)
        }
      })
  })

  bundler.bundle()
}

buildV2()
