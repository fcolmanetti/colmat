
import { ArrowDown, Calendar, FileText, Mail, Settings, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                ArquiMateriais
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => navigate('/login')}>
                Entrar
              </Button>
              <Button onClick={() => navigate('/register')} className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                Cadastrar
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Conecte-se aos Melhores
            <span className="block bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Materiais de Acabamento
            </span>
            de Uberaba
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Plataforma completa para arquitetos e designers criarem orçamentos profissionais,
            gerenciarem projetos e conectarem-se com as melhores lojas da região.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/dashboard')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-3 text-lg"
            >
              Começar Agora
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg border-slate-300">
              Ver Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Tudo que você precisa em uma plataforma
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ferramentas profissionais para criar orçamentos impressionantes e gerenciar seus projetos com eficiência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-slate-900">Orçamentos Profissionais</CardTitle>
              <CardDescription>
                Crie orçamentos detalhados com templates customizáveis e branding personalizado.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-slate-900">Gestão de Projetos</CardTitle>
              <CardDescription>
                Organize múltiplos projetos, listas de materiais e acompanhe o progresso em tempo real.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Settings className="h-6 w-6 text-orange-600" />
              </div>
              <CardTitle className="text-slate-900">Estoque em Tempo Real</CardTitle>
              <CardDescription>
                Conecte-se diretamente com as lojas e consulte disponibilidade de produtos instantaneamente.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="text-slate-900">Compartilhamento Fácil</CardTitle>
              <CardDescription>
                Exporte orçamentos em PDF e compartilhe diretamente com clientes via email.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Plus className="h-6 w-6 text-red-600" />
              </div>
              <CardTitle className="text-slate-900">Catálogo Completo</CardTitle>
              <CardDescription>
                Acesse produtos de todas as principais lojas de Uberaba em um só lugar.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <ArrowDown className="h-6 w-6 text-teal-600" />
              </div>
              <CardTitle className="text-slate-900">Colaboração em Equipe</CardTitle>
              <CardDescription>
                Trabalhe em equipe nos projetos com revisões e atualizações em tempo real.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para revolucionar seus orçamentos?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se aos melhores profissionais de Uberaba e crie orçamentos que impressionam.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/register')}
            className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3 text-lg font-semibold"
          >
            Começar Gratuitamente
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-bold text-white">ArquiMateriais</span>
              </div>
              <p className="text-sm">
                Conectando arquitetos e designers aos melhores materiais de acabamento de Uberaba.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Produto</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrações</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Empresa</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Suporte</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 ArquiMateriais. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
