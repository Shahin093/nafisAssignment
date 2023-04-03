import React, { useEffect, useState } from 'react';
import SinglePosts from '../SinglePosts/SinglePosts';

const Posts = () => {
    let [origenimalposts, setOriginalposts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setOriginalposts(json))
    }, []);
    let [posts, setposts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setposts(json))
    }, []);
    // console.log(posts);
    const [message, setMessage] = useState('');
    const [messageEmail, setMessageEmail] = useState('');

    const handleChange = (event) => {
        // 👇 Get input value from "event"
        setMessage(event.target.value);
    };
    const handleChangeEmail = (event) => {
        // 👇 Get input value from "event"
        setMessageEmail(event.target.value);
    };


    const handleFIltering = (event) => {
        event.preventDefault();


        const userslot = origenimalposts.filter(post => post?.username === message);
        setposts(userslot)

    }
    const handleFIlteringemail = (event) => {
        event.preventDefault();
        console.log(messageEmail);

        // userslot = posts.filter(post => post?.email === message);
        const userslotemail = origenimalposts.filter(postemail => postemail?.email === messageEmail)
        console.log(userslotemail)
        setposts(userslotemail);

    }

    return (
        <div className='mt-16'>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-3'>

                <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto  bg-gray-400">

                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Search By UserName</div>
                        {/* <form onSubmit={handleFIltering} className='mx-auto'>
                            <div>
                                <p htmlFor="Filtering UserName and UserEmail : "></p>
                                <input required onChange={handleChange} name='username' type="text" placeholder='Enter the userName ' />
                                <input className='bg-yellow-500' type="submit" value="Search" />
                            </div>
                            <div>



                            </div>
                        </form> */}
                        <form onSubmit={handleFIltering} className='bg-gray-400'>

                            <p htmlFor="Filtering UserName and UserEmail : "></p>
                            <select
                                className='border-red-400 text-2xl '
                                required
                                value={message}
                                onChange={handleChange}
                            >
                                <option value="">Choose a UserName</option>
                                {
                                    origenimalposts.map(ps => <option value={ps.username}>{ps.username}</option>)
                                }
                            </select>
                            <input className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' type="submit" value="Search" />

                        </form >
                    </div>

                </div>


                <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto bg-gray-400">

                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Search By Email </div>
                        <form onSubmit={handleFIlteringemail} className=''>

                            <p htmlFor="Filtering UserName and UserEmail : "></p>
                            <select
                                className='text-2xl'
                                required
                                value={messageEmail}
                                onChange={handleChangeEmail}
                            >
                                <option value="">Choose an Email </option>
                                {
                                    origenimalposts.map(ps => <option value={ps.email}>{ps.email}</option>)
                                }
                            </select>
                            <input className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' type="submit" value="Search" />

                        </form >
                    </div>

                </div>





            </div>
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full bg-black text-white">
                                <thead class="bg-white border-b">
                                    <tr className='bg-purple-600 text-2xl'>
                                        <th scope="col" class=" font-medium text-gray-900 px-6 py-4 text-left text-2xl">
                                            #
                                        </th>
                                        <th scope="col" class=" font-medium text-gray-900 px-6 py-4 text-left text-2xl">
                                            Name
                                        </th>
                                        <th scope="col" class="font-medium text-gray-900 px-6 py-4 text-left text-2xl">
                                            Title
                                        </th>
                                        <th scope="col" class="text-2xl font-medium text-gray-900 px-6 py-4 text-left">
                                            UserName
                                        </th>
                                        <th scope="col" class="text-2xl font-medium text-gray-900 px-6 py-4 text-left">
                                            UserEmail
                                        </th>
                                    </tr>
                                </thead>


                                {
                                    posts.map(post =>
                                        <tbody>
                                            <tr class="bg-black text-white border-b">
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                                <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                                                    {post?.name}
                                                </td>
                                                <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                                                    {post?.company?.catchPhrase}
                                                </td>
                                                <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                                                    {post?.username}
                                                </td>
                                                <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                                                    {post?.email}
                                                </td>
                                            </tr>
                                        </tbody>

                                    )
                                }
                                {/* <tr class="bg-gray-100 border-b">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Mark
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Otto
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            @mdo
                                        </td>
                                    </tr> */}
                                {/* <tr class="bg-white border-b">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Jacob
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Dillan
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            @fat
                                        </td>
                                    </tr>
                                    <tr class="bg-gray-100 border-b">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Mark
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Twen
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            @twitter
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Bob
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Dillan
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            @fat
                                        </td>
                                    </tr>
                                    <tr class="bg-gray-100 border-b">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5</td>
                                        <td colspan="2" class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                            Larry the Bird
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            @twitter
                                        </td>
                                    </tr> */}

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Posts;