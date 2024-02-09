export const validData=(email,password)=>{
    // const userName=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(userName);
    const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPassValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
   // if(!userName)return "enter a valid username";
    if(!isEmailValid) return "enter a valid email iD";
    if(!isPassValid) return "enter a valid password";
    return null;
    
}