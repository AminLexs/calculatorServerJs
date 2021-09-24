#Simple calculator
How to use
1) Define port and domain name in config/default.json
   (Default value of port is 5000, domain name - localhost)
   
2) Run server.js or use script "npm start"
3) At localhost:5000 (default) use GET request as:
   "/sum/:num1/:num2" - Sum two numbers
   "/sub/:num1/:num2" - Subtraction
   "/mul/:num1/:num2" - Multiplication
   "/div/:num1/:num2" - Division
   "/pow/:num1/:num2" - Power
   "/log/:num1/:num2" - Logarithm
   Add to GET request lang for set language.
   For example, "/sum/:num1/:num2/:lang"
   Example of response : {"result":5}.
   Example of error: {"error":"Internal Server Error. Division by zero"}.
4) For tests add tests files to directory "test". Files must be with extension "test.js"
5) Script for run test "npm test"
