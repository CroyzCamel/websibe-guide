import React from 'react';

export default function ReactNativePage() {
  return (
    <div className="container mx-auto p-4">
      {/* Cabeçalho */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-600">React Native</h1>
        <p className="text-gray-600">Desenvolva aplicativos móveis com React</p>
      </div>

      {/* Cards de Recursos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* Card 1 */}
        <div className="bg-white p-4 rounded shadow">
          <div className="text-2xl mb-2">📱</div>
          <h3 className="font-bold mb-2">Multiplataforma</h3>
          <p className="text-gray-600">
            Crie apps para iOS e Android com um único código
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-4 rounded shadow">
          <div className="text-2xl mb-2">⚛️</div>
          <h3 className="font-bold mb-2">Componentes Nativos</h3>
          <p className="text-gray-600">
            Use componentes nativos de cada plataforma
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-4 rounded shadow">
          <div className="text-2xl mb-2">⚡</div>
          <h3 className="font-bold mb-2">Hot Reloading</h3>
          <p className="text-gray-600">
            Atualize seu app em tempo real durante o desenvolvimento
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-4 rounded shadow">
          <div className="text-2xl mb-2">🚀</div>
          <h3 className="font-bold mb-2">Performance</h3>
          <p className="text-gray-600">
            Aproveite a performance nativa dos dispositivos
          </p>
        </div>
      </div>

      {/* Exemplo de Código */}
      <div className="bg-gray-800 text-white p-4 rounded mb-8">
        <h2 className="text-xl font-bold mb-4">Exemplo Simples</h2>
        <pre>
          <code>{`import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>Olá, React Native!</Text>
    </View>
  );
}`}</code>
        </pre>
      </div>

      {/* Links */}
      <div className="text-center">
        <h2 className="text-xl font-bold mb-4">Comece Agora</h2>
        <div className="space-x-4">
          <a
            href="https://reactnative.dev/docs/environment-setup"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Configuração
          </a>
          <a
            href="https://reactnative.dev/docs/getting-started"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-500 text-white px-4 py-2 rounded"
          >
            Guia de Início
          </a>
        </div>
      </div>
    </div>
  );
} 