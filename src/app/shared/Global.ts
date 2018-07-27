export class Global {
    //public static BASE_USER_ENDPOINT = 'api/event/';
    //public static BASE_USER_ENDPOINT = 'kbapi-dev.us-east-2.elasticbeanstalk.com/';
     public static BASE_USER_ENDPOINT = 'http://localhost:5000/kbapi/Event/';
    
    public static genders = [{
        name: 'Male',
        id: 0,
    }, {
        name: 'Female',
        id: 1
    }];
    public static technologies = ['JavaScript', 'SharePoint', 'C#'];
}
