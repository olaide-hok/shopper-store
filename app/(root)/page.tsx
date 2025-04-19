import ProductList from '@/components/shared/product/product-list';
import {getLatestProducts} from '@/lib/actions/product.actions';

export default async function Homepage() {
    const latestProducts = await getLatestProducts();
    return (
        <div className="">
            <ProductList
                data={latestProducts}
                title="Newest Arrivals"
                limit={4}
            />
        </div>
    );
}
