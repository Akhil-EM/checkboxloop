for(var i=0;i<=10;i++)
{
   document.write(`<input type="checkbox">&nbsp;check box ${i+1} &nbsp;`);
}
$(document).ready(function () {
    var cnt=0;
    $("input").change(function () { 
       
        if($(this).is(':checked'))
        {
            add();
            
            
        }
        if(!$(this).is(':checked'))
        {
            
           sub();
        
        
        }
        function add()
        {
            
               cnt=cnt+1;
               $("#para").html(`<h1>che${cnt}</h1>`);
               
        }
        function sub()
        {
            cnt=cnt-1;
            $("#para").html(`<h1>now count${cnt}</h1>`);
            
        }
        
    });
});