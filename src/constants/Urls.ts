const API_URL = 'http://194.87.98.202:8000/api/'

const Urls = {
    login: `${API_URL}auth/login`,
    registration: `${API_URL}auth/registration`,
    user: (id: string) => `${API_URL}user/info?user_id=${id}`,
    characterBaseClothes: `${API_URL}user/character/base_clothes`,
    characterSave: `${API_URL}user/character/edit_description`,
    inventory: (id: string) => `${API_URL}blockchain/inventory?user_id=${id}`,
    balance: (id: string) => `${API_URL}blockchain/balance?user_id=${id}`,
    buy: `${API_URL}merch/buy`,
    claim: (id: string) => `${API_URL}user/claim_case?user_id=${id}`,
}

export default Urls
export { API_URL }