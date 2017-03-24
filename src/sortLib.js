class Sorter{

  constructor(userData){
    this.data = userData;
  }

  sortData(field, order){
    this.data.sort(function(obj1, obj2) {
      if(order){
        if (obj1[field] > obj2[field]) return -1;
        if (obj1[field] < obj2[field]) return 1;
        return 0;
      }else{
        if (obj1[field] < obj2[field]) return -1;
        if (obj1[field] > obj2[field]) return 1;
        return 0;}

    });
  }

  getData(){
    return this.data;
  }
}

export default Sorter;
