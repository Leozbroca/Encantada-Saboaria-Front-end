import CardCarrinhoHeader from "../../components/CardCarrinhoHeader/CardCarrinhoHeader";
import StepForm from "../../components/StepForm/StepForm";
import { useGlobal } from "../../Global/GlobalStateContext";
import { MainPurchase, ProductsPurchase, TotalCash } from "./Styles";

const Purchase = () => {
  const { total, totalCart } = useGlobal();
  const cartProducts =
    total &&
    total.map((product: any) => {
      return (
        <CardCarrinhoHeader
          key={product.id}
          id={product.id}
          nome={product.nome}
          descricao={product.descricao}
          foto={product.foto}
          preco={product.preco}
          quantidade={product.quantidade}
        />
      );
    });
  return (
    <MainPurchase>
      <StepForm />
      <ProductsPurchase>
        <TotalCash>
          Voce pagará no total{" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(totalCart)}
        </TotalCash>
        {cartProducts.length > 0 ? cartProducts : <p>Não há produtos</p>}
      </ProductsPurchase>
    </MainPurchase>
  );
};

export default Purchase;
