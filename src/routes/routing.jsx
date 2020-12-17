import Starter from '../views/starter/starter.jsx';
// ui components
import Alternatif from '../views/ui-components/alternatif.jsx';
import Kriteria from '../views/ui-components/kriteria.jsx';
import DataPengguna from '../views/ui-components/dataPengguna.jsx';
import Electre from '../views/ui-components/electre.jsx';
import Topsis from '../views/ui-components/topsis.jsx';
import TambahAlternatif from '../views/ui-components/tambahAlternatif.jsx';
import TambahKriteria from '../views/ui-components/tambahKriteria.jsx';
import EditAlternatif from '../views/ui-components/editAlternatif.jsx';
import HapusAlternatif from '../views/ui-components/hapusAlternatif.jsx';
import EditKriteria from '../views/ui-components/editKriteria.jsx';
import HapusKriteria from '../views/ui-components/hapusKriteria.jsx';
import DetailPengguna from '../views/ui-components/detailPengguna.jsx';
import ProsesElectre from '../views/ui-components/prosesElectre.jsx';
import ProsesTopsis from '../views/ui-components/prosesTopsis.jsx';
import Registration from '../views/ui-components/registration.jsx';
import DetailAlternatif from '../views/ui-components/detailAlternatif.jsx';
import SubKriteria from '../views/ui-components/subKriteria.jsx';
import Pesan from '../views/ui-components/pesan.jsx';

var ThemeRoutes = [
  {
    path: '/registration',
    name: 'Login',
    icon: 'ti-id-badge',
    component: Registration
  },
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
    path: '/alternatif-detail',
    name: 'Detail Alternatif',
    icon: 'ti-thumb-up',
    component: DetailAlternatif
  },
  {
    path: '/kriteria',
    name: 'Kriteria',
    icon: 'ti-bookmark-alt',
    component: Kriteria
  },
  {
    path: '/subkriteria',
    name: 'Sub Kriteria',
    icon: 'ti-bookmark-alt',
    component: SubKriteria
  },
  {
    path: '/data-pengguna',
    name: 'Data Pengguna',
    icon: 'ti-user',
    component: DataPengguna
  },
  {
    path: '/pesan',
    name: 'Pesan',
    icon: 'ti-comment-alt',
    component: Pesan
  },
  {
    path: '/electre-topsis',
    name: 'Electre-Topsis',
    icon: 'ti-pencil-alt',
    component: ProsesElectre
  },
  {
    path: '/topsis',
    name: 'Topsis',
    icon: 'ti-pencil-alt',
    component: ProsesTopsis
  },
  {
    path: '/detail-pengguna',
    component: DetailPengguna
  },
  // {
  //   path: '/proses-electre',
  //   component: ProsesElectre
  // },
  // {
  //   path: '/proses-topsis',
  //   component: ProsesTopsis
  // },
  { path: '/', pathTo: '/registration', redirect: true }
];
export default ThemeRoutes;
