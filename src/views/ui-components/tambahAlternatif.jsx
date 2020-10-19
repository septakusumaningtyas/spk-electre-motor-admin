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

export default function Alternatif() {
    const classes = useStyles();
    return (
        <div>
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="ti-thumb-up mr-2"> </i>
            Tambah Alternatif
            </CardTitle>
                <CardBody className="">
                    <div className="form-group">
                        <form className="form" noValidate autoComplete="off">
                            <div>
                                <TextField id="no-id" label="Nomor ID Alternatif" variant="outlined" />
                            </div><br/>
                            <div>
                                <TextField id="nama" label="Nama Alternatif" variant="outlined" />
                            </div>
                        </form>
                    </div>
                    <Row className="mt-3">
                        <Col>
                            <Button className="btn" color="success">Simpan</Button>
                        </Col>
                        <Col>
                            <Button className="btn" color="danger">
                                <Link className="button-link" to="/alternatif">Kembali</Link>
                            </Button>
                        </Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </CardBody>
            </Card>
        </div>
    );
}
