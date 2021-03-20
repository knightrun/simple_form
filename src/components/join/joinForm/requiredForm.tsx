import {CreateElement, VNode} from 'vue'
import {Component, Vue} from 'nuxt-property-decorator'
import {ValidationObserver} from 'vee-validate';

//components
import PhoneNumberCertification from '@/components/join/joinForm/phoneNumberCertification'
import Agreement from '@/components/join/joinForm/agreement'
import Birthday from '@/components/join/joinForm/birthday'

//type
import {IRadioList} from '@/typings/state'
import {IJoinFormData} from '@/typings/state'

@Component
export default class RequiredForm extends Vue {
  $refs!: Vue['$refs'] & {
    validationWrap: InstanceType<typeof ValidationObserver>
  }

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

  private value: string = ''
  private value2: string = ''

  onCert(val: boolean) {
    this.formData.certYn = val
  }

  back() {
    this.$router.push('/join/agree')
  }

  async getData() {
    const valid = await this.$refs.validationWrap.onSubmit()
    // if (this.formData.userId === '') {
    //   alert('아이디를 입력해 주세요.')
    //   return false
    // } else if (this.formData.userPassword === '') {
    //   alert('패스워드를 입력해 주세요')
    //   return false
    // } else if (!this.formData.certYn) {
    //   alert('휴대폰 본인인증을 해 주세요.')
    //   return false
    // } else if (!this.formData.agree) {
    //   alert('약관 내용에 동의해 주세요.')
    //   return false
    // }
    //
    // this.$emit('sendData', this.formData)
  }

  render(h: CreateElement): VNode {
    return (
        <div class="form_wrap">
          <validation-wrap name="observer" ref="validationWrap">
            <div class="text_wrap">
              <validation-content rules="required" name="userId">
                <text-input
                    id="userId"
                    ref="userId"
                    wrapClass="row"
                    label="아이디*"
                    placeholder="아이디를 입력하세요"
                    v-model={this.formData.userId}
                />
              </validation-content>

              <validation-content rules="required" name="userPassword">
                <text-input
                    id="userPassword"
                    ref="userPassword"
                    wrapClass="row"
                    type="password"
                    label="비밀번호*"
                    placeholder="비밀번호를 입력하세요"
                    v-model={this.formData.userPassword}
                />
              </validation-content>
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

            <validation-content rules="requiredCheckBox" name="agree">
              <Agreement v-model={this.formData.agree}/>
            </validation-content>

            <div class="btn-wrap">
              <button type="button" class="btn btn-back" onClick={this.back}>취소</button>
              <button type="button" class="btn btn-join" onClick={this.getData}>확인</button>
            </div>
          </validation-wrap>
        </div>
    )
  }
}
