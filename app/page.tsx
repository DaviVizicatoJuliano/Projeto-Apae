import {
  BookOpen,
  Users,
  Palette,
  Heart,
  Star,
  Play,
  FileText,
  Activity,
  Gamepad2,
  Music,
  Puzzle,
  Smile,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link';

export default function APAEHomePage() {
  const documentationItems = [
    {
      title: "Como Criar Canvas Interativo",
      description: "Tutorial passo a passo para criar atividades visuais e interativas",
      icon: <Palette className="h-8 w-8" />,
      color: "bg-gradient-to-br from-purple-400 to-pink-400",
      textColor: "text-purple-600",
    },
    {
      title: "Ferramentas de Desenho",
      description: "Aprenda a usar as ferramentas básicas de desenho e pintura",
      icon: <FileText className="h-8 w-8" />,
      color: "bg-gradient-to-br from-blue-400 to-cyan-400",
      textColor: "text-blue-600",
    },
    {
      title: "Salvando e Compartilhando",
      description: "Como salvar seus trabalhos e compartilhar com outros educadores",
      icon: <Heart className="h-8 w-8" />,
      color: "bg-gradient-to-br from-green-400 to-emerald-400",
      textColor: "text-green-600",
    },
    {
      title: "Templates Prontos",
      description: "Biblioteca de templates para acelerar a criação de atividades",
      icon: <Star className="h-8 w-8" />,
      color: "bg-gradient-to-br from-yellow-400 to-orange-400",
      textColor: "text-yellow-600",
    },
  ]

  const moduleItems = [
  {
    title: "Quiz sobre Animais",
    description: "Atividades para desenvolver habilidades de detecção de animais",
    icon: <Activity className="h-8 w-8" />,
    color: "bg-gradient-to-br from-red-400 to-pink-400",
    textColor: "text-red-600",
    activities: "Quiz",
    path: "modulo_1/quiz_animais.html", // <-- Adicionado
  },
  {
    title: "Quiz sobre Frutas",
    description: "Quiz divertido para incentivar a detecção de Itens",
    icon: <Gamepad2 className="h-8 w-8" />,
    color: "bg-gradient-to-br from-indigo-400 to-purple-400",
    textColor: "text-indigo-600",
    activities: "Quiz",
    path: "modulo_1/quiz_frutas.html", // <-- Adicionado
  },
  {
    title: "Música e Ritmo",
    description: "Atividades musicais para estimular a expressão e coordenação",
    icon: <Music className="h-8 w-8" />,
    color: "bg-gradient-to-br from-teal-400 to-green-400",
    textColor: "text-teal-600",
    activities: "15 atividades",
    path: "/atividades/musica-ritmo", // <-- Adicionado
  },
  {
    title: "Quebra-cabeças",
    description: "Puzzles adaptados para diferentes níveis de habilidade",
    icon: <Puzzle className="h-8 w-8" />,
    color: "bg-gradient-to-br from-orange-400 to-red-400",
    textColor: "text-orange-600",
    activities: "20 puzzles",
    path: "/atividades/quebra-cabecas", // <-- Adicionado
  },
  {
    title: "Expressão Facial",
    description: "Atividades para reconhecimento e expressão de emoções",
    icon: <Smile className="h-8 w-8" />,
    color: "bg-gradient-to-br from-pink-400 to-rose-400",
    textColor: "text-pink-600",
    activities: "10 exercícios",
    path: "/atividades/expressao-facial", // <-- Adicionado
  },
  {
    title: "Comunicação",
    description: "Ferramentas para desenvolver habilidades de comunicação",
    icon: <Users className="h-8 w-8" />,
    color: "bg-gradient-to-br from-cyan-400 to-blue-400",
    textColor: "text-cyan-600",
    activities: "18 atividades",
    path: "/atividades/comunicacao", // <-- Adicionado
  },
]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  APAE Digital
                </h1>
                <p className="text-sm text-gray-600">Educação Inclusiva e Acolhedora</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#documentacao" className="text-purple-600 hover:text-purple-800 font-medium transition-colors">
                Documentação
              </a>
              <a href="#modulos" className="text-purple-600 hover:text-purple-800 font-medium transition-colors">
                Módulos
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              Bem-vindos ao Mundo da Aprendizagem
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Uma plataforma digital criada com amor para apoiar educadores, famílias e pessoas com deficiência
              intelectual em sua jornada de aprendizado e desenvolvimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Começar Agora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg bg-transparent"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Ver Tutoriais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Documentação Section */}
      <section id="documentacao" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              📚 Documentação
            </h3>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Tutoriais completos para criar Canvas interativos e atividades personalizadas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documentationItems.map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
              >
                <CardHeader className={`${item.color} text-white pb-4`}>
                  <div className="flex items-center justify-center mb-3">
                    <div className="p-3 bg-white/20 rounded-full">{item.icon}</div>
                  </div>
                  <CardTitle className="text-center text-white text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <CardDescription className="text-gray-600 text-center mb-4">{item.description}</CardDescription>
                  <Button className={`w-full ${item.textColor} border-current`} variant="outline">
                    Ver Tutorial
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Módulos Section */}
      <section id="modulos" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Módulo I 
            </h3>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Atividades lúdicas e educativas desenvolvidas especialmente para estimular o desenvolvimento
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {moduleItems.map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
              >
                <CardHeader className={`${item.color} text-white pb-4`}>
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-white/20 rounded-full">{item.icon}</div>
                    <span className="text-sm bg-white/20 px-3 py-1 rounded-full">{item.activities}</span>
                  </div>
                  <CardTitle className="text-white text-lg mt-3">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <CardDescription className="text-gray-600 mb-4">{item.description}</CardDescription>
                  <Button asChild className={`w-full ${item.textColor} border-current`} variant="outline">
                    <Link href={item.path}>
                      Explorar Atividades
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
              <Heart className="h-8 w-8" />
            </div>
            <div>
              <h4 className="text-2xl font-bold">APAE Digital</h4>
              <p className="text-purple-100">Educação com amor e inclusão</p>
            </div>
          </div>
          <p className="text-purple-100 max-w-2xl mx-auto">
            Desenvolvido com carinho para apoiar educadores, famílias e pessoas com deficiência intelectual em sua
            jornada de aprendizado e crescimento pessoal.
          </p>
          <div className="mt-8 pt-8 border-t border-purple-400">
            <p className="text-purple-200">© 2024 APAE Digital. Feito com ❤️ para uma educação mais inclusiva.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
