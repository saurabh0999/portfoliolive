// import Welcome from "../welcome/welcome";s
import Dashboard from "../dashboard";

function Popup(props) {
    return (
        <>
            <div className="col-md-6">
                {/* <button type="button" className="btn btn-block btn-default" data-toggle="modal" data-target={`#${props.modelname}`}>Form</button> */}
                <div className="modal fade" id={props.modalname} tabindex="-1" role="dialog" aria-labelledby={props.modalname} aria-hidden="true">
                    <div className="modal-dialog modal- modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{props.popuptitle}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body py-2">
                                {props.children}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
  }
  
export default Popup;
  