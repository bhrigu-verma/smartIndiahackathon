//accertinity imports
"use client"

import { GlareCard } from "@/components/ui/glare-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight'
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { motion } from "framer-motion";
import { FlipWords } from "@/components/ui/flip-words";
import  { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import {Roboto} from '@next/font/google';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

//accertinity imports
// import Typewriter from 'typewriter-effect';
import NavBar from '@/components/navbar';
import { Button } from '@/components/ui/button';
import Layout from './layout';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { pricingCards } from '@/constants/landing-page'
import clsx from 'clsx';
import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
//import { PlaywriteCU } from '@next/font/google';
// const playwriteCU = PlaywriteCU({ 
//   weight: ['100', '400'], 
//   subsets: ['latin'] 
// });
const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
});
export default function Home() {
//globe
const globeConfig = {
  pointSize: 4,
  globeColor: "#062056",
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.1,
  emissive: "#062056",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)",
  ambientLight: "#38bdf8",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};
const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
const sampleArcs = [
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 1,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -1.303396,
    endLng: 36.852443,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: -15.785493,
    startLng: -47.909029,
    endLat: 36.162809,
    endLng: -115.119411,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: 21.3099,
    startLng: -157.8581,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: 11.986597,
    startLng: 8.571831,
    endLat: -15.595412,
    endLng: -56.05918,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: -34.6037,
    startLng: -58.3816,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 48.8566,
    endLng: -2.3522,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 5,
    startLat: 14.5995,
    startLng: 120.9842,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 5,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: -33.8688,
    endLng: 151.2093,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 5,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 48.8566,
    endLng: -2.3522,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 6,
    startLat: -15.432563,
    startLng: 28.315853,
    endLat: 1.094136,
    endLng: -63.34546,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 6,
    startLat: 37.5665,
    startLng: 126.978,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 6,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 7,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -15.595412,
    endLng: -56.05918,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 7,
    startLat: 48.8566,
    startLng: -2.3522,
    endLat: 52.52,
    endLng: 13.405,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 7,
    startLat: 52.52,
    startLng: 13.405,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 8,
    startLat: -8.833221,
    startLng: 13.264837,
    endLat: -33.936138,
    endLng: 18.436529,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 8,
    startLat: 49.2827,
    startLng: -123.1207,
    endLat: 52.3676,
    endLng: 4.9041,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 8,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 9,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 9,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 9,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: -34.6037,
    endLng: -58.3816,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 10,
    startLat: -22.9068,
    startLng: -43.1729,
    endLat: 28.6139,
    endLng: 77.209,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 10,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 31.2304,
    endLng: 121.4737,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 10,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 52.3676,
    endLng: 4.9041,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 11,
    startLat: 41.9028,
    startLng: 12.4964,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 11,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 31.2304,
    endLng: 121.4737,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 11,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 1.3521,
    endLng: 103.8198,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 12,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 37.7749,
    endLng: -122.4194,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 12,
    startLat: 35.6762,
    startLng: 139.6503,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 12,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 13,
    startLat: 52.52,
    startLng: 13.405,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 13,
    startLat: 11.986597,
    startLng: 8.571831,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 13,
    startLat: -22.9068,
    startLng: -43.1729,
    endLat: -34.6037,
    endLng: -58.3816,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 14,
    startLat: -33.936138,
    startLng: 18.436529,
    endLat: 21.395643,
    endLng: 39.883798,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
];
const worrds = ["Next js websites", "React websites", "Html websites", "Wordpress websites","personal website"];
const testimonials = [
  
    {
    quote: "Artificial intelligence is not a substitute for human intelligence; it is a tool to amplify human creativity and ingenuity.",
    name: "Fei-Fei Li",
    title: "Co-Director of the Stanford Institute for Human-Centered Artificial Intelligence"
    },
    {
    quote: "Forget artificial intelligence – in the brave new world of big data, it's artificial idiocy we should be looking out for.",
    name: "Tom Chatfield",
    title: "Author and Tech Philosopher"
    },
    {
    quote: "AI is a mirror, reflecting not only our intellect, but our values and fears.",
    name: "Ravi Narayanan",
    title: "VP of Insights and Analytics, Nisum"
    },
    {
    quote: "Artificial intelligence holds immense promise for tackling some of society's most pressing challenges, from climate change to healthcare disparities. Let's leverage AI responsibly to create a more equitable world.",
    name: "Katherine Gorman",
    title: "Co-founder and Executive Producer of 'Talking Machines'"
    },
    {
    quote: "AI will change the way we work and run our businesses in the same way that the introduction of the internet did. AI decision-making in particular has the potential to raise global economic output, and is projected to add a staggering USD 13 trillion to the global economy by 2030.",
    name: "Richard Potter",
    title: "CEO & co-founder at Peak"
    },
    {
    quote: "AI has the power to unlock unprecedented productivity and innovation across all industries. At UiPath, we believe in democratizing access to AI, making it accessible and easy to use for everyone, regardless of technical expertise.",
    name: "Param Kahlon",
    title: "Chief Product Officer at UiPath"
    },
    {
    quote: "Artificial intelligence is not just about efficiency gains, it's about opening up new possibilities, unlocking human potential and solving some of society's biggest challenges.",
    name: "Yoshua Bengio",
    title: "Computer scientist and Turing Award laureate"
    },
    {
    quote: "As artificial intelligence evolves, we must remember that its power lies not in replacing human intelligence, but in augmenting it. The true potential of AI lies in its ability to amplify human creativity and ingenuity.",
    name: "Ginni Rometty",
    title: "Executive Chairman at IBM"
    },
    {
    quote: "AI and automation are not just tools in their toolbox; they are truly change enablers that can transform the way small businesses operate and compete.",
    name: "Satya Nadella",
    title: "CEO at Microsoft"
    },
    {
    quote: "Responsible AI is not just about liability — it's about ensuring what you are building is enabling human flourishing.",
    name: "Rumman Chowdhury",
    title: "CEO at Parity AI"
    }
    
];
//globe
  const content = [
    {
      title: "Control and power",
      description:
        " 🎉 Acumen AI services offer you full control over your chatbot, allowing you to track website performance and monitor sales like never before! 🚀📈 ",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
           <Image
            src="/images/app-ui.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Lead generation",
      description:
        "Extend your chatbot's functionality with custom branding. Change the icon, train it on your specific questions, and tailor it to your needs. The bot is smart enough to recognize emails and extract contact info from chats. ",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
         src="/images/lead.jpg"
         width={300}
         height={300}
         className="h-full w-full object-cover"
         alt="linear board demo"
       />
     </div>
      ),
    },
    {
      title: "Robust pricing",
      description:
        "💼 Our business plans start at just ₹199 per month—cheaper than a Netflix subscription! 🎉 Get all these amazing features and more to elevate your business to the next level. 🚀",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
         src="/images/email.jpg"
         width={300}
         height={300}
         className="h-full w-full object-cover"
         alt="linear board demo"
       />
     </div>
      ),
    },
    {
      title: "Customization",
      description:
        "Extend your chatbot's functionality by incorporating your branding. You can customize the chatbot icon, train the bot on your specific question set, and tailor it to meet your unique needs.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
           <Image
            src="/images/pasted.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Email-Marketing",
      description:
        " we provide robust email marketing tools so you can effortlessly create and manage campaigns directly from our platform. 📧📈🚀",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
           <Image
            src="/images/email.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
  ];
 const wordds=`At Acumen AI, we make cutting-edge AI accessible for small startups and businesses. We simplify AI integration by eliminating the need for complex authentication setups, database configurations, and costly engineering resources. Our platform provides robust, real-time data monitoring, allowing you to focus on your core business. Effortlessly gain actionable insights and extract valuable lead details with Acumen AI`;
  const words = [
    {
      text: "salesperson",
    },
    
   
    {
      text: "Acumen",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "AI",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
   <div className="bg-[#0A0A0A]">
    {/* <Layout>
      <Suspense fallback={<div>Loading Navbar...</div>}> */}
    <main >

   <div className="flex gap-5 justify-between items-center px-7 py-1 font-bold border-b border-solid border-zinc-100 leading-[154.5%] max-md:flex-wrap max-md:px-5">
      <div className="  flex gap-1.5 justify-center self-stretch my-auto text-2xl tracking-tighter text-neutral-200">
     <h1 className="text-blue-500 dark:text-blue-500"> Acumen.Ai</h1>
      </div>
      <ul className="bg-gradient-to-r z-10 from-primary to-secondary-foreground text-transparent bg-clip-text relative gap-5 justify-between self-stretch my-auto text-sm leading-5 text-neutral-200 max-md:flex-wrap max-md:max-w-full font-normal hidden md:flex">
        <Link href="/dashboard">Home</Link>
        <Link href="/home">Pricing</Link>
        <Link href="/documentation">Documentation</Link>
        <Link href="/home">Features</Link>
        <Link href="/home">Contact us</Link>
      </ul>
    
      <Link
        href="/dashboard"
        className="bg-orange px-4 z-10 py-2 rounded-sm text-white"
      >
        Start now for free!
      </Link>
    </div>
        
    <section>
      <div className="select-none md:flex justify-center ">
      <div className="md:w-[60%] z-5  height-full ">
        <div className="opacity-75 justify-center flex  align-center mt-5 md:text-md text-sm mx-4 px-1">&quot;AI is the future of Customer Services and Businesses that do not adopt this solution may miss out on opportunities to improve efficiency and stay competitive in the market&quot; - Forbes
        </div>
        
        {/* niche wla div change krke vo */}
        <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Don&apos;t have time and money to handle and hire customer service we got you with {" "}
        <Highlight className="text-black dark:text-white">
          Acumen Ai 
        </Highlight>
      </motion.h1>
    </HeroHighlight>
    <div className=" flex-col justify-items-start ">
      <div className="text-xl flex ml-[8rem] mb-4 pb-8 font-normal text-neutral-600 dark:text-neutral-400">
        Start Integrating Ai in your  <FlipWords words={worrds} />  now!
       
       with Acumen Ai 
       
      </div>
      {/* <div className="align-items-center  justify-center mx-5 ">We're live now with the powerful chatbot integration and customization fratures  and working on the Ai calling services especcially for India </div> */}
        {/* <p className='text-neutral-700 text-xl dark:text-white max-w-4xl leading-relaxed lg:leading-snug ml-3 mb-2 mx-auto'>Want to Integrate AI in your  <Typewriter
          words={['Wordpress','html','Reactjs','Next js']}
          loop={false}
          cursor
          cursorStyle='_'
          typeSpeed={30}
          deleteSpeed={30}
          delaySpeed={2000}
        // eslint-disable-next-line react/no-unescaped-entities
        /> website? It's now a click away.</p> */}
        </div>
     <BackgroundBeams />
    {/* <div className="z-10 ml-[12rem]"> */}
    {/* <button className=" mt-2 w-40 m-10 z-10 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">   <Link href="/sign-up" >
        Join now
        </Link></button>
       
      
        <Link className=" m-2 z-10 w-40  h-10 rounded-xl bg-white text-black border border-black  text-sm" href="/sign-in" >
        Sign In
        </Link>
        
    </div>*/}
      
      </div> 
      <div className="md:w-[40%] ">
     
      {/* <GlareCard className="flex flex-col items-center justify-center">

      <p className="text-white font-bold  text-[40px] mt-4">Acumen Ai</p>
    </GlareCard> */}
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="60"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
         Add power and automation to your website  
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Ai addition is now just a click away comes with powerful monitoring
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/images/app-ui.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={30}
            as={Link}
            href="/sign-up"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem> 
           <CardItem
            translateZ={30}
            as={Link}
            href="/auth/sign-in"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign in
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    
      </div></div>
    </section>
    {/* infinite cards */}
    <div className="h-[35rem] rounded-md flex flex-col antialiased bg-white dark:bg-[#0A0A0A] dark:bg-grid-white/[0.05] items-center  relative overflow-hidden">
    <div className="justify-start text-4xl font-bold flex ">Why should i use <p className= "text-blue-500 dark:text-blue-500 ml-2"> Ai</p> ?</div>
     
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
    {/* what we provide */}
    <section className="flex flex-col mt-5 max-w-full h-full justify-center">
    <div className="text-center justify-center text-4xl font-bold flex ">Why choose <div className= "text-blue-500 dark:text-blue-500 ml-2"> AcumenAi</div> ?</div>
    <div className="p-10   bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_90%_80%_at_70%_0%,#000_70%,transparent_100%)] ">
      <StickyScroll content={content} />
    </div>

{/* our vision */}
    </section >
    {/* payment plans create a fomo free for first 100 registrations  */}
   

      {/* <section className="flex justify-center items-center flex-col gap-4 mt-10">
        <div className="  height-full mt-5 justfiy-center">
        
        <div className="  height-full justify-items-center">


        <div className="flex flex-row items-center justify-center py-20 h-screen md:h-auto dark:bg-[#0A0A0A] bg-white relative w-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] w-full px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="div"
        >
          <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
           Our Vision
          </h2>
          <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200  mt-2 mx-auto">
          At Acumen AI, we make AI accessible for small startups and businesses. We simplify AI integration by removing the need for complex setups and costly resources. Our platform provides real-time data monitoring, allowing you to focus on your core business and gain actionable insights effortlessly.
          </p>
        </motion.div>
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-[#0A0A0A] to-white z-40" />
        <div className="absolute w-full -bottom-20  md:h-full z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
        </div>
        </div>
      
      </section>  */}
      <section className="flex flex-col  max-w-full h-full justify-center">
     <h1 className="text-center justify-center text-4xl font-bold flex " > Plans we Offer </h1>
    <h1 className="text-center justify-center text-lg font-medium flex"> currently offering free Ultimate plan for first 100 buinesses according to registered time</h1>
    </section>
      <div className="flex p-6 justify-center gap-4 flex-wrap mt-6">
      
        {pricingCards.map((card) => (
          <Card
            key={card.title}
            className={clsx('w-[300px] flex flex-col justify-between', {
              'border-2 border-primary': card.title === 'Unlimited',
            })}
          >
            <CardHeader>
              <CardTitle className="text-orange">{card.title}</CardTitle>
              <CardDescription>
                {pricingCards.find((c) => c.title === card.title)?.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-4xl font-bold">{card.price}</span>
              <span className="text-muted-foreground">
                <span>/ month</span>
              </span>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <div>
                {card.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex gap-2"
                  >
                    <Check />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
              <Link
                href={`/dashbord?plan=${card.title}`}
                className="bg-[#e69408] border-orange border-2 p-2 w-full text-center font-bold rounded-md"
              >
                Get Started
              </Link>
            </CardFooter>
          </Card> 
         ))}
      </div> 
      <section className="flex justify-center bg-black ">
        <Link href="mailto:vermatechnologies11@gmail.com" className="md:text-xl text-sm text-zinc-500 p-2 w-1/3 ml-3"> Connect for buisness </Link>
        <Link href="mailto:bhriguverma11@gmail.com" className="md:text-xl text-sm text-zinc-500 p-2 w-1/3 ml-3">Connect for work</Link>
        <Link href="https://www.linkedin.com/in/bhrigu-verma-89090a273/"  className="md:text-xl text-sm text-zinc-500 p-2 w-1/3 ml-3">Connect on Linkedin </Link>
      </section>
      </main>
      </div>  
  );
}
