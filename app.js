import { get } from "https";
import { writeFile } from "fs";

const url =
    "https://raw.githubusercontent.com/4nth0nyl1MHC/UK-Scanning-Directory-2019/77136ccadea675af2345a40a0287f93ebe40e51f/UK%20Scanning%20Directory%20-%20January%202019/Various%20Misc%20Files/UK%20Airports%202019%20(VHF%20%26%20UHF)/London%20Swanwick%20Control%202017.txt";

get(url, (response) => {
    let data = "";
    response.on("data", (chunk) => {
        data += chunk;
    });
    response.on("end", () => {
        const lines = data.split("\n");
        const count = lines.length;
        console.log(`Кількість рядків: ${count}`);
        const reversed = data.split("").reverse().join("");
        writeFile("reversed.txt", reversed, (error) => {
            if (error) {
                console.error(error);
            } else {
                console.log("Файл успішно записано");
            }
        });
    });
})
    .on("error", (error) => {
        console.error(error);
    });