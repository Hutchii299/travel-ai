import robot from '@/public/images/robot.png'
import Image from 'next/image'
import girl from '@/public/images/girl.jpg'
import cursor from '@/public/images/cursor.png'
import spain1 from '@/public/images/spain-1.jpg'
import spain2 from '@/public/images/spain-2.jpg'
import spain3 from '@/public/images/spain-3.jpg'

const LandingPage = () => {
  return (
    <div className="pb-[200px] pt-4 md:pt-10 container mx-auto max-w-7xl">
      <section id="hero" className="bg-slate-300">
        Hero section
      </section>
      <section
        id="how-it-works"
        className="bg-slate-100 flex flex-col justify-center"
      >
        <h2 className="text-4xl font-bold font-semibold mb-8 text-center">
          How it works
        </h2>
        <div
          id="chatbox"
          className="text-lg border bg-white p-8 m-8 drop-shadow rounded-lg"
        >
          <div id="messages" className="space-y-4 flex flex-col">
            {/* INITIAL BOT MESSASGE */}
            <div className="flex gap-4">
              <Image
                src={robot}
                alt="A robot avatar"
                className="rounded-full drop-shadow-lg w-8 h-8"
              />
              <div className="space-y-2">
                <div className="inline-block bg-gray-100/70 animate-pop-in p-2 max-w-[70%] rounded-lg">
                  <p>
                    Hi Tori, welcome to travelAI! I&apos;m Steven, your personal
                    travel agent. I can help you plan your getaway, including
                    organising flights, accomodation, car rentals and
                    recommending activities.
                  </p>
                </div>
                <div className="inline-block bg-gray-100/70 animate-pop-in p-2 max-w-[70%] rounded-lg">
                  <p>
                    Start by telling me a bit about your trip. Where would you
                    like to go and what would you like to do?
                  </p>
                </div>
              </div>
            </div>
            {/* GIRL MESSAGE 1 */}
            <div className="inline-block self-end bg-blue-100/70 animate-pop-in p-2 max-w-[70%] rounded-lg">
              <p>
                I’m looking for a week-long beach trip in mid-March to spend
                time with my family in Spain, with no set budget. Can you give
                me some options?
              </p>
            </div>

            {/* BOT MESSAGE 2 */}
            <div className="flex gap-4">
              <Image
                src={robot}
                alt="A robot avatar"
                className="rounded-full drop-shadow-lg w-8 h-8"
              />
              <div className="space-y-2">
                <div className="inline-block bg-gray-100/70 animate-pop-in p-2 max-w-[70%] rounded-lg">
                  <p>
                    Certainly! Spain offers a wide range of beautiful coastal
                    destinations. Here are some options you can consider, click
                    on them to find out more.
                  </p>
                </div>
                <div className="bg-gray-100/70 animate-pop-in p-2 w-max max-w-[70%] rounded-lg">
                  <ul className="list-disc pl-4">
                    <li className="text-blue-400 underline relative">
                      Costa del Sol
                      <Image
                        src={cursor}
                        alt="cursor"
                        className="absolute bottom-0 right-0"
                      />
                    </li>
                    <li className="text-blue-400 underline">
                      Balearic Islands
                    </li>
                    <li className="text-blue-400 underline">Canary Islands</li>
                    <li className="text-blue-400 underline">Costa Brava</li>
                    <li className="text-blue-400 underline">Costa Blanca</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* BOT MESSAGE 3 - IMAGES */}
            <div className="flex gap-4">
              <Image
                src={robot}
                alt="A robot avatar"
                className="rounded-full drop-shadow-lg w-8 h-8"
              />
              <div className="space-y-2">
                <div className="inline-block bg-gray-100/70 animate-pop-in p-2 max-w-[70%] rounded-lg">
                  <p>
                    Costa del Sol: Located in the region of Andalusia, Costa del
                    Sol is known for its sunny weather and stunning beaches.
                    Marbella and Malaga are popular cities in this area,
                    offering a mix of relaxation and vibrant nightlife.
                  </p>
                </div>
                <div className="bg-gray-100/70 animate-pop-in p-2 w-max max-w-[70%] rounded-lg flex gap-3">
                  <Image
                    src={spain1}
                    alt="Costa del Sol"
                    className="rounded-lg brightness-125"
                  />
                  <Image
                    src={spain2}
                    alt="Costa del Sol"
                    className="rounded-lg brightness-125"
                  />
                  <Image
                    src={spain3}
                    alt="Costa del Sol"
                    className="rounded-lg brightness-125"
                  />
                </div>
                <div className="inline-block bg-gray-100/70 animate-pop-in p-2 max-w-[70%] rounded-lg">
                  <p>Would you like to add Costa del Sol to your shortlist?</p>
                </div>
              </div>
            </div>

            {/* GIRL MESSAGE 2 */}
            <div className="inline-block self-end bg-blue-100/70 animate-pop-in p-2 max-w-[70%] rounded-lg">
              <p>
                Yes, that looks great! What are some 5 star hotels close to the
                beach availiable for my family and I?
              </p>
            </div>

            {/* BOT MESSAGE 4 */}
            <div className="flex gap-4">
              <Image
                src={robot}
                alt="A robot avatar"
                className="rounded-full drop-shadow-lg w-8 h-8"
              />
              <div className="space-y-2">
                <div className="inline-block bg-gray-100/70 animate-pop-in p-2 max-w-[70%] rounded-lg">
                  <p>
                    Certainly! Here are some 5-star hotels in Costa del Sol that
                    are closest to the beach
                  </p>
                </div>
                <div className="bg-gray-100/70 animate-pop-in p-2 w-max max-w-[70%] rounded-lg">
                  <ul className="list-disc pl-4">
                    <li className="text-blue-400 underline relative">
                      Marbella Club Hotel Golf Resort & Spa (Marbella)
                      <Image
                        src={cursor}
                        alt="cursor"
                        className="absolute bottom-0 right-0"
                      />
                    </li>
                    <li className="text-blue-400 underline">
                      Puente Romano Marbella (Marbella)
                    </li>
                    <li className="text-blue-400 underline">
                      Villa Padierna Palace Hotel (Benahavís)
                    </li>
                    <li className="text-blue-400 underline">
                      Hotel Don Carlos (Marbella)
                    </li>
                    <li className="text-blue-400 underline">
                      Hotel Los Monteros Spa & Golf Resort (Marbella)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* TEXT INPUT */}
          <div className="mt-24 flex gap-8 items-center justify-end">
            <div className="py-2 px-4 rounded-full bg-gray-50 flex-auto">
              <p className="text-gray-400">Tell me where you want to go...</p>
            </div>
            <Image src={girl} alt="user avatar" className="rounded-full" />
          </div>
        </div>

        <div className="text-lg border bg-white p-8 m-8 mt-0 drop-shadow rounded-lg relative">
          Short List
        </div>
      </section>
    </div>
  )
}

export default LandingPage
