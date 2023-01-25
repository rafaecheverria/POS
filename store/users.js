export const state = () => ({
  _users: []
})

//Actions

export const actions = {
  async loadUsers({ commit }){
    let { data } = await this.$axios.get('https://therichpost.com/testjsonapi/users')
    console.log(data)
    commit('setUsers', data)
  }
}

//Getters
export const getter = {
  getUsers(state){
    state._users
  }
}

//Mutations
export const mutations = {
  setUsers(state, users){
    state._users = users
  }
}
