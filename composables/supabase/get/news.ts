const newsMany = async () => {
  const { data, error } = await useFetch(
    'https://api.apify.com/v2/datasets/COV7EwyQwXmPQ7L26/items?token=apify_api_MjUrrfNI1stDZPOaVaCEncNGJweJfs1XebKA'
  )

  console.log('news data', data, error)

  return {
    data,
    error
  }
}

export { newsMany }
