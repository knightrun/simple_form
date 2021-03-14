import {CreateElement, VNode} from 'vue'
import {Component, Vue, Prop} from 'nuxt-property-decorator'

@Component
export default class CountInput extends Vue {
  @Prop({type: String, required: true})
  readonly id: string

  @Prop({type: String})
  readonly label: string

  @Prop({type: Object, default: () => ({input: '', label: ''})})
  readonly className: { input: string, label: string }

  onChange(event: Event) {
    const val = (event.target as HTMLInputElement).checked
    this.$emit('input', val)
  }

  render(h: CreateElement): VNode {
    return (
        <div class="count_wrap">
          <input
              type="checkbox"
              id={this.id}
              onChange={this.onChange}
              class={this.className.input}
          />
          {this.label && <label for={this.id}><span class={this.className.label}>{this.label}</span></label>}
        </div>
    )
  }
}
