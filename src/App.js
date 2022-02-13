import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import HeaderSection from './components/HeaderSection';
import SubscribeSection from './components/SubscribeSection';
import VideoSection from './components/VideoSection';
import PercentSection from './components/PercentSection';
import UpgradeSection from './components/UpgradeSection';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeaderSection/>
      <SubscribeSection/>
      <VideoSection/>
      <PercentSection/>
      <UpgradeSection/>
    
    </div>
  );
}

export default App;
