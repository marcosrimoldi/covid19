import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import {DATA} from '../../data/data'
import './cards.scss';

export default class Cards extends React.Component {

    constructor(props) {
        super(props);
        const last = DATA[0];
        const active = last.cases.total - last.cases.cured - last.cases.dead;
        this.state = {
            total: last.cases.total,
            newCases: last.cases.newCases,
            active: active,
            insideHospitalized: last.cases.insideHospitalized,
            cured: last.cases.cured,
            study: last.inStudy,
            dismiss: last.dismiss,
            dead: last.cases.dead,
            deadRate: ((last.cases.dead / last.cases.total) * 100).toFixed(1),
        }
    }

    render() {
        return (
            <div className={'cards-container'}>
                <Container>
                    <h1 className={'section-title'}>Casos</h1>
                    <Row>
                        <Col md={3} xs={6}>
                            <Card className="text-center card-container">
                                <Card.Header>
                                    <h3 className={'title'}>Confirmados</h3>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>
                                        <p className={'value'}>{this.state.total}</p>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} xs={6}>
                            <Card className="text-center card-container">
                                <Card.Header><h3 className={'title'}>Nuevos hoy</h3></Card.Header>
                                <Card.Body>
                                    <Card.Title><p className={'value'}>{this.state.newCases}</p></Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} xs={6}>
                            <Card className="text-center card-container">
                                <Card.Header>
                                    <h3 className={'title'}>Activos</h3>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title><p className={'value'}>{this.state.active}</p></Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} xs={6}>
                            <Card className="text-center card-container">
                                <Card.Header><h3 className={'title'}>Descartados</h3></Card.Header>
                                <Card.Body>
                                    <Card.Title><p className={'value'}>{this.state.dismiss}</p></Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3} xs={6}>
                            <Card className="text-center card-container">
                                <Card.Header>
                                    <h3 className={'title cured'}>Recuperados</h3>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title><p className={'value'}>{this.state.cured}</p></Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} xs={6}>
                            <Card className="text-center card-container">
                                <Card.Header>
                                    <h3 className={'title'}>Internados</h3>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title><p className={'value'}>{this.state.insideHospitalized}</p></Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} xs={6}>
                            <Card className="text-center card-container">
                                <Card.Header><h3 className={'title'}>Fallecidos</h3></Card.Header>
                                <Card.Body>
                                    <Card.Title><p className={'value'}>{this.state.dead}</p></Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} xs={6}>
                            <Card className="text-center card-container">
                                <Card.Header><h3 className={'title'}>Letalidad</h3></Card.Header>
                                <Card.Body>
                                    <Card.Title><p className={'value'}>{this.state.deadRate}<span>%</span></p>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}