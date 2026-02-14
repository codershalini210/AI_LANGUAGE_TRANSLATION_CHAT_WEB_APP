// components/Sidebar.jsx
export default function Sidebar() {
  const contacts = ["Rahul", "John", "Maria"];

  return (
    <div className="w-1/4 bg-gray-900 text-white p-4">
      <h2 className="text-xl mb-4">Chats</h2>
      {contacts.map((contact, index) => (
        <div key={index} className="p-2 hover:bg-gray-700 rounded cursor-pointer">
          {contact}
        </div>
      ))}
    </div>
  );
}
