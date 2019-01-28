import React from 'react';
import styled from 'styled-components';
import colour from '../../resources/styles/colours';
import Page, { PageHeader } from '../../components/Page';
import PlaygroundPageAnimation from '../../animations/PlaygroundPageAnimation';
import SnippetBox from '../../components/SnippetBox';

const Paragraph = styled.div`
  padding: 12px;
  font-size: 1rem;
  color: ${colour.yellow}
  text-align: left;
  line-height: 2;
`

const PageContainer = styled.div`
  display: flex;
  align-self: center;
`

const AboutReact = () => {
  return (
    <PlaygroundPageAnimation>
      <Page>
        <PageHeader>React</PageHeader>
        <PageContainer>
          <SnippetBox>
            <h2>Rendering The Component Into The DOM</h2>
            <Paragraph>
              <p>import React from 'react'</p>
              <p>import ReactDOM from 'react-dom'</p>
              <p>ReactDOM.render(</p>
              <p>{`<App>`}</p>
              <p>,document.getElementById('root'));</p>
            </Paragraph>
          </SnippetBox>
          <SnippetBox>
            <h2>Stateless Components</h2>
            <Paragraph>
              <p>const Headline = () => {`{`}</p>
              <p>return {`<h1>React Reference Guide</h1>`}</p>
              <p>}</p>
              <p />
              <p>const Greetings = (props) => {`{`}</p>
              <p>return {`<p>hello {props.name}</p>`}</p>
              <p>}</p>
              <p />
              <p>const Intro = () => {`{`}</p>
              <p>return {`(`} </p>
              <p>{`<div>`}</p>
              <p>{`<Headline />`}</p>
              <p>This is my React Guide</p>
              <p>{`<Greetings name="Adam" />`}</p>
              <p>{`</div>`}</p>
              <p>}</p>
            </Paragraph>
          </SnippetBox>
          <SnippetBox>
            <h2>Class Components</h2>
            <Paragraph>
              <p>class App extends React.Component {`{`}</p>
              <p>constructor(props) {`{`}</p>
              <p>super(props);</p>
              <p>this.state = {`date: new Date()`};</p>
              <p>}</p>
              <p>render() {`{`}</p>
              <p>return {`(`}</p>
              <p>{`<h1>It is {this.state.date}</h1>`}</p>
              <p>)}</p>
            </Paragraph>
          </SnippetBox>
        </PageContainer>
      </Page>
    </PlaygroundPageAnimation>
  );
}

export default AboutReact;
