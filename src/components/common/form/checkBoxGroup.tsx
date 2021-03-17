import {Vue, Component, Prop, Emit, Watch} from 'nuxt-property-decorator'
import {InjectReactive, ProvideReactive} from 'vue-property-decorator';

import {CreateElement, VNode} from 'vue';


const inCheckList = Symbol('inCheckList')
const allData = Symbol('allData')

@Component
export class CheckBoxAll extends Vue {

  @Prop({type: String, default: ''})
  readonly label: string

  @Prop({type: Boolean, default: true})
  readonly reverse: boolean

  @InjectReactive(inCheckList)
  public checkList: string[]

  @InjectReactive({from: allData, default: () => ([])})
  public allData: { text: string, value: string }[]

  private checked: boolean = false

  @Watch('checkList')
  changeCheckList(value: string[]): void {
    if (this.reverse) {
      this.checked = value.length === 0
    } else {
      this.checked = value.length === this.allData.length
    }
  }

  @Watch('allData')
  changeAllData(value: { text: string, value: string }[]): void {
    if (this.reverse) {
      this.checked = this.checkList.length === 0
    } else {
      this.checked = value.length === this.checkList.length
    }
  }

  get isLabel() {
    return !!this.label && this.label !== ''
  }

  onChange() {
    this.checked = !this.checked
    if (this.checked) {
      this.allData.forEach(item => {
        if (!this.checkList.includes(item.value)) {
          this.checkList.push(item.value)
        }
      })
    } else {
      this.allData.forEach(() => {
        this.checkList.pop()
      })
    }
  }

  mounted() {
    this.checked = this.checkList.length === 0
  }

  render(h: CreateElement): VNode {
    return (
        <div class="custom-check">
          <input
              type="checkbox"
              name="checkbox-all"
              id="checkbox-all"
              checked={this.checked}
              onChange={this.onChange}
          />
          <label for="checkbox-all">
            <span class={{'screen-out': !this.isLabel}}>
              {this.isLabel ? this.label : '전체선택하기'}
            </span>
            {this.$slots.default}
          </label>
        </div>
    )
  }
}

@Component
export class CheckBoxGroupItem extends Vue {

  @Prop({type: String, required: true, default: () => []})
  readonly value: string

  @Prop({type: String})
  readonly label: string

  @Prop({type: Boolean, default: false})
  readonly disabled: boolean

  @InjectReactive({from: inCheckList, default: () => ([])})
  public checkList: string[]

  @InjectReactive('inMaxCheck')
  public maxCheck: number

  @InjectReactive('inId')
  public id: string

  @InjectReactive({from: allData, default: () => ([])})
  public allData: { text: string, value: string }[]


  onChange(event: Event): void {
    let target = (event.target as HTMLInputElement)
    let {checked} = target

    if (this.disabled) {
      target.checked = false
      return;
    }

    if (checked) {
      if (!this.checkList.includes(this.value) && this.checkList.length < this.maxCheck) {
        if (this.checkList.length + 1 === this.allData.length) {
          target.checked = false
        }
        this.checkList.push(this.value)
      } else {
        target.checked = false
        alert(`${this.maxCheck}개 초과로 선택할 수 없습니다.`)
      }
    } else {
      this.checkList.splice(this.checkList.findIndex(item => item === this.value), 1)
    }
  }

  get isLabel() {
    return !!this.label && this.label !== ''
  }

  mounted() {
    if (!this.disabled) {
      this.allData.push({text: this.label, value: this.value})
    }
  }

  beforeDestroy() {
    console.log('checkBoxGroup -- beforeDestroy')
    const index = this.allData.findIndex(item => item.value === this.value)
    this.allData.splice(index, 1)
  }

  render(h: CreateElement): VNode {
    return (
        <div class={["custom-check", {slot: !this.isLabel}]}>
          <input
              type="checkbox"
              name={this.name}
              id={`${this.id}-${this.$vnode.key}`}
              checked={this.checkList.includes(this.value)}
              onChange={this.onChange}
          />
          <label for={`${this.id}-${this.$vnode.key}`}>
            <span class={{'screen-out': !this.isLabel}}>
              {this.isLabel ? this.label : '선택하기'}
            </span>
            {this.$slots.default}
          </label>
        </div>
    )
  }
}

@Component({inject: []})
export default class CheckBoxGroup extends Vue {

  @Prop({type: String, required: true})
  readonly id!: string

  @Prop({type: Number, default: Infinity})
  readonly maxCheck!: number

  @Prop({type: Array, default: () => []})
  readonly checkList!: string[]

  @Prop({type: String, default: 'div'})
  readonly tag: string


  /**
   * @description : 하위컴포넌트에서 주입(inject)받을 수 있습니다.
   * props와 달리 데이터의 흐름을 추적하기가 어렵습니다.
   */

  @ProvideReactive(inCheckList)
  public inCheckList: string[] = this.checkList

  @ProvideReactive('inMaxCheck')
  public inMaxCheck: number = this.maxCheck

  @ProvideReactive('inId')
  public inId: string = this.id

  @ProvideReactive(allData)
  public allData: { text: string, value: string }[] = []


  @Watch('inCheckList')
  change(value: string[], old: string[]) {
    this.$emit('change', value)
  }

  @Watch('checkList')
  changeCheckList(value: string[]) {
    this.inCheckList = value
  }

  render(h: CreateElement): VNode {
    return (
        h(this.tag, {}, [this.$slots.default])
    )
  }
}