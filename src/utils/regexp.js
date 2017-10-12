export function isNumber (chars) {
  // return chars && chars.match(/^\d*$/)
  return /^\d+$/g.test(chars)
}

export function isEmail (chars) {
  return /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(chars)
}

export function isPhone (chars) {
  return /^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}(-\d{1,4})?$/.test(chars)
}

export function isMobile (chars) {
  return /^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57])[0-9]{8}$/.test(chars)
}

export function isFax (chars) {
  return /^(\d{3,4}-)?\d{7,8}$/.test(chars)
}

export function isAddress (chars) {
  return /^[a-zA-Z0-9\u4e00-\u9fa5]+$/.test(chars)
}

export function isPass (chars) {
  return /^((?=.*?\d)(?=.*?[A-Za-z])|(?=.*?\d)(?=.*?[【 ~!@#$%^&*()_+`\-={}:";'<>?,./ 】])|(?=.*?[A-Za-z])(?=.*?[【 ~!@#$%^&*()_+`\-={}:";'<>?,./ 】]))[\dA-Za-z【 ~!@#$%^&*()_+`\-={}:";'<>?,./ 】].{5,19}$/.test(chars)
}

export function isPass2 (chars, chars2) {
  return chars === chars2
}

export function simplePass (chars) {
  return /^[a-zA-Z0-9]{6,20}$/.test(chars)
}
