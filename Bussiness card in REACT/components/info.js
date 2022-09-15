import React from "react"

export default function Info () {
    return(
        <main className="info">
            <img className="profile--img" src="./images/profile-portrait.webp"/>
            <h3 className="name black">Abdirizak Sigat</h3>
            <h4 className="title black">Frontend Developer</h4>
            <p className="web black">abdirizaksigat.com</p>
            <div>
                    <a href="#" className="email"><i class="fa-solid fa-envelope"></i> Email</a>
                    <a href="#" className="linkedIn"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
             </div>
        </main>
    )
}