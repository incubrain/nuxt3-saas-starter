import { FileObject } from '@supabase/storage-js'

export const venueSingle = async (venueId: number) => {
  console.log('venueById', venueId)
  const client = usePublicClient()
  const { data, error } = await client.rpc('get_venue_single', { p_venue_id: venueId })
  console.log('venueById2', data, error)
  return {
    data,
    error
  }
}

export const venuesMany = async () => {
  const client = usePublicClient()
  const { data, error } = await client.rpc('get_venues_many')
  console.log('venuesMany', data, error)

  return {
    data,
    error
  }
}

const baseUrl = 'https://idsifamzvzlpgnmlnldw.supabase.co/storage/v1/object/public/'

export async function getVenueImages(venueId: number): Promise<string[]> {
  const client = usePublicClient()
  const { data, error } = await client.storage.from('venues-public').list(`${venueId}/venue/`)

  if (error) {
    console.error('Error fetching venue images:', error)
    return []
  }

  // If you want to store full URLs
  // Filter out .folderPlaceholder
  const filtered = data.filter((file: FileObject) => !file.name.startsWith('.'))
  const imageUrls = filtered.map((file: FileObject) => `${baseUrl}venues-public/${venueId}/venue/${file.name}`)

  return imageUrls
}
