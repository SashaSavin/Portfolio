import { Portfolio, Main, Header } from "./pages"

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-6 sm:py-8 md:py-10">
        <div className="mx-auto max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl bg-white rounded-sm shadow-sm">
          <Header />
          <Main />
          <Portfolio />
        </div>
      </div>
    </div>
  )
}

export default App
