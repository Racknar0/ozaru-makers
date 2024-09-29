import Image from 'next/image'
import React from 'react'
import '@/app/scss/components/newsletter-bar.scss'

const NewsLetterBar = () => {
  return (
    <div className='newsletter_container'>
        <div className='left'>
            <div className='info_container'>
                <Image src='/images/icons/card.svg' alt='card' width={30} height={30} />
                <p>Easy <span>Payment</span> </p>
            </div>
            <div className='info_container'>
                <Image src='/images/icons/badge.svg' alt='card' width={30} height={30} />
                <p>Licensed <span>Products</span> </p>
            </div>
            <div className='info_container'>
                <Image src='/images/icons/verified.svg' alt='card' width={30} height={30} />
                <p>Global <span>Delivery</span> </p>
            </div>
            <div className='info_container'>
                <Image src='/images/icons/verified.svg' alt='card' width={30} height={30} />
                <p>100% <span>Secure</span> </p>
            </div>
        </div>

        <div className='right'>
            <div className='form_container'>
                <h3 className='info_form'>Subscribe and Receive our <span>Latest news</span> and <span>Special Offers</span></h3>
                <form action="">
                    <input type="text" placeholder='Enter your email address' />
                    <button>
                        <Image src='/images/icons/send.svg' alt='send' width={30} height={30} />
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default NewsLetterBar