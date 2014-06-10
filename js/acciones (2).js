// JavaScript Document
/*$(document).ready(function(){
	   var fechaH=new Date();
	   alert(fechaH);
	   var fechaC=new Date("2014/04/04");
	   alert(fechaC);
       resul = fechaH-fechaC;
	   alert(resul);
	   dia = ((((resul/1000)/60)/60)/24);
	   alert(dia);*/
   $(document).ready(function(e){
	   var nombre;
	 $('#datos1').ready(function(e){
		 var nombre;
		        nombre =$('#txtdatos').val();
				alert(nombre);
	 });//click siguiente nombre
	  $('#fecha1').click(function(e){
		  fecha = new Date();
		  //alert(fecha.getDate());
		  //aletr(fecha.getMonth());
		  //alert(fecha.getFullYear());
		  var fechaA = new Date(fecha.getFullYear()+'/'+(fecha.getMonth()+1)+'/'+fecha.getDate());
		  var DiaC=$('#DiaCumple').val();
		  var MesC=$('#MesCumple').val();
		  var YearC=$('#AnoCumple').val();
		  fechaC=new Date(fecha.getFullYear()+'/'+MesC+'/'+DiaC);
		  if(fechaC < fechaA)
		  {
			  fechaC= new Date((fecha.getFullYear()+1)+'/'+DiaC);
		  }
		      //alert(fechaA);
			  //alert(fechaC);
			  result= fechaC-fechaA;
			  seg=Math.ceil((((result/1000)/60)/60)/24);
			  //alert(seg);
		   $('#Mnombre').text( nombre +' faltan');
		   $('#Mdias').text( seg );
		   if (seg > 1)
		   {
			      $('#Mcumple').text('dias para tu cumple')
		   }
		   else
		   {
			   $('#Mcumple').text('dias para tu cumple');
		   }
		   edad=fecha.getFullYear()-YearC
		   if(fechaC>fechaA)
		   {
			   edad=edad-1
		   }
		   alert(edad);
		   $('#Medad').text(edad);
	  });//click siguiente fecha
	 });//ready