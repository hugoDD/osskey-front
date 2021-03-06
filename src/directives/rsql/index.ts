import { DirectiveOptions, VNode } from 'vue'

function getOptKey(vNode: VNode): string {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const datum = vNode.data.model
  const { expression } = datum
  return expression.substring(expression.indexOf('.') + 1)
}

function setOptExp(opt: Map<string, Array<string>>, key: string, exp: string) {
  if (opt.has(key)) {
    const optValue = opt.get(key)
    if (optValue) {
      optValue.push(exp)
    } else {
      opt.set(key, [exp])
    }
  } else {
    opt.set(key, [exp])
  }
}

export const eq: DirectiveOptions = {
  inserted(el, binding, vNode) {
    const opt: Map<string, Array<string>> = binding.value
    const key = getOptKey(vNode)
    setOptExp(opt, key, '==')
  }
}
export const ne: DirectiveOptions = {
  inserted(el, binding, vNode) {
    const opt: Map<string, any> = binding.value
    const key = getOptKey(vNode)
    setOptExp(opt, key, '=ne=')
  }
}
export const gt: DirectiveOptions = {
  inserted(el, binding, vNode) {
    const opt: Map<string, any> = binding.value
    const key = getOptKey(vNode)
    setOptExp(opt, key, '=gt=')
  }
}
export const lt: DirectiveOptions = {
  inserted(el, binding, vNode) {
    const opt: Map<string, any> = binding.value
    const key = getOptKey(vNode)
    setOptExp(opt, key, '=lt=')
  }
}
export const gte: DirectiveOptions = {
  inserted(el, binding, vNode) {
    const opt: Map<string, any> = binding.value
    const key = getOptKey(vNode)
    setOptExp(opt, key, '=gte=')
  }
}
export const lte: DirectiveOptions = {
  inserted(el, binding, vNode) {
    const opt: Map<string, any> = binding.value
    const key = getOptKey(vNode)
    setOptExp(opt, key, '=lte=')
  }
}
export const rin: DirectiveOptions = {
  inserted(el, binding, vNode) {
    const opt: Map<string, any> = binding.value
    const key = getOptKey(vNode)
    setOptExp(opt, key, '=in=')
  }
}

export const nin: DirectiveOptions = {
  inserted(el, binding, vNode) {
    const opt: Map<string, any> = binding.value
    const key = getOptKey(vNode)
    setOptExp(opt, key, '=nin=')
  }
}

export const ex: DirectiveOptions = {
  inserted(el, binding, vNode) {
    const opt: Map<string, any> = binding.value
    const key = getOptKey(vNode)
    setOptExp(opt, key, '=ex=')
  }
}

export const re: DirectiveOptions = {
  inserted(el, binding, vNode) {
    const opt: Map<string, any> = binding.value
    const key = getOptKey(vNode)
    setOptExp(opt, key, '=re=')
  }
}

export const range: DirectiveOptions = {
  inserted(el, binding, vNode) {
    const opt: Map<string, any> = binding.value
    const key = getOptKey(vNode)
    setOptExp(opt, key, '=lt=')
    setOptExp(opt, key, '=gt=')
  }
}

export const rangeEq: DirectiveOptions = {
  inserted(el, binding, vNode) {
    const opt: Map<string, any> = binding.value
    const key = getOptKey(vNode)
    setOptExp(opt, key, '=lte=')
    setOptExp(opt, key, '=gte=')
  }
}
