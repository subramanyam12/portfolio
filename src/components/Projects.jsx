import React,{useState,useEffect,useRef,useContext} from 'react'
import {TbWorldWww} from 'react-icons/tb'
import { scrollvalue } from '../App'

const Projects = () => {
  const [projectanimebool, setprojectanimebool] = useState(false)
  const {sethighlight} = useContext(scrollvalue)
  const Projectref=useRef()
  useEffect(()=>{
    Projectref.current.parentNode.addEventListener('scroll',()=>{
      let child = Projectref.current.getBoundingClientRect()
      setprojectanimebool(child.top<600)
      console.log(child.top,child.bottom);
      if(child.top>-1000 && child.top<=200 && child.bottom >=0){
        sethighlight('Projects')
      }else if(child.top<-500 && child.bottom <700){
        sethighlight('Contact')
      }
    })
  },[])
  
  const project=[
    {
      name:'WEB CHAT',
      img:'webchat.jpeg',
      description:"Its a responsive single page application created using react , Django Api's \
       Having Token Based Login System .we can chat real-timely with friends by creating user account.",
      url:'https://subramanyam12.github.io/webchat'
    },
    {
      name:'E-commerce',
      img:'ecommerce.jpeg',
      description:"Its a simple Ecommerce responsive single page application developed in react with a Login System .In this application i have used an Public APi to show some real products along redux to manage State.",
      url:'https://subramanyam12.github.io/ecommerce'
    },
    {
      name:'Music player',
      img:'mobile-music-player.jpeg',
      description:"Its a simple mbile design music player where we can listen our required songs.Iam initially added some songs.",
      url:'https://subramanyam12.github.io/mobile-music-player'
    },
    {
      name:'Image-editor',
      img:'imagefilter.jpeg',
      description:"Its created in react by using this application we can add filters to images like contrast ,blur ,brightness ,saturation\
      and also we can rotate images ,then after filtering we can download the edited Image.",
      url:'https://subramanyam12.github.io/imagefilter'
    },
    {

      name:'Tic Tac Toe',
      img:'tic-tac-toe.jpeg',
      description:"Its developed in react in this if we have to play tic tac tac game both need to play in same tab , there is oppenent like AI bot.",
      url:'https://subramanyam12.github.io/tic-tac-toe'
    },
    {
      name:'Memory Gamer',
      img:'memory-gamer.png',
      description:"Its a memory gamee we have to match all the double emojis then you win.",
      url:'https://github.com/subramanyam12/memory-gamer'
    },
    {
      name:'Blog Post',
      img:'blogpost.png',
      description:"Its blog application where we can add , delete and update the blog post and also have a token based login system .",
      url:'https://github.com/subramanyam12/blog-post'
    }

  ]


  return (
    <div ref={Projectref} className='flex flex-col gap-5'>
      <h1 className='text-5xl max-sm:text-4xl font-bold'>Projects</h1>
      {project.map(({name,img,description,url},i)=>(
        <section key={i} className={`${projectanimebool && 'projectanimate'}`}>
          <h1 className='text-gray-800 text-2xl font-bold mb-3'>{name}</h1>
          <div className='flex max-sm:flex-col-reverse max-sm:gap-5 justify-between items-center'>
            <div className='text-gray-800 h-[20vh] max-sm:h-auto flex flex-col max-sm:gap-2 justify-evenly text-lg max-sm:text-[17px]'>
               <p className='w-[50vw]  indent-40 text-justify max-sm:w-full'>{description}</p>
               <div className='flex font-semibold max-sm:text-base items-center gap-2 '>
                 <TbWorldWww />
                 <a href={url} className='max-sm:hidden block' target='_blank'>{ url}</a>
                 <a href={url} className='max-sm:block hidden max-sm:cursor-default' target='_blank'>{url.length>34 ? `${url.substring(0,34)}...`: url}</a>
                </div>
            </div>
            <img className='rounded-2xl outline-2 outline-double outline-gray-400 shadow-lg object-cover w-[22vw] max-sm:w-[90vw] h-[12vw] max-sm:h-[50vw]' src={img} alt="" />
          </div>
          <div className='border-[1px] mt-5 border-[#8080804d]' ></div>
        </section>
       ))
      }
    </div>
  )
}

export default Projects