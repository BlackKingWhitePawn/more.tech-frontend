const API_URL = '/api/'

const Urls = {
    login: `${API_URL}login`,
    user: (id: Number) => `${API_URL}user/${id}`,
}

export default Urls
export { API_URL }