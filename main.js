import { header } from './src/components/1.header/header'
import { aside, divApp } from './src/components/2.NavigationBar/aside'

import './style.css'

const initializeApp = async () => {
  // 1) Lleno .gallery con imágenes
  // await showGallery();

  // Agrego header
  divApp.appendChild(header);
  aside ();
  //divApp.appendChild(aside);
  //refreshGallery();


  // Agrego section y footer
  //divApp.appendChild(section);
  //divApp.appendChild(footer);

  // Agrego divApp al Body
  document.body.appendChild(divApp);

};

initializeApp();





