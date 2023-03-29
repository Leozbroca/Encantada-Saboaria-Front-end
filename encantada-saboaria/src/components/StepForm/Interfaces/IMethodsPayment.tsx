interface tipageKey {
    [key: string]:  boolean
}
export interface IMethodPayment extends tipageKey{
  Pix: boolean;
  cartao: boolean;
  Mastercard: boolean;
  Boleto: boolean;
  Visa: boolean;
}

export interface IAllMethodPayment{
    id:string
    name:string
    payment_type_id:string
    secure_thumbnail:string
}