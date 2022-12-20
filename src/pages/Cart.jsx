import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
                <th scope="col">Product</th>
                <th scope="col">Name</th>
                <th scope="col" style={{ width: "100px" }}>Price</th>
                <th scope="col">Amount</th>
                <th scope="col" style={{ width: "100px" }}>Subtotal</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              {
                cartData.map((product) => {
                  return (
                    <tr key={product.id}>
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
                            onClick={() => dispatch(DecItems(product.id))}>-</button>

                          <div className='bg-light text-center' style={{ width: "40px" }}>{product.quantity}</div>

                          <button
                            className='btn btn-sm btn-primary'
                            onClick={() => dispatch(IncItems(product.id))}>+</button>
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

              {/* Total Price */}

              <tr>
                <td className='fw-semibold' colSpan="2">Total Price</td>
                <td className='fw-semibold'>Sub Total:&nbsp;₹&nbsp;{Math.ceil(sub_total)}</td>
                <td className='fw-semibold'>Shipping Cost:&nbsp;&nbsp;₹&nbsp;{Math.ceil(shippingCost)}</td>
                <td className='fw-semibold'>₹&nbsp;{Math.ceil(total)}</td>
                <td>
                  <button
                    className='btn btn-sm btn-primary fw-semibold'
                    onClick={() => dispatch(TotalPrice())}>
                    Update <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                </td>
              </tr>

              {/* Clear Cart */}

              <tr>
                <td></td>
                <td colSpan="5">
                  <button
                    className='btn btn-sm btn-danger fw-semibold'
                    onClick={() => dispatch(EmptyCart())}>Clear Cart</button>
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