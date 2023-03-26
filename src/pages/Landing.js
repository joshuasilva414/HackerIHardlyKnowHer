import "./Landing.css";

function Landing() {
  return (
    <div className="Landing">
      <header>
        {/* Navigation Menu */}
        <div className="flex justify-between flex-wrap gap-2 border-box max-w h-16 p-2 bg-rh-ocean-blue font-bold text-rh-white border-solid border-4 border-rh-space-blue">
          <div className="flex justify-start border-solid border-2 border-rh-space-blue">
            Rosetta News
          </div>

          <div className="flex justify-end">
            <div className="border-solid border-2 border-rh-space-blue bg-rh-space-blue rounded-lg m-2">
              <a
                href="#title"
                class="hover:text-rh-white hover:underline my-8 mx-16 align-center"
              >
                Title
              </a>
            </div>

            <div className="border-solid border-2 border-rh-space-blue bg-rh-space-blue rounded-lg m-2">
              <a
                href="#title"
                class="hover:text-rh-white hover:underline my-8 mx-16"
              >
                About
              </a>
            </div>

            <div className="border-solid border-2 border-rh-space-blue bg-rh-space-blue rounded-lg m-2">
              <a
                href="#title"
                class="hover:text-rh-white hover:underline my-8 mx-16"
              >
                Credits
              </a>
            </div>
          </div>
        </div>
        {/* End of Navigation Menu */}
      </header>
      <main className="min-h-screen">
        <div className="flex border-solid border-4 border-rh-space-blue">
          {/* Start of Title Half*/}
          <div className="flex-1 justify-center border-box w-1/2 h-96">
            <div className="flex-none">
              <h1 className="font-serif text-rh-ocean-blue text-center text-4xl font-bold mx-auto mt-14 mb-3 py-4 px-2 border-box w-1/2 h-23 border-solid border-2 border-rh-ocean-blue rounded-3xl bg-rh-deep-purple">Rosetta News</h1>
            </div>
            <div className="flex flex-col"> 
              <p 
                className="m-auto text-center border-box w-1/2 h-32 text-xl font-bold"
              >
                Welcome to Rosetta News, an AI tool built for News Collection and Translation for instant analyzation. Try it out below:
                
              </p>
              <a
                href="/app"
                class="
                m-auto
                font-serif
                bg-rh-deep-purple
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

            <div className="flex-2 justify-center"> 

            </div>        
          </div>
          {/* End of Title Half */}

          {/* Start of Media Half */}
          <div className="flex-wrap justify-center borderbox w-1/2 h-96 border-solid border-2 border-rh-space-blue">
            <p className="YThead"> What does it look like in effect? </p>
          <iframe className="YTvid" src="https://www.youtube.com/embed/x8gdOPO35HA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          {/* End of Media Half */}
        </div>

        {/* Start of Summary */}
        <div className="border-box w-full h-96 border-solid border-4 border-rh-space-blue font-bold">
          <div className="text-4xl text-left ml-16 mt-8 mb-4">
            Summary
          </div>

          <div className="text-2xl text-left mx-24 my-16">
            <p>Here we will cover details about the project, its potential uses, what we could expand upon, etc.</p>
          </div>
        </div>
        {/* End of Summary */}
        
        {/* Start of FAQ */}
        <div className="border-box w-full h-96 border-solid border-4 border-rh-space-blue font-bold">
          <div className="text-4xl text-left ml-16 mt-8 mb-4">
            FAQ
          </div>

          <div className="text-2xl text-left mx-24 my-4">
            <p>Q. Placeholder Question</p>
          </div>

          <div className="text-2 xl text-left mx-32 my-4">
            <p>A. Placeholder Answer</p>
          </div>
        </div>
        {/* End of FAQ */}

      </main>
      {/* Start of Footer */}
      <footer>
        <div className="bg-rh-white w-full h-16 border-solid border-4 border-rh-space-blue">
          <div className="font-bold text-xl text-center">
            <h2>This project was created in collaboration by:</h2>
          </div>
          <div className="flex justify-evenly">
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
