import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog"

const repositories = [
  {
    name: "VecindApp Admin",
    description: "Aplicación web para administradores",
    url: "https://github.com/ItsEugenio/vecindApp-Admin-AppWeb"
  },
  {
    name: "VecindApp Resident Mobile", 
    description: "Aplicación móvil para residentes",
    url: "https://github.com/ItsEugenio/vecindApp-Resident-Mobile"
  },
  {
    name: "VecindApp Guard",
    description: "Aplicación para guardias de seguridad", 
    url: "https://github.com/ItsEugenio/vecindApp-Guard"
  },
  {
    name: "VecindApp Resident Web",
    description: "Aplicación web para residentes",
    url: "https://github.com/ItsEugenio/vecindApp-Resident-AppWeb-"
  }
]

export default function VecindAppDialog() {
  return (
    <Dialog >
      <DialogTrigger className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-xs px-4 py-3 sm:py-2 rounded-md transition-colors flex items-center justify-center">
        <svg className="w-4 h-4 mr-2 sm:mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
        Ver Repositorios
      </DialogTrigger>
      
      <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto bg-black border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl text-white">VecindApp - Repositorios</DialogTitle>
          <DialogDescription className="text-sm sm:text-base text-gray-300">
            VecindApp está compuesto por 4 aplicaciones diferentes. Selecciona el repositorio que deseas ver:
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6">
          {repositories.map((repo, index) => (
            <a
              key={index}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:p-6 border border-gray-600 rounded-lg hover:bg-blue-900 hover:border-blue-500 transition-colors"
            >
              <h4 className="font-semibold text-white mb-2 text-base sm:text-lg">
                {repo.name}
              </h4>
              <p className="text-sm sm:text-base text-gray-300">
                {repo.description}
              </p>
            </a>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
} 