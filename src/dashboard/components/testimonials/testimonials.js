import Popup from "../popup";
import Edit from "./edit";

function Testimonials() {

  const mystyle1 = {
    visibility: "visible",
    animationDelay: "0.5s",
     animationName: "fadeInUp"
  };
//   const mystyle2 = {
//     transform: "translate3d(-2894px, 0px, 0px)",
//     transition: "all 1s ease 0s",
//     width: "5066px"
//   }
//   const mystyle3 = {
//     width:"763px"
//   }

  return (
    <>
        
        <div className="container-fluid position-r py-5" id="testimonial">
            <button type="button" className="content-center-xy bg-primary edit-icon-round p-2 rounded-circle" data-toggle="modal" data-target="#modaltestimonials">
                <i className="fa fa-pencil text-white content-center-xy text-lg opacity-10"></i>
            </button>
            <h1 className="display-5 text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Testimonial</h1>
            <div className="row justify-content-center">
                <div className="col-lg-3 d-none d-lg-block">
                    <div className="testimonial-left h-100">
                        <img className="img-fluid wow fadeIn" data-wow-delay="0.1s" src="../images/testimonial-1.jpg" alt="img" />
                        <img className="img-fluid wow fadeIn" data-wow-delay="0.3s" src="../images/testimonial-2.jpg" alt="img" />
                        <img className="img-fluid wow fadeIn" data-wow-delay="0.5s" src="../images/testimonial-3.jpg" alt="img" />
                    </div>
                </div>
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s" style={mystyle1}>
                <div className="owl-carousel testimonial-carousel owl-loaded owl-drag">
                        <div className=" testimonial-item text-center">
                            <div className="position-relative mb-5">
                                <img className="img-fluid rounded-circle border border-secondary p-2 mx-auto" src="../images/testimonial-1.jpg" alt="img" />
                                <div className="testimonial-icon">
                                    <i className="fa fa-quote-left text-primary"></i>
                                </div>
                            </div>
                            <p className="fs-5 fst-italic">You serve as an exemplary role model by consistently demonstrating a commitment to upholding company values, and encouraging others to do the same.</p>
                            <hr className="w-25 mx-auto" />
                            <h5>ZOHO</h5>
                            <span>Technology Company</span>
                        </div>
                        <div className=" testimonial-item text-center">
                            <div className="position-relative mb-5">
                                <img className="img-fluid rounded-circle border border-secondary p-2 mx-auto" src="../images/testimonial-2.jpg" alt="img" />
                                <div className="testimonial-icon">
                                    <i className="fa fa-quote-left text-primary"></i>
                                </div>
                            </div>
                            <p className="fs-5 fst-italic">You effectively provide guidance for your team when necessary, while also holding employees accountable for their individual responsibilities.
                                Your team is engaged and achieving their goals.</p>
                            <hr className="w-25 mx-auto" />
                            <h5>Srijan</h5>
                            <span>Software Company</span>
                        </div>
                        <div className=" testimonial-item text-center">
                            <div className="position-relative mb-5">
                                <img className="img-fluid rounded-circle border border-secondary p-2 mx-auto" src="../images/testimonial-3.jpg" alt="img" />
                                <div className="testimonial-icon">
                                    <i className="fa fa-quote-left text-primary"></i>
                                </div>
                            </div>
                            <p className="fs-5 fst-italic">
                                You demonstrate a strong ability to balance a willingness to help others on the team and carry out of your own direct responsibilities.
                                Your ability to both listen to others and contribute your own ideas is a great demonstration of your teamwork skills.</p>
                            <hr className="w-25 mx-auto" />
                            <h5>CODITAS</h5>
                            <span>Software Company</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 d-none d-lg-block">
                    <div className="testimonial-right h-100">
                        <img className="img-fluid wow fadeIn" data-wow-delay="0.1s" src="../images/testimonial-1.jpg" alt="img" />
                        <img className="img-fluid wow fadeIn" data-wow-delay="0.3s" src="../images/testimonial-2.jpg" alt />
                        <img className="img-fluid wow fadeIn" data-wow-delay="0.5s" src="../images/testimonial-3.jpg" alt="img" />
                    </div>
                </div>
            </div>
        </div>
        <Popup modalname="modaltestimonials" popuptitle="Edit Testimonials">
            <Edit />
        </Popup>
    </>
  );
}

export default Testimonials;
