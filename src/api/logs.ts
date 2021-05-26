import request from '@/utils/request'
import { IPageParam } from '@/api/types'

export const getLoginLogsPage = (data: IPageParam) =>
  request({
    url: '/auth/manage/historys/login/log',
    method: 'post',
    data
  })

export const getAccessLogsPage = (data: IPageParam) =>
  request({
    url: '/auth/manage/historys/appAccess/log',
    method: 'post',
    data
  })

export const getOptLogsPage = (data: IPageParam) =>
  request({
    url: '/auth/manage/historys/opt/logs',
    method: 'post',
    data
  })
