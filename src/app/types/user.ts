export class User {

    public id: string;
    public firstName : string;
    public lastName : string;
    public email : string;
    public avater: string;

    constructor(id: string, firstName: string, lastName: string, email: string, avatar: string)
    {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.avater = avatar;
    }
}
