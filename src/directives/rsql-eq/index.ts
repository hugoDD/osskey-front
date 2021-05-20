import { DirectiveOptions, VNode } from 'vue'

export const rsqlEq: DirectiveOptions = {
  inserted(el, binding, vNode) {
    const opt: Map<string, any> = binding.value
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const datum = vNode.data.model
    const { expression } = datum
    const modelName = expression.substring(0, expression.indexOf('.'))
    const key = expression.substring(expression.indexOf('.') + 1)
    opt.set(key, '==')
  }
}
