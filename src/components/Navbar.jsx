// import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
// import logo from "../assets/images/logo.png";
// import profilePP from "../assets/images/default.webp";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const navigation = [
  // { name: "Home", to: "/", current: true },
  // { name: "Register", to: "/register", current: false },
  { name: "Login", to: "/login", current: false },
];

const Navbar = () => {
  // const navigate = useNavigate();
  // const user = useSelector((state) => state.auth.user);
  const { user } = useSelector((state) => state.auth);
  console.log(user);

  // function classNames(...classes) {
  //   return classes.filter(Boolean).join(" ");
  // }

  // const handleLogout = () => {
  //   navigate("/login");
  //   // console.log('logged out')
  // };

  return (
    <>
      <Disclosure as="nav" className="bg-slate-100 shadow-2xl">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-6xl px-2 sm:px-6  ">
              <div className="relative flex h-16 items-center justify-between ">
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="transition-all inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only ">Open main menu</span>
                    {open ? (
                      <i className="fa-solid fa-x"></i>
                    ) : (
                      <i className="fa-solid fa-bars"></i>
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-between">
                  <div className="flex flex-shrink-0 items-center ">
                    <Link to="/">
                      <img
                        className="block h-12 w-auto lg:hidden transition-all hover:-translate-y-1 "
                        src="https://solarvisbucket.s3.eu-central-1.amazonaws.com/media/public/logos/electraVis_logo.png"
                        alt="logo"
                      />
                      <img
                        className="hidden h-12 w-auto lg:block hover:opacity-80 transition-all   "
                        src="https://solarvisbucket.s3.eu-central-1.amazonaws.com/media/public/logos/electraVis_logo.png"
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:block ">
                    <div className="flex space-x-4 ">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.to}
                          className="flex items-center gap-2 px-5 py-2 rounded-xl text-white bg-indigo-600 hover:bg-indigo-800 active focus:outline-none border-4 border-white transition-all "
                          aria-current={item.current ? "page" : undefined}
                          // onClick={item.current = true}
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 448 512"
                            height="13"
                            width="13"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ color: "rgb(255, 255, 255)" }}
                          >
                            <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                          </svg>
                          <span className="mt-1 uppercase tracking-wider">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden fixed bg-slate-200 w-screen">
              <div className="space-y-1 px-2 pt-2 pb-3 ">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    to={item.to}
                    className="block px-3 py-2 rounded-md text-base font-medium"
                    // onClick={handleLogout()}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Navbar;

// {user ? (
//   <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//     <button
//       type="button"
//       className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//     >
//       <span className="sr-only">View notifications</span>
//       userName
//     </button>

//     {/* Profile dropdown */}
//     <Menu as="div" className="relative ml-3">
//       <div>
//         <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//           <span className="sr-only">Open user menu</span>
//           <img
//             className="h-8 w-8 rounded-full  hover:outline hover:outline-3 hover:outline-sky-500 transition-all duration-100"
//             src={user ? "asdsadasd" : profilePP}
//             alt="pic"
//           />
//         </Menu.Button>
//       </div>
//       <Transition
//         as={Fragment}
//         enter="transition ease-out duration-100"
//         enterFrom="transform opacity-0 scale-95"
//         enterTo="transform opacity-100 scale-100"
//         leave="transition ease-in duration-75"
//         leaveFrom="transform opacity-100 scale-100"
//         leaveTo="transform opacity-0 scale-95"
//       >
//         <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//           <Menu.Item>
//             {({ active }) => (
//               <Link
//                 to="/"
//                 className={classNames(
//                   active ? "bg-gray-100" : "",
//                   "block px-4 py-2 text-sm text-gray-700"
//                 )}
//               >
//                 Your Profile
//               </Link>
//             )}
//           </Menu.Item>
//           <Menu.Item>
//             {({ active }) => (
//               <button
//                 // to="/"
//                 onClick={handleLogout}
//                 className={classNames(
//                   active ? "bg-gray-100" : "",
//                   "block px-4 py-2 text-sm text-gray-700"
//                 )}
//               >
//                 Sign out
//               </button>
//             )}
//           </Menu.Item>
//         </Menu.Items>
//       </Transition>
//     </Menu>
//   </div>
// ) : (
//   <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//     <button
//       type="button"
//       className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//     >
//       <span className="sr-only">View notifications</span>
//       Guest
//     </button>

//     {/* Profile dropdown */}
//     <Menu as="div" className="relative ml-3">
//       <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" as={Link} to={'/login'}>
//         <img
//           className="h-8 w-8 rounded-full  hover:outline hover:outline-3 hover:outline-sky-500 transition-all duration-100"
//           src={profilePP}
//           alt="pic"
//         />
//       </Menu.Button>
//     </Menu>
//   </div>
// )}
