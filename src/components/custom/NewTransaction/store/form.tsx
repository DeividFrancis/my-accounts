"use client";

import React, { PropsWithChildren, createContext, useContext } from "react";
import { UseFormReturn, useForm } from "react-hook-form";

const NewTransactionFormContext = React.createContext({} as UseFormReturn);

export function NewTransactionFormProvider({ children }: PropsWithChildren) {
  const methods = useForm();
  return (
    <NewTransactionFormContext.Provider value={methods}>
      {children}
    </NewTransactionFormContext.Provider>
  );
}

export function useNewTransactionForm() {
  return useContext(NewTransactionFormContext);
}
