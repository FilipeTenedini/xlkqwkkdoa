import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createContext, PropsWithChildren, useContext, useRef } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { FormValues } from "./types";

interface FormType {
  form: UseFormReturn<FormValues, unknown, undefined>;
  formContainerRef: React.RefObject<HTMLDivElement>; // Adiciona a ref aqui
}

const defaultValues: FormType = {
  form: {} as UseFormReturn<FormValues, unknown, undefined>,
  formContainerRef: { current: null } as React.RefObject<HTMLDivElement>, // Define o valor padrão da ref
};

const schema = yup
  .object({
    firstName: yup.string().required("Seu primeiro nome é obrigatório"),
    email: yup
      .string()
      .email("Email inválido")
      .required("Seu melhor e-mail é obrigatório"),
  })
  .required();

const FormContext = createContext<FormType>(defaultValues);

export const useFormContext = () => useContext(FormContext);

const FormContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const form = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const formContainerRef = useRef<HTMLDivElement>(null);

  return (
    <FormContext.Provider value={{ form, formContainerRef }}>
      <div ref={formContainerRef}>
        {children}
      </div>
    </FormContext.Provider>
  );
};

export default FormContextProvider;
