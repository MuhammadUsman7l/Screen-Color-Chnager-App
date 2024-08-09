import { useState } from "react"


function App() {
  let [color, setColor] = useState("#000")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-4 rounded-3xl">
          <button className="outline-none rounded-sm px-3 py-1 shadow-sm text-white" style={{backgroundColor: "red"}} onClick={()=>setColor("red")}>Red</button>
          <button className="outline-none rounded-sm px-3 py-1 shadow-sm text-white" style={{backgroundColor: "green"}} onClick={()=>setColor("green")}>Green</button>
          <button className="outline-none rounded-sm px-3 py-1 shadow-sm text-white" style={{backgroundColor: "blue"}} onClick={()=>setColor("blue")}>Blue</button>
          <button className="outline-none rounded-sm px-3 py-1 shadow-sm text-white" style={{backgroundColor: "yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
          <button className="outline-none rounded-sm px-3 py-1 shadow-sm text-white" style={{backgroundColor: "orange"}} onClick={()=>setColor("orange")}>Orange</button>
          <button className="outline-none rounded-sm px-3 py-1 shadow-sm text-white" style={{backgroundColor: "purple"}} onClick={()=>setColor("purple")}>purple</button>
          <button className="outline-none rounded-sm px-3 py-1 shadow-sm text-white" style={{backgroundColor: "grey"}} onClick={()=>setColor("grey")}>Grey</button>
          <button className="outline-none rounded-sm px-3 py-1 shadow-sm text-white" style={{backgroundColor: "cyan"}} onClick={()=>setColor("cyan")}>Cyan</button>
          <button className="outline-none rounded-sm px-3 py-1 shadow-sm text-white" style={{backgroundColor: "brown"}} onClick={()=>setColor("brown")}>Brown</button>
          <button className="outline-none rounded-sm px-3 py-1 shadow-sm text-white" style={{backgroundColor: "olive"}} onClick={()=>setColor("olive")}>Olive</button>
        </div>
      </div>
    </div>
  )
}

export default App
