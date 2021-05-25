function Landing() {
    return (
        <div class="bg-gray-100 h-screen flex flex-wrap overflow-hidden">

            <div class="my-3 px-3 w-1/2 overflow-hidden grid height-screen place-items-center antialiased text-gray-900">
                <a href="/fr">
                    <img src="https://source.unsplash.com/random/350x350" alt="Test" class="w-full object-cover object-center rounded-lg shadow-md" />    
                    <div class="relative px-4 -mt-16  ">
                        <div class="bg-white p-6 rounded-lg shadow-lg">

                        
                            <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">Bienvenue</h4>
                    
                            <div class="mt-1">
                                Francais
                            </div>  
                        </div>
                    </div>
                </a>
            </div>

            <div class=" my-3 px-3 w-1/2 overflow-hidden grid height-screen place-items-center antialiased text-gray-900">
                <a href="/en">
                    <img src="https://source.unsplash.com/random/350x350" alt="Test" class="w-full object-cover object-center rounded-lg shadow-md" />    
                    <div class="relative px-4 -mt-16  ">
                        <div class="bg-white p-6 rounded-lg shadow-lg">

                        
                            <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">Welcome</h4>
                    
                            <div class="mt-1">
                                English
                            </div>  
                        </div>
                    </div>
                </a>
            </div>

        </div>
        
    )
}

export default Landing;