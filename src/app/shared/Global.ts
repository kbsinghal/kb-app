export class Global {
    // public static BASE_USER_ENDPOINT = 'api/event/';
    // public static BASE_USER_ENDPOINT = 'kbapi-dev.us-east-2.elasticbeanstalk.com/';
  public static BASE_USER_ENDPOINT = 'http://localhost:4200/kbapi/';
    public static genders = [{
        name: 'Male',
        id: 0,
    }, {
        name: 'Female',
        id: 1
    }];
    public static YesNoOptions = [{
        name: 'Yes',
        id: 1
    },
    {
        name: 'No',
        id: 0,
    }];

    // public static registeredOptions = [{
    //     name: 'Registered',
    //      id: 1
    // },
    // {
    //     name: 'Not Registered',
    //     id: 0,
    // }];

    public static EntityTypeOptions = [{
        name: 'Group',
         value: 'G'
    },
    {
        name: 'Individual',
        value: 'I',
    }];

    public static EventOccurenceTypeOptions = [{
        name: 'Yearly',
         value: 'Y'
    },
    {
        name: 'Monthly',
        value: 'M',
    }
    ,
    {
        name: 'Weekly',
        value: 'W',
    }
    ,
    {
        name: 'Daily',
        value: 'D',
    }
    ,
    {
        name: 'One-Time',
        value: 'O',
    }
];


    public static technologies = ['JavaScript', 'SharePoint', 'C#'];
    // public static countries = [{
    //     CountryName: 'C1',
    //     CountryID: 1,
    // }, {
    //     CountryName: 'C2',
    //     CountryID: 2
    // }];
}
