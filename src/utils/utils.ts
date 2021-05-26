import { IPageParam } from '@/api/types'

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
