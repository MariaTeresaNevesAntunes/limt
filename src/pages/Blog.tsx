import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

const articles = [
  {
    id: 1,
    title: "A Importância dos Limites no Cálculo",
    excerpt: "Descobre porque os limites são a base fundamental do cálculo diferencial e integral, e como este conceito revolucionou a matemática moderna.",
    date: "2024-12-10",
    readTime: "5 min",
    category: "Fundamentos",
    slug: "importancia-limites-calculo"
  },
  {
    id: 2,
    title: "5 Erros Comuns ao Calcular Limites",
    excerpt: "Evita os erros mais frequentes que os estudantes cometem ao resolver problemas de limites. Dicas práticas e exemplos.",
    date: "2024-12-05",
    readTime: "7 min",
    category: "Dicas",
    slug: "erros-comuns-limites"
  },
  {
    id: 3,
    title: "Limites e o Conceito de Infinito",
    excerpt: "Uma exploração filosófica e matemática do conceito de infinito através dos limites. Como os matemáticos dominaram o infinito.",
    date: "2024-11-28",
    readTime: "8 min",
    category: "Teoria",
    slug: "limites-conceito-infinito"
  },
  {
    id: 4,
    title: "Aplicações Práticas dos Limites",
    excerpt: "De física a economia, descobre como os limites são usados no mundo real para resolver problemas práticos.",
    date: "2024-11-20",
    readTime: "6 min",
    category: "Aplicações",
    slug: "aplicacoes-praticas-limites"
  },
  {
    id: 5,
    title: "História do Cálculo: De Newton a Cauchy",
    excerpt: "A fascinante história de como o conceito de limite evoluiu ao longo dos séculos, desde as primeiras ideias até a definição rigorosa.",
    date: "2024-11-15",
    readTime: "10 min",
    category: "História",
    slug: "historia-calculo-newton-cauchy"
  }
];

const Blog = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-PT', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Blog"
        description="Artigos, dicas e explorações sobre limites matemáticos. Aprende com conteúdos práticos sobre cálculo e matemática."
        type="blog"
      />
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              📝 Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Artigos, dicas e explorações sobre o mundo dos limites matemáticos.
            </p>
          </section>

          {/* Articles List */}
          <section className="space-y-6">
            {articles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors">
                    <Link to={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(article.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {article.readTime}
                      </span>
                    </div>
                    <Link 
                      to={`/blog/${article.slug}`}
                      className="flex items-center gap-1 text-primary hover:underline font-medium"
                    >
                      Ler mais
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
