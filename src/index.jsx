import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Code,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

class App extends Component {
  render() {
    return (
      <Deck>
        <Slide />
        <Slide>
          <div>
            <Text>Hello World</Text>

            <Text>Hello World</Text>

            <Text>Hello World</Text>

            <Text>Hello World</Text>
          </div>
        </Slide>
      </Deck>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
