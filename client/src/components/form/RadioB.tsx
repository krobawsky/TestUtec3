import * as React from 'react';

import { IError, IAlumno, IInputChangeHandler, ISelectOption } from '../../types';

import FieldFeedbackPanel from './FieldFeedbackPanel';

import { RadioGroup, RadioButton, ReversedRadioButton } from '../../../node_modules/react-radio-buttons';

 interface IRadioOption {
  value: string;
  name: string;
};

export default ({object, error, name, options, onChange}: { object: any, error: IError, name: any, pos: number, question: string, options: IRadioOption[], onChange: IInputChangeHandler3 }) => {

  const handleOnChange = value => {
    // console.log('Value:', +value);
    onChange('carrera', value, null);
  };

  const selectedValue = object[name] || 'carrera';
  const fieldError = error && error.fieldErrors[name];
  const valid = !fieldError && selectedValue !== 'carrera';

  const cssGroup = `form-group ${fieldError ? 'has-error' : 'carrera'}`;

  return (
    <div className={cssGroup}>
      <div className='input-field col s12'>
        <RadioGroup onChange={handleOnChange} horizontal >
          { options.length > 0 ? options.map(alter => (
            <ReversedRadioButton key={alter.value} value={alter.value}>
             {alter.name}
            </ReversedRadioButton>
          )) : 'none' }
        </RadioGroup>
        <FieldFeedbackPanel valid={valid} fieldError={fieldError} />
      </div>
    </div>
  );
};