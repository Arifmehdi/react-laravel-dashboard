import {Link} from 'react-router-dom';
function Sidebar() {
    return (
        <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <Link className="nav-link collapsed" to="/dashboard">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-menu-button-wide"></i><span>Components</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <a href="https://bootstrapmade.com/content/demo/NiceAdmin/components-alerts.html">
                  <i className="bi bi-circle"></i><span>Alerts</span>
                </a>
              </li>
              <li>
                <a href="https://bootstrapmade.com/content/demo/NiceAdmin/components-accordion.html">
                  <i className="bi bi-circle"></i><span>Accordion</span>
                </a>
              </li>
              <li>
                <a href="https://bootstrapmade.com/content/demo/NiceAdmin/components-badges.html">
                  <i className="bi bi-circle"></i><span>Badges</span>
                </a>
              </li>
              <li>
                <a href="https://bootstrapmade.com/content/demo/NiceAdmin/components-breadcrumbs.html">
                  <i className="bi bi-circle"></i><span>Breadcrumbs</span>
                </a>
              </li>
              <li>
                <a href="https://bootstrapmade.com/content/demo/NiceAdmin/components-buttons.html">
                  <i className="bi bi-circle"></i><span>Buttons</span>
                </a>
              </li>
              <li>
                <a href="https://bootstrapmade.com/content/demo/NiceAdmin/components-cards.html">
                  <i className="bi bi-circle"></i><span>Cards</span>
                </a>
              </li>
              <li>
                <a href="https://bootstrapmade.com/content/demo/NiceAdmin/components-carousel.html">
                  <i className="bi bi-circle"></i><span>Carousel</span>
                </a>
              </li>
              <li>
                <a href="https://bootstrapmade.com/content/demo/NiceAdmin/components-list-group.html">
                  <i className="bi bi-circle"></i><span>List group</span>
                </a>
              </li>
              <li>
                <a href="https://bootstrapmade.com/content/demo/NiceAdmin/components-modal.html">
                  <i className="bi bi-circle"></i><span>Modal</span>
                </a>
              </li>
              <li>
                <a href="https://bootstrapmade.com/content/demo/NiceAdmin/components-tabs.html">
                  <i className="bi bi-circle"></i><span>Tabs</span>
                </a>
              </li>
              <li>
                <a href="https://bootstrapmade.com/content/demo/NiceAdmin/components-pagination.html">
                  <i className="bi bi-circle"></i><span>Pagination</span>
                </a>
              </li>
              <li>
                <a href="https://bootstrapmade.com/content/demo/NiceAdmin/components-progress.html">
                  <i className="bi bi-circle"></i><span>Progress</span>
                </a>
              </li>
              <li>
                <a href="https://bootstrapmade.com/content/demo/NiceAdmin/components-spinners.html">
                  <i className="bi bi-circle"></i><span>Spinners</span>
                </a>
              </li>
              <li>
                <a href="https://bootstrapmade.com/content/demo/NiceAdmin/components-tooltips.html">
                  <i className="bi bi-circle"></i><span>Tooltips</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-journal-text"></i><span>Forms</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <a href="https://bootstrapmade.com/content/demo/NiceAdmin/forms-elements.html">
                  <i className="bi bi-circle"></i><span>Form Elements</span>
                </a>
              </li>
              <li>
                <a href="https://bootstrapmade.com/content/demo/NiceAdmin/forms-layouts.html">
                  <i className="bi bi-circle"></i><span>Form Layouts</span>
                </a>
              </li>
              <li>
                <a href="https://bootstrapmade.com/content/demo/NiceAdmin/forms-editors.html">
                  <i className="bi bi-circle"></i><span>Form Editors</span>
                </a>
              </li>
              <li>
                <a href="https://bootstrapmade.com/content/demo/NiceAdmin/forms-validation.html">
                  <i className="bi bi-circle"></i><span>Form Validation</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-layout-text-window-reverse"></i><span>Tables</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <a href="https://bootstrapmade.com/content/demo/NiceAdmin/tables-general.html">
                  <i className="bi bi-circle"></i><span>General Tables</span>
                </a>
              </li>
              <li>
                <a href="https://bootstrapmade.com/content/demo/NiceAdmin/tables-data.html">
                  <i className="bi bi-circle"></i><span>Data Tables</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-bar-chart"></i><span>Charts</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <a href="https://bootstrapmade.com/content/demo/NiceAdmin/charts-chartjs.html">
                  <i className="bi bi-circle"></i><span>Chart.js</span>
                </a>
              </li>
              <li>
                <a href="https://bootstrapmade.com/content/demo/NiceAdmin/charts-apexcharts.html">
                  <i className="bi bi-circle"></i><span>ApexCharts</span>
                </a>
              </li>
              <li>
                <a href="https://bootstrapmade.com/content/demo/NiceAdmin/charts-echarts.html">
                  <i className="bi bi-circle"></i><span>ECharts</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-gem"></i><span>Icons</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <a href="https://bootstrapmade.com/content/demo/NiceAdmin/icons-bootstrap.html">
                  <i className="bi bi-circle"></i><span>Bootstrap Icons</span>
                </a>
              </li>
              <li>
                <a href="https://bootstrapmade.com/content/demo/NiceAdmin/icons-remix.html">
                  <i className="bi bi-circle"></i><span>Remix Icons</span>
                </a>
              </li>
              <li>
                <a href="https://bootstrapmade.com/content/demo/NiceAdmin/icons-boxicons.html">
                  <i className="bi bi-circle"></i><span>Boxicons</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-heading">Pages</li>
          <li className="nav-item">
            <Link className="nav-link collapsed" to="/profile">
              <i className="bi bi-person"></i>
              <span>Profile</span>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" href="https://bootstrapmade.com/content/demo/NiceAdmin/pages-faq.html">
              <i className="bi bi-question-circle"></i>
              <span>F.A.Q</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" href="https://bootstrapmade.com/content/demo/NiceAdmin/pages-contact.html">
              <i className="bi bi-envelope"></i>
              <span>Contact</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" href="https://bootstrapmade.com/content/demo/NiceAdmin/pages-register.html">
              <i className="bi bi-card-list"></i>
              <span>Register</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" href="https://bootstrapmade.com/content/demo/NiceAdmin/pages-login.html">
              <i className="bi bi-box-arrow-in-right"></i>
              <span>Login</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" href="https://bootstrapmade.com/content/demo/NiceAdmin/pages-error-404.html">
              <i className="bi bi-dash-circle"></i>
              <span>Error 404</span>
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/blank">
              <i className="bi bi-file-earmark"></i>
              <span>Blank</span>
            </Link>
          </li>
        </ul>
      </aside>
    );
}


export default Sidebar;
