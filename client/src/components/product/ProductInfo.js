import React, {useState,useEffect} from 'react';
import {Container, Box, Typography, Button,Card, CardMedia,CardContent,Rating  } from '@mui/material/';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import Skeleton from '@mui/material/Skeleton';
import { makeStyles, } from "@material-ui/core/styles";
import {useDispatch} from 'react-redux';
import {addCart}  from '../../redux/action';
const {getProductDetailsData} = require('../../DAL/DAL');

const ProductInfo = () => {
  const [rating, setRating] = useState(2);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const styles = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addProduct = (product)=>{
    dispatch(addCart(product));
  }
    
  useEffect(()=>{
    const source=axios.CancelToken.source();
    const getProductDetails =async ()=>{
      setLoading(true);
      try{
        // const prodcutDetails = await axios.get(`https://fakestoreapi.com/products/${params.id}`,{
        //   cancelToken: source.token,
        // });
        const productDetails = await getProductDetailsData(source, params.id);
        // console.log('productDetails', productDetails)
        setProduct(productDetails.data);
        setLoading(false);
      }catch(error){
        if(axios.isCancel(error)){
          console.log('caught cancel axios', error);
        }else{
          console.log('there was an error: ', error);
        }   
      }
    }
    getProductDetails();
    return ()=>{
      source.cancel();
    }
  },[]);
  const Loading=()=>{
    return(
    <>
      Loading...
      <Box sx={{display:'flex', flexDirection:{xs:'column', sm:'row'}, justifyContent:'center'}} >
        <Box paddingRight='30px'>      
          <Skeleton height={600} width={500} /> 
        </Box>   
        <Box msx={{mt:2}} width={800}>
          <Skeleton height={45} width={200} /> 
          <Skeleton height={75} /> 
          <Skeleton height={25} width={80} /> 
          <Skeleton height={25} width={150} /> 
          <Skeleton height={45} width={150} /> 
          <Skeleton height={250}  />
          <Box display='flex' flexDirection='row'>
            <Skeleton height={50} width={130} sx={{marginRight:1}}/>  
            <Skeleton height={50} width={130} />  
          </Box>
        </Box>
      </Box>
    </>)
  }

  const routeChange=()=>{
    let path = `/cart`; 
    navigate(path);
  }
  const goToProducts=()=>{
    let path = '/products';
    navigate(path);
  }


  return (
    <div >
    {loading ? <Loading/> :
      <Container maxWidth={false} className={styles.productContainer}>
        <Card  className={styles.card} sx={{display:'flex', flexDirection:{xs:'column', sm:'row'}, justifyContent:'center'}}>
          <CardMedia 
          className={styles.media}
          component="img"
          image={product.image}
          alt={product.title}
          />
          <CardContent sx={{flexGrow:1, m:2, }}>
            <Typography variant="h5" color="text.secondary" sx={{textTransform: 'uppercase'}}>
              {product.category}
            </Typography>
            <Typography variant="h2" color="text.secondary" sx={{fontSize:{xs: '2rem', sm:'4rem'}}}>
              {product.title}
            </Typography>
            <Typography component="legend">Rating</Typography>
            <Rating
              name="simple-controlled"
              value={product.rating && product.rating.rate}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
            <Typography sx={{py:2, fontSize:{xs:'25px', sm:'40px'}, fontWeight:'bold'}}>
              $ {product.price}
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{my:1}}>
              {product.description}
            </Typography>
            <Box sx={{display:'flex', justifyContent: 'flex-start', alignSelf: 'flex-end', flexWrap:'wrap', mt:15 }}>
              <Button variant="contained" sx={{m:0.5, flexGrow:1}} onClick={()=>addProduct(product)}>Add to Cart</Button>
              <Button variant="contained" sx={{m:0.5, flexGrow:1}} onClick={() => routeChange()}>Go to Cart</Button>
              <Button variant="contained" sx={{display:{xs:'flex', md:'none'}, m:0.5, flexGrow:1}} onClick={() => goToProducts()}>Continue Shopping</Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
      } 
    </div>
  );
};

export default ProductInfo;

const useStyles = makeStyles({
  productContainer: {    
    // boxShadow: '0 3px 3px 3px rgba(194, 202, 208,  .3)',
    // marginTop:'105px',
    width: '90%'
  },
  card:{
    display: 'flex',
    width: '100%',
    margin: '0px',
    padding: '10px',
    marginTop: '70px'
  },
  media:{
    maxHeight: '500px',     // as an example I am modifying width and height
    width: '60%',
    margin: '5%',
    objectFit: 'contain',
    alignSelf: 'center'
  },
});
