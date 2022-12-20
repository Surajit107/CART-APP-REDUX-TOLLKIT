import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { addItem } from '../redux/slice/CartSlice'
import { ToastContainer } from 'react-toastify'

const ProductDetails = () => {
    const { pid } = useParams()
    const dispatch = useDispatch()
    const { all_products } = useSelector((state) => state?.productslice)
    const product = all_products?.filter(item => item.id === pid)
    const addProduct = (product) => {
        dispatch(addItem(product))
    }

    return (
        <div className='text-center m-5'>
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={product[0]?.image} className="img-fluid rounded-start m-5" alt="..." />
                    </div>
                    <div className="col-md-12 ">
                        <p className="card-text ml-5"><small className="text-muted">Category&nbsp;:&nbsp;&nbsp;{product[0]?.category}</small></p>
                        <div className="card-body">
                            <h5 className="card-title">{product[0]?.title}</h5>
                            <h4 className="card-title">Price: ₹&nbsp;{Math.ceil(product[0]?.price)}</h4>
                            <p className="card-text"><span className='fw-semibold'>About&nbsp;:&nbsp;</span>{product[0]?.description}</p>
                            <Link
                                className='btn btn-primary btn-sm fw-bold mx-2'
                                to="/products">
                                <i className="fa-solid fa-backward"></i>
                                &nbsp;&nbsp;Back
                            </Link>
                            <button
                                className='btn btn-primary btn-sm fw-bold mx-2'
                                onClick={() => addProduct(product[0])}>
                                <i className="fa-solid fa-cart-plus"></i>
                                &nbsp;&nbsp;Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default ProductDetails