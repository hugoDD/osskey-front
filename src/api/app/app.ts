import request from '@/utils/request'

export const getAppList = () =>
  request({
    url: '/auth/manage/apps/appList',
    method: 'get'
  })
