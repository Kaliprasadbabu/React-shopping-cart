import './netflix-index.css';
import { NextflixHeader } from '../netflix-header/netflix-header';
import { NetflixMain } from '../netflix-main/netflix-main';

export function NetflixIndex()
{
    return(
        <div className="bg-image">
            <div className="bg-shade">
                 <NextflixHeader />
                 <NetflixMain />
            </div>
        </div>
    )
}