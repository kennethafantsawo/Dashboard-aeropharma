-- 1. Table pour les Fournisseurs
CREATE TABLE IF NOT EXISTS public.fournisseurs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nom TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 2. Table pour les Recettes
CREATE TABLE IF NOT EXISTS public.recettes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  date DATE NOT NULL,
  recette_brute NUMERIC(15, 2) NOT NULL,
  tiers_payant NUMERIC(15, 2) NOT NULL,
  credit NUMERIC(15, 2) NOT NULL,
  remise NUMERIC(15, 2) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 3. Table pour les Compagnies d'Assurance
CREATE TABLE IF NOT EXISTS public.assurances (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nom TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 4. Table pour les Commandes Fournisseurs
CREATE TABLE IF NOT EXISTS public.commandes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  date_commande DATE NOT NULL,
  fournisseur_id UUID REFERENCES public.fournisseurs(id) ON DELETE SET NULL,
  montant_commande NUMERIC(15, 2) NOT NULL,
  statut_facture TEXT CHECK (statut_facture IN ('Payée', 'Non payée')) NOT NULL,
  date_paiement DATE,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 5. Table pour les Retours Fournisseurs
CREATE TABLE IF NOT EXISTS public.retours_fournisseurs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  date_retour DATE NOT NULL,
  fournisseur_id UUID REFERENCES public.fournisseurs(id) ON DELETE SET NULL,
  montant_retour NUMERIC(15, 2) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 6. Table pour la consommation DCSSA & Koundjouré
CREATE TABLE IF NOT EXISTS public.consommation_dcssa (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  date_consommation DATE NOT NULL,
  service TEXT CHECK (service IN ('DCSSA', 'Koundjouré')) NOT NULL,
  montant NUMERIC(15, 2) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 7. Table pour la consommation Implants
CREATE TABLE IF NOT EXISTS public.consommation_implants (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  date_consommation DATE NOT NULL,
  fournisseur_id UUID REFERENCES public.fournisseurs(id) ON DELETE SET NULL,
  montant NUMERIC(15, 2) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 8. Table pour les opérations d'assurance (Consommations & Rejets)
CREATE TABLE IF NOT EXISTS public.operations_assurances (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  date_operation DATE NOT NULL,
  assurance_id UUID REFERENCES public.assurances(id) ON DELETE SET NULL,
  type_operation TEXT CHECK (type_operation IN ('Consommation', 'Rejet')) NOT NULL,
  montant NUMERIC(15, 2) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);


-- ========== POLITIQUES DE SÉCURITÉ (ROW LEVEL SECURITY - RLS) ==========

-- Supprimer les anciennes politiques si elles existent, pour éviter les conflits
DROP POLICY IF EXISTS "Allow all for authenticated users" ON public.fournisseurs;
DROP POLICY IF EXISTS "Enable all access for anonymous users" ON public.fournisseurs;
DROP POLICY IF EXISTS "Allow all for authenticated users" ON public.recettes;
DROP POLICY IF EXISTS "Enable all access for anonymous users" ON public.recettes;
DROP POLICY IF EXISTS "Allow all for authenticated users" ON public.assurances;
DROP POLICY IF EXISTS "Enable all access for anonymous users" ON public.assurances;
DROP POLICY IF EXISTS "Allow all for authenticated users" ON public.commandes;
DROP POLICY IF EXISTS "Enable all access for anonymous users" ON public.commandes;
DROP POLICY IF EXISTS "Allow all for authenticated users" ON public.retours_fournisseurs;
DROP POLICY IF EXISTS "Enable all access for anonymous users" ON public.retours_fournisseurs;
DROP POLICY IF EXISTS "Allow all for authenticated users" ON public.consommation_dcssa;
DROP POLICY IF EXISTS "Enable all access for anonymous users" ON public.consommation_dcssa;
DROP POLICY IF EXISTS "Allow all for authenticated users" ON public.consommation_implants;
DROP POLICY IF EXISTS "Enable all access for anonymous users" ON public.consommation_implants;
DROP POLICY IF EXISTS "Allow all for authenticated users" ON public.operations_assurances;
DROP POLICY IF EXISTS "Enable all access for anonymous users" ON public.operations_assurances;


-- Activer RLS pour chaque table (si ce n'est pas déjà fait)
ALTER TABLE public.fournisseurs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.recettes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assurances ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.commandes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.retours_fournisseurs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.consommation_dcssa ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.consommation_implants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.operations_assurances ENABLE ROW LEVEL SECURITY;

-- Créer des politiques permissives, car l'accès est déjà sécurisé par le login de l'application.
-- Ceci autorise les opérations via la clé 'anon' utilisée par l'application.
CREATE POLICY "Enable all access for anonymous users" ON public.fournisseurs FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Enable all access for anonymous users" ON public.recettes FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Enable all access for anonymous users" ON public.assurances FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Enable all access for anonymous users" ON public.commandes FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Enable all access for anonymous users" ON public.retours_fournisseurs FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Enable all access for anonymous users" ON public.consommation_dcssa FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Enable all access for anonymous users" ON public.consommation_implants FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Enable all access for anonymous users" ON public.operations_assurances FOR ALL USING (true) WITH CHECK (true);
