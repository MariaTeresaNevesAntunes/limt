import { Brain, ArrowRight } from "lucide-react";

export const WhatIsLimit = () => {
  return (
    <section id="what-is-limit" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Brain className="w-10 h-10 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">🧠 O que é um limite?</h2>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Um limite descreve o valor que uma função se aproxima à medida que a variável 
              independente (normalmente <span className="font-mono text-primary">x</span>) se aproxima 
              de um determinado ponto.
            </p>
            
            <div className="math-card">
              <h3 className="text-xl font-semibold mb-4 text-accent">📐 Exemplo simples:</h3>
              <p className="mb-4">Se <span className="math-formula inline">f(x) = 2x</span>, então quando 
              <span className="font-mono text-primary"> x → 3</span>, temos:</p>
              
              <div className="math-formula text-center text-xl">
                lim<sub className="text-sm">x → 3</sub> f(x) = 6
              </div>
            </div>
            
            <div className="bg-gradient-accent p-6 rounded-xl text-accent-foreground">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
                Explicação visual:
              </h4>
              <p className="leading-relaxed">
                Imagina uma estrada que leva até uma ponte. Mesmo que não cruzes a ponte, 
                podes ver claramente onde ela termina — esse é o limite.
              </p>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="math-card bg-gradient-secondary p-8 text-center">
              <div className="text-6xl mb-6">🌉</div>
              <h3 className="text-2xl font-bold text-secondary-foreground mb-4">
                Visualização do Limite
              </h3>
              <div className="space-y-4">
                <div className="bg-background/20 p-4 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-2">À medida que x se aproxima de 3:</div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>x = 2.9 → f(x) = 5.8</div>
                    <div>x = 2.99 → f(x) = 5.98</div>
                    <div>x = 2.999 → f(x) = 5.998</div>
                  </div>
                  <div className="mt-4 text-lg font-semibold text-accent">
                    O limite é 6! 🎯
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};