import { useEffect, useState } from "react";


export default function CronoClock() {
    const [crono, setCrono] = useState(0);
    const [start, setStart] = useState(false);


    useEffect(() => {

        let interval;
        if (start) {
            interval = setInterval(() => {
                setCrono((prevCrono) => prevCrono + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval)
    }, [start]);



    return (
        <div className="crono">
            <h2>{crono}</h2>
            <div className="crono__in">
                <button className="crono__in--active" onClick={() => setStart(true)}>Start</button>
                <button className="crono__in--active" onClick={() => setStart(false)}>Stop</button>
                <button className="crono__in--active" onClick={() => setStart(true)}>Resume</button>
                <button className="crono__in--active" onClick={() => setCrono(0)}>Reset</button>
            </div>
        </div>
    )
}