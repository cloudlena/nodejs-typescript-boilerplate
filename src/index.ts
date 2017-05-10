import { exists } from "fs";

exists("./package.json", (exists) => console.log(exists));
