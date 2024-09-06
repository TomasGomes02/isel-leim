'use client'

import Navbar from "./components/navbar";
import Head from "./components/header";
import { useState } from "react";
import MAEPage from "./components/cadeiras/1/mae_page";
import MAVPage from "./components/cadeiras/1/mav_page";
import MDPPage from "./components/cadeiras/1/mdp_page";
import SAPage from "./components/cadeiras/1/sa_page";
import TIPage from "./components/cadeiras/1/ti_page";
import CFPage from "./components/cadeiras/2/cf_page";
import MCGPage from "./components/cadeiras/2/mcg_page";
import MOPPage from "./components/cadeiras/2/mop_page";
import PDSPage from "./components/cadeiras/2/pds_page";
import RPSPage from "./components/cadeiras/2/rps_page";
import EGPPage from "./components/cadeiras/3/egp_page";
import FSOPage from "./components/cadeiras/3/fso_page";
import CPSPage from "./components/cadeiras/3/cps_page";
import MSSNPage from "./components/cadeiras/3/mssn_page";
import PCMPage from "./components/cadeiras/3/pcm_page";
import AAVPage from "./components/cadeiras/4/aav_page";
import CSMPage from "./components/cadeiras/4/csm_page";
import IASAPage from "./components/cadeiras/4/iasa_page";
import IECDPage from "./components/cadeiras/4/iecd_page";
import RCPPage from "./components/cadeiras/4/rcp_page";
import AAPage from "./components/cadeiras/5/aa_page";
import IPMPage from "./components/cadeiras/5/ipm_page";
import PIVPage from "./components/cadeiras/5/piv_page";
import RIPage from "./components/cadeiras/5/ri_page";
import SBDPage from "./components/cadeiras/5/sbd_page";
import DAMPage from "./components/cadeiras/6/dam_page";
import IAVPage from "./components/cadeiras/6/iav_page";
import ProjetoPage from "./components/cadeiras/6/projeto_page";
import SMIPage from "./components/cadeiras/6/smi_page";
import HomePage from "./components/home_page";

export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState<string | null>('Home');

  const renderComponent = () => {
    console.log(selectedComponent);
    switch (selectedComponent) {
      // 1º Semestre
      case 'MAE':
        return <MAEPage />;
      case 'MDP':
        return <MDPPage />;
      case 'SA':
        return <SAPage />;
      case 'MAV':
        return <MAVPage />;
      case 'TI':
        return <TIPage />;

      // 2º Semestre
      case 'MCG':
        return <MCGPage />;
      case 'RPS':
        return <RPSPage />;
      case 'PDS':
        return <PDSPage />;
      case 'CF':
        return <CFPage />;
      case 'MOP':
        return <MOPPage />;

      // 3º Semestre
      case 'CPS':
        return <CPSPage />;
      case 'FSO':
        return <FSOPage />;
      case 'PCM':
        return <PCMPage />;
      case 'MSSN':
        return <MSSNPage />;
      case 'EGP':
        return <EGPPage />;

      // 4º Semestre
      case 'RCP':
        return <RCPPage />;
      case 'CSM':
        return <CSMPage />;
      case 'IASA':
        return <IASAPage />;
      case 'IECD':
        return <IECDPage />;
      case 'AAV':
        return <AAVPage />;

      // 5º Semestre
      case 'PIV':
        return <PIVPage />;
      case 'RI':
        return <RIPage />;
      case 'SBD':
        return <SBDPage />;
      case 'AA':
        return <AAPage />;
      case 'IPM':
        return <IPMPage />;

      // 6º Semestre
      case 'SMI':
        return <SMIPage />;
      case 'DAM':
        return <DAMPage />;
      case 'IAV':
        return <IAVPage />;
      case 'Projeto':
        return <ProjetoPage />;

      case 'Home':
        return <HomePage content={"This is a test"} />;

      default:
        return <p>Select an option to view the component</p>;
    }
  };
  return (
    <>
      <Head title="ISEL LEIM 2020/2024" icon_path="icon.png"/>
      <Navbar setSelectedComponent={setSelectedComponent}/>
      <main className="flex bg-white min-h-screen flex-col items-center justify-between mt-4">
        {renderComponent()}
    </main>
    </>
  );
}
