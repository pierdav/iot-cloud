export const ADMIN_MENU = [
  {
    path: 'admin',
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
        path: '',
        data: {
          menu: {
            title: 'general.menu.accounts',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 700,
          },
        },
        children: [
          {
            path: 'users',
            data: {
              menu: {
                title: 'general.menu.users',
  
              },
            },
          },
          {
            path: 'roles',
            data: {
              menu: {
                title: 'general.menu.roles',
        
              },
            },
          },
          {
            path: 'log',
            data: {
              menu: {
                title: 'general.menu.log',
             
              },
            },
          },
        ],
      },

      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.applications',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 700,
          },
        },
        children: [
          {
            path: 'applications',
            data: {
              menu: {
                title: 'general.menu.my_applications',
  
              },
            },
          },
        ],
      },
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.busines_srules',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 700,
          },
        },
        children: [
          {
            path: 'eventprocessing',
            data: {
              menu: {
                title: 'general.menu.event_processing',
  
              },
            },
          },
          {
            path: 'alarmmapping',
            data: {
              menu: {
                title: 'general.menu.alarm_mapping',
  
              },
            },
          },
          {
            path: 'kpi',
            data: {
              menu: {
                title: 'general.menu.kpi',
  
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
