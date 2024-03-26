import './why.css'
import apiImage from './assets/images/icon-api.svg'
import budgetImage from './assets/images/icon-budgeting.svg'
import OnbouradImage from './assets/images/icon-onboarding.svg'
import OnlineImage from './assets/images/icon-online.svg'

export default function Why(){
    return(
       <div className='sectionWhy'>
        <div className='whyHeader'>
            <h2>Why choose Easybank?</h2>
            <p>
            We leverage Open Banking to turn your bank account into your financial hub. Control 
            your finances like never before.
            </p>
        </div>
        <div className='whyCards'>
            <div>
                <img src={OnlineImage} alt="OnlineImage" />
                <h3>Online Banking</h3>
                <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
            </div>
            <div>
                <img src={budgetImage} alt="budgetImage" />
                <h3>Simple Budgeting</h3>
                <p>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
            </div>
            <div>
                <img src={OnbouradImage} alt="OnbouradImage" />
                <h3>Fast Onboarding</h3>
                <p>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
            </div>
            <div>
                <img src={apiImage} alt="apiImage" />
                <h3>Open API</h3>
                <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
            </div>
        </div>
       </div>
    )
}