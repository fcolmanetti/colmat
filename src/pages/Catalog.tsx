
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Settings, ArrowDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Catalog = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStore, setSelectedStore] = useState("");

  // Mock data for products
  const products = [
    {
      id: 1,
      name: "Porcelanato Portinari 60x60cm",
      store: "Cerâmica Uberaba",
      category: "Revestimentos",
      price: "R$ 89,90",
      unit: "m²",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300",
      inStock: true,
      description: "Porcelanato esmaltado, acabamento polido"
    },
    {
      id: 2,
      name: "Tinta Acrílica Premium Branca",
      store: "Tintas Triângulo",
      category: "Tintas",
      price: "R$ 125,00",
      unit: "lata 18L",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300",
      inStock: true,
      description: "Tinta acrílica lavável, alta cobertura"
    },
    {
      id: 3,
      name: "Luminária Pendente LED",
      store: "Iluminação Silva",
      category: "Iluminação",
      price: "R$ 245,00",
      unit: "unidade",
      image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=300",
      inStock: false,
      description: "Luminária LED com dimmer, design moderno"
    },
    {
      id: 4,
      name: "Torneira Monocomando Cromada",
      store: "Metais & Cia",
      category: "Metais",
      price: "R$ 189,90",
      unit: "unidade",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300",
      inStock: true,
      description: "Torneira monocomando para cozinha"
    },
    {
      id: 5,
      name: "Piso Laminado Carvalho",
      store: "Pisos Premium",
      category: "Pisos",
      price: "R$ 45,90",
      unit: "m²",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300",
      inStock: true,
      description: "Piso laminado AC4, espessura 8mm"
    },
    {
      id: 6,
      name: "Papel de Parede Texturizado",
      store: "Decoração Moderna",
      category: "Revestimentos",
      price: "R$ 65,00",
      unit: "rolo",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300",
      inStock: true,
      description: "Papel de parede vinílico, lavável"
    }
  ];

  const categories = ["Revestimentos", "Tintas", "Iluminação", "Metais", "Pisos"];
  const stores = ["Cerâmica Uberaba", "Tintas Triângulo", "Iluminação Silva", "Metais & Cia", "Pisos Premium", "Decoração Moderna"];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.store.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    const matchesStore = !selectedStore || product.store === selectedStore;
    return matchesSearch && matchesCategory && matchesStore;
  });

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
                <a href="#" onClick={() => navigate('/dashboard')} className="text-slate-600 hover:text-blue-600 font-medium">Dashboard</a>
                <a href="#" onClick={() => navigate('/projects')} className="text-slate-600 hover:text-blue-600 font-medium">Projetos</a>
                <a href="#" className="text-blue-600 font-medium">Catálogo</a>
                <a href="#" onClick={() => navigate('/budgets')} className="text-slate-600 hover:text-blue-600 font-medium">Orçamentos</a>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
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
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Catálogo de Produtos
          </h1>
          <p className="text-slate-600 text-lg">
            Explore produtos das melhores lojas de materiais de Uberaba
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <Input
                type="text"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div>
              <Select onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Todas as categorias</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Select onValueChange={setSelectedStore}>
                <SelectTrigger>
                  <SelectValue placeholder="Loja" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Todas as lojas</SelectItem>
                  {stores.map(store => (
                    <SelectItem key={store} value={store}>{store}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Nome</SelectItem>
                  <SelectItem value="price-low">Menor preço</SelectItem>
                  <SelectItem value="price-high">Maior preço</SelectItem>
                  <SelectItem value="store">Loja</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-slate-600">
            {filteredProducts.length} produtos encontrados
          </p>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <ArrowDown className="h-4 w-4 mr-2" />
              Exportar Lista
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="border-slate-200 hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    product.inStock 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {product.inStock ? 'Em estoque' : 'Indisponível'}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="mb-2">
                  <h3 className="font-semibold text-slate-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-slate-600">{product.description}</p>
                </div>
                
                <div className="mb-3">
                  <p className="text-sm text-blue-600 font-medium">{product.store}</p>
                  <p className="text-xs text-slate-500">{product.category}</p>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-lg font-bold text-slate-900">{product.price}</p>
                    <p className="text-xs text-slate-500">por {product.unit}</p>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                    disabled={!product.inStock}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar
                  </Button>
                  <Button variant="outline" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Carregar mais produtos
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Catalog;
