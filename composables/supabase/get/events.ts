export const getSingleEvent = async (eventId: number) => {
  const client = useSupabase()
  const { data, error } = await client.rpc('get_event_single', { eventId })
  console.log('eventById', data, error)
  return {
    data,
    error
  }
}

export const eventsMany = async () => {
  const client = useSupabase()
  const { data, error } = await client.rpc('get_events_many')

  console.log('eventsMany', data, error)

  return {
    data,
    error
  }
}
