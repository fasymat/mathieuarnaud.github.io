export default function Footer() {
    return (
      <footer className="bg-custom-green-3 py-8">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a 
              href="https://www.linkedin.com/in/mathieu-arnaud-65a0ab33a/" 
              target="_blank" 
              className="text-white hover:text-custom-brown transition-colors duration-300 hover:scale-110"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/fasymat" 
              target="_blank" 
              className="text-white hover:text-custom-brown transition-colors duration-300 hover:scale-110"
            >
              GitHub
            </a>
          </div>
          <p className="text-white">
            © {new Date().getFullYear()} Arnaud Mathieu. Tous droits réservés.
          </p>
        </div>
      </footer>
    )
  }