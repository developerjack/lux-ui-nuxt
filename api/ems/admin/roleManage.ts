// import axios from "axios";
import { request } from '@/utils/request'

export function getRoleDetail (id: number) {
    return request.get(`/netApi/user/role/${id}`) //, { headers: { Authorization: `Bearer ${token}` } }
}

export function logicDeleteRole (id: number) {
    return request.delete(`/netApi/user/role/${id}`)
}

export function createRole (data: {}) {
    return request.post(`/netApi/user/role`, data)
}

export function updateRole (data: {}) {
    return request.put(`/netApi/user/role`, data)
}

export function getPermission () {
    return request.get(`/netApi/user/permission`)
}

export function getRoleList () {
    return request.get(`/netApi/user/role`)
}