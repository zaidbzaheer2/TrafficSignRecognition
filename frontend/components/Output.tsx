"use client";
import { useState } from "react";
import Image from "next/image";
import { useLoadingStore } from "@/store/LoadStore";

const Output = () => {
    const {output:text} = useLoadingStore();
    return (
        <div className="border relative border-neutral-900 rounded-lg bg-zinc-800 w-full h-full max-w-[250px] max-h-[80px]">
            <p className="w-full absolute top-0 px-2 font-semibold py-2 bg-[#047857] left-0 rounded-t-lg">Output</p>
            <p className="absolute top-12 left-2 truncate text-ellipsis w-[90%]">{text}</p>
        </div>
    );
};

export default Output;
