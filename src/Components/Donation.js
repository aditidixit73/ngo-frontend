import QRCode from 'react-qr-code';
import React, { useState } from 'react'

export default function Donation() {
    const [amount, setAmt] = useState(0)
    const [selected, setsel] = useState(false)
    const payMoney = (e) => {
        e.preventDefault()
        setAmt(Math.abs(amount))
        setsel(true)
    }

    return (
        <div className='donation-page'>
            <span><h2>Donate to Prof. Sangam Lal Pandey Memorial Society.</h2>
                <p>We invite you to join us in making a difference with the Prof. Sangam Lal Pandey Memorial Society. Your generous donation will empower our mission to transform lives and uplift communities. Every contribution, big or small, helps us continue our vital work in education, healthcare, and social welfare.
                    <p>
                        Together, we can create a brighter future and honor the legacy of Prof. Sangam Lal Pandey. Please donate today and be a part of our journey towards positive change.
                    </p>
                    Thank you for your support.</p></span>
            {selected ?
                <div className='qrcode-pay'>
                    <h4>Payment Amount : {amount}</h4>
                    <QRCode value={`upi://pay?pa=professorsangamlalpandey@cnrb&pn=NGO&am=${amount}&cu=INR&tn=Donation%20for%20NGO`} />
                </div>
                : <form onSubmit={payMoney}>
                    <input type="number" onChange={(e) => { setAmt(e.target.value) }} placeholder='Enter an Amount to donate' />
                    <input type="submit" value={'Pay Now'} disabled={amount === 0 ? "a" : ""} />
                </form>}
        </div>
    )
}
