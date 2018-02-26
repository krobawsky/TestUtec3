import * as React from 'react';

import { IError, IInputChangeHandler2, ISelectOption } from '../../types';

import FieldFeedbackPanel from './FieldFeedbackPanel';

import { RadioGroup, RadioButton, ReversedRadioButton } from '../../../node_modules/react-radio-buttons';

 interface IRadioOption {
  id: number;
  value: number;
  alternativa: string;
};

export default ({object, error, name, question, options, onChange}: { object: any, error: IError, name: string, question: string, options: IRadioOption[], onChange: IInputChangeHandler2 }) => {

  const handleOnChange = value => {
    // console.log('Value:', +value);
    onChange(name, question, value, null);
  };

  const selectedValue = object[name] || '';
  const fieldError = error && error.fieldErrors[name];
  const valid = !fieldError && selectedValue !== '';

  const cssGroup = `form-group ${fieldError ? 'has-error' : ''}`;

  return (
    <div className={cssGroup}>
      <div className='input-field col s12'>
        <RadioGroup onChange={handleOnChange} horizontal >
          { options.length > 0 ? options.map(alter => (
            <ReversedRadioButton key={alter.id} value={alter.value}>
              {alter.alternativa}
            </ReversedRadioButton>
          )) : 'none' }
        </RadioGroup>

        <FieldFeedbackPanel valid={valid} fieldError={fieldError} />
      </div>
    </div>
  );
};