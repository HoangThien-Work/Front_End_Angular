// tao mot doi tuong Item cho server node 
export interface Item { Gia?: string; Id?:string; MoTa?: string; NgaySanXuat?: string; Ten?: string; hinhanh?:string }
// tao mot doi tuong San Pham su dung cac Param cua Mat Hang tren Firebase de thao tac voi firebase.
export interface Staff {name?: string; id?:string; age?: string; role?: string }
//insert staff
export class StaffDescription {
    id: string;
    name: string;
    age: string;
    role: string;
}
