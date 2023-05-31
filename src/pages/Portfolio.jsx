import { useState } from "react"
import { Link } from "react-router-dom"
import { useAutoAnimate } from "@formkit/auto-animate/react"

const projects = [
  {
    id: 1,
    title: "Temir Energy Marketplace",
    category: "проекты",
    description: "Marketplace with product configurator",
    link: "https://temir.bahamassoft.com",
  },
  {
    id: 2,
    title: "Green Api App",
    category: "проекты",
    description: "Интерейс для работы с Green API",
    link: "https://green-app-test.netlify.app/",
  },
  {
    id: 3,
    title: "Макет Green Api App",
    category: "дизайн",
    description: "Макет и UI kit для green API app",
    link: "https://www.figma.com/file/q5AAbApJBt5SAEiDkMtMt1/WhatsApp--Desktop-Redesign-(Community)?type=design&node-id=129%3A2333&t=WPR578ZAeQUFgznT-1",
  },
  {
    id: 4,
    title: "Любава",
    category: "проекты",
    description: "Медицинский сервис",
    link: "http://lubava-deti-new.tilda.ws/",
  },
  {
    id: 5,
    title: "Хороший картон",
    category: "проекты",
    description: "Сайт визитка",
    link: "https://goodcardboard.netlify.app/",
  },
  {
    id: 6,
    title: "Планировщик задач",
    category: "проекты",
    description: "Простейший сервис для ваших планов",
    link: "https://sashasavin.github.io/sophiesPlanning/",
  },
  {
    id: 7,
    title: "Туры в Аляску",
    category: "дизайн",
    description: "Дизайн сервиса Туры в Аляску",
    link: "https://www.figma.com/proto/O3ENA29wiyjZoq4eG4xoZV/Untitled?node-id=3-2&scaling=scale-down",
  },
  {
    id: 8,
    title: "Натяжные потолки Benefice",
    category: "дизайн",
    description: "Дизайн для сервиса Benefice",
    link: "https://www.figma.com/proto/HYzdsAjf5tRbyllZLdiZtm/draft?type=design&node-id=383-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A0&show-proto-sidebar=1",
  },
]

const generateRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16)
  return `#${randomColor}`
}

export const Portfolio = () => {
  const [animationParent] = useAutoAnimate()
  const [filteredProjects, setFilteredProjects] = useState(projects)

  const handleFilter = (category) => {
    if (category === "показать все") {
      setFilteredProjects(projects)
    } else {
      const filtered = projects.filter(
        (project) => project.category === category
      )
      setFilteredProjects(filtered)
    }
  }

  return (
    <section className="bg-white text-black px-6 py-8">
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className="rounded-full border-gray-500 border px-4 py-2 hover:bg-slate-100"
          onClick={() => handleFilter("показать все")}
        >
          Показать все
        </button>
        <button
          className="rounded-full border-gray-500 border px-4 py-2 hover:bg-slate-100"
          onClick={() => handleFilter("проекты")}
        >
          Проекты
        </button>
        <button
          className="rounded-full border-gray-500 border px-4 py-2 hover:bg-slate-100"
          onClick={() => handleFilter("дизайн")}
        >
          Дизайн
        </button>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        ref={animationParent}
      >
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-200 rounded-lg p-4 hover:shadow-md hover:opacity-90"
          >
            <div
              className="mb-4 rounded-xl"
              style={{
                backgroundColor: generateRandomColor(),
                width: "100%",
                height: "150px",
              }}
            ></div>
            <h3 className="font-bold mb-2 text-2xl">{project.title}</h3>
            <p className="text-sm">{project.description}</p>
            <Link to={project.link} className="text-blue-500 hover:underline">
              Подробнее
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
