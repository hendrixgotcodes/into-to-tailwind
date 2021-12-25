import React from 'react'

export default function Main() {
    return (
        <main className='text-gray-600'>
            <div>
                <a href="#">Login</a>
                <a href="#">Sign up</a>
            </div>
            <header>
                <h2 className='text-gray-700 text-6xl font-semibold'>Recipes</h2>
                <h3 className='text-2xl font-semibold' >For ninjas</h3>
            </header>

            <div>
                
                <h4 className='font-bold'>Latest Recipes</h4>
                <div>
                    <img src="img/stew.jpg" alt="stew" />
                    <div>
                        <span>5 Bean Chill Stew</span>
                        <span>A recipe by Mario</span>
                    </div>
                </div>

                <h4>Most Popular</h4>
                <div></div>

                <div>
                    <div>Load more</div>
                </div>

            </div>
        </main>
    )
}
