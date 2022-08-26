

function Header() {
  const resumepath = "resume/resume.docx"
  return (
    <>
      <div className="container-fluid bg-light my-6 mt-0"  style={{background: "url(images/bg-header.png) left top no-repeat"
}} id="home">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 py-6 pb-0 pt-lg-0">
                    <h3 className="text-primary mb-3">I'm</h3>
                    <h1 className="display-3 mb-3">Priyanka Sharma</h1>
                    <h2 className="typed-text-output d-inline"></h2>
                    <div className="typed-text d-none">Senior Human Resource Specialist, Senior Human Resource Executive, Senior Human Resource Professional, Senior Talent Acquisition</div>
                    <div className="d-flex align-items-center pt-5">
                        <a  href={resumepath} download="myFile" className="btn btn-primary py-3 px-4 me-5">Download CV</a>
                        <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span></span>
                        </button>
                        <h5 className="ms-4 mb-0 d-none d-sm-block">Play Video</h5>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img className="img-fluid" src="images/profile.png" alt />
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Header;
