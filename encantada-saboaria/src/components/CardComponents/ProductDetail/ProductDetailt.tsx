import {
  ImageSection,
  MainProductDetail,
  Price,
  ProductCartButton,
  ProductImage,
  ProductInfo,
  ProductPrice,
} from "./Styles";
import { useGlobal } from "../../../Global/GlobalStateContext";
import ICartPurchase from "../../../interface/ICartPurchase";
import IProductDetail from "../../../interface/IProductDetail";
import IIngredients from "../../../interface/IIngredients";
import { useEffect, useState } from "react";
import { formatPrice } from "../../../utils/formatPrice";
import "./productDetail.css";

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
    <MainProductDetail>
      <ModalCart isOpen={isOpen} onclose={onClose} product={objetoCart} />
      <ImageSection>
        <ProductImage
          style={imageStyle}
          onMouseMove={(e) =>
            windowWidth > breakpoint ? handleImageHover(e) : () => false
          }
          onMouseOut={(e) =>
            windowWidth > breakpoint ? handleMouseLeave(e) : () => false
          }
        >
          <BsFillArrowLeftCircleFill
            size={20}
            style={{
              margin: "10px",
              cursor: "pointer",
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
            size={20}
            style={{
              margin: "10px",
              cursor: "pointer",
            }}
            onClick={() => {
              setImageCount((prevCount) => (prevCount + 1) % allImages.length);
              setImageStyle((prevStyle) => ({
                ...prevStyle,
                backgroundImage: `url(${allImages[imageCount]})`,
              }));
            }}
          />
        </ProductImage>
        {windowWidth > breakpoint && (
          <div className="product-image--slide">{imagesForSlides}</div>
        )}
      </ImageSection>
      <ProductInfo>
        <div>
          <h1>{productDetail?.nome}</h1>
          <p>{productDetail?.descricao}</p>
        </div>

        <ProductPrice>{formatPrice(Number(productDetail?.preco))}</ProductPrice>
        <Price>
          <ProductCartButton
            onClick={() => {
              addTo(total, objetoCart, setTotal, "products");
              onOpen();
            }}
          >
            Adicionar no Carrinho
          </ProductCartButton>
        </Price>
      </ProductInfo>
    </MainProductDetail>
  );
}
