import { CreateElement, VNode } from 'vue'
import { Component, Prop, Vue } from 'nuxt-property-decorator'

import { IRadioList } from '~/src/typings/state'

@Component
export default class RadioInput extends Vue {
  @Prop({ type: Array, default: () => [] })
  readonly items: IRadioList[]

  @Prop({ type: String, default: '' })
  readonly title: string

  @Prop({ type: String, required: true })
  readonly group: string

  @Prop({ type: Object, default: () => ({ input: '', label: '' }) })
  readonly className: { input: string, label: string }

  onChange(event: Event) {
    const val = (event.target as HTMLInputElement).value
    this.$emit('input', val)
  }

  render(h: CreateElement): VNode {
    return (
        <div class="radio_wrap">
          { this.items.length && this.items.map((item, index) => (
              <fragment key={ index }>
                <input
                    type="radio"
                    id={ item.value }
                    name={ this.group }
                    class={this.className.input}
                    value={ item.value }
                    onChange={ this.onChange }
                    checked={ item.value === this.$attrs.value }
                />
                <label for={ item.value } class={this.className.label}>{ item.label }</label>
              </fragment>
            )) }
        </div>
    )
  }
}
