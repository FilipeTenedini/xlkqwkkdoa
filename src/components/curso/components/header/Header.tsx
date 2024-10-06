const Header: React.FC = () => {
  return (
    <header className="w-full bg-primary h-[80px] md:h-[110px] flex justify-between items-center px-3 md:px-12 py-6">
      <div className="w-[50px] h-[50px] flex items-center">
        <img src="/images/logo-redonda.png" className="rounded-full"/>
      </div>
      <h5 className="font-bold md:text-xl text-right"> Aprenda lentes de resina e<br/> fature mais de 20 mil reais por mês!!</h5>
    </header>
  );
};

export default Header;
