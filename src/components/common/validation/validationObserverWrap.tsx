import {CreateElement, VNode} from 'vue'
import {Component, Prop, Vue} from 'nuxt-property-decorator'
import {ValidationObserver} from "vee-validate";

@Component
export default class ValidationObserverWrap extends Vue {
  $refs!: Vue['$refs'] & {
    observer: InstanceType<typeof ValidationObserver>
  }

  @Prop({type: String, default: "observer"})
  name: string

  render(h: CreateElement): VNode {
    return (
        <ValidationObserver ref={this.name}>
          {
            (observerScope: any) => (
                <div class="validation-provider">
                  {this.$slots.default}
                </div>
            )
          }
        </ValidationObserver>
    )
  }
}
