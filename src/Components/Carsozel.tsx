import * as React from 'react';
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCarouselCaption,
  } from 'mdb-react-ui-kit';



function Carsozel() {

    return (
        <>
            <MDBCarousel showControls showIndicators dark fade>
                <MDBCarouselInner>
                    <MDBCarouselItem className='active'>
                    <MDBCarouselElement src='https://images.unsplash.com/photo-1640622658799-54e6039d189b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='...' />
                    <MDBCarouselCaption>
                        <h5>Productivity</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                    <MDBCarouselElement src='https://images.unsplash.com/photo-1640622842924-3ae860f77265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80' alt='...' />
                    <MDBCarouselCaption>
                        <h5>Good designe</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </MDBCarouselCaption>
                    </MDBCarouselItem>

                    <MDBCarouselItem>
                    <MDBCarouselElement src='https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='...' />
                    <MDBCarouselCaption>
                        <h5>Team Work</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                    <MDBCarouselElement src='https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='...' />
                    <MDBCarouselCaption>
                        <h5>Development</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </MDBCarouselCaption>
                    </MDBCarouselItem>
                </MDBCarouselInner>
                </MDBCarousel>
        </>
    )
}

export default Carsozel
