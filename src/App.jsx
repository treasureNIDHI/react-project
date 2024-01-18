import fortniteHeader from "./assets/fortnite-header.png";
import fortnite1 from "./assets/fortnite-1.png";
import fortnite2 from "./assets/fortnite-2.png";
import fortnite3 from "./assets/fortnite-3.png";

function App() {
  

 
  return (
    <>
      <div className="flex flex-col mx-4 md:mx-8">
        <div
          id="closeButton"
          className="text-4xl md:text-6xl self-end my-4 md:my-6 mx-4 md:mx-12 absolute cursor-pointer text-white hover:rotate-90 transition-transform duration-300"
          title="Close"
        >
          ×
        </div>
        
        
        <p className="text-white text-center text-lg md:text-4xl font-light w-full md:w-2/3 self-center my-4 md:my-12">
          Epic Games: An American Video Game And Software Developer And Publisher Based In Cary, North Carolina.
        </p>

        <img
          src={fortniteHeader}
          alt="Fortnite"
          className="w-full md:w-2/3 self-center my-4"
        />

        <p className="text-white text-center w-full md:w-2/3 self-center text-base md:text-lg font-light">
          Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.
        </p>

        <p className="self-center bg-white w-3/4 md:w-80 my-4 px-6 py-3 text-center text-base md:text-lg">
          Visit Website
        </p>

        <div className="flex flex-col md:flex-row self-center my-4 md:my-12">
          <div className="flex flex-col mb-4 md:mr-4">
            <img src={fortnite1} alt="Fortnite" className="w-full md:w-96" />

            <p className="text-white text-base md:text-lg text-center w-full md:w-96 my-2 md:my-4">
              Explore Large, Destructible Environments Where No Two Games Are Ever The Same.
            </p>
          </div>

          <div className="flex flex-col mb-4 md:ml-4 md:mr-4">
            <img src={fortnite2} alt="Fortnite" className="w-full md:w-96" />

            <p className="text-white text-base md:text-lg text-center w-full md:w-96 my-2 md:my-4">
              Team Up With Friends By Sprinting, Climbing And Smashing Your Way To Earn Your Victory Royale
            </p>
          </div>

          <div className="flex flex-col md:ml-4">
            <img src={fortnite3} alt="Fortnite" className="w-full md:w-96" />

            <p className="text-white text-base md:text-lg text-center w-full md:w-96 my-2 md:my-4">
              Discover Even More Ways To Play Across Thousands Of Creator-Made Game Genres
            </p>
          </div>
        </div>

        <div className="flex flex-col text-white my-4 md:mt-12">
          <p className="text-center text-lg md:text-5xl font-light my-2 md:my-4">
            Our Contribution
          </p>

          <p className="w-full md:w-1/2 text-center self-center my-2 md:my-4 text-base md:text-lg">
            Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.
          </p>
        </div>

        <div className="flex flex-col text-white my-4 md:mt-12">
          <p className="text-center text-lg md:text-5xl font-light my-2 md:my-4">
            Interested In Delving Deeper Into The Project?
          </p>

          <p className="w-full md:w-1/2 text-center self-center my-2 md:my-4 text-base md:text-xl">
            If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at <span className="font-bold">hello@abc.com</span> or give us a call at <span className="font-bold">+91 480 20802730.</span>
          </p>

          <div className="flex flex-col md:flex-row self-center">
            <p className="self-center bg-transparent border border-white w-full md:w-80 my-4 md:mr-2 px-6 py-3 text-center text-base md:text-lg">
              Ring us on Skype
            </p>

            <p className="self-center bg-white w-full md:w-80 my-4 md:ml-2 px-6 py-3 text-center text-base md:text-lg text-black">
              Contact Us
            </p>
          </div>
        </div>

        <p className="text-white self-center my-4 text-base md:text-lg font-light">
          &copy; 2019-2023 abcTechnology Solutions Pvt Ltd All Rights Reserved
        </p>
      </div>
    </>
  );
}

export default App;
