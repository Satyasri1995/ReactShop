import { ProductActions } from "../slices/ProductSlice"

export const fetchProducts = ()=>{
    return async (dispatch)=>{
    
        const fakeHttpCall = () =>{
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve([
                        {
                            id:Math.random().toString().substring(2),
                            name:"React",
                            url:"https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/0e6ff/React.jpg",
                            price:100
                        },
                        {
                            id:Math.random().toString().substring(2),
                            name:"PrimeReact",
                            url:"https://www.rezourze.com/rz-storage/2020/09/PrimeReact-UI-Component-Libraries-Frameworks.jpg",
                            price:20
                        },
                        {
                            id:Math.random().toString().substring(2),
                            name:"React Router",
                            url:"https://miro.medium.com/max/1400/1*sX8rBJBol5dBp5WIJQrYyw.png",
                            price:10
                        }
                    ])
                })
            })
        }

        const productsData = await fakeHttpCall();
        dispatch(ProductActions.replaceProducts(productsData));
    }
}