import { isCPF, isCNPJ } from '@samplesleo/validations'

console.log(`CPF: ${isCPF('706.467.150-62')}`)
console.log(`CPF: ${isCPF('706.467.150-63')}`)

console.log(`CNPJ: ${isCNPJ('33.279.199/0001-98')}`)
console.log(`CNPJ: ${isCNPJ('33.279.199/0001-99')}`)