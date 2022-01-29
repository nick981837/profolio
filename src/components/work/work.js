import React from 'react'
import "./work.scss"
import  {useState}  from 'react'

export default function Work() {
    const[currentsSlide, setCurrentSlide] = useState(0)
    const data = [
        {
            id: 1,
            title: "Online Resueme Platform",
            img: "assets/onlineResume.png",
            icon:"assets/web.png"
        },
        {
            id: 2,
            title: "Resueme Manangement System",
            img: "assets/resumeManagement.jpg",
            icon:"assets/web.png"
        },
        {
            id: 3,
            title: "IT Recuritment Agency",
            img: "assets/double.png",
            icon:"assets/web.png"
        },
    ]
    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentsSlide > 0 ? currentsSlide -1 :2) :
        setCurrentSlide(currentsSlide < data.length - 1 ? currentsSlide + 1: 0)
    }
    return (
        <div className="work" id="work">
            <div className="slider" style={{transform:`translateX(-${currentsSlide * 100}vw)`}}>
                {data.map(d => (
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt=""></img>
                                </div>
                                <h2>{d.title}</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque? </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt=""></img>
                        </div>
                    </div>
                </div>
                  ))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}></img>
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")}></img>
        </div>
    )
}
