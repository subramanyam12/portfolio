import React from 'react'
import Cardtilt from '../components/Cardtilt'

const Project = () => {
    return (
        <div className='flex flex-col overflow-auto h-[86vh] w-[90%] max-sm:w-full pb-10 scroll_none'>
            <h1 className=' text-5xl max-sm:text-3xl font-extrabold text-white pl-14 max-sm:pl-5 pt-5 pb-10'>Projects</h1>
            <div className=' flex flex-wrap gap-10 justify-evenly'>
                {project.map(({ name, img, description, url, skills }, i) => (
                    <div key={i} className={`flex justify-center relative`}>
                        <Cardtilt key={i} name={name} image={img} description={description} website={url} skills={skills} />
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Project

const project = [
    {
        name: 'Musify',
        img: 'musify.jpeg',
        description: "In this music application i have used an jio Savaan(unofficial) API so that \
        we can listen songs of different artists, albums , playlists and also we can download and add favourite songs .",
        url: 'musify',
        skills: 'react, javascript'
    },
    {
        name: 'WEB CHAT',
        img: 'webchat.jpeg',
        description: "Its a responsive single page webchat application and having an Django's Api \
        Token Based Login System along with we can chat real-timely with friends by creating an user account.",
        url: 'webchat',
        skills: 'react, javascript, django,  django rest framework, python',
    },
    {
        name: 'drawing - pad',
        img: 'drawing-pad.png',
        description: "In this drawing board different users can sketch on the same board from different browers \
         or tabs by creating a room with same room name with help of django with web sockets .",
        url: 'websocket-drawing-pad',
        skills: 'react, django-channels , web sockets'
    },
    {
        name: 'E-commerce',
        img: 'ecommerce.jpeg',
        description: "This is a simple Ecommerce responsive website developed with a Login System .\
        In this application i have used an Public API to show some real products and also used redux to manage State globally.",
        url: 'ecommerce',
        skills: 'react, javascript, django rest framework'
    },
    {
        name: 'Image-editor',
        img: 'imagefilter.jpeg',
        description: "This is created in react by using this application we can add filters to images like contrast ,blur \
        ,brightness ,saturation and also we can rotate images ,then after filtering we can download the edited Image.",
        url: 'imagefilter',
        skills: 'react, javascript'
    },
    {
        name: 'Tic Tac Toe',
        img: 'tic-tac-toe.jpeg',
        description: "This is created in react, In this both needs to play in same tab to play tic tac tac game  , there is no oppenent like AI bot.",
        url: 'tic-tac-toe',
        skills: 'react, javascript'
    },
    {
        name: 'Memory Gamer',
        img: 'memory-gamer.png',
        description: "This is a simple memory game you need to match all the double emojis that are shown randomly on the grid.",
        url: 'memory-gamer',
        skills: 'react, javascript'
    },
    {
        name: 'Music player',
        img: 'mobile-music-player.jpeg',
        description: "This is a simple mobile design music player where we can listen our required songs.",
        url: 'mobile-music-player',
        skills: 'react, javascript'
    },
    {
        name: 'Blog Post',
        img: 'blogpost.png',
        description: "This is a blog post application where we can add , delete and update the blog post and also have a token based login system using django API.",
        url: 'blog-post',
        skills: 'react, javascript, django rest framework'
    }

]


