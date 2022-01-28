import React from 'react'
import HelloClass from './HelloClass'

interface Loading {
  loading: boolean
}

// Class组件传递时默认参数无法传递
function HelloHOC<P>(WarpperComponent: React.ComponentType<P>) {
  return class extends React.Component<P & Loading> {
    render(): React.ReactNode {
      const { loading, ...props } = this.props
      return loading ? (
        <div>loading...</div>
      ) : (
        <WarpperComponent {...(props as P)} />
      )
    }
  }
}

export default HelloHOC(HelloClass)
