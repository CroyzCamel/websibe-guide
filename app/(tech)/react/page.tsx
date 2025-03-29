import AnimatedSection from '../../../components/AnimatedSection';

export default function ReactPage() {
  const features = [
    {
      title: 'Componentes Reutilizáveis',
      description: 'Crie componentes modulares e reutilizáveis para construir interfaces complexas.',
      icon: '🧩',
    },
    {
      title: 'Virtual DOM',
      description: 'O Virtual DOM do React otimiza o desempenho das aplicações web.',
      icon: '⚡',
    },
    {
      title: 'Hooks',
      description: 'Gerenciamento de estado e efeitos colaterais com Hooks modernos.',
      icon: '🎣',
    },
    {
      title: 'Ecosistema Rico',
      description: 'Acesso a uma vasta biblioteca de componentes e ferramentas.',
      icon: '📚',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <AnimatedSection className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">
          React
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Uma biblioteca JavaScript para criar interfaces de usuário interativas e reativas.
        </p>
      </AnimatedSection>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {features.map((feature, index) => (
          <AnimatedSection key={feature.title} delay={index * 0.2}>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Code Example */}
      <AnimatedSection delay={0.4}>
        <div className="bg-gray-900 rounded-xl p-6 text-white mb-16">
          <h2 className="text-2xl font-bold mb-4">Exemplo de Código</h2>
          <pre className="overflow-x-auto">
            <code>{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  );
}`}</code>
          </pre>
        </div>
      </AnimatedSection>

      {/* Getting Started */}
      <AnimatedSection delay={0.6}>
        <div className="bg-gradient-to-r from-primary-blue to-primary-purple text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Comece Agora</h2>
          <p className="mb-6">
            Crie seu primeiro projeto React em minutos com Create React App ou Next.js
          </p>
          <div className="space-x-4">
            <a
              href="https://create-react-app.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-blue px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
            >
              Create React App
            </a>
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-purple px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
            >
              Next.js
            </a>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
} 