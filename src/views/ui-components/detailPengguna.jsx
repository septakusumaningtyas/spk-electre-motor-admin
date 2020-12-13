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

export default function DetailPengguna() {
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

    const [hasilList,setHasilList] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3001/gethasil')
            .then((response)=> {
                setHasilList(response.data);
            });
    }, []);

    return (
        <div>
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="ti-user mr-2"> </i>
            Data Hasil Perangkingan
            </CardTitle>
                <CardBody className="">
                    <div className="mt-3"><h3>Hasil Perangkingan Rekomendasi Sepeda Motor :</h3></div>
                    <div className="mt-3">
                        <Paper className={classes.root}>
                            <TableContainer className={classes.container}>
                                <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableCell style={{minWidth: 50}}>No</TableCell>
                                    <TableCell style={{minWidth: 50}}>Nama</TableCell>
                                    <TableCell style={{minWidth: 50}}>Alternatif 1</TableCell>
                                    <TableCell style={{minWidth: 50}}>Alternatif 2</TableCell>
                                    <TableCell style={{minWidth: 50}}>Alternatif 3</TableCell>
                                    <TableCell style={{minWidth: 50}}>Alternatif 4</TableCell>
                                </TableHead>
                                <TableBody>
                                    {hasilList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(val=> {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={val}>
                                                <TableCell>{val.id}</TableCell>
                                                <TableCell>{val.nama}</TableCell>
                                                <TableCell>{val.alternatif_1}</TableCell>
                                                <TableCell>{val.alternatif_2}</TableCell>
                                                <TableCell>{val.alternatif_3}</TableCell>
                                                <TableCell>{val.alternatif_4}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[10, 25, 100]}
                                component="div"
                                count={hasilList.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                            />
                        </Paper>
                        <br/>
                        <Link className="button-link" to="/data-pengguna"><Button className="btn" color="primary">Kembali</Button></Link>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}
