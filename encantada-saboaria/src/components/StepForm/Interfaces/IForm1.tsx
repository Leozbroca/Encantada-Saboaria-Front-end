export interface IForm1 {
  form: any;
  onChangeForm: (event: any) => void;
  setNumberCep: React.Dispatch<React.SetStateAction<string>>;
  numberCep: string;
  invalidCep: boolean;
  setCep: React.Dispatch<React.SetStateAction<string>>;
  cep: string;
}
