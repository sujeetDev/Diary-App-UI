import { NbMenuItem } from '@nebular/theme';
export const ADMIN_MENU_ITEMS: NbMenuItem[] = [
    {
        title: 'Dashboard',
        icon: 'nb-home',
        link: '/pages/adminDashboard',       
    },{
        title:'Manage User',
        icon:'nb-person',
        children:[
            {
                title:'Add User',
                link:'/pages/user/addUser'
            },{
                title:'View User',
                link:'/pages/user/viewUser'
            }
        ]
    },
    {
      title:'Task',
      icon:'nb-list',
      children:[
        {
            title:'Create Task',
            link:'/pages/task/createTask'
        },{
            title:'View Task',
            link:'/pages/task/viewTask'
        },{
            title:'Track Task',
            link:'/pages/task/trackTask'
        }          
      ]
    },{
        title:'Diary',
        icon:'nb-compose',
        children:[
            {
                title:'Create Diary',
                link:'/pages/diary/createDiary'
            },{
                title:'View Diary',
                link:'/pages/diary/viewDiary'
            }
        ]
    }
];

export const SUPER_ADMIN_MENU_ITEMS: NbMenuItem[] = [
    {
        title: 'Dashboard',
        icon: 'nb-home',
        link: '/pages/superAdminDashboard',       
    },{
        title:'Manage Organization',
        icon:'nb-person',
        children:[
            {
                title:'Add Orgnization',
                link:'/pages/organization/addOrganization'
            },{
                title:'View Organization',
                link:'/pages/organization/viewOrganization'
            }
        ]
    },{
        title:'Diary',
        icon:'nb-compose',
        children:[
            {
                title:'Create Diary',
                link:'/pages/diary/createDiary'
            },{
                title:'View Diary',
                link:'/pages/diary/viewDiary'
            }
        ]
    }
];

export const USER_MENU_ITEMS: NbMenuItem[] = [
    {
        title: 'Dashboard',
        icon: 'nb-home',
        link: '/pages/dashboard',       
    },{
        title:'Manage Task',
        icon:'nb-list',
        children:[
            {
                title:'View Task',
                link:'/pages/task/viewUserTask'
            }
        ]
    },{
        title:'Diary',
        icon:'nb-compose',
        children:[
            {
                title:'Create Diary',
                link:'/pages/diary/createDiary'
            },{
                title:'View Diary',
                link:'/pages/diary/viewDiary'
            }
        ]
    }
];