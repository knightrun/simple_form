import {CreateElement, VNode} from 'vue'
import {Component, Vue} from 'nuxt-property-decorator'

//component
import RequiredForm from "@/components/join/requiredForm"

//style
import '@/assets/styles/join.scss'
import {IJoinFormData} from "@/typings/state";

@Component
export default class Form extends Vue {
  $refs!: Vue['$refs'] & {
    form: HTMLFormElement
  }

  private formData: IJoinFormData

  // api or submit
  submit() {
    console.log(this.formData)
    this.$router.push('/join/complete')
  }

  sendData(val: IJoinFormData) {
    this.formData = {...val}
    this.submit()
  }

  render(h: CreateElement): VNode {
    return (
        <section class="join">
          <div class="join_form">
            <h1 class="title">회원가입</h1>
            <div class="required">* 필수입력</div>
            <form ref="form" method="post">
              <RequiredForm onSendData={this.sendData}/>
            </form>
          </div>
        </section>
    )
  }
}
