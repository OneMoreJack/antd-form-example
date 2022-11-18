import React, { useState } from 'react';
import { PageWrapper } from './style';
import FormExample from './FormExample';

function App() {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const onFinish = (formData: any) => {
    setFormData(formData);
  };
  return (
    <PageWrapper>
      <div className='content'>
        <FormExample onFinish={onFinish} />
      </div>
      <div>
        <code>
          {JSON.stringify(formData, null, 2)}
        </code>
      </div>
    </PageWrapper>
  );
}

export default App;
