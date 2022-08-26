// import Welcome from "../welcome/welcome";

function Testimonialsgrid() {
    return (
        <>
         <div className="card ">
            <div className="card-header pb-0 p-3">
            <div className="d-flex justify-content-between">
                <h6 className="mb-2">Testimonials Table</h6>
            </div>
            </div>
            <div className="table-responsive">
            <table className="table align-items-center ">
                <tbody>
                <tr>
                  <th><p className="text-xs font-weight-bold mb-0">Client Name</p></th>
                  <th><p className="text-xs font-weight-bold mb-0">Client company type</p></th>
                  <th><p className="text-xs font-weight-bold mb-0">Image</p></th>
                  <th><p className="text-xs font-weight-bold mb-0">Description</p></th>
                  <th><p className="text-xs font-weight-bold mb-0">View</p></th>
                  <th><p className="text-xs font-weight-bold mb-0">Edit</p></th>
                  <th><p className="text-xs font-weight-bold mb-0">Delete</p></th>
                </tr>  
                <tr>
                    <td className="w-30">
                    <div className="d-flex px-2 py-1 align-items-center">
                        {/* <div>
                        <img src="../assets/lib/img/icons/flags/US.png" alt="Country flag" />
                        </div> */}
                        <div className="text-left">
                           <h6 className="text-sm mb-0">ZOHO</h6>
                        </div>
                    </div>
                    </td>
                    <td>
                    <div className="text-left">
                        <h6 className="text-sm mb-0">Software Company</h6>
                    </div>
                    </td>
                    <td>
                    <div className="text-left">
                        <h6 className="text-sm mb-0">Image</h6>
                    </div>
                    </td>
                    <td className="align-middle text-sm">
                    <div className="col text-left">
                        <h6 className="text-sm mb-0">Description Here...</h6>
                    </div>
                    </td>
                    <td><i className="fa fa-eye font-weight-bold text-primary cursor-pointer" aria-hidden="true"></i></td>
                    <td><i className="fa fa-pencil font-weight-bold text-primary cursor-pointer" data-toggle="modal" data-target="#modaledittestimonials" aria-hidden="true"></i></td>
                    <td><i className="fa fa-trash font-weight-bold text-primary cursor-pointer" aria-hidden="true"></i></td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
        
        </>
    );
  }
  
export default Testimonialsgrid;
  