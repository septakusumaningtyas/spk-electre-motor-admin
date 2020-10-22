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
  
  const rows = [
    createData('Honda Vario 125', 2, 3, 3, 3),
    createData('Yamaha Mio M3', 3, 3, 2, 3),
    createData('Suzuki Address Playful', 3, 2, 3, 2),
    createData('Vespa S 125 I-Get', 1, 1, 4, 3),
    createData('Bobot', 2, 3, 3, 3),
  ];

  function createDataR(name, r1, r2, r3, r4) {
    return { name, r1, r2, r3, r4 };
  }
  
  const rowsR = [
    createDataR('Honda Vario 125', 0.41702882811415, 0.625543242171224, 0.486664263392288, 0.538815906080325),
    createDataR('Yamaha Mio M3', 0.625543242171224, 0.625543242171224, 0.324442842261525, 0.538815906080325),
    createDataR('Suzuki Address Playful', 0.625543242171224, 0.41702882811415, 0.486664263392288, 0.35921060405355),
    createDataR('Vespa S 125 I-Get', 0.208514414057075, 0.208514414057075, 0.64888568452305, 0.538815906080325),
  ];

  function createDataNormalisasi(name, n1, n2, n3, n4) {
    return { name, n1, n2, n3, n4 };
  }
  
  const rowsN = [
    createDataNormalisasi('Honda Vario 125', 0.834057656228299, 1.87662972651367, 1.45999279017686, 1.61644771824097),
    createDataNormalisasi('Yamaha Mio M3', 1.25108648434245, 1.87662972651367, 0.973328526784575, 1.61644771824097),
    createDataNormalisasi('Suzuki Address Playful', 1.25108648434245, 1.25108648434245, 1.45999279017686, 1.07763181216065),
    createDataNormalisasi('Vespa S 125 I-Get', 0.41702882811415, 0.625543242171224, 1.94665705356915, 1.61644771824097),
  ];

  function createDataA(name, a1, a2, a3, a4) {
    return { name, a1, a2, a3, a4 };
  }
  
  const rowsA = [
    createDataA('A+', 1.25108648434245, 1.87662972651367, 1.94665705356915, 1.61644771824097),
    createDataA('A-', 0.41702882811415, 0.625543242171224, 0.973328526784575, 1.07763181216065),
  ];

  function createDataD(name, d1, d2) {
    return { name, d1, d2 };
  }
  
  const rowsD = [
    createDataD('Honda Vario 125', 0.640901824573327, 1.50542190786866),
    createDataD('Yamaha Mio M3', 0.973328526784575, 1.59724517399883),
    createDataD('Suzuki Address Playful', 0.958367901035091, 1.15056448189673),
    createDataD('Vespa S 125 I-Get', 1.50361882311222, 1.11251561863094),
  ];

  function createDataV(name, v1, rank) {
    return { name, v1, rank };
  }
  
  const rowsV = [
    createDataV('Honda Vario 125', 0.701395546773302, 1),
    createDataV('Yamaha Mio M3', 0.621357471101512, 2),
    createDataV('Suzuki Address Playful', 0.545567269585582, 3),
    createDataV('Vespa S 125 I-Get', 0.425251699943088, 4),
  ];

export default function ProsesTopsis() {
    const classes = useStyles();

    return (
        <div>
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="ti-pencil-alt mr-2"> </i>
                    Perhitungan Topsis
                </CardTitle>
                <CardBody className="">
                    <h4>Menentukan Matriks Skor dari Setiap Alternatif (Matriks X)</h4>
                    <div className="mt-3">
                        <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>Alternatif</TableCell>
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
                    <h4>Menentukan Skor Ternormalisasi dari Masing-Masing Alternatif untuk Tiap Kriteria (rij)</h4>
                    <div className="mt-3">
                        <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>Alternatif</TableCell>
                                    <TableCell align="right">C1</TableCell>
                                    <TableCell align="right">C2</TableCell>
                                    <TableCell align="right">C3</TableCell>
                                    <TableCell align="right">C4</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rowsR.map((row) => (
                                    <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.r1}</TableCell>
                                    <TableCell align="right">{row.r2}</TableCell>
                                    <TableCell align="right">{row.r3}</TableCell>
                                    <TableCell align="right">{row.r4}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                    </div>
                    <h4>Menentukan Matriks Skor Normalisasi Terbobot</h4>
                    <div className="mt-3">
                        <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>Alternatif</TableCell>
                                    <TableCell align="right">C1</TableCell>
                                    <TableCell align="right">C2</TableCell>
                                    <TableCell align="right">C3</TableCell>
                                    <TableCell align="right">C4</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rowsN.map((row) => (
                                    <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.n1}</TableCell>
                                    <TableCell align="right">{row.n2}</TableCell>
                                    <TableCell align="right">{row.n3}</TableCell>
                                    <TableCell align="right">{row.n4}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                    </div>
                    <h4>Menentukan Matriks Solusi Ideal Positif (A+) dan Negatif (A-)</h4>
                    <div className="mt-3">
                        <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell align="right">C1</TableCell>
                                    <TableCell align="right">C2</TableCell>
                                    <TableCell align="right">C3</TableCell>
                                    <TableCell align="right">C4</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rowsA.map((row) => (
                                    <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
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
                    </div>
                    <h4>Menentukan Jarak Tiap Alternatif dari Solusi Ideal Positif (Di+) dan Negatif (Di-)</h4>
                    <div className="mt-3">
                        <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>Alternatif</TableCell>
                                    <TableCell align="right">Di+</TableCell>
                                    <TableCell align="right">Di-</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rowsD.map((row) => (
                                    <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.d1}</TableCell>
                                    <TableCell align="right">{row.d2}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                    </div>
                    <h4>Menentukan Skor Akhir dari Setiap Alternatif (Vi) dan Perangkingan</h4>
                    <div className="mt-3">
                        <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>Alternatif</TableCell>
                                    <TableCell align="right">Vi</TableCell>
                                    <TableCell align="right">Rangking</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rowsV.map((row) => (
                                    <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.v1}</TableCell>
                                    <TableCell align="right">{row.rank}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}
