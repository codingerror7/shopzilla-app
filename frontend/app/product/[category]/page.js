"use client"
import * as React from 'react';
import { useParams } from "next/navigation";
import { useState,useEffect } from "react"
import axios from "axios"
import Nav2 from '@/Components/Nav2';
import Footer from "@/Components/Footer";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';
import { useRouter } from 'next/navigation';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { VerticalAlignBottom } from '@mui/icons-material';


//TO DISPLAY PRODUCTS:
export default function Page({params}){  //PARAMS ISLIYE ANDAR LIKHA KYUKI NEXTJS DYNAMIC ROUTES ME PATH PARAMETRES KO DIRECTLY PARAMS NAAM KE PROPS ME PASS KR DETI HAI AND UNKO ACCESS KRNE KE LIYE PARAMS KA USE KRTE H.
    const {category} = useParams();   //USE PARAMS HOOK TO READ PATH PARAMS.
    const [product, setproduct] = useState([]); //EMPTY ARRAY
    const [isproduct, setisproduct] = useState(null);
    const [popup, setpopup] = useState(false);
    const [Order, setOrder] = useState([]);
    const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

    useEffect(()=>{
        async function fetchProducts(){
            try {
                //request to call backend to give listings
                let res = await axios.get(`http://localhost:8000/api/product/${category}`);
                let data = res.data;  ///axios me res.json use nii krte, ye automaticcally json handle kr leta h, and usko res.data k andar store kra leta h.
                setproduct(data);   //hmare empty array m values insert kr rhe h.
                console.log(category);
            }
            catch (error) {
                console.log("error",error);
            }
        }
        fetchProducts();
    },[category]);  

    const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

 const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

   const buttons = (
    <React.Fragment>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant='contained' sx = {{
            mt : 8,
            mb : 8,
            ml : -2,
            border : "1px solid white"
        }} onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>
          Load more products
        </Button>
      </Box>
      </React.Fragment>
  );

//ADD TO CART:
const [alert, setalert] = useState(false);
  const addToCart = async (productId) => {
    try {
      const userId = await localStorage.getItem("userId");
      const res = await axios.post("https://shopzilla-ecommerce-9anv.onrender.com/api/add-to-cart",{userId , productId});
      console.log(res.data.cart,"added");
      setalert(true);
    } catch (error) {
      console.log("cart not working",error);
    }
  }
  useEffect(()=>{
  if(alert){
    setTimeout(()=> setalert(false), 2000);  
  }
}, [alert]);
  
  let router = useRouter();
  //BUY NOW:
  const buyNow = async (productId) => {
  try {
    const userId = localStorage.getItem("userId");

    const res = await axios.post("https://shopzilla-ecommerce-9anv.onrender.com/api/order/buy-now", {
      userId,
      productId,
      quantity: 1,
    });
    const orderId = res.data.order._id;
    localStorage.setItem("orderId",orderId);
    router.push(`/order-summary/${orderId}`);
    console.log("Order created:", res.data);

  } catch (err) {
    console.log("BUY ERROR:", err.response?.data || err.message);
  }
};

      return (
        <>
        <div className="min-h-[110vh] bg-orange-100 text-white overflow-hidden">
        <Nav2/>
            {popup && isproduct && (
                <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                   <div key={isproduct._id} className="bg-orange-200 text-gray-900 rounded-2xl w-[95%] sm:w-[80%] md:w-[60%] lg:w-[45%] max-h-[85vh] overflow-y-auto p-6 shadow-xl">
                     <div>
                      <img className="w-full h-full object-cover rounded-xl" src={isproduct.image}></img>
                     </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold uppercase mt-4">{isproduct.brand}</h1>
                <h1 className="text-lg sm:text-xl font-medium mt-1">{isproduct.name}</h1>
                <p className="text-xl sm:text-2xl font-semibold mt-2">₹{isproduct.price}</p>
                <p className="text-base sm:text-lg mt-2 leading-relaxed">{isproduct.description}</p>
                 <StyledRating className='mt-4'
      name="highlight-selected-only"
      defaultValue={4}
      IconContainerComponent={IconContainer}
      getLabelText={(value) => customIcons[value].label}
      highlightSelectedOnly
    />
    <button
        onClick={() => setpopup(false)}
        className="mt-6 w-full py-3 bg-gray-900 text-white text-lg font-semibold rounded-xl hover:bg-gray-800 transition"
      >
        CLOSE
      </button>
    </div>
        </div>
            )}
            <h1 className="text-center text-violet-900 text-3xl sm:text-5xl font-extrabold mt-18 lg:mt-35 uppercase">{category} products</h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 mt-10 px-2 sm:px-0">
                {product?.length > 0 ? (
                    product.map((item)=>(
                    <div key={item._id} className="bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer p-4 flex flex-col items-center mx-auto w-[170px] sm:w-[220px] md:w-[240px] lg:w-[250px]">
                        <img className="h-40 w-40 sm:h-52 sm:w-52 md:h-56 md:w-56 rounded-xl object-cover" src={item.image} onClick={()=>{
                        setisproduct(item)
                        setpopup(prev=>!prev)
                    }}></img>
                        <h2 className="font-semibold text-white text-[13px] sm:text-[16px] text-center mt-2">{item.name}</h2>
                        <p className='text-white text-[12px] sm:text-[15px]'>₹{item.price}</p>
                        <div className="flex items-center justify-between w-full gap-2 mt-3">
                            <button onClick={()=>{
                              buyNow(item._id);
                            }} className="bg-white text-black font-semibold text-[9px] sm:text-[11px] w-1/2 py-1 rounded hover:bg-gray-200">BUY NOW</button>
                            <button onClick={()=>{
                              addToCart(item._id)
                            }} className="bg-white text-black font-semibold text-[9px] sm:text-[11px] w-1/2 py-1 rounded hover:bg-gray-200">ADD TO CART</button>
                        </div>
                    </div>
                ))
                ) : 
                (<p>Loading..</p>)}
            </div>
            {/*<p className="text-2xl text-red-900 font-[gilroy] font-medium mt-20 text-center">MORE PRODUCTS COMING SOON..</p>*/}

             <Box sx={{ width: 300 }}>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        autoHideDuration={2000}
        message="MORE PRODUCTS COMING SOON.."
        key={vertical + horizontal}
      />
    </Box>

     {alert && (
  <Alert 
    icon={<CheckIcon fontSize="inherit" />} 
    variant='filled'
    severity="success"
    sx={{
      position: "fixed",
      top: 70,
      right: 500,
      zIndex: 9999,
      width: "400px"
    }}
  >
    ITEM ADDED TO CART SUCCESSFULLY!
  </Alert>
)}
        </div>
        <Footer/>
        </>
      )
}