import request from '@/utils/request'
import {IPageParam, IProfile} from "@/api/types";

export const getMyProfile = () =>
  request({
    url: '/auth/manage/profile/myProfile',
    method: 'get'
  })

export const loginLogs = (data : IPageParam) =>
  request({
    url: '/auth/manage/historys/login/log',
    method: 'post',
    data
  })

export const changePasswod = (params: any) =>
  request({
    url: '/auth/manage/safe/changePassword',
    method: 'put',
    params
  })
