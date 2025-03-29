import AnimatedSection from '../../../components/AnimatedSection';

export default function ReactNativePage() {
  const features = [
    {
      title: 'Desenvolvimento Multiplataforma',
      description: 'Crie aplicativos para iOS e Android com um único código base.',
      icon: '📱',
    },
    {
      title: 'Componentes Nativos',
      description: 'Acesso a componentes nativos de cada plataforma.',
      icon: '⚛️',
    },
    {
      title: 'Hot Reloading',
      description: 'Atualize sua aplicação em tempo real durante o desenvolvimento.',
      icon: '⚡',
    },
    {
      title: 'Performance Nativa',
      description: 'Aproveite a performance nativa de cada plataforma.',
      icon: '🚀',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <AnimatedSection className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">
          React Native
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Desenvolva aplicativos móveis nativos usando React e JavaScript.
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
            <code>{`import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Olá, React Native!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});`}</code>
          </pre>
        </div>
      </AnimatedSection>

      {/* Getting Started */}
      <AnimatedSection delay={0.6}>
        <div className="bg-gradient-to-r from-primary-blue to-primary-purple text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Comece Agora</h2>
          <p className="mb-6">
            Configure seu ambiente de desenvolvimento e crie seu primeiro app React Native
          </p>
          <div className="space-x-4">
            <a
              href="https://reactnative.dev/docs/environment-setup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-blue px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
            >
              Configuração do Ambiente
            </a>
            <a
              href="https://reactnative.dev/docs/getting-started"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-purple px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
            >
              Guia de Início
            </a>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
} 