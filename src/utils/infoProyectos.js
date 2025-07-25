import Rincon from '../assets/rincon_lago/Logo_rincon.webp';
import img1 from '../assets/rincon_lago/Rincon_lago_galeria1.webp';
import img2 from '../assets/rincon_lago/Rincon_lago_galeria2.webp';
import img3 from '../assets/rincon_lago/Rincon_lago_galeria3.webp';
import img4 from '../assets/rincon_lago/Rincon_lago_galeria4.webp';
import img5 from '../assets/rincon_lago/Rincon_lago_galeria5.webp';
import img6 from '../assets/rincon_lago/Rincon_lago_galeria6.webp';
import img7 from '../assets/rincon_lago/Rincon_lago_galeria7.webp';
import img8 from '../assets/rincon_lago/Rincon_lago_galeria8.webp';
import img9 from '../assets/rincon_lago/Rincon_lago_galeria9.webp';
import img10 from '../assets/rincon_lago/Rincon_lago_galeria10.webp';
import Coral from '../assets/coral_mall/logo_coral_mall.webp';
import pdf_coral from '../assets/pdfs/planos_coral.pdf';
import CanaDulce from '../assets/cana_dulce/cana_dulce_logo.webp';
import cana_dulce1 from '../assets/cana_dulce/cana_dulce_galeria1.webp';
import cana_dulce2 from '../assets/cana_dulce/cana_dulce_galeria2.webp';
import cana_dulce3 from '../assets/cana_dulce/cana_dulce_galeria3.webp';
import cana_dulce4 from '../assets/cana_dulce/cana_dulce_galeria4.webp';
import cana_dulce5 from '../assets/cana_dulce/cana_dulce_galeria5.webp';
import PuertasSol from '../assets/puertas_sol/puertas_sol.webp';
import puertas_sol1 from '../assets/puertas_sol/img1.webp';
import puertas_sol2 from '../assets/puertas_sol/img2.webp';
import puertas_sol3 from '../assets/puertas_sol/img3.webp';
import puertas_sol4 from '../assets/puertas_sol/img4.webp';
import puertas_sol5 from '../assets/puertas_sol/img5.webp';
import puertas_sol6 from '../assets/puertas_sol/img6.webp';
import puertas_sol7 from '../assets/puertas_sol/img7.webp';

export const infoProyectos = {
  rincon: {
    id: 'rincon',
    slug: 'rincon-del-lago',
    logo: Rincon,
   
    galeria: [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10
    ]
  },
  coral:{
    id: 'coral',
    slug: 'coral-mole',
    logo: Coral,
    pdf: pdf_coral,
    galeria: [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10
    ]
  },
  cana_dulce:{
    id: 'cana_dulce',
    slug: 'cana-dulce',
    logo: CanaDulce,
    galeria: [
        cana_dulce1,
        cana_dulce2,
        cana_dulce3,
        cana_dulce4,
        cana_dulce5
    ]
  },
  puertas_sol:{
    id: 'puertas_sol',
    slug: 'puertas-del-sol',
    logo: PuertasSol,
    galeria: [
        puertas_sol1,
        puertas_sol2,
        puertas_sol3,
        puertas_sol4,
        puertas_sol5,
        puertas_sol6,
        puertas_sol7
    ]
  }
};