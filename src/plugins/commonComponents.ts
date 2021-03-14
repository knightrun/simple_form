import { Vue } from 'nuxt-property-decorator'

// import component
import Fragment from '@/components/common/fragment'
import TextInput from '@/components/common/form/textInput'
import RadioInput from '@/components/common/form/radioInput'
import CheckBoxInput from '@/components/common/form/checkBoxInput'
import CountInput from '@/components/common/form/countInput'
import SelectCustom from '@/components/common/form/selectCustom'

Vue.component('fragment', Fragment)
Vue.component('text-input', TextInput)
Vue.component('radio-input', RadioInput)
Vue.component('checkbox-input', CheckBoxInput)
Vue.component('count-input', CountInput)
Vue.component('custom-select', SelectCustom)
