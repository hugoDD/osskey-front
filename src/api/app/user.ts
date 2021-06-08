import request from '@/utils/request'
import {IPageParam, IUserInfo} from "@/api/types";

// 查询部门列表
export const listUsers = (data: IPageParam) =>
  request({
    url: '/auth/manage/user/page',
    method: 'post',
    data
  })


// 查询部门详细
export const getUser = (id: string) =>
  request({
    url: '/auth/manage/user/query/' + id,
    method: 'get'
  })





// 新增部门
export const addUser = (data: IUserInfo) =>
   request({
    url: '/auth/manage/user/add',
    method: 'post',
    data
  })


// 修改部门
export const updateUser = (data: IUserInfo) =>
   request({
    url: '/auth/manage/user/update',
    method: 'put',
    data: data
  })


// 删除部门
export const delUser = (ids:string[]) =>
   request({
    url: '/auth/manage/user/delete/' + ids.join(','),
    method: 'delete'
  })

