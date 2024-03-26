import confetti from './assets/images/image-confetti.jpg'
import currency from './assets/images/image-currency.jpg'
import plane from './assets/images/image-plane.jpg'
import restaurant from './assets/images/image-restaurant.jpg'

import './lastest.css'
export default function Latest(){
    return(
       <div className='LastestContainer'>
        <div className='LatestHeader'>
            <h2>Latest Articles</h2>
        </div>
        <div className='latestCard'>
            <div>
                <img src={currency} alt="" />

                <article>
                    <p>By Claire Robinson</p>
                    <h3>Receive money in any currency with no fees</h3>
                    <p>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
                </article>
            </div>
            <div>
                    <img src={restaurant} alt="" />
                <article>

                    <p>By Wilson Hutton</p>
                    <h3>Treat yourself without worrying about money</h3>
                    <p>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</p>
                </article>
            </div>
            <div>
                <img src={plane} alt="" />
                <article>

                    <p>By Wilson Hutton</p>
                    <h3>Take your Easybank card wherever you go</h3>
                    <p>We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</p>
                </article>
            </div>
            <div>
                <img src={confetti} alt="" />

                <article>
                    <p>By Claire Robinson</p>
                    <h3>Our invite-only Beta accounts are now live!</h3>
                    <p>After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</p>
                </article>
            </div>

        </div>
       </div>
    )
}