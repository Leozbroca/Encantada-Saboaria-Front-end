import { goTo } from "../../../routes/Coordinator";

export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
  hamburguerOpen?:any
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "",
  },
  {
    label: "Produtos",
    href: "produtos",
  },
  {
    label: "Carrinho",
    href: "carrinho",
  },
  {
    label: "Sobre",
    href: "sobre",
  },
  {
    label: "Contato",
    href: "contato",
  },
  {
    label: "FAQs",
    href: "faq",
  },
];
