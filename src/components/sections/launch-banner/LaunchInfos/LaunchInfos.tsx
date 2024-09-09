import LaunchItem from "./LaunchItem";

const LaunchInfos: React.FC = () => {
  return (
    <ul className="list-disc list-inside space-y-2 mb-8 md:mb-0 w-full">
      <LaunchItem text="Acesso ao curso por 1 ano" />
      <LaunchItem text="Material de apoio gratuito" />
      <LaunchItem text="Certificado de conclusão" />
      <LaunchItem text="Suporte técnico durante o curso" />
    </ul>
  );
};

export default LaunchInfos;
