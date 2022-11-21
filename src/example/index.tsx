import { Button, Form, FormProps } from "antd";
import React from "react";
import NestTable from "./NestTable";

type FormData = Record<string, any>;

type FormExampleProps = {
  onValuesChange?: (values: FormData) => void;
};

const FormExample: React.FC<FormExampleProps> = (props) => {
  const onFinish: FormProps<FormData>["onFinish"] = (values) => {
    console.log(values);
    props.onValuesChange?.(values);
  };

  return (
    <>
      <NestTable />
    </>
  );
};

export default FormExample;
