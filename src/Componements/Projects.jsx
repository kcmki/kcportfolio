
import dots from'../assets/dot.png';

import { useState } from 'react';

function Projects({}){
    let projects = [{number:0,title: 'Default1', desc: 'seewey description' },
                    {number:1,title: 'Default2', desc: 'seewey description' },
                    {number:2,title: 'Default3', desc: 'seewey description' },]
    const [Active, setActive] = useState({number:-1,title: 'Choose a project', desc: '' })
    let L = [3,7,3]

    let a = Array.from(Array(L[0]).keys())
    let b = Array.from(Array(L[1]).keys())
    let c = Array.from(Array(L[2]).keys())
    let Dist1 = (510-((L[0]-1)*80))/2
    let Dist2 = (510-((L[1]-1)*80))/2
    let Dist3 = (510-((L[2]-1)*80))/2

    function animate(I){
        let dots2 = document.querySelectorAll('.layer2dot')
        dots2.forEach((dot,i) => {
            //go back  to base position
            dot.setAttribute('r',15)
            dot.style.transition = '0s'
            dot.style.transform = 'translate(0px,0px)'
            let X = I*80;
            let Y = 0;
            dot.style.transform = 'translate('+X+'px,'+Y+'px)'
            let duration = 400;
            //L1 animation
            window.setTimeout(function () {
                dot.setAttribute('r',3)
                dot.style.transition = (duration+100)+'ms'
                Y += 13;
                dot.style.transform = 'translate('+X+'px,'+Y+'px)'
            }, 0);

            //from top L1 to L2
            window.setTimeout(function () {
                X += (Dist2 + 80*i) - (Dist1 + (80 * I))
                Y += 60
                dot.style.transform = 'translate('+X+'px,'+Y+'px)'
            }, (1*duration));
            window.setTimeout(function () {
                Y += 12;
                dot.style.transform = 'translate('+X+'px,'+Y+'px)'
                dot.setAttribute('r',15)
            }, (2*duration));
            window.setTimeout(function () {
                dot.setAttribute('r',3)
                Y += 13;
                dot.style.transform = 'translate('+X+'px,'+Y+'px)'
            }, (3*duration));

            //from top L2 to L3
            window.setTimeout(function () {
                X += (Dist3 + 80*I) - (Dist2 + (80 * i))
                Y += 60
                dot.style.transform = 'translate('+X+'px,'+Y+'px)'
            }, (4*duration));
            window.setTimeout(function () {
                Y += 12;
                dot.style.transform = 'translate('+X+'px,'+Y+'px)'
                dot.setAttribute('r',15)
                
            }, (5*duration));
            window.setTimeout(function () {
                setActive(projects[I])
            }   , (6*duration));
        })
    }

    return(
        <div className=" w-full relative" id='Projects'>


            <div className='absolute w-full flex items-center flex-col'>
                <svg className="h-[228px] w-[510px] m-10" viewBox='0 0 510 228'>

                    {   //  L1 to L2
                        a.map((i) => (
                            <>
                            {b.map((j) => (                         
                                <line key={'ab'+i*10+j} x1={Dist1 + (80 * i)} y1="27" x2={Dist2+(j*80)} y2="88" stroke="#02C8FF" strokeWidth="3px"/>
                            ))}
                            </>
                        ))
                    } 
                    {/* First layer */
                        a.map((i) => {
                            let I = i
                            return(
                                <circle className='cursor-pointer ' key={'a'+i} cx={Dist1 + (80 * i)} cy="15" r="15" fill='#02C8FF' onClick={()=>{animate(I)}}/>
                            )
                        })
                    }

                    {   //  L1 to L2
                        b.map((i) => (
                            <>
                            {c.map((j) => (                         
                                <line key={'bc'+i*10+j} x1={Dist2 + (80 * i)} y1="112" x2={Dist3+(j*80)} y2="173" stroke="#02C8FF" strokeWidth="3px"/>
                            ))}
                            </>
                        ))
                    }
                    {/* Second layer */
                        b.map((i) => {
                            return(
                                <circle key={'b'+i} cx={Dist2 + (80 * i)} cy="100" r="15" fill='#02C8FF'/>
                            )
                        })
                    }


                    {/* third layer */
                        c.map((i) => {
                            
                            return(
                                <circle key={'c'+i} cx={Dist3 + (80 * i)} cy="185" r="15" fill='#02C8FF'/>
                            )
                        })
                    }
                    {/*dots*/
                        b.map((i) => {
                            return(
                                <circle className='layer2dot relative' key={'bdot'+i} cx={Dist1} cy="15" r="0" fill='white'/>
                            )
                        })
                    }
                </svg>

                <div className='w-4/5 h-auto bg-kc-blue rounded-3xl flex flex-row'>
                    <div className="text w-2/6 p-5">
                        <div className="title font-bold text-3xl text-center text-title-gray font-inter py-10">{Active['title']}</div>
                        <div className="desc text-lg text-text-gray">{Active['desc']}</div>
                    </div>
                    <div className="show h-[500px] w-4/6 m-5 rounded-3xl bg-white"></div>
                </div>

            </div>

            <div className="bgpics absulute w-full flex justify-start items-center pb-20">
                <div className="bgpic1 h-full flex items-center"> <img className='' src={dots} alt=""  /> </div>
            </div>
            <div className="bgpics absulute w-full flex justify-end items-center pt-20">
                <div className="bgpic1 h-full flex items-center "> <img className='' src={dots} alt="" /> </div>
            </div>
        </div>
    )
}

export default Projects