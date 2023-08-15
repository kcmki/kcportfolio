
import {Contact} from './Header.jsx'

function Footer(){
    return(
    <div className="flex justify-center items-center border-t border-[#333C4D] w-full h-[12vh] font-inter">
        <div className="flex justify-center items-center border-x border-[#333C4D] w-4/5 h-full">
            <Contact />
        </div>
    </div>)
}

export default Footer