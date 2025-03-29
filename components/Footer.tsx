const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Sobre Nós</h3>
            <p className="text-gray-600">
              Guia completo sobre desenvolvimento mobile e web com React, React Native e Jetpack Compose.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/react" className="text-gray-600 hover:text-primary-blue">
                  React
                </a>
              </li>
              <li>
                <a href="/react-native" className="text-gray-600 hover:text-primary-blue">
                  React Native
                </a>
              </li>
              <li>
                <a href="/jetpack-compose" className="text-gray-600 hover:text-primary-blue">
                  Jetpack Compose
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contato</h3>
            <p className="text-gray-600">
              Email: croyzcamel<br />
              <a href="https://github.com/CroyzCamel?tab=repositories"> GitHub: @croyzcamel</a>
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Croyz. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 