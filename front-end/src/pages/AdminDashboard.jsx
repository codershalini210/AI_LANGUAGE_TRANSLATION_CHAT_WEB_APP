// pages/AdminDashboard.jsx
export default function AdminDashboard() {
  const users = [
    { name: "Rahul", status: "Active" },
    { name: "John", status: "Blocked" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">User</th>
            <th className="p-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="p-2 border">{user.name}</td>
              <td className="p-2 border">{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
