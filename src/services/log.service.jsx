import Repository from './repository'

class LogService {
    async getAllLogs() {
        const endpoint = '/Logs'
        const response = await Repository.get(endpoint)
        return response
    }

    async createLogs() {
        const endpoint = '/Logs'
        const response = await Repository.post(endpoint)
        return response
    }
}

export default new LogService()