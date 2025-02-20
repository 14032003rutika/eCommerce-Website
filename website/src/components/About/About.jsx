import React from 'react'
import {Link} from 'react-router-dom'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://vection-cms-prod.s3.eu-central-1.amazonaws.com/Adobe_Stock_454155677_687e47f8b5.jpeg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Welcome to Fashion World!!
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Discover fashion like never before with our cutting-edge Virtual Try-On system. Say goodbye to uncertainty and hello to a personalized shopping experience where you can try on clothes virtually before making your purchase.
                        </p>
                        <p className="mt-4 text-gray-600">
                        Our mission is simple: to make online shopping easier, more enjoyable, and most importantly—accurate. Using advanced AR technology, we allow you to see how clothes, shoes, and accessories fit your body, helping you choose the styles that look and feel great.
                        </p>
                        <p className="mt-4 text-gray-600">
                        Whether you're at home, on the go, or browsing from anywhere, [Your Brand Name] is here to help you make confident fashion decisions without leaving your space. From size to style, we’ve got it all covered, so you can shop with peace of mind.
                        </p>
                        <p className="mt-4 text-gray-600">Join us today, and revolutionize the way you experience fashion shopping!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}