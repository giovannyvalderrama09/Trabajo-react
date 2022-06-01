import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Nombre} from './Gio.js'
import { Menu,Carrusel,Bibiografia } from './menu.js';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <Fragment>
  <Menu/>
 <Carrusel/>
 <Bibiografia/>
  </Fragment>
)




