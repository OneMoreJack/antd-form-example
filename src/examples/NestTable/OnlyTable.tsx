/**
 * @file 仅使用 `Table` 的实现
 */

import { Button, Form, FormInstance, Input, InputNumber, Space } from "antd";
import Table, { ColumnProps } from "antd/es/table";
import React from "react";

const LIST_NAME = "users";

type OnlyTableProps = {
  formInstance: FormInstance<any>;
};

const OnlyTable: React.FC<OnlyTableProps> = (props) => {
  const { formInstance } = props;

  const handleAdd = () => {
    formInstance.setFieldsValue({
      [LIST_NAME]: [...formInstance.getFieldValue(LIST_NAME), {}],
    });
  };

  const handleDelete = (index: number) => {
    const list = formInstance.getFieldValue(LIST_NAME);
    list.splice(index, 1);
    formInstance.setFieldsValue({
      [LIST_NAME]: list,
    });
  };

  const columns: ColumnProps<any>[] = [
    {
      title: "Name",
      dataIndex: "name",
      render(value, records, index) {
        return (
          <Form.Item
            name={[LIST_NAME, index, "name"]}
            rules={[{ required: true, message: "required" }]}>
            <Input />
          </Form.Item>
        );
      },
    },
    {
      title: "Age",
      dataIndex: "age",
      render(value, records, index) {
        return (
          <Form.Item
            name={[LIST_NAME, index, "age"]}
            rules={[{ required: true, message: "required" }]}>
            <InputNumber />
          </Form.Item>
        );
      },
    },
    {
      title: "Address",
      dataIndex: "address",
      render(value, records, index) {
        return (
          <Form.Item name={[LIST_NAME, index, "address"]}>
            <Input />
          </Form.Item>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render(value, record, index) {
        return (
          <Space>
            <Button
              type="primary"
              shape="circle"
              onClick={() => handleAdd()}>
              +
            </Button>
            <Button
              danger
              shape="circle"
              onClick={() => handleDelete(index)}>
              -
            </Button>
          </Space>
        );
      },
    },
  ];

  return (
    <Form.Item label="Users" tooltip={"只通过Table实现"} shouldUpdate>
      {() => {
        const dataSource = formInstance.getFieldValue(LIST_NAME);
        return (
          <Table
            size="small"
            bordered
            rowKey={(row) => row.name}
            dataSource={dataSource || []}
            columns={columns}
            pagination={false}
          />
        );
      }}
    </Form.Item>
  );
};

export default OnlyTable;
