import pavers from '../images/PaversandFence.jpg';
import couch from '../images/DeckWood3.jpeg';
import house from '../images/FenceWood2.jpg';
import house2 from '../images/Home4.jpg';

function Card() {
    return (
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
    )
}

export default Card;