import './base-loader.scss';
import React from "react";

const BaseLoader: React.FC = () => {
    return (
        <div className={"base-loader"}>
            <div className={"loader"} />
        </div>
    )
}

export default BaseLoader;
