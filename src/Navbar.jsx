import React from 'react'

export default function Navbar() {
    return (
        <div className='text-gray-600'>
            <nav>
                <div>
                    <h1 className='font-bold uppercase'>
                        <a href="/">Food Ninja</a>
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
