import { Card, CardActionArea, CardMedia, Typography, CardContent, Box } from '@mui/material';
import { IProductBadgeList } from '../../data/products/IProduct';
import { priceWithComma } from '../../helper/number.helper';

interface IProductCard {
  imageUrl: string
  sellerName: string
  productName: string
  originPrice: number
  discountRate: number
  discountTitle: string
  discountColor: string
  finalPrice: number
  badgeList: IProductBadgeList[]
  reviewScore: number
  reviewCount: number
}

export default function ProductCard (props: IProductCard) {
  return (
    <Card elevation={0} sx={{ cursor: 'pointer' }}>
      <CardMedia
        component="img"
        height="100%"
        image={props.imageUrl}
        sx={{ borderRadius: '10px' }}
      />
      <CardContent sx={{ padding: '8px 4px 4px 0' }}>
        <Typography variant="caption" display="block" fontWeight="bold">
          {props.sellerName}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2, // 원하는 줄 수로 설정
          }}
        >
          {props.productName}
        </Typography>
        {props.originPrice !== 0 &&
          <Box display="flex" alignItems="center">
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: props.discountColor, marginRight: '4px' }}>{props.discountTitle}</Typography>
            <Typography variant="subtitle2" sx={{ textDecoration: 'line-through' }} color="text.secondary">{priceWithComma(props.originPrice)}</Typography>
          </Box>
        }
        <Box display="flex" alignItems="center">
          {props.discountRate !== 0 &&
            <Typography  variant="subtitle1" fontWeight={600} mr="4px" color={props.discountColor}>{props.discountRate}%</Typography>
          }
          <Typography  variant="subtitle1"  fontWeight={600}>{priceWithComma(props.finalPrice)}</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}