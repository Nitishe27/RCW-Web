import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CommitteeBoard = () => (
  <div className="min-h-screen bg-gray-50">
    <Navbar />
    <section className="pt-24 pb-12 bg-gradient-to-br from-red-600 to-yellow-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Board of Directors</h1>
        <p className="text-xl text-yellow-100 mb-8">Meet our Board of Directors.</p>
      </div>
    </section>
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <p className="text-gray-600">[Board of Directors will be listed here]</p>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default CommitteeBoard; 