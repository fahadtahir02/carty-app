"use client";
import Image from "next/image";
import NavBar from "./components/navBar";
import Itemcard from "./components/itemCard"; 
import { useState } from "react";


export default function Home() {
  const [cartItem, setCart] = useState([])

  const addItemToCart = (item) => {
    setCart((prevItems) => [...prevItems, item]);
  };

  const clearItems = () => {
    setCart(()=> []);
  }


  return (
    <div>
      <NavBar></NavBar>
      <div className="mt-5 mx-10">
        <h1 className="text-4xl text-center font-semibold"> Welcome to Carty</h1>
        <div className="mt-20 font-medium sm:flex-row">
          <h2 className="text-2xl text-left font-bold"> Items </h2>
          <ol className="flex flex-row justify-center">
            <li className="m-5">
              <Itemcard
                src = "/download.jpeg"
                alt = {'nothing'}
                title = {'Laptop'}
                description = {'Acer Laptop'}
                onAddToCart={() => addItemToCart({src:"/download.jpeg", alt:'nothing', title:'Laptop', description:'Acer Laptop'})}

              ></Itemcard>
            </li>
            <li className="m-5">
              <Itemcard
                src = '/download.jpeg'
                alt = 'nothing'
                title = 'Laptop 2'
                description = 'Great laptop'
                onAddToCart={() => addItemToCart({src:"/download.jpeg", alt:'nothing', title:'Laptop2', description:'Great Laptop'})}
              ></Itemcard>
              <button onClick={() => clearItems()}> Clear Items</button>
            </li>
          </ol>

          <div className="mt-10 font-semibold">
            <h2>Items Inside Cart</h2>
            {cartItem.map((item, index)=> (
              <div key={index} className="p-5 bg-blue-300 border-4">
                <Image
                  src = {item.src}
                  width={300} 
                  height={150} 
                  alt={item.alt}
                ></Image>
                <h2 className="p-2 text-left">{item.title}</h2>
                <p className="p-2 text-center">{item.description}</p>
              </div>
            ))}
            
          </div>
          
        </div>


      </div>
    </div>
  );
}
