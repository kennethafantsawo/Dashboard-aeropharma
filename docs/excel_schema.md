# Schéma des Fichiers Excel pour l'Importation

Ce document décrit la structure des fichiers Excel (.xlsx) à utiliser pour importer les données dans l'application PharmaBoard. Chaque section correspond à une feuille de calcul ou à un fichier distinct.

## 1. Recettes

Nom du fichier/feuille : `recettes.xlsx`

| Nom de la colonne | Type de données | Description | Exemple |
|---|---|---|---|
| `date` | Date (AAAA-MM-JJ) | La date à laquelle la recette a été enregistrée. | 2023-10-27 |
| `recette_brute` | Nombre | Le montant total brut encaissé (comptant + part assurée). | 1500000 |
| `tiers_payant` | Nombre | La part prise en charge par les assurances. | 450000 |
| `credit` | Nombre | Le montant total des ventes à crédit. | 75000 |
| `remise` | Nombre | Le montant total des remises accordées. | 12000 |

## 2. Fournisseurs & Commandes

Nom du fichier/feuille : `commandes.xlsx`

| Nom de la colonne | Type de données | Description | Exemple |
|---|---|---|---|
| `date_commande` | Date (AAAA-MM-JJ) | La date de la commande. | 2023-10-26 |
| `nom_fournisseur` | Texte | Le nom du fournisseur ou grossiste. | LABOREX |
| `montant_commande` | Nombre | Le montant total de la commande. | 2500000 |
| `statut_facture` | Texte ('Payée' ou 'Non payée') | Le statut du paiement de la facture associée. | Non payée |
| `date_paiement` | Date (AAAA-MM-JJ) | La date de paiement de la facture (laisser vide si non payée). | |

## 3. Retours Fournisseurs

Nom du fichier/feuille : `retours.xlsx`

| Nom de la colonne | Type de données | Description | Exemple |
|---|---|---|---|
| `date_retour` | Date (AAAA-MM-JJ) | La date du retour produit. | 2023-10-25 |
| `nom_fournisseur` | Texte | Le nom du fournisseur concerné par le retour. | COPHARM |
| `montant_retour` | Nombre | La valeur des produits retournés. | 55000 |

## 4. Consommation DCSSA & Koundjouré

Nom du fichier/feuille : `dcssa_koundjoure.xlsx`

| Nom de la colonne | Type de données | Description | Exemple |
|---|---|---|---|
| `date_consommation` | Date (AAAA-MM-JJ) | Le mois de la consommation (utiliser le 1er du mois). | 2023-10-01 |
| `service` | Texte ('DCSSA' ou 'Koundjouré') | Le service qui a consommé le crédit. | DCSSA |
| `montant` | Nombre | Le montant total de la consommation pour le mois. | 800000 |

## 5. Consommation Implants

Nom du fichier/feuille : `implants.xlsx`

| Nom de la colonne | Type de données | Description | Exemple |
|---|---|---|---|
| `date_consommation` | Date (AAAA-MM-JJ) | Le mois de la consommation (utiliser le 1er du mois). | 2023-09-01 |
| `nom_fournisseur` | Texte | Le fournisseur des implants. | Implantix |
| `montant` | Nombre | Le montant total de la consommation pour le mois. | 1200000 |

## 6. Assurances

Nom du fichier/feuille : `assurances.xlsx`

| Nom de la colonne | Type de données | Description | Exemple |
|---|---|---|---|
| `date_operation` | Date (AAAA-MM-JJ) | Le mois de l'opération (utiliser le 1er du mois). | 2023-10-01 |
| `nom_assurance` | Texte | Le nom de la compagnie d'assurance. | Allianz |
| `type_operation` | Texte ('Consommation' ou 'Rejet') | Indique s'il s'agit d'une consommation ou d'un rejet. | Consommation |
| `montant` | Nombre | Le montant de l'opération. | 320000 |
