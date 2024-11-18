import Globe from "react-globe.gl"
import Button from "../components/Button"
import { useState } from "react"

const About = () => {
    const [hasCopied, setHasCopied] = useState(false)


    const handleCopy = () => {
        navigator.clipboard.writeText('ibrahimcesaronnova@gmail.com')
        setHasCopied(true)
        setTimeout(() => {setHasCopied(false)},2000)
    }

  return (
    <section className="c-space my-20" id="about">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6
        md:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid1.png" alt="grid-1" 
                    className="w-full sm:h-[276px] h-fit object-contain"/>
                    <div>
                        <p className="grid-headtext">
                            Hi I&apos;m Ibrahim
                        </p>
                        <p className="grid-subtext">
                            with 1 year of experience, 
                            I have honed my skills in front-end and back-end development,
                            with a focus on making simple yet functional animated UI.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <div>
                        <p className="grid-headtext">
                            My Stack
                        </p>
                        <p className="grid-subtext">
                            I specialized in JavaScript with a focus on React ecosystems. <br /> <br />
                            And React Tools, react FrameWork especially NextJs, React 3D tools like React Three Fiber. <br /> <br />
                            For Back-End i use NodeJs and its frame work such as ExpreesJS for RESTful API. <br /> <br />
                            For DataBases I curently still using MongoDB.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-span-1 xl:row-span-4">
                <div className="grid-container">
                    <div className="rounded-3xl w-full sm:h-[326px] h-fit
                    flex justify-center items-center">
                        <Globe 
                        height={326}
                        width={326}
                        backgroundColor="rgba(0,0,0,0)"
                        backgroundImageOpacity={0.5}
                        showAtmosphere
                        showGraticules
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                        labelsData={[{
                            lat: 40,
                            lng:-100,
                            text:'Padang, Indonesia',
                            color: 'white',
                            size: 20,
                        }]}/>
                    </div>
                    <div >
                        <p className="grid-headtext">I work remotely Wordlwide</p>
                        <p className="grid-subtext">I&apos;m Based in Padang, Indonesia</p>
                        <a href="#contact">
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </a>
                        
                    </div>
                </div>
            </div>
            <div className="xl:col-span-2 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>
                    <div>
                        <p className="grid-headtext">My passions for Programming</p>
                        <p className="grid-subtext">
                            Coding always express my knowledge and creatifity,
                            and honed my problem solving skills with Building things through code,
                            it is wondefull to think that a computer can make very usefull tolls for people and send 
                            knowledge, and information through the internet so you can learn it behind a screen.
                        </p>
                    </div>
                </div>
            </div>
            <div className="xl:col-span-1 xl:row-span-2">
                <div className="grid-container">
                    <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"/>
                    <div className="space-y-2">
                        <p className="grid-subtext text-center">Contact Me</p>
                        <div className="copy-container" onClick={handleCopy}>
                            <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" />
                            <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white">
                                ibrahimcesaronnova@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default About