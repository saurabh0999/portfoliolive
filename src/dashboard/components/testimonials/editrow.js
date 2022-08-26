// import Welcome from "../welcome/welcome";

function Editrow() {
  return (
      <>
         <form>
              <div className="row">  
              <div className="form-group col-6">
                  <label for="example-text-input" className="form-control-label">Client Name</label>
                  <input className="form-control" type="text" value="John Snow" id="client-name"/>
              </div>
              <div className="form-group col-6">
                  <label for="example-search-input" className="form-control-label">Company Type</label>
                  <input className="form-control" type="text" value="" id="company-type"/>
              </div>
              </div>
              <div className="row"> 
              <div className="form-group col-6">
                  <label for="example-url-input" className="form-control-label">Upload Image</label>
                  <input className="form-control" type="file" value="" id="image"/>
              </div>
              <div className="form-group col-6">
                  <label for="example-tel-input" className="form-control-label">Description</label>
                  <textarea className="form-control"  id="description"></textarea>
              </div>
              </div> 
          </form>
      </>
  );
}

export default Editrow;
