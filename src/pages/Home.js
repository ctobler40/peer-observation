import '../App.css';
import {Link} from 'react-router-dom';
import CardItem from '../components/CardItem';

function Home() {
  return (
    <div className='home'>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__home'>
              <div className='home_title'>
                Connect. Observe. Grow.
              </div>
              <div className='home_caption'>
                PeerView connects and enables scheduling for professors and teaching assistants to observe and learn from each other through class observations.
              </div>
              <Link to='/'>
                <button className='home_button'>
                  Get Started for Free
                </button>
              </Link>
            </ul>
            <ul className='cards__items'>
              <CardItem
                /* src={} */
                text='Schedule Observations'
                label='Read More >'
                path='/observations'
              />
              <CardItem
                /* src={} */
                text='Instant Feedback'
                label='Read More >'
                path='/feedback'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                /* src={} */
                text='Peer Messaging'
                label='Read More >'
                path='/messaging'
              />
              <CardItem
                /* src={} */
                text='Teaching Resources'
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