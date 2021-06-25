import {IPageParam, IUserInfo} from '@/api/types'

export const defaultPageParam : IPageParam = {
  // 过滤条件
  rsqlFilter: '',
  // 每页显示条数，默认 10
  pageSize: 10,
  // 当前页
  pageNumber: 1,

  allOpt<T>(entity: T): IPageParam {
    console.log(entity)
    return this
  },

  eq(name: string, value: any): IPageParam {
    if (name && name !== '') {
      this.rsqlFilter = this.rsqlFilter + name + '==' + value
    }
    return this
  },

  ne(name: string, value: any): IPageParam {
    if (name && name !== '') {
      this.rsqlFilter = this.rsqlFilter + name + '=ne=' + value
    }
    return this
  },
  gt(name: string, value: any): IPageParam {
    if (name && name !== '') {
      this.rsqlFilter = this.rsqlFilter + name + '=gt=' + value
    }
    return this
  },
  lt(name: string, value: any): IPageParam {
    if (name && name !== '') {
      this.rsqlFilter = this.rsqlFilter + name + '=lt=' + value
    }
    return this
  },
  gte(name: string, value: any): IPageParam {
    if (name && name !== '') {
      this.rsqlFilter = this.rsqlFilter + name + '=gte=' + value
    }
    return this
  },
  lte(name: string, value: any): IPageParam {
    if (name && name !== '') {
      this.rsqlFilter = this.rsqlFilter + name + '=lte=' + value
    }
    return this
  },
  in(name: string, value: any): IPageParam {
    if (name && name !== '') {
      this.rsqlFilter = this.rsqlFilter + name + '=in=' + value
    }
    return this
  },
  notIn(name: string, value: any): IPageParam {
    if (name && name !== '') {
      this.rsqlFilter = this.rsqlFilter + name + '=nin=' + value
    }
    return this
  },
  ex(name: string, value: any): IPageParam {
    if (name && name !== '') {
      this.rsqlFilter = this.rsqlFilter + name + '=ex=' + value
    }
    return this
  },
  re(name: string, value: any): IPageParam {
    if (name && name !== '') {
      this.rsqlFilter = this.rsqlFilter + name + '=re=' + value
    }
    return this
  },
  and(): IPageParam {
    this.rsqlFilter = this.rsqlFilter + ';'
    return this
  },

  or(): IPageParam {
    this.rsqlFilter = this.rsqlFilter + ','
    return this
  }
}

export const defaultUserInfo: IUserInfo = {
  id: '',
  username: '',
  userType: '',
  windowsAccount: '',
  displayName: '',
  nickName: '',
  nameZHSpell: '',
  nameZHShortSpell: '',
  givenName: '',
  middleName: '',
  familyName: '',
  honorificPrefix: '',
  honorificSuffix: '',
  formattedName: '',
  married: 0,
  gender: 0,
  birthDate: '',
  picture: '',
  idType: 0,
  idCardNo: '',
  webSite: '',
  startWorkDate: '',
  authnType: 0,
  email: '',
  mobile: '',
  mobileVerified: 0,
  lastLoginTime: '',
  lastLoginIp: '',
  lastLogoffTime: '',
  passwordSetType: 0,
  password: '',
  loginCount: 0,
  locale: '',
  timeZone: '',
  preferredLanguage: '',
  workCountry: '',
  workRegion: '',// provinc
  workLocality: '',// city: '',
  workStreetAddress: '',
  workAddressFormatted: '',
  workEmail: '',
  workPhoneNumber: '',
  workPostalCode: '',
  workFax: '',
  homeCountry: '',
  homeRegion: '',// provinc
  homeLocality: '',// city: '',
  homeStreetAddress: '',
  homeAddressFormatted: '',
  homeEmail: '',
  homePhoneNumber: '',
  homePostalCode: '',
  homeFax: '',
  employeeNumber: '',
  costCenter: '',
  organization: '',
  division: '',
  departmentId: '',
  department: '',
  jobTitle: '',
  jobLevel: '',
  managerId: '',
  manager: '',
  assistantId: '',
  assistant: '',
  entryDate: '',
  quitDate: '',
  ims: '',
  extraAttribute: '',
  online: 0,
  status: 1,
  roleIds: [],
  description:'',
  createdBy:'',
  createdDate:'',
  modifiedBy:'',
  modifiedDate:''
}
