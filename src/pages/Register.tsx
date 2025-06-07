
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "",
    company: ""
  });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would integrate with Supabase authentication
    console.log("Register attempt:", formData);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              ArquiMateriais
            </span>
          </div>
        </div>

        <Card className="border-slate-200 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-slate-900">Crie sua conta</CardTitle>
            <CardDescription>
              Junte-se aos melhores profissionais de Uberaba
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome completo</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="pl-10"
                    required
                  />
                  <Mail className="h-4 w-4 absolute left-3 top-3 text-slate-400" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="userType">Tipo de usuário</Label>
                <Select onValueChange={(value) => setFormData({...formData, userType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione seu tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="architect">Arquiteto</SelectItem>
                    <SelectItem value="designer">Designer de Interiores</SelectItem>
                    <SelectItem value="store">Loja de Materiais</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Empresa/Escritório</Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Nome da sua empresa"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Mínimo 8 caracteres"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmar senha</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Digite a senha novamente"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" className="rounded" required />
                <Label htmlFor="terms" className="text-sm text-slate-600">
                  Aceito os{" "}
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    termos de uso
                  </a>{" "}
                  e{" "}
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    política de privacidade
                  </a>
                </Label>
              </div>

              <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                Criar conta
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-slate-600">
                Já tem uma conta?{" "}
                <button
                  onClick={() => navigate("/login")}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Entre aqui
                </button>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <button
            onClick={() => navigate("/")}
            className="text-slate-600 hover:text-slate-900 text-sm"
          >
            ← Voltar para home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
