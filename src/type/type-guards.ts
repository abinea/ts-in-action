// type-guard 类型保护
enum Type {
  Strong,
  Week,
}

class Java {
  helloJava() {
    console.log('Hello Java')
  }
  java: any
}
class JavaScript {
  helloJavaScript() {
    console.log('Hello JavaScript')
  }
  javascript: any
}
// data is type 这种返回值叫类型谓词
function isJava(lang: Java | JavaScript): lang is Java {
  return (lang as Java).helloJava !== undefined
}

function getLanguage(type: Type, x: string | number) {
  let lang = type === Type.Strong ? new Java() : new JavaScript()
  // lang是Java和JavaScript的联合类型
  // 需要类型断言，但可读性很差
  // if ((lang as Java).helloJava) {
  //   ;(lang as Java).helloJava()
  // } else {
  //   ;(lang as JavaScript).helloJavaScript()
  // }

  // 使用类型保护 特殊块内变量的类型是确定的
  // 1.instanceof 是...的实例
  // if (lang instanceof Java) {
  //   lang.helloJava()
  // } else {
  //   lang.helloJavaScript()
  // }

  // 2.in 属于某个对象的属性
  // if ('java' in lang) {
  //   lang.helloJava()
  // } else {
  //   lang.helloJavaScript()
  // }

  // 3.typeof 判断类型
  // if (typeof x === 'string') {
  //   x.length
  // } else {
  //   x.toFixed()
  // }

  // 4.类型保护函数
  if (isJava(lang)) {
    lang.helloJava()
  } else {
    lang.helloJavaScript()
  }

  return lang
}
// getLanguage(Type.Strong)
