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
    path: '/data-pengguna',
    name: 'Data Pengguna',
    icon: 'ti-user',
    component: DataPengguna
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
  {
    path: '/edit-alternatif',
    component: EditAlternatif
  },
  {
    path: '/hapus-alternatif',
    component: HapusAlternatif
  },
  {
    path: '/edit-kriteria',
    component: EditKriteria
  },
  {
    path: '/hapus-kriteria',
    component: HapusKriteria
  },
  {
    path: '/detail-pengguna',
    component: DetailPengguna
  },
  {
    path: '/proses-electre',
    component: ProsesElectre
  },
  { path: '/', pathTo: '/dashboard', name: 'Dashboard', redirect: true }
];
export default ThemeRoutes;
