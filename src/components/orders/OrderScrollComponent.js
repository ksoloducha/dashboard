import React, {useState} from 'react'
import Stack from 'react-bootstrap/Stack'
import DropdowbButton from 'react-bootstrap/DropdownButton'
import './OrderScrollComponent.css'
import Order from './Order.js'

const list = [
  {
    orderId: '1',
    price: '1234',
    address: 'Address',
    date: '1988-12-10',
  },
  {
    orderId: '1',
    price: '1234',
    address: 'Address',
    date: '1988-12-10',
  },
  {
    orderId: '1',
    price: '1234',
    address: 'Address',
    date: '1988-12-10',
  },
  {
    orderId: '1',
    price: '1234',
    address: 'Address',
    date: '1988-12-10',
  },
  {
    orderId: '1',
    price: '1234',
    address: 'Address',
    date: '1988-12-10',
  },
  {
    orderId: '1',
    price: '1234',
    address: 'Address',
    date: '1988-12-10',
  },
  {
    orderId: '1',
    price: '1234',
    address: 'Address',
    date: '1988-12-10',
  },
  {
    orderId: '1',
    price: '1234',
    address: 'Address',
    date: '1988-12-10',
  },
  {
    orderId: '1',
    price: '1234',
    address: 'Address',
    date: '1988-12-10',
  },
  {
    orderId: '1',
    price: '1234',
    address: 'Address',
    date: '1988-12-10',
  },
  {
    orderId: '1',
    price: '1234',
    address: 'Address',
    date: '1988-12-10',
  },
  {
    orderId: '1',
    price: '1234',
    address: 'Address',
    date: '1988-12-10',
  },
];

const OrderScrollComponent = (props) => {
    return(
      <div>
        <div className="order-header" style={{backgroundColor: props.titleColor}}>
          <label>{props.title}</label>
        </div>
        <div className="order-scroll">
          {
            list.map((item) =>
           <Order key={item.orderId}
              orderId={item.orderId}
              price={item.price}
              address={item.address}
              date={item.date}
            >
            </Order>)
          }
        </div>  
      </div>  
    )
}

export default OrderScrollComponent