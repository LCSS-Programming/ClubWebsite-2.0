import { useState } from "react";

export default function Textbooks() {
    return (
        <>
        
            <div className="flex flex-wrap w-full mt-32 mb-32" id="textbooks">

                <div className="w-4/5 h-24 text-7xl text-center mx-auto mb-8 text-amber-200 font-bold">
                    <h1>Textbooks</h1>
                </div>

                <div className="w-1/2 flex flex-wrap gap-12 justify-center">
                    <div className="w-full h-24 text-center">
                        <a href="https://sites.google.com/gotvdsb.ca/lcss-math/home?authuser=0" >
                            <button className="w-96 h-full hover:text-amber-400 duration-300 text-5xl text-amber-200 rounded-full underline underline-offset-8 active:bg-white">
                                LCSS MATH</button></a>
                    </div>

                    <div className="h-24">
                        <a href="https://www.creativebookpublishing.ca/books/McGraw-Hill-Ryerson-Advanced-Functions-12.pdf">
                            <button className="active:bg-white px-12 w-full h-full hover:text-purple-300 duration-300 text-4xl text-purple-500 rounded-full">
                                Adv. Functions 12</button></a>
                    </div>

                    <div className="h-24">
                    <a href="https://teachers.wrdsb.ca/ruhnke/files/2015/02/Harcourt-Mathematics-12-Advanced-Functions-and-Introductory-Calculus.pdf ">
                        <button className="p-x-12 w-full h-full px-12 hover:text-amber-400 duration-300 text-4xl text-amber-200 rounded-full active:bg-white">
                            Calculus 12</button></a>
                    </div>

                    <div className="h-24">
                        <a href="http://mathmaniax.weebly.com/uploads/1/0/9/5/109587529/vectorsonlinetext.pdf">
                            <button className="active:bg-white px-12 w-full h-full hover:text-purple-300 duration-300 text-4xl text-purple-500 rounded-full">
                                Vectors 12</button>
                        </a> 
                    </div>

                    
                    <div className="h-24">
                        <a href="http://ghcimdm4u.weebly.com/ebook.html ">
                            <button className="active:bg-white px-12 w-full h-full hover:text-amber-400 duration-300 text-4xl text-amber-200 rounded-full">
                                Data Mgmt. 12</button></a>
                    </div>
                </div>

                <div className="w-1/2 flex flex-wrap gap-12 justify-center">
                    
                    <div className="w-full h-24 text-center">
                        <a href="">
                            <button className="w-96 h-full hover:text-amber-400 duration-300 text-5xl text-amber-200 rounded-full underline underline-offset-8 active:bg-white">
                                LCSS SCIENCE</button></a>
                    </div>

                    <div className="h-24">
                        <a href="https://doku.pub/documents/nelson-biology-12pdf-30j71j2z320w">
                            <button className="active:bg-white px-12 w-full h-full hover:text-purple-300 duration-300 text-4xl text-purple-500 rounded-full">
                                Biology 12</button></a>
                    </div>

                    <div className="h-24">
                    <a href="http://patriotssch4u1.pbworks.com/w/file/fetch/100722103/Nelson%20Chemistry%2012.pdf ">
                        <button className="active:bg-white px-12 w-full h-full hover:text-amber-400 duration-300 text-4xl text-amber-200 rounded-full">
                            Chemistry 12</button></a>
                    </div>

                    <div className="h-24">
                        <a href="https://www.creativebookpublishing.ca/books/Nelson-Physics-12.pdf ">
                            <button className="active:bg-white px-12 w-full h-full hover:text-purple-300 duration-300 text-4xl text-purple-500 rounded-full">
                                Physics 12</button></a>
                    </div>

                </div>


            </div>


        
        </>
    )
}

