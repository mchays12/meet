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
      const eventList = AppComponent.container.querySelector('#event-list');
      const eventElements = within(eventList).queryAllByRole('listitem');
      eventElements.forEach((eventElement) => {
        const details = within(eventElement).queryByTestId('details-section');
        expect(details).not.toBeInTheDocument();
      });
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    let AppComponent;
    given('the user gets a list of events', async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      })
    });
    let expandedEventElement;
    when('a user selects an event\'s details', async () => {
      const eventList = AppComponent.container.querySelector('#event-list');
      const eventElements = within(eventList).queryAllByRole('listitem');
      // Assuming the first event element is already expanded
      const expandButton = within(eventElements[0]).queryByTestId('expand-button');
      userEvent.click(expandButton);
      expandedEventElement = eventElements[0];
    });

    then('the details will show up for that choosen event', async () => {
      const details = within(expandedEventElement).queryByTestId('details-section');
      expect(details).toBeDefined();
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
        const details = EventDOM.querySelector('.details-section');
        expect(details).not.toBeInTheDocument();
      });
    });
  });
});