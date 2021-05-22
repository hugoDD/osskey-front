import { IPageParam } from '@/api/types'

export class PageParam implements IPageParam {
  pageNumber = 1
  pageSize = 20
  rsqlFilter = ''

  private expForEach(expArr: Array<string>, key: string, value: string): IPageParam {
    expArr.forEach(exp => {
      switch (exp) {
        case '==':
          this.eq(key, value).and()
          break
        case '=eq=':
          this.eq(key, value).and()
          break
        case '=ne=':
          this.ne(key, value).and()
          break
        case '=gt=':
          this.gt(key, value).and()
          break
        case '=lt=':
          this.lt(key, value).and()
          break
        case '=gte=':
          this.gte(key, value).and()
          break
        case '=lte=':
          this.lte(key, value).and()
          break
        case '=in=':
          this.in(key, value).and()
          break
        case '=nin=':
          this.notIn(key, value).and()
          break
        case '=ex=':
          this.ex(key, value).and()
          break
        case '=re=':
          this.re(key, value).and()
          break
      }
    })
    return this
  }

  allOpt(entity: any, opt: Map<string, Array<string>>): IPageParam {
    console.log(opt)
    this.rsqlFilter = ''
    opt.forEach((expArr, key) => {
      const value = entity[key]
      if (value && Array.isArray(value) && expArr.length === 2) {
        const startTime = value[0]
        const endTime = value[1]
        this.gt(key, startTime).and().lt(key, endTime).and()
      } else {
        this.expForEach(expArr, key, value)
      }
    })

    if (this.rsqlFilter.startsWith(',') || this.rsqlFilter.startsWith(';')) {
      this.rsqlFilter = this.rsqlFilter.substring(1)
    }

    if (opt.size > 0) {
      this.rsqlFilter = this.rsqlFilter.substring(0, this.rsqlFilter.length - 1)
    }
    return this
  }

  eq(name: string, value: any): IPageParam {
    if (value && value !== '') {
      this.rsqlFilter = this.rsqlFilter + name + '=="' + value + '"'
    }
    return this
  }

  ne(name: string, value: any): IPageParam {
    if (value && value !== '') {
      this.rsqlFilter = this.rsqlFilter + name + '=ne="' + value + '"'
    }
    return this
  }

  gt(name: string, value: any): IPageParam {
    if (value && value !== '') {
      this.rsqlFilter = this.rsqlFilter + name + '=gt="' + value + '"'
    }
    return this
  }

  lt(name: string, value: any): IPageParam {
    if (value && value !== '') {
      this.rsqlFilter = this.rsqlFilter + name + '=lt="' + value + '"'
    }
    return this
  }

  gte(name: string, value: any): IPageParam {
    if (value && value !== '') {
      this.rsqlFilter = this.rsqlFilter + name + '=gte="' + value + '"'
    }
    return this
  }

  lte(name: string, value: any): IPageParam {
    if (value && value !== '') {
      this.rsqlFilter = this.rsqlFilter + name + '=lte="' + value + '"'
    }
    return this
  }

  in(name: string, value: any): IPageParam {
    if (value && value !== '') {
      if (Array.isArray(value)) {
        value = value.join(',')
      }
      this.rsqlFilter = this.rsqlFilter + name + '=in=(' + value + ')'
    }
    return this
  }

  notIn(name: string, value: any): IPageParam {
    if (value && value !== '') {
      if (Array.isArray(value)) {
        value = value.join(',')
      }
      this.rsqlFilter = this.rsqlFilter + name + '=out=(' + value + ')'
    }
    return this
  }

  ex(name: string, value: any): IPageParam {
    if (value && value !== '') {
      this.rsqlFilter = this.rsqlFilter + name + '=ex="' + value + '"'
    }
    return this
  }

  re(name: string, value: any): IPageParam {
    if (value && value !== '') {
      this.rsqlFilter = this.rsqlFilter + name + '=re="' + value + '"'
    }
    return this
  }

  and(): IPageParam {
    if (!this.rsqlFilter.endsWith(';')) {
      this.rsqlFilter = this.rsqlFilter + ';'
    }
    return this
  }

  or(): IPageParam {
    if (!this.rsqlFilter.endsWith(',')) {
      this.rsqlFilter = this.rsqlFilter + ','
    }

    return this
  }
}
