
import '../styles/home.css'
import Image from 'next/image';
import goodDay from '../public/good day.gif';
import InfoBox from './components/home/infoBox';
import Header from './components/header';
import Footer from './components/footer';
import Container from './components/projects/container';
import GithubHeatmap from './components/home/githubHeatmap';


export default function Home() {

  return (
      <div className='container'>
        <Header/>
        <div className='main'>
          <InfoBox/>
          <Container/>
          <div className='heatmap'>
            <h1>GitHub Activity</h1>
          </div>
          <Footer/>
        </div>
      </div>
  );
}
