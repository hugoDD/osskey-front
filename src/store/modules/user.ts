import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { getUserInfo, login, logout } from '@/api/users'
import {getSessionId, getToken, removeToken, setSession, setToken} from '@/utils/cookies'
import router, { resetRouter } from '@/router'
import { PermissionModule } from './permission'
import { TagsViewModule } from './tags-view'
import store from '@/store'

export interface IUserState {
  token: string
  name: string
  avatar: string
  introduction: string
  roles: string[]
  email: string
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
  public token = getToken() || ''
  public sessionId = getSessionId || ''
  public name = ''
  public avatar = ''
  public introduction = ''
  public roles: string[] = []
  public email = ''
  public mobile = ''

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token
  }

  @Mutation
  private SET_NAME(name: string) {
    this.name = name
  }

  @Mutation
  private SET_AVATAR(avatar: string) {
    this.avatar = avatar
  }

  @Mutation
  private SET_INTRODUCTION(introduction: string) {
    this.introduction = introduction
  }

  @Mutation
  private SET_ROLES(roles: string[]) {
    this.roles = roles
  }

  @Mutation
  private SET_EMAIL(email: string) {
    this.email = email
  }

  @Mutation
  private SET_MOBILE(mobile: string) {
    this.mobile = mobile
  }

  @Action
  public async Login(userInfo: { authType: string, username: string, password: string }) {
    let {authType, username, password} = userInfo
    username = username.trim()
    const {data} = await login({authType, username, password})
    console.log(data)
    setToken(data.accessToken)
    setSession(data.sessionId)
    this.SET_TOKEN(data.accessToken)
    // roles must be a non-empty array
    if (!data.roles || data.roles.length <= 0) {
      throw Error('GetUserInfo: roles must be a non-null array!')
    }
    // this.SET_ROLES(data.roles)
    this.SET_NAME(data.name)
    this.SET_AVATAR(data.avatar)
    this.SET_INTRODUCTION(data.introduction)
    this.SET_EMAIL(data.email)
  }

  @Action
  public ResetToken() {
    removeToken()
    this.SET_TOKEN('')
    this.SET_ROLES([])
  }

  @Action
  public async GetUserInfo() {
    if (this.token === '') {
      throw Error('GetUserInfo: token is undefined!')
    }
    const {data} = await getUserInfo({ /* Your params here */})
    if (!data) {
      throw Error('Verification failed, please Login again.')
    }
    const {roles, name, avatar, introduction, email, phone} = data
    // roles must be a non-empty array
    if (!roles || roles.length <= 0) {
      throw Error('GetUserInfo: roles must be a non-null array!')
    }
    console.log('getuserinfo' + data)
    this.SET_ROLES(roles)
    this.SET_NAME(name)
    this.SET_AVATAR(avatar)
    this.SET_INTRODUCTION(introduction)
    this.SET_EMAIL(email)
    this.SET_MOBILE(phone)
  }

  @Action
  public async ChangeRoles(role: string) {
    // Dynamically modify permissions
    const token = role + '-token'
    this.SET_TOKEN(token)
    setToken(token)
    await this.GetUserInfo()
    resetRouter()
    // Generate dynamic accessible routes based on roles
    PermissionModule.GenerateRoutes(this.roles)
    // Add generated routes
    PermissionModule.dynamicRoutes.forEach(route => {
      router.addRoute(route)
    })
    // Reset visited views and cached views
    TagsViewModule.delAllViews()
  }

  @Action
  public async LogOut() {
    if (this.token === '') {
      throw Error('LogOut: token is undefined!')
    }
    await logout()
    removeToken()
    resetRouter()

    // Reset visited views and cached views
    TagsViewModule.delAllViews()
    this.SET_TOKEN('')
    this.SET_ROLES([])
  }
}

export const UserModule = getModule(User)
