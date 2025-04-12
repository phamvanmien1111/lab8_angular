
export interface Isocials{
    github:string;
    facebook:string;
    linkedin:string;
}
export interface Iuser{
    name:string;
    email:string;
    phone:string;
    bio:string;
    avatar:string;
    socials: Isocials;
    skills: string[];
    createdAt: Date; 
    student: string;
    about: string;
}