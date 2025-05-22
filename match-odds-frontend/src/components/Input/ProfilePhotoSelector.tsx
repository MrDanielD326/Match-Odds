import { iProfilePic } from "@/interfaces/interfaces";
import { Tooltip } from "@heroui/react";
import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { TrashIcon, UploadIcon, UserIcon } from "../Icons/icons";

const ProfilePhotoSelector: FC<iProfilePic> = ({ image, setImage }) => {
   const [previewUrl, setPreviewUrl] = useState<string | null>(null);
   const inputRef = useRef<HTMLInputElement | null>(null);

   useEffect(() => {
      if (!image) return setPreviewUrl(null);
      const preview = URL.createObjectURL(image);
      setPreviewUrl(preview);
      return () => URL.revokeObjectURL(preview);
   }, [image]);

   const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      file && setImage(file);
   };

   const handleRemove = () => setImage(null);
   const handleUpload = () => inputRef.current?.click();

   return (
      <div className='flex justify-center mb-6 mt-4'>
         <input className='hidden' type='file' accept='image/*' ref={inputRef} onChange={handleImageChange} />
         <div className='relative w-20 h-20'>
            {previewUrl ? (
               <>
                  <img className='w-full h-full rounded-full object-cover' src={previewUrl} alt='Profile pic' />
                  <Tooltip showArrow placement="right" color="secondary" content="Remove">
                     <button
                        type='button'
                        className="w-8 h-8 flex items-center justify-center bg-white border border-[#900C3F] text-white rounded-full absolute -bottom-1 -right-1"
                        onClick={handleRemove}
                     >
                        <TrashIcon />
                     </button>
                  </Tooltip>
               </>
            ) : (
               <>
                  <div className='w-full h-full flex items-center justify-center bg-violet-200/70 rounded-full cursor-pointer' onClick={handleUpload}>
                     <UserIcon />
                  </div>
                  <Tooltip showArrow placement="right" color="secondary" content="Upload">
                     <button
                        type='button'
                        className="w-8 h-8 flex items-center justify-center bg-white border border-[#900C3F] text-white rounded-full absolute -bottom-1 -right-1"
                        onClick={handleUpload}
                     >
                        <UploadIcon />
                     </button>
                  </Tooltip>
               </>
            )}
         </div>
      </div>
   );
};

export default ProfilePhotoSelector;
