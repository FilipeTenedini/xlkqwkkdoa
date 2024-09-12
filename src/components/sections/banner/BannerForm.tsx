"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { FormValues } from "@/context/types";
import { useFormContext } from "@/context/FormContext";
import ConfirmDialog from "./ConfirmDialog";

const BannerForm: React.FC = () => {
  const { form } = useFormContext();
  const [open, setOpen] = useState(false);

  const onSubmit = (data: FormValues) => {
    if (data.email && data.firstName) {
      setOpen(true);
    }
  };

  return (
    <div className="relative">
      <form
        className="w-full h-full flex justify-center px-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="w-full max-w-[700px] flex flex-col items-center gap-2 xl:gap-3">
          <Input
            {...form.register("firstName")}
            placeholder="Seu primeiro nome"
            className={`bg-gray-300 rounded-xl shadow-md shadow-black/30 text-center h-9 ${
              form.formState.errors.firstName
                ? "border-red-500 text-red-500"
                : "border-none"
            }`}
            onChange={(e) => form.setValue("firstName", e.target.value.trim())}
          />
          <Input
            {...form.register("email")}
            placeholder="Seu melhor e-mail"
            type="email"
            className={`bg-gray-300 rounded-xl shadow-md shadow-black/30 text-center h-9 ${
              form.formState.errors.email
                ? "border-red-500 text-red-500"
                : "border-none"
            }`}
            onChange={(e) => form.setValue("email", e.target.value.trim())}
          />
          <Button
            className="w-full font-bold md:text-lg shadow-sm shadow-black/30 h-9 bg-primary"
            variant="inverted"
          >
            INSCREVA-SE AGORA
          </Button>
        </div>
      </form>
      <ConfirmDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default BannerForm;
