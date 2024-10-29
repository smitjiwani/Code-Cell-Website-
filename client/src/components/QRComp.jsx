"use client";;
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
 function QRComp() {
 
    return (
        <div>

       
        <div className="max-w-xs w-full group/card bg-[#010203] p-2 rounded-lg">
          <div
            className={cn(
              " cursor-pointer overflow-hidden  relative card h-96 rounded-lg shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
              "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover"
            )}
          >
            {/* <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div> */}
            <div className="flex flex-row items-center space-x-4 z-10">
             
            
            </div>
            
          </div>
          <div className="text content">
              <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
               QR Code
              </h1>
              <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                Get this QR Code scanned by any Code Cell Member to get access to the event.
              </p>
            </div>
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-s font-semibold leading-6 text-white inline-block" >
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
            <span>{`EDIT YOUR PROFILE `}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M10.75 8.75L14.25 12L10.75 15.25"
              ></path>
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        </button>
        </div>
        <div className="m-40 flex justify-center text-center">
     
    </div>
   
        </div>
      );
}
export default QRComp;