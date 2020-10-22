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

export default function EditAlternatif() {
    const classes = useStyles();
    return (
        <div>
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="ti-thumb-up mr-2"> </i>
            Edit Alternatif
            </CardTitle>
                <CardBody className="">
                    <div className="form-group">
                        <form className="form" noValidate autoComplete="off">
                            <div>
                                <TextField id="nama" label="Nama Alternatif" variant="outlined" />
                            </div>
                        </form>
                    </div>
                    <Row className="mt-3">
                        <Col>
                            <Link className="button-link" to="/alternatif">
                                <Button className="btn" color="success">Simpan</Button>
                            </Link>
                        </Col>
                        <Col>
                            <Link className="button-link" to="/alternatif">
                                <Button className="btn" color="danger">Kembali</Button>
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
