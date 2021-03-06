import * as React from 'react';
import Notification from '..';
import { notificationTestkitFactory } from '../../../testkit';
import { notificationTestkitFactory as notificationEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { notificationTestkitFactory as notificationPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function NotificationWithMandatoryProps() {
  return <Notification />;
}

function NotificationWithAllProps() {
  return (
    <Notification
      dataHook="hook"
      show
      theme="error"
      type="local"
      autoHideTimeout={1}
      zIndex={9999}
      onClose={(source: string) => {}}
    >
      <Notification.ActionButton
        link={'https://example.com'}
        type={'textLink'}
        target={'target'}
      >
        Action link
      </Notification.ActionButton>
      <Notification.ActionButton type={'button'}>
        Action button
      </Notification.ActionButton>
      <Notification.ActionButton>
        Another action button
      </Notification.ActionButton>
      <Notification.TextLabel ellipsis={false}>hello</Notification.TextLabel>
      <Notification.CloseButton type={'button'} />
    </Notification>
  );
}

async function testkits() {
  const testkit = notificationTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = notificationEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await notificationPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
