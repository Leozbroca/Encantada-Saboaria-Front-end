import {
  AllQuestions,
  FrequentyQuestions,
  MainFaq,
  PhotoBackgroundFaq,
  Questions,
} from "./Styles";

import CardFaq from "../../components/CardComponents/CardFaq/cardFaq";
import { questions } from "./FaqQuestions";
import ScrollTop from "../../components/ScrollTop/ScrollTop";

const Faq = () => {
  return (
    <MainFaq>
      <PhotoBackgroundFaq>
        <h1>FAQs</h1>
        <p>Home {">"} FAQs</p>
      </PhotoBackgroundFaq>
      <Questions>
        <FrequentyQuestions>
          <h2>#Perguntas Frequentes</h2>
          <p>
            Bem-vindo ao nosso FAQ sobre Produtos Artesanais! Aqui, reunimos as
            respostas para algumas das perguntas mais frequentes sobre essas
            belas criações feitas com habilidade e amor à arte. Se você está
            curioso para saber mais sobre o mundo dos produtos artesanais, suas
            vantagens, como encontrá-los e como eles podem ser personalizados,
            você veio ao lugar certo.
          </p>
        </FrequentyQuestions>
        <AllQuestions>
          {questions.map((question) => {
            return <CardFaq key={question.answer} {...question} />;
          })}
        </AllQuestions>
      </Questions>
      <ScrollTop />
    </MainFaq>
  );
};

export default Faq;
