import { Request, Response } from 'express';
import Leite from 'leite';

import Person from '@models/Person';

class PersonController {
  async index(request: Request, response: Response) {
    const generator = new Leite();

    const person: Person = {
      name: generator.pessoa.nome(),

      birthDate: generator.pessoa.nascimento({
        idade: generator.pessoa.idade({ min: 1, max: 120 }),
        formato: 'DD/MM/YYYY',
        string: true,
      }),

      cpf: generator.pessoa.cpf({ formatado: true }),

      rg: generator.pessoa.rg({ formatado: true }),

      email: generator.pessoa.email(),

      zipCode: generator.localizacao.cep({ formatado: true }),

      street: generator.localizacao.logradouro(),

      neightborhood: generator.localizacao.bairro(),

      city: generator.localizacao.cidade(),

      state: generator.localizacao.estado(),
    }

    return response.json(person);
  }
}

export default new PersonController();
