export class userService{

    getUser(id : string){

        if(id === '1'){
            return {
                'id': '2',
                'name': 'Simran'
            }

        }else{
            return {
                'id':'2',
                'name': 'krishna'
            }
        }


    }

}