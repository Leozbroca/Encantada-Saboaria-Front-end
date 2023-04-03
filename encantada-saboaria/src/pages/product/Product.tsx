import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Gallery from "../../components/Carousel/Carousel";
import CarouselProductDetail from "../../components/Carouseul/CarouselProdctDetail";
import ProductDetail from "../../components/ProductDetail/ProductDetailt";

import { Url } from "../../constants/Url";
import { MainGallery, MainProduct } from "./Styles";
import { IProductDetail } from "./interface/IProductDetail";
import { Iingredients } from "./interface/IIngredients";

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

  const [ingredients, setIngredients] = useState<Iingredients[]>([
    { __v: 0, id: "", _id: "", nome: "" },
  ]);

  useEffect(() => {
    const getProductDetail = async () => {
      try {
        const result = await axios.get(`${Url}/product/${id}`);
        setProductDetail({
          _id: result.data.newProductId._id,
          nome: result.data.newProductId.nome,
          foto: result.data.newProductId.foto,
          preco: result.data.newProductId.preco,
          descricao: result.data.newProductId.descricao,
          quantidade: result.data.newProductId.quantidade,
          tamanho: result.data.newProductId.tamanho,
        });
        setProductRelativeDetail(result.data.productRelative);
        setIngredients(result.data.newProductId.ingredients);
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
