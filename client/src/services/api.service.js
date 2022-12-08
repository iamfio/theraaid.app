import axios from 'axios'

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL:
        import.meta.env.REACT_APP_SERVER_URL + '/api' ||
        'http://localhost:5005/api',
    })
  }
}

const apiService = new ApiService()
export default apiService
