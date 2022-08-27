import { AiOutlineCopyrightCircle } from "react-icons/ai";

function Footer() {
  return (
    <div className="w-full pt-32 mt-[-8rem] mb-10 pl-40 pr-20">
      <div className="h-16 flex items-center justify-center gap-10 rounded-3xl bg-dark-navy">
        <h1 className="text-lg text-std-slate font-roboto font-semibold">Developed by Sergio Peña</h1>
        <h1 className="flex items-center gap-2 text-lg text-std-slate font-roboto font-semibold">
          Copyright 2022 <AiOutlineCopyrightCircle />
        </h1>
      </div>
    </div>
  );
}

export default Footer;
