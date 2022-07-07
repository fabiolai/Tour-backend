
import {format} from "date-fns";

class Date{

                                                
  const  {format} = require("date-fns");

console.log(format(new Date(), "dd-MM-yyyy"));

console.log(format(new Date(), "dd/MM/yyyy HH:mm:ss"));
console.log(format(new Date(), "PPPP"));

}


export default Date;