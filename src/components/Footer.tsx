import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-foreground font-semibold">
            📘 Limites
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <Link 
              to="/politica-privacidade" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link 
              to="/termos-uso" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Termos de Uso
            </Link>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © 2025 Todos os direitos reservados
          </div>
        </div>
      </div>
    </footer>
  );
};
