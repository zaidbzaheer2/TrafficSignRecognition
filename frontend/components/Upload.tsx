"use client";
import { FormEvent, useState } from "react";
import Image from "next/image";
import { useLoadingStore } from "@/store/LoadStore";
import axios from 'axios';
const Upload = () => {
    const {setLoading,setOutput} = useLoadingStore();
    const [image, setImage] = useState<File>();
    
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file); 
            
        }
    };
    const sendImageToBackend = async (file:File) =>{
        const formData = new FormData();
        formData.append('image', file);
      
        try {
          const response = await axios.post('http://localhost:5000/get-output', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          setOutput(response.data['prediction'])
          setLoading(false);
        } catch (error) {
            setOutput('None')
            setLoading(false);
          console.error('Error sending the image', error);
        }
    }
    const handleFormSubmit = (e:FormEvent)=>{
        e.preventDefault();
        if(image){
            setLoading(true);
            sendImageToBackend(image);
        }
    }
    return (
        <form onSubmit={handleFormSubmit}  className="border border-neutral-900 rounded-lg bg-zinc-800 w-full h-full max-w-[200px] max-h-[250px]">
            <label htmlFor="file_input" className="cursor-pointer w-full h-full relative flex flex-col items-center justify-around max-h-[85%]">
                <Image
                    alt="img"
                    src={image ? URL.createObjectURL(image) : "/upload.png"} // Use preview URL if image exists
                    width={150}
                    height={150}
                    className=""
                />

            </label>
            <input type="file" id="file_input" onChange={handleImageChange} hidden />
            <button type="submit" className="w-full rounded-b-lg bg-[#047857] hover:bg-[#229373] transition-colors dration-300 h-[15%] text-center">Recognize</button>
        </form>
    );
};

export default Upload;
