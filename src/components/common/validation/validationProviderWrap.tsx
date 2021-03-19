import {CreateElement, VNode} from 'vue'
import {Component, Vue, Prop} from 'nuxt-property-decorator'
import {ValidationProvider} from "vee-validate";

@Component
export default class ValidationProviderWrap extends Vue {
  $refs!: Vue['$refs'] & {
    provider: InstanceType<typeof ValidationProvider>
  }

  @Prop({type: String, required: true})
  rules: string

  @Prop({type: String, required: true})
  name: string

  @Prop({type: String, default: "provider"})
  target: string

  render(h: CreateElement): VNode {
    return (
        <ValidationProvider rules={this.rules} name={this.name} ref={this.target}>
          {
            (ProviderProps: any) => (
                <div class={{'error' : ProviderProps.errors[0]}}>
                  {this.$slots.default}
                  {ProviderProps.errors[0] && <p class="error-message">{ProviderProps.errors[0]}</p>}
                </div>
            )
          }
        </ValidationProvider>
    )
  }
}
