import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Video, Link as LinkIcon, Download, ExternalLink, Eye } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

const resources = {
  videos: [
    {
      title: "Introdução aos Limites",
      description: "Vídeo explicativo sobre o conceito básico de limite.",
      url: "#",
      duration: "15 min"
    },
    {
      title: "Limites Laterais Explicados",
      description: "Como calcular e interpretar limites laterais.",
      url: "#",
      duration: "12 min"
    },
    {
      title: "Resolvendo Indeterminações",
      description: "Técnicas para resolver formas indeterminadas.",
      url: "#",
      duration: "20 min"
    }
  ],
  pdfs: [
    {
      title: "Resumo de Fórmulas de Limites",
      description: "Propriedades básicas, limites fundamentais, L'Hôpital e limites trigonométricos.",
      url: "/pdfs/resumo-formulas-limites.pdf",
      pages: "2 páginas"
    },
    {
      title: "Exercícios Resolvidos",
      description: "Coleção de 50 exercícios com soluções detalhadas.",
      url: "#",
      pages: "25 páginas"
    },
    {
      title: "Limites Notáveis - Demonstrações",
      description: "Demonstrações matemáticas dos limites notáveis.",
      url: "#",
      pages: "10 páginas"
    }
  ],
  links: [
    {
      title: "Khan Academy - Limites",
      description: "Curso completo sobre limites em português.",
      url: "https://pt.khanacademy.org/math/calculus-1"
    },
    {
      title: "Wolfram Alpha",
      description: "Calculadora online para verificar limites.",
      url: "https://www.wolframalpha.com"
    },
    {
      title: "Symbolab",
      description: "Resolução passo a passo de limites.",
      url: "https://www.symbolab.com"
    }
  ]
};

const Resources = () => {
  const [previewPdf, setPreviewPdf] = useState<{ url: string; title: string } | null>(null);
  const isPreviewable = (url: string) => url.toLowerCase().endsWith(".pdf");

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Recursos"
        description="Materiais educativos gratuitos sobre limites matemáticos: vídeos explicativos, PDFs com exercícios resolvidos e links úteis para aprender cálculo."
      />
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              📚 Recursos
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Materiais complementares para aprofundar o teu conhecimento sobre limites matemáticos.
            </p>
          </section>

          {/* Videos Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Video className="h-6 w-6 text-primary" />
              Vídeos Educativos
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {resources.videos.map((video, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{video.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">{video.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{video.duration}</span>
                      <Button variant="outline" size="sm" asChild>
                        <a href={video.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Ver
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* PDFs Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              Materiais em PDF
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {resources.pdfs.map((pdf, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{pdf.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">{pdf.description}</p>
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="text-xs text-muted-foreground">{pdf.pages}</span>
                      <div className="flex items-center gap-2">
                        {isPreviewable(pdf.url) && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setPreviewPdf({ url: pdf.url, title: pdf.title })}
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            Pré-visualizar
                          </Button>
                        )}
                        <Button variant="outline" size="sm" asChild>
                          <a href={pdf.url} download>
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Links Section */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <LinkIcon className="h-6 w-6 text-primary" />
              Links Úteis
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {resources.links.map((link, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{link.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">{link.description}</p>
                    <Button variant="outline" size="sm" asChild>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Visitar
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />

      <Dialog open={!!previewPdf} onOpenChange={(open) => !open && setPreviewPdf(null)}>
        <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 flex flex-col">
          <DialogHeader className="px-6 py-4 border-b">
            <DialogTitle>{previewPdf?.title ?? "Pré-visualização"}</DialogTitle>
          </DialogHeader>
          <div className="flex-1 bg-muted">
            {previewPdf && (
              <iframe
                src={`${previewPdf.url}#view=FitH`}
                title={previewPdf.title}
                className="w-full h-full"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Resources;
