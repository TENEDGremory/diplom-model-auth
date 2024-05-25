import ShopFilterBar from "@/components/shop/shop-filter-bar";
import { Search } from "@/components/shop/shop-search";
import ShopStore from "@/components/shop/shop-store";
import { db } from "@/lib/db";


const ShopPage = async () => {

  const card = await db.cardProductStore.findMany({});

  return (
    <div className="relative min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-600 to-indigo-900 flex flex-row">
      <ShopFilterBar storeCard={card} />
      <div className="relative w-full flex flex-col">
        <Search storeCard={card} />
        <ShopStore storeCard={card} />
      </div>
    </div>
  )
}

export default ShopPage;