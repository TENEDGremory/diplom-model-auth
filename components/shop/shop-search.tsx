"use client"
import Image from "next/image";
import { useState } from "react";

export const Search = ({ storeCard, children }: { storeCard: Array<any>, children: React.ReactNode }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="relative max-h-[60px] bg-white grid grid-cols-3 grid-rows-[60px_minmax(900px,_1fr)_100px] items-start px-4  rounded-br-xl col-span-5">
      <input
        className="relative border-b-2 border-black p-2 pb-0 outline-none mt-3"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="relative top-5 bg-white rounded-md z-50 col-start-1">
        <tbody className="flex flex-col  max-h-[500px] overflow-y-scroll">
          {storeCard.filter((item) => {
            return search.toLowerCase() === "" ? "" : item.name.toLowerCase().includes(search)
          }).map((item) => (
            <tr className="group/search-card flex items-center justify-between p-2 border-b-2 border-black bg-scroll" key={item.id}>
              <th className="w-[70px] h-[70px] overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-600 to-indigo-900 border-2 border-black rounded-md" >
                <Image src={item.imageId} alt={item.name} width={70} height={70} className="group-hover/search-card:scale-105 " />
              </th>
              <th className="ml-2" >{item.name}</th>
              <th>{item.price} $</th>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="relative right-0 col-start-3 row-start-1">
        {children}
      </div>
    </div>
  )



  // return (
  //   <div className="relative top-0 left-0 right-0 mx-auto" >
  //     <form>
  //       <input
  //         placeholder="Search..."
  //         onChange={(e) => setSearch(e.target.value)}
  //       />
  //     </form>
  //     <table className="border-black border-2">
  //       <thead>
  //         <tr>
  //           <th>Name</th>
  //           <th>Price</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {PRODUCTS.filter((item) => {
  //           return search.toLowerCase() === "" ? item : item.name.toLowerCase().includes(search)
  //         }).map((product) => (
  //           <tr key={product.id}>
  //             <td>{product.name}</td>
  //             <td>{product.price}</td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>
  // )
}