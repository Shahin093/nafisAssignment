import React, { useState } from 'react';

const SinglePosts = ({ post }) => {
    const { id, name, username, email, address, phone, website, company } = post;
    // console.log(post);

    // 
    const [singleUser, setSingleUser] = useState({});
    // let [demoobject, setDemoobject] = useState([]);

    let oldObject = localStorage.getItem('dataObject') || [];
    const addToCard = (id) => {
        console.log(id)
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(json => {
                setSingleUser(json)

                // 
                // oldObject?.push({});
                localStorage.setItem('dataObject', JSON.stringify([singleUser]));
                // console.log(singleUser)

            })

    }

    // oldObject.push(singleUser);
    console.log(singleUser);
    return (
        <div>
            <div class='flex items-center justify-center  from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3] bg-gradient-to-br px-2'>
                <div class=' mx-auto bg-white rounded-3xl shadow-xl overflow-hidden'>
                    <div class=' mx-auto'>
                        {/* <div class='h-[236px]' style=
                            {{ backgroundImage: 'url(url(https://img.freepik.com/free-photo/pasta-spaghetti-with-shrimps-sauce_1220-5072.jpg?w=2000&t=st=1678041911~exp=1678042511~hmac=e4aa55e70f8c231d4d23832a611004f86eeb3b6ca067b3fa0c374ac78fe7aba6);background-size:cover;background-position:center)' }}
                        >
                        </div> */}
                        <div class='p-4 sm:p-6'>
                            <p class='font-bold text-gray-700 text-[22px] leading-7 mb-1'>{name}</p>
                            <div class='flex flex-row'>
                                <p class='text-[#3C3C4399] text-[17px] mr-2 line-through'>Suite 700</p>
                                <p class='text-[17px] font-bold text-[#0FB478]'>{address?.suite}</p>

                            </div>
                            <hr className='max-w-full' />
                            <p class='text-[#7C7C80] font-[15px] mt-6'>{company?.catchPhrase}  amet consectetur adipisicing elit. Est, illum?</p>


                            <button onClick={() => addToCard(id)} className='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                                Add to Card
                            </button>
                            {/* <a target='_blank' href='foodiesapp://food/1001' className='block mt-2 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#497fd4] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                                View on foodies
                            </a> */}
                            <a target='_blank' href="https://apps.apple.com/us/app/id1493631471" class='block mt-1.5 w-full px-4 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] hover:bg-[#F2ECE7] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                                Download app
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePosts;