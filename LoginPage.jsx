
export default function LoginPage() {
  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form>
        <input type="email" placeholder="Email" className="w-full mb-4 p-2 border" />
        <input type="password" placeholder="Password" className="w-full mb-4 p-2 border" />
        <button className="w-full bg-green-600 text-white p-2">Login</button>
      </form>
    </div>
  );
}
