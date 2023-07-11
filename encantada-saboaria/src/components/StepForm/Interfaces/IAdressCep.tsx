export interface IAdressCep {
  bairro: string | undefined;
  cep: string | undefined;
  complemento: string | undefined;
  localidade: string | undefined;
  logradouro: string | undefined;
  uf: string | undefined;
}

export interface IFullAdress extends IAdressCep {
  numero: number | undefined;
}
