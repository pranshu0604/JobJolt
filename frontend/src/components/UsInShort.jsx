import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import PP from "@/assets/PP.jpg";
import GST from "@/assets/GST.png";

export const UsInShort = () => {
    return (
        <>
            <div className="mx-auto p-8 space-y-8 text-white bg-black">
                <div className="text-3xl font-bold">About Us</div>

                <div className="flex space-x-4">
                    <div className="flex items-center bg-black p-4 rounded-lg shadow-sm border border-gray-100">
                        <img
                            src={PP}
                            alt="Pranshu Pandey"
                            className="w-32 h-32 rounded-full object-cover"
                        />
                        <div className="ml-4">
                            <div className="text-xl font-semibold">Pranshu Pandey</div>
                            <p className="mt-2">
                                Pranshu's deep understanding of technology and software development has been crucial in creating JobJolt. 
                            </p>
                            <div className="text-center mt-4">
                                <p>Connect with Pranshu on:</p>
                                <div className="flex justify-center space-x-4 mt-2">
                                    <a href="https://github.com/pranshu0604" target="_blank" rel="noopener noreferrer">
                                        <FaGithub className="text-gray-400 hover:text-gray-300 text-3xl" />
                                    </a>
                                    <a href="https://twitter.com/notoriouspran" target="_blank" rel="noopener noreferrer">
                                        <FaTwitter className="text-gray-400  hover:text-blue-300 text-3xl" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/pranshu-pandey-5889b8279/" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className="text-gray-400 hover:text-blue-700 text-3xl" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center bg-black p-4 rounded-lg shadow-sm border border-gray-100">
                        <img
                            src={GST}
                            alt="Gaurav Singh Tomar"
                            className="w-32 h-32 rounded-full object-cover"
                        />
                        <div className="ml-4">
                            <div className="text-xl font-semibold">Gaurav Singh Tomar</div>
                            <p className="mt-2">
                                Gaurav's extensive experience in human resources and recruitment has been instrumental in developing JobJolt.
                            </p>
                            <div className="text-center mt-4">
                                <p>Connect with Gaurav on:</p>
                                <div className="flex justify-center space-x-4 mt-2">
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
