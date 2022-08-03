import React from "react";

const App = () => {
  return (
    <div className="grid bg-red-100 place-items-center min-h-screen">
      <div className="max-w-6xl grid gap-4 grid-cols-2 p-8 md:grid-cols-4">
        <h1
          className="text-4xl font-extrabold col-span-2 grid gap-4 grid-cols-2 
        md:col-span-3 md:grid-cols-3"
        >
          <span className="md:text-6xl md:col-span-2 lg:text-[5.5rem]">
            Prawdziwe historie
          </span>
        </h1>
        <div className="row-start-2 col-start-2 self-center md:col-start-1 md:col-span-2">
          <p className="text-xs p-1 md:text-sm md:p-1">
            Zapraszamy do lektury historii klientów, partnerów i przyjaciół, z
            którymi mamy przyjemność wędrować drogą rozwoju i
            przedsiębiorczości.
          </p>
          <p className="text-xs p-1 md:text-sm md:p-1">
            Każda historia jest inna, bo stoją za nimi unikalne organizacje
            tworzone przez ludzi obdarzonych wyjątkowymi pomysłami, talentami i
            doświadczeniami.
          </p>
        </div>
        <div className="h-auto square bg-black"></div>
        <div className="h-auto square bg-black"></div>
        <div className="h-auto square bg-white"></div>
        <div className="h-auto square bg-black md:col-start-2"></div>
        <div className="h-auto square bg-white"></div>
        <div className="h-auto square bg-black"></div>
        <div className="h-auto square bg-black"></div>
        <div className="h-auto square bg-white"></div>
        <p className="text-xs self-center md:col-span-2 md:text-base md:px-6">
          “Jesteśmy złączeni dzięki historiom” – Arystoteles, 384-322 p.n.e.
        </p>
      </div>
    </div>
  );
};

export default App;
