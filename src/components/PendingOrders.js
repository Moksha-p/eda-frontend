import { useEffect, useState } from "react";
import { getPendingOrders, approveOrder } from "../api";

export default function PendingOrders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await getPendingOrders();
      setOrders(res.data.pending);
    } catch (err) {
      console.error("Error fetching pending orders:", err);
    }
  };

  const handleApprove = async (id) => {
    try {
      await approveOrder(id);
      alert(`✅ Order ${id} approved!`);
      fetchOrders(); // refresh
    } catch (err) {
      alert(`❌ Error approving order ${id}`);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-2">Pending Orders</h2>
      {orders.length === 0 ? (
        <p>No pending orders</p>
      ) : (
        <ul className="space-y-2">
          {orders.map((order) => (
            <li
              key={order.order_id}
              className="flex justify-between items-center border p-2 rounded"
            >
              <span>
                🛒 {order.item} (x{order.quantity}) — ID: {order.order_id}
              </span>
              <button
                onClick={() => handleApprove(order.order_id)}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                Approve
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
