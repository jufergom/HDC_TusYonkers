import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
  items:{
    itemsCarros: [{id:1,img:'https://www.copartes.com/autoflux/imagenes_catalogo/cc5095_ODYSSEY%202005%20BUMPER%20SIN%20NEBLINERA.jpg',nombre:'Jonker Mania',pieza:'Bumper',modelo:'A65',marca:'Toyota'},
                  {id:2,img:'https://www.copartes.com/autoflux/imagenes_catalogo/cc5095_ODYSSEY%202005%20BUMPER%20SIN%20NEBLINERA.jpg',nombre:'Jonker Mania',pieza:'Bumper',modelo:'A65',marca:'Toyota'},
                  {id:3,img:'https://www.copartes.com/autoflux/imagenes_catalogo/cc5095_ODYSSEY%202005%20BUMPER%20SIN%20NEBLINERA.jpg',nombre:'Jonker Mania',pieza:'Bumper',modelo:'A65',marca:'Toyota'},
                  {id:4,img:'https://www.copartes.com/autoflux/imagenes_catalogo/cc5095_ODYSSEY%202005%20BUMPER%20SIN%20NEBLINERA.jpg',nombre:'Jonker Mania',pieza:'Bumper',modelo:'A65',marca:'Toyota'},
                  {id:5,img:'https://www.copartes.com/autoflux/imagenes_catalogo/cc5095_ODYSSEY%202005%20BUMPER%20SIN%20NEBLINERA.jpg',nombre:'Jonker Mania',pieza:'Bumper',modelo:'A65',marca:'Toyota'}],
    itemsBici : [{id:1,img:'https://http2.mlstatic.com/rayos-rin-bicicleta-montana-ruta-r26-r29-r275-290mm-acero--D_NQ_NP_16949-MLM20130269439_072014-F.jpg',nombre:'Jonker Tok',pieza:'Rin',modelo:'Xinxu',marca:'Xin'},
                {id:2,img:'https://http2.mlstatic.com/rayos-rin-bicicleta-montana-ruta-r26-r29-r275-290mm-acero--D_NQ_NP_16949-MLM20130269439_072014-F.jpg',nombre:'Jonker Tok',pieza:'Rin',modelo:'Xinxu',marca:'Xin'},
                {id:3,img:'https://http2.mlstatic.com/rayos-rin-bicicleta-montana-ruta-r26-r29-r275-290mm-acero--D_NQ_NP_16949-MLM20130269439_072014-F.jpg',nombre:'Jonker Tok',pieza:'Rin',modelo:'Xinxu',marca:'Xin'},
                {id:4,img:'https://http2.mlstatic.com/rayos-rin-bicicleta-montana-ruta-r26-r29-r275-290mm-acero--D_NQ_NP_16949-MLM20130269439_072014-F.jpg',nombre:'Jonker Tok',pieza:'Rin',modelo:'Xinxu',marca:'Xin'},
                {id:5,img:'https://http2.mlstatic.com/rayos-rin-bicicleta-montana-ruta-r26-r29-r275-290mm-acero--D_NQ_NP_16949-MLM20130269439_072014-F.jpg',nombre:'Jonker Tok',pieza:'Rin',modelo:'Xinxu',marca:'Xin'}],
    itemsMotos:[{id:1,img:'https://i.ebayimg.com/thumbs/images/g/MEAAAOSwzRFajEwx/s-l225.jpg',nombre:'Jonker Pox',pieza:'Piston',modelo:'Cuz',marca:'Janz'},
    {id:2,img:'https://i.ebayimg.com/thumbs/images/g/MEAAAOSwzRFajEwx/s-l225.jpg',nombre:'Jonker Pox',pieza:'Piston',modelo:'Cuz',marca:'Janz'},
    {id:3,img:'https://i.ebayimg.com/thumbs/images/g/MEAAAOSwzRFajEwx/s-l225.jpg',nombre:'Jonker Pox',pieza:'Piston',modelo:'Cuz',marca:'Janz'},
    {id:4,img:'https://i.ebayimg.com/thumbs/images/g/MEAAAOSwzRFajEwx/s-l225.jpg',nombre:'Jonker Pox',pieza:'Piston',modelo:'Cuz',marca:'Janz'},
    {id:5,img:'https://i.ebayimg.com/thumbs/images/g/MEAAAOSwzRFajEwx/s-l225.jpg',nombre:'Jonker Pox',pieza:'Piston',modelo:'Cuz',marca:'Janz'}],
    yonkers:[{id:1,img:'http://gruasenchicago.com/images/autopartes-4.png',nombre:'AutoPartes',ubicacion:'SPS circumvalacion'},
    {id:2,img:'http://gruasenchicago.com/images/autopartes-4.png',nombre:'AutoPartes',ubicacion:'SPS circumvalacion'},
    {id:3,img:'http://gruasenchicago.com/images/autopartes-4.png',nombre:'AutoPartes',ubicacion:'SPS circumvalacion'},
    {id:4,img:'http://gruasenchicago.com/images/autopartes-4.png',nombre:'AutoPartes',ubicacion:'SPS circumvalacion'},
    {id:5,img:'http://gruasenchicago.com/images/autopartes-4.png',nombre:'AutoPartes',ubicacion:'SPS circumvalacion'}],
  }
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CREATE_ITEM_CAR: {
      console.log(action);

      let item = action.payload;
      let newItem = { id: state.items.length + 1, img: item.i, nombre: item.n, pieza: item.p, modelo:item.mo, marca:item.mar};
      let newState = _.cloneDeep(state);
      newState.items.itemsCarros.push(newItem);
      return newState;
    }
    case ACTIONS.Types.CREATE_ITEM_BIKE: {
      console.log(action);

      let item = action.payload;
      let newItem = { id: state.items.length + 1, img: item.i, nombre: item.n, pieza: item.p, modelo:item.mo, marca:item.mar};
      let newState = _.cloneDeep(state);
      newState.items.itemsBici.push(newItem);
      return newState;
    }
    case ACTIONS.Types.CREATE_ITEM_MOTO: {
      console.log(action);

      let item = action.payload;
      let newItem = { id: state.items.length + 1, img: item.i, nombre: item.n, pieza: item.p, modelo:item.mo, marca:item.mar};
      let newState = _.cloneDeep(state);
      newState.items.itemsMotos.push(newItem);
      return newState;
    }

    case ACTIONS.Types.CREATE_ITEM_YONKER: {
      console.log(action);

      let item = action.payload;
      let newItem = { id: state.items.length + 1, img: item.i, nombre: item.n, ubicacion: item.u};
      let newState = _.cloneDeep(state);
      newState.items.yonkers.push(newItem);
      return newState;
    }

    default:
      return state;
  }
};

export default todoReducer;