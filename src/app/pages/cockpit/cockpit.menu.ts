export const COCKPIT_MENU = [
  {
    path: 'cockpit',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'general.menu.dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0,
          },
        },
      },
      {
        path: 'alarms',
        data: {
          menu: {
            title: 'general.menu.alarms',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 700,
          },
        },
      },

      {
        path: 'dataexplorer',
        data: {
          menu: {
            title: 'general.menu.dataexplorer',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 700,
          },
        },
      },
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.reports',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 700,
          },
        },
        children: [
          {
            path: 'dataexplorer',
            data: {
              menu: {
                title: 'general.menu.data_explorer',
  
              },
            },
          },
          {
            path: 'reporting',
            data: {
              menu: {
                title: 'general.menu.reporting',
  
              },
            },
          },
        ],
      },

      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.settings',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 700,
          },
        },
        children: [
          {
            path: 'properties',
            data: {
              menu: {
                title: 'general.menu.properties',
  
              },
            },
          },
        ],
      },
    ],
  },
];
