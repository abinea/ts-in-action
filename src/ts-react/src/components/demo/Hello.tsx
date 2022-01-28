import React from 'react'
import { Button } from 'antd'
interface Greeting {
  name: string
  firstname: string
  lastname: string
}

const Hello = (props: Greeting) => <Button> Hello {props.name}</Button>

// React.FC 默认属性存在问题
// const Hello: React.FC<Greeting> = ({ name, firstname, lastname, children }) => (
//   <Button> Hello {name}</Button>
// )
Hello.defaultProps = {
  firstname: '',
  lastname: '',
}

export default Hello
