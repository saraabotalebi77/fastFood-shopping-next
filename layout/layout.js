import Header from 'components/header';
import Footer from 'components/footer';
const Layout = (props)=>{
    return(
        <div>
            <Header/>
            <main>{props.children}</main>
            <Footer/>           
        </div>
    )
}
export default Layout;