import {CreateElement, VNode} from 'vue'
import {Component, Vue} from 'nuxt-property-decorator'

@Component
export default class RequiredForm extends Vue {
  render(h: CreateElement): VNode {
    return (
        <div class="content_required" id="container">
          <div class="content">
            <checkbox-group-item key="agree1" value="agree1">
              <h3>이용약관<em class="required">(필수)</em></h3>
            </checkbox-group-item>
            <div class="content_box">
              이용약관 <br/>
              이용약관 <br/>
              이용약관 <br/>
              이용약관 <br/>
              이용약관 <br/>
              이용약관 <br/>
              이용약관 <br/>
              이용약관 <br/>
              이용약관 <br/>
              이용약관 <br/>
              이용약관 <br/>
              이용약관 <br/>
            </div>
          </div>
          <div class="content">
            <checkbox-group-item key="agree2" value="agree2">
              <h3>개인정보 수집·이용 동의<em class="required">(필수)</em></h3>
            </checkbox-group-item>
            <div class="content_box">
              개인정보 수집·이용 동의 <br/>
              개인정보 수집·이용 동의 <br/>
              개인정보 수집·이용 동의 <br/>
              개인정보 수집·이용 동의 <br/>
              개인정보 수집·이용 동의 <br/>
              개인정보 수집·이용 동의 <br/>
              개인정보 수집·이용 동의 <br/>
              개인정보 수집·이용 동의 <br/>
              개인정보 수집·이용 동의 <br/>
              개인정보 수집·이용 동의 <br/>
              개인정보 수집·이용 동의 <br/>
              개인정보 수집·이용 동의 <br/>
              개인정보 수집·이용 동의 <br/>
              개인정보 수집·이용 동의 <br/>
            </div>
          </div>
        </div>
    )
  }
}
