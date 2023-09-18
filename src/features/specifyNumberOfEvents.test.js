import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When user hasn\'t specified a number, 32 is the default number', ({ given, when, then }) => {
    let AppComponent;
    let AppDOM;


    given('the user hasn\'t specified or filtered the number of events', () => {
      AppComponent = render(<App />)
    });

    when('the user sees the list of events', async () => {
      AppDOM = AppComponent.container.firstChild;


      await waitFor(() => {
        const EventListItems = within(AppDOM).queryAllByRole('listitem');
        expect(EventListItems[0]).toBeTruthy();
      })
    });

    then(/^the default number of displayed events will be (\d+)$/, (arg0) => {
      const EventListItems = within(AppDOM).queryAllByRole('listitem');
      expect(EventListItems.length).toBe(32);
    });
  });

  test('User can change the number of events they want to see.', ({ given, when, then }) => {
    let AppComponent;
    let AppDOM;

    given('the user has events displayed', async () => {
      AppComponent = render(<App />)
      AppDOM = AppComponent.container.firstChild;
      await waitFor(() => {
        const EventListItems = within(AppDOM).queryAllByRole('listitem');
        expect(EventListItems[0]).toBeTruthy();
      })
    });

    when('the user chooses to change the number of events displayed', async () => {
      const button = AppComponent.queryByTestId('numberOfEventsInput');
      await userEvent.type(button, '{backspace}{backspace}10')
    });

    then('the number of events displayed will update to the number the user selected', () => {
      AppDOM = AppComponent.container.firstChild;
      const EventListItems = within(AppDOM).queryAllByRole('listitem');
      expect(EventListItems.length).toEqual(10);
    });
  });



})