import { Mountain, Trees, Sun } from 'lucide-react';
import './Description.css'
import majellaImage from '../assets/photo-1609479425550-c90c41b91f0c.jpg';
import { Bike, Gamepad2, Compass, Heart, BookOpen} from "lucide-react";
import one from '../assets/e.jpg';
import two from '../assets/2.jpg';

function Description() {

    return(
        <>
        <div className='vox' id='vox'>
        <div className='flex'>
            <div className='scenery'>
        <h2>Breathtaking Scenery</h2>
        <p>
          The stunning landscapes of Majella will leave your family in awe. From majestic peaks to lush valleys, nature becomes your playground!
        </p>
        </div>
        <div className='things'>
          <div className='box'>
            <Mountain className='mountain'/>
            <h3>Mountain Peaks</h3>
            <p>
              Explore towering mountains that inspire wonder and adventure
            </p>
          </div>
          
          <div className='box'>
            <Trees className='trees'/>
            <h3>Forest Trails</h3>
            <p>
              Wander through enchanting forests perfect for family hikes
            </p>
          </div>
          
          <div className='box'>
            <Sun className='sun'/>
            <h3>Sunny Valleys</h3>
            <p>
              Relax in beautiful valleys with perfect weather year-round
            </p>
          </div>
          
        </div>
        <div className='photo'>
            <img src={majellaImage} alt="Family hiking in nature" />

          </div>
      </div>
      <div className='desc'>
        <div className='games'>
        
        <h3>Game & Activities</h3>
        <p>Watch your children transform as they discover the joy of outdoor adventures. Our activities are designed to channel their energy into positive experiences!</p>
        </div>
        <div className='vrox'>
          <div className='container'>
            <Gamepad2 className='Gamepad2'/>
            <h2 className='b'>Adventure Games</h2>
            <p className='c'>Treasure hunts, nature challenges, and outdoor games that keep kids engaged and active</p>
          </div>
          <div className='container'>
            <BookOpen className='BookOpenText'/>
            <h2 className='b'>The Grand Manuscript</h2>
            <p className='c'>Discover salvation written in ancient scriptures, every action is foretold here.</p>
          </div>
          <div className='container'>
            <Compass className='Compass'/>
            <h2 className='b'>Exploration</h2>
            <p className='c'>Guided tours and self-discovery paths that spark curiosity and learning</p>
          </div>
          <div className='container'>
            <Heart className='Heart'/>
            <h2 className='b'>Family Bonding</h2>
            <p className='c'>Activities designed to bring families closer together in nature</p>
          </div>
        </div>
      </div>
      <div className='twoimg'>
        <img src={one} alt="" />
        <img src={two} alt="" className='kids'/>
      </div>

</div>
        </>
    )
}
export default Description 