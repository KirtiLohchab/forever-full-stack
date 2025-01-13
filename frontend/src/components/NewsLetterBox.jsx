import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl text-gray-800 font-medium">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, accusamus.
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap3 mx-auto my-6 border pl-3"
      >
        <input
          type="email"
          className="w-full sm:flex-1 outline-none"
          placeholder="Enter your E-mail"
          required
        />

        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4 rounded-md hover:bg-gray-800"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
