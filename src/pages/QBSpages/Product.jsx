import React from 'react'
import { productData } from '../../data/data';
import { Link } from 'react-router-dom'
import SecondFooter from '../../components/SecondFooter';
import SecondNavbar from '../../components/SecondNavbar';
import { Helmet } from 'react-helmet';


const Product = () => {
  return (
    <>
      <Helmet>
                    <title>Products | QuickBooks Solutions</title>
                    <meta
                        name="description"
                        content="Read ISHEP Foundation's Anti-Discrimination Policy detailing equality, inclusion, and fairness."
                    />
                </Helmet>
    <SecondNavbar/>
      <div>
          {/* Product Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 py-30 px-5 max-w-7xl m-auto">
                    {productData && productData.length > 0 ? (
                      productData.map((product, index) => (
                        <div key={index} className="bg-white border border-gray-200 relative p-4 flex flex-col items-center text-center h-full rounded-md">
                          {/* Sale Tag */}
                          {product.sale && (
                            <div className="absolute top-0 right-0 bg-yellow-500 text-xs font-bold text-gray-800 px-3 py-1 -mt-1 -mr-1 shadow-md rounded-bl">
                              Sale!
                            </div>
                          )}
        
                          {/* Product Image */}
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-24 h-32 object-contain mb-4"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "https://placehold.co/100x130/0A8B46/ffffff?text=Product";
                            }}
                          />
        
                          {/* Title */}
                          <div className="grow">
                            <p className="text-gray-700 text-sm mb-2">{product.title}</p>
                            <p className="text-gray-500 text-xs mb-4">{product.users}</p>
                          </div>
        
                          {/* Pricing */}
                          <div className="mb-4">
                            <p className="text-sm line-through text-gray-400">{product.oldPrice}</p>
                            <p className="text-lg font-bold text-gray-900">{product.price}</p>
                          </div>
        
                          {/* Add to Cart Button */}
                       <Link to='/contact-us'>
                               <button
                            type="button"
                            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 w-full transition duration-150 rounded"
                          >
                            Add to cart
                          </button>
                       </Link>
                        </div>
                      ))
                    ) : (
                      // fallback when no products provided
                      <div className="col-span-full text-center text-gray-500 py-12">
                        No products available.
                      </div>
                    )}
                  </div>
    </div>
    <SecondFooter/>
    </>
  )
}

export default Product