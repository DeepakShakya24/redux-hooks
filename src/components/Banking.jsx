import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const Form = () => {
  const [amount, setAmont] = useState("");
  const dispatch = useDispatch();
  const isSavingAccount = useSelector((state) => state.banking.isSavingAccount);

  const handleDeposit = () => {
    dispatch({ type: "DEPOSIT", amount: parseInt(amount) });
  };
  const handleWithdraw = () => {
    dispatch({ type: "WITHDRAW", amount: parseInt(amount) });
  };
  const handleInterest = () => {
    dispatch({ type: "COLLECT_INTEREST" });
  };
  const handleDelete = () => {
    dispatch({
      type: "DELETE_ACCOUNT",
    });
  };
  const handleAccountChange = () => {
    dispatch({
      type: "CHANGE_ACCOUNT",
    });
  };

  return (
    <div className="form-group">
      <input
        value={amount}
        onChange={(e) => setAmont(e.target.value)}
        type="email"
        className="form-control"
      />
      <button onClick={handleDeposit} type="button" className="btn btn-primary">
        Deposit
      </button>
      <button
        onClick={handleWithdraw}
        type="button"
        className="btn btn-secondary"
      >
        Withdraw
      </button>
      <button
        onClick={handleInterest}
        type="button"
        className="btn btn-success"
      >
        CollectInterest
      </button>
      <button onClick={handleDelete} type="button" className="btn btn-danger">
        Delete Account
      </button>
      <button
        onClick={handleAccountChange}
        type="button"
        className="btn btn-warning"
      >
        Change Account Type
      </button>
      {isSavingAccount ? (
        <h1>Saving Account</h1>
      ) : (
        <h1>Checking Account Balance</h1>
      )}
    </div>
  );
};

export default Form;
