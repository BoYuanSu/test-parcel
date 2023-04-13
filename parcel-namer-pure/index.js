const { Namer } = require('@parcel/plugin')

module.exports = new Namer({
  name({ bundle }) {
    console.log('🚀 ~ name ~ bundle.type:', bundle.type)
    console.log('🚀 ~ name ~ bundle.hashReference:', bundle.hashReference)
    if (bundle.type === 'png' || bundle.type === 'jpg') {
      const filePath = bundle.getMainEntry().filePath
      console.log('🚀 ~ name ~ filePath:', filePath)
      // return `images/${path.basename(filePath)}`
      return null
    }

    // Allow the next namer to handle this bundle.
    return null
  },
})
