import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { EmptyCart } from '../redux/slice/CartSlice'

const CheckOut = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        fname: "",
        lname: "",
        email: "",
        add1: "",
        add2: "",
        zip: "",
        card: "",
        cardNum: "",
        cardExp: "",
        cardCVV: ""
    })

    const { cartData, total, shippingCost, sub_total } = useSelector((state) => state.cart)

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/cart')
    }

    return (
        <div className='container m-5'>
            <div className="row g-5">

                {/* CheckOut Right Side */}

                <div className="col-md-5 col-lg-4 order-md-last">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-primary">Your cart</span>
                        <span className="badge bg-primary rounded-pill">
                            {cartData.length ? cartData.length : null}
                        </span>
                    </h4>
                    <ul className="list-group mb-3">
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 className="my-0">Products</h6>
                                <br />
                            </div>
                            <span className="text-muted">
                                {cartData.length ? cartData.length : 0}
                            </span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 className="my-0">Sub Total</h6>
                                <br />
                            </div>
                            <span className="text-muted">
                                ₹&nbsp;{Math.ceil(sub_total)}
                            </span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 className="my-0">Shipping Cost</h6>
                                <br />
                            </div>
                            <span className="text-muted">
                                ₹&nbsp;{Math.ceil(shippingCost)}
                            </span>
                        </li>
                        {/* <li className="list-group-item d-flex justify-content-between bg-light">
                            <div className="text-success">
                                <h6 className="my-0">Promo code</h6>
                                <small>EXAMPLECODE</small>
                            </div>
                            <span className="text-success">−₹&nbsp;5</span>
                        </li> */}
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total (INR)</span>
                            <strong>
                                ₹&nbsp;{Math.ceil(total)}
                            </strong>
                        </li>
                    </ul>

                    {/* <form className="card p-2">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Promo code" />
                            <button type="submit" className="btn btn-secondary">Redeem</button>
                        </div>
                    </form> */}
                </div>

                {/* CheckOut Left Side  */}

                <div className="col-md-7 col-lg-8">
                    <h4 className="mb-3">Billing address</h4>
                    <form className="needs-validation" onSubmit={handleSubmit}>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label htmlFor="firstName" className="form-label">First name</label>
                                <input
                                    name='fname'
                                    value={input.fname}
                                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    placeholder="Firstname"
                                />
                            </div>

                            <div className="col-sm-6">
                                <label htmlFor="lastName" className="form-label">Last name</label>
                                <input
                                    name='lname'
                                    value={input.lname}
                                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    placeholder="Lastname"
                                />
                            </div>

                            {/* <div className="col-12">
                                <label htmlFor="username" className="form-label">Username</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text">@</span>
                                    <input type="text" className="form-control" id="username" placeholder="Username" />
                                </div>
                            </div> */}

                            <div className="col-12">
                                <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                                <input
                                    name='email'
                                    value={input.email}
                                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="example@gmail.com"
                                />
                            </div>

                            <div className="col-12">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input
                                    name='add1'
                                    value={input.add1}
                                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    placeholder="Address 1"
                                />
                            </div>

                            <div className="col-12">
                                <label htmlFor="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
                                <input
                                    name='add2'
                                    value={input.add2}
                                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                                    type="text"
                                    className="form-control"
                                    id="address2"
                                    placeholder="Address 2"
                                />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="state" className="form-label">State</label>
                                <select className="form-select" id="state">
                                    <option className='ul'>Choose...</option>
                                    <option >Andhra Pradesh</option>
                                    <option >Andaman and Nicobar Islands</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option >Assam</option>
                                    <option >Bihar</option>
                                    <option >Chandigarh</option>
                                    <option >Chhattisgarh</option>
                                    <option>Dadar and Nagar Haveli</option>
                                    <option >Daman and Diu</option>
                                    <option >Delhi</option>
                                    <option >Lakshadweep</option>
                                    <option >Puducherry</option>
                                    <option >Goa</option>
                                    <option >Gujarat</option>
                                    <option >Haryana</option>
                                    <option >Himachal Pradesh</option>
                                    <option >Jammu and Kashmir</option>
                                    <option >Jharkhand</option>
                                    <option >Karnataka</option>
                                    <option >Kerala</option>
                                    <option >Madhya Pradesh</option>
                                    <option >Maharashtra</option>
                                    <option >Manipur</option>
                                    <option >Meghalaya</option>
                                    <option >Mizoram</option>
                                    <option >Nagaland</option>
                                    <option >Odisha</option>
                                    <option >Punjab</option>
                                    <option >Rajasthan</option>
                                    <option >Sikkim</option>
                                    <option >Tamil Nadu</option>
                                    <option >Telangana</option>
                                    <option >Tripura</option>
                                    <option >Uttar Pradesh</option>
                                    <option >Uttarakhand</option>
                                    <option >West Bengal</option>
                                </select>
                            </div>

                            <div className="col-md-3">
                                <label htmlFor="zip" className="form-label">Zip</label>
                                <input
                                    name='zip'
                                    value={input.zip}
                                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                                    type="text"
                                    className="form-control"
                                    id="zip"
                                    maxLength={6}
                                />
                            </div>
                        </div>

                        <hr className="my-4" />

                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="same-address" />
                            <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                        </div>

                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="save-info" />
                            <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
                        </div>

                        <hr className="my-4" />

                        <h4 className="mb-3">Payment</h4>

                        <div className="my-3">
                            <div className="form-check">
                                <input id="credit" name="paymentMethod" type="radio" className="form-check-input" />
                                <label className="form-check-label" htmlFor="credit">Credit card</label>
                            </div>
                            <div className="form-check">
                                <input id="debit" name="paymentMethod" type="radio" className="form-check-input" />
                                <label className="form-check-label" htmlFor="debit">Debit card</label>
                            </div>
                            <div className="form-check">
                                <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" />
                                <label className="form-check-label" htmlFor="paypal">UPI</label>
                            </div>
                            <div className="form-check">
                                <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" />
                                <label className="form-check-label" htmlFor="paypal">Cash On Delivery</label>
                            </div>
                        </div>

                        <div className="row gy-3">
                            <div className="col-md-6">
                                <label htmlFor="cc-name" className="form-label">Name on card</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cc-name"
                                />
                                <small className="text-muted">Full name as displayed on card</small>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="cc-number" className="form-label">Credit card number</label>
                                <input
                                    name='cardNum'
                                    value={input.cardNum}
                                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                                    type="text"
                                    className="form-control"
                                    id="cc-number"
                                    maxLength={16}
                                />
                            </div>

                            <div className="col-md-3">
                                <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                                <input
                                    name='cardExp'
                                    value={input.cardExp}
                                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                                    type="month"
                                    className="form-control"
                                    id="cc-expiration"
                                />
                            </div>

                            <div className="col-md-3">
                                <label htmlFor="cc-cvv" className="form-label">CVV</label>
                                <input
                                    name='cardCVV'
                                    value={input.cardCVV}
                                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                                    type="text"
                                    className="form-control"
                                    id="cc-cvv"
                                    maxLength={3}
                                />
                            </div>
                        </div>

                        <hr className="my-4" />

                        <button className="btn btn-primary btn-lg" type="submit" onClick={() => dispatch(EmptyCart())}>Continue to checkout</button>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default CheckOut