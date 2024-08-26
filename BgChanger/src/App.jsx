import { useState } from "react"

function App() {
  const [color, setColor] = useState("wheat")

  return (
    <>
     <div className="w-full h-screen duration-200 "
     style = {{backgroundColor: color}}>
     <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl bg-white">
        <button
        onClick={() => setColor("red")}
        className="outline-none shadow-lg rounded-full px-4 py-1 text-white"
        style = {{backgroundColor: "red"}}>
        Red</button>
        <button
        onClick={() => setColor("blue")}
        className="outline-none shadow-lg rounded-full px-4 py-1 text-white"
        style = {{backgroundColor: "blue"}}>
        Blue</button>
        <button 
        onClick={() => setColor("maroon")}
        className="outline-none shadow-lg rounded-full px-4 py-1 text-white"
        style = {{backgroundColor: "maroon"}}>
        Maroon</button>
        <button 
        onClick={() => setColor("green")}
        className="outline-none shadow-lg rounded-full px-4 py-1 text-white"
        style = {{backgroundColor: "green"}}>
        Green</button>
        <button 
        onClick={() => setColor("white")}
        className="outline-none shadow-lg rounded-full px-4 py-1 text-black"
        style = {{backgroundColor: "white"}}>
        White</button>
        <button 
        onClick={() => setColor("black")}
        className="outline-none shadow-lg rounded-full px-4 py-1 text-white"
        style = {{backgroundColor: "black"}}>
        Black</button>
      </div>  
     </div>
     </div>
    </>
  )
}

export default App
