import React from 'react';

const Evento = ({evento}) => {



    return(
      <div className="uk-card uk-card-default">
          <div className="uk-card-media-top">
              {evento.logo ? <img src={evento.logo.ulr} alt={evento.name} />  : null}
          </div>
          <div className="uk-card-body">
              <div className="uk-card-title">{evento.name.text}</div>
          </div>

          <div className="uk-card-footer">
              <a href={evento.url} className="uk-button uk-button-secondary">
                  Mas informacion
              </a>
          </div>
      </div>
    );
}

export default Evento;