"use client";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-primary h-[80px] md:h-[110px] flex justify-between items-center px-3 md:px-12 py-6">
      <div className="w-[150px] h-[50px] flex items-center">
        <img
          src="/images/logo-redonda.png"
          className="w-[80px] md:w-[110px] mb-[20px] md:mb-[25px] rounded-full"
          alt="Logo"
        />
      </div>
      <h5 className="font-bold md:text-xl text-right">
        Aprenda lentes de resina e
        <br />
        fature mais de 20 mil reais por mês!!
      </h5>
    </header>
  );
};

export default Header;
