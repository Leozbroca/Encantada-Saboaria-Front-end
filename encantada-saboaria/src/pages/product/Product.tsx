import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Gallery from "../../components/Carousel/Carousel";
import CarouselProductDetail from "../../components/Carouseul/CarouselProdctDetail";
import ProductDetail from "../../components/ProductDetail/ProductDetailt";

import { Url } from "../../constants/Url";
import { MainGallery, MainProduct } from "./Styles";
import IProductDetail from "../../interface/IProductDetail";
import IIngredients from "../../interface/IIngredients";

const Product = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState<
    IProductDetail | undefined
  >({
    _id: "",
    nome: "",
    foto: "",
    preco: 0,
    descricao: "",
    quantidade: 0,
    tamanho: "",
    categoria_id: "",
    essencia_id: "",
  });

  const [productRelativeDetail, setProductRelativeDetail] = useState<
    IProductDetail[]
  >([
    {
      _id: "",
      nome: "",
      foto: "",
      preco: 0,
      descricao: "",
      quantidade: 0,
      tamanho: "",
      categoria_id: "",
      essencia_id: "",
    },
  ]);

  const [ingredients, setIngredients] = useState<IIngredients[]>([
    { __v: 0, id: "", _id: "", nome: "" },
  ]);

  useEffect(() => {
    const getProductDetail = async () => {
      try {
        const result = await axios.get(`${Url}/product/${id}`);

        setProductDetail({
          _id: result.data.product._id,
          nome: result.data.product.nome,
          foto: result.data.product.foto,
          preco: result.data.product.preco,
          descricao: result.data.product.descricao,
          quantidade: result.data.product.quantidade,
          tamanho: result.data.product.tamanho,
        });
        setProductRelativeDetail(result.data.productRelative);
        setIngredients(result.data.productIngredients);
      } catch (error) {
        console.log(error);
      }
    };
    getProductDetail();
  }, [id]);

  return (
    <MainProduct>
      <ProductDetail productDetail={productDetail} ingredients={ingredients} />
      <MainGallery>
        <p>Produtos Relativos</p>
        <CarouselProductDetail productRelativeDetail={productRelativeDetail} />
      </MainGallery>
    </MainProduct>
  );
};

export default Product;
