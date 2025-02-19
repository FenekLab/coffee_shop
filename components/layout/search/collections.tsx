import { getCollections } from 'lib/shopify';
import { PathFilterItem } from './filter/item';

async function CollectionList() {
  const collections = await getCollections();
  return (
    <ul className="space-y-2">
      {collections.map((collection) => (
        <PathFilterItem
          key={collection.handle}
          item={{
            title: collection.title,
            path: collection.path
          }}
        />
      ))}
    </ul>
  );
}

export default function Collections() {
  return (
    <div className="relative">
      <CollectionList />
    </div>
  );
}
