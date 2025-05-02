export default function RegisterPage() {
  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form>
        <input type="text" placeholder="Name" className="w-full mb-4 p-2 border" />
        <input type="email" placeholder="Email" className="w-full mb-4 p-2 border" />
        <input type="password" placeholder="Password" className="w-full mb-4 p-2 border" />
        <select className="w-full mb-4 p-2 border">
          <option value="client">Client</option>
          <option value="owner">Owner</option>
        </select>
        <button className="w-full bg-green-600 text-white p-2">Register</button>
      </form>
    </div>
  );
}
