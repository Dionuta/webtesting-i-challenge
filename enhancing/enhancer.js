module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhancement < 20){
  return { ...item,
      name: item.name,
      enhancement: item.enhancement + 1,
      durability: item.durability
    }
  }else{
    return { ...item,
    name: item.name,
    enhancement: item.enhancement,
    durability: item.durability
    }
  }
}

function fail(item) {
  if(item.enhancement < 15){
  return { ...item,
    name: item.name,
    enhancement: item.enhancement,
    durability: item.durability - 5
   };
  }else if(item.enhancement >= 15 && item.enhancement < 16 ){
    return { ...item,
      name: item.name,
      enhancement: item.enhancement ,
      durability: item.durability - 10
     }
  }else if(item.enhancement >= 16){
    return { ...item,
      name: item.name,
      enhancement: item.enhancement - 1,
      durability: item.durability - 10
     }
  }
}

function repair(item) {
  return { ...item,
    name: item.name,
    enhancement: item.enhancement,
    durability: 100
  };
}

function get(item) {
  return { ...item };
}
