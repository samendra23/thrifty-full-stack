"use client"

import CarouselComp from "./components/CarouselComp"
import Product from "./components/Product"
import MainLayout from "./layouts/MainLayout"

export default function Home(){
  const products = [
    {
      id:1,
      title: "Thrifty",
      description: "Lorem10",
      url: "https://picsum.photos",
      price: 6000
    }
  ]
  return(
    <MainLayout>
      <CarouselComp/>

      <div className="max-w-[1200px] mx-auto ">
        <div className="text-2xl font-bold mt-4 mb-6 px-4">Products</div>

        <div className="grid grid-cols-5 gap-4">
          {
            products.map(product => (
              <Product key={product.id} product={product}/>
            ))
          }
        </div>
      </div>
    </MainLayout>
  )
}