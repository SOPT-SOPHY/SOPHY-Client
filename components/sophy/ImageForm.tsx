import React, { useState } from 'react';
import Image from 'next/image';
const ImageForm = () => {
  const [imageSource, setImageSource]: any = useState(null);
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (!e.target.files) return;

    const uploadFile = e.target.files[0];
    const formData = new FormData();
    formData.append('files', uploadFile);
    console.log(formData);

    // 서버 axios로 전달
    //   await axios({
    //     method: 'post',
    //     url: '/api/files/images',
    //     data: formData,
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   });

    const reader = new FileReader();
    reader.readAsDataURL(uploadFile);

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setImageSource(reader.result || null); // 파일의 컨텐츠

        resolve();
      };
    });
  };
  return (
    <>
      <input accept="image/*" type="file" onChange={(e) => handleUpload(e)} />
      {imageSource && (
        <Image src={imageSource} alt="업로드 이미지" height={200} width={200} />
      )}
    </>
  );
};

export default ImageForm;
