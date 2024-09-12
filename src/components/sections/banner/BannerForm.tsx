"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

// Definindo o esquema de validação com yup
const schema = yup.object({
  firstName: yup.string().required('Seu primeiro nome é obrigatório'),
  email: yup.string().email('Email inválido').required('Seu melhor e-mail é obrigatório'),
}).required();

type FormValues = {
  firstName: string;
  email: string;
};

const BannerForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form
      className="w-full h-full flex justify-center px-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full md:w-[100%] max-w-[700px] flex flex-col items-center gap-2 xl:gap-3">
        <Input
          {...register('firstName')}
          placeholder="Seu primeiro nome"
          className={`2xl:block bg-gray-300 rounded-xl shadow-md shadow-black/30 text-center h-9 ${errors.firstName ? 'border-red-500 text-red-500' : 'border-none '}`}
        />

        <Input
          {...register('email')}
          placeholder="Seu melhor e-mail"
          type="email"
          className={`2xl:block bg-gray-300 rounded-xl shadow-md shadow-black/30 text-center h-9 ${errors.email ? 'border-red-500 text-red-500' : 'border-none '}`}
        />

        <Button
          type="submit"
          className={`w-full font-bold md:text-lg shadow-sm shadow-black/30 h-9 bg-primary`}
          variant={"inverted"}
        >
          INSCREVA-SE AGORA
        </Button>
      </div>
    </form>
  );
};

export default BannerForm;
