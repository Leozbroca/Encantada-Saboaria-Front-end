import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FaCcVisa, FaCcPaypal, FaCcMastercard } from "react-icons/fa";
import { MainFooter, MainCopyRight, OptionPaymentIcon , IconsPayment ,Menu} from "./Styles";
const Footer = () => {
  const [NewColor, SetNewColor] = useState("black");
  return (
    <MainFooter>
      <Menu>

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
