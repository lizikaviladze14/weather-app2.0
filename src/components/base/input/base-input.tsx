import "./base-input.scss";
import React from "react";
import search from "../../../assets/images/search.svg";

interface Props extends React.PropsWithoutRef<any> {
  placeholder: string;
  onInput?: (value: string) => void;
  onKeydown?: (value: string) => void;
  errorMsg: string | null;
}

const BaseInput: React.FC<Props> = ({
  placeholder,
  onInput,
  onKeydown,
  errorMsg,
}) => {
  const handleKeydown = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (onKeydown && ev.key === "Enter") {
      const inputValue = ev.currentTarget.value;
      onKeydown(inputValue);
    }
  };

  return (
    <div className={"base-input"}>
      <div className={"input-wrapper"}>
        <input
          placeholder={placeholder}
          onInput={(e) => onInput && onInput(e.currentTarget.value)}
          onKeyDown={handleKeydown}
        />
        <img src={search} alt={"loop"} />
      </div>
      {errorMsg && <p className={"error"}>{errorMsg}</p>}
    </div>
  );
};

export default BaseInput;
