import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectBills,
  makeSelectAmountMoney,
  makeSelectSenderBill,
} from 'containers/PaymentPage/selectors';
import { changeInputNumberAction } from 'containers/PaymentPage/actions';
import { intlShape, injectIntl } from 'react-intl';
import { StyledFormItem, StyledInputNumber } from 'components/Form/Form.style';
import messages from './messages';

const stateSelector = createStructuredSelector({
  amountMoney: makeSelectAmountMoney(),
  senderBill: makeSelectSenderBill(),
  bills: makeSelectBills(),
});

function AmountMoney({ intl }) {
  const { amountMoney, senderBill } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onChangeAmountMoney = (name, value) =>
    dispatch(changeInputNumberAction({ name, value }));

  const checkCorrectAmountMoney = (_, value) => {
    if (!value) {
      return Promise.reject(new Error(`Amout money is required.`));
    }

    if (value && value > Number(senderBill.amountMoney)) {
      return Promise.reject(new Error(`You don't have that amount of money.`));
    }

    if (value === 0 || value < 0) {
      return Promise.reject(
        new Error(`You cannot transfer an amount less than or equal to 0.`),
      );
    }

    return Promise.resolve();
  };

  return (
    <StyledFormItem
      label={intl.formatMessage(messages.label)}
      name="amountMoney"
      rules={[
        {
          validator: checkCorrectAmountMoney,
        },
      ]}
    >
      <StyledInputNumber
        type="number"
        onChange={(value) => onChangeAmountMoney('amountMoney', value)}
        name="amountMoney"
        value={amountMoney}
        placeholder={intl.formatMessage(messages.placeholder)}
      />
    </StyledFormItem>
  );
}

AmountMoney.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(AmountMoney);
