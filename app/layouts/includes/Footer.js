'use client'

export default function Footer() {
    return (
        <>
            <div id="Footer" className="border-t mt-20 px-2">
                <div className="flex items-baseline justify-between w-full mx-auto max-w-[1200px] py-10">
                <ul className="text-gray-700">
                        <li className="font-bold text-lg">
                            <b><i>Popular Searches</i></b>  
                             </li>
                        <li className="mt-2 py-1 text-xs hover:underline cursor-pointer"> <i>Scientific Calculator</i> </li>
                        <li className="py-1 text-xs hover:underline cursor-pointer"> <i>Books</i> </li>
                        <li className="py-1 text-xs hover:underline cursor-pointer"> <i>Drafter</i> </li>
                        <li className="py-1 text-xs hover:underline cursor-pointer">  <i> Condom</i></li>
                    </ul>
                  

             

                    <ul className="text-gray-700">
                        <li className="font-bold text-lg">
                            <b><i>About</i></b>
                             </li>
                        <li className="mt-2 py-1 text-xs hover:underline cursor-pointer"> <i>Company info </i> </li>
                        <li className="py-1 text-xs hover:underline cursor-pointer"><i>News </i></li>
                        <li className="py-1 text-xs hover:underline cursor-pointer"><i>Investors </i></li>
                        <li className="py-1 text-xs hover:underline cursor-pointer"><i> Developer </i></li>
                    </ul>

                    <ul className="text-gray-700">
                        <li className="font-bold text-lg"> <b><i>Contact us</i></b> </li>
                        <li className="mt-2 py-1 text-xs hover:underline cursor-pointer">
                            <a href="https://www.nitj.ac.in/"><i>nitj</i></a>
                        </li>
                        <li className="mt-2 py-1 text-xs hover:underline cursor-pointer">
                            <a href="https://www.instagram.com/sanghrakshit_/"><i>Instagram</i></a>
                            
                        </li>
                        <li className="mt-2 py-1 text-xs hover:underline cursor-pointer">
                            <a href="https://www.youtube.com/@rummysandwich5365"><i>Youtube</i></a>
                            
                        </li>
                    </ul>

                    <ul className="text-gray-700">
                        <li className="font-bold text-lg">Sell</li>
                        <li className="mt-2 py-1 text-xs hover:underline cursor-pointer">Start selling</li>
                        <li className="py-1 text-xs hover:underline cursor-pointer">Learn to sell</li>
                        <li className="py-1 text-xs hover:underline cursor-pointer">Affiliates</li>
                    </ul>

                </div>
            </div>
        </>
    )
  }
  