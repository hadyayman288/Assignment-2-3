import { findAllOrders, findOrderById } from "./orders-db.js";

export async function loadOrders() {
  return await findAllOrders();
}

export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Alexandria" && order.status === "cancelled"
  );
}

export function summarize(orders) {
  return orders.reduce((highest, order) => Math.max(highest, order.price), 0);
}

export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.student} ordered ${order.quantity} x ${order.item}`;
  } catch {
    return `Missing order: ${id}`;
  }
}

export function toJsonLines(orders) {
  return JSON.stringify(
    orders.map(({ student, city }) => ({ student, city }))
  );
}
