export class AuthService{
    isLoggedIn = false;

    login(){
        this.isLoggedIn = true;
    }

    logout(){
        this.isLoggedIn = false;
    }

    isAuthentiated(){
        return this.isLoggedIn;
    }
}