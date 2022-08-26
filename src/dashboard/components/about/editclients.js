// import Welcome from "../welcome/welcome";

function Editclients() {
  return (
      <>
      <form>

        <div className="row">  
            <div className="form-group col-md-6 col-sm-12 col-lg-6 col-xs-12">
                <label for="example-search-input" className="form-control-label">Heading</label>
                <input className="form-control" type="text" value="" id="example-search-input"/>
            </div>
            <div className="form-group col-md-6 col-sm-12 col-lg-6 col-xs-12">
                <label for="total-client-count" className="form-control-label">Total No. of Clients</label>
                <input className="form-control" type="number" value="40-(770)-888-444" id="total-client-count"/>
            </div>
        </div>
        <div className="row"> 
            <div className="form-group col-12">
                <label for="example-url-input" className="form-control-label">Sub Heading</label>
                <input className="form-control" type="text" value="" id="example-url-input"/>
            </div>
        </div>  
        <div className="row"> 
            <p classNameName="text-primary">Strengths</p>
            <div className="form-group col-md-6 col-sm-12 col-lg-6 col-xs-12">
                <label for="example-text-input" className="form-control-label">Add Client Name</label>
                <input className="form-control" type="text" value="John Snow" id="example-text-input"/>
            </div>
            <div className="form-group col-md-6 col-sm-12 col-lg-6 col-xs-12">
                <button className="btn btn-primary mt-30px" id=""><i className="fa fa-plus" aria-hidden="true"></i> Add more</button>
            </div>
        </div>
        
    </form>
      </>
  );
}

export default Editclients;
