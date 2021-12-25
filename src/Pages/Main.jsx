import React from 'react'

export default function Main() {
    return (
        <main className='text-gray-600 px-16 py-6 font-body'>
            <div>
                <a href="#" className='text-primary'>Login</a>
                <a href="#">Sign up</a>
            </div>
            <header>
                <h2 className='text-gray-700 text-6xl font-semibold'>Recipes</h2>
                <h3 className='text-2xl font-semibold' >For ninjas</h3>
            </header>

            <div>
                
                <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Latest Recipes</h4>
                <div className='mt-8'>
                    <img src="img/stew.jpg" alt="stew" />
                    <div>
                        <span>5 Bean Chill Stew</span>
                        <span>A recipe by Mario</span>
                    </div>
                </div>

                <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Most Popular</h4>
                <div></div>

                <div className='mt-8'>
                    <div className='bg-secondary-100 text-secondary-200'>Load more</div>
                </div>

            </div>
        </main>
    )
}
