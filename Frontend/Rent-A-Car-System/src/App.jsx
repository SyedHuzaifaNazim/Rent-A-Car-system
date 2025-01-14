import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="max-w-5xl mx-auto mt-12 px-4 text-center">
      <div className="w-full max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mt-2 mb-6">
          Helping you find your new home;
          <br />
          by simplifying the search.
        </h1>
        <p className="px-4 leading-relaxed">
          Propiti provides you with a quick, simple way to reach multiple estate
          agents.
          <br />
          Allowing you to spend less time trawling through property portals,
          <br />
          giving you more time on the other things you enjoy.
        </p>
        <p className="mb-8 mt-4 px-4 leading-relaxed">
          Oh, and the best bit...{" "}
          <span className="text-blue-600 font-bold">It's free!</span>
        </p>
        <div>
          <a
            className="inline-block py-4 px-8 leading-none text-white bg-slate-800 hover:bg-blue-600 rounded shadow text-sm font-bold"
            href="/signup"
          >
            Sign-up for free
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
