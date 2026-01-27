
  import validator from "validator";

 export const useValidateProduct = (name,price,description,imageUrl) => {
  if (validator.isEmpty(name)) return "Name is required";
  if (!validator.isNumeric(price.toString())) return "Price must be a number";
  if (validator.isEmpty(description)) return "Description is required";
  if (!validator.isURL(imageUrl)) return "Image must be a valid URL";

  return null;
};