import { useEffect } from "react";
import { useDispatch } from "react-redux";
import type { Account, Accounts } from "./Auth.reducer";
import { useAppSelector } from "../../redux/reducers";
import { Form, Input, Button, Card, Typography, message } from "antd";

const { Title } = Typography;

export const Login = () => {
  const data: Accounts = useAppSelector((state) => state.auth);
  const dispatch = useDispatch();

  const lastAcc = data.accs[data.accs.length - 1] || null;

  const [form] = Form.useForm();

  useEffect(() => {
    if (lastAcc) {
      form.setFieldsValue(lastAcc);
    }
  }, [lastAcc, form]);

  const handleLogin = (values: Account) => {
    dispatch({ type: "login", payload: values });
    message.success("Đăng nhập thành công ");
  };

  return (
    <Card
      style={{
        width: 350,
        margin: "20px auto",
        padding: "20px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        borderRadius: "12px",
      }}
    >
      <Title level={3} style={{ textAlign: "center", marginBottom: 20 }}>
        Đăng nhập
      </Title>

      <Form form={form} layout="vertical" onFinish={handleLogin}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Vui lòng nhập email!" },
            { type: "email", message: "Email không hợp lệ!" },
          ]}
        >
          <Input placeholder="Nhập email..." />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
        >
          <Input.Password placeholder="Nhập mật khẩu..." />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
