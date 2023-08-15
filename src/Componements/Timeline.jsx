import dots from'../assets/dot.png';

function Timeline(){

    let items = [{title: "Bac 2019", desc: "Obtained my baccalaureat in mathematic branch with high honours and choosed to start computer science studies at USTHB.",done: true,img: ""},  
                {title: "Internship at djezzy", desc: "During my internship at Djezzy, I had the invaluable opportunity to participate in a collaborative team project, wherein I honed my skills in effective teamwork, proficient workload management, and adeptly navigated the realm of AI development while contributing to the creation of a website. I am truly grateful for the enriching experiences and knowledge I gained during this period.",done: true,img: ""}, 
                {title: "Bachelors degree 2022", desc: "I am delighted to share that I have earned my Bachelor's degree in Systems and Software Engineering from the University of Science and Technology Houari Boumediene, following three years of dedicated and diligent study.",done: true,img: ""}, 
                {title: "Hackathon 2023", desc: "I had the privilege of taking part in the Micro Club Hackathon, known as MicroHack, which provided me with an incredible opportunity to acquire skills in effectively handling tight deadlines, managing substantial workloads, and engaging in collaborative brainstorming sessions.",done: true,img: ""}, 
                {title: "Master's degree 2024", desc: "At present, I am pursuing my Master's degree at USTHB in Intelligent Computer Systems. This academic endeavor immerses us in a comprehensive exploration of subjects such as machine learning, neural networks, data mining, and an array of other AI-related domains.",done: false,img: ""}, ]
    return(
        <div className="relative w-full" >

            
            <div className="bgpics absolute w-full flex justify-start items-center z-0 translate-y-[50%]">
                <div className="bgpic1 h-full flex items-center"> <img className='' src={dots} alt=""  /> </div>
            </div>
            <div className="bgpics absolute w-full flex justify-end items-center z-0 translate-y-[200%]">
                <div className="bgpic1 h-full flex items-center "> <img className='' src={dots} alt="" /> </div>
            </div>


            <div id="Aboutme" className="flex h-min relative m-40">
                <div id="Aboutme " className="grid grid-cols-[auto_8px_auto] h-full w-full absolute pt-36 pb-60 2xl:pt-24 2xl:pb-36">
                    <div className="row-span-full w-2 col-start-2 col-end-2 bg-kc-blue rounded-full"></div>
                </div>
                <div id="Aboutme " className="flex flex-col h-full w-1/2">
                    {items.map((item,i) => {
                        if(i%2 == 0){
                            return(<Left item={item}/>)
                        }else{
                            return(<Right item={item}/>)
                        }

                    })}
                </div>

            </div>

        </div>
        
    )
}

function Left({item}){
    return(
        
        <div className="flex flex-row h-min w-full relative overflow-visible items-center z-[1]">
            <div className="info bg-kc-blue w-full flex  m-4 ml-24 mr-6 rounded-xl">
                <div className="img h-auto overflow-hidden w-2/5 bg-black rounded-bl-lg rounded-tl-lg"><img src="" alt="img"></img></div>
                <div className="text w-3/5 p-4 ">
                    <div className="title text-xl font-bold">{item.title}</div>
                    <div className="desc">{item.desc}</div>
                </div>
            </div>

            <div className="h-full flex justify-center items-center translate-x-[20px]" >
                <div className="bg-black-500 w-10 h-10 z-10 bg-kc-blue flex justify-center items-center rounded-full relative">
                    
                    {item.done ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/> </svg>: <svg width="32" height="32" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7.706 0.290 C 7.484 0.362,7.356 0.490,7.294 0.699 C 7.259 0.816,7.253 1.088,7.253 2.508 C 7.253 4.389,7.251 4.365,7.443 4.557 C 7.700 4.813,8.300 4.813,8.557 4.557 C 8.749 4.365,8.747 4.389,8.747 2.508 C 8.747 0.688,8.744 0.656,8.596 0.480 C 8.472 0.333,8.339 0.284,8.040 0.276 C 7.893 0.272,7.743 0.278,7.706 0.290 M2.753 2.266 C 2.595 2.338,2.362 2.566,2.281 2.728 C 2.197 2.897,2.193 3.085,2.269 3.253 C 2.343 3.418,4.667 5.750,4.850 5.843 C 5.109 5.976,5.375 5.911,5.643 5.649 C 5.907 5.391,5.977 5.111,5.843 4.850 C 5.750 4.667,3.418 2.343,3.253 2.269 C 3.101 2.200,2.901 2.199,2.753 2.266 M12.853 2.282 C 12.730 2.339,12.520 2.536,11.518 3.541 C 10.597 4.464,10.316 4.762,10.271 4.860 C 10.195 5.025,10.196 5.216,10.272 5.378 C 10.342 5.528,10.572 5.764,10.727 5.845 C 10.884 5.927,11.117 5.926,11.280 5.843 C 11.447 5.757,13.757 3.447,13.843 3.280 C 13.926 3.118,13.927 2.884,13.846 2.729 C 13.764 2.572,13.552 2.364,13.392 2.283 C 13.213 2.192,13.048 2.192,12.853 2.282 M0.699 7.292 C 0.404 7.385,0.258 7.620,0.258 7.999 C 0.259 8.386,0.403 8.618,0.698 8.706 C 0.816 8.741,1.079 8.747,2.508 8.747 C 3.997 8.747,4.196 8.742,4.318 8.702 C 4.498 8.644,4.644 8.498,4.702 8.318 C 4.788 8.053,4.745 7.677,4.608 7.491 C 4.578 7.451,4.492 7.384,4.417 7.343 L 4.280 7.267 2.547 7.261 C 1.152 7.257,0.791 7.263,0.699 7.292 M11.745 7.278 C 11.622 7.308,11.452 7.411,11.392 7.492 C 11.255 7.677,11.212 8.053,11.298 8.318 C 11.356 8.498,11.502 8.644,11.682 8.702 C 11.804 8.742,12.003 8.747,13.492 8.747 C 14.921 8.747,15.184 8.741,15.302 8.706 C 15.597 8.618,15.741 8.386,15.742 7.999 C 15.742 7.614,15.595 7.383,15.290 7.291 C 15.187 7.260,14.864 7.254,13.496 7.256 C 12.578 7.258,11.790 7.268,11.745 7.278 M4.853 10.282 C 4.730 10.339,4.520 10.536,3.518 11.541 C 2.597 12.464,2.316 12.762,2.271 12.860 C 2.195 13.025,2.196 13.216,2.272 13.378 C 2.342 13.528,2.572 13.764,2.727 13.845 C 2.884 13.927,3.117 13.926,3.280 13.843 C 3.447 13.757,5.757 11.447,5.843 11.280 C 5.926 11.118,5.927 10.884,5.846 10.729 C 5.764 10.572,5.552 10.364,5.392 10.283 C 5.213 10.192,5.048 10.192,4.853 10.282 M10.753 10.266 C 10.595 10.338,10.362 10.566,10.281 10.728 C 10.197 10.897,10.193 11.085,10.269 11.253 C 10.343 11.418,12.667 13.750,12.850 13.843 C 13.109 13.976,13.375 13.911,13.643 13.649 C 13.907 13.391,13.977 13.111,13.843 12.850 C 13.750 12.667,11.418 10.343,11.253 10.269 C 11.101 10.200,10.901 10.199,10.753 10.266 M7.745 11.277 C 7.620 11.309,7.451 11.412,7.392 11.492 C 7.254 11.678,7.253 11.691,7.253 13.489 C 7.253 14.921,7.259 15.184,7.294 15.302 C 7.382 15.597,7.615 15.741,8.000 15.741 C 8.385 15.741,8.618 15.597,8.706 15.302 C 8.768 15.090,8.767 11.875,8.704 11.690 C 8.644 11.514,8.575 11.430,8.420 11.346 C 8.310 11.286,8.246 11.271,8.057 11.264 C 7.930 11.259,7.790 11.265,7.745 11.277 " stroke="none" fill-rule="evenodd"></path></g> <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="6s" additive="sum" repeatCount="indefinite" /> </svg>}
                
                </div>    
            </div> 
        </div>
       
    )
}
function Right({item}){
    return(
        <div className="flex flex-row h-min w-full relative overflow-visible translate-x-full items-center z-[1]">

            <div className="h-full flex justify-center items-center translate-x-[-20px]" >
                <div className="bg-black-500 w-10 h-10 z-10 bg-kc-blue flex justify-center items-center rounded-full relative">
                
                    {item.done ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/> </svg>: <svg width="32" height="32" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7.706 0.290 C 7.484 0.362,7.356 0.490,7.294 0.699 C 7.259 0.816,7.253 1.088,7.253 2.508 C 7.253 4.389,7.251 4.365,7.443 4.557 C 7.700 4.813,8.300 4.813,8.557 4.557 C 8.749 4.365,8.747 4.389,8.747 2.508 C 8.747 0.688,8.744 0.656,8.596 0.480 C 8.472 0.333,8.339 0.284,8.040 0.276 C 7.893 0.272,7.743 0.278,7.706 0.290 M2.753 2.266 C 2.595 2.338,2.362 2.566,2.281 2.728 C 2.197 2.897,2.193 3.085,2.269 3.253 C 2.343 3.418,4.667 5.750,4.850 5.843 C 5.109 5.976,5.375 5.911,5.643 5.649 C 5.907 5.391,5.977 5.111,5.843 4.850 C 5.750 4.667,3.418 2.343,3.253 2.269 C 3.101 2.200,2.901 2.199,2.753 2.266 M12.853 2.282 C 12.730 2.339,12.520 2.536,11.518 3.541 C 10.597 4.464,10.316 4.762,10.271 4.860 C 10.195 5.025,10.196 5.216,10.272 5.378 C 10.342 5.528,10.572 5.764,10.727 5.845 C 10.884 5.927,11.117 5.926,11.280 5.843 C 11.447 5.757,13.757 3.447,13.843 3.280 C 13.926 3.118,13.927 2.884,13.846 2.729 C 13.764 2.572,13.552 2.364,13.392 2.283 C 13.213 2.192,13.048 2.192,12.853 2.282 M0.699 7.292 C 0.404 7.385,0.258 7.620,0.258 7.999 C 0.259 8.386,0.403 8.618,0.698 8.706 C 0.816 8.741,1.079 8.747,2.508 8.747 C 3.997 8.747,4.196 8.742,4.318 8.702 C 4.498 8.644,4.644 8.498,4.702 8.318 C 4.788 8.053,4.745 7.677,4.608 7.491 C 4.578 7.451,4.492 7.384,4.417 7.343 L 4.280 7.267 2.547 7.261 C 1.152 7.257,0.791 7.263,0.699 7.292 M11.745 7.278 C 11.622 7.308,11.452 7.411,11.392 7.492 C 11.255 7.677,11.212 8.053,11.298 8.318 C 11.356 8.498,11.502 8.644,11.682 8.702 C 11.804 8.742,12.003 8.747,13.492 8.747 C 14.921 8.747,15.184 8.741,15.302 8.706 C 15.597 8.618,15.741 8.386,15.742 7.999 C 15.742 7.614,15.595 7.383,15.290 7.291 C 15.187 7.260,14.864 7.254,13.496 7.256 C 12.578 7.258,11.790 7.268,11.745 7.278 M4.853 10.282 C 4.730 10.339,4.520 10.536,3.518 11.541 C 2.597 12.464,2.316 12.762,2.271 12.860 C 2.195 13.025,2.196 13.216,2.272 13.378 C 2.342 13.528,2.572 13.764,2.727 13.845 C 2.884 13.927,3.117 13.926,3.280 13.843 C 3.447 13.757,5.757 11.447,5.843 11.280 C 5.926 11.118,5.927 10.884,5.846 10.729 C 5.764 10.572,5.552 10.364,5.392 10.283 C 5.213 10.192,5.048 10.192,4.853 10.282 M10.753 10.266 C 10.595 10.338,10.362 10.566,10.281 10.728 C 10.197 10.897,10.193 11.085,10.269 11.253 C 10.343 11.418,12.667 13.750,12.850 13.843 C 13.109 13.976,13.375 13.911,13.643 13.649 C 13.907 13.391,13.977 13.111,13.843 12.850 C 13.750 12.667,11.418 10.343,11.253 10.269 C 11.101 10.200,10.901 10.199,10.753 10.266 M7.745 11.277 C 7.620 11.309,7.451 11.412,7.392 11.492 C 7.254 11.678,7.253 11.691,7.253 13.489 C 7.253 14.921,7.259 15.184,7.294 15.302 C 7.382 15.597,7.615 15.741,8.000 15.741 C 8.385 15.741,8.618 15.597,8.706 15.302 C 8.768 15.090,8.767 11.875,8.704 11.690 C 8.644 11.514,8.575 11.430,8.420 11.346 C 8.310 11.286,8.246 11.271,8.057 11.264 C 7.930 11.259,7.790 11.265,7.745 11.277 " stroke="none" fill-rule="evenodd"></path></g> <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="6s" additive="sum" repeatCount="indefinite" /> </svg>}
                
                </div>    
            </div> 

            <div className="info bg-kc-blue w-full flex  m-4 mr-24 ml-6 rounded-xl">
                <div className="text w-3/5 p-4">
                    <div className="title text-xl font-bold">{item.title}</div>
                    <div className="desc">{item.desc}</div>
                </div>
                <div className="img h-auto overflow-hidden w-2/5 bg-black rounded-br-lg rounded-tr-lg"><img src="" alt="img"></img></div>
            </div>


        </div>
    )
}
export default Timeline