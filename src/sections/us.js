import React, {useState, useEffect} from 'react';
import {Button, Col, Container, Row} from 'react-bootstrap';

const Us = () => {
	const [team, setTeam] = useState(undefined)
	const [title, setTitle] = useState('Us')

	useEffect(function getData() {
		setTeam([
			{
				"name": "Diego Corrêa da Silva",
				"location": "Salvador, Bahia, Brazil",
				"picture": "",
				"description": "Graduate, Master and Ph.D. student in Computer Science focused on Recommender Systems",
				"contact": [

				]
			}
		]);
	}, []);

	return (
		<Container fluid id="us" className="section-settings">
			<Container className="section-padding">
				<Row>
					<h2 className="title-padding">
						{title}
					</h2>
				</Row>
				<div className="highlight-text highlight-text-purple"/>

				{team !== undefined && team.map((item, index) => (
					<>
					<Row id={item.name}>
						<Col xs={12} sm={3} md={3} lg={3}>
							<img
								alt=""
								src="/project-pierre/diego_correa.jpg"
								className="box-img rounded float-right img-on-right"
							/>{' '}
						</Col>

						<Col xs={12} sm={6} md={6} lg={6}>
							<Container fluid className="us-description us-text">
								<Row>
									<p>{item.name}</p>
								</Row>
								<Row>
									<p>{item.location}</p>
								</Row>
								<Row>
									<p>{item.description}</p>
								</Row>
							</Container>
						</Col>
					</Row>
					</>
				))}
			</Container>
		</Container>
	)
}

export default Us;
