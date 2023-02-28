import React, { useState } from "react";
import { IconContext } from "react-icons";
import { AiFillInstagram, AiFillPhone } from "react-icons/ai";
import { FaCcVisa, FaCcPaypal, FaCcMastercard } from "react-icons/fa";
import {
  MainFooter,
  MainCopyRight,
  OptionPaymentIcon,
  IconsPayment,
  Menu,
  IconContact
} from "./Styles";
const Footer = () => {
  const [NewColor, SetNewColor] = useState("black");
  return (
    <MainFooter>
      <Menu>
        <div>
          <h3>Soapin</h3>
          <h4>Saboaria encantada tudo para você.</h4>
          <IconContact>
            <IconContext.Provider
              value={{ className: "global-class-name", size: "3em" }}
            >
              <OptionPaymentIcon
                className="color-div"
                style={{ color: NewColor }}
              >
                <AiFillInstagram />
              </OptionPaymentIcon>
            </IconContext.Provider>
            <IconContext.Provider
              value={{ className: "global-class-name", size: "3em" }}
            >
              <OptionPaymentIcon
                className="color-div"
                style={{ color: NewColor }}
              >
                <AiFillPhone />
              </OptionPaymentIcon>
            </IconContext.Provider>
          </IconContact>
        </div>
        <div>
          <h3>Ajuda e Informações</h3>
          <p>Sobre nos</p>
          <p>Politica de privacidade</p>
          <p>Termos de condições</p>
        </div>
        <div>
          <h3>Busca rapida de Produtos</h3>
          <p>Paginação</p>
          <p>Contato</p>
        </div>
        <div>
          <h3>Categorias</h3>
          <p>Sabonetes</p>
          <p>Difusor de Aromas</p>
          <p>Água para lenços</p>
          <p>Velas aromáticas</p>
        </div>
      </Menu>
      <MainCopyRight>
        <p>
          © Copyright 2023 | Saboaria Encantada By Desenvolvedores Saboaria
          Encantada.
        </p>
        <IconsPayment>
          <IconContext.Provider
            value={{ className: "global-class-name", size: "3em" }}
          >
            <OptionPaymentIcon
              className="color-div"
              style={{ color: NewColor }}
            >
              <FaCcVisa />
            </OptionPaymentIcon>
          </IconContext.Provider>
          <IconContext.Provider
            value={{ className: "global-class-name", size: "3em" }}
          >
            <OptionPaymentIcon
              className="color-div"
              style={{ color: NewColor }}
            >
              <FaCcPaypal />
            </OptionPaymentIcon>
          </IconContext.Provider>
          <IconContext.Provider
            value={{ className: "global-class-name", size: "3em" }}
          >
            <OptionPaymentIcon
              className="color-div"
              style={{ color: NewColor }}
            >
              <FaCcMastercard />
            </OptionPaymentIcon>
          </IconContext.Provider>
        </IconsPayment>
      </MainCopyRight>
    </MainFooter>
  );
};

export default Footer;
