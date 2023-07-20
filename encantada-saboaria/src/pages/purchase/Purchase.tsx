import ScrollTop from "../../components/ScrollTop/ScrollTop";
import StepForm from "../../components/StepForm/StepForm";
import { MainPurchase} from "./Styles";

const Purchase = () => {
  return (
    <MainPurchase>
      <StepForm />
      <ScrollTop />
    </MainPurchase>
  );
};

export default Purchase;
