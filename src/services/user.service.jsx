import Repository from './repository'

class UserService {
    async login(credentials) {
        const endpoint = '/Login'
        const response = await Repository.post(endpoint, credentials)
        return response
    }

    async getAllUsers() {
        const endpoint = '/Users/getAll'
        const response = await Repository.get(endpoint)
        return response
    }

    async getUserById(id) {
        const endpoint = `/Users/getUser/${id}`
        const response = await Repository.get(endpoint)
        return response
    }

    async getManager() {
        const endpoint = '/Users/getManager'
        const response = await Repository.get(endpoint)
        return response
    }

    async getStaff() {
        const endpoint = '/Users/getStaff'
        const response = await Repository.get(endpoint)
        return response
    }
}

export default new UserService()