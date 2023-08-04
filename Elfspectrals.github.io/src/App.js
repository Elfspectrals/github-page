import React from "react";
import Header from "./Header";
import Footer from "./Footer";


const App = () => {

  return (
    <div>
      <Header />
      <h2 className ="text-2xl font-bold mb-4">Informations à lire :</h2>
      <p className ="text-gray-600 mb-8">Suite à un changement de la direction artistique de Jérôme & Moi&trade; , 
      <br />Le site doit donc être converti de 
      <span className="text-red-500 font-semibold "> HTML CSS JS</span> à <span className="text-blue-500 font-semibold">React</span>.
      <br />
      Mais n'hésitez pas à vous amuser</p>
      <Footer />
    </div>
  );
};

export default App;