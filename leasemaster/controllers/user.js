// import functions from User model

import { response } from "express";
import {
    getAllUser,
    getUserByEmail,
    userLogin,
    insertUser,
    insertland,
    addcropcat,
    insertcrops,
    insertlandcategory,
    getlandcategory,
    getfarmland,
    viewfarmers,
    viewlandowners,
    adminfarmers,
    adminlandowners,
    getagriland,
    vfarmers,
    vlandowners,
    viewcrop,
    viewpostland,
    ownersagriland,
    ownersfarmland,
    insertwishland,
    getwishlands,
    updatefarmers,
    updatelandowners,
    viewdetails,
    agriland,
    addextra,
    extraadd,
    wishlands


} from "../models/UserModel.js";
import {createToken, verifyToken} from '../config/jwt.js'

// get all Users
export const allUsers=(req,res)=>{
    getAllUser((err,results)=> {
        if (err) {
            // var errorResponse = [];
            // errorResponse.push(err);
            res.send(err);
        }else {
            res.json(results);
        }
    });
};


// get single user
export const showAUser = (req,res)=>{
    getUserByEmail(req.params.email,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

//get user details by user id
export const getUserById = (req,res)=>{
    getUserByEmail(req.params.email,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// create user
export const createAccount=async (req,res)=>{
    const data = req.body;
    getUserByEmail(data, (err, response) => {
        console.log('response', response)
        if (err) {
            insertUser(data,(err,results)=> {
                if (err) {
                    console.log('error', err)
                    res.status(500).send(err);
                }else {
                    res.send({message: 'success'});
                }
            });
        } else {
            if (response&& response.length > 0) {
                res.status(400).send({
                    message: 'User Already Exist',
                    code: 4001
                })
            } else {
                insertUser(data,(err,results)=> {
                    if (err) {
                        console.log('error', err)
                        res.status(500).send(err);
                    }else {
                        res.send({message: 'success'});
                    }
                });
            }

        }
    })
};

// user authentication
export const userAuthentication=async (req,res)=>{
    const data = req.body;
    console.log('model', data)
    userLogin(data,(err,results)=> {
        console.log('login results', results)
        if (err) {
            res.status(400).send({message: "Entered email  is Not Valid"});
        } else if (!results||!(results||{}).id){
            res.status(400).send({message: "Entered email  or Password is Not Valid"});
        } else {
            const token = createToken(results)
           res.json({token});
        }
    });
};

// validate token
export const validateToken=async (req,res)=>{
    try {
        const data = req.headers.authorization.substring(7);
        console.log('data', data)
        const response = await verifyToken(data)
        console.log('data', response)
        res.send(response)
    } catch (err) {
        res.status(403).send({message: 'Token Validation Failed. Kill the app and retry.'})
    }

};


// add land
export const addland=async (req,res)=>{
    const data = req.body;
    insertland(data,(err,results)=> {
        if (err) {
            console.log('error', err)
            res.status(500).send(err);
        }else {
            res.send({message: 'success'});
        }
    });
    };

// add wishland
export const addwishland=async (req,res)=>{
    const data = req.body;
    insertwishland(data,(err,results)=> {
        if (err) {
            console.log('error', err)
            res.status(500).send(err);
        }else {
            res.send({message: 'success'});
        }
    });
    };

 // add landcategory
export const addlandcategory=async (req,res)=>{
    const data = req.body;
    insertlandcategory(data,(err,results)=> {
        if (err) {
            console.log('error', err)
            res.status(500).send(err);
        }else {
            res.send({message: 'success'});
        }
    });
    };
 // get landcategory
export const getLandCategories=async (req,res)=>{
    getlandcategory((err,results)=> {
        if (err) {
            console.log('error', err)
            res.status(500).send(err);
        }else {
            res.send(results);
        }
    });
    };
     // get wishland
    export const wishlist=async (req,res)=>{
        getwishlands((err,results)=> {
            if (err) {
                console.log('error', err)
                res.status(500).send(err);
            }else {
                res.send(results);
            }
        });
        };
           // get wishland landowner
    export const wish=async (req,res)=>{
        wishlands((err,results)=> {
            if (err) {
                console.log('error', err)
                res.status(500).send(err);
            }else {
                res.send(results);
            }
        });
        };
 // get farmlands
 export const getfarmlands=async (req,res)=>{
    getfarmland((err,results)=> {
        if (err) {
            console.log('error', err)
            res.status(500).send(err);
        }else {
            console.log('error', results)

            res.send(results);
        }
    });
    };
     // get ownerpostlands
 export const postedlandcat=async (req,res)=>{
    viewpostland((err,results)=> {
        if (err) {
            console.log('error', err)
            res.status(500).send(err);
        }else {
            console.log('error', results)

            res.send(results);
        }
    });
    };
// get farmlands
export const getcrops=async (req,res)=>{
    viewcrop((err,results)=> {
        if (err) {
            console.log('error', err)
            res.status(500).send(err);
        }else {
            console.log('error', results)

            res.send(results);
        }
    });
    };
// get ownersagrilands
export const postagrii=async (req,res)=>{
 ownersagriland({userId:req.params.userId},(err,results)=> {
        if (err) {
            console.log('error', err)
            res.status(500).send(err);
        }else {
            console.log('error', results)

            res.send(results);
        }
    });
    };
/// get ownersfarmlands
export const postfamii=async (req,res)=>{
    ownersfarmland({userId:req.params.userId},(err,results)=> {
           if (err) {
               console.log('error', err)
               res.status(500).send(err);
           }else {
               console.log('error', results)
   
               res.send(results);
           }
       });
       };

    // get farmlands
 export const getagrilands=async (req,res)=>{
    getagriland((err,results)=> {
        if (err) {
            console.log('error', err)
            res.status(500).send(err);
        }else {
            console.log('error', results)

            res.send(results);
        }
    });
    };
     // get farmers

    export const getfarmer=async (req,res)=>{
        viewfarmers((err,results)=> {
            if (err) {
                console.log('error', err)
                res.status(500).send(err);
            }else {
                console.log('error', results)
    
                res.send(results);
            }
        });
        };
        //get details
        export const userdetails=async (req,res)=>{
            viewdetails((err,results)=> {
                if (err) {
                    console.log('error', err)
                    res.status(500).send(err);
                }else {
                    console.log('error', results)
        
                    res.send(results);
                }
            });
            };

//update farmers
        export const updatefarmer=async (req,res)=>{
            const user_id= req.params.userId
            updatefarmers(user_id,req.body,(err,results)=> {
                if (err) {
                    console.log('error', err)
                    res.status(500).send(err);
                }else {
                    console.log('error', results)
        
                    res.send(results);
                }
            });
            };
            //update landowners
        export const updatelandowner=async (req,res)=>{
            const user_id= req.params.userId
            updatelandowners(user_id,req.body,(err,results)=> {
                if (err) {
                    console.log('error', err)
                    res.status(500).send(err);
                }else {
                    console.log('error', results)
        
                    res.send(results);
                }
            });
            };

        // get farmers

    export const getvfarmers=async (req,res)=>{
        vfarmers((err,results)=> {
            if (err) {
                console.log('error', err)
                res.status(500).send(err);
            }else {
                console.log('error', results)
    
                res.send(results);
            }
        });
        };
         // get landownerss

    export const getvlandowners=async (req,res)=>{
        vlandowners((err,results)=> {
            if (err) {
                console.log('error', err)
                res.status(500).send(err);
            }else {
                console.log('error', results)
    
                res.send(results);
            }
        });
        };
         // get admin farmers

    export const viewadminfarmers=async (req,res)=>{
        adminfarmers((err,results)=> {
            if (err) {
                console.log('error', err)
                res.status(500).send(err);
            }else {
                console.log('error', results)
    
                res.send(results);
            }
        });
        };
           // get landowners

    export const viewadminlandowners=async (req,res)=>{
        adminlandowners((err,results)=> {
            if (err) {
                console.log('error', err)
                res.status(500).send(err);
            }else {
                console.log('error', results)
    
                res.send(results);
            }
        });
        };
        // get landowners

    export const getlandowners=async (req,res)=>{
        viewlandowners((err,results)=> {
            if (err) {
                console.log('error', err)
                res.status(500).send(err);
            }else {
                console.log('error', results)
    
                res.send(results);
            }
        });
        };
  // add Crop
export const insertcrop=async (req,res)=>{
    const data = req.body;
    insertcrops(data,(err,results)=> {
        if (err) {
            console.log('error', err)
            res.status(500).send(err);
        }else {
            res.send({message: 'success'});
        }
    });
   };

   // addcropcategory
export const cropcat=async (req,res)=>{
    const data = req.body;
    addcropcat(data,(err,results)=> {
        if (err) {
            console.log('error', err)
            res.status(500).send(err);
        }else {
            res.send({message: 'success'});
        }
    });
    };
    
  // add land details of farmland for prediction
  export const moredetails=async (req,res)=>{
    const user_id= req.params.lid
    addextra(user_id,req.body,(err,results)=> {
        if (err) {
            console.log('error', err)
            res.status(500).send(err);
        }else {
            console.log('error', results)

            res.send(results);
        }
    });
    };
     // add land details of agriland for prediction
  export const extradetail=async (req,res)=>{
    const user_id= req.params.lid
    extraadd(user_id,req.body,(err,results)=> {
        if (err) {
            console.log('error', err)
            res.status(500).send(err);
        }else {
            console.log('error', results)

            res.send(results);
        }
    });
    };

     // get agriland edit page
 export const agrilands=async (req,res)=>{
    agriland((err,results)=> {
        if (err) {
            console.log('error', err)
            res.status(500).send(err);
        }else {
            console.log('error', results)

            res.send(results);
        }
    });
    };