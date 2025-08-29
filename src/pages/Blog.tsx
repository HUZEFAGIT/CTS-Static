// import { useState } from "react";

// import newsData from "../data/newsData";

// const Blog = () => {
//   // News Section Page Change (lmao)
//   const [firstSlice, setFirstSlice] = useState(0);
//   const [secondSlice, setSecondSlice] = useState(9);

//   const handleSlice = (page: number) => {
//     if (firstSlice === 0 && page === 2) {
//       setFirstSlice(9);
//       setSecondSlice(18);
//     } else {
//       setFirstSlice(0);
//       setSecondSlice(9);
//     }
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="py-8 px-4 text-white text-center lg:px-16 lg:py-20"
//       style={{ backgroundColor: "#02bfb4" }}>
//         <h1 className="mb-4 text-balance text-4xl md:text-5xl">
//           The most recent
//           <br /> hospital{" "}
//           <span className="font-playfair-display italic text-white">
//             news
//           </span>
//         </h1>

//         <p className="px-10 sm:px-40 md:px-60 lg:px-80 xl:px-96">
//           Explore our blog for the latest medical knowledge, patient stories,
//           and tips to lead a healthier life.
//         </p>
//       </section>

//       {/* News Section */}
//       <section className="py-8 px-4 text-teal-950 lg:px-16 lg:py-20">
//         <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
//           {...newsData.slice(firstSlice, secondSlice).map((news) => {
//             return (
//               <div
//                 key={news.id}
//                 className="mb-8 p-2 flex flex-col gap-y-2 bg-teal-100 text-teal-900 rounded-2xl shadow-sm sm:p-4"
//               >
//                 <img
//                   src={news.url}
//                   alt="News image"
//                   className="w-full min-w-60 h-72 object-cover object-center rounded-2xl sm:min-w-64 lg:min-w-80"
//                 />

//                 <p className="font-semibold">
//                   {news.date} • By {news.author}
//                 </p>

//                 <h3 className="mb-2 pr-8 text-xl font-bold">{news.title}</h3>

//                 <a
//                   href="#"
//                   className="text-lg font-bold text-teal-500 md:hover:text-teal-400"
//                 >
//                   Read More
//                 </a>
//               </div>
//             );
//           })}
//         </div>

//         <div className="w-fit mx-auto flex gap-x-1 text-xl font-semibold">
//           <button
//             onClick={() => handleSlice(1)}
//             className={`px-2 border-2 border-teal-200 rounded ${
//               firstSlice === 0 ? "bg-teal-50 cursor-default" : ""
//             }`}
//           >
//             1
//           </button>

//           <button
//             onClick={() => handleSlice(2)}
//             className={`px-2 border-2 border-teal-200 rounded ${
//               firstSlice === 9 ? "bg-teal-50 cursor-default" : ""
//             }`}
//           >
//             2
//           </button>

//           <button
//             onClick={() => handleSlice(2)}
//             className="px-2 border-2 border-teal-200 rounded"
//           >
//             &#10095;
//           </button>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Blog;
import { useState } from "react";

import newsData from "../data/newsData";

const Blog = () => {
  // News Section Page Change (lmao)
  const [firstSlice, setFirstSlice] = useState(0);
  const [secondSlice, setSecondSlice] = useState(9);

  const handleSlice = (page: number) => {
    if (firstSlice === 0 && page === 2) {
      setFirstSlice(9);
      setSecondSlice(18);
    } else {
      setFirstSlice(0);
      setSecondSlice(9);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-8 px-4 text-white text-center lg:px-16 lg:py-20"
      style={{ backgroundColor: "#02bfb4" }}>
        <h1 className="mb-4 text-balance text-4xl md:text-5xl">
          Latest healthcare
          <br /> insights and{" "}
          <span className="font-playfair-display italic text-white">
            medical updates
          </span>
        </h1>

        <p className="px-10 sm:px-40 md:px-60 lg:px-80 xl:px-96">
          Stay informed with expert medical insights, breakthrough treatments, patient success stories, and practical health tips from CaretoSure's healthcare professionals.
        </p>
      </section>

      {/* News Section */}
      <section className="py-8 px-4 text-teal-950 lg:px-16 lg:py-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {...newsData.slice(firstSlice, secondSlice).map((news) => {
            return (
              <div
                key={news.id}
                className="mb-8 p-2 flex flex-col gap-y-2 bg-teal-100 text-teal-900 rounded-2xl shadow-sm sm:p-4"
              >
                <img
                  src={news.url}
                  alt="Medical news article"
                  className="w-full min-w-60 h-72 object-cover object-center rounded-2xl sm:min-w-64 lg:min-w-80"
                />

                <p className="font-semibold">
                  {news.date} • By {news.author}
                </p>

                <h3 className="mb-2 pr-8 text-xl font-bold">{news.title}</h3>

                <a
                  href="#"
                  className="text-lg font-bold text-teal-500 md:hover:text-teal-400"
                >
                  Read Full Article
                </a>
              </div>
            );
          })}
        </div>

        <div className="w-fit mx-auto flex gap-x-1 text-xl font-semibold">
          <button
            onClick={() => handleSlice(1)}
            className={`px-2 border-2 border-teal-200 rounded ${
              firstSlice === 0 ? "bg-teal-50 cursor-default" : ""
            }`}
          >
            1
          </button>

          <button
            onClick={() => handleSlice(2)}
            className={`px-2 border-2 border-teal-200 rounded ${
              firstSlice === 9 ? "bg-teal-50 cursor-default" : ""
            }`}
          >
            2
          </button>

          <button
            onClick={() => handleSlice(2)}
            className="px-2 border-2 border-teal-200 rounded"
          >
            &#10095;
          </button>
        </div>
      </section>
    </>
  );
};

export default Blog;
