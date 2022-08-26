import Popup from "../popup";
import Editeducation from "./editeducation";
import Editexperience from "./editexperience";
import Editskills from "./editskills";

function Experience() { 
  return (
    <>
        <div className="container" id="skill">
            <div className="row g-5">
                <div className="col-lg-6 position-r wow fadeInUp" data-wow-delay="0.1s">
                    <button type="button" class="content-center-xy bg-primary edit-icon-round p-2 rounded-circle" data-toggle="modal" data-target="#modalskills">
                        <i class="fa fa-pencil text-white content-center-xy text-lg opacity-10"></i>
                    </button>
                    <h1 className="display-5 mb-5">Skills & Experience</h1>
                    <p className="mb-4">Experience of Human Resource Management Software like Qandle, Zoho and kredily etc.</p>
                    <h3 className="mb-4">My Skills</h3>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <p class="mb-3"><i class="far fa-check-circle text-primary me-3"></i>Supervision</p>
                            <p class="mb-3"><i class="far fa-check-circle text-primary me-3"></i>Interpersonal and communication skillst</p>
                            <p class="mb-3"><i class="far fa-check-circle text-primary me-3"></i>Interviewing Expert</p>
                        </div>
                        <div className="col-lg-6"> 
                            <p class="mb-3"><i class="far fa-check-circle text-primary me-3"></i>Strategic thinking & planning abilities</p>
                            <p class="mb-3"><i class="far fa-check-circle text-primary me-3"></i>Process improvement</p>
                            <p class="mb-3"><i class="far fa-check-circle text-primary me-3"></i>End to End recruitment</p>                  
                        </div> 
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <ul className="nav nav-pills rounded border border-2 border-primary mb-5">
                        <li className="nav-item w-50">
                            <button className="nav-link w-100 py-3 fs-5 active" data-bs-toggle="pill" href="#tab-1">Experience</button>
                        </li>
                        <li className="nav-item w-50">
                            <button className="nav-link w-100 py-3 fs-5" data-bs-toggle="pill" href="#tab-2">Education</button>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade position-r show p-0 active">
                            <div className="row gy-5 gx-4">
                                <div className="col-sm-6 position-r">
                                    <button type="button" className="content-center-xy bg-primary edit-icon-round p-2 rounded-circle" data-toggle="modal" data-target="#modalexperience">
                                        <i className="fa fa-pencil text-white content-center-xy text-lg opacity-10"></i>
                                    </button>
                                    <h5>Senior HR Specialist</h5>
                                    <hr className="text-primary my-2" />
                                    <p className="text-primary mb-1">Feb, 2022 - Present</p>
                                    <h6 className="mb-0">Techugo Pvt. Ltd.</h6>
                                </div>
                                <div className="col-sm-6 position-r">
                                    <button type="button" class="content-center-xy bg-primary edit-icon-round p-2 rounded-circle" data-toggle="modal" data-target="#modalexperience">
                                        <i class="fa fa-pencil text-white content-center-xy text-lg opacity-10"></i>
                                    </button>
                                    <h5>HR Executive</h5>
                                    <hr className="text-primary my-2" />
                                    <p className="text-primary mb-1">July, 2019 - Feb, 2022</p>
                                    <h6 className="mb-0">iQuinceSoft Consulting Services Pvt Ltd.</h6>
                                </div>
                                <div className="col-sm-6 position-r">
                                    <button type="button" class="content-center-xy bg-primary edit-icon-round p-2 rounded-circle" data-toggle="modal" data-target="#modalexperience">
                                        <i class="fa fa-pencil text-white content-center-xy text-lg opacity-10"></i>
                                    </button>
                                    <h5>HR Executive</h5>
                                    <hr className="text-primary my-2" />
                                    <p className="text-primary mb-1">Jan, 2019 - June, 2019</p>
                                    <h6 className="mb-0">Beupy Technologies</h6>
                                </div>
                                
                            </div>
                        </div>
                        <div id="tab-2" className="tab-pane fade position-r show p-0">
                            <div className="row gy-5 gx-4">
                                <div className="col-sm-6 position-r">
                                    <button type="button" className="content-center-xy bg-primary edit-icon-round p-2 rounded-circle" data-toggle="modal" data-target="#modaleducation">
                                        <i className="fa fa-pencil text-white content-center-xy text-lg opacity-10"></i>
                                    </button>
                                    <h5>Master of Business Administration</h5>
                                    <hr className="text-primary my-2" />
                                    <p className="text-primary mb-1">July 2019 — June 2021</p>
                                    <h6 className="mb-0">Jaipur National University, Jaipur</h6>
                                </div>
                                <div className="col-sm-6 position-r">
                                    <button type="button" className="content-center-xy bg-primary edit-icon-round p-2 rounded-circle" data-toggle="modal" data-target="#modaleducation">
                                        <i className="fa fa-pencil text-white content-center-xy text-lg opacity-10"></i>
                                    </button>
                                    <h5>Bachelor of Electronic Commerce</h5>
                                    <hr className="text-primary my-2" />
                                    <p className="text-primary mb-1">August 2016 — June 2019</p>
                                    <h6 className="mb-0">Rajiv Academy for Technology and  Management, Mathura</h6>
                                </div>
                                <div className="col-sm-6 position-r">
                                    <button type="button" className="content-center-xy bg-primary edit-icon-round p-2 rounded-circle" data-toggle="modal" data-target="#modaleducation">
                                        <i className="fa fa-pencil text-white content-center-xy text-lg opacity-10"></i>
                                    </button>
                                    <h5>Intermediate</h5>
                                    <hr className="text-primary my-2" />
                                    <p className="text-primary mb-1">March 2015 — March 2016</p>
                                    <h6 className="mb-0">Army Public School, Mathura</h6>
                                </div>
                                <div className="col-sm-6 position-r">
                                    <button type="button" className="content-center-xy bg-primary edit-icon-round p-2 rounded-circle" data-toggle="modal" data-target="#modaleducation">
                                        <i className="fa fa-pencil text-white content-center-xy text-lg opacity-10"></i>
                                    </button>
                                    <h5>Matriculate</h5>
                                    <hr className="text-primary my-2" />
                                    <p className="text-primary mb-1">March 2013 — March 2014</p>
                                    <h6 className="mb-0">Army Public School, Mathura</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <Popup modalname="modaleducation" popuptitle="Edit Education">
                <Editeducation />
            </Popup>
            <Popup modalname="modalexperience" popuptitle="Edit Experience">
                <Editexperience />
            </Popup>
            <Popup modalname="modalskills" popuptitle="Edit Skills">
                <Editskills />
            </Popup>
        </div>
    </>
  );
}

export default Experience;
