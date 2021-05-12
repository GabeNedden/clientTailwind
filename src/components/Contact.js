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

            <div class="bg-white dark:bg-gray-900">
                <div class="flex w-full justify-around items-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-5">
                </div>
                <form action="http://localhost:3000" method="post" class="my-20 p-10 max-w-xl mx-auto shadow-md sm:border-0 md:border md:border-gray-900 md:dark:border-gray-100 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                    <div class="mb-10">
                        <h1 class="font-bold text-4xl mb-3">Get in touch</h1>
                        <p class="font-medium text-lg mb-5">Send us a quick message and we'll get back to you shortly.</p>
                        <hr class="border-gray-900 dark:border-gray-100" />
                    </div>
                    <div class="mb-5">
                        <label for="message" class="text-lg flex justify-between items-end"><span>Message</span><span class="text-xs text-red-500">Required</span></label>
                        <textarea name="message" id="message" cols="30" rows="10" class="shadow-md mt-1 block w-full sm:text-sm rounded-none border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-900"></textarea>
                    </div>
                    <div class="mb-5">
                        <label for="name" class="text-lg flex justify-between items-end"><span>Name</span><span class="text-xs text-red-500 ">Required</span></label>
                        <div class="mt-1 flex shadow-md">
                            <span class="inline-flex items-center px-3 rounded-none border border-r-0 border-gray-900 dark:border-gray-100"><i class="fas fa-user"></i></span>
                            <input type="text" name="name" class="flex-1 block w-full sm:text-sm rounded-none border border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-900" />
                        </div>
                    </div>
                    <div class="mb-5">
                        <label for="email" class="text-lg flex justify-between items-end"><span>Email</span><span class="text-xs text-red-500">Required</span></label>
                        <div class="mt-1 flex shadow-md">
                            <span class="inline-flex items-center px-3 rounded-none border border-r-0 border-gray-900 dark:border-gray-100"><i class="fas fa-envelope"></i></span>
                            <input type="email" name="email" class="flex-1 block w-full sm:text-sm rounded-none border border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-900" />
                        </div>
                    </div>
                    <div>
                        <button type="submit" class="font-medium shadow-md rounded-none p-2 w-full focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-900 dark:border-gray-100 bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800 hover:bg-gray-900 dark:hover:bg-gray-100"><i class="fas fa-check"></i> Send</button>
                    </div>
                </form>
                </div>

        </div>
    )
}

export default Contact;