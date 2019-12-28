import React, { useState, useEffect } from "react";
import "./App.css";

function ListStock({ stock }) {
  return (
    <section>
      <h1>All Stock</h1>
      {stock ? (
        stock.map(item => {
          return (
            <figure>
              <h4>{item.barcode}</h4>
              <h2>{item.name}</h2>
              <h3>{item.price}</h3>
              <h5>{item.quantity}</h5>
            </figure>
          );
        })
      ) : (
        <h1>Nothing to see here</h1>
      )}
    </section>
  );
}
function ListOrders({ orders }) {
  return (
    <section>
      <h1>All Orders</h1>
      {orders ? (
        orders.map(order => {
          return (
            <figure>
              <h4>{order.customerDetails.fullname}</h4>
              <h2>{order.orderNumber}</h2>
              <p>
                {order.items.map(item => {
                  return (
                    <>
                      <span>{item.count} *</span>
                      <span>{item.name}</span>
                      <span>for {item.price} each</span>
                    </>
                  );
                })}
              </p>
              <h5>{order.total}</h5>
            </figure>
          );
        })
      ) : (
        <h1>Nothing to see here</h1>
      )}
    </section>
  );
}
function ListCustomers() {
  const [customers, setCustomers] = useState([]);

  return (
    <section>
      <h1>All Orders</h1>
      {customers ? (
        customers.map(customer => {
          return (
            <figure>
              <h5>{customer.active ? "online" : "offline"}</h5>
              <h4>{customer.fullname}</h4>
              <h2>
                {customer.email} || {customer.phone}
              </h2>
              <p>
                {customer.orderHistory.map(order => {
                  return (
                    <>
                      <h4>{order.orderNumber}</h4>
                      <h3>{order.date}</h3>
                      <h2>for {order.total}</h2>
                    </>
                  );
                })}
              </p>
              <h5>{customer.registered}</h5>
            </figure>
          );
        })
      ) : (
        <h1>Nothing to see here</h1>
      )}
    </section>
  );
}

function App() {
  const [stock, setStock] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/v1/api/stock")
      .then(res => res.json())
      .then(data => {
        setStock(data);
      });
    fetch("http://localhost:8080/v1/api/orders")
      .then(res => res.json())
      .then(data => {
        setOrders(data);
      });
  }, []);
  return (
    <div className="App">
      <ListStock stock={stock}></ListStock>
      <ListOrders orders={orders}></ListOrders>
    </div>
  );
}

export default App;
