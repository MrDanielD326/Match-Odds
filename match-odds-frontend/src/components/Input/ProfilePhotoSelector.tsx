import { useRef, useState, useEffect, FC, ChangeEvent } from 'react'
import { TrashIcon, UploadIcon, UserIcon } from '../Icons/icons'
import { iProfilePic } from '@/interfaces/interfaces';

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
    if (file) setImage(file);
  };

  return (
    <div className='flex justify-center mb-6 mt-10'>
      <input
        className='hidden'
        type='file'
        accept='image/*'
        ref={inputRef}
        onChange={handleImageChange}
      />
      <div className='relative w-20 h-20'>
        {previewUrl ? (
          <>
            <img className='w-full h-full rounded-full object-cover' src={previewUrl} alt='Profile pic' />
            <button
              type='button'
              className="w-8 h-8 flex items-center justify-center bg-white border border-[#900C3F] text-white rounded-full absolute -bottom-1 -right-1"
              onClick={() => setImage(null)}
            >
              <TrashIcon />
            </button>
          </>
        ) : (
          <>
            <div
              className='w-full h-full flex items-center justify-center bg-violet-200/70 rounded-full cursor-pointer'
              onClick={() => inputRef.current?.click()}
            >
              <UserIcon />
            </div>
            <button
              type='button'
              className="w-8 h-8 flex items-center justify-center bg-white border border-[#900C3F] text-white rounded-full absolute -bottom-1 -right-1"
              onClick={() => inputRef.current?.click()}
            >
              <UploadIcon />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfilePhotoSelector;
