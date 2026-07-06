import { useState } from "react";
import { Server, ShieldCheck, Headphones, Camera, Cpu, Code, MapPin, Mail, MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import logo from "@/assets/luver-logo.png";
import camerasAsset from "@/assets/cameras-monitoramento.jpg.asset.json";
import suporteAsset from "@/assets/suporte-tecnico.jpg.asset.json";


const WHATSAPP = "https://wa.me/5551991816438";

const services = [
  { icon: Server, title: "Infraestrutura de TI", desc: "Mais estabilidade e performance para sua empresa." },
  { icon: ShieldCheck, title: "Segurança e Backup", desc: "Proteção de dados e tranquilidade para focar no que importa." },
  { icon: Headphones, title: "Suporte Técnico", desc: "Atendimento rápido e especializado quando você mais precisa." },
  { icon: Camera, title: "Câmeras e Monitoramento", desc: "Soluções completas para proteger o que realmente importa." },
  { icon: Cpu, title: "Automatizações", desc: "Processos inteligentes que otimizam tarefas e aumentam resultados." },
  { icon: Code, title: "Construção de Sites", desc: "Sites profissionais e modernos para fortalecer a presença digital do seu negócio." },
];

const Index = () => {
  const [infraOpen, setInfraOpen] = useState(false);
  const [camerasOpen, setCamerasOpen] = useState(false);
  const [suporteOpen, setSuporteOpen] = useState(false);
  const [sitesOpen, setSitesOpen] = useState(false);
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <a href="#hero" className="flex items-center gap-3">
            <img src={logo} alt="Luver Tech" className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/60" />
            <span className="font-bold tracking-widest text-neon text-lg">LUVER TECH</span>
          </a>
          <nav className="hidden md:flex gap-8 text-sm text-muted-foreground">
            <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
            <a href="#diferenciais" className="hover:text-primary transition-colors">Diferenciais</a>
            
            <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
          </nav>
          <Button asChild variant="neon" size="sm">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="relative pt-32 pb-24 md:pt-44 md:pb-32 grid-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="float mb-8 relative">
              <div className="absolute inset-0 rounded-full bg-primary/30 blur-3xl" />
              <img src={logo} alt="Luver Tech logo" className="relative w-40 h-40 md:w-52 md:h-52 rounded-full object-cover ring-4 ring-primary/60 shadow-[0_0_60px_hsl(var(--neon-cyan)/0.6)]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              <span className="glow-pulse">SOLUÇÕES EM TI</span>
              <br />
              <span className="text-foreground">PARA IMPULSIONAR O</span>{" "}
              <span className="text-neon">SEU NEGÓCIO!</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
              Infraestrutura, suporte e sistemas pensados para aumentar sua produtividade e segurança.
            </p>
            <Button asChild variant="neon" size="xl">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" /> Fale Conosco
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.3em] mb-3">O QUE FAZEMOS</p>
            <h2 className="text-3xl md:text-5xl font-bold">
              Nossos <span className="text-neon">Serviços</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc }) => {
              const isInfra = title === "Infraestrutura de TI";
              const isCameras = title === "Câmeras e Monitoramento";
              const isSuporte = title === "Suporte Técnico";
              const isSites = title === "Construção de Sites";
              const isClickable = isInfra || isCameras || isSuporte || isSites;
              const openModal = () => {
                if (isInfra) setInfraOpen(true);
                else if (isCameras) setCamerasOpen(true);
                else if (isSuporte) setSuporteOpen(true);
                else if (isSites) setSitesOpen(true);
              };
              return (
                <div
                  key={title}
                  onClick={isClickable ? openModal : undefined}
                  role={isClickable ? "button" : undefined}
                  tabIndex={isClickable ? 0 : undefined}
                  onKeyDown={isClickable ? (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(); } } : undefined}
                  className={`group relative p-8 rounded-2xl border border-border bg-card transition-smooth hover:border-primary hover:-translate-y-2 hover:shadow-[0_0_40px_hsl(var(--neon-cyan)/0.4)] ${isClickable ? "cursor-pointer" : ""}`}
                  style={{ background: "var(--gradient-card)" }}
                >
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-smooth">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-neon transition-smooth">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{desc}</p>
                  {isClickable && (
                    <p className="mt-4 text-xs uppercase tracking-widest text-primary/80">Clique para ver mais →</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Infraestrutura Modal */}
      <Dialog open={infraOpen} onOpenChange={setInfraOpen}>
        <DialogContent className="max-w-4xl bg-card border-primary/50 shadow-[0_0_60px_hsl(var(--neon-cyan)/0.35)]">
          <DialogHeader>
            <DialogTitle className="text-2xl text-neon tracking-wide">Infraestrutura de TI</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-6 mt-2 max-h-[70vh] overflow-y-auto pr-2">
            {/* BLOCO 1 - ATOS */}
            <div className="flex flex-col gap-4">
              <div className="rounded-xl overflow-hidden border border-primary/30 bg-background/60 p-3">
                <img src="/infraestrutura-rack.png" alt="Servidor ATOS Bullion" className="w-full h-64 object-contain" />
              </div>
              <div className="p-4 rounded-xl border border-primary/20 bg-background/40 text-left">
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  Atuar como Service Provider (<span className="text-primary/90">prestador de serviços</span>) para a <span className="text-primary/90">ATOS</span> é a validação de uma jornada que iniciou lá em Outubro de 2014.
                  <br />
                  Gratidão por fazer parte desse ecossistema de inovação e tecnologia de ponta. 🚀🔒
                  <br />
                  Em respeito às normas da <span className="text-primary/90">LGPD</span> e políticas de segurança, as fotos utilizadas nesta postagem são de divulgação pública oficial das empresas.
                  <br /><br />
                  <span className="text-xs text-muted-foreground/80">
                    Fonte: Imagens extraídas do repositório público oficial:{" "}
                    <a
                      href="https://support.bull.com/ols/product/platforms/bullion"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neon hover:underline break-all"
                    >
                      https://support.bull.com/ols/product/platforms/bullion
                    </a>
                  </span>
                </p>
              </div>
            </div>

            {/* BLOCO 2 - ORACLE */}
            <div className="flex flex-col gap-4">
              <div className="rounded-xl overflow-hidden border border-primary/30 bg-background/60 p-3">
                <img src="/infraestrutura-storage.png" alt="Storage Oracle" className="w-full h-64 object-contain" />
              </div>
              <div className="p-4 rounded-xl border border-primary/20 bg-background/40 text-left">
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  ✨ Atuar como Service Provider (<span className="text-primary/90">prestador de serviços</span>) para a <span className="text-primary/90">ORACLE</span> é a validação de uma jornada que iniciou lá em Outubro de 2014.
                  <br />
                  Gratidão por fazer parte desse ecossistema de inovação e tecnologia de ponta. 🚀🔒
                  <br />
                  Em respeito às normas da <span className="text-primary/90">LGPD</span> e políticas de segurança, as fotos utilizadas nesta postagem são de divulgação pública oficial das empresas.
                  <br /><br />
                  <span className="text-xs text-muted-foreground/80">
                    Fonte: Imagens extraídas do repositório público oficial:{" "}
                    <a
                      href="https://docs.oracle.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neon hover:underline break-all"
                    >
                      https://docs.oracle.com/.../overview-oracle-database...
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Câmeras Modal */}
      <Dialog open={camerasOpen} onOpenChange={setCamerasOpen}>
        <DialogContent className="max-w-4xl bg-card border-primary/50 shadow-[0_0_60px_hsl(var(--neon-cyan)/0.35)]">
          <DialogHeader>
            <DialogTitle className="text-2xl text-neon tracking-wide">Câmeras e Monitoramento</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-6 mt-2 max-h-[70vh] overflow-y-auto pr-2">
            <div className="flex flex-col gap-4">
              <div className="rounded-xl overflow-hidden border border-primary/30 bg-background/60 p-3">
                <img src={camerasAsset.url} alt="Sistema de monitoramento por câmeras Intelbras" className="w-full h-auto max-h-[500px] object-contain" />
              </div>
              <div className="p-4 rounded-xl border border-primary/20 bg-background/40 text-left">
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  Você busca mais <span className="text-primary/90">tranquilidade</span> para sua residência ou empresa? A falta de monitoramento pode gerar vulnerabilidades que comprometem o seu <span className="text-primary/90">patrimônio</span> e a <span className="text-primary/90">segurança</span> de quem você ama.
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Suporte Técnico Modal */}
      <Dialog open={suporteOpen} onOpenChange={setSuporteOpen}>
        <DialogContent className="max-w-4xl bg-card border-primary/50 shadow-[0_0_60px_hsl(var(--neon-cyan)/0.35)]">
          <DialogHeader>
            <DialogTitle className="text-2xl text-neon tracking-wide">Suporte Técnico</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-6 mt-2 max-h-[70vh] overflow-y-auto pr-2">
            <div className="flex flex-col gap-4">
              <div className="rounded-xl overflow-hidden border border-primary/30 bg-background/60 p-3">
                <img src={suporteAsset.url} alt="Suporte técnico Luver Tech" className="w-full h-auto max-h-[500px] object-contain" />
              </div>
              <div className="p-4 rounded-xl border border-primary/20 bg-background/40 text-left">
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  <span className="text-primary/90">Análise minuciosa</span> e <span className="text-primary/90">diagnóstico preciso</span>: na <span className="text-primary/90">LUVER TECH</span>, cada desafio técnico é tratado com foco total na <span className="text-primary/90">estabilidade</span> do seu negócio.
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Construção de Sites Modal */}
      <Dialog open={sitesOpen} onOpenChange={setSitesOpen}>
        <DialogContent className="max-w-4xl bg-card border-primary/50 shadow-[0_0_60px_hsl(var(--neon-cyan)/0.35)]">
          <DialogHeader>
            <DialogTitle className="text-2xl text-neon tracking-wide">Construção de Sites</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-6 mt-2 max-h-[70vh] overflow-y-auto pr-2">
            <div className="p-4 rounded-xl border border-primary/20 bg-background/40 text-left">
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                Desenvolvemos <span className="text-primary/90">sites institucionais</span> e <span className="text-primary/90">landing pages</span> rápidos, responsivos e otimizados, alinhados à identidade da sua marca e prontos para gerar resultados.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>




      {/* Diferenciais */}
      <section id="diferenciais" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                Vamos transformar a tecnologia no <span className="text-neon">seu maior aliado!</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Combinamos experiência, agilidade e inovação para entregar soluções sob medida que fazem a sua empresa crescer com segurança.
              </p>
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/40 bg-primary/5">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-semibold tracking-wide">Atendemos todo o Rio Grande do Sul</span>
              </div>
            </div>
            <div className="flex justify-center">
              <RioGrandeMap />
            </div>
          </div>
        </div>
      </section>

      

      {/* Contato */}
      <section id="contato" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-primary text-sm tracking-[0.3em] mb-3">FALE CONOSCO</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Pronto para <span className="text-neon">evoluir</span>?
            </h2>
            <p className="text-muted-foreground text-lg">Entre em contato e vamos conversar sobre o seu projeto.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
            <ContactCard icon={MessageCircle} label="WhatsApp" value="(51) 99181-6438" href={WHATSAPP} />
            <ContactCard icon={Mail} label="E-mail" value="evertonfsilveira@luvertech.com.br" href="mailto:evertonfsilveira@luvertech.com.br" />
            <ContactCard icon={Instagram} label="Instagram" value="@luver_tech" href="https://www.instagram.com/luver_tech/" />
            <ContactCard icon={MapPin} label="Localização" value="Todo o Rio Grande do Sul" />
          </div>

          <div className="text-center">
            <Button asChild variant="neon" size="xl">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" /> Falar no WhatsApp agora
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 py-12 mt-12">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Luver Tech" className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/60" />
              <span className="font-bold tracking-widest text-neon">LUVER TECH</span>
            </div>
            <p className="text-muted-foreground">Analista de Sistemas e Infraestrutura. Soluções em TI para o seu negócio.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-primary">Serviços</h4>
            <ul className="space-y-2 text-muted-foreground">
              {services.map(s => (
                <li key={s.title}><a href="#servicos" className="hover:text-primary transition-colors">{s.title}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-primary">Contato</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>(51) 99181-6438</li>
              <li>evertonfsilveira@luvertech.com.br</li>
              <li>Rio Grande do Sul – Brasil</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-10 pt-6 border-t border-border/40 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Luver Tech. Todos os direitos reservados.
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-[0_0_30px_hsl(var(--neon-cyan)/0.7)] hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
};

const ContactCard = ({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) => {
  const content = (
    <div className="p-6 rounded-2xl border border-border bg-card transition-smooth hover:border-primary hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.3)] h-full" style={{ background: "var(--gradient-card)" }}>
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-primary/10 border border-primary/30 mx-auto">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <p className="text-xs uppercase tracking-widest text-muted-foreground text-center mb-2">{label}</p>
      <p className="text-center font-medium break-words">{value}</p>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noopener noreferrer">{content}</a> : content;
};

const RioGrandeMap = () => (
  <svg viewBox="0 0 400 400" className="w-full max-w-md drop-shadow-[0_0_20px_hsl(var(--neon-cyan)/0.6)]">
    <defs>
      <linearGradient id="rsGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="hsl(195 100% 60%)" />
        <stop offset="100%" stopColor="hsl(217 91% 55%)" />
      </linearGradient>
    </defs>
    <path
      d="M70 110 L130 80 L180 70 L240 75 L290 95 L330 130 L350 180 L355 230 L335 280 L300 320 L250 345 L190 350 L140 335 L100 305 L75 260 L60 210 L55 160 Z"
      fill="none"
      stroke="url(#rsGrad)"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path
      d="M70 110 L130 80 L180 70 L240 75 L290 95 L330 130 L350 180 L355 230 L335 280 L300 320 L250 345 L190 350 L140 335 L100 305 L75 260 L60 210 L55 160 Z"
      fill="hsl(var(--neon-cyan) / 0.08)"
    />
    <circle cx="200" cy="210" r="6" fill="hsl(var(--neon-cyan))">
      <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" />
    </circle>
    <text x="200" y="240" textAnchor="middle" fill="hsl(var(--neon-cyan))" fontSize="14" fontWeight="bold" letterSpacing="3">RIO GRANDE DO SUL</text>
  </svg>
);

export default Index;
