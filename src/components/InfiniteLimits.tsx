import { Card } from "./ui/card";

const InfiniteLimits = () => {
  return (
    <section id="infinite-limits" className="min-h-screen bg-gradient-hero p-8 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
            🚀 Limites Infinitos e no Infinito
          </h2>
          <p className="text-xl text-muted-foreground mb-12 text-center">
            Nem todos os limites têm um valor finito. Às vezes, uma função cresce sem parar ou aproxima-se de zero à medida que avançamos para o infinito. Estes são os limites infinitos e os limites no infinito.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Limite Infinito */}
          <Card className="math-card animate-slide-in-left">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                🔹 Limite infinito
              </h3>
              <p className="text-foreground mb-4">
                Quando o valor da função cresce sem limite à medida que nos aproximamos de um ponto.
              </p>
            </div>
            
            <div className="math-formula mb-4">
              lim<sub>x→0<sup>+</sup></sub> 1/x = +∞
            </div>
            
            <p className="text-muted-foreground">
              À medida que x se aproxima de 0 pela direita, o valor de 1/x cresce sem parar.
            </p>
          </Card>

          {/* Limite no Infinito */}
          <Card className="math-card animate-slide-in-right">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                🔸 Limite no infinito
              </h3>
              <p className="text-foreground mb-4">
                Quando a variável x cresce sem parar e observamos o comportamento da função.
              </p>
            </div>
            
            <div className="math-formula mb-4">
              lim<sub>x→∞</sub> 1/x = 0
            </div>
            
            <p className="text-muted-foreground">
              À medida que x cresce, 1/x torna-se cada vez mais pequeno, aproximando-se de zero.
            </p>
          </Card>
        </div>

        {/* Visualização */}
        <Card className="math-card animate-scale-in mb-12">
          <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-2">
            📊 Visualização sugerida
          </h3>
          <ul className="space-y-3 text-foreground">
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">•</span>
              Um gráfico de 1/x mostrando a aproximação ao eixo horizontal (assíntota).
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">•</span>
              Uma curva exponencial como f(x) = e<sup>x</sup>, mostrando crescimento rápido.
            </li>
          </ul>
        </Card>

        {/* Frase de apoio */}
        <div className="text-center animate-bounce-gentle">
          <div className="bg-gradient-accent text-accent-foreground p-6 rounded-2xl shadow-lg inline-block">
            <h4 className="text-xl font-bold mb-2">💡 Frase de apoio</h4>
            <p className="text-lg italic">
              "O infinito não é um destino — é uma direção. E os limites ajudam-nos a entender o que acontece quando seguimos por esse caminho."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfiniteLimits;