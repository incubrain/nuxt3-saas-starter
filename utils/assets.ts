// this is a helper function to dynamically display images from the assets folder. required as of 18 May 2023
export function dynamicAsset(path: string): string {
  const assets = import.meta.glob('~/assets/**/*', {
    eager: true,
    import: 'default'
  })
  //! todo - fix this ts error
  return assets['/assets/' + path]
}
