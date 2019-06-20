import React from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '~/components/Header';
import ListOrders from './list';

export default function Orders() {
  return (
    <>
      <Header />
      <ListOrders />
      <ToastContainer autoClose={3000} />
    </>
  );
}
