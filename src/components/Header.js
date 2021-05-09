function Header() {
    return (
        <div class="font-construct flex flex-col">
        <header class="-mr-80 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 h-screen w-full flex justify-center border-b-8 border-white">
            <div class="max-w-4xl w-full">
                <div class="flex items-center justify-between text-gray-400">
                    <img class='object-contain mx-auto mt-8 h-36 w-full' src='https://img1.wsimg.com/isteam/ip/6e52cc35-1234-4fad-8162-6aa30e890f62/Groupe%20Constructek%20Logos.png/:/rs=w:373,h:162,cg:true,m/cr=w:373,h:162/qt=q:95' alt='logo'></img>
                </div>
                
                <div class="my-4">
                    <h1 class="text-6xl mt-12 font-bold text-center text-white ">Building Trust with Quality Work</h1>
                    <p class="text-4xl mt-4 justify-center text-center text-white ">We'll get the job done!</p>
                </div>
            </div>
        </header>
        </div>
    )
}

export default Header;