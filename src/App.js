import OrderForm from "./components/OrderForm";
import PendingOrders from "./components/PendingOrders";

function App() {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">🍽️ EDA Order Dashboard</h1>
      <OrderForm />
      <PendingOrders />
    </div>
  );
}

export default App;
