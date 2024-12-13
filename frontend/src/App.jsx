import React from "react";
import Router from "./routers/router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Router />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
