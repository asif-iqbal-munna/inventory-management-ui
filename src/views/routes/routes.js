import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Dashboard = lazy(() => import('../pages/dashboard/Dashboard'));
const Main = lazy(() => import('../layout/Main'));
const Products = lazy(() => import('../pages/products'));
const Sales = lazy(() => import('../pages/sales'));
const Purchase = lazy(() => import('../pages/purchase'));
const Orders = lazy(() => import('../pages/orders'));
const Stocks = lazy(() => import('../pages/stocks'));
const PromoCode = lazy(() => import('../pages/offerings/promocode'));
const Discounts = lazy(() => import('../pages/offerings/discounts'));
const SalesReports = lazy(() => import('../pages/reports/salesReports'));
const PurchaseReports = lazy(() => import('../pages/reports/purchaseReports'));
const OrderReports = lazy(() => import('../pages/reports/orderReports'));
const StockReports = lazy(() => import('../pages/reports/stockReports'));
const ProductReports = lazy(() => import('../pages/reports/productReports'));
const PromoCodeReports = lazy(() => import('../pages/reports/offersReports/promoReports'));
const DiscountReports = lazy(() => import('../pages/reports/offersReports/discountReports'));

const NotFound = lazy(() => import('../pages/notFound'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/sales',
        element: <Sales />,
      },
      {
        path: '/purchase',
        element: <Purchase />,
      },
      {
        path: '/orders',
        element: <Orders />,
      },
      {
        path: '/stocks',
        element: <Stocks />,
      },
      {
        path: '/offerings/promocode',
        element: <PromoCode />,
      },
      {
        path: '/offerings/discounts',
        element: <Discounts />,
      },
      {
        path: '/report/sales-reports',
        element: <SalesReports />,
      },
      {
        path: '/report/purchase-reports',
        element: <PurchaseReports />,
      },
      {
        path: '/report/order-reports',
        element: <OrderReports />,
      },
      {
        path: '/report/stock-reports',
        element: <StockReports />,
      },
      {
        path: '/report/product-reports',
        element: <ProductReports />,
      },
      {
        path: '/report/promo-code-reports',
        element: <PromoCodeReports />,
      },
      {
        path: '/report/discount-reports',
        element: <DiscountReports />,
      },
    ]
  },
  {
    path: '/sign-in',
    element: <h3>sign in</h3>
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

export default router;
