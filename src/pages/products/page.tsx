import Products from '../../components/products/Products'
import { Grid } from '@mui/material'
import { styled } from '@mui/system'

const Container = styled('div')({
  paddingTop: 4,
  paddingBottom: 4,
})

const ProductsPage = () => {
  return (
    <Products />
    // <Container>
    //   <Grid container justifyContent="center">
    //     <Grid item xs={12} sm={8} md={6}>
    //       <h1>안녕하세요</h1>
    //       <Products />
    //     </Grid>
    //   </Grid>
    // </Container>
  )
}

export default ProductsPage
