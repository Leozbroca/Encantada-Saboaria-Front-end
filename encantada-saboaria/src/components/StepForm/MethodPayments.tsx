export interface IMethod {
  id:string
  name: string;
  image: string;
  check:boolean
}

export const methodsCreditCartPayments: IMethod[] = [
  {
    id:"visa",
    name: "Visa",
    image: "https://www.mercadopago.com/org-img/MP3/API/logos/visa.gif",
    check:false
  },
  {
    id:"mastercard",
    name: "Mastercard",
    image: "https://www.mercadopago.com/org-img/MP3/API/logos/master.gif",
    check:false
  },
  {
    id:"hipercard",
    name: "Hipercard",
    image: "https://www.mercadopago.com/org-img/MP3/API/logos/hipercard.gif",
    check:false
  },
  {
    id:"amex",
    name: "American Express",
    image: "https://www.mercadopago.com/org-img/MP3/API/logos/amex.gif",
    check:false
  },
  {
    id:"elo",
    name: "Elo",
    image: "https://www.mercadopago.com/org-img/MP3/API/logos/elo.gif",
    check:false
  },
];

export const methodsPayments: IMethod[] = [
  {
    id:"pix",
    name: "Pix",
    image: "https://www.mercadopago.com/org-img/MP3/API/logos/pix.gif",
    check:false
  },
  // {
  //   id:"master",
  //   name: "Cartão de crédito",
  //   image: "https://www.mercadopago.com/org-img/MP3/API/logos/visa.gif",
  //   check:false
  // },
  // {
  //   id:"bolbradesco",
  //   name: "Boleto Bancário",
  //   image: "http://img.mlstatic.com/org-img/MP3/API/logos/bolbradesco.gif",
  //   check:false
  // },
];
