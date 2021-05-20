import kichler from '../images/kichler.jpeg';
import oaks from '../images/oaks.jpeg';
import rinox from '../images/rinox.jpeg';
import techno from '../images/techno-bloc.jpeg';
import permacon from '../images/permacon.jpeg';

function About() {
    return (
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
    )
}

export default About;