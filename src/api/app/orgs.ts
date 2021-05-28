import request from '@/utils/request'
import {IPageParam, ISearchFilter, Organizations} from "@/api/types";

// 查询部门列表
export const listOrgs = (data: IPageParam) =>
  request({
    url: '/auth/manage/orgs/pageresults',
    method: 'post',
    data
  })


// 查询部门详细
export const getDept = (deptId: string) =>
  request({
    url: '/auth/manage/orgs/query/' + deptId,
    method: 'get'
  })


// 查询部门下拉树结构
export const treeselect = (params: ISearchFilter) =>
  request({
    url: '/auth/manage/orgs/tree',
    method: 'get',
    params
  })



// 新增部门
export const addDept = (data: Organizations) =>
   request({
    url: '/auth/manage/orgs/add',
    method: 'post',
    data
  })


// 修改部门
export const updateDept = (data: Organizations) =>
   request({
    url: '/auth/manage/orgs/update',
    method: 'put',
    data: data
  })


// 删除部门
export const delDept = (deptId:string[]) =>
   request({
    url: '/auth/manage/orgs/delete/' + deptId.join(','),
    method: 'delete'
  })

