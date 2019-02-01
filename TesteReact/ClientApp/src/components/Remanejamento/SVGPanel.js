import React, { Component } from 'react';
import { Table } from './Table';
import { Col, Grid, Row } from 'react-bootstrap';

export class SVGPanel extends Component {
    displayName = SVGPanel.name


    constructor(props) {
        super(props);
        this.state = { tables: ['a', 'b', 'c'] };
        this.GetSplitedTables = this.GetSplitedTables.bind(this);
    }

    GetSplitedTables(i) {
        const teste = this.state.tables;
        return teste.map((t, a) => {
            if (a % 2 === i) {
                return <Table />;
            }
        }
        );
}


    render() {
        return (
            <Row>
                <Col sm={4}>
                    {this.GetSplitedTables(0)}
                </Col>
                <Col sm={4}>
                </Col>
                <Col sm={4}>
                    {this.GetSplitedTables(1)}
                </Col>


                </Row>
                    
        );
    }
}
