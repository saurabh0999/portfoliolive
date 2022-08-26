// import Welcome from "../welcome/welcome";

function Editstrength() {
    return (
        <>
            <form>
                <div className="row">  
                    <div className="form-group col-md-6 col-sm-12 col-lg-6 col-xs-12">
                        <label for="heading" className="form-control-label">Heading</label>
                        <textarea className="form-control" id="heading"></textarea>
                    </div>
                    <div className="form-group col-md-6 col-sm-12 col-lg-6 col-xs-12">
                        <label for="subheading" className="form-control-label">Sub Heading</label>
                        <textarea className="form-control" id="subheading"></textarea>
                    </div>
                </div>  
                <div className="row"> 
                    <p className="text-primary">Strengths</p>
                    <div className="form-group col-md-6 col-sm-12 col-lg-6 col-xs-12">
                        <label for="strength" className="form-control-label">Add strength</label>
                        <input className="form-control" type="text" value="John Snow" id="strength"/>
                    </div>
                    <div className="form-group col-md-6 col-sm-12 col-lg-6 col-xs-12">
                        <button className="btn btn-primary mt-30px" id=""><i className="fa fa-plus" aria-hidden="true"></i> Add more</button>
                    </div>
                </div>
            </form>
        </>
    );
}
  
export default Editstrength;
  