import * as Yup from "yup" ;

 export const singupSchema =Yup.object({
    name:Yup.string().min(2).max(12).required("please in the name"),
    email:Yup.string().email().required("please inter the email"),
    password:Yup.string().min(6).required("please inter the password"),
    conform_password:Yup.string().required().oneOf([Yup.ref("password mudt matched")])
 })