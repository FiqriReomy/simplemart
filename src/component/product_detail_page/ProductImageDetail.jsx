import { useEffect, useState } from "react";
import ProductImageElement from "./element/ProductImageElement";

const ProductImageDetail = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.thumbnail);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleClick = (image, index) => {
    setSelectedImage(image);
    setSelectedImageIndex(index);
  };

  useEffect(() => {
    setSelectedImage(product.thumbnail);
    setSelectedImageIndex(null);
  }, [product]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = product.images.indexOf(selectedImage);
      const nextIndex = currentIndex === product.images.length - 1 ? 0 : currentIndex + 1;
      setSelectedImage(product.images[nextIndex]);
      setSelectedImageIndex(nextIndex);
      setImageLoaded(false);
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedImage, product]);

  return (
    <div className="flex flex-col justify-center items-center py-5">
      <div className="h-[360px] border flex items-center justify-center overflow-hidden">
        <img className={`w-full object-cover ${!imageLoaded ? "opacity-0 transition-opacity duration-300" : "opacity-100"}`} src={selectedImage} alt="product_detail" onLoad={() => setImageLoaded(true)} />
      </div>
      <ProductImageElement product={product} selectedImageIndex={selectedImageIndex} handleClick={handleClick} />
    </div>
  );
};

export default ProductImageDetail;
