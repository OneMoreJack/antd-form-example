import { Button, Form, Input, InputNumber, Space } from "antd";
import { ColumnProps } from "antd/es/table";

export default function useColumns() {
  const columns: ColumnProps<any>[] = [
    {
      title: "Name",
      dataIndex: "name",
      render(value, record, index) {
        return (
          <Form.Item
            name={[index, "name"]}
            rules={[{ required: true, message: "required" }]}>
            <Input />
          </Form.Item>
        );
      },
    },
    {
      title: "Age",
      dataIndex: "age",
      render(value, record, index) {
        return (
          <Form.Item
            name={[index, "age"]}
            rules={[{ required: true, message: "required" }]}>
            <InputNumber />
          </Form.Item>
        );
      },
    },
    {
      title: "Address",
      dataIndex: "address",
      render(value, record, index) {
        return (
          <Form.Item name={[index, "address"]}>
            <Input />
          </Form.Item>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render(value, { operations }, index) {
        return (
          <Space>
            <Button
              type="primary"
              shape="circle"
              onClick={() => operations.add()}>
              +
            </Button>
            <Button
              danger
              shape="circle"
              onClick={() => operations.remove(index)}>
              -
            </Button>
          </Space>
        );
      },
    },
  ];

  return {
    columns,
  };
}
