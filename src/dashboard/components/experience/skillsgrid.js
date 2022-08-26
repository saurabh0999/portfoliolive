// import Welcome from "../welcome/welcome";

function Skillsgrid() {
    return (
        <>
         <div className="card ">
            <div className="card-header pb-0 p-3">
            <div className="d-flex justify-content-between">
                <h6 className="mb-2">Skills Table</h6>
            </div>
            </div>
            <div className="table-responsive">
            <table className="table align-items-center ">
                <tbody>
                <tr>
                  <th><p className="text-xs font-weight-bold mb-0">Country</p></th>
                  <th><p className="text-xs font-weight-bold mb-0">Sales:</p></th>
                  <th><p className="text-xs font-weight-bold mb-0">Value:</p></th>
                  <th><p className="text-xs font-weight-bold mb-0">Bounce:</p></th>
                  <th><p className="text-xs font-weight-bold mb-0">View</p></th>
                  <th><p className="text-xs font-weight-bold mb-0">Edit</p></th>
                  <th><p className="text-xs font-weight-bold mb-0">Delete</p></th>
                </tr>  
                <tr>
                    <td className="w-30">
                    <div className="d-flex px-2 py-1 align-items-center">
                        <div>
                        <img src="../assets/lib/img/icons/flags/US.png" alt="Country flag" />
                        </div>
                        <div className="ms-4">
                        
                        <h6 className="text-sm mb-0">United States</h6>
                        </div>
                    </div>
                    </td>
                    <td>
                    <div className="text-center">
                        <h6 className="text-sm mb-0">2500</h6>
                    </div>
                    </td>
                    <td>
                    <div className="text-center">
                        <h6 className="text-sm mb-0">$230,900</h6>
                    </div>
                    </td>
                    <td className="align-middle text-sm">
                    <div className="col text-center">
                        <h6 className="text-sm mb-0">29.9%</h6>
                    </div>
                    </td>
                    <td><i className="fa fa-eye font-weight-bold text-primary" aria-hidden="true"></i></td>
                    <td><i className="fa fa-pencil font-weight-bold text-primary" aria-hidden="true"></i></td>
                    <td><i className="fa fa-trash font-weight-bold text-primary" aria-hidden="true"></i></td>
                </tr>
                <tr>
                    <td className="w-30">
                    <div className="d-flex px-2 py-1 align-items-center">
                        <div>
                        <img src="../assets/lib/img/icons/flags/DE.png" alt="Country flag" />
                        </div>
                        <div className="ms-4">
                        <h6 className="text-sm mb-0">Germany</h6>
                        </div>
                    </div>
                    </td>
                    <td>
                    <div className="text-center">
                        <h6 className="text-sm mb-0">3.900</h6>
                    </div>
                    </td>
                    <td>
                    <div className="text-center">
                        <h6 className="text-sm mb-0">$440,000</h6>
                    </div>
                    </td>
                    <td className="align-middle text-sm">
                    <div className="col text-center">
                        <h6 className="text-sm mb-0">40.22%</h6>
                    </div>
                    </td>
                    <td><i className="fa fa-eye font-weight-bold text-primary" aria-hidden="true"></i></td>
                    <td><i className="fa fa-pencil font-weight-bold text-primary" aria-hidden="true"></i></td>
                    <td><i className="fa fa-trash font-weight-bold text-primary" aria-hidden="true"></i></td>
                </tr>
                <tr>
                    <td className="w-30">
                    <div className="d-flex px-2 py-1 align-items-center">
                        <div>
                        <img src="../assets/lib/img/icons/flags/GB.png" alt="Country flag" />
                        </div>
                        <div className="ms-4">
                        <h6 className="text-sm mb-0">Great Britain</h6>
                        </div>
                    </div>
                    </td>
                    <td>
                    <div className="text-center">
                        <h6 className="text-sm mb-0">1.400</h6>
                    </div>
                    </td>
                    <td>
                    <div className="text-center">
                        <h6 className="text-sm mb-0">$190,700</h6>
                    </div>
                    </td>
                    <td className="align-middle text-sm">
                    <div className="col text-center">
                        <h6 className="text-sm mb-0">23.44%</h6>
                    </div>
                    </td>
                    <td><i className="fa fa-eye font-weight-bold text-primary" aria-hidden="true"></i></td>
                    <td><i className="fa fa-pencil font-weight-bold text-primary" aria-hidden="true"></i></td>
                    <td><i className="fa fa-trash font-weight-bold text-primary" aria-hidden="true"></i></td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
        
        </>
    );
  }
  
export default Skillsgrid;
  