import React, { Component } from 'react';
import styled from 'styled-components';
import { NotificationButton } from '../../components/Button';
import colour from '../../resources/styles/colours';
import Page, { PageHeader } from '../../components/Page';
import PlaygroundPageAnimation from '../../animations/PlaygroundPageAnimation';
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

const PageContainer = styled.div`
  display: flex;
  align-self: center;
  overflow-y: auto;
  max-width: 90%;
  max-height: 90%;
`

const ButtonGroup = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  margin-right: 10%;
`

class AboutNotifications extends Component {
  constructor(props) {
    super(props);
    this.addNotification = this.addNotification.bind(this);
    this.notificationDOMRef = React.createRef();
  }

  addNotification() {
    this.notificationDOMRef.current.addNotification({
      title: "React Notification",
      message: "Notification!",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 2000 },
      dismissable: { click: true }
    });
  }

  render() {
    return (
      <PlaygroundPageAnimation>
        <Page>
          <PageHeader>Notifications</PageHeader>
          <PageContainer>
            <ReactNotification ref={this.notificationDOMRef} />
            <ButtonGroup>
              <NotificationButton onClick={() => this.addNotification}>
                Top Right
              </NotificationButton>
              <NotificationButton onClick={this.addNotification}>
                Top Right
              </NotificationButton>
              <NotificationButton onClick={this.addNotification}>
                Top Right
              </NotificationButton>
              <NotificationButton onClick={this.addNotification}>
                Top Right
              </NotificationButton>
            </ButtonGroup>
        </PageContainer>
        </Page>
      </PlaygroundPageAnimation>
    );
  }
}
export default AboutNotifications;
