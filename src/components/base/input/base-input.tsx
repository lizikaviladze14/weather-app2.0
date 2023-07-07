import './base-input.scss';
import React from "react";

interface Props extends React.PropsWithoutRef<any> {
    placeholder: string;
    onInput?: (value: string) => void;
    onBlur?: (value: string) => void;
}

const BaseInput: React.FC<Props> = ({ placeholder, onInput, onBlur }) => {
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (onBlur) {
            onBlur(e.currentTarget.value);
        }
    };

    return (
        <div className={"base-input"}>
            <input
                placeholder={placeholder}
                onInput={e => onInput && onInput(e.currentTarget.value)}
                onBlur={handleBlur}
            />
        </div>
    )
}

export default BaseInput;
