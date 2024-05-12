import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";

import {
  Button,
  Container,
  Divider,
  Grid,
  Header, Image,
  Embed,
  Message,
  Segment
} from "semantic-ui-react";

import "./App.css";
import sbService from "./Services/StringBundleService";

class App extends Component {
  render() {
    return (
        <div className="App">
          <Image src="/banner.png" centered/>
          <Grid container stackable>
            <Grid.Row>
              <Segment basic>
                <Image src="/LogoB.png" size="medium"/>
                <Header as="h1" size="huge">
                  <Header.Subheader>
                    A rogue-like dungeon crawler
                  </Header.Subheader>
                </Header>
              </Segment>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={4} floated="left">
                <Segment secondary>
                  <Header as="h4">
                    <Header.Content>Release Date:</Header.Content>
                    <Header.Subheader>
                      2025
                    </Header.Subheader>
                  </Header>

                  <Header as="h4">
                    <Header.Content>Platforms:</Header.Content>
                    <Header.Subheader>
                      <a href="https://store.steampowered.com/app/2888960/Graytail/">Steam</a>
                    </Header.Subheader>
                  </Header>

                </Segment>
              </Grid.Column>
              <Grid.Column width={11}>
                <p>
                  {sbService.get('desc')}
                </p>

                <Header as="h3" size="medium">
                  {sbService.get('interaction.key')}
                </Header>
                <p>
                  {sbService.get('interaction.desc')}
                </p>

                <Header as="h3" size="medium">
                  {sbService.get('story.key')}
                </Header>
                <p>
                  {sbService.get('story.desc')}
                </p>

                <Header as="h3" size="medium">
                  Videos
                </Header>
                <p>
                  <Embed
                      id='gWe-pbaj8rY'
                      placeholder='/Video.png'
                      source='youtube'
                  />
                </p>

                <Header as="h3" size="medium">
                  Images
                </Header>
                <Image.Group size='medium'>
                  <Image src='/screenshots/2.png' />
                  <Image src='/screenshots/9.png' />
                  <Image src='/screenshots/4.png' />
                  <Image src='/screenshots/1.png' />
                  <Image src='/screenshots/3.png' />
                  <Image src='/screenshots/5.png' />
                  <Image src='/screenshots/6.png' />
                  <Image src='/screenshots/7.png' />
                  <Image src='/screenshots/8.png' />
                  <Image src='/screenshots/10.png' />
                </Image.Group>

                <Header as="h3" size="medium">
                  Icon
                </Header>
                <p>
                  <Image src="/Icon512.png" size="small"/>
                </p>

                <Header as="h3" size="medium">
                  Contact
                </Header>
                <p>
                  <Header as="h4" size='small'>
                    <Header.Content>Inquiries</Header.Content>
                    <Header.Subheader>
                      <a href="mailto:dev@concode.co">dev@concode.co</a>
                    </Header.Subheader>
                  </Header>

                  <Header as="h4" size='small'>
                    <Header.Content>Twitter</Header.Content>
                    <Header.Subheader>
                      <a href="https://twitter.com/teamconcode">https://twitter.com/teamconcode</a>
                    </Header.Subheader>
                  </Header>

                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Segment secondary as="footer" className="footer">
            <Container textAlign="center">
              <p>
                Copyright{" "}
                <a href="https://concode.co">@CONCODE</a>
              </p>
              <p>
                <a href="" onClick={()=>sbService.changeLang("ko")}>KO</a> | <a href="" onClick={()=>sbService.changeLang("en")}>EN</a>
              </p>
            </Container>
          </Segment>
        </div>
    );
  }
}

export default App;
