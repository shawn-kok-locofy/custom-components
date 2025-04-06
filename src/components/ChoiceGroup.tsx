import * as React from 'react';
import { ChoiceGroup, IChoiceGroupOption } from '@fluentui/react/lib/ChoiceGroup';

const options: IChoiceGroupOption[] = [
  { key: 'A', text: 'Option A' },
  { key: 'B', text: 'Option B' },
  { key: 'C', text: 'Option C'},
  { key: 'D', text: 'Option D' },
];

const horizontalStyles = {
  flexContainer: {
    display: 'flex',
    gap: '20px'
  }
};

export const ChoiceGroupBasicExample: React.FunctionComponent = () => {
  return <ChoiceGroup 
    defaultSelectedKey="B" 
    options={options} 
    onChange={_onChange} 
    label="Is the company involved in any of the following activities?  Check any that apply." 
    required={true}
    styles={horizontalStyles}
  />;
};

function _onChange(ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IChoiceGroupOption): void {
  console.dir(option);
}
