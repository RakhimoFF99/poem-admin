export default function(context) {
    if(this.$auth.user.role){
        

   let user = this.$auth.user.role
  
     if (user !== "admin") {
        return context.redirect("/");
    }
}
}
