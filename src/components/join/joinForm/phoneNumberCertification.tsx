import {CreateElement, VNode} from 'vue'
import {Component, Vue} from 'nuxt-property-decorator'

//json
import phoneData from '@/static/json/phoneData.json'

@Component
export default class PhoneNumberCertification extends Vue {
  $refs!: Vue['$refs'] & {
    nationNo: HTMLDivElement,
    phoneNo: HTMLDivElement
  }

  private nationNo: string = ''
  private phoneNo: number | string = ''
  private certYn: boolean = false

  onInput() {
    this.$emit('input', this.nationNo + this.phoneNo)
  }

  selfCert() {
    if(this.nationNo === ''){
      alert('휴대폰 앞자리를 선택해주세요.')
      return false
    } else if(this.phoneNo === ''){
      alert('휴대폰 번호를 입력해 주세요.')
      return false
    }

    this.certYn = true
    this.$emit('cert', this.certYn)
  }

  render(h: CreateElement): VNode {
    return (
        <div class="certification row">
          <span>휴대폰*</span>
          <div class="phone-number_wrap">
            <custom-select
                id="nationNo"
                ref="nationNo"
                optionTitle="선택"
                options={phoneData}
                onInput={this.onInput}
                v-model={this.nationNo}
                disabled={this.certYn}
            />
            <text-input
                type="tel"
                id="phoneNo"
                ref="phoneNo"
                class="text_wrap"
                className={{label: 'screen-out'}}
                label="전화번호 입력"
                placeholder="전화번호 입력"
                onInput={this.onInput}
                v-model={this.phoneNo}
                disabled={this.certYn}
            />
          </div>
          <div class="btn-wrap">
            <button
                type="button"
                class={["btn btn-cert",{completed:this.certYn}]}
                onClick={this.selfCert}
                disabled={this.certYn}
            >
              {this.certYn ? '인증완료' : '인증'}
            </button>
          </div>
        </div>
    )
  }
}
