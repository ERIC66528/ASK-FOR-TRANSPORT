
export default function LandingPage() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold text-green-700">Ask for Transport</h1>
      <p className="mt-4 text-gray-600">Easily rent lorries or cars from verified owners around town.</p>
      <div className="mt-6">
        <a href="/login" className="mr-4 px-4 py-2 bg-green-600 text-white rounded">Login</a>
        <a href="/register" className="px-4 py-2 border border-green-600 text-green-600 rounded">Register</a>
      </div>
    </div>
  );
}
