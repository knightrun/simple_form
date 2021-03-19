import {Vue, Component, Prop} from 'nuxt-property-decorator'
import {CreateElement, VNode} from 'vue'

@Component
export default class TextInput extends Vue {
  $refs!: Vue['$refs'] & {
    input: HTMLInputElement
  }

  @Prop({type: String, default: 'div'})
  readonly tag: string

  @Prop({type: String, default: 'text'})
  readonly type: string;

  @Prop({type: String})
  readonly label: string

  @Prop({type: String, required: true})
  readonly id: string

  @Prop(String)
  readonly wrapClass: string

  @Prop({type: Object, default: () => ({input: '', label: ''})})
  readonly className: { input: string, label: string }

  @Prop({type: [String, Number]})
  readonly value: string | number

  @Prop({type: String, default: ''})
  readonly placeholder: string

  @Prop({type: Number})
  readonly maxLength: number

  @Prop({type: Boolean, default: false})
  readonly readonly: boolean

  @Prop({type: Boolean, default: false})
  readonly disabled: boolean

  @Prop({type: String, default: 'off'})
  readonly autocomplete: string

  onInput(event: Event) {
    const val = (event.target as HTMLInputElement).value
    this.$emit('input', val)
  }

  onFocus(event: Event) {
    this.$emit('focus', event)
  }

  onBlur(event: Event) {
    this.$emit('blur', event)
  }

  onClick(event: Event) {
    this.$emit('click', event)
  }

  onKeyUp(event: Event) {
    this.$emit('keyup', event)
  }

  onKeyDown(event: KeyboardEvent) {
    this.$emit('keydown', event)
  }

  onKeyPress(event: KeyboardEvent) {
    this.$emit('keypress', event)
  }

  render(h: CreateElement): VNode {
    return (
        h(
            this.tag,
            {
              class: this.wrapClass
            },
            [
                this.label && <label
                    for={this.id}
                    class={this.className.label}
                >
                  {this.label}
                </label>,
                <input
                    type={this.type}
                    id={this.id}
                    class={this.className.input}
                    placeholder={this.placeholder}
                    maxlength={this.maxLength}
                    disabled={this.disabled}
                    readonly={this.readonly}
                    autocomplete={this.autocomplete}
                    value={this.value}
                    onInput={this.onInput}
                    onKeypress={this.onKeyPress}
                    onKeyup={this.onKeyUp}
                    onKeydown={this.onKeyDown}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onClick={this.onClick}
                    ref="input"
                />
            ]
        )
    )
  }
}