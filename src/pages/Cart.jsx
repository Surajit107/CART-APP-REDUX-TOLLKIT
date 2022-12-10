import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../redux/slice/CartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const {cartData} = useSelector((state) => state.cart)
  const [amount, setAmount] = useState(1)

  const removeProduct = (productId) => {
    dispatch(removeItem(productId))
  }

  const IncrementItems = () => {
    setAmount(amount + 1)
  }
  const DecrementItems = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1)
  }

  return (
    <div className='container mt-3'>
      {
        cartData.length ?

          <table className="table text-center">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Amount</th>
                <th scope="col">Subtotal</th>
                <th scope="col">Remove Item</th>
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
                      <td className='fw-semibold'>$ {Math.ceil(product.price)}</td>

                      {/* Inc & Dec Button */}

                      <td className='fw-semibold'>
                        <div className='d-inline-flex'>
                          <button
                            className='btn btn-sm btn-primary'
                            onClick={DecrementItems}>-</button>

                          <div className='bg-light text-center' style={{ width: "50px" }}>{amount}</div>

                          <button
                            className='btn btn-sm btn-primary'
                            onClick={IncrementItems}>+</button>
                        </div>
                      </td>

                      {/* Subtotal Amount */}

                      <td className='fw-semibold'>$ {Math.ceil(product.price * amount)}</td>

                      <td>
                        <button
                          className='btn btn-sm btn-danger'
                          onClick={() => removeProduct(product.id)}>Remove</button>
                      </td>
                    </tr>
                  )
                })
              }
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Total</td>
                <td></td>
              </tr>
            </tbody>
          </table>

          : <h4 className='text-center'><em>Opps!! The Cart Is Empty :(</em></h4>
      }
    </div>
  )
}

export default Cart