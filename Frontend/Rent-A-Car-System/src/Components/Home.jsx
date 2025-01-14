import { useState } from 'react'
import '../App.css'
import LoginPage from '../Login/LoginPage'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function Home() {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    <Header />
    <div className="max-w-5xl mx-auto mt-12 px-4 text-center">
      {!showLogin && (
        <div className="w-full max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mt-2 mb-6">
            Helping you find your new home;
            <br />
            by simplifying the search.
          </h1>
          <p className="px-4 leading-relaxed">
            Propiti provides you with a quick, simple way to reach multiple estate agents.
            <br />
            Allowing you to spend less time trawling through property portals,
            <br />
            giving you more time on the other things you enjoy.
          </p>
          <p className="mb-8 mt-4 px-4 leading-relaxed">
            Oh, and the best bit...
            <span className="text-blue-600 font-bold">It's free!</span>
          </p>
          <div>
            <button
              onClick={() => setShowLogin(true)}
              className="inline-block py-4 px-8 leading-none text-white bg-slate-800 hover:bg-blue-600 rounded shadow text-sm font-bold"
            >
              Sign-up for free
            </button>
          </div>
        </div>
      )}

      {showLogin && (
        <div className="mt-12">
          <LoginPage />
          <button
            onClick={() => setShowLogin(false)}
            className="mt-4 text-blue-600 hover:underline"
          >
            Back to Home
          </button>
        </div>
      )}
    </div>
    <Footer />
    </>
  )
}

export default Home
