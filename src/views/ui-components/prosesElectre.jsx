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
  
  function createDataTernormalisasi(no, r1, r2, r3, r4) {
    return { no, r1, r2, r3, r4 };
  }

  function createDataV(no, v1, v2, v3, v4) {
    return { no, v1, v2, v3, v4 };
  }

  function createDataCI(no, ci1, ci2, ci3, ci4) {
    return { no, ci1, ci2, ci3, ci4 };
  }

  function createDataDI(no, di1, di2, di3, di4) {
    return { no, di1, di2, di3, di4 };
  }

  function createDataConcordance(no, co1, co2, co3, co4) {
    return { no, co1, co2, co3, co4 };
  }

  function createDataDisordance(no, di1, di2, di3, di4) {
    return { no, di1, di2, di3, di4 };
  }

  function createDataF(no, f1, f2, f3, f4) {
    return { no, f1, f2, f3, f4 };
  }

  function createDataG(no, g1, g2, g3, g4) {
    return { no, g1, g2, g3, g4 };
  }

  function createDataCD(no, cd1, cd2, cd3, cd4) {
    return { no, cd1, cd2, cd3, cd4 };
  }

  function createDataDD(no, dd1, dd2, dd3, dd4) {
    return { no, dd1, dd2, dd3, dd4 };
  }

  function createDataP(no, p1, p2, p3, p4) {
    return { no, p1, p2, p3, p4 };
  }

  function createDataPK(no, pk1, pk2, pk3, pk4) {
    return { no, pk1, pk2, pk3, pk4 };
  }

  function createDataRK(no, nama) {
    return { no, nama };
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

  const rowsR = [
    createDataTernormalisasi('1', 0.41702882811415, 0.62554324217122, 0.48666426339229, 0.53881590608032),
    createDataTernormalisasi('2', 0.62554324217122, 0.62554324217122, 0.32444284226153, 0.53881590608032),
    createDataTernormalisasi('3', 0.62554324217122, 0.41702882811415, 0.48666426339229, 0.35921060405355),
    createDataTernormalisasi('4', 0.20851441405707, 0.20851441405707, 0.64888568452305, 0.53881590608032),
  ];

  const rowsV = [
    createDataV('1', 0.8340576562283, 1.8766297265137, 1.4599927901769, 1.616447718241),
    createDataV('2', 1.2510864843424, 1.8766297265137, 0.97332852678458, 1.616447718241),
    createDataV('3', 1.2510864843424, 1.2510864843424, 1.4599927901769, 1.0776318121606),
    createDataV('4', 0.41702882811415, 0.62554324217122, 1.9466570535692, 1.616447718241),
  ];

  const rowsCI = [
    createDataCI('1', '-', '2, 3, 4', '2, 3, 4', '1, 2, 4'),
    createDataCI('2', '1, 2, 4', '-', '1, 2, 4', '1, 2, 4'),
    createDataCI('3', '1, 3', '1, 3', '-', '1, 2'),
    createDataCI('4', '3, 4', '3, 4', '3, 4', '-'),
  ];

  const rowsDI = [
    createDataDI('1', '-', '1', '1', '3'),
    createDataDI('2', '3', '-', '3', '3'),
    createDataDI('3', '2, 4', '2, 4', '-', '3, 4'),
    createDataDI('4', '1, 2', '1, 2', '1, 2', '-'),
  ];

  const rowsConcordance = [
    createDataConcordance('1', '-', 9, 9, 8),
    createDataConcordance('2', 8, '-', 8, 8),
    createDataConcordance('3', 5, 5, '-', 5),
    createDataConcordance('4', 6, 6, 6, '-'),
  ];

  const rowsDisordance = [
    createDataDisordance('1', '-', 0.8569127825562, 0.66666666666667, 0.38899330260775),
    createDataDisordance('2', 1, '-', 0.7779866052155, 0.7779866052155),
    createDataDisordance('3', 1, 1, '-', 0.64601757691058),
    createDataDisordance('4', 1, 1, 1, '-'),
  ];

  const rowsF = [
    createDataF('1', 0, 1, 1, 1),
    createDataF('2', 1, 0, 1, 1),
    createDataF('3', 0, 0, 0, 0),
    createDataF('4', 0, 0, 0, 0),
  ];

  const rowsG = [
    createDataG('1', 0, 1, 0, 0),
    createDataG('2', 1, 0, 0, 0),
    createDataG('3', 1, 1, 0, 0),
    createDataG('4', 1, 1, 1, 0),
  ];

  const rowsCD = [
    createDataCD('1', 0, 8, 8, 7),
    createDataCD('2', 7, 0, 7, 7),
    createDataCD('3', 5, 5, 0, 5),
    createDataCD('4', 6, 6, 6, 0),
  ];

  const rowsDD = [
    createDataDD('1', 0, -0.143087217, 0.666666667, 0.388993303),
    createDataDD('2', 0, 0, 0.777986605, 0.777986605),
    createDataDD('3', 0, 0, 0, 0.646017577),
    createDataDD('4', 0, 0, 0, 0),
  ];

  const rowsP = [
    createDataP('1', 0, -0.017571618, 0.090909091, 0.058840252),
    createDataP('2', 0, 0, 0.125037758, 0.125037758),
    createDataP('3', 0, 0, 0, 0.148373952),
    createDataP('4', 0, 0, 0, 0),
  ];

  const rowsPK = [
    createDataPK('Pk', 0.044059242, 0.083358505, 0.049457984, 0),
  ];

  const rowsRanking = [
    createDataRK(1 , 'Yamaha Mio M3 125 CC'),
    createDataRK(2 , 'Suzuki Address Playful'),
    createDataRK(3 , 'Honda Vario 125 CC'),
    createDataRK(4 , 'Vespa S 125 I-GET'),
  ];

export default function ProsesElectre() {
    const classes = useStyles();

    return (
        <div>
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="ti-pencil-alt mr-2"> </i>
                    Perhitungan Electre - Topsis
                </CardTitle>
                <CardBody className="">
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
                    </div>
                    <h4>Perbandingan Berpasangan Ternormalisasi (R)</h4>
                    <div className="mt-3">
                        <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell align="right">Harga</TableCell>
                                    <TableCell align="right">Konsumsi BBM</TableCell>
                                    <TableCell align="right">Kapasitas Tangki</TableCell>
                                    <TableCell align="right">Popularitas</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rowsR.map((row) => (
                                    <TableRow key={row.no}>
                                    <TableCell component="th" scope="row">
                                        {row.no}
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
                    <h4>Menentukan Bobot tiap-tiap Kriteria (W)</h4>
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
                    <h4>Membentuk Matrik Preferensi (V)</h4>
                    <div className="mt-3">
                        <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell align="right">Harga</TableCell>
                                    <TableCell align="right">Konsumsi BBM</TableCell>
                                    <TableCell align="right">Kapasitas Tangki</TableCell>
                                    <TableCell align="right">Popularitas</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rowsV.map((row) => (
                                    <TableRow key={row.no}>
                                    <TableCell component="th" scope="row">
                                        {row.no}
                                    </TableCell>
                                    <TableCell align="right">{row.v1}</TableCell>
                                    <TableCell align="right">{row.v2}</TableCell>
                                    <TableCell align="right">{row.v3}</TableCell>
                                    <TableCell align="right">{row.v4}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                    </div>
                    <h4>Menentukan Concordance Index (Ckl)</h4>
                    <div className="mt-3">
                        <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell align="right">Honda Vario</TableCell>
                                    <TableCell align="right">Yamaha Mio M3</TableCell>
                                    <TableCell align="right">Suzuki Address Playful</TableCell>
                                    <TableCell align="right">Vespa S-125 I-Get</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rowsCI.map((row) => (
                                    <TableRow key={row.no}>
                                    <TableCell component="th" scope="row">
                                        {row.no}
                                    </TableCell>
                                    <TableCell align="right">{row.ci1}</TableCell>
                                    <TableCell align="right">{row.ci2}</TableCell>
                                    <TableCell align="right">{row.ci3}</TableCell>
                                    <TableCell align="right">{row.ci4}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                    </div>
                    <h4>Menentukan Discordance Index (Dkl)</h4>
                    <div className="mt-3">
                        <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell align="right">Honda Vario</TableCell>
                                    <TableCell align="right">Yamaha Mio M3</TableCell>
                                    <TableCell align="right">Suzuki Address Playful</TableCell>
                                    <TableCell align="right">Vespa S-125 I-Get</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rowsDI.map((row) => (
                                    <TableRow key={row.no}>
                                    <TableCell component="th" scope="row">
                                        {row.no}
                                    </TableCell>
                                    <TableCell align="right">{row.di1}</TableCell>
                                    <TableCell align="right">{row.di2}</TableCell>
                                    <TableCell align="right">{row.di3}</TableCell>
                                    <TableCell align="right">{row.di4}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                    </div>
                    <h4>Membentuk Matriks Concordance (C)</h4>
                    <h6>Threshold c: 6.9166666666667</h6>
                    <div className="mt-3">
                        <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell align="right">Honda Vario</TableCell>
                                    <TableCell align="right">Yamaha Mio M3</TableCell>
                                    <TableCell align="right">Suzuki Address Playful</TableCell>
                                    <TableCell align="right">Vespa S-125 I-Get</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rowsConcordance.map((row) => (
                                    <TableRow key={row.no}>
                                    <TableCell component="th" scope="row">
                                        {row.no}
                                    </TableCell>
                                    <TableCell align="right">{row.co1}</TableCell>
                                    <TableCell align="right">{row.co2}</TableCell>
                                    <TableCell align="right">{row.co3}</TableCell>
                                    <TableCell align="right">{row.co4}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                    </div>
                    <h4>Membentuk Matriks Discordance (D)</h4>
                    <h6>Threshold d: 0.84288029493102</h6>
                    <div className="mt-3">
                        <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell align="right">Honda Vario</TableCell>
                                    <TableCell align="right">Yamaha Mio M3</TableCell>
                                    <TableCell align="right">Suzuki Address Playful</TableCell>
                                    <TableCell align="right">Vespa S-125 I-Get</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rowsDisordance.map((row) => (
                                    <TableRow key={row.no}>
                                    <TableCell component="th" scope="row">
                                        {row.no}
                                    </TableCell>
                                    <TableCell align="right">{row.di1}</TableCell>
                                    <TableCell align="right">{row.di2}</TableCell>
                                    <TableCell align="right">{row.di3}</TableCell>
                                    <TableCell align="right">{row.di4}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                    </div>
                    <h4>Membentuk Matrik Concordance Dominan(F)</h4>
                    <div className="mt-3">
                        <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell align="right">Honda Vario</TableCell>
                                    <TableCell align="right">Yamaha Mio M3</TableCell>
                                    <TableCell align="right">Suzuki Address Playful</TableCell>
                                    <TableCell align="right">Vespa S-125 I-Get</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rowsF.map((row) => (
                                    <TableRow key={row.no}>
                                    <TableCell component="th" scope="row">
                                        {row.no}
                                    </TableCell>
                                    <TableCell align="right">{row.f1}</TableCell>
                                    <TableCell align="right">{row.f2}</TableCell>
                                    <TableCell align="right">{row.f3}</TableCell>
                                    <TableCell align="right">{row.f4}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                    </div>
                    <h4>Membentuk Matrik Discordance Dominan(G)</h4>
                    <div className="mt-3">
                        <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell align="right">Honda Vario</TableCell>
                                    <TableCell align="right">Yamaha Mio M3</TableCell>
                                    <TableCell align="right">Suzuki Address Playful</TableCell>
                                    <TableCell align="right">Vespa S-125 I-Get</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rowsG.map((row) => (
                                    <TableRow key={row.no}>
                                    <TableCell component="th" scope="row">
                                        {row.no}
                                    </TableCell>
                                    <TableCell align="right">{row.g1}</TableCell>
                                    <TableCell align="right">{row.g2}</TableCell>
                                    <TableCell align="right">{row.g3}</TableCell>
                                    <TableCell align="right">{row.g4}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                    </div>
                    <h4>Membentuk Matrik Concordance Dominan c*</h4>
                    <div className="mt-3">
                        <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell align="right">Honda Vario</TableCell>
                                    <TableCell align="right">Yamaha Mio M3</TableCell>
                                    <TableCell align="right">Suzuki Address Playful</TableCell>
                                    <TableCell align="right">Vespa S-125 I-Get</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rowsCD.map((row) => (
                                    <TableRow key={row.no}>
                                    <TableCell component="th" scope="row">
                                        {row.no}
                                    </TableCell>
                                    <TableCell align="right">{row.cd1}</TableCell>
                                    <TableCell align="right">{row.cd2}</TableCell>
                                    <TableCell align="right">{row.cd3}</TableCell>
                                    <TableCell align="right">{row.cd4}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                    </div>
                    <h4>Membentuk Matrik Disordance Dominan d'</h4>
                    <div className="mt-3">
                        <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell align="right">Honda Vario</TableCell>
                                    <TableCell align="right">Yamaha Mio M3</TableCell>
                                    <TableCell align="right">Suzuki Address Playful</TableCell>
                                    <TableCell align="right">Vespa S-125 I-Get</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rowsDD.map((row) => (
                                    <TableRow key={row.no}>
                                    <TableCell component="th" scope="row">
                                        {row.no}
                                    </TableCell>
                                    <TableCell align="right">{row.dd1}</TableCell>
                                    <TableCell align="right">{row.dd2}</TableCell>
                                    <TableCell align="right">{row.dd3}</TableCell>
                                    <TableCell align="right">{row.dd4}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                    </div>
                    <h4>Membentuk Matrik Agregat Dominan (P)</h4>
                    <div className="mt-3">
                        <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell align="right">Honda Vario</TableCell>
                                    <TableCell align="right">Yamaha Mio M3</TableCell>
                                    <TableCell align="right">Suzuki Address Playful</TableCell>
                                    <TableCell align="right">Vespa S-125 I-Get</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rowsP.map((row) => (
                                    <TableRow key={row.no}>
                                    <TableCell component="th" scope="row">
                                        {row.no}
                                    </TableCell>
                                    <TableCell align="right">{row.p1}</TableCell>
                                    <TableCell align="right">{row.p2}</TableCell>
                                    <TableCell align="right">{row.p3}</TableCell>
                                    <TableCell align="right">{row.p4}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                    </div>
                    <h4>Membentuk Alternatif Terbaik (Pk)</h4>
                    <div className="mt-3">
                        <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell align="right">Honda Vario</TableCell>
                                    <TableCell align="right">Yamaha Mio M3</TableCell>
                                    <TableCell align="right">Suzuki Address Playful</TableCell>
                                    <TableCell align="right">Vespa S-125 I-Get</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rowsPK.map((row) => (
                                    <TableRow key={row.no}>
                                    <TableCell component="th" scope="row">
                                        {row.no}
                                    </TableCell>
                                    <TableCell align="right">{row.pk1}</TableCell>
                                    <TableCell align="right">{row.pk2}</TableCell>
                                    <TableCell align="right">{row.pk3}</TableCell>
                                    <TableCell align="right">{row.pk4}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                    </div>
                    <h4>Hasil Perangkingan Sepeda Motor</h4>
                    <div className="mt-3">
                        <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>Rangking No</TableCell>
                                    <TableCell align="right">Nama Alternatif</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rowsRanking.map((row) => (
                                    <TableRow key={row.no}>
                                    <TableCell component="th" scope="row">
                                        {row.no}
                                    </TableCell>
                                    <TableCell align="right">{row.nama}</TableCell>
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
