import "./App.css";
import "./style.css";
function App() {
  return (
    <body>
      <div
        class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
        id="menu"
      >
        <nav>
          <ul class="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0 ">
            <li>
              <a
                href="#tab1Id"
                class=" border-r-2 inline-block no-underline text-gray-500 hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#tab2Id"
                class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
              >
                Contributors
              </a>
            </li>
            <li>
              <a
                class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                href="/PROJECTS"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                href="#tab4Id"
              >
                BLOG
              </a>
            </li>
            <li>
              <a
                class="inline-block no-underline text-gray-500 hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                href="#home"
              >
                Open-Source
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* section */}
      <section className="main-container">
        <div>
          <section className="main-container">
            <div>
              <h1 className="text-5xl bold">
                Welcome to the open-source projects.
              </h1>
              <p className="mt-3">
                make PR and get accepted by{" "}
                <span className="word">HACKTOBERFEST</span>
              </p>
            </div>
          </section>
        </div>
      </section>
    </body>
  );
}

export default App;
