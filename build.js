const { Parcel } = require('@parcel/core')

const bundler = new Parcel({
  entries: './demo/index.html',
  defaultConfig: '@parcel/config-default',
  shouldContentHash: false,
  shouldDisableCache: true,
  defaultTargetOptions: {
    sourceMaps: false,
  },
})

bundler.run()
