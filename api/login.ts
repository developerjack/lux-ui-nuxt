import axios from 'axios'
import { request } from '@/utils/request'

export function login (data: {}) {
    return request.post(`/netApi/user/oauth2/token`, data)
}

export function logout (token: string) {
    return request.post(`/netApi/user/oauth2/token`, token, { headers: {'Authorization': `Bearer ${token}` } })
}
