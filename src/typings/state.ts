export interface IRadioList {
  label: string
  value: string
}

export interface ISelectOptions {
  label: string
  value: string
  selected?: boolean
}

export interface IJoinFormData {
  userId: string
  userPassword: string
  gender: string
  birthday: string
  phoneNo: string
  certYn: boolean
  agree: boolean
}