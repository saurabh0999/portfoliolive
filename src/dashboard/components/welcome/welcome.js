import Experiencegrid from "../experience/experiencegrid";
import Educationgrid from "../experience/educationgrid";
import Clientsgrid from "../about/clientsgrid";
import Strengthgrid from "../about/strengthgrid";
import Skillsgrid from "../experience/skillsgrid";
import Testimonialsgrid from "../testimonials/testimonialsgrid";
import Edit from "../testimonials/edit";
import Editeducation from "../experience/editeducation";
import Editexperience from "../experience/editexperience";
import Editskills from "../experience/editskills";
import Editclients from '../about/editclients';
import Editstrength from '../about/editstrength';

import Popup from "../popup";

function Welcome() {
  return (
    <>
        <div className="row">
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <div className="card">
            <div className="card-body p-3">
            <div className="row">
                <div className="col-8">
                <div className="numbers">
                    <p className="text-sm mb-0 text-uppercase font-weight-bold">Visitors</p>
                    <h5 className="font-weight-bolder">
                    100
                    </h5>
                    <p className="mb-0">
                    <span className="text-success text-sm font-weight-bolder">+55%</span>
                    since yesterday
                    </p>
                </div>
                </div>
                <div className="col-4 text-end">
                <div className="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                    <i className="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <div className="card">
            <div className="card-body p-3">
            <div className="row">
                <div className="col-8">
                <div className="numbers">
                    <p className="text-sm mb-0 text-uppercase font-weight-bold">resume downloads</p>
                    <h5 className="font-weight-bolder">
                    6
                    </h5>
                    <p className="mb-0">
                    <span className="text-success text-sm font-weight-bolder">+3%</span>
                    since last week
                    </p>
                </div>
                </div>
                <div className="col-4 text-end">
                <div className="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                    <i className="ni ni-world text-lg opacity-10" aria-hidden="true"></i>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <div className="card">
            <div className="card-body p-3">
            <div className="row">
                <div className="col-8">
                <div className="numbers">
                    <p className="text-sm mb-0 text-uppercase font-weight-bold">New Clients</p>
                    <h5 className="font-weight-bolder">
                    +4
                    </h5>
                    <p className="mb-0">
                    <span className="text-danger text-sm font-weight-bolder">-2%</span>
                    since last quarter
                    </p>
                </div>
                </div>
                <div className="col-4 text-end">
                <div className="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                    <i className="ni ni-paper-diploma text-lg opacity-10" aria-hidden="true"></i>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className="col-xl-3 col-sm-6">
        <div className="card">
            <div className="card-body p-3">
            <div className="row">
                <div className="col-8">
                <div className="numbers">
                    <p className="text-sm mb-0 text-uppercase font-weight-bold">Email Recieved</p>
                    <h5 className="font-weight-bolder">
                    110
                    </h5>
                    <p className="mb-0">
                    <span className="text-success text-sm font-weight-bolder">+5%</span> than last month
                    </p>
                </div>
                </div>
                <div className="col-4 text-end">
                <div className="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle">
                    <i className="ni ni-cart text-lg opacity-10" aria-hidden="true"></i>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
        <div className="mt-4"> 
            <div className="accordion-1">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12 ml-auto">
                        <div className="accordion my-3" id="accordionExample">
                        <div className="card">
                            <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link w-100 text-primary text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Testimonials Details
                                <i className="ni ni-bold-down float-right"></i>

                                </button>
                            </h5>
                            </div>

                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                               <div className="card-body opacity-8">
                                  <Testimonialsgrid/>
                               </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">
                                <button className="btn btn-link w-100 text-primary text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Experience Details
                                <i className="ni ni-bold-down float-right"></i>
                               
                                </button>
                            </h5>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div className="card-body opacity-8">
                                   <Experiencegrid/>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingThree">
                            <h5 className="mb-0">
                                <button className="btn btn-link w-100 text-primary text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Education Details
                                <i className="ni ni-bold-down float-right"></i>

                                </button>
                            </h5>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                               <div className="card-body opacity-8">
                                   <Educationgrid/>
                               </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingFour">
                            <h5 className="mb-0">
                                <button className="btn btn-link w-100 text-primary text-left" type="button" data-toggle="collapse" data-target="#collapseFour" aria-controls="collapseFour">
                                Skills details
                                <i className="ni ni-bold-down float-right"></i>
                                </button>
                            </h5>
                            </div>

                            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                <div className="card-body opacity-8">
                                    <Skillsgrid/>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingFifth">
                            <h5 className="mb-0">
                                <button className="btn btn-link w-100 text-primary text-left" type="button" data-toggle="collapse" data-target="#collapseFifth" aria-controls="collapseFifth">
                                Clients Details
                                <i className="ni ni-bold-down float-right"></i>

                                </button>
                            </h5>
                            </div>

                            <div id="collapseFifth" className="collapse" aria-labelledby="headingFifth" data-parent="#accordionExample">
                            <div className="card-body opacity-8">
                                  <Clientsgrid/>
                            </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingsix">
                            <h5 className="mb-0">
                                <button className="btn btn-link w-100 text-primary text-left" type="button" data-toggle="collapse" data-target="#collapsesix" aria-controls="collapseFifth">
                                Strengths Details
                                <i className="ni ni-bold-down float-right"></i>
                                </button>
                            </h5>
                            </div>

                            <div id="collapsesix" className="collapse" aria-labelledby="headingsix" data-parent="#accordionExample">
                            <div className="card-body opacity-8">
                                  <Strengthgrid/>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </div>
        <div className="row">
            <Popup modalname="modaleditclients" popuptitle="Edit Clients">
                <Editclients />
            </Popup>
            <Popup modalname="modaleditstrengths" popuptitle="Edit Strengths">
                <Editstrength />
            </Popup>
            <Popup modalname="modalediteducation" popuptitle="Edit Education">
                <Editeducation />
            </Popup>
            <Popup modalname="modaleditexperience" popuptitle="Edit Experience">
                <Editexperience />
            </Popup>
            <Popup modalname="modaleditsskills" popuptitle="Edit Skills">
                <Editskills />
            </Popup>
            <Popup modalname="modaledittestimonials" popuptitle="Edit Testimonials">
                <Edit />
            </Popup>
        </div>
    </>
  );
}

export default Welcome;

