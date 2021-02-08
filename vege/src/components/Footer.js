import React from 'react'
import { Button } from './Button'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Adventure newsletter to recive best offerts
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                            type='email'
                            className='footer-input'
                            name='email'
                            placeholder='Your email'
                        />
                        <Button buttonStyle='btn--outline'>
                            Subscribe
                        </Button>
                    </form>
                </div>
            </section>
            
        </div>
    )
}

export default Footer
