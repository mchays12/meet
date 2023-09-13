import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';
import { render, } from '@testing-library/react';
import App from "../App";

describe('<NumberOfEvents /> Componenet', () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(
      <NumberOfEvents setCurrentNOE={() => { }} setErrorAlert={() => { }} />
    );
  });

  test('has input textbox', () => {
    const input = NumberOfEventsComponent.queryByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  test('has default value of 32 for events shown', () => {
    const input = NumberOfEventsComponent.queryByRole('textbox');
    expect(input).toHaveValue('32');
  });

  test('textbox changes accordingly when use inputs', async () => {
    const input = NumberOfEventsComponent.queryByRole('textbox');
    await userEvent.type(input, '{backspace}{backspace}10');
    expect(input).toHaveValue('10');
  })
})

