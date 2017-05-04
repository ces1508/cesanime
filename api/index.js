const baseUrl = 'http://192.168.0.9:3000'
export default Api = {
  getCapitulos: async (animeId) => {
    try {
      let response = await fetch(`${baseUrl}/anime/${animeId}/capitulos`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })

      let responseJson = await response.json()
      return responseJson

    } catch (e) {
      console.warn('error', e.message)
      return []
    }
  },
  topAnimes: async () => {
    try {
      let request = await fetch(`${baseUrl}/animes-top`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      let response = await request.json()
      return response
    } catch (e) {
      console.warn(e.message)
      return {error: true, message: e.message}
    }
  }
}