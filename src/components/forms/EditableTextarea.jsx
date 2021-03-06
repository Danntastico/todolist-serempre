import React, { useState } from 'react';

export const EditableTextarea = ({
  name,
  label,
  inputType,
  value,
  onChange,
}) => {
  const [disabled, setDisabled] = useState(true);

  const handleEnableEdit = () => {
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
        <textarea
          className={`editTxt__textarea${disabledStyles}`}
          type={inputType}
          name={name}
          id={name}
          autoComplete='off'
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
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
