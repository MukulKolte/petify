import React from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate();

    return (
        <div className='navbar'>
            <div className='logo-text'>
                <svg className='navbar-logo' width="66" height="68" viewBox="0 0 66 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.1777 33.8837C28.3236 37.0073 30.1327 41.496 29.0341 47.7564C27.5225 56.8681 31.6945 60.7001 35.5676 59.2093C39.4407 57.7186 39.4141 51.8383 43.1086 49.3758C46.5775 46.7061 52.0646 48.5152 54.5352 45.1305C57.1186 41.8493 54.8255 36.5123 45.9138 35.1925C39.9782 34.385 36.2737 31.1843 32.1777 33.8837Z" fill="#FFE55E" />
                    <path d="M19.4124 37.919C23.9878 39.8143 27.1245 43.6567 26.4329 46.4822C25.6497 49.4158 21.3204 50.2459 16.745 48.3505C12.1696 46.4552 9.0329 42.6128 9.72447 39.7873C10.5077 36.8537 14.8369 36.0236 19.4124 37.919Z" fill="#FFAA00" />
                    <path d="M39.2238 23.3947C39.3073 28.3004 41.8351 32.2317 44.7868 32.3273C47.7386 32.4228 50.1624 28.6129 50.0789 23.7073C49.9953 18.8016 47.4675 14.8702 44.5158 14.7747C41.4681 14.7923 39.0443 18.6021 39.2238 23.3947Z" fill="#FFAA00" />
                    <path d="M23.0109 23.479C26.8464 27.2016 28.1337 32.1788 26.0146 34.4266C23.8954 36.6744 19.0364 35.4071 15.201 31.6845C11.3655 27.9619 10.0782 22.9847 12.1973 20.7369C14.3165 18.4891 19.1754 19.7564 23.0109 23.479Z" fill="#FFAA00" />
                    <path d="M25.0343 21.7814C27.2042 26.3014 31.1352 28.7458 33.7673 27.4701C36.4921 26.0852 36.9424 21.445 34.8814 17.0249C32.7115 12.5049 28.7804 10.0606 26.1484 11.3362C23.4074 12.5119 22.8644 17.2614 25.0343 21.7814Z" fill="#FFAA00" />
                </svg>
                <div className='navbar-text'>G<span style={{ color: '#FFE55E' }}>local</span></div>
            </div>

            <div className='links'>
                <button className='home-text' onClick={() => navigate('/', { replace: true })}>Home</button>
                <button className='categories-text' onClick={() => navigate('/categories', { replace: true })}>Categories</button>
                <button className='about-text' href='#'>About Us</button>
                <button className='products-text' href='#'>Products</button>
                <button className='petcare-text' href='#'>Pet Care</button>
                <button className='contact-text' href='#'>Contact</button>
            </div>

            <div className='buttons'>
                <div className='signin-btn'>
                    <button className='signin-outer-layer'>
                        <span className='text-sign-in'>Sign In</span>
                    </button>
                </div>
                <div className='register-btn'>
                    <button className='register-outer-layer'>
                        <span className='text-register'>Register</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
