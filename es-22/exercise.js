let primitive = true;

switch (typeof primitive) {
    case "number":
    console.log("The value is a number.");
    break;
  case "string":
    console.log("The value is a string.");
    break;
  case "boolean":
    console.log("The value is a boolean.");
    break;
  default:
    console.log("The value is not a number, string, or boolean.");
}