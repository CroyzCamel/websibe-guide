import React from 'react';

export default function ReactPage() {
  return (
    <div className="container mx-auto p-4">
      {/* Cabeçalho */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-600">React</h1>
        <p className="text-gray-600">Aprenda sobre React e suas funcionalidades</p>
      </div>

      {/* Cards de Recursos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* Card 1 */}
        <div className="bg-white p-4 rounded shadow">
          <div className="text-2xl mb-2">⚛️</div>
          <h3 className="font-bold mb-2">Componentes</h3>
          <p className="text-gray-600">
            Crie componentes reutilizáveis para sua aplicação
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-4 rounded shadow">
          <div className="text-2xl mb-2">⚡</div>
          <h3 className="font-bold mb-2">Virtual DOM</h3>
          <p className="text-gray-600">
            Melhore a performance com Virtual DOM
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-4 rounded shadow">
          <div className="text-2xl mb-2">🎣</div>
          <h3 className="font-bold mb-2">Hooks</h3>
          <p className="text-gray-600">
            Use Hooks para gerenciar estado e efeitos
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-4 rounded shadow">
          <div className="text-2xl mb-2">📚</div>
          <h3 className="font-bold mb-2">Bibliotecas</h3>
          <p className="text-gray-600">
            Acesse várias bibliotecas úteis
          </p>
        </div>
      </div>

      {/* Exemplo de Código */}
      <div className="bg-gray-800 text-white p-4 rounded mb-8">
        <h2 className="text-xl font-bold mb-4">Exemplo Simples</h2>
        <pre>
          <code>{`function App() {
  return (
    <div>
      <h1>Olá, React!</h1>
    </div>
  );
}`}</code>
        </pre>
      </div>

      {/* Links */}
      <div className="text-center">
        <h2 className="text-xl font-bold mb-4">Comece Agora</h2>
        <div className="space-x-4">
          <a
            href="https://create-react-app.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Create React App
          </a>
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-500 text-white px-4 py-2 rounded"
          >
            Next.js
          </a>
        </div>
      </div>
    </div>
  );
} 