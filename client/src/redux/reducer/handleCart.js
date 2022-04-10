const cart=[];

const handleCart=(state = cart, action)=>{
  const product = action.payload;
  switch(action.type){
    case 'ADDITEM':
      const exist = state.find((item)=>item._id === product._id);
      if(exist){
        return state.map((item)=>
        item.id === product.id ? {...item, qty: item.qty + 1} : item);
      }else{
        const product = action.payload;
        return[
          ...state,
          {
            ...product,
            qty:1,
          }
        ]
      }
      break;
    case 'DELITEM':
      const exist1 = state.find((item)=>item._id === product._id);
      if(exist1.qty ===1){
        return state.filter((item)=> item._id !== exist1._id);
      }else{
        return state.map((item)=> item._id === product._id ? {...item, qty: item.qty-1} : item);
      }
      break;
    default:
    return state;
  }
}

export default handleCart;