// types of action
const Types = {
    CREATE_ITEM_CAR: "CREATE_ITEM_CAR",
    CREATE_ITEM_BIKE: "CREATE_ITEM_BIKE",
    CREATE_ITEM_MOTO: "CREATE_ITEM_MOTO",
    CREATE_ITEM_YONKER: "CREATE_ITEM_YONKER",
    DELETE_ITEM: "DELETE_ITEM"
  };
  // actions
  const createItemCar= (i,n,p,mo,mar)=> ({
    type: Types.CREATE_ITEM_CAR,
    payload: {i,n,p,mo,mar}
  });

  const createItemBike= (i,n,p,mo,mar)=> ({
    type: Types.CREATE_ITEM_BIKE,
    payload: {i,n,p,mo,mar}
  });
  
  const createItemMoto= (i,n,p,mo,mar)=> ({
    type: Types.CREATE_ITEM_MOTO,
    payload: {i,n,p,mo,mar}
  });

  const createItemYonk = (i,n,u) =>({
    type: Types.CREATE_ITEM_YONKER,
    payload: {i,n,u}
  });
  /*const deleteItem = id => ({
    type: Types.DELETE_ITEM,
    payload: id
  });*/
  
  export default {
    createItemCar,
    createItemBike,
    createItemMoto,
    createItemYonk,
    Types
  };