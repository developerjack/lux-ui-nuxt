// import axios  from "axios";
import { request } from '@/utils/request'

export function getAdminList (data: { pageNum: number,pageSize: number } = { pageNum: 1, pageSize: 10 }) {
  return request.get(`/netApi/user/account/page?pageNum=${data.pageNum}&pageSize=${data.pageSize}`)
}

export function createAccount (data: {}) {
  return request.post(`/netApi/user/account`, data)
}

export function updateAccount (data: {}) {
  return request.put(`/netApi/user/account`, data)
}