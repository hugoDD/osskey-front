import request from '@/utils/request'

export const getAnalysisMain = () =>
  request({
    url: '/auth/osskey/mgt/main',
    method: 'get'
  })
