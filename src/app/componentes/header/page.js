import { Menu } from "lucide-react";

export default function Header(){
    return(
        <div className="justify-bewteen bg-zinc-700 border-b border-zinc-800 grid grid-cols-2 overflow-hidden shadow-lg sm:grid-cols-2">
            <div className="p-5">
                <img src="/logo.jpg" width={64}/>
                <h1 className="mt-2 text-white font-bold">Cities Of the Word</h1>
            </div>
            <div className="p-10 place-self-end" >
            <button>
            <Menu size={48} color="#ffffff" />
            </button>
            </div>
            
        </div>
    )
}