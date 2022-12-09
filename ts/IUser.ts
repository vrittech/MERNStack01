export interface IUser<T>{
   findOne : (email : T) => T
}