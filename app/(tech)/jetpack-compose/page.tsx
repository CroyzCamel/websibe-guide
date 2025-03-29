import AnimatedSection from '../../../components/AnimatedSection';

export default function JetpackComposePage() {
  const features = [
    {
      title: 'Declarativo',
      description: 'Crie interfaces Android de forma declarativa e intuitiva.',
      icon: '🎨',
    },
    {
      title: 'Composição',
      description: 'Construa interfaces complexas a partir de componentes simples.',
      icon: '🧩',
    },
    {
      title: 'Material Design 3',
      description: 'Implemente o Material Design 3 de forma nativa.',
      icon: '🎯',
    },
    {
      title: 'Kotlin First',
      description: 'Aproveite todo o poder da linguagem Kotlin.',
      icon: '⚡',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <AnimatedSection className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">
          Jetpack Compose
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Toolkit moderno para criar interfaces Android nativas com Kotlin.
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
            <code>{`@Composable
fun Greeting(name: String) {
    Text(
        text = "Olá, $name!",
        style = MaterialTheme.typography.headlineMedium,
        modifier = Modifier.padding(16.dp)
    )
}

@Composable
fun App() {
    MaterialTheme {
        Surface(
            modifier = Modifier.fillMaxSize(),
            color = MaterialTheme.colorScheme.background
        ) {
            Greeting("Jetpack Compose")
        }
    }
}`}</code>
          </pre>
        </div>
      </AnimatedSection>

      {/* Getting Started */}
      <AnimatedSection delay={0.6}>
        <div className="bg-gradient-to-r from-primary-blue to-primary-purple text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Comece Agora</h2>
          <p className="mb-6">
            Configure o Android Studio e comece a desenvolver com Jetpack Compose
          </p>
          <div className="space-x-4">
            <a
              href="https://developer.android.com/jetpack/compose/setup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-blue px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
            >
              Configuração
            </a>
            <a
              href="https://developer.android.com/jetpack/compose/tutorial"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-purple px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
            >
              Tutorial
            </a>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
} 