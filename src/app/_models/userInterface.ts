//---------------- interface for user--------------------//

export interface User{
    id ?: string; 
    username ?: string ;
    password ?: string ;
    name ?: string ;
    email ?: string ;
    age ?: number ;
    location ?: number ;
}
// admin-level: 0 = user, 1 = moderator, 2 = admin