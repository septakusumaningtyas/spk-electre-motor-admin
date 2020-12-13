import React, { useState, useEffect } from 'react';
import {
    Alert,
    UncontrolledAlert,
    Card,
    CardBody,
    CardTitle,
    Button, Row, Col
} from 'reactstrap';
import { Link } from "react-router-dom";
//import Popup from 'reactjs-popup';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import '../../assets/scss/style.css';
import Axios from 'axios';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function DetailAlternatif() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    const [alternatifList,setAlternatifList] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3001/getalternatifdetail')
            .then((response)=> {
                setAlternatifList(response.data);
            });
    }, []);

    const [nama, setAlternatif] = useState('');
    const [harga, setHarga] = useState('');
    const [konsumsi_bbm, setKonsumsiBbm] = useState('');
    const [kapasitas_tangki, setKapasitasTangki] = useState('');
    const [popularitas, setPopularitas] = useState('');
    const [id, setId] = useState('');
    const submitAlternatifDetail = () => {
        Axios.post("http://localhost:3001/addalternatifdetail", {
            id: id,
            nama: nama,
            harga: harga,
            konsumsi_bbm: konsumsi_bbm,
            kapasitas_tangki: kapasitas_tangki,
            popularitas: popularitas,
        });
        setAlternatifList([
            ...alternatifList,
            {id:id, nama: nama, harga: harga, konsumsi_bbm: konsumsi_bbm,
                kapasitas_tangki: kapasitas_tangki,
                popularitas: popularitas},
        ]);
        window.location.reload(false);
    };

    const deleteAlternatifDetail = (id) => {
        Axios.delete(`http://localhost:3001/deletealternatifdetail/${id}`);
        window.location.reload(false);
    }

    const selectAlternatif = (id) => {
        Axios.get(`http://localhost:3001/getalternatif/${id}`);
    }

    const [newNamaAlternatif, setNewNamaAlternatif] = useState("");
    const [newHarga, setNewHarga] = useState("");
    const [newKonsumsiBbm, setNewKonsumsiBbm] = useState("");
    const [newKapasitasTangki, setNewKapasitasTangki] = useState("");
    const [newPopularitas, setNewPopularitas] = useState("");
    const updateAlternatifDetail = (id) => {
        Axios.put("http://localhost:3001/updatealternatifdetail",{
        id: id,    
        nama: newNamaAlternatif,
        harga: newHarga,
        konsumsi_bbm: newKonsumsiBbm,
        kapasitas_tangki: newKapasitasTangki,
        popularitas: newPopularitas,
        });
        setNewNamaAlternatif("");
        setNewHarga("");
        setNewKonsumsiBbm("");
        setNewKapasitasTangki("");
        setNewPopularitas("");
        window.location.reload(false);
    };

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div>
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="ti-thumb-up mr-2"> </i>
                    Detail Alternatif
                </CardTitle>
                <CardBody className="">
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                                <i className="ti-thumb-up mr-2"> </i>
                        Tambah Detail Alternatif
                        </CardTitle>
                        <CardBody className="">
                            <div className="form-group">
                                <form className="form" noValidate autoComplete="off">
                                    <div>
                                        <TextField id="id_alternatif" name="nama" label="Nama Alternatif" variant="outlined" 
                                        onChange={(e) => setAlternatif(e.target.value)}/>
                                        <TextField id="id_harga" name="harga" label="Harga" variant="outlined" 
                                        onChange={(e) => setHarga(e.target.value)}/>
                                        <TextField id="id_konsumsi_bbm" name="konsumsi_bbm" label="Konsumsi BBM" variant="outlined" 
                                        onChange={(e) => setKonsumsiBbm(e.target.value)}/>
                                        <TextField id="id_kapasitas_tangki" name="kapasitas_tangki" label="Kapasitas Tangki" variant="outlined" 
                                        onChange={(e) => setKapasitasTangki(e.target.value)}/>
                                        <TextField id="id_popularitas" name="popularitas" label="Popularitas" variant="outlined" 
                                        onChange={(e) => setPopularitas(e.target.value)}/>
                                    </div>
                                </form>
                            </div>
                            <Row className="mt-3">
                                <Col>
                                    <div className="row">
                                        <div className="col-2">
                                            <Link className="button-link" to="/alternatif">
                                                <Button className="btn" color="success" onClick={submitAlternatifDetail}>Simpan</Button>
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    <div className="mt-3">
                        <Paper className={classes.root}>
                            <TableContainer className={classes.container}>
                                <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{minWidth: 30}}>No</TableCell>
                                        <TableCell style={{minWidth: 30}}>Nama Alternatif</TableCell>
                                        <TableCell style={{minWidth: 30}}>Harga</TableCell>
                                        <TableCell style={{minWidth: 30}}>Konsumsi BBM</TableCell>
                                        <TableCell style={{minWidth: 30}}>Kapasitas Tangki</TableCell>
                                        <TableCell style={{minWidth: 30}}>Popularitas</TableCell>
                                        <TableCell style={{minWidth: 100}}>Aksi</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {alternatifList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(val => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={val}>
                                                <TableCell>{val.id}</TableCell>
                                                <TableCell>{val.nama}</TableCell>
                                                <TableCell>{val.harga}</TableCell>
                                                <TableCell>{val.konsumsi_bbm}</TableCell>
                                                <TableCell>{val.kapasitas_tangki}</TableCell>
                                                <TableCell>{val.popularitas}</TableCell>
                                                <TableCell>
                                                    <Row className="mt-3">
                                                        <div className="row">
                                                            <div className="col-8"><TextField id="nama" label="Nama Alternatif" variant="outlined" onChange={(e) => {
                                                                setNewNamaAlternatif(e.target.value);
                                                            }}/></div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-8"><TextField id="harga" label="Harga" variant="outlined" onChange={(e) => {
                                                                setNewHarga(e.target.value);
                                                            }}/></div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-8"><TextField id="konsumsi_bbm" label="Konsumsi BBM" variant="outlined" onChange={(e) => {
                                                                setNewKonsumsiBbm(e.target.value);
                                                            }}/></div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-8"><TextField id="kapasitas_tangki" label="Kapasitas Tangki" variant="outlined" onChange={(e) => {
                                                                setNewKapasitasTangki(e.target.value);
                                                            }}/></div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-8"><TextField id="popularitas" label="Popularitas" variant="outlined" onChange={(e) => {
                                                                setNewPopularitas(e.target.value);
                                                            }}/></div>
                                                        </div>
                                                    </Row>
                                                    <Row>
                                                        <Button className="btn" color="warning" onClick={()=> {updateAlternatifDetail(val.id)}}>Edit</Button>
                                                        <Button className="btn" color="danger" onClick={() => {if (window.confirm('Apakah anda yakin menghapus detail alternatif ini?')) deleteAlternatifDetail(val.id)}}>Delete</Button>
                                                    </Row>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[5, 25, 100]}
                                component="div"
                                count={alternatifList.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                            />
                        </Paper>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}
