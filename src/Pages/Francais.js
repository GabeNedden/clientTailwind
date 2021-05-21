import React from 'react';
import Carousel from 'react-grid-carousel';

import image1 from '../images/DeckWood2.jpg';
import image4 from '../images/Home3.jpg';
import image5 from '../images/BackyardDeck.jpeg';
import image6 from '../images/Home2.jpg';
import pavers from '../images/PaversandFence.jpg';
import couch from '../images/DeckWood3.jpeg';
import house from '../images/FenceWood2.jpg';
import house2 from '../images/Home4.jpg';
import kichler from '../images/kichler.jpeg';
import oaks from '../images/oaks.jpeg';
import rinox from '../images/rinox.jpeg';
import techno from '../images/techno-bloc.jpeg';
import permacon from '../images/permacon.jpeg';
import truck from '../images/truck.png';
import Navbar from '../components/Navbar';

const navigation = [
    { name: 'Francais', href: '/fr', current: true },
    { name: 'English', href: '/', current: false }
  ]

function Francais() {
    return (
        <>
            <Navbar navigation={navigation} />

            <div class="font-construct">
                <header class="hero-pattern bg-cover h-screen bg-no-repeat flex justify-center bg-bottom">
                    <div class="max-w-4xl w-screen">
                        {/* <div class="flex items-center justify-between">
                            <img class='object-contain mx-auto mt-8 h-36 w-full' src={logo} alt='logo'></img>
                        </div> */}
                        <div class="py-24"></div>
                        <div class="p-4">
                            <h1 class="text-6xl mt-8 self-center font-bold text-center text-white ">Building Trust with Quality French!</h1>
                            <p class="text-4xl mb-8 justify-center text-center text-white ">We'll get the job done!</p>
                        </div>
                    </div>
                </header>
            
        {/* Cards */}
        
        <div class="font-construct mt-8">
            <div class="bg-white mx-auto w-11/12 xl:w-full md:py-12 py-6">
                <div class=" mx-auto bg-white border border-gray shadow-md overflow-hidden md:max-w-6xl">
                    <div class="md:flex">
                        <div class="md:flex-shrink-0">
                            <img class="h-full w-full object-cover md:w-96" src={pavers} alt="Home with Deck"/>
                        </div>
                        <div class="p-8">
                            <div class="block mt-1 text-4xl md:text-6xl leading-tight font-bold text-black">Landscaping and Hardscaping</div>
                            <p class="mt-2 text-gray-800">Whether it be a small garden renovation or a complete front and back yard installation, we take the same care and attention to each detail to ensure that the time spent in your yard is relaxing and rewarding.</p>
                            <p class="mt-2 text-gray-800">We keep an eye on budgets to ensure the lowest costs, stay on top of schedules for timely delivery and work closely with the design team to create your vision.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white mx-auto w-11/12 xl:w-full md:py-12 py-6">
                <div class=" mx-auto bg-white border border-gray shadow-md overflow-hidden md:max-w-6xl">
                    <div class="md:flex">
                        <div class="md:flex-shrink-0">
                            <img class="w-full object-cover h-full md:w-96" src={couch} alt="Home with Deck"/>
                        </div>
                        <div class="p-8">
                            <div class="block mt-1 text-4xl md:text-6xl leading-tight font-bold text-black">Fences & Decks</div>
                            <p class="mt-2 text-gray-800">Group Constructek has a team of carpentry professionals to help create a new fence, deck or custom structure for your home. We install a wide variety of fences and outdoor structures and our team will work closely with you to achieve a long lasting investment that compliments you and your home.</p>
                            <p class="mt-2 text-gray-800">Some of the items we build, but are not limited to, are: fences, trellises, pergolas, gazebos, gates & archways, vegetable/garden beds, retaining walls, concrete forms, decks and landings.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white mx-auto w-11/12 xl:w-full md:py-12 py-6">
                <div class=" mx-auto bg-white border border-gray shadow-md overflow-hidden md:max-w-6xl">
                    <div class="md:flex">
                        <div class="md:flex-shrink-0">
                            <img class="w-full object-cover h-full md:w-96" src={house2} alt="Home with Deck"/>
                        </div>
                        <div class="p-8">
                            <div class="block mt-1 text-4xl md:text-6xl leading-tight font-bold text-black">Services we Offer</div>
                            <ul class="list-disc mt-2 text-gray-800">
                                <li>Landscape Planning / Concept Drawing</li>
                                <li>Fences, Decks, Pergolas, Custom Wooden Features</li>
                                <li>Driveway Installations, Retaining Walls, Steps and Pathways</li>
                                <li>Excavation and Machine Transferring of Materials</li>
                                <li>Landscape Lighting</li>
                                <li>Softscape Installation : Lawns and Gardens</li>
                                <li>Green Roof, Living Wall or Vertical Gardens</li>
                                <li>Delivery of Soils & Aggregates</li>
                            </ul>
                            <p class="mt-2 text-gray-800">Working with trusted subcontractors, we keep them accountable throughout the entire build. From sequence to production and quality control, we stay focused on the goal. </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white mx-auto w-11/12 xl:w-full md:py-12 py-6">
                <div class=" mx-auto bg-white border border-gray shadow-md overflow-hidden md:max-w-6xl">
                    <div class="md:flex">
                        <div class="md:flex-shrink-0">
                            <img class="w-full object-cover h-full md:w-96" src={house} alt="Home with Deck"/>
                        </div>
                        <div class="p-8">
                            <div class="block mt-1 text-4xl md:text-6xl leading-tight font-bold text-black">Final Steps</div>
                            <p class="mt-2 text-gray-800">The last step in any build. This phase includes site cleanup, systems training, final inspections and move-in coordination. After completion, we have a final walkthrough to ensure your complete satisfaction. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Gallery */}
        <div class=" items-center justify-between">
            <div class="font-construct text-center block my-8 text-4xl md:text-6xl leading-tight font-bold text-black">Photo Gallery</div>
            <div class="mb-16">
                <Carousel cols={2} rows={1} gap={10} scrollSnap={true} >
                <Carousel.Item>
                    <img class="mx-auto" width="100%" alt="project" src={image1} />
                </Carousel.Item>
                <Carousel.Item>
                    <img class="mx-auto" width="100%" alt="project" src={image4} />
                </Carousel.Item>
                <Carousel.Item>
                    <img class="mx-auto" width="100%" alt="project" src={image5} />
                </Carousel.Item>
                <Carousel.Item>
                    <img class="mx-auto" width="100%" alt="project" src={image6} />
                </Carousel.Item>
                </Carousel>
            </div>
        </div>
        
        {/* About */}
            
        <div class="font-construct flex flex-col">
            <h2 class="mt-2 text-center font-bold text-4xl md:text-6xl text-black">What We Do</h2>
            <div class="bg-white self-center w-10/12 md:w-1/2 py-8">
                <div class=" mx-auto bg-white border border-gray md:max-w-6xl">
                    <div class="md:flex">
                        <div class="p-6">
                            <p class="text-center text-sm lg:text-lg text-gray-800">Groupe Constructek is an innovative, full service, landscape, hardscaping, fence and deck design company. We are dedicated to superior landscaping services in residential installations, fence & deck installations and excavation services.  We are committed to excellence in every project regardless of size and scope.</p>
                        </div>
                    </div>
                </div>
            </div>
                
                <div class="flex flex-col sm:flex-row mb-8 text-xl">
                    <div class="sm:w-1/3">
                        <div class="bg-white p-8 h-full flex flex-col items-center sm:mx-2 sm:px-3 sm:py-1 md:p-8">
                            <div class="mt-3 font-bold">Customer Service</div>
                            <div class="mt-1 text-sm lg:text-lg text-gray-600 text-center">We strive for exceptional customer service in every project from start to finish.  Timelines, budgets, materials and professionalism are foundational to our success.</div>
                        </div>
                    </div>

                    <div class="sm:w-1/3">
                        <div class="bg-white p-8 h-full flex flex-col items-center sm:mx-2 sm:px-3 sm:py-1 md:p-8">
                            <div class="mt-3 font-bold">Environmental Awareness</div>
                            <div class="mt-1 text-sm lg:text-lg text-gray-600 text-center">We take an environmentally conscious approach to projects by considering the methods of construction, orientation and long term effects of the materials and products we use.  Local, environmentally responsible and sustainable products are encouraged.</div>
                        </div>
                    </div>
                    
                    <div class="sm:w-1/3">
                        <div class="bg-white p-8 h-full flex flex-col items-center sm:mx-2 sm:px-3 sm:py-1 md:p-8">
                            <div class="mt-3 font-bold">Quality</div>
                            <div class="mt-1 text-sm lg:text-lg text-gray-600 text-center">We take pride in our outstanding workmanship, honesty, reliability and professional integrity. Each project and client is important to us and we ensure that our work reflects our high standards.</div>
                        </div>
                    </div>
                    
                </div>

                <h2 class="mt-8 text-center font-bold text-4xl md:text-6xl text-black">Our Partners</h2>
            <div class="self-center w-10/12 py-8">
                <div class=" mx-auto border border-gray md:max-w-6xl">
                    <div class="container mx-auto p-8">
                        <div class="flex flex-row flex-wrap">

                            <div class="w-full sm:w-1/3 h-32 mb-4 sm:mb-0 px-2">
                                <img class="mx-auto" alt="Techno-Bloc" src={techno} />
                            </div>
                            <div class="w-full sm:w-1/3 h-32 mb-4 sm:mb-0 px-2">
                                <img class="mx-auto" alt="Rinox" src={rinox} />
                            </div>
                            <div class="w-full sm:w-1/3 h-32 px-2">
                                <img class="mx-auto" alt="Kichler" src={kichler} />
                            </div>

                            <div class="w-full sm:w-1/2 h-32 mb-4 sm:mb-0 px-2">
                                <img class="mx-auto" alt="Oaks" src={oaks} />
                            </div>
                            <div class="w-full sm:w-1/2 h-32 mb-4 sm:mb-0 px-2">
                                <img class="mx-auto" alt="Permacon" src={permacon} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Contact */}

        <div class="font-construct items-center justify-between">
            <div class="font-construct text-center block my-8 text-4xl md:text-6xl leading-tight font-bold text-black">Contact Us!</div>
                <div class="w-10/12 mx-auto flex flex-wrap overflow-hidden">
                    <div class="w-full overflow-hidden lg:w-1/2 xl:w-1/2">
                        <div class="font-medium text-xl p-3">Better yet, come see us in person!</div>
                        <div class="p-3 text-gray-800 text-md">We love our customers, so feel free to contact us during normal business hours and we will meet you at your residence to discuss your project. Use our contact form to tell us more about your project, and we will connect with you shortly.</div>
                        <div class="font-medium text-xl p-3">Groupe Constructek</div>
                        <div class="pl-3 text-gray-800 text-md">4141, rue Sherbrooke O. Suite 650, Montreal, Québec H3Z 1B8</div>
                        <a href="tel:514 242-4488" class="pl-3 text-blue-900 text-md">Telephone: 514 242-4488</a>
                        <div class="font-medium text-xl p-3">Hours</div>
                        <div class="pl-3 text-gray-800 text-md">Monday to Friday</div>
                        <div class="pl-3 text-gray-800 text-md">9:00AM to 5:00PM</div>
                        
                    </div>

                    <div class="w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/2">
                        <img alt="Truck" src={truck} />
                    </div>
            </div>

            <form name="simpleContactForm" method="POST" data-netlify-recaptcha="true" data-netlify="true" id="simple-contact-form" class="mb-20 p-10 max-w-xl mx-auto shadow-md  sm:border-0 md:border md:border-gray-900 text-gray-900">
                <div class="mb-10">
                    <h1 class="font-bold text-4xl mb-3">Get in touch</h1>
                    <p class="font-medium text-lg mb-5">Send us a message and we'll get back to you shortly.</p>
                    <hr class="border-gray-900" />
                </div>
                <input type="hidden" name="form-name" value="simpleContactForm" />
                
                <div class="mb-5">
                    <label for="name" class="text-lg flex justify-between items-end"><span>Name</span><span class="text-xs text-red-500 ">Required</span></label>
                    <div class="mt-1 flex shadow-md">
                        <input type="text" name="name" class="flex-1 block w-full sm:text-sm h-10 p-3 border border-gray-900 bg-white" />
                    </div>
                </div>
                <div class="mb-5">
                    <label for="phone" class="text-lg flex justify-between items-end"><span>Phone Number</span><span class="text-xs text-red-500">Required</span></label>
                    <div class="mt-1 flex shadow-md">
                        <input type="tel" name="phone" class="flex-1 block w-full sm:text-sm h-10 p-3 border border-gray-900 bg-white" />
                    </div>
                </div>
                <div class="mb-5">
                    <label for="email" class="text-lg flex justify-between items-end"><span>Email</span><span class="text-xs text-red-500">Required</span></label>
                    <div class="mt-1 flex shadow-md">
                        <input type="email" name="email" class="flex-1 block w-full sm:text-sm h-10 p-3 border border-gray-900 bg-white" />
                    </div>
                </div>
                <div class="mb-5">
                    <label for="message" class="text-lg flex justify-between items-end"><span>Message</span><span class="text-xs text-red-500">Required</span></label>
                    <textarea name="message" id="message" cols="30" rows="10" class="p-3 shadow-md mt-1 block w-full sm:text-sm border-gray-900 border border-gray-900 "></textarea>
                </div>
                <div data-netlify-recaptcha="true"></div>
                <div>
                    <button type="submit" class="font-medium shadow-md  p-2 w-full focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-900 bg-gray-800 text-gray-200 hover:bg-gray-900"> Send</button>
                </div>
            </form>

        </div>
    
        </div>
    </>
        
    )
}

export default Francais;