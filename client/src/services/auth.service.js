import axios from 'axios'

class AuthService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.REACT_APP_SERVER_URL || 'http://localhost:5005',
    })

    // Automatically set JWT token on the request headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem('authToken')

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` }
      }

      return config
    })
  }

  login = async (requestBody) => {
    return await this.api.post('/auth/signin', requestBody)
    // same as
    // return axios.post("http://localhost:5005/auth/login");
  }

  signup = async (requestBody) => {
    return await this.api.post('/auth/signup', requestBody)
    // same as
    // return axios.post("http://localhost:5005/auth/singup");
  }

  logout = async () => {
    return await this.api.get('/auth/signout')
  }

  verify = async () => {
    return await this.api.get('/auth/verify')
    // same as
    // return axios.post("http://localhost:5005/auth/verify");
  }
}

// Create one instance (object) of the service
const authService = new AuthService()

export default authService
