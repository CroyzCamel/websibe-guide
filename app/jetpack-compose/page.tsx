import React from 'react';

export default function JetpackComposePage() {
  return (
    <div className="container mx-auto p-4">
      {/* Cabeçalho */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-600">Jetpack Compose</h1>
        <p className="text-gray-600">Crie interfaces Android modernas com Kotlin</p>
      </div>

      {/* Cards de Recursos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* Card 1 */}
        <div className="bg-white p-4 rounded shadow">
          <div className="text-2xl mb-2">🎨</div>
          <h3 className="font-bold mb-2">Declarativo</h3>
          <p className="text-gray-600">
            Crie interfaces de forma declarativa e intuitiva
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-4 rounded shadow">
          <div className="text-2xl mb-2">🧩</div>
          <h3 className="font-bold mb-2">Composição</h3>
          <p className="text-gray-600">
            Construa interfaces complexas com componentes simples
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-4 rounded shadow">
          <div className="text-2xl mb-2">🎯</div>
          <h3 className="font-bold mb-2">Material Design</h3>
          <p className="text-gray-600">
            Implemente o Material Design 3 de forma nativa
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-4 rounded shadow">
          <div className="text-2xl mb-2">⚡</div>
          <h3 className="font-bold mb-2">Kotlin First</h3>
          <p className="text-gray-600">
            Aproveite todo o poder da linguagem Kotlin
          </p>
        </div>
      </div>

      {/* Exemplo de Código */}
      <div className="bg-gray-800 text-white p-4 rounded mb-8">
        <h2 className="text-xl font-bold mb-4">Exemplo Simples</h2>
        <pre>
          <code>{`@Composable
fun Greeting(name: String) {
    Text(
        text = "Olá, $name!",
        style = MaterialTheme.typography.headlineMedium
    )
}

@Composable
fun App() {
    MaterialTheme {
        Greeting("Jetpack Compose")
    }
}`}</code>
        </pre>
      </div>

      {/* Links */}
      <div className="text-center">
        <h2 className="text-xl font-bold mb-4">Comece Agora</h2>
        <div className="space-x-4">
          <a
            href="https://developer.android.com/jetpack/compose/setup"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Configuração
          </a>
          <a
            href="https://developer.android.com/jetpack/compose/tutorial"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-500 text-white px-4 py-2 rounded"
          >
            Tutorial
          </a>
        </div>
      </div>
    </div>
  );
} 