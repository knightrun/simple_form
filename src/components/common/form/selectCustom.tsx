import {CreateElement, VNode} from 'vue'
import {Component, Prop, Vue} from 'nuxt-property-decorator'

import {ISelectOptions} from '~/src/typings/state'

@Component
export default class SelectCustom extends Vue {
  $refs!: Vue['$refs'] & {
    select: HTMLSelectElement,
    optionTitle: HTMLOptionElement
  }

  @Prop({type: String, default: ''})
  readonly id: string

  @Prop({type: String})
  readonly label: string

  @Prop({type: String, default: ''})
  readonly optionTitle: string

  @Prop({type: Boolean, default: false})
  readonly disabled: boolean

  @Prop({type: Array, required: true})
  readonly options: ISelectOptions[]

  onChange(event: Event) {
    const val = (event.target as HTMLInputElement).value
    this.$emit('input', val)
  }

  render(h: CreateElement): VNode {
    return (
        <div class="select_wrap">
          {this.label && <label for={this.id} class="screen-out">{this.label}</label>}
          <select
              id={this.id}
              ref="select"
              onChange={this.onChange}
              value={this.options.some(option => option.selected) ? this.options.filter(option => option.selected)[0].value : ''}
              disabled={this.disabled}
          >
            {(this.optionTitle && !this.options.some(option => option.selected)) &&
            <option value="" ref="optionTitle">{this.optionTitle}</option>}
            {this.options.map((option, index) => (
                <option
                    key={`${this.id}-${index}`}
                    value={option.value}
                >
                  {option.label}
                </option>
            ))}
          </select>
        </div>
    )
  }
}
