import { getCollections, getProducts } from 'lib/shopify';
import { Suspense } from 'react';
import HomePageWrapper from '../components/pages/home-wrapper';

export const metadata = {
  description: 'Torréfaction artisanale corse depuis 1932.',
  openGraph: {
    type: 'website'
  }
};

// Désactiver complètement le cache pour cette page
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export default async function Page() {
  try {
    const [products, allCollections] = await Promise.all([
      getProducts({
        sortKey: 'CREATED_AT',
        reverse: true
      }),
      getCollections()
    ]);

    console.log('=== DEBUG COLLECTIONS ===');
    console.log('Données brutes des collections:', JSON.stringify(allCollections, null, 2));
    console.log('Nombre total de collections:', allCollections.length);
    allCollections.forEach((collection, index) => {
      console.log(`Collection ${index + 1}:`, {
        handle: collection.handle,
        title: collection.title,
        description: collection.description,
        path: collection.path,
        updatedAt: collection.updatedAt
      });
    });

    // Filtrer pour ne garder que les collections valides
    const collections = allCollections.filter(collection => {
      const isValid = collection.handle !== '' && 
                     !collection.handle.startsWith('hidden') &&
                     collection.handle !== 'frontpage';
      
      // Log pour le débogage du filtrage
      console.log(`Collection "${collection.handle}": ${isValid ? 'gardée' : 'filtrée'}`);
      
      return isValid;
    });
    
    console.log('=== COLLECTIONS FILTRÉES ===');
    console.log('Nombre de collections après filtrage:', collections.length);
    collections.forEach((collection, index) => {
      console.log(`Collection filtrée ${index + 1}:`, {
        handle: collection.handle,
        title: collection.title,
        description: collection.description,
        path: collection.path,
        updatedAt: collection.updatedAt
      });
    });

    // Vérifier spécifiquement la collection nos-thes
    const thesCollection = allCollections.find(c => c.handle === 'nos-thes');
    if (thesCollection) {
      console.log('=== COLLECTION NOS-THES TROUVÉE ===', thesCollection);
    } else {
      console.log('Collection nos-thes non trouvée dans les données');
    }

    return (
      <Suspense>
        <HomePageWrapper products={products} collections={collections} />
      </Suspense>
    );
  } catch (error: any) {
    console.error('Erreur lors de la récupération des collections:', error);
    if (error instanceof Error) {
      console.error('Détails de l\'erreur:', {
        message: error.message,
        stack: error.stack
      });
    }
    // En cas d'erreur, on retourne un tableau vide pour les collections
    const products = await getProducts({
      sortKey: 'CREATED_AT',
      reverse: true
    });
    return (
      <Suspense>
        <HomePageWrapper products={products} collections={[]} />
      </Suspense>
    );
  }
}
