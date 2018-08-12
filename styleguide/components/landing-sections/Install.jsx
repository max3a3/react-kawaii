import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import remcalc from "remcalc";
import Section from "../common/Section";

const codeString = "npm i --save react-kawaii";

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  padding: 20px;
`;

const Code = styled.div`
  background: #2b3847;
  padding: ${remcalc(20)} ${remcalc(40)};
  margin: ${remcalc(20)} 0;
  border-radius: 4px;
  color: #fff;
`;

const Install = () => (
  <Section color="#fff">
    <Grid>
      <Row center="xs">
        <Col xs={12} className="text-center">
          <h2>Install</h2>
        </Col>
        <Col xs={12} sm={8} className="text-center">
          <Code>{codeString}</Code>
        </Col>
      </Row>
    </Grid>
  </Section>
);

export default Install;
