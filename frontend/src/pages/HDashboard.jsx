import React, { useEffect } from "react";
import { Flip, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import 'react-toastify/dist/ReactToastify.css';
import { WeavyComponent } from "@/components/WyMessenger";

export const HDashboard = () => {
  const navigate = useNavigate();
  const htoken = localStorage.getItem("htoken");

  useEffect(() => {
    if (!htoken) {
      toast.warn('Please sign in as a hirer first...', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
      });
      navigate("/");
    }
  }, [htoken, navigate]);

  const messages = () => {
    toast.info('Chat API is under development.', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
    });

};

  return (
    <>
      <Navbar />
      <div className="bg-black text-white min-h-screen pt-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6">Hirer Dashboard</h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <Link to="/hirer/new-job" className="block">
              <div className="border border-white p-6 rounded-lg cursor-pointer hover:bg-gray-800 transition duration-300">
                <h2 className="text-xl font-bold mb-4 text-indigo-400">Post a New Job</h2>
                <p>Create a new job listing and attract talented candidates.</p>
              </div>
            </Link>
            <Link to="/hirer/posted-jobs" className="block">
              <div className="border border-white p-6 rounded-lg cursor-pointer hover:bg-gray-800 transition duration-300">
                <h2 className="text-xl font-bold mb-4 text-indigo-400">View Posted Jobs</h2>
                <p>View all the jobs you have posted and manage them.</p>
              </div>
            </Link>
            <Link to="/hirer/applications" className="block">
              <div className="border border-white p-6 rounded-lg cursor-pointer hover:bg-gray-800 transition duration-300">
                <h2 className="text-xl font-bold mb-4 text-indigo-400">View Applications</h2>
                <p>Browse through the applications you have received for your jobs.</p>
              </div>
            </Link>
            <Link to="/hirer/watchlist" className="block">
              <div className="border border-white p-6 rounded-lg cursor-pointer hover:bg-gray-800 transition duration-300">
                <h2 className="text-xl font-bold mb-4 text-indigo-400">View Watchlist</h2>
                <p>See the candidates you've saved in your watchlist for future reference.</p>
              </div>
            </Link>
            <Link onClick={WeavyComponent} to="/hmessages" className="block">
              <div className="border border-white p-6 rounded-lg cursor-pointer hover:bg-gray-800 transition duration-300">
                <h2 className="text-xl font-bold mb-4 text-indigo-400">Messages</h2>
                <p>Contact the shortlisted candidates.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
