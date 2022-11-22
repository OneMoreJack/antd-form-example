import React from 'react'
import { Divider } from 'antd'
import { DemoWrapper } from './style'

type DemoContainerProps = {
  children: React.ReactNode,
  title: React.ReactNode,
  formData: Record<string, any>,
}
const DemoContainer: React.FC<DemoContainerProps> = (props) => {
  const { children, formData = {}, title } = props

  return (
    <>
      <Divider orientation='left'>
        <h2>{title}</h2>
      </Divider>
      <DemoWrapper>
        <div className="form-wrapper shadow">
          {children}
        </div>
        <div className="code-wrapper shadow">
          <pre>
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </DemoWrapper>
    </>
  )
}

export default DemoContainer;
