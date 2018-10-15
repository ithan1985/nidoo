import axios from 'axios'

let baseURL

baseURL = 'http://192.168.1.35:8081'

export const HTTP = axios.create(
{
baseURL: baseURL
})
