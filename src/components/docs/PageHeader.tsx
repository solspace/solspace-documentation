import { ThemedIdealImage } from '@site/src/components/utils';

import CalendarIntroLight from '@site/static/img/intro/calendar-light.png';
import CalendarIntroDark from '@site/static/img/intro/calendar-dark.png';

import FreeformIntroLight from '@site/static/img/intro/freeform-light.png';
import FreeformIntroDark from '@site/static/img/intro/freeform-dark.png';

import { SimpleTextLink, FlexButton } from '@site/src/components/utils';

export function CraftCalendarPageHeader() {
  return (
    <header className="flex flex-col px-4 m-auto items-center gap-6 mt-10 max-w-7xl">
      <ThemedIdealImage
        sources={{
          light: CalendarIntroLight,
          dark: CalendarIntroDark,
        }}
        className="max-w-3xl"
        alt="Calendar for Craft CMS"
      />
      <p className="text-center">
        Craft CMS users can rely on the Calendar plugin for efficient event
        management and calendaring. With its own element type, you can easily
        manage Calendar Events with power and flexibility. Its intuitive
        interface makes creating events with complex recurring rules and
        exclusions easy. The flexible templating options ensure you can
        customize your calendar to meet your needs. You can trust the quality
        and support provided by the Solspace team.
      </p>
      <FlexButton
        items={[
          { to: '/craft/calendar/v5#reliability', label: 'Feature Tour' },
          { to: '/craft/calendar/v5#compare', label: 'Compare' },
          {
            to: '/craft/calendar/v5/guides/getting-started',
            label: 'Getting Started',
          },
        ]}
      />
      <small>
        <SimpleTextLink
          to="https://plugins.craftcms.com/calendar"
          label="INSTALL A FREE, UNLIMITED TRIAL TODAY!"
        />
      </small>
    </header>
  );
}

export function EECalendarPageHeader() {
  return (
    <header className="flex flex-col px-4 m-auto items-center gap-6 mt-10 max-w-7xl">
      <ThemedIdealImage
        sources={{
          light: CalendarIntroLight,
          dark: CalendarIntroDark,
        }}
        className="max-w-3xl"
        alt="Calendar for ExpressionEngine CMS"
      />
      <p className="text-center">
        ExpressionEngine users can rely on the Calendar addon for efficient
        event management and calendaring. With its own field type, you can
        easily manage Calendar Events with power and flexibility. Its intuitive
        interface makes creating events with complex recurring rules and
        exclusions easy. The flexible templating options ensure you can
        customize your calendar to meet your needs. You can trust the quality
        and support provided by the Solspace team.
      </p>
      <FlexButton
        items={[
          {
            to: '/expressionengine/calendar/v5#reliability',
            label: 'Feature Tour',
          },
          { to: '/expressionengine/calendar/v5#compare', label: 'Compare' },
          {
            to: '/expressionengine/calendar/v5/guides/getting-started/',
            label: 'Getting Started',
          },
        ]}
      />
      <small>
        <SimpleTextLink
          to="https://expressionengine.com/add-ons/calendar"
          label="RISK-FREE 30 DAY SATISFACTION GUARANTEE!"
        />
      </small>
    </header>
  );
}

export function EEFreeformPageHeader() {
  return (
    <header className="flex flex-col px-4 m-auto items-center gap-6 mt-10 max-w-7xl">
      <ThemedIdealImage
        sources={{
          light: FreeformIntroLight,
          dark: FreeformIntroDark,
        }}
        className="max-w-3xl"
        alt="Freeform for ExpressionEngine CMS"
      />
      <p className="text-center">
        Freeform is a versatile form-building tool that can adjust to the
        evolving needs of your project, whether it's a simple or complex form.
        It offers effective spam protection and an easy-to-use form builder with
        powerful field types and built-in convenience features that your users
        will love. Freeform integrates seamlessly with popular CRMs, email
        marketing services, and more. It also includes fully customizable
        ready-to-go templates.
      </p>
      <FlexButton
        items={[
          { to: '/craft/freeform/v3#reliability', label: 'Feature Tour' },
          { to: '/craft/freeform/v3#compare', label: 'Compare' },
          {
            to: '/craft/freeform/v3/guides/getting-started/',
            label: 'Getting Started',
          },
        ]}
      />
      <small>
        <SimpleTextLink
          to="https://expressionengine.com/add-ons/freeform"
          label="RISK-FREE 30 DAY SATISFACTION GUARANTEE!"
        />
      </small>
    </header>
  );
}
