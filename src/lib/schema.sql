-- Schéma SQL pour l'application PharmaBoard
-- Ce script est destiné à être utilisé avec le SQL Editor de Supabase.

-- 1. Table des Fournisseurs
-- Stocke les informations sur les grossistes et fournisseurs.
CREATE TABLE fournisseurs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nom TEXT NOT NULL UNIQUE,
  cree_a TIMESTAMPTZ DEFAULT now()
);

-- 2. Table des Assurances
-- Stocke les informations sur les compagnies d'assurance.
CREATE TABLE assurances (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nom TEXT NOT NULL UNIQUE,
  cree_a TIMESTAMPTZ DEFAULT now()
);

-- 3. Table des Recettes
-- Enregistre les recettes quotidiennes détaillées.
CREATE TABLE recettes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  date DATE NOT NULL UNIQUE,
  recette_brute NUMERIC NOT NULL DEFAULT 0,
  tiers_payant NUMERIC NOT NULL DEFAULT 0,
  credit NUMERIC NOT NULL DEFAULT 0,
  remise NUMERIC NOT NULL DEFAULT 0,
  cree_a TIMESTAMPTZ DEFAULT now()
);

-- 4. Table des Commandes Fournisseurs
-- Suit les commandes passées aux fournisseurs.
CREATE TABLE commandes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  fournisseur_id UUID REFERENCES fournisseurs(id) ON DELETE CASCADE,
  date_commande DATE NOT NULL DEFAULT CURRENT_DATE,
  montant NUMERIC NOT NULL,
  cree_a TIMESTAMPTZ DEFAULT now()
);

-- 5. Table des Factures Fournisseurs
-- Suit les factures des fournisseurs et leur statut de paiement.
CREATE TABLE factures (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  fournisseur_id UUID REFERENCES fournisseurs(id) ON DELETE CASCADE,
  numero_facture TEXT,
  date_facture DATE NOT NULL,
  montant NUMERIC NOT NULL,
  statut TEXT NOT NULL DEFAULT 'non payée' CHECK (statut IN ('payée', 'non payée')),
  cree_a TIMESTAMPTZ DEFAULT now()
);

-- 6. Table des Retours Fournisseurs
-- Enregistre les produits retournés aux fournisseurs.
CREATE TABLE retours_fournisseur (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  fournisseur_id UUID REFERENCES fournisseurs(id) ON DELETE CASCADE,
  date_retour DATE NOT NULL,
  montant NUMERIC NOT NULL,
  cree_a TIMESTAMPTZ DEFAULT now()
);

-- 7. Table de Consommation DCSSA
-- Suit les consommations à crédit pour les services DCSSA et Koundjouré.
CREATE TABLE consommation_dcssa (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  service TEXT NOT NULL CHECK (service IN ('DCSSA', 'Koundjouré')),
  date DATE NOT NULL,
  montant NUMERIC NOT NULL,
  cree_a TIMESTAMPTZ DEFAULT now()
);

-- 8. Table de Consommation des Implants
-- Suit la consommation mensuelle d'implants par fournisseur.
CREATE TABLE consommation_implants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  fournisseur_id UUID REFERENCES fournisseurs(id) ON DELETE SET NULL,
  date DATE NOT NULL,
  montant NUMERIC NOT NULL,
  cree_a TIMESTAMPTZ DEFAULT now()
);

-- 9. Table de Consommation par Assurance
-- Suit le montant consommé par chaque compagnie d'assurance.
CREATE TABLE consommation_assurance (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  assurance_id UUID REFERENCES assurances(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  montant NUMERIC NOT NULL,
  cree_a TIMESTAMPTZ DEFAULT now()
);

-- 10. Table des Rejets et Pertes
-- Enregistre les pertes et les rejets des assurances.
CREATE TABLE rejets_pertes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  assurance_id UUID REFERENCES assurances(id) ON DELETE SET NULL, -- Peut être nul pour les pertes générales
  type TEXT NOT NULL CHECK (type IN ('Rejet', 'Perte')),
  date DATE NOT NULL,
  montant NUMERIC NOT NULL,
  description TEXT,
  cree_a TIMESTAMPTZ DEFAULT now()
);


-- Activation de la sécurité au niveau des lignes (RLS) pour toutes les tables.
-- C'est une bonne pratique de sécurité avec Supabase.
-- Par défaut, personne ne peut accéder aux données.
-- Vous devrez ensuite définir des politiques pour autoriser l'accès.

ALTER TABLE fournisseurs ENABLE ROW LEVEL SECURITY;
ALTER TABLE assurances ENABLE ROW LEVEL SECURITY;
ALTER TABLE recettes ENABLE ROW LEVEL SECURITY;
ALTER TABLE commandes ENABLE ROW LEVEL SECURITY;
ALTER TABLE factures ENABLE ROW LEVEL SECURITY;
ALTER TABLE retours_fournisseur ENABLE ROW LEVEL SECURITY;
ALTER TABLE consommation_dcssa ENABLE ROW LEVEL SECURITY;
ALTER TABLE consommation_implants ENABLE ROW LEVEL SECURITY;
ALTER TABLE consommation_assurance ENABLE ROW LEVEL SECURITY;
ALTER TABLE rejets_pertes ENABLE ROW LEVEL SECURITY;

-- Politiques RLS
-- Pour l'instant, on autorise les utilisateurs authentifiés à tout faire.
-- Vous pouvez affiner ces règles pour plus de granularité.

-- Fournisseurs
CREATE POLICY "Les utilisateurs authentifiés peuvent tout faire sur les fournisseurs"
ON fournisseurs
FOR ALL
USING (auth.role() = 'authenticated')
WITH CHECK (auth.role() = 'authenticated');

-- Assurances
CREATE POLICY "Les utilisateurs authentifiés peuvent tout faire sur les assurances"
ON assurances
FOR ALL
USING (auth.role() = 'authenticated')
WITH CHECK (auth.role() = 'authenticated');

-- Recettes
CREATE POLICY "Les utilisateurs authentifiés peuvent tout faire sur les recettes"
ON recettes
FOR ALL
USING (auth.role() = 'authenticated')
WITH CHECK (auth.role() = 'authenticated');

-- Commandes
CREATE POLICY "Les utilisateurs authentifiés peuvent tout faire sur les commandes"
ON commandes
FOR ALL
USING (auth.role() = 'authenticated')
WITH CHECK (auth.role() = 'authenticated');

-- Factures
CREATE POLICY "Les utilisateurs authentifiés peuvent tout faire sur les factures"
ON factures
FOR ALL
USING (auth.role() = 'authenticated')
WITH CHECK (auth.role() = 'authenticated');

-- Retours Fournisseur
CREATE POLICY "Les utilisateurs authentifiés peuvent tout faire sur les retours"
ON retours_fournisseur
FOR ALL
USING (auth.role() = 'authenticated')
WITH CHECK (auth.role() = 'authenticated');

-- Consommation DCSSA
CREATE POLICY "Les utilisateurs authentifiés peuvent tout faire sur la consommation dcssa"
ON consommation_dcssa
FOR ALL
USING (auth.role() = 'authenticated')
WITH CHECK (auth.role() = 'authenticated');

-- Consommation Implants
CREATE POLICY "Les utilisateurs authentifiés peuvent tout faire sur la consommation implants"
ON consommation_implants
FOR ALL
USING (auth.role() = 'authenticated')
WITH CHECK (auth.role() = 'authenticated');

-- Consommation Assurance
CREATE POLICY "Les utilisateurs authentifiés peuvent tout faire sur la consommation assurance"
ON consommation_assurance
FOR ALL
USING (auth.role() = 'authenticated')
WITH CHECK (auth.role() = 'authenticated');

-- Rejets et Pertes
CREATE POLICY "Les utilisateurs authentifiés peuvent tout faire sur les rejets et pertes"
ON rejets_pertes
FOR ALL
USING (auth.role() = 'authenticated')
WITH CHECK (auth.role() = 'authenticated');
