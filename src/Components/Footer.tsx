import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter style={{background:'#5f70c9'}} className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Vistion and Goal of our company</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt facilis veniam, nostrum perspiciatis possimus itaque fugiat quidem blanditiis, provident quod ad rerum, molestiae placeat quibusdam a consequuntur quos optio sunt.
            </p>
          </MDBCol>
          <MDBCol md="6" style={{float:'right'}}>
            <h5 className="title">Our Social Medias</h5>
            <ul>
              <li className="list-unstyled">
              <img src={require('../asset/Instagram_logo_2016.svg.png')} width="50"/>
                <a href="#!">Follow us on Instagrm</a>
              </li>
              <li className="list-unstyled">
              <img src={require('../asset/twitter_logo_transparent_background512.png')} width="50"/>
                <a href="#!">Twitter account</a>
                
              </li>
              <li className="list-unstyled">
              <img src={require('../asset/png-transparent-vue-js-javascript-library-github-github-angle-text-triangle.png')} width="50"/>
                <a href="#!">Let's connect on Linnked IN</a>
              </li>
              <li className="list-unstyled">
              <img src={require('../asset/2021_Facebook_icon.svg.png')} width="50"/>
                <a href="#!">Follow us on facebook</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;