import React, { useState } from 'react';
import {
    Alert,
    UncontrolledAlert,
    Card,
    CardBody,
    CardTitle
} from 'reactstrap';

const Topsis = () => {
    // For Dismiss Button with Alert
    const [visible, setVisible] = useState(true);

    const onDismiss = () => {
        setVisible(false);
    }

    return (
        <div>
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="ti-pencil-alt mr-2"> </i>
            Perhitungan Topsis
          </CardTitle>
                <CardBody className="">
                    <div className="mt-3">
                        
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}

export default Topsis;
