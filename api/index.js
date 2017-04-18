const baseUrl = 'http://jsonplaceholder.typicode.com/'
export default Api = {
  getCapitulos: async () => {
    try {
      let response = await fetch(`${baseUrl}albums`, {
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
  }
}