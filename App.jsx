import React, { useState, useEffect } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [selectedTip, setSelectedTip] = useState(15);

  const [tipAmount, setTipAmount] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [perPerson, setPerPerson] = useState(0);

  const [errors, setErrors] = useState({});

  const tipOptions = [10, 15, 20, 25];

  useEffect(() => {
    calculate();
  }, [bill, people, selectedTip]);

  const calculate = () => {
    let tempErrors = {};

    const billValue = parseFloat(bill);
    const peopleValue = parseInt(people);

    if (bill && (isNaN(billValue) || billValue <= 0)) {
      tempErrors.bill = "Enter valid bill amount";
    }

    if (selectedTip < 0 || selectedTip > 50) {
      tempErrors.tip = "Tip should be between 0–50%";
    }

    if (
      people &&
      (isNaN(peopleValue) ||
        peopleValue < 1 ||
        !Number.isInteger(peopleValue))
    ) {
      tempErrors.people = "Enter whole number ≥ 1";
    }

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length > 0) {
      setTipAmount(0);
      setGrandTotal(0);
      setPerPerson(0);
      return;
    }

    if (billValue > 0 && peopleValue > 0) {
      const tip = (billValue * selectedTip) / 100;
      const total = billValue + tip;
      const each = total / peopleValue;

      setTipAmount(tip.toFixed(2));
      setGrandTotal(total.toFixed(2));
      setPerPerson(each.toFixed(2));
    }
  };

  const reset = () => {
    setBill("");
    setPeople("");
    setCustomTip("");
    setSelectedTip(15);
    setErrors({});
    setTipAmount(0);
    setGrandTotal(0);
    setPerPerson(0);
  };

  return (
    <div style={styles.body}>
      <div style={styles.card}>
        <h1 style={styles.heading}>
          💰 Smart Tip Calculator
        </h1>

        {/* Bill */}
        <div style={styles.group}>
          <label>Bill Amount (₹)</label>

          <input
            type="number"
            value={bill}
            onChange={(e)=>setBill(e.target.value)}
            placeholder="Enter bill amount"
            style={styles.input}
          />

          <small style={styles.error}>
            {errors.bill}
          </small>
        </div>

        {/* Tips */}

        <div style={styles.group}>
          <label>Choose Tip %</label>

          <div style={styles.tipGrid}>
            {tipOptions.map((tip)=>(
              <button
                key={tip}
                onClick={()=>{
                  setSelectedTip(tip)
                  setCustomTip("")
                }}

                style={{
                  ...styles.tipBtn,

                  background:
                    selectedTip===tip
                    ? "#5B5FEF"
                    :"white",

                  color:
                    selectedTip===tip
                    ?"white"
                    :"black"
                }}
              >
                {tip}%
              </button>
            ))}
          </div>

          <input
            type="number"
            placeholder="Custom Tip %"
            value={customTip}
            onChange={(e)=>{
              setCustomTip(e.target.value)
              setSelectedTip(
                Number(e.target.value)
              )
            }}
            style={styles.input}
          />

          <small style={styles.error}>
            {errors.tip}
          </small>

        </div>


        {/* People */}

        <div style={styles.group}>
          <label>Number of People</label>

          <input
            type="number"
            value={people}
            onChange={(e)=>
            setPeople(e.target.value)}
            placeholder="Enter people"
            style={styles.input}
          />

          <small style={styles.error}>
            {errors.people}
          </small>
        </div>


        {/* Results */}

        <div style={styles.resultContainer}>

          <div style={styles.box}>
            <p>Total Tip</p>
            <h2>₹{tipAmount}</h2>
          </div>

          <div style={styles.box}>
            <p>Grand Total</p>
            <h2>₹{grandTotal}</h2>
          </div>

          <div style={styles.box}>
            <p>Per Person</p>
            <h2>₹{perPerson}</h2>
          </div>

        </div>


        <button
        style={styles.reset}
        onClick={reset}
        >
          Reset
        </button>

      </div>
    </div>
  );
}


const styles={

body:{
height:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
background:
"linear-gradient(135deg,#667eea,#764ba2)",

padding:"20px"
},

card:{

width:"420px",
maxWidth:"100%",

padding:"30px",

borderRadius:"25px",

background:
"rgba(255,255,255,0.18)",

backdropFilter:"blur(18px)",

boxShadow:
"0 8px 30px rgba(0,0,0,.2)",

color:"white"
},

heading:{

textAlign:"center",
marginBottom:"25px"
},

group:{

marginBottom:"18px"
},

input:{

width:"100%",
padding:"14px",
border:"none",
borderRadius:"10px",
marginTop:"8px",
fontSize:"15px"
},

tipGrid:{

display:"grid",
gridTemplateColumns:
"repeat(4,1fr)",

gap:"10px",

marginTop:"10px",
marginBottom:"15px"
},

tipBtn:{

padding:"12px",
border:"none",
cursor:"pointer",
borderRadius:"10px",
fontWeight:"bold",
transition:".3s"
},

resultContainer:{

display:"grid",
gap:"12px",
marginTop:"25px"
},

box:{

background:
"rgba(255,255,255,.2)",

padding:"15px",

borderRadius:"12px",

display:"flex",
justifyContent:"space-between",
alignItems:"center"
},

reset:{

width:"100%",
marginTop:"25px",

padding:"15px",

border:"none",

borderRadius:"12px",

background:"#FF4B5C",

fontSize:"16px",

fontWeight:"bold",

color:"white",

cursor:"pointer"
},

error:{

color:"#ffd4d4",
fontSize:"12px"
}

}