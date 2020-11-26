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

export default function Alternatif() {
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
        Axios.get('http://localhost:3001/getalternatif')
            .then((response)=> {
                setAlternatifList(response.data);
            });
    }, []);

    const [nama_alternatif, setAlternatif] = useState('');
    const [id, setId] = useState('');
    const submitAlternatif = () => {
        Axios.post("http://localhost:3001/addalternatif", {
            id: id,
            nama_alternatif: nama_alternatif,
        });
        setAlternatifList([
            ...alternatifList,
            {id:id, nama_alternatif: nama_alternatif},
        ]);
    };

    const deleteAlternatif = (id) => {
        Axios.delete(`http://localhost:3001/deletealternatif/${id}`);
    }

    const selectAlternatif = (id) => {
        Axios.get(`http://localhost:3001/getalternatif/${id}`);
    }

    return (
        <div>
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="ti-thumb-up mr-2"> </i>
                    Alternatif
                </CardTitle>
                <CardBody className="">
                    {/* <Link className="button-link" to="/tambah-alternatif">
                        <Button className="btn" color="primary">Tambah Alternatif</Button>
                    </Link> */}
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                                <i className="ti-thumb-up mr-2"> </i>
                        Tambah Alternatif
                        </CardTitle>
                        <CardBody className="">
                            <div className="form-group">
                                <form className="form" noValidate autoComplete="off">
                                    <div>
                                        <TextField id="id_alternatif" name="nama_alternatif" label="Nama Alternatif" variant="outlined" 
                                        onChange={(e) => setAlternatif(e.target.value)}/>
                                    </div>
                                </form>
                            </div>
                            <Row className="mt-3">
                                <Col>
                                    <Link className="button-link" to="/alternatif">
                                        <Button className="btn" color="success" onClick={submitAlternatif}>Simpan</Button>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link className="button-link" to="/alternatif">
                                        <Button className="btn" color="danger">Kembali</Button>
                                    </Link>
                                </Col>
                                <Col></Col>
                                <Col></Col>
                            </Row>
                        </CardBody>
                    <div className="mt-3">
                        <Paper className={classes.root}>
                            <TableContainer className={classes.container}>
                                <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{minWidth: 50}}>No</TableCell>
                                        <TableCell style={{minWidth: 100}}>Nama Alternatif</TableCell>
                                        <TableCell style={{minWidth: 75}}>Aksi</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {alternatifList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(val=> {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={val}>
                                                <TableCell>{val.id}</TableCell>
                                                <TableCell>{val.nama_alternatif}</TableCell>
                                                <TableCell>
                                                    <Row className="mt-3">
                                                        <Col><Link className="button-link" to="/edit-alternatif"><Button className="btn" color="warning" onClick={selectAlternatif(val.id)}>Edit</Button></Link></Col>
                                                        <Col>
                                                            <Button className="btn" color="danger" onClick={() => {if (window.confirm('Apakah anda yakin menghapus alternatif ini?')) deleteAlternatif(val.id)}}>Delete</Button>
                                                        </Col><Col></Col> <Col></Col>
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
