// import { useEffect } from "react";
// import { createContext, useContext, useState } from "react";
// import FProduct from "./Home/FProduct";

// const url="https://course-api.com/react-store-products"
// const single = "https://course-api.com/react-store-single-product?id=rec1Ntk7siEEW9ha1"

// export const AppContext = createContext()

// export const AppProvider = ({children}) =>{
//     const [hover,setHover] = useState(false);
//     const [items,setItems] = useState([])
//     const [loading,setLoading] = useState(true);
//     const [data,setData] = useState(items)
//     const [Allstuffs,setStuffs] = useState()
//     const [count,setCount] = useState(0)
//     const [total,setTotal] = useState({})
//     const [mod,setMod] = useState(false)
//     const [cartSubTotal,setCartSubTotal] = useState(0)
//     const [inCart,setInCart] = useState(false)
//     const [cartTax,setCartTax] = useState(0)
//     const [cartTotal,setCartTotal] = useState(0)
//     // const [carts,updateCart]=useState({
//     //     cart:[],
//     //     inCart:false,
//     //     cartTax:0,
//     //     cartTotal:0,
//     // })
//      const [carts,updateCart]=useState([])

//     const setProducts =()=>{
//         let tempProd = []
//         // change data to url
//         data.forEach(item=>{
//             const singleItem = {...item};
//             tempProd = [...tempProd,singleItem]
//         })
//         setData(tempProd)
//     }
    

//     const getItem = (id)=>{
//         const product = data.find(item=>item.id ===id);
//         return product
//     }

//     const addToCart=(id)=>{
//           //Before everything, to check the method's way logically
//        // console.log(`hello from add to cart id is ${id}`); 
// // if url change stuffs here
//        let tempProd = data
//        const index = tempProd.indexOf(getItem(id));
//        const product = tempProd[index];
//        setInCart(true);
//        setCount(1);
//        const price = product.price;
//         setTotal(price);
//         setData(tempProd);
//         updateCart(...carts,product)
//         addTotals()
//         console.log(id)
//     }
//     const addTotals =()=>{
//         let subTotal = 0;
//         updateCart.map(item => (subTotal += item.total));
//         //5.12 item => (subTotal += itemTotal) or down syntax chose and care
//         //5.12 item => {subTotal += itemTotal} 
//         const tempTax = subTotal * 0.1;
//         // tempTax = subTotal * TaxRate;
//         const tax = parseFloat(tempTax.toFixed(2));
//         //toFixed means how many decimals should be shown
//         //The parseFloat() function parses a string and returns a floating point number.
//         const total = subTotal + tax;
//         setCartSubTotal(subTotal);
//         //change the previous ones from zero
//         setCartTax(tax);
//         setCartTotal(total);

//     }


//     const handleDetail = (id)=>{
//         const product = getItem(id);
//         setData(product)
//     }
//     const fetchSingle = async() =>{
//         try{
//             const response = await fetch(url)
//             const stuffs=await response.json()
//             setStuffs(stuffs)
//         }catch(error){
//             setLoading(false)
//             console.log(error)
//         }
//     }

//     useEffect(()=>{
//         fetchItems()
//         // fetchSingle()
//         setProducts()
//     })
//       const fetchItems = async() =>{
//         setLoading(true)
//         try{
//             const response = await fetch(url)
//             const stuffs=await response.json()
//             setLoading(false)
//             console.log(stuffs)
//             setItems(stuffs)
//         }catch(error){
//             setLoading(false)
//             console.log(error)
//         }
//     }
//     // const filter = (category) => {
//     //     if (category === 'all') {
//     //         setData(items);
//     //         return;
//     //       }
//     //     const newItems = items.filter((item) => item.category === category);
//     //     setData(newItems);
    
//     //   };

//     return(
//         <AppContext.Provider value={{handleDetail,addToCart,fetchItems}}>
//             {children}
//         </AppContext.Provider>
//     )
// }

// export const useGlob = ()=>{
//   return useContext(AppContext)
// }
