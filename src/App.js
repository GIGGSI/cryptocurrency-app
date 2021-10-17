import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'
import { Footer, Navbar } from './components'
import { HomePage, Exchanges, Cryptocurrencies, CryptoDetails, News } from './pages'

function App() {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/exchanges' component={Exchanges} />
              <Route exact path='/cryptocurrencies' component={Cryptocurrencies} />
              <Route exact path='/crypto/:cointId' component={CryptoDetails} />
              <Route exact path='/news' component={News} />
            </Switch>
          </div>
        </Layout>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
