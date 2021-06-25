export interface IArticleData {
  id: number
  status: string
  title: string
  abstractContent: string
  fullContent: string
  sourceURL: string
  imageURL: string
  timestamp: string | number
  platforms: string[]
  disableComment: boolean
  importance: number
  author: string
  reviewer: string
  type: string
  pageviews: number
}

export interface IRoleData {
  key: string
  name: string
  description: string
  routes: any
}

export interface ITransactionData {
  orderId: string
  timestamp: string | number
  username: string
  price: number
  status: string
}

export interface IUserData {
  id: number
  username: string
  password: string
  name: string
  email: string
  phone: string
  avatar: string
  introduction: string
  roles: string[]
}

export interface IAppData {
  id: string
  name: string
  loginUrl: string
  inducer: string
  icon: string
}

export interface IProfile {
  name: string
  email: string
  mobile: string
  avatar: string
  introduction: string
  roles: string
  oldPassword: string
  newPassword: string
  confirmPassword: string
}

export interface IUserInfo extends AbstractBaseDomain{
  id: string
  username: string
  userType: string
  windowsAccount: string
  displayName: string
  nickName: string
  nameZHSpell: string
  nameZHShortSpell: string
  givenName: string
  middleName: string
  familyName: string
  honorificPrefix: string
  honorificSuffix: string
  formattedName: string
  married: number
  gender: number
  birthDate: string
  picture: string
  idType: number
  idCardNo: string
  webSite: string
  startWorkDate: string
  authnType: number
  email: string
  mobile: string
  mobileVerified: number
  lastLoginTime: string
  lastLoginIp: string
  lastLogoffTime: string
  passwordSetType: number
  password: string
  loginCount: number
  locale: string
  timeZone: string
  preferredLanguage: string
  workCountry: string
  workRegion: string// provinc
  workLocality: string// city: string
  workStreetAddress: string
  workAddressFormatted: string
  workEmail: string
  workPhoneNumber: string
  workPostalCode: string
  workFax: string
  homeCountry: string
  homeRegion: string// provinc
  homeLocality: string// city: string
  homeStreetAddress: string
  homeAddressFormatted: string
  homeEmail: string
  homePhoneNumber: string
  homePostalCode: string
  homeFax: string
  employeeNumber: string
  costCenter: string
  organization: string
  division: string
  departmentId: string
  department: string
  jobTitle: string
  jobLevel: string
  managerId: string
  manager: string
  assistantId: string
  assistant: string
  entryDate: string
  quitDate: string
  ims: string
  extraAttribute: string
  online: number
  status: number
  roleIds: string[]
}

/*
 *
 */
export interface IHistoryLogin {
  id: string
  sessionId: string
  uid: string
  username: string
  displayName: string
  loginType: string
  message: string
  code: string
  provider: string
  sourceIp: string
  browser: string
  platform: string
  application: string
  loginUrl: string
  loginTime: string
  logoutTime: string
}

export interface IAccessLogin {
  id: string
  sessionId: string
  appId: string
  appName: string
  uid: string
  username: string
  displayName: string
  loginTime: string
}

export interface IHistoryLogs {
  id: string
  serviceName: string
  message: string
  content: string
  messageType: string
  operateType: string
  username: string
  code: string
  createdBy: string
  createdDate: string

}

export interface Organizations extends AbstractBaseDomain{
  id:string
  code:string
  name:string
  fullName:string
  parentId:string
  parentName:string
  type:string
  codePath:string
  namePath:string
  level:string
  hasChild:string
  division:string
  country:string
  region:string
  locality:string
  street:string
  address:string
  contact:string
  postalCode:string
  phone:string
  fax:string
  email:string
  sortIndex:string
  sortOrder:string
  status:string
}



interface MultipartFile{

}

interface AbstractBaseDomain{
  description:string
  createdBy:string
  createdDate:string
  modifiedBy:string
  modifiedDate:string
}



interface ISearchFilter {
  // 过滤条件
  rsqlFilter: string
}

interface IPageParam {
  // 过滤条件
  rsqlFilter: string
  /*
   * 每页显示条数，默认 10
   */
  pageSize: number
  /*
   * 当前页
   */
  pageNumber: number
  allOpt<T>(entity: T, opt: Map<string, Array<string>>): IPageParam
  // sortField: string
  // sortOrder: string

  eq(name: string, value: any): IPageParam
  ne(name: string, value: any): IPageParam
  gt(name: string, value: any): IPageParam
  lt(name: string, value: any): IPageParam
  gte(name: string, value: any): IPageParam
  lte(name: string, value: any): IPageParam
  in(name: string, value: any): IPageParam
  notIn(name: string, value: any): IPageParam
  ex(name: string, value: any): IPageParam
  re(name: string, value: any): IPageParam
  and(): IPageParam
  or(): IPageParam
}
