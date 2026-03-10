import './TitleCard.css'
import { Bird } from 'lucide-react';
import photo from './assets/photo-1732239613951-0f10063b4589.jpg';  

function TitleCard(){
    var x = 0
function click(){
    x += 1
    console.log(x)
}
    return (
        <>
            <div className='flower'>
               <div>
                <div><Bird className='one'/><Bird className='two'/><Bird className='three'/></div>
                <p className='text'>Are your children troubling you?</p>
                <p className='text'>Rebelling against you?</p>
                <h1>MAJELLA</h1>
                <p className='text'>Why not a vacation to Majella?</p>
                <p className='text'>The scenery and games in Majella are sure to cleanse them</p>
                <button><a href="#vox" className='link'>Discover Majella</a></button>
                </div>
            </div>
        </>
    )
}
export default TitleCard
