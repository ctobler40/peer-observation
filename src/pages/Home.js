import '../App.css';
import {Link} from 'react-router-dom';
import CardItem from '../components/CardItem';

function Home() {
  return (
    <div className='home'>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__hero'>
              <div className='home_title'>
                Connect<span id="dot1">.</span> Observe<span id="dot2">.</span> Grow
              </div>
              <div className='home_caption'>
                PeerView connects and enables scheduling for professors and teaching assistants to observe and learn from each other through class observations.
              </div>
              <Link to='/'>
                <button className='home_button'>
                  Get started for free
                </button>
              </Link>
            </ul>
            <ul className='cards__items'>
              <CardItem className='card1'
                /* src={} */
                text='Schedule observations'
                label='Read More >'
                path='/observations'
              />
              <CardItem className='card2'
                /* src={} */
                text='Instant feedback'
                label='Read More >'
                path='/feedback'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem className='card3'
                /* src={} */
                text='Peer messaging'
                label='Read More >'
                path='/messaging'
              />
              <CardItem className='card4'
                /* src={} */
                text='Teaching resources'
                label='Read More >'
                path='/resources'
              />
            </ul>
          </div>
        </div>
    </div>
  );
}
export default Home;