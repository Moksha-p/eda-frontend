import { useState } from "react";
import { addOrder } from "../api";

export default function OrderForm() {
  const [order, setOrder] = useState({
    order_id: "",
    item: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addOrder({
        order_id: parseInt(order.order_id),
        item: order.item,
        quantity: parseInt(order.quantity),
      });
      alert("✅ Order placed!");
      setOrder({ order_id: "", item: "", quantity: "" });
    } catch (error) {
      console.error("❌ Error placing order:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold">Place Order</h2>
      <input
        name="order_id"
        type="number"
        placeholder="Order ID"
        value={order.order_id}
        onChange={handleChange}
        className="border p-2 rounded w-full"
        required
      />
      <input
        name="item"
        placeholder="Item"
        value={order.item}
        onChange={handleChange}
        className="border p-2 rounded w-full"
        required
      />
      <input
        name="quantity"
        type="number"
        placeholder="Quantity"
        value={order.quantity}
        onChange={handleChange}
        className="border p-2 rounded w-full"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit Order
      </button>
    </form>
  );
}
