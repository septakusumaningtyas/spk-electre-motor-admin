import React, { useState,useEffect } from 'react';
import {
    Alert,
    UncontrolledAlert,
    Card,
    CardBody,
    CardTitle,
    Button, Row, Col
} from 'reactstrap';
import { Link } from "react-router-dom";
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
import Axios from 'axios';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function Kriteria() {
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

    const [kriteriaList,setKriteriaList] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3001/getkriteria')
            .then((response)=> {
                setKriteriaList(response.data);
            });
    }, []);

    const [nama_kriteria, setKriteria] = useState('');
    const [id, setId] = useState('');
    const submitKriteria = () => {
        Axios.post("http://localhost:3001/addkriteria", {
            id: id,
            nama_kriteria: nama_kriteria,
        });
        setKriteriaList([
            ...kriteriaList,
            {id:id,nama_kriteria: nama_kriteria},
        ]);
    };

    const deleteKriteria = (id) => {
        Axios.delete(`http://localhost:3001/deletekriteria/${id}`);
    }

    const selectKriteria = (id) => {
        Axios.get(`http://localhost:3001/getkriteria/${id}`);
    }

    const [newNamaKriteria, setNewNamaKriteria] = useState("");
    const updateKriteria = (id) => {
        Axios.put("http://localhost:3001/updatekriteria",{
            id: id,
            nama_kriteria: newNamaKriteria,
        });
        setNewNamaKriteria("");
    };

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div>
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="ti-bookmark-alt mr-2"> </i>
                    Kriteria
                </CardTitle>
                <CardBody className="">
                    <CardTitle className="bg-light border-bottom p-3 mb-0">
                        <i className="ti-bookmark-alt mr-2"> </i>
                    Tambah Kriteria
                    </CardTitle>
                    <CardBody className="">
                        <div className="form-group">
                            <form className="form" noValidate autoComplete="off">
                                <div>
                                    <TextField id="nama" label="Nama Kriteria" variant="outlined" 
                                    onChange={(e) => setKriteria(e.target.value)}/>
                                </div>
                            </form>
                        </div>
                        <Row className="mt-3">
                            <Col>
                                <div className="row">
                                    <div className="col-2">
                                        <Link className="button-link" to="/kriteria">
                                            <Button className="btn" color="success" onClick={submitKriteria}>Simpan</Button>
                                        </Link>
                                    </div>
                                    <div className="col-2">
                                        <Link className="button-link" to="/kriteria">
                                            <Button className="btn" color="info" onClick={refreshPage}>Refresh</Button>
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
                                        <TableCell style={{minWidth: 50}}>No</TableCell>
                                        <TableCell style={{minWidth: 100}}>Nama Kriteria</TableCell>
                                        <TableCell style={{minWidth: 75}}>Aksi</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {kriteriaList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(val=> {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={val}>
                                                <TableCell>{val.id}</TableCell>
                                                <TableCell>{val.nama_kriteria}</TableCell>
                                                <TableCell>
                                                    <Row className="mt-3">
                                                        <Col>
                                                            <div className="row">
                                                                <div className="col-8"><TextField id="nama" label="Nama Kriteria" variant="outlined" onChange={(e) => {
                                                                    setNewNamaKriteria(e.target.value);
                                                                }}/></div>
                                                                <div className="col-4"><Button className="btn" color="warning" onClick={()=> {updateKriteria(val.id)}}>Edit</Button></div>
                                                            </div>
                                                        </Col>
                                                        <Col>
                                                            <Button className="btn" color="danger" onClick={() => {if (window.confirm('Apakah anda yakin menghapus kriteria ini?')) deleteKriteria(val.id)}}>Delete</Button>
                                                        </Col>
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
                                count={kriteriaList.length}
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
