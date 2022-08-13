import React, {useState} from 'react';
import {Col, Container, Row} from 'react-bootstrap';

const Description = () => {
    const [data, setData] = useState({
        'title': 'What is Project Pierre?',
        'text': 'Project Pierre is an initiative to provide technical support on post-processing recommendation research. The project is composed of two goals: the Scikit-Pierre and Pierre-In-Frame. Scikit-Pierre is a library written in Python to work with post-processing recommendations. Pierre-In-Frame is a framework, also written in Python, that works as a how-to-use the Scikit-Pierre. The Project Pierre is a product of the doctoral degree in Computer Science of Diego Corrêa. Thus, Pierre is a free library and framework and has no direct grant, i.e., it is made with love, science and code.',
        'text2': 'The post-processing is a step to re-rank the recommendation list provided by the recommender algorithms, as the User-KNN or Singular Value Decomposition. The step can create a new recommendation list focused on: Calibration, Diversity, Popularity, etc.',
    })

    return (
        <Container fluid className="background-color-gray section-padding">
            <Container>
                <Row className="title-padding">
                    <h2>{data.title}</h2>
                </Row>
                <div className="highlight-text highlight-text-dark"/>
                <Row className="align-content-center">
                    <p>{data.text}</p>
                </Row>
                <Row className="align-content-center">
                    <p>{data.text2}</p>
                </Row>
            </Container>
        </Container>
    )
}

export default Description;
