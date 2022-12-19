// import React, { useState } from "react";
// import "./Home.css";
// import CurrencyInput from "react-currency-input-field";

// const Home = () => {
//   const optionforSelect = ["Select Account", "SAVING", "PERSONAL", "BUSINESS"];
//   const [inputFields, setInputFields] = useState([
//     {
//       account: "Select Account",
//       debitamt: "",
//       creditamt: "",
//     },
//     {
//       account: "Select Account",
//       debitamt: "",
//       creditamt: "",
//     },
//     {
//       account: "Select Account",
//       debitamt: "",
//       creditamt: "",
//     },
//   ]);
//   const [sumdebit, setSumdebit] = useState(0);
//   const [sumcredit, setSumcredit] = useState(0);

//   let s1 = 0;
//   let s2 = 0;
//   const totalsum = (data) => {
//     let x = 0;
//     console.log("totalsumcalled");
//     console.log(inputFields);
//     console.log(data);
//     data.forEach((inpt) => {
//       if (inpt.debitamt === "") {
//         s1 = s1 + Number(x);
//       } else {
//         s1 = s1 + Number(inpt.debitamt);
//       }
//       if (inpt.creditamt === "") {
//         s2 = s2 + Number(x);
//       } else {
//         s2 = s2 + Number(inpt.creditamt);
//       }
//     });
//     setSumdebit(s1);
//     setSumcredit(s2);
//     console.log(s1, s2);
//   };
//   const handleFormChange = (index, event) => {
//     let data = [...inputFields];
//     data[index][event.target.name] = event.target.value;

//     setInputFields(data);
//     console.log(data, "from the select");
//   };

//   const handleFormChange1 = (index, value, name) => {
//     console.log(index, value, name);
//     let data = [...inputFields];
//     data[index][name] = value;
//     setInputFields(data);
//     console.log(data, "from 1");
//     totalsum(data);
//   };
//   const addFields = () => {
//     let newfield = {
//       account: "Select Account",
//       debitamt: "",
//       creditamt: "",
//     };

//     setInputFields([...inputFields, newfield]);
//   };

//   const removeFields = (event, index) => {
//     event.preventDefault();
//     console.log("remove field called");
//     let data = [...inputFields];
//     data.splice(index, 1);
//     console.log(data.length);
//     setInputFields(data);
//     totalsum(data);
//   };
//   return (
//     <div className="container">
//       <table>
//         <thead>
//           <tr>
//             <th>Accounts</th>
//             <th>Debit </th>
//             <th>Credit </th>
//             <th>&nbsp;</th>
//           </tr>
//         </thead>
//         <tbody></tbody>
//       </table>
//       <form>
//         {inputFields.map((input, index) => {
//           return (
//             <div key={index}>
//               <select
//                 name="account"
//                 value={input.account}
//                 onChange={(event) => handleFormChange(index, event)}
//               >
//                 {optionforSelect.map((op) => (
//                   <option key={op} value={op}>
//                     {op}
//                   </option>
//                 ))}
//               </select>
//               <CurrencyInput
//                 name="debitamt"
//                 decimalsLimit={2}
//                 value={input.debitamt}
//                 onValueChange={(value, name) => {
//                   handleFormChange1(index, value, name);
//                 }}
//               />
//               <CurrencyInput
//                 name="creditamt"
//                 decimalsLimit={2}
//                 value={input.creditamt}
//                 onValueChange={(value, name) => {
//                   handleFormChange1(index, value, name);
//                 }}
//               />

//               <button onClick={(event) => removeFields(event, index)}>
//                 Delete
//               </button>
//             </div>
//           );
//         })}
//       </form>
//       <table>
//         <thead>
//           <tr>
//             <th>
//               <div>
//                 <button onClick={addFields}>Add More..</button>
//               </div>
//             </th>
//             <th>
//               <div>Total </div>
//             </th>
//             <th>
//               <div className="debit">
//                 {Intl.NumberFormat("en-IN", {
//                   maximumSignificantDigits: 10,
//                 }).format(sumdebit)}
//               </div>{" "}
//             </th>
//             <th>
//               <div className="debit">
//                 {Intl.NumberFormat("en-IN", {
//                   maximumSignificantDigits: 10,
//                 }).format(sumcredit)}
//               </div>{" "}
//             </th>
//           </tr>
//         </thead>
//       </table>
//     </div>
//   );
// };
// export default Home;

// import React, { useState } from "react";
// import "./Home.css";
// import { AiFillDelete } from "react-icons/ai";

// import CurrencyInput from "react-currency-input-field";

// const Homee = () => {
//   const optionforSelect = ["Select Account", "SAVING", "PERSONAL", "BUSINESS"];
//   const [inputFields, setInputFields] = useState([
//     {
//       account: "Select Account",
//       debitamt: "",
//       creditamt: "",
//     },
//     {
//       account: "Select Account",
//       debitamt: "",
//       creditamt: "",
//     },
//     {
//       account: "Select Account",
//       debitamt: "",
//       creditamt: "",
//     },
//   ]);
//   const [sumdebit, setSumdebit] = useState(0);
//   const [sumcredit, setSumcredit] = useState(0);

//   let s1 = 0;
//   let s2 = 0;
//   const totalsum = (data) => {
//     let x = 0;
//     console.log("totalsumcalled");
//     console.log(inputFields);
//     console.log(data);
//     data.forEach((inpt) => {
//       if (inpt.debitamt === "") {
//         s1 = s1 + Number(x);
//       } else {
//         s1 = s1 + Number(inpt.debitamt);
//       }
//       if (inpt.creditamt === "") {
//         s2 = s2 + Number(x);
//       } else {
//         s2 = s2 + Number(inpt.creditamt);
//       }
//     });
//     setSumdebit(s1);
//     setSumcredit(s2);
//     console.log(s1, s2);
//   };
//   const handleFormChange = (index, event) => {
//     let data = [...inputFields];
//     data[index][event.target.name] = event.target.value;

//     setInputFields(data);
//     console.log(data, "from the select");
//   };

//   const handleFormChange1 = (index, value, name) => {
//     console.log(index, value, name);
//     let data = [...inputFields];
//     data[index][name] = value;
//     setInputFields(data);
//     console.log(data, "from 1");
//     totalsum(data);
//   };
//   const addFields = () => {
//     let newfield = {
//       account: "Select Account",
//       debitamt: "",
//       creditamt: "",
//     };

//     setInputFields([...inputFields, newfield]);
//   };

//   const removeFields = (event, index) => {
//     event.preventDefault();
//     console.log("remove field called");
//     let data = [...inputFields];
//     data.splice(index, 1);
//     console.log(data.length);
//     setInputFields(data);
//     totalsum(data);
//   };
//   return (
//     <div className="container">
//       <table>
//         <thead>
//           <tr>
//             <th className="ac">Accounts</th>
//             <th className="de">Debit </th>
//             <th className="cr">Credit </th>
//           </tr>
//         </thead>
//       </table>
//       <form>
//         {inputFields.map((input, index) => {
//           return (
//             <div key={index}>
//               <select
//                 name="account"
//                 value={input.account}
//                 onChange={(event) => handleFormChange(index, event)}
//               >
//                 {optionforSelect.map((op) => (
//                   <option key={op} value={op}>
//                     {op}
//                   </option>
//                 ))}
//               </select>
//               <CurrencyInput
//                 name="debitamt"
//                 decimalsLimit={2}
//                 value={input.debitamt}
//                 onValueChange={(value, name) => {
//                   handleFormChange1(index, value, name);
//                 }}
//               />
//               <CurrencyInput
//                 name="creditamt"
//                 decimalsLimit={2}
//                 value={input.creditamt}
//                 onValueChange={(value, name) => {
//                   handleFormChange1(index, value, name);
//                 }}
//               />

//               <button onClick={(event) => removeFields(event, index)}>
//                 <AiFillDelete />
//               </button>
//             </div>
//           );
//         })}
//       </form>
//       <table>
//         <thead>
//           <tr>
//             <th>
//               <div>
//                 <button onClick={addFields}>+Add Row</button>
//               </div>
//             </th>
//             <th>
//               <div>Total </div>
//             </th>
//             <th>
//               <div className="debit">
//                 {Intl.NumberFormat("en-IN", {
//                   maximumSignificantDigits: 10,
//                 }).format(sumdebit)}
//               </div>{" "}
//             </th>
//             <th>
//               <div className="credit">
//                 {Intl.NumberFormat("en-IN", {
//                   maximumSignificantDigits: 10,
//                 }).format(sumcredit)}
//               </div>{" "}
//             </th>
//           </tr>
//         </thead>
//       </table>
//     </div>
//   );
// };
// export default Homee;
// .container {
//   margin: auto;
//   width: 50%;
//   margin-top: 10%;
//   padding: 10px;
// }
// table,
// tr {
//   border: 1px solid black;
//   border-collapse: collapse;
//   padding-right: 30px;
// }

// th {
//   border: 1px solid black;
// }
// .debit {
//   padding-left: 153px;
// }
// .credit {
//   padding-left: 165px;
// }

// .ac {
//   padding-right: 40px;
// }
// .de {
//   padding-right: 136px;
// }
// .cr {
//   padding-right: 130px;
// }
