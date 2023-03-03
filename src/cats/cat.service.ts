//or Provider : responsible for data storage and retrieval, and is designed to be used by the CatsController
import { Injectable } from "@nestjs/common";
import { Cat } from "./interfaces/cat.interface";


@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [{ // initial cats
        name: "cat1",
        age: 1,
        breed: "catto"
    },
    {
        name: "cat2",
        age: 2,
        breed: "catto"
    },
    {
        name: "cat3",
        age: 3,
        breed: "catto"
    }
    ]
    //Post a cat
    create(cat:Cat) {
        this.cats.push(cat)
    }
    // Get all cats
    findAll(): Cat[] {
        return this.cats
        console.log(this.cats[0]);
    }
    //remove a cat by its name
    remove(id: string) {
        console.log('deletion began');
        function removeCat(value: Cat, index: number, arr: []) {
            //if value matchs param
            if (value.name === id) {
                arr.splice(index, 1)
                return true
            }
            return false
        }
        const x = this.cats.filter(removeCat)
        console.log("Deleted", x);
        return x
    }
    //Edit a cat breed
    edit(id:string) {
        function editCat(value: Cat, index: number, arr: []) {
            if (value.name === id) {
                arr.splice(index, 1)
                return true 
            }
            return false
        }
        const x = this.cats.map(editCat)
        console.log(x);
        // this.cats.push(x)
        return "edited"
    }
}