// import connection
import db from "../config/database.js";

// get all user
export const getAllUser = (result) => {
    db.query("SELECT * FROM user", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};
// get single user
export const getUserByEmail = (data,result) => {
    db.query("SELECT * FROM user WHERE email = ?",[data.email], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};

// get single user by id
export const getUserById = (data,result) => {
    db.query("SELECT * FROM user WHERE id = ?",[data], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};

// get single user
export const userLogin = (data,result) => {
    db.query("SELECT id, email,fullName, role FROM user WHERE email = ? AND password = ?",[data.email, data.password], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results[0]);
        }
    });
};

// insert User
export const insertUser = (data,result) => {
    db.query("INSERT INTO user SET ?",data, (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};

// Add lands
export const insertland = (data,result) => {
    db.query("INSERT INTO land SET ?",data, (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};
// Add wishlist
export const insertwishland = (data,result) => {
    db.query("INSERT INTO wishland SET ?",data, (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};
 // Add landcategory
export const insertlandcategory = (data,result) => {
    db.query("INSERT INTO landcategory SET ?",data, (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};

 // Get landcategory
export const getlandcategory = (result) => {
    db.query("SELECT * from landcategory", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};
 // Get wishlands
 export const getwishlands = (result) => {
    db.query("SELECT * from wishland", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};
 // Get wishlands landowner
 export const wishlands = (result) => {
    db.query("SELECT * from wishland", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};
// Get farmlands
export const getfarmland = (result) => {
    db.query("SELECT * from land WHERE category = 'farmland' AND status = 0", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            console.log(results)
            result(null,results);
        }
    });
};
// Get agrilands
export const getagriland = (result) => {
    db.query("SELECT * from land WHERE category ='agriland' AND status = 0", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            console.log(results)
            result(null,results);
        }
    });
};
// // Get ownersagrilands
export const ownersagriland = (data,result) => {
    db.query("SELECT * from land WHERE category ='agriland' AND userid=?", [data.userId], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            console.log(results)
            result(null,results);
        }
    });
};
// // Get ownersfarmlands
export const ownersfarmland = (data, result) => {
    db.query("SELECT * from land WHERE category ='farmland' AND userid=?", [data.userId], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            console.log(results)
            result(null,results);
        }
    });
};

// Get farmers
export const viewfarmers = (result) => {
    db.query("SELECT * from user WHERE role = 'farmer'", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            console.log(results)
            result(null,results);
        }
    });
};
// Get ownerpostland
export const viewpostland = (result) => {
    db.query("SELECT * from landcategory", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            console.log(results)
            result(null,results);
        }
    });
};

// Get crops
export const viewcrop = (result) => {
    db.query("SELECT * from crops", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            console.log(results)
            result(null,results);
        }
    });
};

// Get landownerfarmers
export const vfarmers = (result) => {
    db.query("SELECT * from user WHERE role = 'farmer'", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            console.log(results)
            result(null,results);
        }
    });
};
// Get admin farmers
export const adminfarmers = (result) => {
    db.query("SELECT * from user WHERE role = 'farmer'", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            console.log(results)
            result(null,results);
        }
    });
};
 // Get Admin landowners
 export const adminlandowners = (result) => {
    db.query("SELECT * from user WHERE role = 'land_owner'", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            console.log(results)
            result(null,results);
        }
    });
};
 // Get Admin landowners
 export const vlandowners = (result) => {
    db.query("SELECT * from user WHERE role = 'land_owner'", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            console.log(results)
            result(null,results);
        }
    });
};
 // Get landowners
export const viewlandowners = (result) => {
    db.query("SELECT * from user WHERE role = 'land_owner'", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            console.log(results)
            result(null,results);
        }
    });
};
 // Get details
 export const viewdetails = (result) => {
    db.query("SELECT * from user WHERE id = '?'",[userId], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            console.log(results)
            result(null,results);
        }
    });
};

// Add Crop
export const insertcrops = (data,result) => {
    db.query("INSERT INTO crops SET ?",data, (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};

// Add cropcategory
export const addcropcat = (data,result) => {
    db.query("INSERT INTO cropcategory SET ?",data, (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};




// update framer
export const updatefarmers = (userId, data,result) => {
    db.query("UPDATE user SET phone = ?,pincode = ?,house_name = ?,street = ?,city = ?WHERE id = ? ",[data.phone,data.pincode,data.house_name,data.street,data.city,userId], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};

// update landowner
export const updatelandowners = (userId, data,result) => {
    db.query("UPDATE user SET phone = ?,pincode = ?,house_name = ?,street = ?,city = ?WHERE id = ? ",[data.phone,data.pincode,data.house_name,data.street,data.city,userId], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};
// add land details for prediction
export const addextra = (lid, data,result) => {
    db.query("UPDATE land SET ownername = ?,ph = ?,pottasium = ?,phosphorous = ?,nitrogen = ?,humidity = ?,temper = ?,rainfall = ?,leaseperiod = ? WHERE lid = ? ",[data.ownername,data.ph,data.pottasium,data.phosphorous,data.nitrogen,data.state,data.district,data.rainfall,data.leaseperiod,lid], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};

// add land details for prediction
export const extraadd = (lid, data,result) => {
    db.query("UPDATE land SET ownername = ?,ph = ?,pottasium = ?,phosphorous = ?,nitrogen = ?,humidity = ?,temper = ?,rainfall = ?,leaseperiod = ? WHERE lid = ? ",[data.ownername,data.ph,data.pottasium,data.phosphorous,data.nitrogen,data.state,data.district,data.rainfall,data.leaseperiod,lid], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};
//agriland edit page
export const agriland = (result) => {
    db.query("SELECT * from land WHERE category ='agriland'", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            console.log(results)
            result(null,results);
        }
    });
};
