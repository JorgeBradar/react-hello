import { Nav } from './components/Navbar'
import { Jumbotron } from './components/Jumbotron'
import { Card } from './components/Card'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Nav/>
      <Jumbotron/>
      <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <Card/>
            </div>
            <div className='col-md-3'>
                <Card/>
            </div>
            <div className='col-md-3'>
                <Card/>
            </div>
            <div className='col-md-3'>
                <Card/>
            </div>
        </div>
        </div>

      <Footer/>
      
      
    </>)
 
}

export default App
