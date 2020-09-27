import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';
import { number } from 'prop-types';

const createPatchFrom = (value) =>
  PatchEvent.from(value === '' ? unset() : set(Number(value)));

// const formatMoney = (number) =>
//   Intl.NumberFormat('de-DE', {
//     style: 'currency',
//     currency: 'EUR',
//   }).format(number);

const formatMoney = Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
}).format;

export default function PriceInput({ type, value, onChange, inputComponent }) {
  return (
    <div>
      <h2>
        {type.title} - {value ? formatMoney(value) : ''}
      </h2>
      <p>{type.description}</p>
      <input
        type={type.name}
        value={value}
        onChange={(event) => onChange(createPatchFrom(event.target.value))}
        ref={inputComponent}
      />
    </div>
  );
}

PriceInput.focus = function () {
  this._inputElement.focus();
};
