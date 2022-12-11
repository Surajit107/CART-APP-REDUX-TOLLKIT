import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DecItems, EmptyCart, IncItems, removeItem, TotalPrice } from '../redux/slice/CartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const { cartData, total } = useSelector((state) => state.cart)

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
                      <td className='fw-semibold'>₹&nbsp;{product.price}</td>

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

                      {/* Subtotal Amount */}

                      <td className='fw-semibold'>₹&nbsp;{(product.price * product.quantity).toFixed(2)}</td>

                      <td>
                        <button
                          className='btn btn-sm btn-danger fw-semibold'
                          onClick={() => removeProduct(product)}>
                          <i class="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  )
                })
              }

              {/* Total Price */}

              <tr>
                <td></td>
                <td></td>
                <td className='fw-semibold' colSpan="2">Total Price</td>
                <td className='fw-semibold'>₹&nbsp;{Math.ceil(total)}</td>
                <td>
                  <button
                    className='btn btn-sm btn-primary fw-semibold'
                    onClick={() => dispatch(TotalPrice())}>
                   Update <i class="fa-solid fa-pen-to-square"></i>
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

          : <h2 className='text-center'><em>Cart Is Empty</em></h2>
      }
    </div>
  )
}

export default Cart