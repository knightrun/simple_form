import {CreateElement, VNode} from 'vue'
import {Component, Vue} from 'nuxt-property-decorator'

@Component
export default class Agreement extends Vue {
  onInput(val: string) {
    this.$emit('input', val)
  }

  render(h: CreateElement): VNode {
    return (
        <div class="agree_wrap">
          <span class="agree_txt">모든 약관 내용에 동의합니다.</span>
          <checkbox-input
              id="agree"
              className={{input: 'screen-out', label: 'screen-out'}}
              label="동의하기"
              onInput={this.onInput}
          />
        </div>
    )
  }
}
