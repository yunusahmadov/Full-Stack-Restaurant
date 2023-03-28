import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import TabsContent from './TabsContent';
import './TabsContainer.css'
import img1 from './TabsImages/tab1.jpg'
import img2 from './TabsImages/tab2.jpg'
import img3 from './TabsImages/tab3.jpg'
import img4 from './TabsImages/tab4.jpg'


import './TabsResponsive.css'
function TabsContainer() {
  return (
<div className="tabs-section">
    <div className="tabs-container">
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">MEAL FOR WHOLE FAMILY</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">BRUSCHETTI</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">AWESOME VEGETABLES</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="four">TASTY SNACKS</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <TabsContent
              title={'OFFER FOR DESSERTS'}
              subtitle={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'}
              text={'Voluptate velit esse cillum dolore, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint ullamco laboris nisi ut aliquip.'}
              img={img1}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <TabsContent
                     title={'SMALL BITE'}
                     subtitle={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'}
                     text={'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisitin ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor.'}
              img={img2}

              />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
            <TabsContent
                      title={'TODAY’S MENU'}
                      subtitle={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'}
                      text={'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisitin ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor.'}
              img={img3}

              />
            </Tab.Pane>
            <Tab.Pane eventKey="four">
            <TabsContent
              title={'TRY OUR SNACKS'}
              subtitle={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'}
              text={'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisitin ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor.'}
              img={img4}

              />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </div>
</div>
  )
}

export default TabsContainer