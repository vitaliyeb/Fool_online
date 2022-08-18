import style from './style.module.css';
import React, {useId, useState} from "react";

export interface IInputProps {
    value: string;
    label: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInputProps> = ({value, placeholder = '', onChange}) => {
    const id = useId();
    return (<div className={style.wrapper}>
        <div className={style.heading}>
            <label htmlFor={id}>login</label>
            <span>exist field</span>
        </div>
        <input
            id={id}
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    </div>)
}

export default Input;