import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Row} from 'react-bootstrap';

const Bib = () => {
	const [data, setData] = useState({
		'title': 'Bibliography',
		'refs': [
			{
				"text": "SILVA, D. C. da; DURãO, F. A. Introducing a Framework and a Decision Protocol to " +
					"Calibrate Recommender Systems. arXiv, 2022.",
				"url": "https://project-pierre.github.io"
			},
			{
				"text": "SILVA, D. C. da; MANZATO, M. G.; DURãO, F. A. Exploiting personalized calibration " +
					"and metrics for fairness recommendation. Expert Systems with Applications, p. 115112, " +
					"2021. ISSN 0957-4174.",
				"url": "https://project-pierre.github.io"
			},
		]
	})

	return (
		<Container fluid id='bib' className="background-color-gray section-settings">
			<Container className="section-padding">
				<Row>
					<h3 className="title-padding">
						{data.title}
					</h3>
				</Row>
				<div className="highlight-text highlight-text-dark"/>
				{data.refs !== undefined && data.refs.map((item, index) => (
					<Row className='bib-text'>
						<p>{item.text}</p>
					</Row>
				))}
			</Container>
		</Container>
	)
}

export default Bib;
