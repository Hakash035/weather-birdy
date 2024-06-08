import React from 'react'
import Call1 from './Call1'

function Card() {
    return (
        <div>
            <h1 id="head_card">Temperature in top cities</h1>
            <div id="cards">
                <Call1 id="c1" className="j" city={'dubai'}/>
                <Call1 id="c2" className="j" city={'london'}/>
                <Call1  id="c3" className="j" city={'New york'}/>
                <Call1 id="c4" className="j" city={'Mexico'}/>
                <Call1 id="c5" className="j" city={'Tokyo'}/>
                <Call1 id="c6" className="j" city={'New Delhi'}/>
                <Call1 id="c7" className="j" city={'Thailand'}/>
                <Call1 id="c8" className="j" city={'sydney'}/>

            </div>
        </div>
    )
}

export default Card
