/**
 * 通用js方法封装处理
 * Copyright (c) 2019 ruoyi
 */
import {Form} from 'element-ui'

const baseURL = process.env.VUE_APP_BASE_API


// 表单重置
export const resetForm = (refName: Form) => {
  if (refName) {
    refName.resetFields()
  }
}

// 回显数据字典
export const selectDictLabel = (datas: any, value: string): string => {
  let actions = new Array();
  Object.keys(datas).some((key) => {
    if (datas[key].dictValue == ('' + value)) {
      actions.push(datas[key].dictLabel)
      return true;
    }
  })
  return actions.join('')
}


// 通用下载方法
export const download = (fileName: string) => {
  window.location.href = baseURL + "/common/download?fileName=" + encodeURI(fileName) + "&delete=" + true
}


/**
 * 构造树型结构数据
 * @param {*} data 数据源
 * @param {*} id id字段 默认 'id'
 * @param {*} parentId 父节点字段 默认 'parentId'
 * @param {*} children 孩子节点字段 默认 'children'
 */
export const handleTree = (data: any, id: string, parentId: string, children: any) => {
  let config = {
    id: id || 'id',
    parentId: parentId || 'parentId',
    childrenList: children || 'children'
  }

  var childrenListMap = new Map<string, any>()
  var nodeIds = new Map<string, any>()
  var tree = []

  for (let d of data) {
    let parentId = d[config.parentId];
    if (childrenListMap.get(parentId) == null) {
      childrenListMap.set(parentId, [])
    }
    nodeIds.set(d[config.id], d)
    childrenListMap.get(parentId).push(d)
  }

  for (let d of data) {
    let parentId = d[config.parentId]
    if (nodeIds.get(parentId) == null) {
      tree.push(d)
    }
  }

  for (let t of tree) {
    adaptToChildrenList(t)
  }

  function adaptToChildrenList(o: any) {
    if (childrenListMap.get(o[config.id]) !== null) {
      o[config.childrenList] = childrenListMap.get(o[config.id])
    }
    if (o[config.childrenList]) {
      for (let c of o[config.childrenList]) {
        adaptToChildrenList(c)
      }
    }
  }

  return tree
}
