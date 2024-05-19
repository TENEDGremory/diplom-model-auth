import { db } from "@/lib/db";

const ShopPage = async () =>{
  const card = await db.cardProductStore.findMany()
  return(
    <div className="relative top-16 flex flex-wrap">
      {card.map((card) =>(
        <div className="min-w-[300px] min-h-[400px] mx-[10px] my-[10px] bg-white rounded-xl">
          <img key={card.id} src={card.imageId} width={50} height={50}/>
        </div>
      ))}
    </div>
  )
}



export default ShopPage;