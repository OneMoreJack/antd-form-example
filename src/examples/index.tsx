import React from "react";
import NestTable from "./NestTable";

type FormData = Record<string, any>;

type FormExampleProps = {
  onValuesChange?: (values: FormData) => void;
};

const FormExample: React.FC<FormExampleProps> = (props) => {
  return (
    <>
      <NestTable.FormListAndTable />
      <NestTable.NamePath />
    </>
  );
};

export default FormExample;
