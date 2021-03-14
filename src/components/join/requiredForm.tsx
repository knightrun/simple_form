import {CreateElement, VNode} from 'vue'
import {Component, Prop, Vue} from 'nuxt-property-decorator'

//components
import PhoneNumberCertification from '@/components/join/phoneNumberCertification'
import Agreement from '@/components/join/agreement'
import Birthday from '@/components/join/birthday'

//type
import {IRadioList} from '@/typings/state'
import {IJoinFormData} from '@/typings/state'

@Component
export default class RequiredForm extends Vue {
  private formData: IJoinFormData = {
    userId: '',
    userPassword: '',
    gender: 'male',
    birthday: '',
    phoneNo: '',
    certYn: false,
    agree: false,
  }

  private radioList: IRadioList[] = [
    {label: '남자', value: 'male'},
    {label: '여자', value: 'female'},
  ]

  onCert(val: boolean) {
    this.formData.certYn = val
  }

  getData() {
    if (this.formData.userId === '') {
      alert('아이디를 입력해 주세요.')
      return false
    } else if (this.formData.userPassword === '') {
      alert('패스워드를 입력해 주세요')
      return false
    } else if (!this.formData.certYn) {
      alert('휴대폰 본인인증을 해 주세요.')
      return false
    } else if (!this.formData.agree) {
      alert('약관 내용에 동의해 주세요.')
      return false
    }

    this.$emit('sendData', this.formData)
  }

  render(h: CreateElement): VNode {
    return (
        <div class="form_wrap">
          <div class="text_wrap">
            <text-input
                id="userId"
                ref="userId"
                class="row"
                label="아이디*"
                placeholder="아이디를 입력하세요"
                v-model={this.formData.userId}
            />
            <text-input
                id="userPassword"
                ref="userPassword"
                class="row"
                type="password"
                label="비밀번호*"
                placeholder="비밀번호를 입력하세요"
                v-model={this.formData.userPassword}
            />
          </div>
          <div class="gender_wrap">
            <span>성별*</span>
            <radio-input
                v-model={this.formData.gender}
                items={this.radioList}
                group="gender"
                className={{input: 'screen-out', label: ''}}
            />
          </div>
          <Birthday v-model={this.formData.birthday}/>
          <PhoneNumberCertification v-model={this.formData.phoneNo} onCert={this.onCert}/>
          <Agreement v-model={this.formData.agree}/>
          <div class="btn-wrap">
            <button type="button" class="btn btn-join" onClick={this.getData}>가입하기</button>
          </div>
        </div>
    )
  }
}
