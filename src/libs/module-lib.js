const version = '1.0.0'
function moduleLib(options) {
  console.log(options)
}
function doSomething() {
  console.log('moduleLib do something')
}

moduleLib.version = version
moduleLib.doSomething = doSomething

module.exports = moduleLib
