import { useSelector } from "react-redux";
import type { RootState } from "../../redux/reducers";

export default function ListUser() {
  const users = useSelector((state: RootState) => state.users);
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Tên</th>
          <th>Giới tính</th>
          <th>Ngyày sinh</th>
          <th>Địa chỉ</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.gender}</td>
            <td>{user.dateOfBirth}</td>
            <td>{user.address}</td>
            <td>
              <button>Sửa</button>
              <button>Xoá</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
