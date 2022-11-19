import React, { useState } from "react";
import { PageWrapper } from "./style";
import FormExample from "./FormExample";

function App() {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const onValuesChange = (formData: any) => {
    setFormData(formData);
  };
  return (
    <PageWrapper>
      <div className="form-wrapper shadow">
        <FormExample onValuesChange={onValuesChange} />
      </div>
      <div className="code-wrapper shadow">
        <pre>
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
    </PageWrapper>
  );
}

export default App;
