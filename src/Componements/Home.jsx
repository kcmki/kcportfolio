
import dots from'../assets/dot.png';
import illustration from'../assets/illustration.png';
function Home() {
    return (
        <div className="h-[88vh] w-full flex justify-center items-center mb-20">

            <div className="bgpics absulute h-full w-full flex justify-between items-center">
                <div className="bgpic1 h-full flex items-center"> <img className='' src={dots} alt="" /> </div>
                <div className="bgpic2 h-full flex items-center"> <img className='' src={dots} alt="" /> </div>
            </div>

            <div className="h-1/2 w-3/4 flex justify-center items-center absolute">
                <div className="Text h-1/2 w-1/2 flex justify-center items-start flex-col">
                    <div className="text-4xl 2xl:text-6xl text-white font-itim text-center w-1/2 ">Hey there</div>
                    <div className="flex" ><div className="text-4xl 2xl:text-6xl 2xl:p-3 text-white font-itim p-1">I'm</div> <div className="text-4xl 2xl:text-6xl text-kc-blue font-inter font-semibold p-1">Belaissaoui</div> </div>
                    <div className="text-4xl 2xl:text-6xl 2xl:p-3 text-kc-blue font-inter p-1  font-semibold">Mohamed elmekki</div>
                    <div className="text-white font-inter font-regular p-0 text-right w-4/6 2xl:text-2xl ">Web and AI developper. </div>
                </div>
                <div className='Image w-1/3 2xl:w-2/5'>
                    <img  src={illustration} alt=""  />
                </div>
            </div>

        </div>

    )
}

export default Home