import React, { useState } from "react";
import "./Home.css";
import { AiFillDelete } from "react-icons/ai";

//react-currency-input pakage for showing the input data in indian rupee format in input tag
import CurrencyInput from "react-currency-input-field";

const Home = () => {
  const optionforSelect = ["Select Account", "SAVING", "PERSONAL", "BUSINESS"];
  const [inputFields, setInputFields] = useState([
    {
      account: "Select Account",
      debitamt: "",
      creditamt: "",
    },
    {
      account: "Select Account",
      debitamt: "",
      creditamt: "",
    },
    {
      account: "Select Account",
      debitamt: "",
      creditamt: "",
    },
  ]);
  //useState to keep the state of second and third coloumn
  const [sumdebit, setSumdebit] = useState(0);
  const [sumcredit, setSumcredit] = useState(0);

  let s1 = 0;
  let s2 = 0;

  // function to calculate the updated sum as user fills the form
  const totalsum = (data) => {
    let x = 0;

    data.forEach((inpt) => {
      if (inpt.debitamt === "") {
        s1 = s1 + Number(x);
      } else {
        s1 = s1 + Number(inpt.debitamt);
      }
      if (inpt.creditamt === "") {
        s2 = s2 + Number(x);
      } else {
        s2 = s2 + Number(inpt.creditamt);
      }
    });
    setSumdebit(s1);
    setSumcredit(s2);
  };

  //handler to manage when user select (Select tag)
  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };

  //handler to manage when user inputs credit or debit amount
  const handleFormChange1 = (index, value, name) => {
    console.log(index, value, name);
    let data = [...inputFields];
    data[index][name] = value;
    setInputFields(data);
    totalsum(data);
  };

  // function to add a new row of form
  const addFields = () => {
    let newfield = {
      account: "Select Account",
      debitamt: "",
      creditamt: "",
    };

    setInputFields([...inputFields, newfield]);
  };

  //function to remove a row of form
  const removeFields = (event, index) => {
    event.preventDefault();
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
    totalsum(data);
  };

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th className="ac">Accounts</th>
            <th className="de">Debit </th>
            <th className="cr">Credit </th>
          </tr>
        </thead>
      </table>
      <form>
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <select
                name="account"
                value={input.account}
                onChange={(event) => handleFormChange(index, event)}
              >
                {optionforSelect.map((op) => (
                  <option key={op} value={op}>
                    {op}
                  </option>
                ))}
              </select>
              <CurrencyInput
                name="debitamt"
                decimalsLimit={2}
                value={input.debitamt}
                onValueChange={(value, name) => {
                  handleFormChange1(index, value, name);
                }}
              />
              <CurrencyInput
                name="creditamt"
                decimalsLimit={2}
                value={input.creditamt}
                onValueChange={(value, name) => {
                  handleFormChange1(index, value, name);
                }}
              />

              <button onClick={(event) => removeFields(event, index)}>
                <AiFillDelete />
              </button>
            </div>
          );
        })}
      </form>
      <table>
        <tbody>
          <tr>
            <th>
              <button onClick={addFields}>+Add Row</button>
            </th>
            <th>Total</th>
            <th>
              <div className="debit">
                {Intl.NumberFormat("en-IN", {
                  maximumSignificantDigits: 10,
                }).format(sumdebit)}
              </div>{" "}
            </th>
            <th>
              <div className="credit">
                {Intl.NumberFormat("en-IN", {
                  maximumSignificantDigits: 10,
                }).format(sumcredit)}
              </div>{" "}
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Home;
