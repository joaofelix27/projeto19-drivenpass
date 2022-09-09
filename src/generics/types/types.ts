import { users } from "@prisma/client"

export type IUsersData = Omit<users, 'id'>;

export type authServiceType =(
   authData:IUsersData 
) => Promise<any>