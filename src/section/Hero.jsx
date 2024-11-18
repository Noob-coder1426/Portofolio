import Button from "../components/Button"
import ModelsCanvas from "../components/canvas/HoloPc"


const Hero = () => {

  return (
    <section className="min-h-screen w-full flex
    flex-col relative" id="home">
        <div className="w-full mx-auto flex
        flex-col sm:mt-36 mt-20 c-space gap-3">
            <p className="sm:text-3xl text-2xl font-medium
            text-white text-center font-generalsans">
                Hi, I am Ibrahim  
                &nbsp;<span className="waving-hand ">
                    🤓
                </span>
            </p>
            <p className="hero_tag text-gray_gradient">
                A Full-Stack Developer
            </p>
        </div>

        <div className={`flex justify-center items-center absolute 
        top-1/3 w-full h-2/4`}>
        <ModelsCanvas />
        </div>

        <div className="absolute bottom-7 left-0 right-0 w-full
        z-10 c-space">

            <a href="#contact" className="w-fit">
                <Button 
                name="Let's work together" 
                isBeam 
                containerClass="sm:w-fit w-full sm:min-w-96"/>
            </a>

        </div>

    </section>
  )
}

export default Hero