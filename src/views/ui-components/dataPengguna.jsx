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
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Axios from 'axios';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function DataPengguna() {
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

    const [penggunaList,setPenggunaList] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3001/getpengguna')
            .then((response)=> {
                setPenggunaList(response.data);
            });
    }, []);

    return (
        <div>
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="ti-user mr-2"> </i>
            Data Pengguna
            </CardTitle>
                <CardBody className="">
                    <div className="mt-3">
                        <Paper className={classes.root}>
                            <TableContainer className={classes.container}>
                                <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableCell style={{minWidth: 50}}>No</TableCell>
                                    <TableCell style={{minWidth: 50}}>Nama</TableCell>
                                    <TableCell style={{minWidth: 50}}>Email</TableCell>
                                    <TableCell style={{minWidth: 50}}>Tanggal Akses</TableCell>
                                    <TableCell style={{minWidth: 50}}>Alamat</TableCell>
                                    <TableCell style={{minWidth: 50}}>Aksi</TableCell>
                                </TableHead>
                                <TableBody>
                                    {penggunaList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(val=> {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={val}>
                                                <TableCell>{val.id}</TableCell>
                                                <TableCell>{val.nama_pengguna}</TableCell>
                                                <TableCell>{val.email_pengguna}</TableCell>
                                                <TableCell>{val.tgl_akses}</TableCell>
                                                <TableCell>{val.alamat_pengguna}</TableCell>
                                                <TableCell>
                                                    <Row className="mt-3">
                                                        <Col>
                                                            <Link className="button-link" to="/detail-pengguna">
                                                                <Button className="btn" color="info">Detail</Button>
                                                            </Link>
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
                                rowsPerPageOptions={[10, 25, 100]}
                                component="div"
                                count={penggunaList.length}
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
