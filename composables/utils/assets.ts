export function dynamicAsset(path: string): string {
  const assets = import.meta.glob('~/assets/**/*', {
    eager: true,
    import: 'default'
  })
  //! todo - fix this ts error
  return assets['/assets/' + path]
}
