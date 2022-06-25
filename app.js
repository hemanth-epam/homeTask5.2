let input=process.argv.slice(2);
//console.log(input);

if (input[0] == "--operation") {
    const vals = input.slice(2);
    //console.log(vals);
    switch(input[1]){
        case "addition":
            let sum = 0;
            if (vals.length==0) {
            console.log("No numbers, so default sum value will be generated");
            }
            for (let i=0;i<vals.length;i++) {
            if (!isNaN(Number(vals[i]))) {
                sum += Number(vals[i]);
            } else {
                console.log(`invalid number at index ${i+1}, skipping value ${vals[i]}`);
            }
            }
            console.log(sum);
            break;

        case "multiply":
            let product = 1;
            if (vals.length==0) {
            console.log("No numbers, so default product value will be generated");
            }
            for (let i=0;i<vals.length;i++) {
            if (!isNaN(Number(vals[i]))) {
                product *= Number(vals[i]);
            } else {
                console.log(`invalid number at index ${i+1}, skipping value ${vals[i]}`);
            }
            }
            console.log(product);
            break;
        
        case "subtraction":
            if (vals.length!= 2) {
                console.log("Invalid number of arguments for operation");
            }else {
                if (isNaN(vals[0]) || isNaN(vals[1])) {
                  console.log("invalid number(s)");
                } else {
                  console.log(vals[0]-vals[1]);
                }
            }
            break;
        
        case "division":
            if (vals.length!= 2) {
                console.log("Invalid number of arguments for operation");
            } else {
                if (isNaN(vals[0]) || isNaN(vals[1])) {
                  console.log("invalid number(s)");
                } else {
                  console.log(vals[0]/vals[1]);
                }
            }
            break;

        default:
            console.log("No operation is mentioned / Invalid operation");
    }
  } else {
    console.log("No operation mentioned, please follow format : --operation (operation) ...numbers ");
  }
  