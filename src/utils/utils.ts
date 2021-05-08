import { IPageParam } from '@/api/types'

export const defaultPageParam : IPageParam = {
  // 过滤条件
  rsqlFilter: '',
  // 每页显示条数，默认 10
  pageSize: 10,
  // 当前页
  pageNumber: 1,
  sortField: '',
  sortOrder: ''
}
