import "./Landing.css";
import rnlogo from "./rosettanews.jpg";

function Landing() {
  return (
    <div className="Landing">
      <header>
        {/* Navigation Menu */}
        <div 
          className="flex 
          justify-between 
          flex-wrap gap-2 
          border-box max-w h-16 
          p-2 bg-rh-ocean-blue 
          font-bold text-rh-white"
        >
          <div 
            className="flex justify-start"
          >
            <img src={rnlogo} alt="Rosetta News" width="32" height="6"/>
          </div>

          <div 
            className="flex justify-end"
          >
            <div 
              className="border-solid 
              border-2 border-rh-space-blue 
              bg-sky-900 rounded-lg m-2"
            >
              <a
                href="#summary"
                class="hover:text-rh-white hover:underline 
                my-8 mx-16 align-center"
              >
                Summary
              </a>
            </div>

            <div 
              className="border-solid 
              border-2 border-rh-space-blue 
              bg-sky-900 rounded-lg m-2"
            >
              <a
                href="#faq"
                class="hover:text-rh-white 
                hover:underline my-8 mx-16"
              >
                FAQ
              </a>
            </div>

            <div 
              className="border-solid border-2 
              border-rh-space-blue bg-sky-900 
              rounded-lg m-2">
              <a
                href="#credits"
                class="hover:text-rh-white 
                hover:underline my-8 mx-16"
              >
                Credits
              </a>
            </div>

            <div 
              className="border-solid 
              border-2 border-rh-space-blue 
              bg-sky-500 rounded-lg m-2"
            >
              <a
                href="/app"
                class="hover:text-rh-white 
                hover:underline my-8 mx-16"
              >
                Try it here!
              </a>
            </div>
          </div>
        </div>
        {/* End of Navigation Menu */}
      </header>
      <main 
        className="min-h-screen"
      >
        <div 
          className="flex 
          justify-evenly border-solid 
          border-4 border-rh-space-blue"
        >
          {/* Start of Title Half*/}
          <div 
            className="flex-1 borderbox 
            w-1/2 h-96 border-solid border-4 
            border-rh-space-blue"
          >
            <div 
              className="flex-none"
            >
              <h1 
                className="font-serif 
                text-rh-ocean-blue text-center 
                text-4xl font-bold mx-auto mt-14 
                mb-3 py-4 px-2 border-box w-1/2 
                h-23 border-solid border-2 
                border-rh-ocean-blue rounded-3xl 
                bg-blue-400"
              >
                Rosetta News
              </h1>
            </div>
            <div 
              className="flex 
              flex-col"
            > 
              <p 
                className="m-auto text-center 
                border-box w-1/2 h-32 text-xl 
                font-bold"
              >
                Welcome to Rosetta News, an AI tool built for 
                News Collection and Translation for instant analyzation. 
                Try it out below:
              </p>
              <a
                href="/app"
                className="
                m-auto
                font-serif
                bg-blue-400
                text-rh-ocean-blue
                rounded-lg
                border-double
                border-rh-ocean-blue
                border-2
                p-2
                font-bold
                italic
                hover:underline
                hover:scale-125
                "
              >
                Try Rosetta News!
              </a>
            </div>       
          </div>
          {/* End of Title Half */}

          {/* Start of Media Half */}
          <div 
            className="flex-wrap 
            borderbox w-1/2 h-96 
            border-solid border-4 
            border-rh-space-blue 
            m-auto"
          >
            <p 
              className="YThead"
            > 
              What does it look like in effect? 
            </p>
            <iframe 
              className="YTvid" 
              src="https://www.youtube.com/embed/x8gdOPO35HA" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; 
              clipboard-write; encrypted-media; 
              gyroscope; picture-in-picture; web-share" 
              allowfullscreen
            >
            </iframe>
          </div>
          {/* End of Media Half */}
        </div>

        {/* Start of Summary */}
        <div 
          className="border-box 
          w-full border-solid 
          border-4 border-rh-space-blue 
          font-bold"
        >
          <div 
            id="summary" 
            className="font-serif 
            text-4xl text-left ml-16 
            mt-8 mb-4 text-rh-ocean-blue"
          >
            Summary
          </div>

          <div 
            className="text-2xl 
            text-left mx-24 my-16"
          >
            <p>
              The Rosetta News Project aims to provide users with 
              the power to find resources anywhere, regardless of 
              language. Using the huggingface language model, and
              available APIs, analyzation and summarization of news 
              sources becomes simple and efficient with Rosetta
              News.
            </p>
          </div>
        </div>
        {/* End of Summary */}
        
        {/* Start of FAQ */}
        <div 
          id="faq" 
          className="border-box 
          w-full border-solid 
          border-4 border-rh-space-blue 
          font-bold"
        >
          <div 
            className="font-serif 
            text-4xl text-left ml-16 
            mt-8 mb-4 text-rh-ocean-blue"
          >
            FAQ
          </div>

          <div 
            className="text-2xl 
            text-left mx-24 my-4"
          >
            <p>
              Q. What NLP model did we use?
            </p>
          </div>

          <div 
            className="text-xl 
            text-left mx-32 my-4"
          >
            <p>
              A. We used the huggingface language model and its API to get our tasks done.
            </p>
          </div>
          
          <div 
            className="text-2xl 
            text-left mx-24 my-4"
          >
            <p>
              Q. What other technology did we use?
            </p>
          </div>

          <div 
            className="text-xl 
            text-left mx-32 my-4"
          >
            <p>
              A. Other technologies we implemented were Github Live Share and Codespaces, HTML, CSS, Javascript, ReactJS, and TailWindCSS.
            </p>
          </div>

          <div 
            className="text-2xl 
            text-left mx-24 my-4"
          >
            <p>
              Q. What are some areas we could expand upon further?
            </p>
          </div>
          <div 
            className="text-xl 
            text-left mx-32 my-4"
          >
            <p>
              A. There are a few possibities, both frontend 
              and backend which we could work on. On the frontend, we
              could further develop the website, making the UI
              look cleaner. On the backend, we could upgrade our user
              input field to allow a URL in place of solid text. We 
              could also expand to allow for translation from more
              languages and therefore more sources of data.
            </p>
          </div>
        </div>
        {/* End of FAQ */}

      </main>
      {/* Start of Footer */}
      <footer>
        <div 
          id="credits" 
          className="bg-rh-white 
          w-full h-16 border-solid 
          border-4 border-rh-space-blue"
        >
          <div 
            className="font-bold 
            text-xl text-center"
          >
            <h2 
              id="credits" 
            >
              This project was created in collaboration by:
            </h2>
          </div>
          <div 
            className="flex 
            justify-evenly"
          >
            <a
              className="Laura"
              href="https://www.linkedin.com/in/laurabbb/"
              rel="noreferrer"
              target="_blank"
            >
              Laura Barnes
            </a>
            <a
              className="David"
              href="https://www.linkedin.com/in/david-christiansen-417b0a26b/"
              target="_blank"
              rel="noreferrer"
            >
              David Christiansen
            </a>
            <a
              className="Josh"
              href="https://www.linkedin.com/in/joshuasilva414/"
              rel="noreferrer"
              target="_blank"
            >
              Joshua Silva
            </a>
            <a
              className="Nathan"
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/nathanzuniga"
            >
              Nathan Zuniga
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
