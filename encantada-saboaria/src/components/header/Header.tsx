import React from "react";
import {
  MainHeader,
  MenuButton,
  MenuLogo,
  MenuOptions,
  Option,
  MenuItens,
  MenuItem,
  MenuItemFlex,
} from "./Styles";
import logo2 from "../../assets/logo2.png";
import {
  HiOutlineMagnifyingGlass,
  HiOutlineUser,
  HiOutlineHeart,
  HiOutlineShoppingBag,
} from "react-icons/hi2";
import { IconContext } from "react-icons";

const Header = () => {
  return (
    <MainHeader>
      <MenuButton />
      <MenuLogo src={logo2} />
      <MenuOptions>
        <Option>
          <span />
          <p>Home</p>
        </Option>
        <Option>
          <span />
          <p>Shop</p>
        </Option>
        <Option>
          <span />
          <p>Featured</p>
        </Option>
        <Option>
          <span />
          <p>Pages</p>
        </Option>
        <Option>
          <span />
          <p>Blogs</p>
        </Option>
      </MenuOptions>
      <MenuItens>
        <IconContext.Provider
          value={{ className: "global-class-name", size: "2em" }}
        >
          <MenuItem>
            <HiOutlineMagnifyingGlass />
          </MenuItem>
        </IconContext.Provider>

        <IconContext.Provider
          value={{ className: "global-class-name", size: "2em" }}
        >
          <MenuItemFlex>
            <HiOutlineUser />
          </MenuItemFlex>
        </IconContext.Provider>

        <IconContext.Provider
          value={{ className: "global-class-name", size: "2em" }}
        >
          <MenuItemFlex>
            <HiOutlineHeart />
          </MenuItemFlex>
        </IconContext.Provider>

        <IconContext.Provider
          value={{ className: "global-class-name", size: "2em" }}
        >
          <MenuItem>
            <HiOutlineShoppingBag />
          </MenuItem>
        </IconContext.Provider>

        {/* <MenuItem><HiOutlineMagnifyingGlass/></MenuItem> */}
        {/* <MenuItem><HiOutlineUser/></MenuItem>
                <MenuItem><HiOutlineHeart/></MenuItem>
                <MenuItem><HiOutlineShoppingBag/></MenuItem> */}
      </MenuItens>
    </MainHeader>
  );
};

export default Header;
