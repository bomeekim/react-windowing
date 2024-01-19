export interface IProductData {
  data: {
    item_list: IProductItem[]
  }
}

export interface IProductItem {
  shop: IProductShop
  product: IProduct
}

export interface IProductBadgeList {
  image_url: string
  dark_image_url: string
  small_image_url: string
  small_dark_image_url: string
  type: string // ENUM : FREE_SHIPPING
}

export interface IProduct {
  image_url: string
  webp_image_url: string
  product_url: string
  title: string
  discount_rate: number
  free_shipping: boolean
  zpay: boolean
  has_coupon: boolean
  price: number
  final_price: number
  final_price_with_currency: {
    currency: string
    decimal: number
    price_without_decimal: number
    display_currency: string
    is_currency_prefix: boolean
  },
  max_price_with_currency: {
    currency: string
    decimal: number
    price_without_decimal: number
    display_currency: string
    is_currency_prefix: boolean
  },
  is_zpay_discount: boolean
  catalog_product_id: string
  browsing_type: string
  review_count: number
  review_score:number
  shop_product_no: number
  shop_id: string
  is_zonly: boolean
  is_brand: boolean
  sellable_status: string // ENUM : ON_SALE
  discount_info: {
    image_url: string
    title: string
    color: string
    issue_end_date: string
  },
  badge_list: IProductBadgeList[],
  brand_name_badge_list: IProductBadgeList[],
  thumbnail_nudge_badge_list: any[],
  thumbnail_emblem_badge_list: any[]
}

export interface IProductShop {
  id: string
  name: string
}