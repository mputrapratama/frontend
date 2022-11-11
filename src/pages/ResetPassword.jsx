import React from "react";

import Header from "../components/Header";


const ResetPassword = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-15">
                <h1 className="h1 mb-8">Forgot or lost access to your account?</h1>
                <p className="text-xl text-gray-600 mt-8">Enter your email address that was used when creating the account.<br/>or there are other problems, please fill in the description column along with attaching a file as evidence (optional).</p>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3 py-2">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Registered Email<span className="text-red-600">*</span></label>
                      <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your registered email" required />
                    </div>
                    <div className="w-full px-3 py-2">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Password<span className="text-red-600">*</span></label>
                      <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter the last password" required />
                    </div>
                    <div className="w-full px-3 py-2">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Active Email <span className="text-red-600">*</span></label>
                      <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter an email where you can be contacted" required />
                    </div>
                    <div className="w-full px-3 py-2">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Desription</label>
                      <input type={'file'} className="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-blue-500
                        hover:file:bg-violet-100"/>
                      <span className="block font-small text-sm text-gray-400 pt-2">maks size file 2 MB, jpg/png/pdf extentions</span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="description">Deskripsi</label>
                    <div className="control">
                      <textarea className="textarea w-full text-gray-800" placeholder="deskripsikan masalahmu disini..."></textarea>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Kirim</button>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <div className="font-medium text-center text-gray-600">Have an access now?<a className="text-blue-600 hover:text-sky-400" href="http://localhost:3000/login"> back to login page.</a></div>
                    </div>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
};

export default ResetPassword;