import Address from '@models/Address';

export default interface Person extends Address {
  name: string;
  cpf: string;
  rg: string;
  birthDate: string;
  email: string;
}
