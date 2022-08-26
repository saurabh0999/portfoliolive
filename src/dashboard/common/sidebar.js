// import store from './store'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
       <>
       <aside class="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 fixed-start" id="sidenav-main">
            <div class="sidenav-header">
            <i class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
            <Link class="navbar-brand m-0" to={{pathname: "/dashboard/"}} target="_blank" >
                <img src="/assets/lib/img/logo-ct-dark.png" class="navbar-brand-img h-100" alt="main_logo" />
                <span class="ms-1 font-weight-bold">Admin Dashboard</span>
            </Link>
            </div>
            <hr class="horizontal dark mt-0" />
            <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
            <ul class="navbar-nav">
                <li class="nav-item">
                <Link class="nav-link active" to={{pathname: "/dashboard/"}}>
                    <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                    <i class="text-primary text-sm opacity-10 fa fa-tachometer" aria-hidden="true"></i>
                    </div>
                    <span class="nav-link-text ms-1">Dashboard</span>
                </Link>
                </li>
                <li class="nav-item mt-3">
                   <h6 class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Edit Pages</h6>
                </li>
                <li class="nav-item">
                <Link class="nav-link " to={{pathname: "/dashboard/about"}}>
                    <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                    <i class="text-warning text-sm opacity-10 fa fa-user" aria-hidden="true"></i>
                    </div>
                    <span class="nav-link-text ms-1">About</span>
                </Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link " to={{pathname: "/dashboard/experience"}}>
                    <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                    <i class="text-success text-sm opacity-10 fa fa-cogs" aria-hidden="true"></i>
                    </div>
                    <span class="nav-link-text ms-1">Experience</span>
                </Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link " to={{pathname: "/dashboard/testimonials"}}>
                    <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                    <i class="text-info text-sm opacity-10 fa fa-user" aria-hidden="true"></i>
                    </div>
                    <span class="nav-link-text ms-1">Testimonials</span>
                </Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link "to={{pathname: "/dashboard/contact"}}>
                    <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                    <i class="text-danger text-sm opacity-10 fa fa-tachometer" aria-hidden="true"></i>
                    </div>
                    <span class="nav-link-text ms-1">Contact</span>
                </Link>
                </li>
                
                <li class="nav-item">
                <Link class="nav-link "to={{pathname: "/dashboard/contact"}}>
                    <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                    <i class="text-dark text-sm opacity-10 fa fa-tachometer" aria-hidden="true"></i>
                    </div>
                    <span class="nav-link-text ms-1">Profile</span>
                </Link>
                </li>
                <li class="nav-item">
                <Link to={{pathname: "/dashboard/contact"}} class="nav-link">
                    <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                    <i class="text-info text-sm opacity-10 fa fa-tachometer" aria-hidden="true"></i>
                    </div>
                    <span class="nav-link-text ms-1">Log out</span>
                </Link>
                </li>
            </ul>
            </div>
        </aside>
       </>
    );
  }
  
  export default Sidebar;
  