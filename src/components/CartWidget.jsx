import React, {useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function CartWidget() {
  const {cartCounter} = useContext(CartContext);
  
  return (
    cartCounter > 0 && 
      <Badge color="secondary" badgeContent={cartCounter}>
      <Link to="/cart"><ShoppingCartIcon className='flex justify-end'/>{" "}</Link>
    </Badge>
  )
}

export default CartWidget