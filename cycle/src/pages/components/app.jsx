import React, {useState} from "react";
import Moment from "moment";
import "../../styles/HomepageStyle.css";
import Navbar from "../Navigation/navigation";


function MenstrualFlow() {
    const [lastFlowDate, setLastFlowDate] = useState("");
    const [cycleLength, setCycleLength] = useState("");
    const [period, setNextPeriod] = useState("")
    const [ovulationDate, setOvulationDate] = useState("")

    const handleLastFlowDateFormat = (event) => {
        const date = Moment(event.target.value).format('YYYY-MM-DD');
        setLastFlowDate(date);
    };

    const calculatePeriod = () => {
        const lastFlow = Moment(lastFlowDate);
        const cycleDays = parseInt(cycleLength);
        const ovulation = lastFlow.add(cycleDays - 14, "days");
        const nextPeriod = ovulation.add(7, "days").format("dddd, MMMM Do YYYY");

        setNextPeriod(nextPeriod);
    }

    const calculateOvulationDate = () => {
        const periodStart = Moment(lastFlowDate);
        const periodEnd = Moment(lastFlowDate).add(cycleLength - 1, "days");
        const ovulation = periodStart.add(Math.floor((cycleLength - 14) / 2), "days");

        setOvulationDate(ovulation.format("dddd, MMMM Do YYYY"));
    }


    return (
        <React.Fragment>
            <Navbar/>
            <div className="background-image">
                <div className="container">
                    <div className="form-container">
                        <h1>WELCOME TO X'S MENSTRUAL FLOW TRACKER</h1>
                        <form>
                            <div className="form-group">
                                <label htmlFor="lastFlowDate"> Last Flow Date</label>
                                <input
                                    type="date"
                                    id="lastFlowDate"
                                    value={lastFlowDate}
                                    onChange={(e) => setLastFlowDate(e.target.value)}
                                />
                                {/*<br/><br/>*/}
                            </div>

                            <div className="form-group">
                                <label htmlFor="cycleLength" className="Cl"> Cycle Length</label>
                                <input type="number"
                                       id="cycleLength"
                                       placeholder="Enter cycle length"
                                       style={{
                                           fontSize: "15px",
                                           fontWeight: "bold"
                                       }}
                                       value={cycleLength} onChange={(e) => setCycleLength(e.target.value)}
                                />
                            </div>

                            <button type="button" className="calculate-button" onClick={calculatePeriod}>Calculate Next
                                Period Date
                            </button>
                            <button type="button" className="calculate-ovul-button" onClick={calculateOvulationDate}>
                                Calculate Ovulation Date
                            </button>
                        </form>
                        {period && (
                            <p className="result">Your next period will start on <strong>{period}</strong></p>
                        )}
                        {ovulationDate && (
                            <p className="result">
                                Your Approximated ovulation date will be on<strong>{ovulationDate}</strong></p>
                        )}

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default MenstrualFlow;