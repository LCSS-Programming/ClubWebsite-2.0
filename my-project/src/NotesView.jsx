import { checkfile } from 'react';
import myImage from './assets/central.png'

import React, { useEffect, useState } from 'react';

export default function NotesView() {
  const [total, setTotal] = useState('');
  const[data, setData] =  useState([]);
  const [images, setimages] = useState('');

  useEffect(() => {
    const fetchData = async (what) => {
      try {
        const response = await fetch('https://centraltechtribe.website/display.php');
        const data = await response.json();
        setTotal(data['total']);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

    const fetchimage= async () => {
      try {
        const response = await fetch('https://centraltechtribe.website/display.php');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchimage();


  const renderList = () => {
    const listItems = [];
    for (let i = 1; i < total; i++) {
      listItems.push(
                <li class="flex-shrink-0 snap-start basis-96 place-items-center text-8xl p-10">
                    <div className="border-4 border-cus-gold p-20 hover:p-60">
                        <img src={'https://centraltechtribe.website/' + data[String(i)]}></img>
                    </div>
                </li>
        );
    }
    return listItems;
  };


    return (
        <>
            <label class="block m-6 mb-20">
            </label>
            <div className="w-4/5 h-20 text-7xl text-center mx-auto mb-8 text-amber-200 font-bold" id="NotesUpload">
                <h1>Notes View</h1>
                <p className = "text-2xl">View Notes Here!</p>
            </div>

            <div className = "text-center mb-8 py-10">
            <ul class="flex snap-y snap-mandatory h-screen w-screen mx:auto overflow-x-auto">
                {renderList()}
            </ul>                
            </div>
    <div>
     <ul>
            
     </ul>
     <ul></ul>;
     {total}


    </div>
        </>
    );
}
