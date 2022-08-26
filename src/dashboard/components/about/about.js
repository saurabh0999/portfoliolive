import Popup from '../popup';
import Editclients from './editclients';
import Editstrength from './editstrength';

function About() {
  return (
    <>
        <div className="container" id="about">
            <div className="row g-5">
                <div className="col-lg-6 wow position-r fadeInUp" data-wow-delay="0.1s">
                    <button type="button" className="content-center-xy bg-primary edit-icon-round p-2 rounded-circle" data-toggle="modal" data-target="#modalstrengths">
                        <i className="fa fa-pencil text-white content-center-xy text-lg opacity-10"></i>
                    </button>
                    <div className="d-flex align-items-center mb-5">
                        <div className="years flex-shrink-0 text-center me-4">
                            <h1 className="display-1 mb-0">4</h1>
                            <h5 className="mb-0">Years</h5>
                        </div>
                        <h3 className="lh-base mb-0">of working experience as a Human Resouce Specialist and Talent Acquisition</h3>
                    </div>
                    <p className="mb-4">Having 4 years of experience in IT Recruitment/Talent Acquisition and vendor Management , Client Management and stake holder management IT & Non IT recruitment. Please find Below my area of strength:</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Multi-location recruitment</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Salary Negotiation & closing</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Client/Hiring Manager relationships</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Database creation & Maintenance</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Web-based sourcing/recruitment</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Building strong referral networks</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Vendor Management</p>
                    {/* <!-- <a className="btn btn-primary py-3 px-5 mt-3" href>Read More</a> --> */}
                </div>
                <div className="col-lg-6 wow position-r fadeInUp" data-wow-delay="0.5s">
                    <button type="button" className="content-center-xy bg-primary edit-icon-round p-2 rounded-circle" data-toggle="modal" data-target="#modalclients">
                        <i className="fa fa-pencil text-white content-center-xy text-lg opacity-10"></i>
                    </button>
                    <div className="row g-3 mb-4">
                        <div className="col-sm-6">
                            <img className="img-fluid rounded" src="../images/about-1.jpg" alt />
                        </div>
                        <div className="col-sm-6">
                            <img className="img-fluid rounded" src="../images/about-2.jpg" alt />
                        </div>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                        <h5 className="border-end pe-3 me-3 mb-0">Toatl Happy Clients</h5>
                        <h2 className="text-primary fw-bold mb-0" data-toggle="counter-up">10</h2>
                    </div>
                    <p className="mb-4">Top 4 clients I worked with are:</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Srijan</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>CODITAS</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>X -verse</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>ZOHO</p>
                    
                </div>
            </div>
        </div>
        <div className="row">
            <Popup modalname="modalclients" popuptitle="Edit Clients">
                <Editclients />
            </Popup>
            <Popup modalname="modalstrengths" popuptitle="Edit Strengths">
                <Editstrength />
            </Popup>
        </div>
      
    </>
  );
}

export default About;
