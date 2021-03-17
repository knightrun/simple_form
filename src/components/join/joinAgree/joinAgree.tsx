import {CreateElement, VNode} from 'vue'
import {Component, Vue} from 'nuxt-property-decorator'

import RequiredForm from "@/components/join/joinAgree/requiredForm"
import OptionalForm from "@/components/join/joinAgree/optionalForm"

@Component({layout: 'product'})
export default class JoinAgree extends Vue {
  private checkList: string[] = []

  onChange(values: string[]) {
    this.checkList = values
  }

  next(){
    this.$router.push('/join/form')
  }

  render(h: CreateElement): VNode {
    return (
        <div class="agree_wrap">
          <checkbox-group
              tag="div"
              id="agreementGroup"
              checkList={this.checkList}
              onChange={this.onChange}
          >
            <div class="check-all_wrap">
              <checkbox-all label="모든 이용약관에 동의합니다." reverse={ false }/>
            </div>
            <div class="agree_content">
              <RequiredForm />
              <OptionalForm />
            </div>
          </checkbox-group>
          <div class="btn-wrap">
            <button type="button" class="btn btn-agree" onClick={this.next}>확인</button>
          </div>
        </div>
    )
  }
}
