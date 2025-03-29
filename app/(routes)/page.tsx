import Link from 'next/link';
import AnimatedSection from '../../components/AnimatedSection';

export default function Home() {
  const features = [
    {
      title: 'React',
      description: 'Aprenda a criar interfaces web modernas e interativas com React.',
      href: '/react',
      icon: '⚛️',
    },
    {
      title: 'React Native',
      description: 'Desenvolva aplicativos móveis multiplataforma com React Native.',
      href: '/react-native',
      icon: '📱',
    },
    {
      title: 'Jetpack Compose',
      description: 'Crie interfaces Android nativas modernas com Jetpack Compose.',
      href: '/jetpack-compose',
      icon: '🤖',
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-blue to-primary-purple text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <AnimatedSection className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Desenvolvimento Moderno
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Explore as melhores tecnologias para desenvolvimento web e mobile
            </p>
            <Link
              href="/react"
              className="bg-white text-primary-blue px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
            >
              Começar Agora
            </Link>
          </AnimatedSection>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 0.2}>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Link
                  href={feature.href}
                  className="text-primary-blue hover:text-primary-purple font-medium"
                >
                  Saiba mais →
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Stack Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection delay={0.6}>
            <h2 className="text-3xl font-bold mb-4">Pronto para começar?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Escolha sua jornada de aprendizado e comece a desenvolver aplicações incríveis
            </p>
            <div className="space-x-4">
              <Link
                href="/react"
                className="bg-primary-blue text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-blue/90 transition-colors"
              >
                React
              </Link>
              <Link
                href="/react-native"
                className="bg-primary-purple text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-purple/90 transition-colors"
              >
                React Native
              </Link>
              <Link
                href="/jetpack-compose"
                className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
              >
                Jetpack Compose
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
} 