const axios = require('axios')

class GithubMemberRepository {

  async membersForOrg(org) {
    const url = `https://api.github.com/orgs/${org}/members`

    try {
      const response = await axios.get(url)
      const { data } = response

      const result = data.map(member => {
        return {
          login: member.login,
          "avatar_url": member.avatar_url
        }
      })

      const members = await Promise.all(result.map(async member => {
        member['followers'] = await this.followers(member.login)
        member['following'] = await this.following(member.login)

        return member
      }))

      const sortedByFollowers = (m1, m2) => { return m2.followers - m1.followers }

      return { members: members.sort(sortedByFollowers) }
    } catch(err) {
      const { response } = err
      return {
        status: response.status,
        message: response.statusText
      }
    }
  }

  // no private in ES6
  async followers(login) {
    const url = `https://api.github.com/users/${login}/followers`

    try {
      const response = await axios.get(url)

      return response.data.length
    } catch(err) {
      console.log(err)
      return 0
    }
  }

  async following(login) {
    const url = `https://api.github.com/users/${login}/following`

    try {
      const response = await axios.get(url)

      return response.data.length
    } catch(err) {
      console.log(err)
      return 0
    }
  }
}

module.exports = GithubMemberRepository