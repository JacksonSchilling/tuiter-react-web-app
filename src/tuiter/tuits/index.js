import React from "react";
import TuitList from "../tuits/TuitList/TuitList";

const homeScreen = () => {
    return(
        <div className="row">
            <div className="col">
                <TuitList/>
            </div>
        </div>
    );
}
export default homeScreen;