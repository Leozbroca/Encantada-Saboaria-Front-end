import { ImageDetail, ImagemProduct, Price, Star } from "./Styles";
import { useGlobal } from "../../../Global/GlobalStateContext";
import ICartPurchase from "../../../interface/ICartPurchase";
import IProductDetail from "../../../interface/IProductDetail";
import IIngredients from "../../../interface/IIngredients";
import { ChangeEvent, useEffect, useState } from "react";
import "./productDetail.css";
import { formatPrice } from "../../../utils/formatPrice";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import ModalCart from "../../ModalComponents/modalCart/modalCart";
import { useDisclosure } from "@chakra-ui/react";

interface IProdcutDetail {
  productDetail: IProductDetail | undefined;
  ingredients: IIngredients[];
}

export default function ProductDetail({
  productDetail,
  ingredients,
}: IProdcutDetail) {
  const { total, setTotal, addTo } = useGlobal();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imageCount, setImageCount] = useState(0);
  const breakpoint = 600;

  const [imageStyle, setImageStyle] = useState({
    backgroundImage: "",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  });

  const objetoCart: ICartPurchase = {
    id: productDetail?._id,
    total: Number(productDetail?.preco),
    nome: productDetail?.nome,
    descricao: productDetail?.descricao,
    foto: productDetail?.foto,
    preco: productDetail?.preco,
    quantidade: productDetail?.quantidade,
  };

  const allImages = [
    `${productDetail?.foto}`,
    `${productDetail?.foto}`,
    `https://i.pinimg.com/originals/74/45/6c/74456c2bd47666329b9dee5dcad4ece7.png`,
    `${productDetail?.foto}`,
  ];

  useEffect(() => {
    setImageStyle((prevStyle) => ({
      ...prevStyle,
      backgroundImage: `url(${productDetail?.foto})`,
    }));
    function handleWindowSize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleWindowSize);

    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, [productDetail?.foto]);

  function replaceBackground(e: any) {
    const selectedImageIndex = e.target.getAttribute("data-index");
    setImageStyle((prevStyle) => ({
      ...prevStyle,
      backgroundImage: `url(${allImages[selectedImageIndex]})`,
    }));

    const selectedImage = document.querySelector(".image--selected");
    if (selectedImage) selectedImage.classList.remove("image--selected");
    e.target.classList.add("image--selected");
  }

  function handleImageHover(e: any) {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setImageStyle((prevStyle) => ({
      ...prevStyle,
      backgroundSize: "auto",
      backgroundPosition: `${x}% ${y}%`,
    }));
  }

  function handleMouseLeave(e: any) {
    setImageStyle((prevStyle) => ({
      ...prevStyle,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }));
  }

  const imagesForSlides = allImages.map((image, index) => {
    return (
      <button key={index}>
        <img
          onClick={(e) => replaceBackground(e)}
          data-index={index}
          className={index == imageCount ? "image--selected" : ""}
          src={`${image}`}
        />
      </button>
    );
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <main className="main">
      <ModalCart isOpen={isOpen} onclose={onClose} product={objetoCart} />
      <div className="image-section">
        <div
          className="product-image flex"
          style={imageStyle}
          onMouseMove={(e) =>
            windowWidth > breakpoint ? handleImageHover(e) : () => false
          }
          onMouseOut={(e) =>
            windowWidth > breakpoint ? handleMouseLeave(e) : () => false
          }
        >
          <BsFillArrowLeftCircleFill
            size={40}
            style={{
              margin: "10px",
            }}
            onClick={() => {
              setImageCount((prevCount) => {
                if (prevCount == 0) return allImages.length - 1;
                else return (prevCount - 1) % allImages.length;
              });
              setImageStyle((prevStyle) => ({
                ...prevStyle,
                backgroundImage: `url(${allImages[imageCount]})`,
              }));
            }}
          />

          <BsFillArrowRightCircleFill
            size={40}
            style={{
              margin: "10px",
            }}
            onClick={() => {
              setImageCount((prevCount) => (prevCount + 1) % allImages.length);
              setImageStyle((prevStyle) => ({
                ...prevStyle,
                backgroundImage: `url(${allImages[imageCount]})`,
              }));
            }}
          />
        </div>
        {windowWidth > breakpoint && (
          <div className="product-image--slide">{imagesForSlides}</div>
        )}
      </div>
      <div className="product-info">
        <div>
          <h1>{productDetail?.nome}</h1>
          <p>{productDetail?.descricao}</p>
        </div>

        <div className="product-price">
          <span className="product-price--rate">
            {formatPrice(Number(productDetail?.preco))}
          </span>
        </div>
        <div className="product-cart">
          <Price>
            <div>
              <button
                className="product-cart--button"
                onClick={() => {
                  addTo(total, objetoCart, setTotal, "products");
                  onOpen();
                }}
              >
                Add to Cart
              </button>
            </div>
          </Price>
        </div>
      </div>
    </main>
  );
}
