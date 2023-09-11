// src/__tests__/App.test.js

import { render, within } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';

describe('<App /> component', () => {
  let AppDOM;
  beforeEach(() => {
    AppDOM = render(<App />).container.firstChild;
  })
  test('renders list of events', () => {
    expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
  });
  test('render CitySearch', () => {
    expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
  });
  test('render NumberOfEvents', () => {
    expect(AppDOM.querySelector('#number-of-events')).toBeInTheDocument();
  });

  describe('<App /> integration', () => {
    test('renders a list of events matching selected city by user', async () => {
      const AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;

      const CitySearchDOM = AppDOM.querySelector('#city-search');
      const CitySearchInput = within(CitySearchDOM).queryByRole('textbox');

      await userEvent.type(CitySearchInput, 'Berlin');

      const berlinGermanySuggestionItem =
        within(CitySearchDOM).queryByText('Berlin, Germany');

      await userEvent.click(berlinGermanySuggestionItem);

      const EventListDOM = AppDOM.querySelector('#event-list');
      const allRenderedEventItems =
        within(EventListDOM).queryAllByRole('listitem');

      const allEvents = await getEvents();
      const berlinEvents = allEvents.filter(
        (event) => event.location === 'Berlin, Germany'
      );

      expect(allRenderedEventItems.length).toBe(berlinEvents.length);
      allRenderedEventItems.forEach((event) => {
        expect(event.textContent).toContain('Berlin, Germany');
      });
    });
  })


});