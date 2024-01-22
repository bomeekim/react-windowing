import { Card, CardMedia, Typography, CardContent, Box } from '@mui/material';
import { IProductBadgeList } from '../../data/products/IProduct';
import { priceWithComma } from '../../helper/number.helper';
import StarIcon from '@mui/icons-material/Star';

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
      <CardContent sx={{ padding: '8px 4px 0 0', display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <Typography variant="caption" display="block" fontWeight="bold">
          {props.sellerName}
        </Typography>
        <Typography
          sx={{
            fontSize: '12px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2, // 원하는 줄 수로 설정
          }}
        >
          {props.productName}
        </Typography>
        <Box display="flex" flexDirection="column">
          {props.originPrice !== 0 &&
            <Box display="flex" alignItems="center">
              <Typography sx={{ fontSize: '12px', fontWeight: 'bold', color: props.discountColor, marginRight: '4px' }}>{props.discountTitle}</Typography>
              <Typography sx={{ fontSize: '12px', textDecoration: 'line-through' }} color="text.secondary">{priceWithComma(props.originPrice)}</Typography>
            </Box>
          }
          <Box display="flex" alignItems="center">
            {props.discountRate !== 0 &&
              <Typography fontSize="16px" lineHeight="18px" fontWeight={600} mr="4px" color={props.discountColor}>{props.discountRate}%</Typography>
            }
            <Typography fontSize="16px" lineHeight="18px" fontWeight={600}>{priceWithComma(props.finalPrice)}</Typography>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" gap="2px">
          {props.badgeList.map((badge, index) => {
            return (
              <img src={badge.image_url} key={index} height={14} alt="badge"/>
            )
          })}
        </Box>
        <Box display="flex">
          <Box display="flex" alignItems="center">
            <StarIcon sx={{ fontSize: '12px', mb: '2px' }}/>
            <Typography variant="caption" fontWeight={500} color="#697175">
              {props.reviewScore}
            </Typography>
          </Box>
          <Typography variant="caption" fontWeight={500} color="#a1a9ad">({props.reviewCount})</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}