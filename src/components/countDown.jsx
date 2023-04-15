import { useEffect, useState } from "react";


export default function CountDown(){
    const [count, setCount] = useState("");
    // const [time , setTime] = useState(new Date());
    // console.log(count);
    // const setDate = (e) => {
    //     const newTime = e.target.value;
    //     const date = new Date(newTime);
    //     setTime(date);
    // }
    useEffect(() => {

        // let countDownRate = new Date(time).getTime();
        
        let countDownRate = new Date("Jan May 11 2023 00:00:00").getTime();

        setInterval(() => {
            let rate = new Date().getTime();
            let down = countDownRate - rate;
            let days = Math.floor(down / (1000 * 60 * 60 * 24));
            let hours = Math.floor((down % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((down % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((down % (1000 * 60)) / 1000);
            
            setCount(`Quedan ${days} Días ${hours} Horas ${minutes} Minutos y ${seconds} Segundos para terminar el Bootcamp`);
        }, 1000)
    }, [])

    return <div className="countDown">
            {/* <label for="selectDate">Select Your date to CountDown</label>
            <input name="selectDate" onInput={setDate} type="date"></input> */}
            <h2>{count}</h2>
    </div>
}