export default function PaymentPage() {
  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4">Make Payment</h2>
      <form>
        <input type="text" placeholder="Amount" className="w-full mb-4 p-2 border" />
        <button className="w-full bg-green-600 text-white p-2">Pay Now</button>
      </form>
    </div>
  );
}
