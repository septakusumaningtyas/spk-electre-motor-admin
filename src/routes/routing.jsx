import Starter from '../views/starter/starter.jsx';
// ui components
import Alternatif from '../views/ui-components/alternatif.jsx';
import Kriteria from '../views/ui-components/kriteria.jsx';
import Electre from '../views/ui-components/electre.jsx';
import Topsis from '../views/ui-components/topsis.jsx';
import TambahAlternatif from '../views/ui-components/tambahAlternatif.jsx';
import TambahKriteria from '../views/ui-components/tambahKriteria.jsx';

var ThemeRoutes = [
  { 
    path: '/dashboard', 
    name: 'Dashboard', 
    icon: 'ti-loop', 
    component: Starter 
  },
  {
    path: '/alternatif',
    name: 'Alternatif',
    icon: 'ti-thumb-up',
    component: Alternatif
  },
  {
    path: '/kriteria',
    name: 'Kriteria',
    icon: 'ti-bookmark-alt',
    component: Kriteria
  },
  {
    path: '/electre-topsis',
    name: 'Electre-Topsis',
    icon: 'ti-pencil-alt',
    component: Electre
  },
  {
    path: '/topsis',
    name: 'Topsis',
    icon: 'ti-pencil-alt',
    component: Topsis
  },
  {
    path: '/tambah-alternatif',
    component: TambahAlternatif
  },
  {
    path: '/tambah-kriteria',
    component: TambahKriteria
  },
  { path: '/', pathTo: '/dashboard', name: 'Dashboard', redirect: true }
];
export default ThemeRoutes;
