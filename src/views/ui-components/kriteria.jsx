import React, { useState } from 'react';
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

const columns = [
  { id: 'no', label: 'No', minWidth: 50 },
  { id: 'nama', label: 'Nama Kriteria', minWidth: 100 },
  { id: 'aksi', label: 'Aksi', minWidth: 75 },
];

function createData(no, nama, aksi) {
  return {no, nama, aksi};
}

const rows = [
  createData('1', 'Harga',
    <Row className="mt-3">
        <Col><Link className="button-link" to="/edit-kriteria"><Button className="btn" color="warning">Edit</Button></Link></Col>
        <Col>
            <Link className="button-link" to="/hapus-kriteria"><Button className="btn" color="danger">Delete</Button></Link>
        </Col><Col></Col> <Col></Col>
    </Row>),
  createData('2', 'Konsumsi BBM',
    <Row className="mt-3">
        <Col><Button className="btn" color="warning">Edit</Button></Col>
        <Col><Button className="btn" color="danger">Delete</Button></Col> <Col></Col> <Col></Col>
    </Row>),
  createData('3', 'Kapasitas Tangki',
    <Row className="mt-3">
        <Col><Button className="btn" color="warning">Edit</Button></Col>
        <Col><Button className="btn" color="danger">Delete</Button></Col> <Col></Col> <Col></Col>
    </Row>),
  createData('4', 'Popularitas',
    <Row className="mt-3">
        <Col><Button className="btn" color="warning">Edit</Button></Col>
        <Col><Button className="btn" color="danger">Delete</Button></Col> <Col></Col> <Col></Col>
    </Row>)
];

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

    return (
        <div>
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="ti-bookmark-alt mr-2"> </i>
            Kriteria
            </CardTitle>
                <CardBody className="">
                    <Link className="button-link" to="/tambah-kriteria">
                        <Button className="btn" color="primary">Tambah Kriteria</Button>
                    </Link>
                    <div className="mt-3">
                        <Paper className={classes.root}>
                            <TableContainer className={classes.container}>
                                <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                        >
                                        {column.label}
                                        </TableCell>
                                    ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                            );
                                        })}
                                        </TableRow>
                                    );
                                    })}
                                </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[10, 25, 100]}
                                component="div"
                                count={rows.length}
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
