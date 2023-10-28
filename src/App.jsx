import './App.css'
import BodyBg from './Components/BodyBg';
import Footer from './Components/Footer';

function App() {

  return (

    <>
      
      <div className="container">
        
        <div className="content">
          <div className="head">
            <div className="image">
              <img src="./Rectangle 90.png" alt="" />
            </div>
          </div>

          <div className="body">
            <BodyBg />
            <Footer />
          </div>

        </div>
      </div>

    </>

  )

}

export default App