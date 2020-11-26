import React, { useState, useEffect } from 'react';
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
import Axios from 'axios';

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
    const [alternatifList,setAlternatifList] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3001/getalternatif')
            .then((response)=> {
                setAlternatifList(response.data);
            });
    }, []);
    const [newNamaAlternatif, setNewNamaAlternatif] = useState("");
    const selectAlternatif = (id) => {
        Axios.get(`http://localhost:3001/getalternatif/${id}`);
    }
    const updateAlternatif = (id) => {
        Axios.put("http://localhost:3001/updatealternatif",{
            nama_alternatif: newNamaAlternatif,
        });
        setNewNamaAlternatif("");
    };

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
                                <TextField id="nama" label="Nama Alternatif" variant="outlined" onChange={(e) => {
                                    setNewNamaAlternatif(e.target.value);
                                }}/>
                            </div>
                        </form>
                    </div>
                    <Row className="mt-3">
                        <Col>
                            <Link className="button-link" to="/alternatif">
                                <Button className="btn" color="success" onClick={()=> {updateAlternatif(selectAlternatif.id)}}>Simpan</Button>
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
