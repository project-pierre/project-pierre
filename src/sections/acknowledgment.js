import React, {useState} from 'react';
import {Col, Container, Row} from 'react-bootstrap';

const Acknowledgment = () => {
    const [data, setData] = useState({
        'title': 'Acknowledgment',
        'refs': [
            {
                "text": "This project was financed by the Coordenação de Aperfeiçoamento de Pessoal de Nível Superior - Brasil (CAPES) - Finance Code 88887.502736 / 2020-00 and 88887.685243 / 2022-00."
            },
            {
                "text": "The authors acknowledge the National Laboratory for Scientific Computing (LNCC/MCTI, Brazil) for providing HPC resources of the SDumont supercomputer, which has contributed to the research results reported within this paper. URL: http://sdumont.lncc.br"
            },
        ]
    })

    return (
        <Container fluid id="ack" className="section-settings">
            <Container className="section-padding">
                <Row className="title-padding">
                    <h2>{data.title}</h2>
                </Row>
                <div className="highlight-text highlight-text-purple"/>
                {data.refs !== undefined && data.refs.map((item, index) => (
                    <Row className='bib-text'>
                        <p>{item.text}</p>
                    </Row>
                ))}
            </Container>
        </Container>
    )
}

export default Acknowledgment;
