export default {
  items: [
    {
      name: 'HOME',
      url: '/dashboard',
      icon: 'fa fa-home',
    },
    {
      title: true,
      class: 'seperator',
    
    },
    {
      title: true,
      name: 'FACU SERVICES',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Online Banking',
      url: 'https://online.fuldaareacreditunion.com/servlet/SLogin?template=/c/login/sloginsc.vm',
      icon: 'fa fa-dollar',
      class: 'external',
      target: '_blank',
    },
    {
      name: 'EZ Card',
      url: 'https://www.ezcardinfo.com/#/',
      icon: 'fa fa-credit-card-alt',
      class: 'external',
    },
    {
      name: 'Electronic Cash Management',
      url: 'https://web.baconpay.com/gate/login?institutionId=196212c1-4bad-4d12-a136-53748967307c',
      icon: 'fa fa-money',
      class: 'external',
    },
    {
      title: true,
      class: 'seperator',
    
    },
    {
      title: true,
      name: 'FACU',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Departments',
      url: '/base',
      icon: 'fa fa-cog',
      children: [
        {
          name: 'Accounting',
          url: '/base/breadcrumbs',
          icon: '',
        },
        {
          name: 'Branch Offices',
          url: '/base/cards',
          icon: '',
        },
        {
          name: 'Card Services',
          url: '/base/carousels',
          icon: '',
        },
        {
          name: 'Communications Center',
          url: '/base/collapses',
         
        },
        {
          name: 'Human Resources',
          url: '/base/dropdowns',
          icon: '',
        },
       
        {
          name: 'Information Technology',
          url: '/base/jumbotrons',
         
        },
        {
          name: 'Lending',
          url: '/base/list-groups',
          icon: '',
        },
        {
          name: 'Loss Prevention',
          url: '/base/navs',
          icon: '',
        },
        {
          name: 'Management',
          url: '/base/paginations',
          icon: '',
        },
        {
          name: 'Marketing',
          url: '/base/popovers',
          icon: '',
        },
        {
          name: 'Operations',
          url: '/base/progress-bar',
          icon: '',
        },
        {
          name: 'Real Estate',
          url: '/base/switches',
          icon: '',
        },
        {
          name: 'Forms',
          url: '/base/forms',
          icon: '',
        },
      ],
      
    },
    {
      name: 'Utilities',
      url: '/buttons',
      icon: 'fa fa-wrench',
      children: [
        {
          name: 'Password Utility',
          url: '/buttons/buttons',
         
        },
        {
          name: 'Training',
          url: '/buttons/button-dropdowns',
         
        },
       
        {
          name: 'Other',
          url: '/buttons/brand-buttons',
          
        },
      ],
    },
    
    
    
    
   
    
    
    
  ],
};
