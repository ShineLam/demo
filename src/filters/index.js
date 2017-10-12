import { imgDomain } from '../config'

export function setImg (key) {
  return imgDomain + '/' + key
}

export function productImg (key) {
  return imgDomain + '/20/product/' + key + '.jpg'
}

export function newline (text) {
  return text.replace(/\n/g, '<br>')
}

export function monthDate (text,type) {
	let myDate = text.split('-')
	if(type==1){
  	return myDate[1]+'月'+myDate[2]+'日'
	}
	if(type==2){
		return myDate[1]+'-'+myDate[2]
	}
 
}