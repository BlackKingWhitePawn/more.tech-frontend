const API_URL = 'http://194.87.98.202:8000/api/'

const Urls = {
    login: `${API_URL}auth/login`,
    registration: `${API_URL}auth/registration`,
    user: (id: Number) => `${API_URL}user/${id}`,
    characterBaseClothes: `${API_URL}user/character/base_clothes`
}

export default Urls
export { API_URL }