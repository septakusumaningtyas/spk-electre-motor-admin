import React, { useState,useEffect } from 'react';
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

export default function EditKriteria() {
    const classes = useStyles();
    const [kriteriaList,setKriteriaList] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3001/getkriteria')
            .then((response)=> {
                setKriteriaList(response.data);
            });
    }, []);
    const [newNamaKriteria, setNewNamaKriteria] = useState("");
    const selectKriteria = (id) => {
        Axios.get(`http://localhost:3001/getkriteria/${id}`);
    }
    const updateKriteria = (id) => {
        Axios.put("http://localhost:3001/updatekriteria",{
            nama_kriteria: newNamaKriteria,
        });
        setNewNamaKriteria("");
    };

    return (
        <div>
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="ti-thumb-up mr-2"> </i>
            Edit Kriteria
            </CardTitle>
                <CardBody className="">
                    <div className="form-group">
                        <form className="form" noValidate autoComplete="off">
                            <div>
                                <TextField id="nama" label="Nama Kriteria" variant="outlined" onChange={(e) => {
                                    setNewNamaKriteria(e.target.value);
                                }}/>
                            </div>
                        </form>
                    </div>
                    <Row className="mt-3">
                        <Col>
                            <Link className="button-link" to="/kriteria">
                                <Button className="btn" color="success" onClick={()=> {updateKriteria(selectKriteria.id)}}>Simpan</Button>
                            </Link>
                        </Col>
                        <Col>
                            <Link className="button-link" to="/kriteria">
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
