/**
 * Created by zjq on 2017/7/10.
 */

export default class SingleTest{
     name = null;
     age ='28' ;
     static instance = null;

    static getInstance() {
        if (!SingleTest.instance) {
            SingleTest.instance = new SingleTest();
        }
        return SingleTest.instance;
    }
     getName(){
         return this.name;
     }
     getAge(){
         return this.age;
     }

     setName(name){
         this.name = name;
     }
}
