import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../../components/ProductDetail/ProductDetailt";
import { Url } from "../../constants/Url";
import { MainProduct } from "./Styles";

export interface IProductDetail {
  _id: string | undefined;
  nome: string | undefined;
  foto: string | undefined;
  preco: number | undefined;
  descricao: string | undefined;
  ingredientes: string | undefined;
  quantidade: number | undefined;
  tamanho: string | undefined;
  categoria_id?: string | undefined;
  essencia_id?: string | undefined;
}

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
    ingredientes: "",
    quantidade: 0,
    tamanho: "",
    categoria_id: "",
    essencia_id: "",
  });

  useEffect(() => {
    const getProductDetail = async () => {
      try {
        const result = await axios.get(`${Url}/product/${id}`);
        console.log(result.data);
        setProductDetail({
          _id: result.data.productId._id,
          nome: result.data.productId.nome,
          foto: result.data.productId.foto,
          preco: result.data.productId.preco,
          descricao: result.data.productId.descricao,
          ingredientes: result.data.productId.ingredientes,
          quantidade: result.data.productId.quantidade,
          tamanho: result.data.productId.tamanho,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getProductDetail();
  }, [id]);

  return (
    <MainProduct>
      <ProductDetail productDetail={productDetail} />
    </MainProduct>
  );
};

export default Product;
