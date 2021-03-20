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

// extend('even', value => {
//   return value % 2 === 0;
// });

extend('requiredCheckBox', value => {
  console.log('checked : ', value)
  return value;
});
