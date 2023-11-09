'use client'

export default function Footer() {
    return (
        <>
            <div id="Footer" className="border-t mt-20 px-2">
                <div className="flex items-baseline justify-between w-full mx-auto max-w-[1200px] py-10">
                <ul className="text-gray-700">
                        <li className="font-bold text-lg">
                            <b>Popular Searches</b>  
                             </li>
                        <li className="mt-2 py-1 text-xs hover:underline cursor-pointer">Scientific Calculator</li>
                        <li className="py-1 text-xs hover:underline cursor-pointer">Books</li>
                        <li className="py-1 text-xs hover:underline cursor-pointer">Drafter</li>
                        <li className="py-1 text-xs hover:underline cursor-pointer">Mobiles</li>
                    </ul>
                  

             

                    <ul className="text-gray-700">
                        <li className="font-bold text-lg">
                            <b>About</b>
                             </li>
                        <li className="mt-2 py-1 text-xs hover:underline cursor-pointer">Company info</li>
                        <li className="py-1 text-xs hover:underline cursor-pointer">News</li>
                        <li className="py-1 text-xs hover:underline cursor-pointer">Investors</li>
                        <li className="py-1 text-xs hover:underline cursor-pointer">Developer</li>
                    </ul>

                    <ul className="text-gray-700">
                        <li className="font-bold text-lg"> <b>Contact us</b> </li>
                        <li className="mt-2 py-1 text-xs hover:underline cursor-pointer">
                            <a href="https://www.nitj.ac.in/">NITJ</a>
                        </li>
                        <li className="mt-2 py-1 text-xs hover:underline cursor-pointer">
                            <a href="https://www.instagram.com/sanghrakshit_/">Instagram</a>
                            
                        </li>
                        <li className="mt-2 py-1 text-xs hover:underline cursor-pointer">
                            <a href="https://www.youtube.com/@rummysandwich5365">Youtube</a>
                            
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
  