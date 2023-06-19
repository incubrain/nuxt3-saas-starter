interface UrlConstructorOptions {
  baseURL: string
  bucket?: string
  folderPath?: string
  fileName?: string
  isPrivate?: boolean
  transform?: { width: number; height: number } | null
}

export const urlConstructor = (options: UrlConstructorOptions) => {
  const {
    baseURL,
    bucket = 'profile-public',
    folderPath = 'defaults/avatar',
    fileName = 'default.png',
    isPrivate = false,
    transform = null
  } = options

  if (fileName === 'default.png') {
    return `${baseURL}${bucket}/defaults/${fileName}`
  }
  
  const accessType = isPrivate ? 'private' : 'public'
  const url = new URL(`${accessType}/${bucket}/${folderPath}/${fileName}`, baseURL)

  if (transform) {
    url.searchParams.append('width', transform.width.toString())
    url.searchParams.append('height', transform.height.toString())
  }

  return url.href
}

interface ImageUrlOptions {
  bucket?: string
  folderPath?: string
  file?: string
  isPrivate?: boolean
  transform?: { width: number; height: number } | null
}

export const getImageURL = (options: ImageUrlOptions): string => {
  const superbaseURL = useRuntimeConfig().public.SUPABASE_URL
  const baseURL = `${superbaseURL}/storage/v1/render/image/`

  return urlConstructor({
    baseURL,
    ...options,
    fileName: options.file ?? 'default.png'
  })
}
