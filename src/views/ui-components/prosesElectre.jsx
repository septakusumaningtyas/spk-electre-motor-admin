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

export default function ProsesElectre() {
    const classes = useStyles();

    const bobot1 = 2, bobot2 = 3, bobot3 = 3, bobot4 = 3;
    const a1 = 'Honda Vario 125 CC', a2 = 'Yamaha Mio M3 125 CC', a3 = 'Suzuki Address Playful', a4 = 'Vespa S-125 I-Get';
    const a1k1 = 2, a1k2 = 3, a1k3 = 3, a1k4 = 3;
    const a2k1 = 3, a2k2 = 3, a2k3 = 2, a2k4 = 3;
    const a3k1 = 3, a3k2 = 2, a3k3 = 3, a3k4 = 2;
    const a4k1 = 1, a4k2 = 1, a4k3 = 4, a4k4 = 3;
    const r1k1 = a1k1/Math.sqrt((Math.pow(a1k1,2))+(Math.pow(a2k1,2))+(Math.pow(a3k1,2))+(Math.pow(a4k1,2))), 
          r1k2 = a1k2/Math.sqrt((Math.pow(a1k2,2))+(Math.pow(a2k2,2))+(Math.pow(a3k2,2))+(Math.pow(a4k2,2))), 
          r1k3 = a1k3/Math.sqrt((Math.pow(a1k3,2))+(Math.pow(a2k3,2))+(Math.pow(a3k3,2))+(Math.pow(a4k3,2))), 
          r1k4 = a1k4/Math.sqrt((Math.pow(a1k4,2))+(Math.pow(a2k4,2))+(Math.pow(a3k4,2))+(Math.pow(a4k4,2)));

    const r2k1 = a2k1/Math.sqrt((Math.pow(a1k1,2))+(Math.pow(a2k1,2))+(Math.pow(a3k1,2))+(Math.pow(a4k1,2))), 
          r2k2 = a2k2/Math.sqrt((Math.pow(a1k2,2))+(Math.pow(a2k2,2))+(Math.pow(a3k2,2))+(Math.pow(a4k2,2))), 
          r2k3 = a2k3/Math.sqrt((Math.pow(a1k3,2))+(Math.pow(a2k3,2))+(Math.pow(a3k3,2))+(Math.pow(a4k3,2))), 
          r2k4 = a2k4/Math.sqrt((Math.pow(a1k4,2))+(Math.pow(a2k4,2))+(Math.pow(a3k4,2))+(Math.pow(a4k4,2)));

    const r3k1 = a3k1/Math.sqrt((Math.pow(a1k1,2))+(Math.pow(a2k1,2))+(Math.pow(a3k1,2))+(Math.pow(a4k1,2))), 
          r3k2 = a3k2/Math.sqrt((Math.pow(a1k2,2))+(Math.pow(a2k2,2))+(Math.pow(a3k2,2))+(Math.pow(a4k2,2))), 
          r3k3 = a3k3/Math.sqrt((Math.pow(a1k3,2))+(Math.pow(a2k3,2))+(Math.pow(a3k3,2))+(Math.pow(a4k3,2))), 
          r3k4 = a3k4/Math.sqrt((Math.pow(a1k4,2))+(Math.pow(a2k4,2))+(Math.pow(a3k4,2))+(Math.pow(a4k4,2)));

    const r4k1 = a4k1/Math.sqrt((Math.pow(a1k1,2))+(Math.pow(a2k1,2))+(Math.pow(a3k1,2))+(Math.pow(a4k1,2))), 
          r4k2 = a4k2/Math.sqrt((Math.pow(a1k2,2))+(Math.pow(a2k2,2))+(Math.pow(a3k2,2))+(Math.pow(a4k2,2))), 
          r4k3 = a4k3/Math.sqrt((Math.pow(a1k3,2))+(Math.pow(a2k3,2))+(Math.pow(a3k3,2))+(Math.pow(a4k3,2))), 
          r4k4 = a4k4/Math.sqrt((Math.pow(a1k4,2))+(Math.pow(a2k4,2))+(Math.pow(a3k4,2))+(Math.pow(a4k4,2)));

    const v1k1 = r1k1*bobot1, v1k2 = r1k2*bobot2, v1k3 = r1k3*bobot3, v1k4 = r1k4*bobot4;
    const v2k1 = r2k1*bobot1, v2k2 = r2k2*bobot2, v2k3 = r2k3*bobot3, v2k4 = r2k4*bobot4;
    const v3k1 = r3k1*bobot1, v3k2 = r3k2*bobot2, v3k3 = r3k3*bobot3, v3k4 = r3k4*bobot4;
    const v4k1 = r4k1*bobot1, v4k2 = r4k2*bobot2, v4k3 = r4k3*bobot3, v4k4 = r4k4*bobot4;
    const ci1a1 = '-', ci1a2 = '2, 3, 4', ci1a3 = '2, 3, 4', ci1a4 = '1, 2, 4';
    const ci2a1 = '1, 2, 4', ci2a2 = '-', ci2a3 = '1, 2, 4', ci2a4 = '1, 2, 4';
    const ci3a1 = '1, 3', ci3a2 = '1, 3', ci3a3 = '-', ci3a4 = '1, 2';
    const ci4a1 = '3, 4', ci4a2 = '3, 4', ci4a3 = '3, 4', ci4a4 = '-';
    const di1a1 = '-', di1a2 = '1', di1a3 = '1', di1a4 = '3';
    const di2a1 = '3', di2a2 = '-', di2a3 = '3', di2a4 = '3';
    const di3a1 = '2, 4', di3a2 = '2, 4', di3a3 = '-', di3a4 = '3, 4';
    const di4a1 = '1, 2', di4a2 = '1, 2', di4a3 = '1, 2', di4a4 = '-';
    const c1a1 = 0, c1a2 = bobot2+bobot3+bobot4, c1a3 = bobot2+bobot3+bobot4, c1a4 = bobot1+bobot2+bobot4;
    const c2a1 = bobot1+bobot2+bobot4, c2a2 = 0, c2a3 = bobot1+bobot2+bobot4, c2a4 = bobot1+bobot2+bobot4;
    const c3a1 = bobot1+bobot3, c3a2 = bobot1+bobot3, c3a3 = 0, c3a4 = bobot1+bobot2;
    const c4a1 = bobot3+bobot4, c4a2 = bobot3+bobot4, c4a3 = bobot3+bobot4, c4a4 = 0;
    
    const d1a1 = 0, 
          d1a2 = Math.max(Math.abs(v1k1-v2k1))/Math.max(Math.abs(v1k1-v2k1),Math.abs(v1k2-v2k2),Math.abs(v1k3-v2k3),Math.abs(v1k4-v2k4)), 
          d1a3 = Math.max(Math.abs(v1k1-v3k1))/Math.max(Math.abs(v1k1-v3k1),Math.abs(v1k2-v3k2),Math.abs(v1k3-v3k3),Math.abs(v1k4-v3k4)), 
          d1a4 = Math.max(Math.abs(v1k3-v4k3))/Math.max(Math.abs(v1k1-v4k1),Math.abs(v1k2-v4k2),Math.abs(v1k3-v4k3),Math.abs(v1k4-v4k4));

    const d2a1 = Math.max(Math.abs(v2k3-v1k3))/Math.max(Math.abs(v2k1-v1k1),Math.abs(v2k2-v1k2),Math.abs(v2k3-v1k3),Math.abs(v2k4-v1k4)), 
          d2a2 = 0, 
          d2a3 = Math.max(Math.abs(v2k3-v3k3))/Math.max(Math.abs(v2k1-v3k1),Math.abs(v2k2-v3k2),Math.abs(v2k3-v3k3),Math.abs(v2k4-v3k4)), 
          d2a4 = Math.max(Math.abs(v2k3-v4k3))/Math.max(Math.abs(v2k1-v4k1),Math.abs(v2k2-v4k2),Math.abs(v2k3-v4k3),Math.abs(v2k4-v4k4));

    const d3a1 = Math.max(Math.abs(v3k2-v1k2),Math.abs(v3k4-v1k4))/Math.max(Math.abs(v3k1-v1k1),Math.abs(v3k2-v1k2),Math.abs(v3k3-v1k3),Math.abs(v3k4-v1k4)), 
          d3a2 = Math.max(Math.abs(v3k2-v2k2),Math.abs(v3k4-v2k4))/Math.max(Math.abs(v3k1-v2k1),Math.abs(v3k2-v2k2),Math.abs(v3k3-v2k3),Math.abs(v3k4-v2k4)), 
          d3a3 = 0, 
          d3a4 = Math.max(Math.abs(v3k3-v4k3),Math.abs(v3k4-v4k4))/Math.max(Math.abs(v3k1-v4k1),Math.abs(v3k2-v4k2),Math.abs(v3k3-v4k3),Math.abs(v3k4-v4k4));

    const d4a1 = Math.max(Math.abs(v4k1-v1k1),Math.abs(v4k2-v1k2))/Math.max(Math.abs(v4k1-v1k1),Math.abs(v4k2-v1k2),Math.abs(v4k3-v1k3),Math.abs(v4k4-v1k4)), 
          d4a2 = Math.max(Math.abs(v4k1-v2k1),Math.abs(v4k2-v2k2))/Math.max(Math.abs(v4k1-v2k1),Math.abs(v4k2-v2k2),Math.abs(v4k3-v2k3),Math.abs(v4k4-v2k4)), 
          d4a3 = Math.max(Math.abs(v4k1-v3k1),Math.abs(v4k2-v3k2))/Math.max(Math.abs(v4k1-v3k1),Math.abs(v4k2-v3k2),Math.abs(v4k3-v3k3),Math.abs(v4k4-v3k4)), 
          d4a4 = 0;
    const c = (c1a2+c1a3+c1a4+c2a1+c2a3+c2a4+c3a1+c3a2+c3a4+c4a1+c4a2+c4a3)/(4*(4-1));
    const d = (d1a2+d1a3+d1a4+d2a1+d2a3+d2a4+d3a1+d3a2+d3a4+d4a1+d4a2+d4a3)/(4*(4-1));
    const f1a1=0,f1a2=1,f1a3=1,f1a4=1; const f2a1=1,f2a2=0,f2a3=1,f2a4=1; const f3a1=0,f3a2=0,f3a3=0,f3a4=0; const f4a1=0,f4a2=0,f4a3=0,f4a4=0;
    const g1a1=0,g1a2=1,g1a3=0,g1a4=0; const g2a1=1,g2a2=0,g2a3=0,g2a4=0; const g3a1=1,g3a2=1,g3a3=0,g3a4=0; const g4a1=1,g4a2=1,g4a3=1,g4a4=0;
    const cd1a1 = c1a1-f1a1, cd1a2 = c1a2-f1a2, cd1a3 = c1a3-f1a3, cd1a4 = c1a4-f1a4;
    const cd2a1 = c2a1-f2a1, cd2a2 = c2a2-f2a2, cd2a3 = c2a3-f2a3, cd2a4 = c2a4-f2a4;
    const cd3a1 = c3a1-f3a1, cd3a2 = c3a2-f3a2, cd3a3 = c3a3-f3a3, cd3a4 = c3a4-f3a4;
    const cd4a1 = c4a1-f4a1, cd4a2 = c4a2-f4a2, cd4a3 = c4a3-f4a3, cd4a4 = c4a4-f4a4;
    const dd1a1 = d1a1-g1a1, dd1a2 = d1a2-g1a2, dd1a3 = d1a3-g1a3, dd1a4 = d1a4-g1a4;
    const dd2a1 = d2a1-g2a1, dd2a2 = d2a2-g2a2, dd2a3 = d2a3-g2a3, dd2a4 = d2a4-g2a4;
    const dd3a1 = d3a1-g3a1, dd3a2 = d3a2-g3a2, dd3a3 = d3a3-g3a3, dd3a4 = d3a4-g3a4;
    const dd4a1 = d4a1-g4a1, dd4a2 = d4a2-g4a2, dd4a3 = d4a3-g4a3, dd4a4 = d4a4-g4a4;
    const p1a1 = 0, p1a2 = dd1a2/(cd1a2-dd1a2), p1a3 = dd1a3/(cd1a3-dd1a3), p1a4 = dd1a4/(cd1a4-dd1a4);
    const p2a1 = dd2a1/(cd2a1-dd2a1), p2a2=0, p2a3 = dd2a3/(cd2a3-dd2a3), p2a4 = dd2a4/(cd2a4-dd2a4);
    const p3a1 = dd3a1/(cd3a1-dd3a1), p3a2 = dd3a2/(cd3a2-dd3a2), p3a3=0, p3a4 = dd3a4/(cd3a4-dd3a4);
    const p4a1 = dd4a1/(cd4a1-dd4a1), p4a2 = dd4a2/(cd4a2-dd4a2), p4a3 = dd4a3/(cd4a3-dd4a3), p4a4 = 0;
    const pk1 = (p1a1+p1a2+p1a3+p1a4)/(4-1),  
          pk2 = (p2a1+p2a2+p2a3+p2a4)/(4-1), 
          pk3 = (p3a1+p3a2+p3a3+p3a4)/(4-1), 
          pk4 = (p4a1+p4a2+p4a3+p4a4)/(4-1);
    const rank1 = a2, rank2 = a3, rank3 = a1, rank4 = a4;

    const rows = [
        createData('C1', bobot1, 0, 0, 0),
        createData('C2', 0, bobot2, 0, 0),
        createData('C3', 0, 0, bobot3, 0),
        createData('C4', 0, 0, 0, bobot4),
      ];
    
      const rowsA = [
        createDataAlternatif(a1, a1k1, a1k2, a1k3, a1k4),
        createDataAlternatif(a2, a2k1, a2k2, a2k3, a2k4),
        createDataAlternatif(a3, a3k1, a3k2, a3k3, a3k4),
        createDataAlternatif(a4, a4k1, a4k2, a4k3, a4k4),
      ];
    
      const rowsR = [
        createDataTernormalisasi('1', r1k1, r1k2, r1k3, r1k4),
        createDataTernormalisasi('2', r2k1, r2k2, r2k3, r2k4),
        createDataTernormalisasi('3', r3k1, r3k2, r3k3, r3k4),
        createDataTernormalisasi('4', r4k1, r4k2, r4k3, r4k4),
      ];
    
      const rowsV = [
        createDataV('1', v1k1, v1k2, v1k3, v1k4),
        createDataV('2', v2k1, v2k2, v2k3, v2k4),
        createDataV('3', v3k1, v3k2, v3k3, v3k4),
        createDataV('4', v4k1, v4k2, v4k3, v4k4),
      ];
    
      const rowsCI = [
        createDataCI('1', ci1a1, ci1a2, ci1a3, ci1a4),
        createDataCI('2', ci2a1, ci2a2, ci2a3, ci2a4),
        createDataCI('3', ci3a1, ci3a2, ci3a3, ci3a4),
        createDataCI('4', ci4a1, ci4a2, ci4a3, ci4a4),
      ];
    
      const rowsDI = [
        createDataDI('1', di1a1, di1a2, di1a3, di1a4),
        createDataDI('2', di2a1, di2a2, di2a3, di2a4),
        createDataDI('3', di3a1, di3a2, di3a3, di3a4),
        createDataDI('4', di4a1, di4a2, di4a3, di4a4),
      ];
    
      const rowsConcordance = [
        createDataConcordance('1', c1a1, c1a2, c1a3, c1a4),
        createDataConcordance('2', c2a1, c2a2, c2a3, c2a4),
        createDataConcordance('3', c3a1, c3a2, c3a3, c3a4),
        createDataConcordance('4', c4a1, c4a2, c4a3, c4a4),
      ];
    
      const rowsDisordance = [
        createDataDisordance('1', d1a1, d1a2, d1a3, d1a4),
        createDataDisordance('2', d2a1, d2a2, d2a3, d2a4),
        createDataDisordance('3', d3a1, d3a2, d3a3, d3a4),
        createDataDisordance('4', d4a1, d4a2, d4a3, d4a4),
      ];
    
      const rowsF = [
        createDataF('1', f1a1, f1a2, f1a3, f1a4),
        createDataF('2', f2a1, f2a2, f2a3, f2a4),
        createDataF('3', f3a1, f3a2, f3a3, f3a4),
        createDataF('4', f4a1, f4a2, f4a3, f4a4),
      ];
    
      const rowsG = [
        createDataG('1', g1a1, g1a2, g1a3, g1a4),
        createDataG('2', g2a1, g2a2, g2a3, g2a4),
        createDataG('3', g3a1, g3a2, g3a3, g3a4),
        createDataG('4', g4a1, g4a2, g4a3, g4a4),
      ];
    
      const rowsCD = [
        createDataCD('1', cd1a1, cd1a2, cd1a3, cd1a4),
        createDataCD('2', cd2a1, cd2a2, cd2a3, cd2a4),
        createDataCD('3', cd3a1, cd3a2, cd3a3, cd3a4),
        createDataCD('4', cd4a1, cd4a2, cd4a3, cd4a4),
      ];
    
      const rowsDD = [
        createDataDD('1', dd1a1, dd1a2, dd1a3, dd1a4),
        createDataDD('2', dd2a1, dd2a2, dd2a3, dd2a4),
        createDataDD('3', dd3a1, dd3a2, dd3a3, dd3a4),
        createDataDD('4', dd4a1, dd4a2, dd4a3, dd4a4),
      ];
    
      const rowsP = [
        createDataP('1', p1a1, p1a2, p1a3, p1a4),
        createDataP('2', p2a1, p2a2, p2a3, p2a4),
        createDataP('3', p3a1, p3a2, p3a3, p3a4),
        createDataP('4', p4a1, p4a2, p4a3, p4a4),
      ];
    
      const rowsPK = [
        createDataPK('Pk', pk1, pk2, pk3, pk4),
      ];
    
      const rowsRanking = [
        createDataRK(1 , rank1),
        createDataRK(2 , rank2),
        createDataRK(3 , rank3),
        createDataRK(4 , rank4),
      ];

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
                    <h6>Threshold c: {c}</h6>
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
                    <h6>Threshold d: {d}</h6>
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
                                    <TableCell align="left">Nama Alternatif</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rowsRanking.map((row) => (
                                    <TableRow key={row.no}>
                                    <TableCell component="th" scope="row">
                                        {row.no}
                                    </TableCell>
                                    <TableCell align="left">{row.nama}</TableCell>
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
