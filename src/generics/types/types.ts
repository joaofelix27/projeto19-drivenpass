import { users } from "@prisma/client"

export type IUsersData = Omit<users, 'id'>;

export type registerServiceType =(
   registerData:IUsersData 
) => Promise<any>