import Event from '../components/Event';
import { render } from '@testing-library/react';
import mockData from '../mock-data';
import userEvent from '@testing-library/user-event';

const mockEvent = mockData[0]

describe('<Event /> componenet', () => {
  let EventComponent;
  beforeEach(() => {
    EventComponent = render(<Event event={mockEvent} />)
  })


  test('has event title', () => {
    const title = EventComponent.queryByText(mockEvent.summary);
    expect(title).toBeInTheDocument();
  });

  test('has event start time', () => {
    const startTime = EventComponent.queryByText(mockEvent.created);
    expect(startTime).toBeInTheDocument();
  })

  test('event has a location', () => {
    const location = EventComponent.queryByText(mockEvent.location);
    expect(location).toBeInTheDocument();
  })

  test('event has a show details button', () => {
    const showDetailsButton = EventComponent.queryByText('Show Details');
    expect(showDetailsButton).toBeInTheDocument();
  })

  test('by default, event details should be hidden', () => {
    const eventDefault = EventComponent.queryByText('Show Details');
    const details = eventDefault.querySelector('.details');
    expect(details).not.toBeInTheDocument();
  })

  test('shows details after user clicks show details button', async () => {
    const user = userEvent.setup();
    const showDetailsButton = EventComponent.queryByText('Show Details');
    await user.click(showDetailsButton);
    const eventDefault = EventComponent.container.firstChild;
    const details = eventDefault.querySelector('.details');
    expect(details).toBeInTheDocument();
  })

  test('hide details after user clicks hide details button', async () => {
    const user = userEvent.setup();
    const eventDefault = EventComponent.container.firstChild;
    const showDetailsButton = EventComponent.queryByText('Show Details');

    await user.click(showDetailsButton);

    const hideDetailsButton = EventComponent.queryByText('Hide Details')

    await user.click(hideDetailsButton);

    const details = eventDefault.querySelector('.details');
    expect(details).not.toBeInTheDocument();
  })
})