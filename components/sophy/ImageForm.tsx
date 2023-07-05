import React, { useState } from 'react';

const ImageForm = () => {
  const [imageSource, setImageSource]: any = useState(null);
  const handleUpload = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setImageSource(reader.result || null); // 파일의 컨텐츠
        console.log(reader.result);

        resolve();
      };
    });
  };
  return (
    <>
      <input accept="image/*" type="file" onChange={(e) => handleUpload(e)} />
      <img src={imageSource} />
    </>
  );
};

export default ImageForm;
