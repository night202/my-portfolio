import React from "react";

export default function Contact() {
  // Async function to handle form submission using native FormData API
  async function handleSubmit(formData: any) {
    "use server";
    console.log(formData);
  }

  return (
    <div className="container mx-auto p-6 sm:p-12  min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg  rounded-lg shadow-md p-8 bg-gray-600">
        <h2 className="text-3xl font-semibold text-center mb-6 text-white">
          Contact Me
        </h2>
        <form action={handleSubmit} className="grid gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-white "
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Please insert your name"
              className="mt-2 p-3 w-full text-white bg-gray-700 border rounded-lg focus:outline-none focus:ring-4 focus:ring-green-600"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Please insert your email"
              className="mt-2 p-3 w-full text-white bg-gray-700 border rounded-lg focus:outline-none focus:ring-4 focus:ring-green-600"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-lg font-medium text-white"
            >
              Message
            </label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something..."
              rows={4}
              className="mt-2 p-3 w-full border text-white bg-gray-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-600"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
