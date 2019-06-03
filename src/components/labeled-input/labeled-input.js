import React from "react";
import style from "./style.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

const LabeledInput = ({
  labelText,
  placeholder,
  notFirst,
  type,
  value,
  onChange
}) => {
  return (
    <div className={cx("wrapper", { "not-first": notFirst })}>
      <div className={style.label}>{labelText}</div>
      <input
        type={!type ? "text" : type}
        value={value}
        className={style.input}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default LabeledInput;
