//import bisa di tambah atau dibuah menurut file yg ada di types
import { CHANGE_NAME, CHANGE_UMUR, CHANGE_ALAMAT } from '../types/index'

export const rubahNama = payload => {
  return {
    type: CHANGE_NAME,
    payload: payload
  }
}
export const rubahUmur = payload => {
  return {
    type: CHANGE_UMUR,
    payload: payload
  }
}
export const rubahAlamat = payload => {
  return {
    type: CHANGE_ALAMAT,
    payload: payload
  }
}
