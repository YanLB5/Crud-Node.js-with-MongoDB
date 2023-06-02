// const { error } = require("console");
// const fs = require("fs");
// const path = require("path");

// // Criar uma pasta
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//   if (error) {
//     return console.log("Erro: ", error);
//   }

//   console.log("Pasta criada com sucesso");

//   fs.writeFile(
//     path.join(__dirname, "/test", "test.html"),
//     "hello noode!",
//     (error) => {
//       if (error) {
//         return console.log("Erro: ", error);
//       }
//       console.log("Arquivo criado com sucesso!");

//       // Adicionar à um arquivo
//       fs.appendFile(
//         path.join(__dirname, "/test", "test.html"),
//         "Helo world!",
//         (error) => {
//           if (error) {
//             return console.log("Erro: ", error);
//           }

//           console.log("Arquivo modificado com sucesso!");

//           fs.readFile(
//             path.join(__dirname, "/test", "test.html"),
//             "utf8",
//             (error, data) => {
//               if (error) {
//                 return console.log("Erro:", error);
//               }
//               console.log(data);
//             }
//           ); // <-- Added closing parenthesis and curly brace
//         }
//       );
//     }
//   );
// });
