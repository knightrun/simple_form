import {CreateElement, VNode} from 'vue'
import {Component, Vue} from 'nuxt-property-decorator'

//component
import RequiredForm from "@/components/join/joinForm/requiredForm"

//style
import '@/assets/styles/join/form.scss'
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
          <h1>회원가입</h1>
          <div class="join_form">
            <h2 class="title">02. 정보입력</h2>
            <div class="required">* 필수입력</div>
            <form ref="form" method="post">
              <RequiredForm onSendData={this.sendData}/>
            </form>
          </div>
        </section>
    )
  }
}
