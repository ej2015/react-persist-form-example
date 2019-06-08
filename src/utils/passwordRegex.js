const lowerCase = '(?=[^a-z]*[a-z])'
const upperCase = '(?=[^A-Z]*[A-Z])'
const numerical = '(?=\\D*\\d)'
const symbol = '(?=[a-zA-Z\\d]*[^a-zA-Z\\d\\s])'
const length = '\\S{8,}'

const lu = lowerCase + upperCase
const ln = lowerCase + numerical
const ls = lowerCase + symbol
const un = upperCase + numerical
const us = upperCase + symbol
const ns = numerical + symbol

const optionalConditions = [lu, ln, ls, un, us, ns]

export const reg = '^(?:' + optionalConditions.reduce((a,c) => ( a + '|' + c )) +')' + length + '$'
export default new RegExp(reg)




