import React, {useState, useEffect} from "react";
import {
    Card,
    CardBody,
    CardTitle,
} from 'reactstrap';
import {Link} from 'react-router-dom';
import Axios from 'axios';

export default function Feed() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [logoutStatus, setLogoutStatus] = useState("");

    Axios.defaults.withCredentials = true;
    const logout = () => {
        Axios.get("http://localhost:3001/logout", {
          username: username,
          password: password,
        }).then((response) => {
          if(response.data.message)
          {
            setLogoutStatus(response.data.message);
          }
        });
    };
    
    useEffect(() => {
        Axios.get("http://localhost:3001/logout")
          .then((response) => {
            if(response.data.loggedIn == false)
            {
              setLogoutStatus(response.data.user[0].username);
            }
          });
    }, []);

    const [alternatifList,setAlternatifList] = useState([]);
    const [kriteriaList,setKriteriaList] = useState([]);
    const [penggunaList,setPenggunaList] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3001/getalternatif')
            .then((response)=> {
                setAlternatifList(response.data);
            });
    }, []);
    useEffect(() => {
        Axios.get('http://localhost:3001/getkriteria')
            .then((response)=> {
                setKriteriaList(response.data);
            });
    }, []);
    useEffect(() => {
        Axios.get('http://localhost:3001/getpengguna')
            .then((response)=> {
                setPenggunaList(response.data);
            });
    }, []);

    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>Contains</CardTitle>
                    <div className="feed-widget">
                        <ul className="list-style-none feed-body m-0 pb-3">
                            <li className="feed-item">
                                <div className="feed-icon bg-info"><i className="ti-thumb-up"></i></div> Jumlah Alternatif <span className="ml-auto font-20 text-muted">{alternatifList.length}</span>
                            </li>
                            <li className="feed-item">
                                <div className="feed-icon bg-success"><i className="ti-bookmark-alt"></i></div> Jumlah Kriteria <span className="ml-auto font-20 text-muted">{kriteriaList.length}</span>
                            </li>
                            <li className="feed-item">
                                <div className="feed-icon bg-danger"><i className="ti-user"></i></div> Jumlah User <span className="ml-auto font-20 text-muted">{penggunaList.length}</span>
                            </li>
                            <li className="feed-item">
                                <div className="feed-icon bg-danger"><i className="ti-user"></i></div> Logout <span className="ml-auto font-20 text-muted">
                                    <Link to="/registration">
                                        <button type="submit" className="btn btn-danger btn-block" onClick={{logout}}>Logout</button>
                                    </Link>
                                </span>
                            </li>
                        </ul>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}