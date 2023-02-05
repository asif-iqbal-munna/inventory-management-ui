import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import MovingOutlinedIcon from '@mui/icons-material/MovingOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

const navigations = [
  {
    icon: <HomeOutlinedIcon />,
    title: 'Home',
    to: '/',
  },
  {
    icon: <ProductionQuantityLimitsOutlinedIcon />,
    title: 'Products',
    to: '/products'
  },
  {
    icon: <FavoriteIcon />,
    title: 'Sales',
    to: '/sales',
  },
  {
    icon: <SellOutlinedIcon />,
    title: 'Purchase',
    to: '/purchase'
  },
  {
    icon: <AddShoppingCartOutlinedIcon />,
    title: 'Orders',
    to: '/orders'
  },
  {
    icon: <Inventory2OutlinedIcon />,
    title: 'Stocks',
    to: '/stocks'
  },
  {
    icon: <CardGiftcardOutlinedIcon />,
    title: 'Offerings',
    items: [
      {
        icon: <MonetizationOnOutlinedIcon />,
        title: 'Promo Code',
        to: '/promocode',
      },
      {
        icon: <DiscountOutlinedIcon />,
        title: 'Discount',
        to: '/discounts',
      }
    ]
  },
  {
    icon: <ArticleOutlinedIcon />,
    title: 'Reports',
    items: [
      {
        icon: <MovingOutlinedIcon />,
        title: 'Sales Reports',
        to: '/sales-reports',
      },
      {
        icon: <FactCheckOutlinedIcon />,
        title: 'Purchase Reports',
        to: '/purchase-reports',
      },
      {
        icon: <ShoppingBasketOutlinedIcon />,
        title: 'Order Reports',
        to: '/order-reports',
      },
      {
        icon: <BarChartOutlinedIcon />,
        title: 'Stock Reports',
        to: '/stock-reports',
      },
      {
        icon: <AssignmentOutlinedIcon />,
        title: 'Products Reports',
        to: '/product-reports',
      },
      {
        icon: <LoyaltyOutlinedIcon />,
        title: 'Offer Reports',
        items: [
          {
            icon: <CheckCircleOutlineOutlinedIcon />,
            title: 'Promo Code Reports',
            to: 'promo-code-reports'
          },
          {
            icon: <LocalAtmOutlinedIcon />,
            title: 'Discount Reports',
            to: 'discount-reports'
          },
          {
            icon: <CheckCircleOutlineOutlinedIcon />,
            title: 'Promo Code Reports',
            to: 'promo-code-reports'
          },
          {
            icon: <LocalAtmOutlinedIcon />,
            title: 'Discount Reports',
            to: 'discount-reports'
          }
        ]
      }
    ]
  }
];

export default navigations;
