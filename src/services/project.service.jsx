import Repository from './repository'

class ProjectService {

    async getAll() {
        const endpoint = '/Projects'
        const response = await Repository.get(endpoint)
        return response
    }

    async getAllFilter(limit, page) {
        const endpoint = `Projects?page=${page}&limit=${limit}`
        const response = await Repository.get(endpoint)
        return response
    }

    async getProjectById(id) {
        const endpoint = `/Projects/${id}`
        const response = await Repository.get(endpoint)
        return response
    }

    async editProject(id, data) {
        const endpoint = `/Projects/${id}`
        const response = await Repository.put(endpoint, data)
        return response
    }

    async addProject(data) {
        const endpoint = `/Projects`
        const response = await Repository.post(endpoint, data)
        return response
    }

    async assignProjectToStaff(projectId, data) {
        const endpoint = `/Projects/assignProjectToStaff/${projectId}`
        const response = await Repository.put(endpoint, data)
        return response
    }

    async deleteProject(id) {
        const endpoint = `/Projects/${id}`
        const response = await Repository.delete(endpoint)
        return response
    }
}

export default new ProjectService()