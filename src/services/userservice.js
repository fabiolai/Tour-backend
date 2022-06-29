class UserServiceS{


    static testServiceFunction(req) {
        req.body.Names= req.body.Names.toUpperCase();
       const {num1,num2} = req.body;
       const sum = num1 + num2;
       const prod = num1 * num2;
       req.body.sum = sum;
       req. body. pro = prod
        return req.body;
    }

}



export default UserServiceS;