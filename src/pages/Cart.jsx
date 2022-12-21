import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { DecItems, EmptyCart, IncItems, removeItem, TotalPrice } from '../redux/slice/CartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const { cartData, total, shippingCost, sub_total } = useSelector((state) => state.cart)

  const removeProduct = (product) => {
    dispatch(removeItem(product))
  }

  return (
    <div className='container mt-3'>
      {
        cartData.length ?

          <table className="table table-hover text-center">
            <thead>
              <tr>
                <th>No.</th>
                <th scope="col">Product</th>
                <th scope="col">Name</th>
                <th scope="col" style={{ width: "100px" }}>Price</th>
                <th scope="col">Amount</th>
                <th scope="col" style={{ width: "100px" }}>Total</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              {
                cartData.map((product, index) => {
                  return (
                    <tr key={product.id}>
                      <td className='fw-semibold'>{index + 1})</td>
                      <td>
                        <img src={product.image} alt="" style={{ height: "50px", width: "45px" }} />
                      </td>
                      <td className='fw-semibold'>{product.title}</td>

                      {/* Base Price */}

                      <td className='fw-semibold'>₹&nbsp;{Math.ceil(product.price)}</td>

                      {/* Inc & Dec Button */}

                      <td className='fw-semibold'>
                        <div className='d-inline-flex'>
                          <button
                            className='btn btn-sm btn-primary'
                            onClick={() => dispatch(DecItems(product.id))}>
                            <i className="fa-solid fa-angle-left"></i>
                          </button>

                          <div className='bg-light text-center' style={{ width: "40px" }}>{product.quantity}</div>

                          <button
                            className='btn btn-sm btn-primary'
                            onClick={() => dispatch(IncItems(product.id))}>
                              <i className="fa-solid fa-angle-right"></i>
                            </button>
                        </div>
                      </td>

                      {/* All Price */}

                      <td className='fw-semibold'>₹&nbsp;{Math.ceil(product.price * product.quantity)}</td>

                      <td>
                        <button
                          className='btn btn-sm btn-danger fw-semibold'
                          onClick={() => removeProduct(product)}>
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  )
                })
              }

              {/* Price Calculation*/}

              <tr>
                <td className='fw-semibold p-4' colSpan='6'>
                  <div className='text-end'>
                    Sub Total:<span className="text-muted">&nbsp;₹&nbsp;{Math.ceil(sub_total)}</span>
                    <br />
                    Shipping Cost:<span className="text-muted">&nbsp;&nbsp;₹&nbsp;{Math.ceil(shippingCost)}</span>
                    <br />
                    Total Price : <span className="text-muted">₹&nbsp;{Math.ceil(total)}</span>
                  </div>
                </td>
                <td className='p-5'>
                  <button
                    className='btn btn-sm btn-primary fw-semibold'
                    onClick={() => dispatch(TotalPrice())}>
                    Update <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                </td>
              </tr>

              {/* Clear Cart */}

              <tr>
                <td colSpan="3">
                  <button
                    className='btn btn-sm btn-danger fw-semibold'
                    onClick={() => dispatch(EmptyCart())}>
                    Clear Cart</button>
                </td>
                <td colSpan="4">
                  <Link to='/checkOut' className='btn btn-sm btn-primary fw-semibold'>Place Order</Link>
                </td>
              </tr>

            </tbody>
          </table>

          : <h2 className='text-center'><em className='shadow-lg p-3 mb-5 bg-info rounded text-white'>Cart Is Empty</em></h2>
      }
    </div>
  )
}

export default Cart