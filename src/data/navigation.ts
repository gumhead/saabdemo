// pages navigations
const pages = [
  {
    id: 20,
    title: 'Home Page',
    children: [
      { id: 201, title: 'testlink', url: '/testlink' },
      { id: 202, title: 'testlink2', url: '/testlink2' },
    ]
  }, {
    id: 21,
    title: 'Login Page',
    children: [
      { id: 211, title: 'Login', url: '/Login' },
      { id: 212, title: 'Create User', url: '/Create User' },
    ]
  },
  {
    id: 22,
    title: 'Various links',
    children: [
      { id: 221, title: 'linktest1', url: '/linktest-1' },
      { id: 222, title: 'linktest2', url: '/linktest-2' }
    ]
  },
];

// projects pages link
const projectsNavigation = [
  {
    title: 'Order access',
    children: [
      { id: 1, title: 'Jira', url: '/order-access-to-Jira' },
      { id: 2, title: 'Confluence', url: '/order-access-to-confluence' },
      { id: 3, title: 'Doors', url: '/order-access-to-doors' }
    ]
  },
  {
    title: 'Other Access Requests',
    children: [
      { id: 1, title: 'Order Groupmembership', url: '/order-groupmembership' },
      { id: 2, title: 'Order New Project', url: '/order-newproject' }
    ]
  }
];

export {pages, projectsNavigation };
