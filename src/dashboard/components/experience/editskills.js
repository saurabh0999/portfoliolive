// import Welcome from "../welcome/welcome";

function Editskills() {
    return (
        <>
            <form>
                <div className="row">  
                    <div className="form-group col-md-6 col-sm-12 col-lg-6 col-xs-12">
                        <label for="heading" className="form-control-label">Heading</label>
                        <input className="form-control" type="text" value="" id="heading"/>
                    </div>
                    <div className="form-group col-md-6 col-sm-12 col-lg-6 col-xs-12">
                        <label for="myskills-heading" className="form-control-label">Myskills Heading</label>
                        <input className="form-control" type="text" value="" id="myskills-heading"/>
                    </div>
                </div>
                <div className="row"> 
                <div className="form-group col-12">
                        <label for="sub-heading" className="form-control-label">Sub Heading</label>
                        <textarea className="form-control" id="sub-heading"></textarea>
                    </div>
                </div>  
                <div className="row">
                    <p className="text-primary">Skills</p> 
                    <div className="form-group col-md-6 col-sm-12 col-lg-6 col-xs-12">
                        <label for="example-text-input" className="form-control-label">Add skills</label>
                        <input className="form-control" type="text" value="" id="example-text-input"/>
                    </div>
                    <div className="form-group col-md-6 col-sm-12 col-lg-6 col-xs-12">
                        <button className="btn btn-primary mt-30px" id=""><i classNameName="fa fa-plus" aria-hidden="true"></i>Add more</button>
                    </div>
                </div>
            </form>
        </>
    );
  }
  
export default Editskills;
  