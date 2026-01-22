import '../styles/home.css'
import Image from 'next/image';
import goodDay from '../public/good day.gif';
import InfoBox from './components/home/infoBox';
import Header from './components/header';

export default function Home() {
  return (
      <div className='container'>
        <div className='main'>
          <Header/>
          <InfoBox/>
        </div>
      </div>
  );
}
