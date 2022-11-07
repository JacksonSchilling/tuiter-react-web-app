import React from "react";
import TuitItem from "./TuitItem.js";
import {useSelector} from "react-redux";

const TuitList = () => {
    const tuitsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                tuitsArray.map(Tuit =>
                    <TuitItem
                        key={Tuit._id} Tuit={Tuit}/> )
            }
        </ul>
    );
};
export default TuitList;