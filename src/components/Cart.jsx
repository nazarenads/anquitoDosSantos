import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

function Cart() {
  const {cartProducts, clearCart, removeProduct, cartCounter, totalCartAmount} = useContext(CartContext);

  const order = {
    buyer : {
      name: "Nazarena Dos Santos",
      email: "nazarenads@gmail.com",
      phone: "1135652774",
      address: "Sarmiento 3849, 4to A, CABA"
    },
    items: cartProducts.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.counter})),
    total: totalCartAmount
  }

  const handleClick = () => {
    const db = getFirestore();
    const orderCollection = collection(db, 'orders')
    addDoc(orderCollection, order).then(
      ({id}) => console.log(id)
    )
  }


  return (
    <>
    <div class="bg-neutral-50 py-12">
      <div class="container mx-auto my-12">
        <div class="flex flex-col gap-6 md:flex-row">
          <div class="flex-1 shrink-0 rounded-sm border border-neutral-200 bg-white px-4 py-8 shadow-sm">
            <div class="mb-8">
              <h3 class="text-2xl font-bold">Shopping cart</h3>
            </div>
            <ul role="list" class="-my-6 divide-y divide-neutral-200">
              {cartProducts.map((product) => {
                return (
                  <li class="flex py-6">
                    <div class="h-32 w-24 flex-shrink-0 overflow-hidden rounded-sm border bg-neutral-50">
                      <img src={product.image} class="h-full w-full object-cover object-center" />
                    </div>

                    <div class="ml-4 flex flex-1 flex-col">
                      <div>
                        <div class="flex justify-between text-sm text-gray-900">
                          <h3 class="text-base font-bold"><a href="#"> {product.title} </a></h3>
                          <button type="button" class="flex gap-2 font-medium text-neutral-400 hover:text-neutral-900">
                            <p onClick={() => removeProduct(product.id)} class="text-xs font-normal">Remove</p>
                            <svg class="h-4 w-4 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                          </button>
                        </div>
                        <div class="mt-2">
                          <p class="text-xs text-neutral-400">Items: {product.counter}</p>
                        </div>
                      </div>
                      <div class="mt-auto flex flex-1 items-end justify-between text-sm">
                        <div>
                          {/* <label for="quantity" class="sr-only">aantal</label>
                          <select id="location" name="location" class="mt-1 block border-gray-500 py-2 pl-3 pr-10 text-base focus:border-neutral-500 focus:outline-none focus:ring-neutral-500 sm:text-sm">
                            <option>1</option>
                            <option selected>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>22</option>
                          </select> */}
                        </div>

                        <div class="flex">
                          <div class="text-right">
                            <p class="text-sm font-bold text-orange-600">${product.price * product.counter}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
            {
              cartCounter > 0 ? 
                <div className="text-center">
                  <button onClick={clearCart} type="button" class="text-neutral-400 hover:text-neutral-900">
                    <p class="text-sm font-normal">Empty cart</p>
                  </button>
                </div> : <p>Your cart is empty. <Link to="/" className='underline'>Go back to select your products.</Link></p>
            }
          </div>
          

          <div class="sticky space-y-4 rounded-sm border border-neutral-200 bg-white py-6 px-4 shadow-sm sm:px-6 md:w-1/3">
            <h4 class="text-2xl font-bold">Order summary</h4>
            <div class="flex flex-col gap-2">
              <div class="flex justify-between text-base text-gray-900">
                <p>Total</p>
                <p>$ {totalCartAmount}</p>
              </div>
              <div class="flex justify-between text-base text-gray-900">
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <div>
                <div class="my-2 w-full border-t border-gray-300"></div>
                <div class="flex justify-between text-base font-bold text-gray-900">
                  <p>Final</p>
                  <p>$ {totalCartAmount}</p>
                </div>
                <p class="mt-0.5 text-sm text-gray-400">including taxes</p>
              </div>
              <div class="mt-auto flex flex-col gap-2 pt-4">
                <div class="">
                  <a onClick={handleClick} href="#" class="flex items-center justify-center rounded-md border border-transparent bg-neutral-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-neutral-900">Go to checkout</a>
                </div>
                <div class="flex justify-center text-center text-sm text-gray-500">
                  <p>
                    or <Link to="/"><button type="button" class="font-medium text-neutral-600 hover:text-neutral-500">Continue shopping<span aria-hidden="true"> &rarr;</span></button></Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Cart;
