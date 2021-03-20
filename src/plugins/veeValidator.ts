import {extend} from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'

for (let [rule, validation] of Object.entries(rules)) {
  if(rule === 'required') {
    extend(rule, {
      ...validation,
      message: '필수값 입니다.'
    })
  } else{
    extend(rule, {
      ...validation,
    })
  }
}

extend('odd', value => {
  return value % 2 !== 0;
});

extend('requiredCheckBox', {
  validate: value => value,
  message: '필수체크 입니다.'
})
