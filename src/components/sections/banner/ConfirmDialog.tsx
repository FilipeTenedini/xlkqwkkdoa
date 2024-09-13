"use client";

import { Button } from "@/components/ui/Button";
import {
  DialogHeader,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/Dialog";
import { Progress } from "@/components/ui/Progress";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ConfirmDialog: React.FC<Props> = ({ open, setOpen }) => {
  const [value, setValue] = useState(80);
  const router = useRouter();

  const handleConfirmClick = () => {
    router.replace(window.location.pathname);

    window.open("https://joinz.app/grupoviptaisaurich", "_blank");

    setValue(100);
  };

  return (
    <div className="absolute w-full">
      <Dialog open={open} onOpenChange={() => setOpen(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Você está quase lá!</DialogTitle>
            <DialogDescription>
              Faltam apenas 1 passo para você garantir o acesso à live.
            </DialogDescription>
            <Progress value={value} />
          </DialogHeader>
          <span>
            <span className="font-semibold">
              Confirme a sua inscrição no WhatsApp
            </span>{" "}
            e receba todos os avisos e materiais do curso! O WhatsApp será o meu
            principal meio de comunicação com você.
          </span>
          <div className="w-full items-center justify-center flex">
            <Button
              type="submit"
              className="w-full font-bold text-xs md:text-lg shadow-sm shadow-black/30 h-9 bg-primary"
              variant={"inverted"}
              onClick={handleConfirmClick} // Usa a função de clique para remover o query e redirecionar
            >
              <FaWhatsapp className="mr-4" />
              CONFIRMAR INSCRIÇÃO NO WHATSAPP
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ConfirmDialog;
