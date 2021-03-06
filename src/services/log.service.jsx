import Repository from './repository'

class LogService {
    async getAllLogs() {
        const endpoint = '/Logs'
        const response = await Repository.get(endpoint)
        return response
    }

    async createLogs(credentials) {
        const endpoint = '/Logs'
        const response = await Repository.post(endpoint, credentials)
        return response
    }

    async approveLog(id) {
        const endpoint = '/Logs/approve/'+id
        const response = await Repository.put(endpoint)
        return response
    }

    async disapproveLog(id) {
        const endpoint = '/Logs/disapprove/'+id
        const response = await Repository.put(endpoint)
        return response
    }

    async deleteLog(id) {
        const endpoint = '/Logs/'+id
        const response = await Repository.delete(endpoint)
        return response
    }
}

export default new LogService()