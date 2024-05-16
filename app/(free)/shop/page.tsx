import { db } from "@/lib/db";

const ShopPage = async () =>{
  const card = await db.cardProductStore.findMany()
  return(
    <div className="relative top-16">
      {card.map((card) =>(
        <img src={card.imageId} width={50} height={50}/>
      ))}
    </div>
  )
}



export default ShopPage;