import {CreateElement, VNode} from 'vue'
import {Component, Prop, Vue} from 'nuxt-property-decorator'

@Component
export default class Birthday extends Vue {
  private year: string | number = ''
  private month: string | number = '01'
  private day: string | number = '01'

  get yearList(){
    const date = new Date()
    const today_year = date.getFullYear()
    const list = []

    for(let i=today_year-100;i<=today_year;i++){
      list.push({label: i + '년', value: i, selected: i===today_year})
    }

    return list
  }

  get monthList(){
    const list = []

    for(let i=1;i<=12;i++){
      list.push({label: i + '월', value: i < 10 ? `0${i}` : i, selected: i===1})
    }

    return list
  }

  get dayList(){
    const date = new Date(+this.year, +this.month, 0)
    const dayLen = date.getDate()
    const list = []

    for(let i=1;i<=dayLen;i++){
      list.push({label: i + '일', value: i < 10 ? `0${i}` : i, selected: i===1})
    }

    return list
  }

  created(){
    if(process.client){
      const date = new Date()
      this.year = date.getFullYear()
      this.onInput()
    }
  }

  onInput(){
    this.$emit('input', `${this.year}-${this.month}-${this.day}`)
  }

  render(h: CreateElement): VNode {
    return (
        <div class="birthday_wrap row">
          <span>생년월일*</span>
          <custom-select
              id="year"
              ref="year"
              optionTitle="선택"
              options={this.yearList}
              onInput={this.onInput}
              v-model={this.year}
          />
          <custom-select
              id="nationNo"
              ref="nationNo"
              optionTitle="선택"
              options={this.monthList}
              onInput={this.onInput}
              v-model={this.month}
          />
          <custom-select
              id="nationNo"
              ref="nationNo"
              optionTitle="선택"
              options={this.dayList}
              onInput={this.onInput}
              v-model={this.day}
          />
        </div>
    )
  }
}
