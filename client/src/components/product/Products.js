import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Container, Box, Typography, Divider,Button,Grid,InputBase } from '@mui/material/';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import {styled, createTheme, ThemeProvider, alpha} from '@mui/material/styles';
import Skeleton from '@mui/material/Skeleton';
import {useNavigate} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { nanoid } from 'nanoid'
const greenColor = '#afd275';

const {getProductDetailsData, getProductsData} = require('../../DAL/DAL');

const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const [filterData, setFilterData] = useState(productsData);
  const [loading, setLoading] = useState(true);
  const [spacing, setSpacing] = React.useState(2);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    const source=axios.CancelToken.source();
    // ref.StyledInputBase.focus();
    const getProducts=async()=>{
      setLoading(true);
      try{
        const products = await getProductsData(source);
        // console.log('products ', products)
        setProductsData(products.data);
        setFilterData(products.data);
        setLoading(false);
      }catch(error){
        if(axios.isCancel(error)){
          console.log('caught cancel axios', error);
        }else{
          console.log('there was an error: ', error);
        }        
      }
    }

    getProducts();
    return ()=>{
      source.cancel();
    }
  },[]);

  const Loading=()=>{
    return(
    <Box sx={{display:'flex', justifyContent:"center", flexWrap: 'wrap',flexDirection:{xs:'column', sm:'row'} }}>
      {/* <Box sx={{mx:1}}>
        <Typography> Loading...</Typography>
      </Box> */}
      <Box sx={{mx:1}}>
        <Skeleton height={450} width={250} /> 
      </Box>  
      <Box sx={{mx:1}}>
        <Skeleton height={450} width={250}/>
      </Box>  
      <Box sx={{mx:1}}>
        <Skeleton height={450} width={250}/>
      </Box>  
      <Box sx={{mx:1}}>
        <Skeleton height={450} width={250}/>
      </Box>
      <Box sx={{mx:1}}>
        <Skeleton height={450} width={250} /> 
      </Box>  
      <Box sx={{mx:1}}>
        <Skeleton height={450} width={250}/>
      </Box>  
      <Box sx={{mx:1}}>
        <Skeleton height={450} width={250}/>
      </Box>  
      <Box sx={{mx:1}}>
        <Skeleton height={450} width={250}/>
      </Box>  
    </Box>)
  }
  const filterProducts=(filterstring)=>{
    const filteredData = productsData.filter((product)=>{
      return product.category === filterstring;
    })
    setFilterData(filteredData);
  }
  const routeChange=(prodId)=>{
    // console.log('prodId', prodId)
    let path = `/v3/products/${prodId}`; 
    navigate(path);
    // history.push(path);
  }

  const ShowProducts=()=>{
    return(
      <ThemeProvider theme={icommerce}>
      <Container maxWidth={false} sx={{display:'flex', justifyContent:"center", flexDirection:'column', width:'1800px'}}>
        <Container maxWidth={false} sx={{display:'flex', justifyContent:"space-around", flexWrap: 'wrap'}}>
          <CustomizedButton variant="outlined" sx={{border:'1px solid #afd275', m:0.5}} onClick={()=>setFilterData(productsData)}>All</CustomizedButton>
          <CustomizedButton variant="outlined" sx={{border:'1px solid #afd275', m:0.5}} onClick={()=>filterProducts("men's clothing")}>Men's Clothing</CustomizedButton>
          <CustomizedButton variant="outlined" sx={{border:'1px solid #afd275', m:0.5}} onClick={()=>filterProducts("women's clothing")}>Women's Clothing</CustomizedButton>
          <CustomizedButton variant="outlined" sx={{border:'1px solid #afd275', m:0.5}} onClick={()=>filterProducts("jewelery")}>Jewelry</CustomizedButton>
          <CustomizedButton variant="outlined" sx={{border:'1px solid #afd275', m:0.5}} onClick={()=>filterProducts("electronics")}>Electronic</CustomizedButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchTerm}
              key={nanoid()}
              disableClearable
              // autoFocus
              onChange={(e)=>{
                setSearchTerm(e.target.value);
              }}
            />
          </Search>
        </Container>
          <Grid sx={{ flexGrow: 1, mt:4 }} container spacing={2}>
            <Grid item xs={20}>
              <Grid container  spacing={spacing} justifyContent='center'>
                {filterData.filter((value)=>{
                  if(searchTerm === ''){
                    return value;
                  }else if(value.title.toLowerCase().includes(searchTerm.toLowerCase())){
                    return value;
                  }
                }).map((value, index)=>{
                  return(
                  <Grid key={index} item sx={{width: 250, flexWrap: 'wrap', justifyContent:'center' }}>
                    <Card sx={{ maxWidth: 250, height:'100%', display:'flex', alignContent:"center",flexDirection:'column', justifyContent: 'space-between',alignItems:'center', }}>  
                      <CardMedia sx={{display:'flex',alignItems:'center',objectFit:'contain' }}
                        component="img"
                        // width='100%'
                        height='200px'//'fill'//'fit-content'
                        image={value.image}
                        alt={value.title}
                        
                      />
                      <CardContent  sx={{ display:'flex', alignContent:"center",flexDirection:'column', textAlign:'center', }}>
                        <Typography variant="h6"  >
                          {value.title.substring(0,12)}...
                        </Typography>
                        <Typography sx={{py:1}}>
                          price: {value.price}$
                        </Typography>                            
                        <CustomizedButton variant="outlined" sx={{border:'2px solid', py:'5px'}} onClick={()=>routeChange(value._id)} data-testid="buy-me">Buy Me</CustomizedButton>                            
                      </CardContent>
                    </Card>
                  </Grid>
                  )
                })}
              </Grid>
            </Grid> 
          </Grid>      
      </Container>
      </ThemeProvider>
    )
  }

  return (
    // <>
      <Container sx={{py:5, my:5, width: 'xl' }}>
        <Box>
        <ThemeProvider theme={typoTheme}>
        <Typography variant='h1' sx={{display:'flex', justifyContent:'center'}}>
          Latest Products
        </Typography>
        </ThemeProvider >
        </Box>
        <Divider />
        <Box sx={{display:'flex', justifyContent:'center', mt:5, width:'100%'}}>
          {loading ? <Loading/> : <ShowProducts/> }
        </Box>
      </Container>
    //// {/* </> */}
  );
};

export default Products;


const icommerce = createTheme({
  palette: {
    primary: {
      main: '#C2CAD0',
    },
    secondary: {
      main: '#C2B9B0',
      contrastText: '#ffcc00',
    },
    error:{
      main: '#b90e0a'
    },
    info:{
      main: '#c2b9b0'
    },
    success:{
      main: '#E7717D'
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  text:{
    primary:{
      color: '#7e685a'
    },
    secondary:{
      color:'#afs275'
    },
  }
});

const CustomizedButton = styled(Button)(
  ({ theme }) => `
  color: ${theme.palette.success.main};  
  borderColor: ${theme.palette.success.main};

  :hover {
    background: ${theme.palette.success.main};
    color: ${theme.palette.primary.main};
  }
`,
);

let typoTheme = createTheme();
// typoTheme = responsiveFontSizes(typoTheme);

typoTheme.typography.h1 = {
  fontSize: '2.2rem',
  '@media (min-width:380px)': {
    fontSize: '2.5rem',
  },
  [typoTheme.breakpoints.up('md')]: {
    fontSize: '4rem',
  },
};


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(greenColor, 0.25),
  '&:hover': {
    backgroundColor: alpha(greenColor, 0.55),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
