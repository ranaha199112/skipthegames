export default function Home() {
  return <div>skipthegames</div>;
}

// import Image from "next/image";
// import LoginForm from "../components/LoginForm";
// import Logo from "../public/images/logo.png";

// export default function Home() {
//   return (
//     <div className="">
//       {/* header */}
//       <div className="">
//         <div className="container pt-[10px] pb-8 flex flex-col  items-center lg:flex-row lg:justify-between">
//           <div className="lg:self-start mt-[3px] lg:mt-0">
//             <Image src={Logo} alt="logo" priority />
//           </div>

//           <p className="lg:self-end mt-[8px] lg:mt-[20px] text-custom-gray text-lg text-center font-medium  px-[75px] lg:px-0">
//             Skip the{" "}
//             <span className="block lg:inline-block">
//               games.Get satisfaction.
//             </span>
//           </p>

//           <button className="lg:self-end mt-2 lg:mt-0 bg-custom-rose hover:bg-custom-rose2 text-white font-bold px-10 lg:px-[90px] py-[8px] rounded transition duration-300">
//             Post your free ad now
//           </button>
//         </div>
//       </div>

//       {/* route */}
//       <div className="shadow-inner-custom">
//         <div className="container py-[18px] lg:py-[22px] px-4 lg:px-0 flex items-center gap-2 text-[11px]">
//           <p className="">SKIPTHEGAMES.COM</p>
//           <span className="text-custom-cyan">»</span>
//           {/* <span className="text-custom-cyan">&#187;</span> */}
//           <p className="text-custom-cyan">LOGIN</p>
//         </div>
//       </div>

//       {/* form */}
//       <LoginForm />

//       {/* footer */}
//       <div className="container px-4 lg:px-0">
//         <div className="py-[20px] flex lg:justify-between text-custom-gray border-t border-slate-300">
//           <div className="">
//             <p className="cursor-pointer hover:text-custom-gray2">
//               ©skipthegames.com
//             </p>
//           </div>
//           <div className="flex flex-wrap gap-2 lg:gap-[22px]">
//             {[
//               "Home",
//               "Contact",
//               "About",
//               "Privacy",
//               "Terms",
//               "Escort Info",
//             ].map((link, i) => (
//               <div key={i} className="first:text-custom-gray  text-custom-cyan">
//                 <p className="cursor-pointer hover:text-custom-gray2">{link}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
