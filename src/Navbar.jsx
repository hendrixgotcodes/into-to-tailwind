import React from 'react'

export default function Navbar() {
    return (
        <div className='text-gray-600 font-body'>
            <nav>
                <div>
                    <h1 className='font-bold uppercase border-b border-gray-100'>
                        <a href="/" className='text-green-500 sm:text-red-500 lg:text-blue-500' >Food Ninja</a>
                    </h1>
                </div>
                <ul>
                    <li className='text-gray-700 font-bold' >
                        <a href="/">
                            <span>
                                Home
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <span>
                                About
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <span>
                                Contact
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
