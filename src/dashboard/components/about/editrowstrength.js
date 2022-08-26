// import Welcome from "../welcome/welcome";

function Editrowstrength() {
    return (
        <>
           <form>
                <div className="row">  
                    <div className="form-group col-md-6 col-sm-12 col-lg-6 col-xs-12">
                        <label for="designation" className="form-control-label">Designation</label>
                        <input className="form-control" type="text" value="" id="designation"/>
                    </div>
                    <div className="form-group col-md-6 col-sm-12 col-lg-6 col-xs-12">
                        <label for="company-name" className="form-control-label">Company Name</label>
                        <input className="form-control" type="text" value="" id="company-name"/>
                    </div>
                </div>
                <div className="row"> 
                    <div className="form-group col-12">
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
  
export default Editrowstrength;
  