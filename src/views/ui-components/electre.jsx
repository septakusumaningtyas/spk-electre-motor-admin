import React, { useState } from 'react';
import {
    Alert,
    UncontrolledAlert,
    Card,
    CardBody,
    CardTitle, Button
} from 'reactstrap';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  function createData(name, c1, c2, c3, c4) {
    return { name, c1, c2, c3, c4 };
  }
  
  function createDataAlternatif(alternatif, a1, a2, a3, a4) {
    return { alternatif, a1, a2, a3, a4 };
  }
  
  const rows = [
    createData('C1', 2, 0, 0, 0),
    createData('C2', 0, 3, 0, 0),
    createData('C3', 0, 0, 3, 0),
    createData('C4', 0, 0, 0, 3),
  ];

  const rowsA = [
    createDataAlternatif('Honda Vario', 2, 3, 3, 3),
    createDataAlternatif('Yamaha Mio M3', 3, 3, 2, 3),
    createDataAlternatif('Suzuki Address Playful', 3, 2, 3, 2),
    createDataAlternatif('Vespa S-125 I-Get', 1, 1, 4, 3),
  ];

export default function Electre() {
    const classes = useStyles();

    return (
        <div>
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="ti-pencil-alt mr-2"> </i>
                    Perhitungan Electre - Topsis
                </CardTitle>
                <CardBody className="">
                    <h4>Data Bobot Kriteria</h4>
                    <div className="mt-3">
                        <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>Bobot Kriteria</TableCell>
                                    <TableCell align="right">C1</TableCell>
                                    <TableCell align="right">C2</TableCell>
                                    <TableCell align="right">C3</TableCell>
                                    <TableCell align="right">C4</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.c1}</TableCell>
                                    <TableCell align="right">{row.c2}</TableCell>
                                    <TableCell align="right">{row.c3}</TableCell>
                                    <TableCell align="right">{row.c4}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                    </div>
                    <h4>Membentuk Perbandingan Berpasangan (X)</h4>
                    <div className="mt-3">
                        <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>Alternatif</TableCell>
                                    <TableCell align="right">Harga</TableCell>
                                    <TableCell align="right">Konsumsi BBM</TableCell>
                                    <TableCell align="right">Kapasitas Tangki</TableCell>
                                    <TableCell align="right">Popularitas</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rowsA.map((row) => (
                                    <TableRow key={row.alternatif}>
                                    <TableCell component="th" scope="row">
                                        {row.alternatif}
                                    </TableCell>
                                    <TableCell align="right">{row.a1}</TableCell>
                                    <TableCell align="right">{row.a2}</TableCell>
                                    <TableCell align="right">{row.a3}</TableCell>
                                    <TableCell align="right">{row.a4}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                        <Link className="button-link" to="/proses-electre"><Button className="btn" color="primary">Hitung</Button></Link>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}
