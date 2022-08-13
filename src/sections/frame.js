import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Row} from 'react-bootstrap';

const Frame = () => {
	const [data, setData] = useState({
		'title': 'Pierre-In-Frame',
		'text': 'Pierre-In-Frame is a how-to-use the Scikit-Pierre. ' +
			'It gather other libraries on recommendation systems, as the Scikit-Surprise, to compose the hall of recommender algorithms.' +
			'The recommendation list provided by the recommender algorithm is given by entry to the Scikit-Pierre, which creates a final recommendation list.'
	})

	return (
		<Container fluid id="frame" className="background-color-gray section-settings">
			<Container className="section-padding">
				<Row>
					<h2 className="title-padding">
						{data.title}
					</h2>
				</Row>
				<div className="highlight-text highlight-text-dark"/>

				<Row>
					<Col xs={12} sm={6} md={6} lg={6} xl={6}>
						<Container>
							<p>
								{data.text}
							</p>
							<Row className="justify-content-center">
								<Col xs={3} sm={3} md={3} lg={3} xl={3}>
									<Button variant="outline-primary" href="https://github.com/project-pierre/pierre-in-frame">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
											 fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
											<path
												d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
										</svg>
										<> Code</>
									</Button>{' '}
								</Col>
								<Col xs={3} sm={3} md={3} lg={3} xl={3}>
									<Button variant="outline-primary" href="https://pierre-in-frame.readthedocs.io/">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
											 fill="currentColor" className="bi bi-files" viewBox="0 0 16 16">
											<path
												d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"/>
										</svg>
										<> Docs</>
									</Button>{' '}
								</Col>
							</Row>
						</Container>
					</Col>

					<Col xs={12} sm={6} md={6} lg={6} xl={6}>
						<div className="terminal">
							<div className="header">Cloning the repository</div>
							<div className="shell">
								<p><span className="path">~</span><span className="prompt">$</span>git clone
									https://github.com/<em>project-pierre</em>/<em>pierre-in-frame</em></p>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</Container>
	)
}

export default Frame;
