import {Vue, Component} from 'nuxt-property-decorator'
import {CreateElement, VNode} from 'vue'

import {Functional} from '@/utils/decorators'

@Component
export default class Fragment extends Vue {

  @Functional(true) private functional: any

  render(h: CreateElement, context: any): VNode {
    return context.children
  }
}