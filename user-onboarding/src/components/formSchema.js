//Here goes the schema for the form
import * as yup from "yup";

const formSchema = yup.object().shape({
    first_name: yup.string().trim().required("first name is required!"),
    last_name: yup.string().trim().required("last name is required!"),
    email: yup.string().email("Must be a valid email address").required("You've gotta have an email"),
    password: yup.string().trim().required("You must have a password").min(6, "pw must be atleast 6 chars long"),
    tos: yup.boolean().oneOf([true],"Must agree to terms of service"),
    civil: yup.string().oneOf(["single", "married"], "Civil status is required"),
})

export default formSchema;