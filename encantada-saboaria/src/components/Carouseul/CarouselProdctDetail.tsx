import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MainProductDetailCarousel } from "./Styles";
import CardProduto from "../CardProduct/CardProduto";
import { IProductDetail } from "../../pages/product/interface/IProductDetail";

const responsive = {
  400: { items: 1 },
  500: { items: 2 },
  600: { items: 3 },
  1200: { items: 4 },
  1400: { items: 5 },
};

interface ICarouselProduct {
  productRelativeDetail: IProductDetail[];
}

const CarouselProductDetail = ({ productRelativeDetail }: ICarouselProduct) => {

  const items = productRelativeDetail.map(
    (product: IProductDetail, index: number) => {
        return (
            <CardProduto
              key={product._id}
              descricao={product.descricao}
              id={product._id}
              nome={product.nome}
              foto={product.foto}
              preco={product.preco}
            />
          );
    }
  );

  return (
    <MainProductDetailCarousel>
      <AliceCarousel
        mouseTracking
        items={items}
        infinite={true}
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlay={true}
        autoPlayInterval={8000}
        keyboardNavigation={true}
        disableButtonsControls={true}
      />
    </MainProductDetailCarousel>
  );
};
export default CarouselProductDetail;
