import { useEffect, useState, FormEvent } from "react";
import { Star, Send, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

type Testimonial = {
  id: string;
  name: string;
  message: string;
  rating: number;
  created_at: string;
};

const StarRating = ({
  value,
  onChange,
  size = 6,
  interactive = false,
}: {
  value: number;
  onChange?: (n: number) => void;
  size?: number;
  interactive?: boolean;
}) => {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => {
        const active = n <= (hover || value);
        return (
          <button
            key={n}
            type="button"
            disabled={!interactive}
            onMouseEnter={() => interactive && setHover(n)}
            onMouseLeave={() => interactive && setHover(0)}
            onClick={() => interactive && onChange?.(n)}
            className={interactive ? "transition-transform hover:scale-110" : "cursor-default"}
            aria-label={`${n} estrela${n > 1 ? "s" : ""}`}
          >
            <Star
              className={`w-${size} h-${size} ${
                active
                  ? "fill-primary text-primary drop-shadow-[0_0_6px_hsl(var(--neon-cyan)/0.8)]"
                  : "text-muted-foreground/40"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};

const Testimonials = () => {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [submitting, setSubmitting] = useState(false);

  const load = async () => {
    const { data, error } = await supabase
      .from("testimonials")
      .select("id, name, message, rating, created_at")
      .order("created_at", { ascending: false });
    if (!error && data) setItems(data as Testimonial[]);
  };

  useEffect(() => {
    load();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedMessage = message.trim();
    if (!trimmedName || !trimmedMessage) {
      toast({ title: "Preencha todos os campos", variant: "destructive" });
      return;
    }
    if (trimmedName.length > 100 || trimmedMessage.length > 1000) {
      toast({ title: "Texto muito longo", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("testimonials").insert({
      name: trimmedName,
      message: trimmedMessage,
      rating,
    });
    setSubmitting(false);
    if (error) {
      toast({ title: "Erro ao enviar", description: error.message, variant: "destructive" });
      return;
    }
    toast({
      title: "Depoimento enviado!",
      description: "Obrigado! Após aprovação ele aparecerá aqui no site.",
    });
    setName("");
    setMessage("");
    setRating(5);
  };

  return (
    <section id="depoimentos" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] mb-3">DEPOIMENTOS</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            O que dizem <span className="text-neon">nossos clientes</span>
          </h2>
        </div>

        {items.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {items.map((t) => (
              <div
                key={t.id}
                className="relative p-8 rounded-2xl border border-primary/40 bg-card transition-smooth hover:border-primary hover:-translate-y-1 hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.4)]"
                style={{ background: "var(--gradient-card)" }}
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/30" />
                <StarRating value={t.rating} />
                <p className="mt-4 mb-6 text-foreground/90 leading-relaxed italic">
                  "{t.message}"
                </p>
                <p className="font-semibold text-neon">{t.name}</p>
              </div>
            ))}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto p-8 rounded-2xl border border-primary/40 bg-card shadow-[0_0_30px_hsl(var(--neon-cyan)/0.2)]"
          style={{ background: "var(--gradient-card)" }}
        >
          <h3 className="text-2xl font-bold mb-2 text-center">
            Deixe seu <span className="text-neon">depoimento</span>
          </h3>
          <p className="text-muted-foreground text-center mb-6 text-sm">
            Após aprovação, seu depoimento será exibido publicamente.
          </p>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Nome</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
                maxLength={100}
                required
                className="bg-background/60 border-primary/30 focus-visible:ring-primary"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Depoimento</label>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Conte sua experiência com a Luver Tech..."
                maxLength={1000}
                required
                rows={4}
                className="bg-background/60 border-primary/30 focus-visible:ring-primary resize-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Avaliação</label>
              <StarRating value={rating} onChange={setRating} interactive size={8} />
            </div>

            <Button type="submit" variant="neon" size="xl" className="w-full" disabled={submitting}>
              <Send className="mr-2" /> {submitting ? "Enviando..." : "Enviar depoimento"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Testimonials;
