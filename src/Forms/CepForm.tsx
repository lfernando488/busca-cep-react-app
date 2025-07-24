import { useState } from "react";
import { CepService } from "../Services/CepService";
import { toast } from "react-toastify";
import type { CepResponse } from "../Models/CepResponse";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export function CepForm(){

    const [cep, setCep] = useState("");
    const [logradouro, setLogradouro] = useState<CepResponse>();
    const cepService = new CepService();

    const pesquisaCep = async () =>{

        try {
            const resp = await cepService.BuscarCep(cep);
            setLogradouro(resp);
            toast.success(`Informações para o CEP ${cep} encontradas! `, { position: 'bottom-center',});
        } catch (error: any) {
            toast.error(` Erro ao buscar informações para o CEP ${cep} ` +  error.message, { position: 'bottom-center',});
        }
  
    }
            return (
            <div style={{ maxWidth: 400, margin: 20 }}>
                <TextField 
                    label="Digite o CEP" variant="standard"
                    value={cep} onChange={(e) => setCep(e.target.value)}
                    style={{ width: "100%", marginBottom: 8 }}
            />
            
            <Button variant="contained" color="success" onClick={pesquisaCep}>Buscar</Button>

                {logradouro?.logradouro && (
                    <div style={{ marginTop: 16 }}>
                        <p><strong>Rua:</strong> {logradouro!.logradouro}</p>
                        <p><strong>Bairro:</strong> {logradouro!.bairro}</p>
                        <p><strong>Cidade:</strong> {logradouro!.localidade} - {logradouro!.uf}</p>
                        <p><strong>Estado:</strong> {logradouro!.uf}</p>
                        <p><strong>Região:</strong> {logradouro!.regiao}</p>
                        <p><strong>Código de área:</strong> {logradouro!.ddd}</p>
                    </div>
                )}
            </div>
         );
    }   
