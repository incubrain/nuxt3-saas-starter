const data = ref([{ id: 1, title: 'old content', body: 'some stuff to show' }])

const single = () => {
  const client = useSupabase()
  const channel = client.channel('newsfeed')
  channel.on(
    'postgres_changes',
    {
      Pt: '*',
      schema: 'public',
      table: 'posts'
    },
    (payload) => {
      data.value.push(payload.new)
      console.log('data updated', payload)
    }
  )

  channel.subscribe(async (status) => {
    if (status === 'SUBSCRIBED') {
      console.log('you are subscribed to the channel')
    }
    console.log('subscribe status: ', status)
  })
  // return {
  //     data,
  //     error,
  // }
}

export { single, data }
