const axios = require('axios');

class GithubRepository {

  async membersForOrg(org) {
    const url = `https://api.github.com/orgs/${org}/members`
    console.log(url);
    try {
      const response = await axios.get(url);
      const { data } = response;

      const members = data.map(member => {
        return { login: member.login, "avatar_url": member.avatar_url, followers: 0, following: 0 }
      })

      return { members };
    } catch(err) {
      const { response } = err;
      return {
        status: response.status,
        message: response.statusText
      }
    }
  }


}

module.exports = GithubRepository;