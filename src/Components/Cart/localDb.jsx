import React from 'react'
//localDb used for Storage now will change in the future
export const AddToDb = id=> {
    const exist = getDb();
    let cart={}
    if(!exist){
        cart[id] = 1
    }else{
        cart=JSON.parse(exist)
        if(cart[id]){
            const newCount = cart[id] + 1;
            cart[id] = newCount;
        }else{
            cart[id] = 1;
        }
    }
    updateDb(cart)
}

export const getDb = ()=>localStorage.getItem('cart');

export const updateDb = cart =>{
    localStorage.setItem("cart",JSON.stringify(cart));
}

export const removeFromDb = id => {
    const exists = getDb();
    if (!exists) {
  
    }
    else {
      const cart = JSON.parse(exists);
      delete cart[id];
      updateDb(cart);
    }
  }
  
export const getStoredCart = () => {
    const exists = getDb();
    return exists ? JSON.parse(exists) : {};
  }
  
export const clearTheCart = () => {
    localStorage.removeItem('shopping_cart');
  }