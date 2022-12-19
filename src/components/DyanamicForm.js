import React, { useState } from "react";
import "./dynamicform.css";
import CurrencyInput from "react-currency-input-field";

const DyanamicForm = () => {
  const [inputFields, setInputFields] = useState([
    {
      account: ["Select Account", "SAVING", "PERSONAL", "BUSINESS"],
      debitamt: "",
      creditamt: "",
    },
    {
      account: ["Select Account", "SAVING", "PERSONAL", "BUSINESS"],
      debitamt: "",
      creditamt: "",
    },
    {
      account: ["Select Account", "SAVING", "PERSONAL", "BUSINESS"],
      debitamt: "",
      creditamt: "",
    },
  ]);

  const [sumdebit, setSumdebit] = useState(0);
  const [sumcredit, setSumcredit] = useState(0);

  const total = () => {
    let s1 = 0;
    let s2 = 0;
    console.log("checktotal");
    inputFields.forEach((inpt) => {
      if (inpt.debitamt === "") {
        s1 = s1 + 0;
      } else {
        s1 = s1 + Number(parseFloat(inpt.debitamt.replace(/,/g, "")));
      }
      if (inpt.creditamt === "") {
        s2 = s2 + 0;
      } else {
        s2 = s2 + Number(parseFloat(inpt.creditamt.replace(/,/g, "")));
      }
    });
    console.log(typeof s1, typeof s2);
    setSumdebit(s1);
    setSumcredit(s2);
  };

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    if (event.target.value === undefined) {
      data[index][event.target.name] = "";
    } else {
      data[index][event.target.name] = event.target.value;
    }
    console.log(typeof event.target.name);
    setInputFields(data);
    total();
  };

  const addFields = () => {
    let newfield = {
      account: ["Select Account", "SAVING", "PERSONAL", "BUSINESS"],
      debitamt: "",
      creditamt: "",
    };

    setInputFields([...inputFields, newfield]);
  };

  const removeFields = (event, index) => {
    event.preventDefault();

    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
    total();
  };
  return (
    <div className="App">
      <table className="tablec">
        <thead>
          <tr>
            <th>Accounts</th>
            <th>Debit </th>
            <th>Credit </th>
            <th>&nbsp;</th>
          </tr>
        </thead>
      </table>

      <form>
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <select
                name="account"
                onChange={(event) => handleFormChange(index, event)}
              >
                <option value={input.account[0]}>Select Account</option>
                <option value={input.account[1]}>Saving</option>
                <option value={input.account[2]}>Personal</option>
                <option value={input.account[3]}>Business</option>
              </select>
              <CurrencyInput
                allowDecimals
                decimalSeparator="."
                name="debitamt"
                onValueChange={(event) => handleFormChange(index, event)}
              />
              <CurrencyInput
                allowDecimals
                decimalSeparator="."
                name="creditamt"
                onValueChange={(event) => handleFormChange(index, event)}
              />

              <button onClick={(event) => removeFields(event, index)}>
                Delete
              </button>
            </div>
          );
        })}
      </form>
      <div className="total">
        <div>
          <button onClick={addFields}>Add More..</button>
          <div>Total </div>
        </div>

        <div>
          {Intl.NumberFormat("en-IN", {
            maximumSignificantDigits: 10,
          }).format(sumdebit)}
        </div>
        <div>
          {Intl.NumberFormat("en-IN", {
            maximumSignificantDigits: 10,
          }).format(sumcredit)}
        </div>
      </div>
    </div>
  );
};

export default DyanamicForm;
