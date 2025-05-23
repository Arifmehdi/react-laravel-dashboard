import Layout from '../layout/Layout'
import {Link} from 'react-router-dom';
function Blank() {
    return (
        <Layout>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Blank Page</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
                            <li className="breadcrumb-item">Pages</li>
                            <li className="breadcrumb-item active">Blank</li>
                        </ol>
                    </nav>
                </div>
                <section className="section">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Example Card</h5>
                                    <p>This is an examle page with no contrnt. You can use it as a starter for your custom pages.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Example Card</h5>
                                    <p>This is an examle page with no contrnt. You can use it as a starter for your custom pages.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}


export default Blank;
