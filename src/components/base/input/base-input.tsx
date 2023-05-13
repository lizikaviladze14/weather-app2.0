import './base-input.scss';
import React from "react";

interface Props extends React.PropsWithoutRef<any> {
    placeholder: string;
    onInput?: (value: string) => void;
}

const BaseInput: React.FC<Props> = ({placeholder, onInput}) => {
    return (
        <div className={"base-input"}>
            <input
                placeholder={placeholder}
                onInput={e => onInput(e.currentTarget.value)}
            />
        </div>
    )
}

export default BaseInput;