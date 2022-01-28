import { Button } from 'antd'
import React from 'react'

interface Greeting {
  name: string
  firstname?: string
  lastname?: string
}

interface State {
  count: number
}
class HelloClass extends React.Component<Greeting, State> {
  state: State = {
    count: 0,
  }
  static defaultProps = {
    firstname: '',
    lastname: '',
  }
  render(): React.ReactNode {
    return (
      <div>
        <p> 你点击了{this.state.count} 下</p>
        <Button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Hello {this.props.name}
        </Button>
      </div>
    )
  }
}

export default HelloClass
