import {CreateElement, VNode} from 'vue'
import {Component, Vue} from 'nuxt-property-decorator'

//style
import '@/assets/styles/join/complete.scss'

@Component
export default class Complete extends Vue {
  back() {
    this.$router.push('/join/form')
  }

  render(h: CreateElement): VNode {
    return (
        <section class="join">
          <h1>회원가입</h1>
          <div class="join_complete">
            <div class="title_wrap">
              <h2 class="title">가입 완료</h2>
            </div>
            <div class="button_wrap">
              <button onClick={this.back}>뒤로가기</button>
            </div>
          </div>
        </section>
    )
  }
}
