import { FaInstagram, FaTelegram, FaVk, FaWhatsapp } from "react-icons/fa"
import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center text-black px-6 py-4">
      <h1 className="text-4xl font-bold font-sans mb-4 md:mb-0">Савин А.</h1>
      <div className="flex order-2">
        <button className="rounded-full bg-slate-100 mt-5 px-4 py-2 hover:bg-green-300">
          <Link to="https://t.me/funnymagnett">Свяжитесь со мной</Link>
        </button>
      </div>

      <nav className="flex mt-4 md:mt-0">
        <ul className="flex space-x-4">
          <li className="hover:opacity-50 cursor-pointer">
            <Link to="/instagram">
              <FaInstagram />
            </Link>
          </li>
          <li className="hover:opacity-50 cursor-pointer">
            <Link to="/telegram">
              <FaTelegram />
            </Link>
          </li>
          <li className="hover:opacity-50 cursor-pointer">
            <Link to="/vk">
              <FaVk />
            </Link>
          </li>
          <li className="hover:opacity-50 cursor-pointer">
            <Link to="/whatsapp">
              <FaWhatsapp />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
