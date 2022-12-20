import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../redux/slice/CartSlice'
import { fetchProducts } from '../redux/slice/ProductSlice'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


const Products = () => {
    const dispatch = useDispatch()
    const { all_products, loading } = useSelector((state) => state.productslice)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    const addProduct = (product) => {
        dispatch(addItem(product))
    }

    if (loading) {
        return <h1 className='text-center text-secondary mt-3'>Loading...</h1>
    }

    return (
        <div>
            <h2 className='text-center mt-2'><em className='shadow p-3 mb-5 bg-secondary rounded text-white'>All Products</em></h2>

            <p className='fst-italic fs-7 text-center mt-5'>
                <em className='shadow p-3 mb-5 bg-info rounded text-white'>Shipping cost will be charged under the purchase of &nbsp;&nbsp;₹&nbsp;2500/-</em>
            </p>

            <div className="row row-cols-1 row-cols-md-4 g-4 m-2 p-2">
                {
                    all_products?.map((product) => {
                        return (
                            <div className="col" key={product.id}>
                                <div className="shadow p-3 mb-5 bg-body rounded text-center" style={{ height: "90%" }}>
                                    <img src={product.image} className="card-img-top" alt="" style={{ height: "120px", width: "110px" }} />

                                    <div className="card-body mt-3">
                                        <h5 className="card-title text-center"><em>{product.title}</em></h5>
                                        <br />
                                        <h6 className="card-title text-center">₹&nbsp;{Math.ceil(product.price)}</h6>
                                        <br />
                                    </div>
                                    <button
                                        className='btn btn-primary btn-sm fw-bold mx-2'
                                        onClick={() => addProduct(product)}>
                                        <i className="fa-solid fa-cart-plus"></i>
                                        &nbsp;&nbsp;Add To Cart
                                    </button>

                                    <Link
                                        className='btn btn-info btn-sm fw-bold text-white mx-2'
                                        to={`/pdetails/${product.id}`}>
                                        <i className="fa-solid fa-circle-info"></i>
                                        &nbsp;&nbsp;Details
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <ToastContainer />
        </div>
    )
}

export default Products