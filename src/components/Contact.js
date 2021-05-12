import truck from '../images/truck.png';

function Contact() {
    return (
        <div class="font-construct items-center justify-between">
            <div class="font-construct text-center block my-8 text-4xl md:text-6xl leading-tight font-bold text-black">Contact Us!</div>
                <div class="w-10/12 mx-auto flex flex-wrap overflow-hidden">
                    <div class="w-full overflow-hidden lg:w-1/2 xl:w-1/2">
                        <div class="font-medium text-xl p-3">Better yet, come see us in person!</div>
                        <div class="p-3 text-gray-800 text-md">We love our customers, so feel free to contact us during normal business hours and we will meet you at your residence to discuss your project. Use our contact form to tell us more about your project, and we will connect with you shortly.</div>
                        <div class="font-medium text-xl p-3">Groupe Constructek</div>
                        <div class="pl-3 text-gray-800 text-md">4141, rue Sherbrooke O. Suite 650, Montreal, Québec H3Z 1B8</div>
                        <div class="pl-3 text-gray-800 text-md">Telephone: 514 242-4488</div>
                        <div class="font-medium text-xl p-3">Hours</div>
                        <div class="pl-3 text-gray-800 text-md">Monday to Friday</div>
                        <div class="pl-3 text-gray-800 text-md">9:00AM to 5:00PM</div>
                        
                    </div>

                    <div class="w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/2">
                        <img alt="Truck" src={truck} />
                    </div>
                    <button class="mb-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-auto">
                        Contact Us
                    </button>
            </div>
        </div>
    )
}

export default Contact;