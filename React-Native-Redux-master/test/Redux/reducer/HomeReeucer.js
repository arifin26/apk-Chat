// import bisa di tambah dan juga diubah menurut types
import { CHANGE_NAME, CHANGE_UMUR, CHANGE_ALAMAT } from '../types/index'

//membuat variabel
const initialState = {
  name: '',
  umur: '',
  alamat: ''
}

export const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.payload }
    case CHANGE_UMUR:
      return { ...state, umur: action.payload }
    case CHANGE_ALAMAT:
      return { ...state, alamat: action.payload }
    default:
      return state
  }
}
