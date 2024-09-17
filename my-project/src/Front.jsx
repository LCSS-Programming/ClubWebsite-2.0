import { useState } from 'react';
import myImage from './assets/central.png'


export default function Front() {

    return (
        <>
            <div className="grid gap-x-5 grid-cols-10 w-11/12 m-auto mt-24">
                <div className="flex items-center p-8 col-span-4 text-cus-gold text-right text-7xl font-bold">
                    <p>London Central Secondary School</p>
                </div>
                <div className="col-span-6 border-4 border-cus-gold border-dashed">
                    <img className="w-full" src={myImage}></img>
                </div>
            </div>
        </>
    )
}