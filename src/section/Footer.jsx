const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300
    flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
            <p>
                &copy;
            </p>
            <p>|</p>
            <p>Ibrahim, 2024 All Rights Reserved</p>
        </div>
        <div className="flex gap-3">
            <div className="social-icon">
                <a target="_blank" href="https://github.com/Noob-coder1426" className="w-full flex items-center justify-center">
                <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2"/>
                </a>
            </div>
            <div className="social-icon">
                <a target="_blank" href="https://www.instagram.com/cesaarr_0" className="w-full flex items-center justify-center">
                <img src="/assets/instagram.svg" alt="github" className="w-1/2 h-1/2"/>
                </a>
            </div>
            <div className="social-icon">
                <a target="_blank" href="https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav" className="w-full flex items-center justify-center">
                <img src="/assets/linkedin-2.svg" alt="github" className="w-1/2 h-1/2"/>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Footer