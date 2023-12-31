'use client';

import Link from "next/link";

function convertGoogleDriveLink(originalUrl) {
  const match = originalUrl.match(/\/file\/d\/([^/]+)/);
  if (match) {
    const fileId = match[1];
    return `https://drive.google.com/uc?id=${fileId}`;
  } else {
    return originalUrl;
  }
}

export default function Product({ product }) {
  const convertedUrl = product?.url ? convertGoogleDriveLink(product.url) : null;
    
  return ( 
    <>
      <Link 
        href={`/product/${product?.id}`} 
        className='max-w-[200px] mt-5 p-1.5 border border-gray-50 hover:border-gray-200 hover:shadow-xl bg-gray-100 rounded mx-auto'
      >
        {convertedUrl && (
        <img
          className="rounded cursor-pointer w-[200px] h-[200px]"
          src={convertedUrl}
        />
      )}
        
        <div className="pt-2 px-1">
          <div className="font-semibold text-[15px] hover:underline cursor-pointer">{product?.title}</div>
          <div className="font-extrabold">₹{(product?.price / 100).toFixed(2)}</div>

          <div className="relative flex items-center text-[12px] text-gray-500">

          </div>
        </div>
      </Link>
      
    </>
  );
}
