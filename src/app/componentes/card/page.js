
export default function Card() {
    return (
      <div className="grid grid-cols-1 p-10 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3  sm:grid-cols-1 md:grid-cols-2">
        
        <div className="border bg-zinc-800 rounded overflow-hidden shadow-lg mb-10 mr-5 mt-5">
          <img src="/japan.jpg" className="p-10"/>
          <hr className="mb-5"/>
          <h1 className="text-xl text-white ml-10 font-bold">TOKYO</h1>
          <p className="text-white ml-10 mb-8">JAPAN</p>
          
        </div>
        <div className="border bg-zinc-800 rounded overflow-hidden shadow-lg mb-10 mr-5 mt-5">
          <img src="/london.jpg" className="p-10"/>
          <hr className="mb-5"/>
          <h1 className="text-xl text-white ml-10 font-bold">LONDON</h1>
          <p className="text-white ml-10 mb-8">INGLATERRA</p>
          
        </div>
        <div className="border bg-zinc-800  rounded overflow-hidden shadow-lg mb-10 mr-5 mt-5">
          <img src="/paris.jpg" className="p-10"/>
          <hr className="mb-5"/>
          <h1 className="text-xl text-white ml-10 font-bold">PARIS</h1>
          <p className="text-white ml-10 mb-8">FRANCE</p>
        </div>
        




        <div className="border bg-zinc-800 rounded overflow-hidden shadow-lg mb-10 mr-5 mt-5">
          <img src="/buenosaires.jpg" className="p-10"/>
          <hr className="mb-5"/>
          <h1 className="text-xl text-white ml-10 font-bold">BUENOS AIRES</h1>
          <p className="text-white ml-10 mb-8">ARGENTINA</p>
          
        </div>
        <div className="border bg-zinc-800 rounded overflow-hidden shadow-lg mb-10 mr-5 mt-5">
          <img src="/eua.jpg" className="p-10"/>
          <hr className="mb-5"/>
          <h1 className="text-xl text-white ml-10 font-bold">NOVA YORK</h1>
          <p className="text-white ml-10 mb-8">EUA</p>
          
        </div>
        <a className="border bg-zinc-800 rounded overflow-hidden shadow-lg mb-10 mr-5 mt-5">
          <img src="/cabo.jpg" className="p-10"/>
          <hr className="mb-5"/>
          <h1 className="text-xl text-white ml-10 font-bold">CAPE TOWN</h1>
          <p className="text-white ml-10 mb-8">SOUTH ÁFRICA</p>
         
        </a>




        <a className="border bg-zinc-800  rounded overflow-hidden shadow-lg mr-5 mt-5">
          <img src="/seuol.jpg" className="p-10"/>
          <hr className="mb-5"/>
          <h1 className="text-xl text-white ml-10 font-bold">SEOUL</h1>
          <p className="text-white ml-10 mb-8">SOUTH KOREA</p>
          
        </a>
        <a className="border bg-zinc-800 rounded overflow-hidden shadow-lg mr-5 mt-5">
          <img src="/peru.jpg" className="p-10"/>
          <hr className="mb-5"/>
          <h1 className="text-xl text-white ml-10 font-bold">PUERTO RICO</h1>
          <p className="text-white ml-10 mb-8 ">PERU</p>
          
        </a>
        <a href="" className="border bg-zinc-800  rounded overflow-hidden shadow-lg mr-5 mt-5 hover:bg-zinc-700 ease-linear duration-300" >
          <img src="/newzelandia.jpg" className="p-10"/>
          <hr className="mb-5"/>
          <h1 className="text-xl text-white ml-10 font-bold">WELLINGTON</h1>
          <p className="text-white ml-10 mb-8">NEW ZEALAND</p>
         
        </a>
        

</div>
      
    )
  }
  