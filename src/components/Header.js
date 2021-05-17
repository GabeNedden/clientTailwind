import logo from '../images/logo.jpeg';

function Header() {
    return (
        <div class="font-construct">
        <header class="hero-pattern bg-cover h-screen bg-no-repeat flex justify-center bg-bottom">
            <div class="max-w-4xl w-screen">
                <div class="flex items-center justify-between">
                    <img class='object-contain mx-auto mt-8 h-36 w-full' src={logo} alt='logo'></img>
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