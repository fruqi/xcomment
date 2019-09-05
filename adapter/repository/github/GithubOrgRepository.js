const axios = require('axios')

class GithubOrgRepository {

  async isOrgExist(org) {
    const url = `https://api.github.com/orgs/${org}`
    console.log(url)
    try {
      await axios.get(url)

      return true
    } catch(err) {
      const { response } = err
      console.log(`${response.status} - ${response.statusText}`)

      return false
    }
  }
}

module.exports = GithubOrgRepository