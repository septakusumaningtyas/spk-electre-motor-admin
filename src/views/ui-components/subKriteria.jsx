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

export default function SubKriteria() {
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
        Axios.get('http://localhost:3001/getsubkriteria')
            .then((response)=> {
                setKriteriaList(response.data);
            });
    }, []);

    const [kriteria, setKriteria] = useState('');
    const [sub_kriteria, setSubKriteria] = useState('');
    const [bobot, setBobot] = useState('');
    const [id, setId] = useState('');
    const submitSubKriteria = () => {
        Axios.post("http://localhost:3001/addsubkriteria", {
            id: id,
            kriteria: kriteria,
            sub_kriteria: sub_kriteria,
            bobot: bobot,
        });
        setKriteriaList([
            ...kriteriaList,
            {id:id,kriteria: kriteria, sub_kriteria: sub_kriteria, bobot: bobot},
        ]);
        window.location.reload(false);
    };

    const deleteSubKriteria = (id) => {
        Axios.delete(`http://localhost:3001/deletesubkriteria/${id}`);
        window.location.reload(false);
    }

    const selectKriteria = (id) => {
        Axios.get(`http://localhost:3001/getkriteria/${id}`);
    }

    const [newNamaKriteria, setNewNamaKriteria] = useState("");
    const [newSubKriteria, setNewSubKriteria] = useState("");
    const [newBobot, setNewBobot] = useState("");
    const updateSubKriteria = (id) => {
        Axios.put("http://localhost:3001/updatesubkriteria",{
            id: id,
            kriteria: newNamaKriteria,
            sub_kriteria: newSubKriteria,
            bobot: newBobot,
        });
        setNewNamaKriteria("");
        setNewSubKriteria("");
        setNewBobot("");
        window.location.reload(false);
    };

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div>
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="ti-bookmark-alt mr-2"> </i>
                    Sub Kriteria
                </CardTitle>
                <CardBody className="">
                    <CardTitle className="bg-light border-bottom p-3 mb-0">
                        <i className="ti-bookmark-alt mr-2"> </i>
                    Tambah Sub Kriteria
                    </CardTitle>
                    <CardBody className="">
                        <div className="form-group">
                            <form className="form" noValidate autoComplete="off">
                                <div>
                                    <TextField id="nama" label="Nama Kriteria" variant="outlined" 
                                    onChange={(e) => setKriteria(e.target.value)}/>
                                    <TextField id="sub_kriteria" label="Sub Kriteria" variant="outlined" 
                                    onChange={(e) => setSubKriteria(e.target.value)}/>
                                    <TextField id="bobot" label="Bobot Sub Kriteria" variant="outlined" 
                                    onChange={(e) => setBobot(e.target.value)}/>
                                </div>
                            </form>
                        </div>
                        <Row className="mt-3">
                            <Col>
                                <div className="row">
                                    <div className="col-2">
                                        <Link className="button-link" to="/kriteria">
                                            <Button className="btn" color="success" onClick={submitSubKriteria}>Simpan</Button>
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
                                        <TableCell style={{minWidth: 50}}>Nama Kriteria</TableCell>
                                        <TableCell style={{minWidth: 50}}>Sub Kriteria</TableCell>
                                        <TableCell style={{minWidth: 50}}>Bobot</TableCell>
                                        <TableCell style={{minWidth: 75}}>Aksi</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {kriteriaList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(val=> {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={val}>
                                                <TableCell>{val.id}</TableCell>
                                                <TableCell>{val.kriteria}</TableCell>
                                                <TableCell>{val.sub_kriteria}</TableCell>
                                                <TableCell>{val.bobot}</TableCell>
                                                <TableCell>
                                                    <Row className="mt-3">
                                                        <div className="row">
                                                            <div className="col-8"><TextField id="nama" label="Nama Kriteria" variant="outlined" onChange={(e) => {
                                                                setNewNamaKriteria(e.target.value);
                                                            }}/></div>
                                                            <div className="col-4"></div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-8"><TextField id="sub_kriteria" label="Sub Kriteria" variant="outlined" onChange={(e) => {
                                                                setNewSubKriteria(e.target.value);
                                                            }}/></div>
                                                            <div className="col-4"></div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-8"><TextField id="bobot" label="Bobot Sub Kriteria" variant="outlined" onChange={(e) => {
                                                                setNewBobot(e.target.value);
                                                            }}/></div>
                                                            <div className="col-4"></div>
                                                        </div>
                                                    </Row>
                                                    <Row>
                                                        <Button className="btn" color="warning" onClick={()=> {updateSubKriteria(val.id)}}>Edit</Button>
                                                        <Button className="btn" color="danger" onClick={() => {if (window.confirm('Apakah anda yakin menghapus sub kriteria ini?')) deleteSubKriteria(val.id)}}>Delete</Button>
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
