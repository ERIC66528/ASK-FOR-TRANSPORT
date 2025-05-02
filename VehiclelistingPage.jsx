export default function VehicleListingPage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Add New Vehicle</h1>
      <form>
        <input type="text" placeholder="Vehicle Type" className="block w-full p-2 border mt-4" />
        <input type="text" placeholder="Price" className="block w-full p-2 border mt-4" />
        <button className="bg-green-600 text-white p-2 mt-4">Save Vehicle</button>
      </form>
    </div>
  );
}
