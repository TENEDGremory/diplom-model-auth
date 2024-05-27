import ShopStore from "@/components/shop/shop-store";
import ShopBasket from "@/components/shop/shop-basket";
import ShopFilterBar from "@/components/shop/shop-filter-bar";
import { db } from "@/lib/db";
import { Search } from "@/components/shop/shop-search";


const ShopPage = async () => {

  const card = await db.cardProductStore.findMany({});
  const filterCard = await db.cardFilters.findMany({});
  const optionsFilter = await db.optionsFilter.findMany({});
  return (
    <div className="relative min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-600 to-indigo-900 flex flex-row">
      <ShopFilterBar storeCard={card} filterCard={filterCard} optionsFilter={optionsFilter} />
      <div className="relative w-full flex flex-col">
        <Search storeCard={card}>
          <ShopBasket />
        </Search>
        <ShopStore storeCard={card} />
      </div>
    </div>
  )
}

export default ShopPage;