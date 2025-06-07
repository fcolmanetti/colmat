
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, FileText, Calendar, Settings, ArrowUp, ArrowDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for recent projects and budgets
  const recentProjects = [
    { id: 1, name: "Residência Santos", status: "Em andamento", progress: 75, lastUpdate: "2 dias atrás" },
    { id: 2, name: "Apartamento Centro", status: "Orçamento", progress: 45, lastUpdate: "1 semana atrás" },
    { id: 3, name: "Casa Sobrado", status: "Finalizado", progress: 100, lastUpdate: "1 mês atrás" },
  ];

  const recentBudgets = [
    { id: 1, project: "Residência Santos", value: "R$ 45.000", status: "Aprovado", date: "15/12/2024" },
    { id: 2, project: "Apartamento Centro", value: "R$ 28.500", status: "Pendente", date: "12/12/2024" },
    { id: 3, project: "Casa Sobrado", value: "R$ 67.200", status: "Revisão", date: "10/12/2024" },
  ];

  const quickStats = [
    { label: "Projetos Ativos", value: "12", change: "+2", trend: "up" },
    { label: "Orçamentos Este Mês", value: "8", change: "+4", trend: "up" },
    { label: "Valor Total", value: "R$ 180k", change: "-5%", trend: "down" },
    { label: "Lojas Parceiras", value: "24", change: "0", trend: "neutral" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  ArquiMateriais
                </span>
              </div>
              
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-slate-600 hover:text-blue-600 font-medium">Dashboard</a>
                <a href="#" onClick={() => navigate('/projects')} className="text-slate-600 hover:text-blue-600 font-medium">Projetos</a>
                <a href="#" onClick={() => navigate('/catalog')} className="text-slate-600 hover:text-blue-600 font-medium">Catálogo</a>
                <a href="#" onClick={() => navigate('/budgets')} className="text-slate-600 hover:text-blue-600 font-medium">Orçamentos</a>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Input
                  type="text"
                  placeholder="Buscar produtos, lojas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64"
                />
              </div>
              
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">JS</span>
                </div>
                <span className="hidden md:block text-sm font-medium text-slate-700">João Silva</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Bom dia, João! 👋
          </h1>
          <p className="text-slate-600 text-lg">
            Aqui está um resumo dos seus projetos e atividades recentes.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <Card key={index} className="border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                  </div>
                  <div className={`flex items-center space-x-1 text-sm ${
                    stat.trend === 'up' ? 'text-green-600' : 
                    stat.trend === 'down' ? 'text-red-600' : 'text-slate-500'
                  }`}>
                    {stat.trend === 'up' && <ArrowUp className="h-4 w-4" />}
                    {stat.trend === 'down' && <ArrowDown className="h-4 w-4" />}
                    <span>{stat.change}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-slate-200 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/projects/new')}>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Plus className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Novo Projeto</h3>
              <p className="text-slate-600 text-sm">Crie um novo projeto e comece a organizar seus materiais</p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/budgets/new')}>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Criar Orçamento</h3>
              <p className="text-slate-600 text-sm">Monte um orçamento profissional em poucos cliques</p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/catalog')}>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Explorar Catálogo</h3>
              <p className="text-slate-600 text-sm">Navegue pelos produtos das melhores lojas de Uberaba</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Projects */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-slate-900">Projetos Recentes</CardTitle>
              <CardDescription>Seus projetos mais atualizados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentProjects.map((project) => (
                  <div key={project.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-slate-900">{project.name}</h4>
                      <p className="text-sm text-slate-600">{project.status}</p>
                      <div className="mt-2">
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right ml-4">
                      <p className="text-sm text-slate-500">{project.lastUpdate}</p>
                      <p className="text-sm font-medium text-slate-700">{project.progress}%</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4" onClick={() => navigate('/projects')}>
                Ver todos os projetos
              </Button>
            </CardContent>
          </Card>

          {/* Recent Budgets */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-slate-900">Orçamentos Recentes</CardTitle>
              <CardDescription>Últimos orçamentos criados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentBudgets.map((budget) => (
                  <div key={budget.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-slate-900">{budget.project}</h4>
                      <p className="text-sm text-slate-600">{budget.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-slate-900">{budget.value}</p>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        budget.status === 'Aprovado' ? 'bg-green-100 text-green-800' :
                        budget.status === 'Pendente' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {budget.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4" onClick={() => navigate('/budgets')}>
                Ver todos os orçamentos
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
