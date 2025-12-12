import { Card } from "./ui/card";

const IndeterminationsSection = () => {
  return (
    <section id="indeterminations" className="min-h-screen bg-gradient-hero p-8 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
            ⚠️ Indeterminações: Quando o limite não se revela de imediato
          </h2>
          <p className="text-xl text-foreground/80 mb-12 text-center">
            Nem todos os limites podem ser calculados diretamente. Às vezes, ao substituir o valor na função, obtemos expressões indeterminadas.
          </p>
        </div>

        {/* Formas Indeterminadas */}
        <Card className="math-card animate-scale-in mb-12">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            Formas Indeterminadas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            <div className="math-formula">0/0</div>
            <div className="math-formula">∞/∞</div>
            <div className="math-formula">∞ - ∞</div>
            <div className="math-formula">0 · ∞</div>
            <div className="math-formula">1<sup>∞</sup></div>
            <div className="math-formula">0<sup>0</sup></div>
          </div>
          <p className="text-foreground/80 mt-6 text-center">
            Estas são chamadas formas indeterminadas, porque não nos dizem qual é o valor do limite — precisamos de transformar a expressão para descobrir.
          </p>
        </Card>

        {/* Exemplo Clássico */}
        <Card className="math-card animate-slide-in-left mb-12">
          <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            🔍 Exemplo clássico: 0/0
          </h3>
          
          <div className="space-y-4">
            <div className="math-formula mb-4">
              lim<sub>x→2</sub> (x² - 4)/(x - 2)
            </div>
            
            <p className="text-foreground">Substituindo diretamente:</p>
            <div className="math-formula bg-red-100 dark:bg-red-900/20 p-3 rounded">
              (2² - 4)/(2 - 2) = 0/0
            </div>
            
            <p className="text-foreground">Mas se fatorarmos o numerador:</p>
            <div className="math-formula">
              (x - 2)(x + 2)/(x - 2)
            </div>
            
            <p className="text-foreground">Cancelamos x - 2 e obtemos:</p>
            <div className="math-formula bg-green-100 dark:bg-green-900/20 p-3 rounded">
              lim<sub>x→2</sub> x + 2 = 4
            </div>
            
            <p className="text-accent font-semibold">✅ O limite existe — só precisávamos de simplificar.</p>
          </div>
        </Card>

        {/* Limites Notáveis */}
        <Card className="math-card animate-slide-in-right mb-12">
          <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            🧠 Limites Notáveis: Ferramentas para resolver indeterminações
          </h3>
          <p className="text-foreground/80 mb-8 text-center">
            Estes são limites que aparecem frequentemente e que devemos conhecer de cor:
          </p>

          <div className="space-y-8">
            {/* Limite Trigonométrico */}
            <div className="border-l-4 border-secondary pl-6">
              <h4 className="text-xl font-bold text-secondary mb-3 flex items-center gap-2">
                🔸 1. Limite trigonométrico
              </h4>
              <div className="math-formula mb-3">
                lim<sub>x→0</sub> sin(x)/x = 1
              </div>
              <p className="text-foreground/80">
                Usado para resolver indeterminações envolvendo funções trigonométricas.
              </p>
            </div>

            {/* Limite Exponencial */}
            <div className="border-l-4 border-secondary pl-6">
              <h4 className="text-xl font-bold text-secondary mb-3 flex items-center gap-2">
                🔸 2. Limite exponencial
              </h4>
              <div className="math-formula mb-3">
                lim<sub>x→0</sub> (e<sup>x</sup> - 1)/x = 1
              </div>
              <p className="text-foreground/80">
                Essencial para funções exponenciais e logarítmicas.
              </p>
            </div>

            {/* Limite Logarítmico */}
            <div className="border-l-4 border-secondary pl-6">
              <h4 className="text-xl font-bold text-secondary mb-3 flex items-center gap-2">
                🔸 3. Limite logarítmico
              </h4>
              <div className="math-formula mb-3">
                lim<sub>x→0</sub> ln(1 + x)/x = 1
              </div>
              <p className="text-foreground/80">
                Muito útil em cálculo avançado e aplicações em economia e física.
              </p>
            </div>
          </div>
        </Card>

        {/* Frase de apoio */}
        <div className="text-center animate-bounce-gentle">
          <div className="bg-gradient-accent text-accent-foreground p-6 rounded-2xl shadow-lg inline-block">
            <h4 className="text-xl font-bold mb-2">💡 Frase de apoio</h4>
            <p className="text-lg italic">
              "Uma indeterminação não é um obstáculo — é um convite para pensar mais fundo."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndeterminationsSection;