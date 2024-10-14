import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import LoginPage from './components/login/Login'
import SignupPage from './components/signup/Signup'
import OTPPage from './components/signup/Otp'
import HomePage from './components/HomePage/Home'
import AboutPage from './components/about/About'
import ContactUsPage from './components/contactus/ContactUs'
import Navbar from './components/Navbar/Navbar'
import PlanSelection from './components/planeSection/PlaneSection'
import ConfigureBot from './components/configureBot/ConfigBot'

function App() {
  return (
    <>
     <Router>
         <div>
          <Navbar/>
         </div>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/verifyemail' element={<OTPPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactUsPage/>}/>
        <Route path='/getbot' element={<PlanSelection/>}/>
        <Route path="/configure-bot/:plan" element={<ConfigureBot/>} />

      </Routes>
     </Router>
    </>
  )
}

export default App