const Menu =  [
  { header: 'Navigation' },
  {
    title: 'Send Bulk SMS',
    group: 'apps',
    icon: 'email',
    name: 'SendBulkSms',
  },

  {
    title: 'Contact Lists',
    group: 'apps',
    icon: 'people',
    name: 'ContactLists',
  },

  {
    title: 'Draft SMS',
    group: 'apps',
    icon: 'save',
    name: 'DraftSms',
  },

  {
    title: 'History',
    group: 'apps',
    icon: 'navigation',
    name: 'History',
  },

  // {
  //   title: 'Statistics',
  //   group: 'apps',
  //   icon: 'dashboard',
  //   name: 'Dashboard',
  // },

  // { divider: true },
  // { header: 'Activities' },
  // {
  //   title: 'Menu',
  //   group: 'components',
  //   component: 'components',
  //   icon: 'email',
  //   items: [
  //     { name: 'Bulk SMS', title: 'Bulk SMS', component: 'components/send-bulk-sms' },
  //     { name: 'Contact Lists', title: 'Contact Lists', component: 'components/contact-lists' },
  //     { name: 'Draft SMS', title: 'Draft SMS', component: 'components/draft-sms' },
  //     { name: 'SMS History', title: 'SMS History', component: 'components/sms-history' },
  //   ]
  // },

  { divider: true },
  { header: 'Account Settings' },
  {
    title: 'Account',
    group: 'components',
    component: 'components',
    icon: 'account_circle',
    items: [
      { name: 'Detail', title: 'Detail', component: 'components/userprofile' },
      // { name: 'Update', title: 'Update', component: 'components/userprofileupdate' },
    ]
  },

  { divider: true },

  { header: 'Extras' },

  {
    title: 'Pages',
    group: 'extra',
    icon: 'list',
    items: [
      { name: 'Login', title: 'Login', component: 'Login' },
      { name: '404', title: '404', component: 'NotFound' },
      { name: '403', title: '403', component: 'AccessDenied' },
      { name: '500', title: '500', component: 'ServerError' },
    ]
  },

  {
    title: 'Widgets',
    group: 'widgets',
    component: 'widgets',
    icon: 'widgets',
    items: [
      { name: 'social', title: 'Social', component: 'components/social' },
      { name: 'statistic', title: 'Statistic', badge: 'new', component: 'components/statistic' },
      { name: 'chart', title: 'Chart', component: 'components/chart' },
      { name: 'list', title: 'List', component: 'components/widget-list' },
      // { name: 'post', title: 'Post', component: 'components/widget-post' },
    ]
  },

  { header: 'UI Elements' },
  {
    title: 'General',
    group: 'components',
    component: 'components',
    icon: 'tune',
    items: [
      { name: 'alerts', title: 'Alerts', component: 'components/alerts' },
      { name: 'avatars', title: 'Avatars', component: 'components/avatars' },
      { name: 'badges', title: 'Badges', component: 'components/badges' },
      { name: 'buttons', title: 'Buttons', component: 'components/buttons' },
      { name: 'cards', title: 'Cards', component: 'components/cards' },
      { name: 'carousels', title: 'Carousels', component: 'components/carousels' },
      { name: 'chips', title: 'Chips', component: 'components/chips' },
      { name: 'dialogs', title: 'Dialogs', component: 'components/dialogs' },
      { name: 'icons', title: 'Icons', component: 'components/icons' },
      { name: 'tables', title: 'Data Tables', component: 'components/tables' },
      { name: 'parallax', title: 'Parallax  image', component: 'components/parallax' },
      { name: 'snackbar', title: 'Snackbar', component: 'components/snackbar' },
      { name: 'progress', title: 'Progress', component: 'components/progress' },
      { name: 'slider', title: 'Slider', component: 'components/sliders' },
      { name: 'tooltip', title: 'Tooltip', component: 'components/tooltips' },
      { name: 'pagination', title: 'Pagination', component: 'components/paginations' },
      { name: 'typography', title: 'Typography', component: 'components/typography' },
      { name: 'color', title: 'Color', component: 'components/color' },

    ]
  },

  {
    title: 'Pickers',
    group: 'pickers',
    component: 'picker',
    icon: 'filter_vintage',
    items: [
      { name: 'timepicker', title: 'Timepicker', component: 'pickers/timepicker' },
      { name: 'datepicker', title: 'Datepicker', component: 'pickers/datepicker' },

    ]
  },

  {
    title: 'Forms & Controls',
    group: 'forms',
    component: 'forms',
    icon: 'edit',
    items: [
      { name: 'basic', title: 'General', component: 'components/basic-forms' },
      { name: 'selects', title: 'Selects', badge: 'new', component: 'components/selects' },
      { name: 'selection-controls', title: 'Selection Controls', component: 'components/selection-controls' },
      { name: 'text-fields', title: 'Text Fields', component: 'components/text-fields' },
      { name: 'steppers', title: 'Steppers', component: 'components/steppers' },
      { name: 'editors', title: 'Editors', component: 'components/editors' },
    ]
  },

  // {
  //   title: 'Chat',
  //   group: 'apps',
  //   icon: 'chat_bubble',
  //   target: '_blank',
  //   name: 'Chat',
  // },
  //
  // {
  //   title: 'Inbox',
  //   group: 'apps',
  //   name: 'Mail',
  //   target: '_blank',
  //   icon: 'email',
  // },
  //
  // {
  //   title: 'Media',
  //   group: 'apps',
  //   name: 'Media',
  //   icon: 'perm_media',
  // },


  // {
  //   title: 'Layout',
  //   group: 'layout',
  //   component: 'layout',
  //   icon: 'view_compact',
  //   items: [
  //     { name: 'bottom-sheets', title: 'Bottom panels', component: 'components/bottom-sheets' },
  //     { name: 'expansion-panels', title: 'Expansion panels', component: 'components/expansion-panels' },
  //     { name: 'footer', title: 'Footer', component: 'components/footer' },
  //     { name: 'lists', title: 'Lists', component: 'components/lists' },
  //     { name: 'jumbotrons', title: 'Jumbotrons', badge: 'new', component: 'components/jumbotrons' },
  //     { name: 'menus', title: 'Menus', component: 'components/menus' },
  //     // { name: 'navigation-drawers', title: 'Navigation drawers', component: 'components/navigation-drawers' },
  //     { name: 'tabs', title: 'Tabs', component: 'components/tabs' },
  //     { name: 'toolbar', title: 'Toolbars', component: 'components/toolbar' },
  //     { name: 'timeline', title: 'Timeline', component: 'components/timeline' },
  //   ]
  // },

];
// reorder menu
Menu.forEach((item) => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase();
      let textB = y.title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }
});

export default Menu;
