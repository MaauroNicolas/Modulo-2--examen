import React from "react";
import ProductDetail from "./ProductDetail";
import Enlaces from "./Enlaces";


const Home = () => {
  return (
    <>
    <header>
      
      <h1>Solarmax</h1>
      <h4>Disponemos de los mejores productos del mercado a comodas cuotas y precios accesibles <br/>
      tenemos computadores, tablet y celulares con los mejores componentes.
      </h4>
    </header>
    <div>
    <ProductDetail productId={1}/>
    <ProductDetail productId={2}/>
    <ProductDetail productId={3}/>
    <ProductDetail productId={4}/>
    </div>
    <div>
      <h4>Recuerda iniciar sesion para obtener mas detalles de los productos inicia sesion <br/> 
      si no estas registrado hazlo para accedes a increibles descuentos.</h4>
    </div>

    <div>
        <Enlaces></Enlaces>
    </div>
    
    



    </>
  );
};

export default Home;
