import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { MyProSidebarProvider } from "./pages/global/sidebar/sidebarContext";
import SalesHistory from "./pages/Products/SalesHistory.jsx";
import Topbar from "./pages/global/Topbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Adminindex.css";
import Dashboard from "./pages/dashboard";
import SellersClass from "./pages/Profiles/SellersClass";
import UsersDash from "./pages/Profiles/UsersDash";

// products
import ProductClass from "./pages/Products/ProductClass";

import Category from "./pages/Products/Category";

//profile list

import SellerProductSubmission from "./pages/List_Profile_at_once/SellerProductSubmission.jsx";
// import AddUser from "./pages/Add Profiles/AddUser";

// order

import UserList2 from "./pages/List_Profile_at_once/UserList2";
import Userdetails from "./pages/ProfileDetailes/Userdetails";
import ActiveUsers from "./pages/Status Profiles/UserActive";
import BanUsers from "./pages/Status Profiles/UserBan";

import Banner from "./pages/Banner/Banner";
import SubCategory from "./pages/Products/SubCategory";
import AddCategoryModal from "./pages/Models/AddCategoryModal ";
import AddSubCategoryModal from "./pages/Models/AddSubCategoryModal ";
import TimberListingsTable2 from "./pages/Products/TimberListingsTable2.jsx";
import AddSeller from "./pages/Add Profiles/AddSeller.jsx";
import ProfileUpdateForm from "./pages/Settings Changes/ProfileUpdateForm.jsx";
import UserEnquiry from "./pages/Product Enquiry/UserEnquiry.jsx";
import UserEnquiryDone from "./pages/Product Enquiry/UserEnquiryDone.jsx";
import UserEnquiryPending from "./pages/Product Enquiry/UserEnquiryPending.jsx";
import UserEnquiryDetails from "./pages/Product Enquiry/UserEnquiryDetails.jsx";
import BuyersDetails from "./pages/Details/BuyersDetails.jsx";
import ProductDetails from "./pages/Details/ProductDetails.jsx";
import HideProductsList from "./pages/Products/HideProduct.jsx";
import Units from "./pages/Products/Units.jsx";
// import UserEnquiryPending2 from "./pages/Product Enquiryy/UserEnquiryPending2.jsx";
import UserEnquiryDone2 from "./pages/Product Enquiry/UserEnquiryDone2.jsx";
import ProductEnquiryFromBuyers from "./pages/Product Enquiry/ProductEnquiryFromBuyers.jsx";
import SellerRequest from "./pages/Seller/SellerRequest.jsx";
import GetInTouch from "./pages/Get in Touch/GetInTouch.jsx";
import BuyerList from "./pages/Seller/BuyerList.jsx";
import AddBuyerForm from "./pages/Seller/AddBuyerForm.jsx";
import SellerList from "./pages/Seller/SellerList.jsx";
import AddSellerForm from "./pages/Seller/AddSeller.jsx";
import AdminProductPurchase from "./pages/AdminProductPurchase/AdminProductPurchase .jsx";
import SellerFormEditProduct from "./pages/Seller/SellerEditProductForm.jsx";
import SellerProductDetails from "./pages/Seller/SellerProductDetails.jsx";
import ProductObjects from "./pages/Products/ProductObjects.jsx";
import AddProductObjectForm from "./pages/Products/AddProductObject.jsx";
import EditProductForm from "./pages/Products/EditProductObjectForm.jsx";
import PurchaseHistory from "./pages/PurchaseHistory/PurchaseHistory.jsx";
import PurchaseHistoryPerview from "./pages/PurchaseHistory/PurchaseHistoryPerview.jsx";
import ProductObjectsStock from "./pages/Products/Stock";
import Stock from "./pages/Products/Stock";
import AccountHistory from "./pages/Account History/Account History.jsx";
import CompanyProfile from "./pages/Company Profile/CompanyProfile.jsx";
// import InVoiceApp from "./Invoice/InvoiceApp.jsx";
import SalesHistroyBill from "./pages/Products/SalesHistorybill.jsx";
// import { DownloadInvoice } from "./pages/Products/SalesHistoryBill2.jsx";
import SalesHistroyBillThree from "./pages/Products/SalesHistoryBill3.jsx";
import EnquiryFormEdit from "./pages/Product Enquiry/EnquiryFormEdit.jsx";

const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyProSidebarProvider>
          <div style={{ height: "100%", width: "100%", overflowX: "hidden" }}>
            <main>
              <Topbar />
              <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route path="/v1/sellers" element={<SellersClass />} />
                <Route path="/v1/users" element={<UsersDash />} />
                <Route exact path="/v1/usersListall" element={<UserList2 />} />

                <Route
                  exact
                  path="/v1/sellerslist"
                  element={<SellerProductSubmission />}
                />

                {/* Products */}

                <Route exact path="/v1/Product" element={<ProductClass />} />

                <Route
                  exact
                  path="/v1/productslist"
                  element={<TimberListingsTable2 />}
                />

                <Route eaxct path="/v1/category" element={<Category />} />
                <Route eaxct path="/v1/subcategory" element={<SubCategory />} />
                <Route
                  eaxct
                  path="/v1/addcategory"
                  element={<AddCategoryModal />}
                />
                <Route
                  eaxct
                  path="/v1/addsubcategory"
                  element={<AddSubCategoryModal />}
                />

                {/* add Profiles */}

                <Route exact path="/v1/addseller" element={<AddSeller />} />

                {/*ProFile Details */}
                <Route
                  exact
                  path="/v1/sellerdetail"
                  element={<Userdetails />}
                />
                <Route
                  exact
                  path="/v1/buyersdetails"
                  element={<BuyersDetails />}
                />

                {/* status of profiles */}
                <Route exact path="/v1/activeusers" element={<ActiveUsers />} />
                <Route exact path="/v1/banusers" element={<BanUsers />} />

                <Route exact path="/v1/banner" element={<Banner />} />
                <Route
                  exact
                  path="/v1/profileupdateform"
                  element={<ProfileUpdateForm />}
                />

                {/* user enquiry components */}
                <Route exact path="/v1/userenquiry" element={<UserEnquiry />} />
                <Route
                  exact
                  path="/v1/buyerenquirydone"
                  element={<UserEnquiryDone />}
                />

                <Route
                  exact
                  path="/v1/userenquirydone2"
                  element={<UserEnquiryDone2 />}
                />
                <Route
                  exact
                  path="/v1/userenquirypending"
                  element={<UserEnquiryPending />}
                />

                {/* <Route
                  exact
                  path="/v1/userenquirypending2"
                  element={<UserEnquiryPending2 />}
                /> */}
                <Route
                  exact
                  path="/v1/userenquirydetails"
                  element={<UserEnquiryDetails />}
                />

                <Route
                  exact
                  path="/v1/productdetails"
                  element={<ProductDetails />}
                />

                <Route exact path="/v1/units" element={<Units />} />

                <Route
                  exact
                  path="/v1/hideproductslist"
                  element={<HideProductsList />}
                />

                {/* check urls */}
                <Route
                  exact
                  path="/v1/productenquiryfrombuyers"
                  element={<ProductEnquiryFromBuyers />}
                />
                <Route
                  exact
                  path="/v1/sellerrequest"
                  element={<SellerRequest />}
                />
                <Route exact path="/v1/getintouch" element={<GetInTouch />} />
                <Route exact path="/v1/buyerlist" element={<BuyerList />} />
                <Route
                  exact
                  path="/v1/addbuyerform"
                  element={<AddBuyerForm />}
                />
                <Route exact path="/v1/sellerlist" element={<SellerList />} />
                <Route
                  exact
                  path="/v1/adminproductpurchase"
                  element={<AdminProductPurchase />}
                />
                <Route
                  exact
                  path="/v1/addsellerform"
                  element={<AddSellerForm />}
                />
                <Route
                  exact
                  path="/v1/sellerformeditproduct"
                  element={<SellerFormEditProduct />}
                />
                <Route
                  exact
                  path="/v1/sellerproductdetails"
                  element={<SellerProductDetails />}
                />

                <Route
                  exact
                  path="/v1/productobjects"
                  element={<ProductObjects />}
                />
                <Route
                  exact
                  path="/v1/addproductobjectform"
                  element={<AddProductObjectForm />}
                />
                <Route
                  exact
                  path="/v1/editproductform"
                  element={<EditProductForm />}
                />
                <Route
                  exact
                  path="/v1/purchasehistory"
                  element={<PurchaseHistory />}
                />
                <Route
                  exact
                  path="/v1/purchasehistoryperview"
                  element={<PurchaseHistoryPerview />}
                />
                <Route exact path="/v1/stock" element={<Stock />} />
                <Route
                  exact
                  path="/v1/saleshistory"
                  element={<SalesHistory />}
                />
                <Route
                  exact
                  path="/v1/accounthistory"
                  element={<AccountHistory />}
                />

                <Route
                  exact
                  path="/v1/companyprofile"
                  element={<CompanyProfile />}
                />
                {/* <Route exact path="/v1/InVoiceApp" element={<InVoiceApp />} /> */}
                <Route
                  exact
                  path="/v1/SalesHistroyBill"
                  element={<SalesHistroyBill />}
                />
                {/* <Route
                  exact
                  path="/v1/downloadinvoice"
                  element={<DownloadInvoice />}
                /> */}
                <Route
                  exact
                  path="/v1/SalesHistroyBillthree"
                  element={<SalesHistroyBillThree />}
                />
                <Route
                  exact
                  path="/v1/enquiryformedit"
                  element={<EnquiryFormEdit />}
                />
              </Routes>
            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
