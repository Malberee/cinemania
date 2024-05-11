import axios from 'axios'
import { child, get, getDatabase, push, ref, set } from 'firebase/database'

type credentials = {
  email: string
  password: string
}

export const auth = async (
  credentials: credentials,
  action: 'register' | 'login'
): Promise<{ email: string; token: string }> => {
  const endpoints = {
    register: 'register',
    login: 'auth',
  }

  const { data } = await axios.post(`/${endpoints[action]}`, credentials, {
    baseURL: 'https://63b4325833e46b2e.mokky.dev',
  })

  return { email: data.data.email, token: data.token }
}

export const fetchLibrary = async (userId: string) => {
  const dbRef = ref(getDatabase())

  const library = await get(child(dbRef, `users/${userId}/library`))

  if (library.exists()) {
    console.log(library.val())

    return library.val()
  }

  throw new Error()
}

export const addMovieToLibrary = async (userId, movie) => {
  const db = getDatabase()
  const userLibraryRef = ref(db, `users/${userId}/library`)
  const newMovie = push(userLibraryRef)
  set(newMovie, movie)
}
