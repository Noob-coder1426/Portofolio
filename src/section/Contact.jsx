import { useRef, useState } from "react"
import { useMediaQuery } from "react-responsive"
import emailjs from '@emailjs/browser'

const Contact = () => {

    const isSmall = useMediaQuery({maxWidth: 986})

    const formRef= useRef()

    const [loading, setloading] = useState(false)

    const [form, setForm] = useState({
        name: "", 
        email: "", 
        message: ""
    })

    const handleCahange = ({target: {name,value}})=> {
        setForm({...form, [name]: value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setloading(true)

        try{
            await emailjs.send(
            'service_pio2a7j', 
            'template_hs4kbqa', 
            {from_name: form.name, 
            to_name: 'Ibrahim', 
            from_email: form.email, 
            to_email: "testingacount1426@gmail.com",
            message: form.message,
        },'9y4TYV0ZmxfXcqAR7'
    )
        setloading(false)
        alert('Your message has been sent!')
        setForm({
            name: '',
            email: '',
            message: '',
        })
    }catch(error){
        console.log(error)
        setloading(false)
        alert('Something went wrong')
    }
}

  return (
    <section className="c-space my-20" id="contact">
        <div className="relative min-h-screen flex items-center justify-center flex-col">
            {isSmall ? "" : <img src="/assets/terminal.png" alt="terminal-background" className="absolute inset-0 min-h-screen"/>}
            <div className="contact-container">
                <h3 className="head-text">
                    Lets Talk
                </h3>
                <p className="text-lg text-white-600 mt-3">
                    If you looking for making a new website,
                    or improve your already existing platform, 
                    or bringing a unique project to life, 
                    just contact me, 
                    im here to help.
                </p>

                <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                    <label htmlFor="" className="space-y-3">
                        <span className="field-label">Fullname</span>
                        <input 
                        type="text" 
                        name="name" 
                        value={form.name} 
                        onChange={handleCahange} 
                        required 
                        className="field-input" 
                        placeholder="Your Name"/>
                    </label>
                    <label htmlFor="" className="space-y-3">
                        <span className="field-label">Email</span>
                        <input 
                        type="email" 
                        name="email" 
                        value={form.email} 
                        onChange={handleCahange} 
                        required 
                        className="field-input" 
                        placeholder="Your Email"/>
                    </label>
                    <label htmlFor="" className="space-y-3">
                        <span className="field-label">Message</span>
                        <textarea 
                        name="message" 
                        value={form.message} 
                        onChange={handleCahange} 
                        required
                        rows={5} 
                        className="field-input" 
                        placeholder="Your Message"/>
                    </label>
                    <button className="field-btn" type="submit" disabled={loading}>
                        {loading ? 'Sending...' : 'Send Message'}
                        <img src="/assets/arrow-up.png" alt="arrow" className="field-btn_arrow"/>
                    </button>
                </form>
        </div>
        </div>
        
    </section>
  )
}

export default Contact