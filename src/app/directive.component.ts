import { Directive, ElementRef,HostListener } from "@angular/core";
@Directive({
    selector:'[custom-directive]',
      

})
export class customdirective{
     
    constructor(public el:ElementRef)
    {
        this.el.nativeElement.style.color="green";
        
    }
    showcolor()
   {
      this.el.nativeElement.style.color="yellow";
      this.el.nativeElement.style.backgroundColor="blue";
   }
   mouseleave()
   {
    this.el.nativeElement.style.color="white";
    this.el.nativeElement.style.backgroundColor="red";
   }
     
   @HostListener("mouseenter")onmouseenter()
   {
       this.showcolor();
   }
   @HostListener("mouseleave")onmouseleave()
   {
    this.mouseleave();
   }
   public name:string="sign in";
   public get()
  {
      this.name="sign up";
  }

}