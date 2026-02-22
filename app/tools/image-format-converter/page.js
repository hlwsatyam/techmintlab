"use client"
import React, { useState } from "react";

function ImageConverter() {
  const [convertedUrl, setConvertedUrl] = useState(null);

  const handleConvert = (file, format) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        const convertedDataUrl = canvas.toDataURL(`image/${format}`, 0.9);
        setConvertedUrl(convertedDataUrl);
      };
    };

    reader.readAsDataURL(file);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Image Converter</h2>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleConvert(e.target.files[0], "jpeg")}
      />

      {convertedUrl && (
        <div>
          <a href={convertedUrl} download={`converted-image.jpg`}>
            Download Converted Image
          </a>
        </div>
      )}
    </div>
  );
}

export default ImageConverter;