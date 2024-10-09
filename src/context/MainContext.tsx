import { createContext, useContext, useState } from "react";
import { Paciente } from "../model/Paciente";
import useBoolean, { useBooleanType } from "../hooks/useBoolean";
import { ParkinsonResult } from "../model/ParkinsonResult";

const MainContext = createContext<MainContextProvider | null>(null);

type MainContextProvider = {
  paciente: Paciente | null;
  loading: useBooleanType;
  parkinsonResult: ParkinsonResult | null;
  changePaciente: (paciente: Paciente) => void;
  changeParkinsonResult: (result: ParkinsonResult) => void;
};

type Props = {
  children: React.ReactNode;
};

export function MainContextProvider({ children }: Props) {
  const [paciente, setPaciente] = useState<Paciente | null>(null);
  const loading = useBoolean(false);
  const [parkinsonResult, setParkinsonResult] =
    useState<ParkinsonResult | null>(null);

  const changePaciente = (value: null | Paciente) => {
    setPaciente(value);
  };

  const changeParkinsonResult = (result: ParkinsonResult | null) => {
    setParkinsonResult(result);
  };

  return (
    <MainContext.Provider
      value={{
        paciente,
        loading,
        parkinsonResult,
        changePaciente,
        changeParkinsonResult,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export function useMainContext() {
  const context = useContext(MainContext);
  if (!context) throw new Error("Contexto requerido");
  return context;
}