const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold mb-6">Lorem Ipsum</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 md:w-2/3">
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold mb-2">Education</h3>
              <a href="https://unai.edu/" className="text-gray-400 hover:text-white transition">UNAI</a>
              <a href="https://fti.unai.edu/" className="text-gray-400 hover:text-white transition">FTI</a>
              <a href="https://github.com/" className="text-gray-400 hover:text-white transition">Github</a>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-semibold mb-2">Technologies</h3>
              <a href="https://tailwindcss.com/" className="text-gray-400 hover:text-white transition">Tailwind</a>
              <a href="https://react.dev/" className="text-gray-400 hover:text-white transition">React JS</a>
              <a href="https://axios-http.com/docs/intro" className="text-gray-400 hover:text-white transition">Axios</a>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-semibold mb-2">Libraries</h3>
              <a href="https://tanstack.com/query/latest" className="text-gray-400 hover:text-white transition">Tanstack Query</a>
              <a href="https://reactnavigation.org/" className="text-gray-400 hover:text-white transition">React Navigation</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
              Sign Up Today!
            </button>
          </div>
          <p className="text-gray-400 text-sm">© Lorem Ipsum 2025</p>
        </div>
      </div>
    </div>
  )
}

export default Footer