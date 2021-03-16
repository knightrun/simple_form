import {CreateElement, VNode} from 'vue'
import {Component, Vue} from 'nuxt-property-decorator'

import JoinAgree from "@/components/join/joinAgree/joinAgree"

//style
import '@/assets/styles/join/agree.scss'

@Component
export default class Agree extends Vue {
  render(h: CreateElement): VNode {
    return (
        <section class="join">
          <h1>회원가입</h1>
          <div class="join_agree">
            <div class="title_wrap">
              <h2 class="title">01. 약관동의</h2>
            </div>
            <JoinAgree />
          </div>
        </section>
    )
  }
}
