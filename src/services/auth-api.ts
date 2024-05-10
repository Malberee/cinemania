import axios from 'axios'

type credentials = {
  email: string
  password: string
}

export const register = async (
  credentials: credentials
): Promise<{ email: string; token: string }> => {
  const { data } = await axios.post('/register', credentials, {
    baseURL: 'https://63b4325833e46b2e.mokky.dev',
  })

  return { email: data.data.email, token: data.token }
}
