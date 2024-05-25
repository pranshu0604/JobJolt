import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import PP from "@/assets/PP.jpg";
import GST from "@/assets/GST.png";

export const UsInShort = () => {
    return (
        <>
            <div className="mx-auto p-8 space-y-8 text-white bg-black sm:p-8">
                <div className="text-3xl sm:text-3xl font-bold sm:text-center">About Us</div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col sm:flex-row items-center bg-black p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
                        <img
                            src={PP}
                            alt="Pranshu Pandey"
                            className="w-32 h-32 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                            <div className="text-xl font-semibold">Pranshu Pandey</div>
                            <p className="mt-2">
                                Pranshu's deep understanding of technology and software development has been crucial in creating JobJolt.
                            </p>
                            <div className="mt-4">
                                <p>Connect with Pranshu on:</p>
                                <div className="flex justify-center sm:justify-start space-x-4 mt-2">
                                    <a href="https://github.com/pranshu0604" target="_blank" rel="noopener noreferrer">
                                        <FaGithub className="text-gray-400 hover:text-gray-300 text-3xl" />
                                    </a>
                                    <a href="https://twitter.com/notoriouspran" target="_blank" rel="noopener noreferrer">
                                        <FaTwitter className="text-gray-400 hover:text-blue-300 text-3xl" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/pranshu-pandey-5889b8279/" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className="text-gray-400 hover:text-blue-700 text-3xl" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center bg-black p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
                        <img
                            src={GST}
                            alt="Gaurav Singh Tomar"
                            className="w-32 h-32 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                            <div className="text-xl font-semibold">Gaurav Singh Tomar</div>
                            <p className="mt-2">
                                Gaurav's extensive experience in human resources and recruitment has been instrumental in developing JobJolt.
                            </p>
                            <div className="mt-4">
                                <p>Connect with Gaurav on:</p>
                                <div className="flex justify-center sm:justify-start space-x-4 mt-2">
                                    <a href="https://github.com/tomar606" target="_blank" rel="noopener noreferrer">
                                        <FaGithub className="text-gray-400 hover:text-white text-3xl" />
                                    </a>
                                    <a href="https://twitter.com/Gauravtomar606" target="_blank" rel="noopener noreferrer">
                                        <FaTwitter className="text-gray-400 hover:text-blue-300 text-3xl" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/gaurav-singh-tomar-046a6a26a/" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className="text-gray-400 hover:text-blue-700 text-3xl" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Add more space between the text and the footer */}
                <div className="h-12"></div>
            </div>
        </>
    );
};
