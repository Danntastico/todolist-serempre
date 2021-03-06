import React, { useState } from 'react';

export const EditableInput = ({
  name,
  label,
  inputType,
  value,
  onChange,
  list,
  children,
  pattern,
}) => {
  const [disabled, setDisabled] = useState(true);

  const handleEnableEdit = (e) => {
    e.preventDefault();
    setDisabled(!disabled);
  };
  const disabledStyles = disabled ? '-disabled' : '';
  const iconBtn = disabled ? 'fas fa-edit' : 'fas fa-check';

  return (
    <div className={`editable--main`}>
      <div className='editable'>
        <label htmlFor={name} className={`editable__label${disabledStyles}`}>
          {label}
        </label>
        <input
          className={`editInpt__input${disabledStyles}`}
          type={inputType}
          name={name}
          id={name}
          autoComplete='off'
          value={value}
          onChange={onChange}
          disabled={disabled}
          list={list}
          pattern={pattern}
        />
        {children}
      </div>
      <button
        onClick={handleEnableEdit}
        className={`editableBtn${disabledStyles} btn pointer`}
      >
        <i className={iconBtn}></i>
      </button>
    </div>
  );
};
