import React, { useState } from 'react';



const AppContext = React.createContext({

    counter:null,
    foolish:() => {},
    family:null,
    products:[],
    Usercart:{},
    Addtocartlogic: () => {},
    RemoveItemfrmCart: () => {},
    Myorder:[],
    AddtoOrders: () => {},
})



export default AppContext;