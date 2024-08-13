import { parseJSON } from "@/utils/parse"

const baseURL = import.meta.env.VITE_BASE_URL ?? ""

const api = {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(`${baseURL}/api${url}`)
    const data = await response.json()
    return parseJSON(data) as T
  },
  async post<T, D>(url: string, data: D): Promise<T> {
    const response = await fetch(`${baseURL}/api${url}`, {
      method: "POST",
      body: JSON.stringify(data),
    })
    const responseData = await response.json()
    return parseJSON(responseData) as T
  },
}

export default api
