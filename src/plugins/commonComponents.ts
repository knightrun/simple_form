import { Vue } from 'nuxt-property-decorator'

// import component
import Fragment from '@/components/common/fragment'
import ValidationWrap from '@/components/common/validation/validationWrap'
import ValidationContent from '@/components/common/validation/validationContent'
import TextInput from '@/components/common/form/textInput'
import RadioInput from '@/components/common/form/radioInput'
import CheckBoxInput from '@/components/common/form/checkBoxInput'
import CountInput from '@/components/common/form/countInput'
import SelectCustom from '@/components/common/form/selectCustom'
import CheckBoxGroup, { CheckBoxGroupItem, CheckBoxAll } from '@/components/common/form/checkBoxGroup'

// components
Vue.component('fragment', Fragment)
Vue.component('validation-wrap', ValidationWrap)
Vue.component('validation-content', ValidationContent)
Vue.component('text-input', TextInput)
Vue.component('radio-input', RadioInput)
Vue.component('checkbox-input', CheckBoxInput)
Vue.component('count-input', CountInput)
Vue.component('custom-select', SelectCustom)
Vue.component('checkbox-group', CheckBoxGroup)
Vue.component('checkbox-group-item', CheckBoxGroupItem)
Vue.component('checkbox-all', CheckBoxAll)