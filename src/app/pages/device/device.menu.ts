export const DEVICE_MENU = [
  {
    path: 'device',
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
            title: 'general.menu.devices',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 700,
          },
        },
        children: [
          {
            path: 'newdevice',
            data: {
              menu: {
                title: 'general.menu.new_device',
  
              },
            },
          },
          {
            path: 'alldevice',
            data: {
              menu: {
                title: 'general.menu.all_device',
  
              },
            },
          },
          {
            path: 'map',
            data: {
              menu: {
                title: 'general.menu.map',
  
              },
            },
          },
          {
            path: 'servermonitoring',
            data: {
              menu: {
                title: 'general.menu.server_monitoring',
  
              },
            },
          },
        ],
      },

      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.overviews',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 700,
          },
        },
         children: [
          {
            path: 'alarms',
            data: {
              menu: {
                title: 'general.menu.alarms',
  
              },
            },
          },
          {
            path: 'devicecontrol',
            data: {
              menu: {
                title: 'general.menu.device_control',
  
              },
            },
          },
          {
            path: 'events',
            data: {
              menu: {
                title: 'general.menu.events',
  
              },
            },
          },
        ],
      },
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.device_types',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 700,
          },
        },
        children: [
          {
            path: 'smartrest',
            data: {
              menu: {
                title: 'general.menu.smart_rest',
  
              },
            },
          },
        ],
      },

      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.managment',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 700,
          },
        },
        children: [
          {
            path: 'firmware',
            data: {
              menu: {
                title: 'general.menu.firmware_repository',
  
              },
            },
          },
        ],
      },
    ],
  },
];
