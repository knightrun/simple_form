import {CreateElement, VNode} from 'vue'
import {Component, Vue} from 'nuxt-property-decorator'

@Component
export default class OptionalForm extends Vue {
  render(h: CreateElement): VNode {
    return (
        <div class="content_optionalForm" id="container">
          <div class="content">
            <checkbox-group-item key="agree3" value="agree3">
              <h3>위치정보 이용약관 동의<em class="optional">(선택)</em></h3>
            </checkbox-group-item>
            <div class="content_box">
              위치정보 이용약관 동의 <br/>
              위치정보 이용약관 동의 <br/>
              위치정보 이용약관 동의 <br/>
              위치정보 이용약관 동의 <br/>
              위치정보 이용약관 동의 <br/>
              위치정보 이용약관 동의 <br/>
              위치정보 이용약관 동의 <br/>
              위치정보 이용약관 동의 <br/>
              위치정보 이용약관 동의 <br/>
              위치정보 이용약관 동의 <br/>
              위치정보 이용약관 동의 <br/>
              위치정보 이용약관 동의 <br/>
            </div>
          </div>
        </div>
    )
  }
}
