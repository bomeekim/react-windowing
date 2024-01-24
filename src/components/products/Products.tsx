import { Grid, Skeleton, GridProps } from '@mui/material'
import productsData from '../../data/products.json'
import { IProductItem } from '../../data/products/IProduct'
import ProductCard from './ProductCard'
import { useMemo } from 'react'
import { VirtuosoGrid } from 'react-virtuoso'
import styled from '@emotion/styled'

export default function Products() {
  const productDataItemList = useMemo(
    () => productsData.data.item_list as unknown as IProductItem[],
    [],
  )

  const ItemContainer = styled.div`
    display: flex;
    flex: none;
  `

  const ListContainer = styled.div`
    padding: 0px 16px 32px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px 8px;
  `

  const ItemWrapper = styled.div`
    flex: 1;
  `

  const computeItemKey = (index: number) => `item-${index}`

  return (
    <>
      <VirtuosoGrid
        style={{ overflow: 'auto' }}
        totalCount={productDataItemList.length}
        overscan={20}
        components={{
          Item: ItemContainer,
          // TODO ts error
          // @ts-ignore
          List: ListContainer,
          // ScrollSeekPlaceholder: () => (
          //   <ItemContainer>
          //     <ItemWrapper>
          //       <Skeleton variant="rectangular" />
          //     </ItemWrapper>
          //   </ItemContainer>
          // )
        }}
        itemContent={(index) => {
          const productItem = productDataItemList[index]
          const { shop, product } = productItem
          return (
            <ItemWrapper>
              <ProductCard
                key={index}
                imageUrl={product.webp_image_url}
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
            </ItemWrapper>
          )
        }}
      />
    </>
  )
}
