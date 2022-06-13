import {  Outlet } from 'react-router-dom';
import { Header  } from '../Header';
import { Footer  } from '../Footer';
import { useTheme } from '../../features/theme/useTheme'




const Layout = () => {
  const {theme} = useTheme()

  return (
      <div className={`theme--${theme}`}>
        <Header />
        <div className="container" >
            <Outlet/>
            <Footer/>
        </div>
        
      </div>
  )
}

export default Layout