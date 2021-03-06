import { mount } from 'enzyme';
import * as React from 'react';

import { AssessmentCategories } from '../../../components/assessment/assessmentShape';
import NotificationBadge from '../NotificationBadge';
import {
  filterNotificationsByAssessment,
  filterNotificationsBySubmission,
  filterNotificationsByType
} from '../NotificationHelpers';
import { Notification } from '../notificationShape';

const notifications: Notification[] = [
  {
    id: 1,
    type: 'new',
    assessment_id: 1,
    assessment_type: 'Mission',
    assessment_title: 'The Secret to Streams'
  },
  {
    id: 2,
    type: 'graded',
    assessment_id: 1,
    assessment_type: 'Mission',
    assessment_title: 'The Secret to Streams'
  },
  {
    id: 3,
    type: 'autograded',
    assessment_id: 1,
    assessment_type: 'Mission',
    assessment_title: 'The Secret to Streams'
  },
  {
    id: 4,
    type: 'unsubmitted',
    assessment_id: 1,
    assessment_type: 'Mission',
    assessment_title: 'The Secret to Streams'
  }
];

const handleAcknowledgeNotifications = () => {};

describe('Badge', () => {
  test('renders properly with notifications', () => {
    const tree = mount(
      <NotificationBadge
        notifications={notifications}
        handleAcknowledgeNotifications={handleAcknowledgeNotifications}
      />
    );
    expect(tree.debug()).toMatchSnapshot();
  });

  test('does not render with no notifications', () => {
    const tree = mount(
      <NotificationBadge
        notifications={[]}
        handleAcknowledgeNotifications={handleAcknowledgeNotifications}
      />
    );

    expect(tree.debug()).toMatchSnapshot();
  });
});

describe('Badge with filter,', () => {
  test('filterNotificationsByAssessment renders properly', () => {
    const tree = mount(
      <NotificationBadge
        notifications={notifications}
        handleAcknowledgeNotifications={handleAcknowledgeNotifications}
        notificationFilter={filterNotificationsByAssessment(1)}
      />
    );
    expect(tree.debug()).toMatchSnapshot();
  });

  test('filterNotificationsBySubmission renders properly', () => {
    const tree = mount(
      <NotificationBadge
        notifications={notifications}
        handleAcknowledgeNotifications={handleAcknowledgeNotifications}
        notificationFilter={filterNotificationsBySubmission(1)}
      />
    );
    expect(tree.debug()).toMatchSnapshot();
  });

  test('filterNotificationsByAssessment renders properly', () => {
    const tree = mount(
      <NotificationBadge
        notifications={notifications}
        handleAcknowledgeNotifications={handleAcknowledgeNotifications}
        notificationFilter={filterNotificationsByType(AssessmentCategories.Mission)}
      />
    );
    expect(tree.debug()).toMatchSnapshot();
  });
});
