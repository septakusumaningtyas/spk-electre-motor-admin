import React, { useState } from 'react';
import {
    Alert,
    UncontrolledAlert,
    Card,
    CardBody,
    CardTitle,
    Button,
    Row, Col
} from 'reactstrap';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '50ch',
      },
    },
  }));

export default function HapusKriteria() {
    const classes = useStyles();
    return (
        <div>
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="ti-thumb-up mr-2"> </i>
            Hapus Alternatif
            </CardTitle>
                <CardBody className="">
                    <div className="hapus">
                        <h3>Apakah anda ingin menghapus kriteria ini?</h3>
                    </div>
                    <Row className="mt-3">
                        <Col>
                            <Link className="button-link" to="/kriteria">
                                <Button className="btn" color="danger">Ya</Button>
                            </Link>
                        </Col>
                        <Col>
                            <Link className="button-link" to="/kriteria">
                                <Button className="btn" color="info">Tidak</Button>
                            </Link>
                        </Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </CardBody>
            </Card>
        </div>
    );
}