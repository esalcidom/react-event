import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaEventos from './components/ListaEventos';

import CategoriasProvider from './context/CategoriasContext';
import EventosProvider from './context/EventosContext';

function App() {
  return (
    <EventosProvider>
      <CategoriasProvider>
        <Header />
        <div className="uk-container">
          <Formulario/>
          <ListaEventos/>
        </div>
      </CategoriasProvider>
    </EventosProvider>
  );
}

export default App;

//Notas de este proyecto
// Se utilizara context api de react para poder enviar la informacion
// de state o enviar funciones desde el componente principal hasta los hijos
// Esto ayuda ya que no se necesita pasar el contexto entre cada componente
// hasta llegar con el hijo. Los componenetes hijo tambien pueden actualizar
// el state principal.