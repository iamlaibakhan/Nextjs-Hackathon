import { GiSofa } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-col text-white">
      
      <div className="flex justify-between items-center px-12 sm:px-16 md:px-28 lg:px-40 bg-purple-950 text-slate-300 py-2 text-xs sm:text-sm">
        <div>
          <h1>✔ Free Shipping On All Orders $50+</h1>
        </div>
        <div>
          <ul className="flex gap-6">
            <li>Eng</li>
            <Link href={"./Faq"}>Faqs</Link>
            <li>Need Help</li>
          </ul>
        </div>
      </div>

    
      <div className="flex justify-between items-center px-12 sm:px-16 md:px-28 lg:px-40 bg-slate-50 text-black py-2 flex-wrap">
        <div className="flex items-center gap-4">
          <GiSofa className="text-emerald-500 h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
          <h1 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold">
            Comforty
          </h1>
        </div>
        <div>
          <ul className="flex items-center gap-6 text-xs sm:text-sm">
            <li>
           <Link href={"./Card"}>  <FaCartShopping className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500" /></Link> 
            </li>
            <li>Cart</li>
            <li>
              <span className="rounded-full text-white bg-emerald-600 px-2 py-1 text-xs">
                2
              </span>
            </li>
          </ul>
        </div>
      </div>

      
      <div className="flex flex-col md:flex-row justify-between items-center px-12 sm:px-16 md:px-28 lg:px-40 py-4 gap-3">
        <ul className="flex gap-6 text-xs sm:text-sm md:text-base text-black">
          <Link href={"http://localhost:3000/"}>Home    </Link>
          <Link href={"./Card"}>Shop    </Link>
          <Link href={"./ "}>Product </Link>
          <Link href={"./Productpage"}>Pages   </Link>
          <Link href={"./About"}>About   </Link>  
          <Link href={"./Contact"}>Contact  </Link>    
        </ul>
        <h1 className="text-xs sm:text-sm md:text-base text-black">
          Contact: (808) 555-0111
                  </h1>
      </div>
    </div>
  );
}