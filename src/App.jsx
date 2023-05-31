import { Portfolio, Main, Header } from "./pages"

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="px-40 py-10">
        <div className="mx-30 bg-white rounded-sm shadow-sm">
          <Header />
          <Main />
          <Portfolio />
        </div>
      </div>
    </div>
  )
}

export default App
