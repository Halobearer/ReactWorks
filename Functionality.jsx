import React, {useState} from "react";

function TicTacToe() {

    const [board, setBoard] = useState(Array(9).fill(0));
    const [player, setPlayer] = useState("X");

    const handleClick = (index) => {
        const newBoard = [...board];
        newBoard[index] = player;
        setBoard(newBoard);

        setPlayer(player === "X" ?"O" :"X");
    }

    const eachBox = [];

    for (let i = 0; i < 9; i++) {
        eachBox.push()
    }
    return(
        <div className="Box-Container">
            <div className="R1-c1" style={{
                backgroundColor:"yellow",
                height:"450px",

            }}></div>
            <div className="R1-c2"></div>
            <div className="R1-c3"></div>
            <div className="R2-c1"></div>
            <div className="R2-c2"></div>
            <div className="R2-c3"></div>
            <div className="R3-c1"></div>
            <div className="R3-c2"></div>
            <div className="R3-c3"></div>

        </div>
    )
}