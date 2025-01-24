"use client"

import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const Accordion = ({ accordionData }) => {
    const [openIndex, setOpenIndex] = useState(0); // Initially open the first accordion

    const toggleAccordion = (index) => {
        setOpenIndex(index === openIndex ? null : index); // Close if already open, otherwise open
    };

    return (
        <div className="space-y-4">
            {accordionData.map((item, index) => (
                <div key={index} className="border border-black/20 rounded-md overflow-hidden">
                    <button
                        onClick={() => toggleAccordion(index)}
                        className={`flex items-center justify-between gap-6 w-full text-left px-6 focus:outline-none font-openSans font-semibold duration-150  ${openIndex === index ? 'bg-accent-mint text-white pt-4 pb-2' : ' bg-white hover:bg-accent-mint hover:text-white py-4'}`}
                    >
                        {item.title}
                        { openIndex === index ? <FaAngleUp className="text-white text-lg" /> : <FaAngleDown className="text-lg" /> }
                    </button>
                    {openIndex === index && (
                        <div className="px-6 pb-6 pt-2 bg-accent-mint">
                            <p className="text-white text-sm font-openSans">{item.description}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
