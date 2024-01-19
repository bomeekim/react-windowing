import Products from '../../components/products/Products';
import { Grid } from '@mui/material';
import { styled } from '@mui/system';

const Container = styled('div')({
  paddingTop: 4,
  paddingBottom: 4,
});

const Paper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 3,
});

const ProductsPage = () => {

  return(
    <Container>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <Products />
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProductsPage