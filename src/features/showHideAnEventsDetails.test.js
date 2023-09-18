import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

  test('An event element is collapsed by default.', ({ given, when, then }) => {
    let AppComponent;
    given('the user first opens the app', () => {
      AppComponent = render(<App />)
    });
    when('the user recieves the full list of events (specific for the city or all events)', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      })

    });

    then('all events will collapse by default.', async () => {
      const EventDOM = AppComponent.container.firstChild;
      const details = EventDOM.querySelector('.details');
      expect(details).not.toBeInTheDocument();
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    let AppComponent;
    let AppDOM;
    let EventListDOM;
    AppComponent = render(<App />)
    AppDOM = AppComponent.container.firstChild;
    EventListDOM = AppDOM.querySelector('#event-list');
    given('the user gets a list of events', async () => {
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      })
    });

    when('a user selects an event\'s details', async () => {
      const button = AppComponent.queryAllByText('Show Details')[0];

      await userEvent.click(button);

    });

    then('the details will show up for that choosen event', () => {
      const EventDOM = AppComponent.container.firstChild;
      const details = EventDOM.querySelectorAll('.details');
      expect(details).toBeInTheDocument();
    });

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
      let AppComponent;
      let button;
      let AppDOM;
      let EventListDOM;
      given('the user sees the details of an event', async () => {
        AppComponent = render(<App />)
        AppDOM = AppComponent.container.firstChild;
        EventListDOM = AppDOM.querySelector('#event-list');

        await waitFor(() => {
          const EventListItems = within(EventListDOM).queryAllByRole('listitem');
          expect(EventListItems.length).toBe(32);
        })
      });

      when('the user presses a button to hide event\'s details', async () => {
        await userEvent.click(button)
      });

      then('the details of that even will be hidden', () => {


        const EventDOM = AppComponent.container.firstChild;
        const details = EventDOM.querySelector('.details');
        expect(details).not.toBeInTheDocument();
      });
    });
  });
});