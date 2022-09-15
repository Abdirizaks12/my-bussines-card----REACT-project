import React from "react"
import ReactDOM from "react-dom"
import Info  from "./components/info.js"
import About  from "./components/about.js"
import Interest  from "./components/interest.js"
import Footer from "./components/footer"

function App(){
    return (
        <div className="app">
            <Info/>
            <About />
            <Interest />
            <Footer/>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById("root"))