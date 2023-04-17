// import express 
import express from "express";
// import functions from controller 


import {
    showAUser,
    createAccount,
    allUsers,
    userAuthentication,
    validateToken,
    addland,
    addlandcategory,
    insertcrop,
    cropcat,
    getLandCategories,
    getfarmlands,
    getfarmer,
    getlandowners,
    viewadminfarmers,
    viewadminlandowners,
    getagrilands,
    getvfarmers,
    getvlandowners,
    getcrops,
    postedlandcat,
    postagrii,
    postfamii,
    addwishland,
    wishlist,
    updatefarmer,
    updatelandowner,
    userdetails,
    moredetails,
    agrilands,
    extradetail,
    wish
    
    
} from "../controllers/user.js";

import {verifyToken} from "../config/jwt.js";


import {
    createBooking,
    fetchBookedTables,
    createOrder,
    getOrderData,
    getOrderByIdData,
    createProduct,
    getProductByIdData,
    getProductsData
} from "../controllers/booktable.js";

import upload from "../config/multer.js";
import { uploadImage } from "../controllers/imageupload.js";
import {createRazorpayOrder} from '../controllers/razorpay.js'



// init express router
const router = express.Router();



router.use(function isAuthorized(req, res, next){
    if (req.originalUrl === '/api/users/login'||req.originalUrl === '/api/users') {
        console.log('orginal url', req.originalUrl)
        next()
    } else {
        next()
        // try{
        //     const data = (req.headers.authorization || '').substring(7);
        //     const response = verifyToken(data)
        //     console.log('response', response)
        //     if (!response.valid)
        //         next(res.status(403).send({message: 'Token Validation Failed. Kill the app and retry.'}))
        //     else
        //         next()
        // }catch (e) {
        //     console.log(e)
        //     // next(res.status(403).send({message: 'Failed'}))
        // }
    }
});

////////////////////////// USER ////////////////////////////////
// get all user
// router.post("/api/users/")

router.get("/api/users/", allUsers);

router.get("/api/users/:email", showAUser);

// create account
router.post("/api/users", createAccount);

// user authentication
router.post("/api/users/login", userAuthentication);

// token validation
router.post("/api/users/validate-token", validateToken);
// upload land
router.post("/api/users/shop/product", addland);
// upload Crop
router.put("/api/users/admin/shops/Addcrop", insertcrop);

// upload landcategory
router.post("/api/admin/products/category",addlandcategory);

// upload cropcategory
router.post("/api/admin/shops/add",cropcat);
// upload an image
router.post('/api/upload', upload.single('image'), uploadImage);

// token validation
// router.post("/api/users/shops", cropat);

////////////////////////// Order ////////////////////////////////
router.post(`/api/orders`, createOrder);
router.get("/api/users/:userId/orders/:id", getOrderByIdData);
router.get("/api/users/:userId/orders", getOrderData);
////////////////////////// Product ////////////////////////////////
router.post(`/api/products`, createProduct);
router.get("/api/products/:id", getProductByIdData);
router.get("/api/products", getProductsData);
router.get("/api/users/lands/categories", getLandCategories);
router.get("/api/users/lands/get", getfarmlands);
router.get("/api/users/farmerslist/list", getfarmer);
router.get("/api/users/landownerslist/lists", getlandowners);
router.get("/api/users/landowner/farmerslists", viewadminfarmers);
router.get("/api/users/landowner/landownerslists", viewadminlandowners);
router.get("/api/users/agrilands/agri", getagrilands);
router.get("/api/users/farmers/getlist", getvfarmers);
router.get("/api/users/landownerss/viewlist", getvlandowners);
router.get("/api/users/crops/view", getcrops);
router.get("/api/users/land/posts",postedlandcat);
router.get("/api/users/posted/postedagri/:userId",postagrii);
router.get("/api/users/posted/postedfarm/:userId",postfamii);
router.post("/api/users/customer/wishlist",addwishland);
router.get("/api/users/customer/wishlists/mywish",wishlist);
router.put("/api/users/customer/updateprofile/:userId",updatefarmer);
router.put("/api/users/shop/update/:userId",updatelandowner);
router.get("/api/users/shop/getdetails", userdetails);
router.post("/api/users/shop/product/updateland/:lid",moredetails);
router.get("api/users/posted/postagriland/edit",agrilands);
router.post("/api/users/shop/product/land/updatedett/:lid",extradetail);
router.get("/api/users/shop/wishlists/getwish",wish);


// Razor pay order
router.post("/api/razor-pay/order", createRazorpayOrder);


// router.get("/api/users/profiles/editview",viewprofiledetails);







// export default router
export default router;








