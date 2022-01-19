import Registration from "./Registration";
import './Form.css'

const Form = (props) => {
    const SaveExpenseDataHandler = (enteredExpenseData) =>{
      const expenseData = {
        ...enteredExpenseData,
        id:Math.random().toString(),
      };
      props.onLogon(expenseData)
    }
      return (
        <div className="new-expense">
          <Registration  onSaveExpenseData={SaveExpenseDataHandler}/>
        </div>
      );
    };
    
    export default Form;