export const structure = `
<HorizontalTimeline
  items={[
    {label: 'Instructions completed'},
    {label: 'Domain check'},
    {label: 'Site is live worldwide'},
  ]}
/>
`;

export const width = `
<HorizontalTimeline
  items={[
    {label: 'Thirty percent width', width: '30%'},
    {label: 'Width is auto'},
    {label: 'Two hundred pixels width', width: '200px'},
  ]}
/>
`;

export const predefined = `
<HorizontalTimeline
  items={[
    {
      label: 'Instructions completed',
      skin: 'dark',
      icon: <HorizontalTimeline.CompleteIcon />,
    },
    {
      label: 'Domain check',
      skin: 'dark',
      icon: <HorizontalTimeline.ActiveIcon />,
    },
    { label: 'Domain connecting' },
    {
      label: 'Site is live worldwide',
      icon: <HorizontalTimeline.DestructiveIcon />,
    },
  ]}
/>
`;
