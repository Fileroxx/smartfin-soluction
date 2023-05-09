import axios from 'axios';
import { useEffect, useState } from 'react'
import { CardMenu } from "../components/Dashboard/CardMenu";
import { Header } from "../components/Header";
import Fii from "../components/RendaVariavel/Fii";
import Modal from '../components/Modal';

export type FiiData = {
  id: number;
  C_digodo_fundo: string;
  Setor: string;
  Preco_Atual: number;
  Liquidez_Diaria: number;
  Dividendo: number;
  DividendYield: number;
  DY_3M_Acumulado: number;
  DY_6M_Acumulado: number;
  DY_12M_Acumulado: number;
  DY_3M_M_dia: number;
  DY_6M_M_dia: number;
  DY_12M_M_dia: number;
  DY_Ano: number;
  variacao_preco: number;
  Rentab_Periodo: number;
  Rentab_Acumulada: number;
  PatrimonioLiq: number;
  VPA: number;
  P_VPA: number;
  DYPatrimonial: number;
  VariacaoPatrimonial: number;
  Rentab_Patrimonio_Periodo: number;
  Rentab_Patr_Acumulada: number;
  VacanciaFisica: number;
  VacanciaFinanceira: number;
  QuantidadeAtivos: number;
  slug: string;
};

export default function RendaVariavel() {

  
  const [fiiData, setFiiData] = useState<FiiData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://x8ki-letl-twmt.n7.xano.io/api:R98tRgF0:v1/dados_fiis"
        );
        console.log(response.data)
        setFiiData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);





  return (
    <div className="h-[150vh] bg-[#13141B]">
      <Header />

      <div className="m-16 rounded p-16 bg-[#201F25]">

        <div className="flex justify-between">

        <div>
          <h1 className="text-white text-3xl font-bold mb-3">Renda Variável</h1>  
        </div>


        </div>





        <div className="row">

          <div className="col-lg-3">
            <CardMenu />
          </div>

          <div className="col-lg-9">
            <Fii fiiData={fiiData}/>
          </div>



        </div>



      </div>
    </div>



  );
}