import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
} from 'reactstrap';

const Feeds = () => {
    return (
        <Card>
            <CardBody>
                <CardTitle>Contains</CardTitle>
                <div className="feed-widget">
                    <ul className="list-style-none feed-body m-0 pb-3">
                        <li className="feed-item">
                            <div className="feed-icon bg-info"><i className="ti-thumb-up"></i></div> Jumlah Alternatif <span className="ml-auto font-20 text-muted">4</span>
                        </li>
                        <li className="feed-item">
                            <div className="feed-icon bg-success"><i className="ti-bookmark-alt"></i></div> Jumlah Kriteria <span className="ml-auto font-20 text-muted">4</span>
                        </li>
                        <li className="feed-item">
                            <div className="feed-icon bg-danger"><i className="ti-user"></i></div> Jumlah User <span className="ml-auto font-20 text-muted">30</span>
                        </li>
                    </ul>
                </div>
            </CardBody>
        </Card>
    );
}

export default Feeds;
