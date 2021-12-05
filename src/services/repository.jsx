import axios from "./base.service";

const getToken = () => {
    try {
        return localStorage.getItem("token");
    } catch (error) {
        return "";
    }
};

class Repository {
    constructor() {
        this.token = "";
    }

    async get(endpoint, data) {
        this.token = getToken();
        const response = await axios
            .get(`${endpoint}`, {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${this.token}`,
                },
                params: data,
            })
            .then((res) => {
                return {
                    code: res.status,
                    message: res.statusText,
                    data: res,
                };
            })
            .catch((err) => {
                return {
                    code: err.response.status,
                    message: err.response.message,
                    data: undefined,
                };
            });
        return response;
    }

    async post(endpoint, data) {
        this.token = getToken();
        const response = await axios
            .post(`${endpoint}`, data, {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${this.token}`,
                },
            })
            .then((res) => {
                console.log(res)
                return {
                    code: res.status,
                    message: res.statusText,
                    data: res,
                };
            })
            .catch((err) => {
                console.log(err.response)
                return {
                    code: err.response.status,
                    message: err.response.message,
                    data: undefined,
                };
            });
        return response;
    }

    async put(endpoint, data) {
        this.token = getToken();
        const response = await axios
            .put(`${endpoint}`, data, {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${this.token}`,
                },
            })
            .then((res) => {
                return {
                    code: res.status,
                    message: res.statusText,
                    data: res,
                };
            })
            .catch((err) => {
                return {
                    code: err.response.status,
                    message: err.response.message,
                    data: undefined,
                };
            });
        return response;
    }

    async delete(endpoint, data) {
        this.token = getToken();
        const response = await axios
            .delete(`${endpoint}`, {
                data: data,
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${this.token}`,
                },
            })
            .then((res) => {
                return {
                    code: res.status,
                    message: res.statusText,
                    data: res,
                };
            })
            .catch((err) => {
                return {
                    code: err.response.status,
                    message: err.response.message,
                    data: undefined,
                };
            });
        return response;
    }
}

export default new Repository();
