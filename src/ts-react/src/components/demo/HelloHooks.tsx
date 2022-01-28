import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
interface Greeting {
  name: string
  firstname: string
  lastname: string
}

const Hello = (props: Greeting) => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState<string | null>(null)
  useEffect(() => {
    if (count > 5) {
      setText('休息一下')
    }
  }, [count])
  return (
    <div>
      <p>
        你点击了{count}下 {text}
      </p>
      <Button onClick={() => setCount(count + 1)}>Hello {props.name}</Button>
    </div>
  )
}

// React.FC 默认属性存在问题
// const Hello: React.FC<Greeting> = ({ name, firstname, lastname, children }) => (
//   <Button> Hello {name}</Button>
// )
Hello.defaultProps = {
  firstname: '',
  lastname: '',
}

export default Hello
