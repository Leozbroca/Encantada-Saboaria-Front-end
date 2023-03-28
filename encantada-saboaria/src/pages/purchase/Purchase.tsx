import StepForm from "../../components/StepForm/StepForm";
import { MainPurchase , ProductsPurchase } from "./Styles";

const Purchase = () => {
  return (
    <MainPurchase>
      <StepForm/>
      <ProductsPurchase>
        <p>Produtos</p>
      </ProductsPurchase>
    </MainPurchase>
  );
};

export default Purchase;
