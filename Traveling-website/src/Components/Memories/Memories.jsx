import React from "react";
import memoriesCSS from './../Memories/Memories.module.css'

import MemoryImg1 from '../../assets/images/groupimg.jpg'
import MemoryImg2 from '../../assets/images/groupimg2.jpg'
import MemoryImg3 from '../../assets/images/groupimg3.jpg'
import MemoryImg4 from '../../assets/images/groupimg4.jpg'
import MemoryImg5 from '../../assets/images/travelerimg.jpg'
import MemoryImg6 from '../../assets/images/travelerimg2.jpg'
import MemoryImg7 from '../../assets/images/groupimg6.jpg'

function Memories(){
    return(
        <div className={`${memoriesCSS.Memories_wrapper} section`}>
            <div className={memoriesCSS.MemoriesCard}>
                <img src={MemoryImg1} alt="" />
                <div className={memoriesCSS.content}>
                    <h3>Sample text</h3>
                    <button>View info</button>
                </div>
            </div>
            <div className={memoriesCSS.MemoriesCard}>
                <img src={MemoryImg2} alt="" />
                <div className={memoriesCSS.content}>
                    <h3>Sample text</h3>
                    <a href="#">View Tours</a>
                </div>
            </div>
            <div className={memoriesCSS.MemoriesCard}>
                <img src={MemoryImg3} alt="" />
                <div className={memoriesCSS.content}>
                    <h3>Sample text</h3>
                    <a href="#">View Tours</a>
                </div>
            </div>
            <div className={memoriesCSS.MemoriesCard}>
                <img src={MemoryImg4} alt="" />
                <div className={memoriesCSS.content}>
                    <h3>Sample text</h3>
                    <button>View info</button>
                </div>
            </div>
            <div className={memoriesCSS.MemoriesCard}>
                <img src={MemoryImg5} alt="" />
                <div className={memoriesCSS.content}>
                    <h3>Sample text</h3>
                    <a href="#">View Tours</a>
                </div>
            </div>
            <div className={memoriesCSS.MemoriesCard}>
                <img src={MemoryImg6} alt="" />
                <div className={memoriesCSS.content}>
                    <h3>Sample text</h3>
                    <a href="#">View Tours</a>
                </div>
            </div>
            <div className={memoriesCSS.MemoriesCard}>
                <img src={MemoryImg7} alt="" />
                <div className={memoriesCSS.content}>
                    <h3>Sample text</h3>
                    <a href="#">View Tours</a>
                </div>
            </div>
        </div>
    )
}

export default Memories