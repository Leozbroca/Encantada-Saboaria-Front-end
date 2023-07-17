import ICartPurchase from "./ICartPurchase";

export interface IModalCart {
  isOpen: boolean;
  onclose: () => void;
  product: ICartPurchase;
}
