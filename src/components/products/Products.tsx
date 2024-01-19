import { Grid } from '@mui/material';
import productsData from '../../data/products.json';
import { IProduct, IProductData, IProductItem } from '../../data/products/IProduct';
import ProductCard from './ProductCard';

export default function Products() {
  const productDataItemList = productsData.data.item_list as unknown as IProductItem[];

  return (
    <Grid container spacing={2} sx={{ p: 4 }}>
      {productDataItemList.map(({ shop, product }, index) => (
        <Grid item xs={4} key={index}>
          <ProductCard
            key={index}
            imageUrl={product.image_url}
            sellerName={shop.name}
            productName={product.title}
            originPrice={product.max_price_with_currency.price_without_decimal}
            discountRate={product.discount_rate}
            discountTitle={product.discount_info?.title}
            discountColor={product.discount_info?.color}
            finalPrice={product.final_price}
            badgeList={product.badge_list}
            reviewScore={product.review_score}
            reviewCount={product.review_count}
          />
        </Grid>
      ))}
    </Grid>

  );
}