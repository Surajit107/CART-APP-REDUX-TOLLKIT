import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../redux/slice/CartSlice'
import { fetchProducts } from '../redux/slice/ProductSlice'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Products = () => {
    const dispatch = useDispatch()
    const { products, loading } = useSelector((state) => state.productslice)

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
            <div className="row row-cols-1 row-cols-md-4 g-4 m-2 p-2">
                {
                    products?.map((product) => {
                        return (
                            <div className="col" key={product.id}>
                                <div className="shadow p-3 mb-5 bg-body rounded text-center" style={{ height: "90%" }}>
                                    <img src={product.image} className="card-img-top" alt="" style={{ height: "120px", width: "110px" }} />

                                    <div className="card-body mt-3">
                                        <h5 className="card-title text-center"><em>{product.title}</em></h5>
                                        <br />
                                        <h6 className="card-title text-center">₹&nbsp;{product.price}</h6>
                                        <br />
                                    </div>
                                    <button
                                        className='btn btn-primary btn-sm fw-bold'
                                        onClick={() => addProduct(product)}>
                                        <i class="fa-solid fa-cart-plus"></i>
                                        &nbsp;&nbsp;Add To Cart
                                    </button>
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