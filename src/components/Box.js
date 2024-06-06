import React from 'react'

// const input_function={
//   "
//   ## Compiler Problem
  
//   You need to write a very simple function that checks the code is syntactically correct or not,
//   especially the brackets. You need to check if all the brackets opened are closed within the code or not.
  
//   Please take a look at the following pseudo code for structure :
  
//   function main(){
//       string code = `
//           function test(){
//               print "hello world";
//           }}
//       `
//       checkSyntax(code)
//   }
  
//   function checkSyntax(stringCode){
//       // Write your code here
//   }
  
  
//   The above example should throw an error as there's an extra curly brace. "
// }

export const Box = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100vw',height:'100vh'}}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'50%',height:'auto',border:'1px solid #000',padding:'20px',borderRadius:'7px'}}>
        <input
          // id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
        />
        </div>
    </div>
  )
}
