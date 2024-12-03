import { ResponsiveNavbar } from "../components/ResponsiveComponents";
import { ResponsiveFooter } from "../components/ResponsiveComponents";
import Cart from "../components/Cart";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-400 to-red-500 items-center p-2.5">
      <div className="bg-white m-1 p-4 rounded-xl ">
        <ResponsiveNavbar />
        <Cart />
        <ResponsiveFooter />
      </div>
    </div>
  );
}
