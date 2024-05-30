import ShopStore from "@/components/shop/shop-store";
import ShopBasket from "@/components/shop/shop-basket";
import ShopFilterBar from "@/components/shop/shop-filter-bar";
import { db } from "@/lib/db";
import { Search } from "@/components/shop/shop-search";


const ShopPage = async () => {

  const card = await db.cardProductStore.findMany({});
  const filterCard = await db.cardFilters.findMany({});
  const optionsFilter = await db.optionsFilter.findMany({});
  const cartBasket = await db.cartBasket.findMany({});

  return (
    <div className="relative min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-600 to-indigo-900 grid grid-cols-6 grid-rows-[60px_minmax(900px,_1fr)_100px]">
      <ShopFilterBar storeCard={card} filterCard={filterCard} optionsFilter={optionsFilter} />

      <Search storeCard={card}>
        <ShopBasket cartBasket={cartBasket} />
      </Search>
      <ShopStore storeCard={card} />

    </div>
  )
}

export default ShopPage;