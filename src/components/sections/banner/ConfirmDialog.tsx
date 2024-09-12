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
import { FaWhatsapp } from "react-icons/fa";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ConfirmDialog: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <div className="absolute w-full">
      <Dialog open={open} onOpenChange={() => setOpen(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Você está quase lá!</DialogTitle>
            <DialogDescription>
              Faltam apenas 1 passo para você garantir o acesso a live
            </DialogDescription>
            <Progress value={80} />
          </DialogHeader>
          <span>
            <span className="font-semibold">
              Confirme a sua inscrição no WhatsApp
            </span>{" "}
            e receba todos os avisos e materiais do curso! O WhatsApp será o meu
            principal meio de comunicação com você.
          </span>
          <Button
            type="submit"
            className="w-full font-bold md:text-lg shadow-sm shadow-black/30 h-9 bg-primary"
            variant={"inverted"}
            onClick={() => {
              window.open("https://joinz.app/grupoviptaisaurich", "_blank");
            }}
          >
            <FaWhatsapp className="mr-4" />
            CONFIRMAR INSCRIÇÃO NO WHATSAPP
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ConfirmDialog;
