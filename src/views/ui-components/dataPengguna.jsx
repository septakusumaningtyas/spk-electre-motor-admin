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
    { id: 'no', label: 'No', minWidth: 170 },
    { id: 'nama', label: 'Nama', minWidth: 100 },
    {
      id: 'email',
      label: 'Email',
      minWidth: 170
    },
    {
      id: 'tanggal',
      label: 'Tanggal Akses',
      minWidth: 170,
    },
    {
      id: 'alamat',
      label: 'Alamat',
      minWidth: 170,
    },
    {
      id: 'aksi',
      label: 'Aksi',
      minWidth: 170,
    },
];

function createData(no, nama, email, tanggal, alamat, aksi) {
    return {no, nama, email, tanggal, alamat, aksi};
}

const rows = [
    createData('1', 'Adi', "@gmail.com", "9-10-2020", "Malang", 
    <Link className="button-link" to="/detail-pengguna"><Button className="btn" color="info">Detail</Button></Link>),
    createData('2', 'Budi',"@gmail.com" , "9-10-2020", "Malang", <Button className="btn" color="info">Detail</Button>),
    createData('3', 'Chintya', "@gmail.com", "9-10-2020", "Malang", <Button className="btn" color="info">Detail</Button>),
    createData('4', 'Eni', "@gmail.com", "9-10-2020", "Malang", <Button className="btn" color="info">Detail</Button>),
    createData('5', 'Fani', "@gmail.com", "9-10-2020", "Malang", <Button className="btn" color="info">Detail</Button>),
];

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
