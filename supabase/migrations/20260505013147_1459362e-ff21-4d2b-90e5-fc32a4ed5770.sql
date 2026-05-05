
CREATE TABLE public.testimonials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  message TEXT NOT NULL,
  rating SMALLINT NOT NULL,
  approved BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view approved testimonials"
  ON public.testimonials FOR SELECT
  USING (approved = true);

CREATE POLICY "Anyone can submit a testimonial"
  ON public.testimonials FOR INSERT
  WITH CHECK (
    char_length(name) BETWEEN 1 AND 100
    AND char_length(message) BETWEEN 1 AND 1000
    AND rating BETWEEN 1 AND 5
  );

CREATE INDEX idx_testimonials_approved_created
  ON public.testimonials(approved, created_at DESC);
