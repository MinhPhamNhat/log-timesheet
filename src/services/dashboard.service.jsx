import Repository from './repository'

class DashboardService {
    async satistic() {
        const endpoint = '/Statistic'
        const response = await Repository.get(endpoint)
        return response
    }
}

export default new DashboardService()