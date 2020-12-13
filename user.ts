export class User{
    constructor(
        public name:string,
        public mail:string,
        public phone:number,
        public topic:string,
        public timePreference:string,
        public subscribe: boolean

    ){}
}