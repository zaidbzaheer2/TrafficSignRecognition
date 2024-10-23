"use client";
import {  BounceLoader} from "react-spinners";
import { useLoadingStore } from "@/store/LoadStore";
const Loading = () => {
    const { loading,output } = useLoadingStore();
    return (
        <div className="flex flex-col items-center gap-5">
            <BounceLoader color="#047857"  loading={loading}/>
            {loading && <p>Processing</p>}
            {!loading && <p>Upload an Image</p>}
            {!loading && output!='None' && <p>Processed</p>}
            
        </div>
    )
};

export default Loading;
