import Repository from './repository'

class SubtaskService {

    async getAll() {
        const endpoint = '/Subtasks'
        const response = await Repository.get(endpoint)
        return response
    }

    async getSubtaskById(id) {
        const endpoint = `/Subtasks/${id}`
        const response = await Repository.get(endpoint)
        return response
    }

    async editSubtask(id, data) {
        const endpoint = `/Subtasks/${id}`
        const response = await Repository.put(endpoint, data)
        return response
    }

    async addSubtask(data) {
        const endpoint = `/Subtasks`
        const response = await Repository.post(endpoint, data)
        return response
    }

    async deleteSubtask(id) {
        const endpoint = `/Subtasks/${id}`
        const response = await Repository.delete(endpoint)
        return response
    }
}

export default new SubtaskService()