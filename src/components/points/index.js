    import { fibonacciArr } from "../../core/constants/constants";
    import "./index.css";
    const Points = () => {

    return (
        <div className="points">
        {fibonacciArr.map((value,i) => {
            return <div key={i} id={i}> {value * 1000} դրամ</div>;
        })}
        </div>
    );    
    };

    export default Points;
