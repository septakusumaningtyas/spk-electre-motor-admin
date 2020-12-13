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

export default function Pesan() {
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

    const [pesanList,setPesanList] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3001/getpesan')
            .then((response)=> {
                setPesanList(response.data);
            });
    }, []);

    // const [nama_kriteria, setKriteria] = useState('');
    // const [id, setId] = useState('');
    // const submitKriteria = () => {
    //     Axios.post("http://localhost:3001/addkriteria", {
    //         id: id,
    //         nama_kriteria: nama_kriteria,
    //     });
    //     setKriteriaList([
    //         ...kriteriaList,
    //         {id:id,nama_kriteria: nama_kriteria},
    //     ]);
    //     window.location.reload(false);
    // };

    // const deleteKriteria = (id) => {
    //     Axios.delete(`http://localhost:3001/deletekriteria/${id}`);
    //     window.location.reload(false);
    // }

    // const selectKriteria = (id) => {
    //     Axios.get(`http://localhost:3001/getkriteria/${id}`);
    // }

    // const [newNamaKriteria, setNewNamaKriteria] = useState("");
    // const updateKriteria = (id) => {
    //     Axios.put("http://localhost:3001/updatekriteria",{
    //         id: id,
    //         nama_kriteria: newNamaKriteria,
    //     });
    //     setNewNamaKriteria("");
    //     window.location.reload(false);
    // };

    // function refreshPage() {
    //     window.location.reload(false);
    // }

    return (
        <div>
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="ti-bookmark-alt mr-2"> </i>
                    Pesan
                </CardTitle>
                <CardBody className="">
                    <div className="mt-3">
                        <Paper className={classes.root}>
                            <TableContainer className={classes.container}>
                                <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{minWidth: 50}}>No</TableCell>
                                        <TableCell style={{minWidth: 50}}>Nama</TableCell>
                                        <TableCell style={{minWidth: 50}}>Alamat Email</TableCell>
                                        <TableCell style={{minWidth: 75}}>Pesan</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {pesanList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(val=> {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={val}>
                                                <TableCell>{val.id}</TableCell>
                                                <TableCell>{val.nama}</TableCell>
                                                <TableCell>{val.alamat_email}</TableCell>
                                                <TableCell>{val.pesan}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[5, 25, 100]}
                                component="div"
                                count={pesanList.length}
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
