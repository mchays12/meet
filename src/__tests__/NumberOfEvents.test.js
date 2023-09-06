import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';
import { render } from '@testing-library/react';

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
  })
})