import React, { useEffect, useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { Switch } from "@headlessui/react";

export default function Body() {
  const [enabled, setEnabled] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [visible,setVisible]= useState(8)

  useEffect(() => {
    setDoctors(doctorsdetalis);
  }, []);
  const doctorsdetalis = [
    {
      img: "https://picsum.photos/250/250/?random",
      name: "Ibrahim",
      department: "Health Specialist",
      genter: "men",
    },
    {
      img: "https://picsum.photos/250/250/?random",
      name: "Abdulla",
      department: "Health Specialist",
      genter: "men",
    },
    {
      img: "https://picsum.photos/250/250/?random",
      name: "Ramiya",
      department: "Health Specialist",
      genter: "women",
    },
    {
      img: "https://picsum.photos/250/250/?random",
      name: "Anu",
      department: "Health Specialist",
      genter: "women",
    },
    {
      img: "https://picsum.photos/250/250/?random",
      name: "Ajay",
      department: "Health Specialist",
      genter: "men",
    },
    {
      img: "https://picsum.photos/250/250/?random",
      name: "sharth",
      department: "Health Specialist",
      genter: "men",
    },
    {
      img: "https://picsum.photos/250/250/?random",
      name: "Shan",
      department: "Health Specialist",
      genter: "men",
    },
    {
      img: "https://picsum.photos/250/250/?random",
      name: "Ramiya",
      department: "Health Specialist",
      genter: "women",
    },
    {
      img: "https://picsum.photos/250/250/?random",
      name: "Anu",
      department: "Health Specialist",
      genter: "women",
    },
    {
      img: "https://picsum.photos/250/250/?random",
      name: "Muneeb",
      department: "Health Specialist",
      genter: "men",
    },
    {
      img: "https://picsum.photos/250/250/?random",
      name: "Ramiya",
      department: "Health Specialist",
      genter: "women",
    },
    {
      img: "https://picsum.photos/250/250/?random",
      name: "Ramiya",
      department: "Health Specialist",
      genter: "women",
    },
    {
      img: "https://picsum.photos/250/250/?random",
      name: "Anu",
      department: "Health Specialist",
      genter: "women",
    },
    {
      img: "https://picsum.photos/250/250/?random",
      name: "Ramiya",
      department: "Health Specialist",
      genter: "men",
    },
    {
      img: "https://picsum.photos/250/250/?random",
      name: "Ibrahim",
      department: "Health Specialist",
      genter: "men",
    },
  ];

  const filterDoctors = (value) => {
    if (value === "all") {

      setDoctors(doctorsdetalis);
    } else {
      const results = doctorsdetalis.filter((item) => {
        return item.genter == value;
      });
      setDoctors(results);
    }
  };

  const serachHandler = (value) => {
    if (value !== "") {
      const newSearchResult = doctorsdetalis.filter((chat) => {
        return Object.values(chat)
          .join(" ")
          .toLowerCase()
          .includes(value.toLowerCase());
      });
      setDoctors(newSearchResult);
    } else {

      setDoctors(doctorsdetalis);
    }
  };
  const getLimitWase = (value) => {
    setVisible(value)
  };
  return (
    <div className="">
      <div className="flex justify-between container my-7 mx-auto px-4 ">
        <h2 className="text-red-800 font-bold text-sm">Doctors</h2>
        <div className="flex">
          <button className="mr-2">
            {" "}
            <BsSunFill />
          </button>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
              enabled ? "bg-black" : "bg-gray-200"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${
                enabled ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </div>
      </div>



      <div className="flex justify-between container lex  my-7 mx-auto px-4 flex-wrap">
        <div className="flex lg:w-2/12 md:w-6/12 sm:w-6/6 ">
          <div className="text-sm font-bold">SHOW</div>
          <div className="relative w-24 ml-3">
            <select
              onChange={(e) => getLimitWase(e.target.value)}
              className="w-full h-6 text-center  text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            >
              <option value="4">4</option>
              <option value="8" selected>8</option>
              <option value="12">12</option>
              <option value="16">16</option>
              <option value="20">20</option>
            </select>
          </div>
        </div>
        <div className="flex lg:w-2/12 md:w-6/12 sm:w-6/6">
          <div className="text-sm font-bold">STATUS</div>
          <div className="relative w-24 ml-3">
            <select className="w-full h-6 text-center  text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
              <option>ONLINE</option>
              <option>OFLINE</option>
            </select>
          </div>
        </div>
        <div className="lg:w-3/12 mr-2 md:w-6/12 sm:w-6/6">
          <form>
            <div class="relative my-auto">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-1 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg"
                placeholder="Search"
                onChange={(e) => serachHandler(e.target.value)}
              />
            </div>
          </form>
        </div>

        <div className="lg:w-4/12 md:w-5/12 sm:w-6/6">
          <ul class="justify-between  text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow flex dark:divide-gray-700 dark:text-gray-400">
            <li class="w-full">
              <button
                onClick={() => filterDoctors("all")}
                href="#"
                class="inline-block w-full p-1 text-gray-900 bg-gray-100 rounded-l-lg  focus:bg-red-500 active "
                aria-current="page"
              >
                All
              </button>
            </li>
            <li class="w-full">
              <button
                onClick={() => filterDoctors("men")}
                href="#"
                class="inline-block  p-1 w-full text-gray-900 bg-gray-100  focus:bg-red-500 active "
                aria-current="page"
              >
                MAN
              </button>
            </li>
            <li class="w-full">
              <button
                onClick={() => filterDoctors("women")}
                href="#"
                class="inline-block  p-1 w-full text-gray-900 bg-gray-100 rounded-r-lg  focus:bg-red-500 active "
                aria-current="page"
              >
                WOMAN
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          {doctors?.slice(0, visible).map((item, index) => (
            <div
              key={index}
              class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4"
            >
              <article class="overflow-hidden rounded-lg shadow-lg">
                <header class=" items-center justify-center leading-tight p-2 mt-5  md:p-4">
                  <img
                    alt="Placeholder"
                    class=" rounded-full w-24 mx-auto"
                    src={item.img}
                  />
                  <div className="mt-3">
                    <h2 className="text-sm font-bold text-center">
                      Dr . {item.name}
                    </h2>
                    <h2 className="text-red-700 text-sm text-center">
                      {item.department}
                    </h2>
                  </div>
                </header>
                <hr className="mx-4" />

                <footer class=" leading-none  md:p-4 grid justify-items-center ">
                  <div className="w-24 border-2 text-center py-1 rounded-lg h-7">
                    CHAT
                  </div>
                  <div
                    type="butten"
                    className="bg-blue-800 w-24 border-2 text-center py-1 rounded-lg h-7 mt-3"
                  >
                    BOOK
                  </div>
                </footer>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
