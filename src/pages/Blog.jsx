import Heders from "../components/Headers";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Blog = () => {
  return (
    <div className="w-full">
      <Heders />
      <section className='bg-[url("http://localhost:3000/images/agri.jpg")] h-[220px] mt-6 bg-cover bg-no-repeat relative bg-left'>
        <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center h-full w-full text-white">
              <h2 className="text-3xl font-bold">Agrisoko</h2>
              <div className="flex justify-center items-center gap-2 text-2xl w-full">
                <Link to="/">Home</Link>
                <span className="pt-1">
                  <MdOutlineKeyboardArrowRight />
                </span>
                <span>Blog</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main class="container flex sm:mx-auto mt-8">
        <div class="flex flex-wrap justify-between sm:mx-auto mx-11">
          <div class="md:w-full w-8/12 px-4 mb-8">
            <img
              src="https://via.placeholder.com/1200x600"
              alt="Featured Image"
              class="w-full h-64 object-cover rounded"
            />
            <h2 class="text-4xl font-bold mt-4 mb-2">My First Blog Post</h2>
            <p class="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p class="text-gray-700 mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p class="text-gray-700 mb-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
          <div class="md:w-full w-4/12 px-4 mb-8">
            <div class="bg-gray-100 px-4 py-6 rounded">
              <h3 class="text-lg font-bold mb-2">Categories</h3>
              <ul class="list-disc list-inside">
                <li>
                  <a href="#" class="text-gray-700 hover:text-gray-900">
                    Technology
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-700 hover:text-gray-900">
                    Travel
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-700 hover:text-gray-900">
                    Food
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
