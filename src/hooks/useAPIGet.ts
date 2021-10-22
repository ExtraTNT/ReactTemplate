import { useState, useEffect } from 'react'
import { list } from '../services/api'

type APICallback<T> = (data: any, error?: APIError) => void
type APIParams<T> = (endpoint: string, options?: object) => Promise<T>
type APIGetHook<T> = [
    (endpoint: string, options?: object) => Promise<void>,
    {data: any, error: APIError | null}
]
class APIError {
    status: number
    message: string
  
    constructor(status: number, message: string) {
      this.status = status
      this.message = message
    }
}
export function useAPIGet<T>(
    params: APIParams<T>,
    callback?: APICallback<T>
): APIGetHook<T> {
    const [error, setError] = useState<APIError | null>(null)
    const [data, setData] = useState<any | null>(null)
    async function get(endpoint: string, options?: object) {
        try {
            const d = await list(endpoint, options)
            setData(d)
        } catch (e) {
            let err = e.split(',')
            setError(new APIError(err[0], err[1]))
        } finally {
            if (callback) {
                callback(data, error)
            }
        }
    }
    return [get, {data, error}]
}
