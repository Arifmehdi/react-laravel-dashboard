import {Link} from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';



const Layout = ({children}) => {
    return (
        <section>
            <Header />
            <Sidebar />
            {children}
        </section>
    );
}



export default Layout;
