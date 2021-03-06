import React from 'react';
import Button from './Button';

import { storiesOf, action } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import backgrounds from 'react-storybook-addon-backgrounds';

storiesOf(
  'Button',
).addWithInfo(
  'simple usage',
  'This is the basic usage with the button with providing a label to show the text.',
  () => (
    <div>
      <Button label="The Button" onClick={action('onClick')} />
      <br />
      <p>
        Click the "?" mark at top-right to view the info.
      </p>
    </div>
  ),
);

storiesOf('Button').addWithInfo(
  'simple usage (inline info)',
  `
      This is the basic usage with the button with providing a label to show the text.
    `,
  () => <Button label="The Button" onClick={action('onClick')} />,
  { inline: true },
);

storiesOf('Button').addWithInfo(
  'simple usage (disable source)',
  `
      This is the basic usage with the button with providing a label to show the text.
    `,
  () => <Button label="The Button" onClick={action('onClick')} />,
  { source: false, inline: true },
);

storiesOf('Button').addWithInfo(
  'simple usage (no header)',
  `
      This is the basic usage with the button with providing a label to show the text.
    `,
  () => <Button label="The Button" onClick={action('onClick')} />,
  { header: false, inline: true },
);

storiesOf('Button').addWithInfo(
  'simple usage (no prop tables)',
  `
      This is the basic usage with the button with providing a label to show the text.
    `,
  () => <Button label="The Button" onClick={action('onClick')} />,
  { propTables: false, inline: true },
);

storiesOf('Button').addWithInfo(
  'simple usage (custom propTables)',
  `
      This is the basic usage with the button with providing a label to show the text.

      Since, the story source code is wrapped inside a div, info addon can't figure out propTypes on it's own.
      So, we need to give relevant React component classes manually using \`propTypes\` option as shown below:

      ~~~js
      storiesOf('Button')
        .addWithInfo(
          'simple usage (custom propTables)',
          <info>,
          <storyFn>,
          { inline: true, propTables: [Button]}
        );
      ~~~
    `,
  () => (
    <div>
      <Button label="The Button" onClick={action('onClick')} />
      <br />
    </div>
  ),
  { inline: true, propTables: [Button] },
);

storiesOf('Button').addWithInfo(
  'simple usage (JSX description)',
  <div>
    <h2>This is a JSX info section</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed ornare massa rutrum metus commodo, a mattis velit dignissim.
      Fusce vestibulum turpis sed massa egestas pharetra. Sed at libero
      nulla.
    </p>
    <p>
      <a href="https://github.com/storybooks/react-storybook-addon-info">
        This is a link
      </a>
    </p>
    <p>
      <img src="http://placehold.it/350x150" />
    </p>
  </div>,
  () => (
    <div>
      <Button label="The Button" onClick={action('onClick')} />
      <br />
      <p>
        Click the "?" mark at top-right to view the info.
      </p>
    </div>
  ),
);

storiesOf('Button').addWithInfo(
  'simple usage (inline JSX description)',
  <div>
    <h2>This is a JSX info section</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed ornare massa rutrum metus commodo, a mattis velit dignissim.
      Fusce vestibulum turpis sed massa egestas pharetra. Sed at libero
      nulla.
    </p>
    <p>
      <a href="https://github.com/storybooks/react-storybook-addon-info">
        This is a link
      </a>
    </p>
    <p>
      <img src="http://placehold.it/350x150" />
    </p>
  </div>,
  () => <Button label="The Button" onClick={action('onClick')} />,
  { inline: true },
);

storiesOf('Button')
  .addDecorator(backgrounds([{ name: 'dark', value: '#333', default: true }]))
  .addWithInfo(
    'with custom styles',
    `
      This is an example of how to customize the styles of the info components.

      For the full styles available, see \`./src/components/Story.js\`
    `,
    () => <Button label="The Button" onClick={action('onClick')} />,
    {
      inline: true,
      styles: stylesheet => {
        stylesheet.infoPage = {
          backgroundColor: '#ccc',
        };
        return stylesheet;
      },
    },
  );
