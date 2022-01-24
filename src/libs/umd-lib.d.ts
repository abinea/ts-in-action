declare namespace umdLib {
  const version: string
  function doSomething(): void
}
// UMD库
export as namespace umdLib
export = umdLib
