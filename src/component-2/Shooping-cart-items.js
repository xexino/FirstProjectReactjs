import { useState } from "react";

const ShoopingCartItems = () => {
    const [num, setNum] = useState(0)     
    const incNum = () => {
        setNum(num + 1);
    };
    const decNum = () => {
        if (num>0) {
            setNum(num - 1);
        }
        else { alert("m sorry you can't 😞") }
    };

    return (
    
        <li className="list-group-item d-flex justify-content-between ">
        <div className="border d-flex align-items-center">
            <img width={80} src="../img/laptop-case.jpg" alt="laptop-case" />
            <div className="p-2">
                <h6>Laptop Case</h6>
                <p className="m-0">12$.30</p>
            </div>
        </div>
        <div className="d-flex align-items-center border justify-content-end">
            <button className="btn btn-warning m-1" onClick={decNum}>-</button>
            {/* <input type="number" defaultValue={num} className="form-control w-25 m-1" /> */}
             <h2>{ num }</h2>
            <button className="btn btn-success m-1 fw-bold" onClick={incNum}>+</button>
            <button className="btn btn-danger m-1 fw-bold" ><i className="fas fa-trash" /></button>
        </div>
    </li>


    );
}
 
export default ShoopingCartItems;