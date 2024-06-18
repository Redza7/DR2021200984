import { Injectable } from "@angular/core";

export interface User {
    id:number;
    name:string;
    surname:string;
    email:string;
    password:string;
    dateOfBirth:Date;
    gender: string;
    address: string;
    phone_number: string;
    fav_category: string;
}

@Injectable()
export class UserService {
    currentUser?: User;
    static UserList: Array<User> =  [
        {
            id: 1,
            name: 'Petar',
            surname: 'Peric',
            email: 'pera@peric.com',
            password: '12345678',
            dateOfBirth: new Date("2003-02-10"),
            gender: 'male',
            address: 'Sarajevska 73',
            phone_number: '+381656321913',
            fav_category: 'Jacket'
        },
        {
            id: 2,
            name: 'Ana',
            surname: 'Anic',
            email: 'anaanic@gmail.com',
            password: '12345678',
            dateOfBirth: new Date("2005-11-07"),
            gender: 'male',
            address: 'Cara Dusana 32',
            phone_number: '+38164432122',
            fav_category: 'T-shirt'
        }
    ]
    getUserByEmail(userEmail: string): User{
        return UserService.UserList.find(user => user.email == userEmail)!;
    }
    isPasswordCorrect(userEmail:string,password:string):boolean{
        if(UserService.UserList.find(userToFind => (userToFind.email == userEmail && userToFind.password == password)) != undefined){
            this.currentUser = UserService.UserList.find(userToFind => (userToFind.email == userEmail && userToFind.password == password));
            return true;
        } else {
            return false;
        }
    }
    changeUserPassword(password:string):boolean{
        if(this.currentUser !== undefined){
            this.currentUser.password = password;
            return true;
        } else {
            return false;
        }
    }
    changeGeneralInfo(name:string, surname:string, email:string):boolean{
        if(this.currentUser !== undefined){
            this.currentUser.name = name;
            this.currentUser.surname = surname;
            this.currentUser.email = email;
            return true;
        } else {
            return false;
        }
    }
    changeOtherData(dateOfBirth:Date, gender:string, address:string, phone_number:string, fav_category:string):boolean{
        if(this.currentUser !== undefined){
            this.currentUser.dateOfBirth = dateOfBirth;
            this.currentUser.gender = gender;
            this.currentUser.address = address;
            this.currentUser.phone_number = phone_number;
            this.currentUser.fav_category = fav_category;
            return true;
        } else {
            return false;
        }
    }
    registerUser(name:string, surname:string, email:string, password:string, dateOfBirth:Date, gender:string, address:string, phone_number:string, fav_category:string){
        console.log(name + " " + surname + " " + email + " " + password + " " + dateOfBirth + " " + gender + " " + address + " " + phone_number + " " + fav_category)
        var maxId: number = 0;
        UserService.UserList.forEach(user => {
            if(user.id > maxId){
                maxId = user.id;
            }
        });
        var id = ++maxId;
        var user: User = {id, name, surname, email, password, dateOfBirth, gender, address, phone_number, fav_category}
        UserService.UserList.push(user);
        this.currentUser = user;
        return user;
    }
}