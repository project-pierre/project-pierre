import React, {useState} from 'react';
import {Col, Container, Row} from 'react-bootstrap';

const Presentation = () => {
    const [data, setData] = useState({
        'title': 'Project Pierre',
        'subtitle': 'Scikit-Pierre and Pierre-In-Frame',
        'text': 'A Python library and framework for post-processing recommendation'
    })

    return (
        <Container fluid>
            <Container className="first-section-padding">
                <Row>
                    <img
                        alt=""
                        src="/logo-orange.svg"
                        width="240"
                        height="240"
                    />{' '}
                </Row>
                <Row className="title-padding color-purple">
                    <h2>{data.subtitle}</h2>
                </Row>
                <Row className="title-padding">
                    <h3>{data.text}</h3>
                </Row>
            </Container>
        </Container>
    )
}

export default Presentation;
