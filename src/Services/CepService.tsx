import axios from "axios";
import type {CepResponse} from '../Models/CepResponse';

const API_URL = "https://viacep.com.br/ws";


export class CepService {

    async BuscarCep(cep: string) : Promise<CepResponse>{

        const response = await axios.get<CepResponse>(`${API_URL}/${cep}/json`,
            {timeout: 10000}
        );

        if (response.data.erro) {
            throw new Error("O CEP informado não encontrado");
        }

        return response.data;
    }

}