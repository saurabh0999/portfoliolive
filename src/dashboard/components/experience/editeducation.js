// import Welcome from "../welcome/welcome";

function Editeducation() {
    return (
        <>
            <form>
                <div className="row">  
                    <div className="form-group col-md-6 col-sm-12 col-lg-6 col-xs-12">
                        <label for="course" className="form-control-label">Course</label>
                        <input className="form-control" type="text" value="" id="course"/>
                    </div>
                    <div className="form-group col-md-6 col-sm-12 col-lg-6 col-xs-12">
                        <label for="college" className="form-control-label">College/School</label>
                        <input className="form-control" type="text" value="" id="college"/>
                    </div>
                </div>
                <div className="row"> 
                    <div className="form-group col-md-6 col-sm-12 col-lg-6 col-xs-12">
                        <label for="from" className="form-control-label">From</label>
                        <input className="form-control" type="date" value="" id="from"/>
                    </div>
                    <div className="form-group col-md-6 col-sm-12 col-lg-6 col-xs-12">
                        <label for="to" className="form-control-label">To</label>
                        <input className="form-control" type="date" value="John Snow" id="to"/>
                    </div>
                </div>
            </form>
        </>
    );
  }
  
export default Editeducation;
  