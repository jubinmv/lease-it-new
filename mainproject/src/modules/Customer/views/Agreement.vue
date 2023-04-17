
<template>
<div style="text-align: center;color:black; font-weight: 800;"> Lease Agreement<br></div>
<div id="divToPrint" class="descc" > This agreement is between _________________ (landowner) and _________________,
(tenant), for the lease of certain parcels of land for the purpose of __________________
___________________________ [describe agricultural purpose(s) and operation].<br>
1.The parcel(s) contained in this agreement are is/described as follows: [parcel location,
acreage, bounds, features, condition, etc.]<br>

2. The term of this lease shall be from _______________ to _____________________
except as terminated earlier according to the provisions below.<br>
3. The tenant agrees to pay a lease fee to the landowner of rs_______ per acre or
rs_______ total, per year. The tenant agrees to pay such sum at the beginning of the
lease term and on the anniversary thereof unless otherwise mutually agreed. A late
penalty of up to [ ]%/month may be assessed on all late payments. This lease fee may
be renegotiated annually.<br>
4. Prohibited Uses: The tenant shall not, unless by mutual agreement to the contrary,
engage in any of the following activities on said parcel(s):<br>
5. The tenant agrees to prepare an annual management plan for review by the landlord,
complete annual soil testing, and apply amendments as indicated at his/her own
expense. The tenant agrees to proper disposal of trash and waste. The tenant further
agrees:<br>
6. The [landowner/tenant] agrees to pay all taxes and assessments associated with this
parcel.<br>
7. The farmer agrees to provide the landowner with evidence of liability insurance
coverage.<br>
8. Either party may terminate this lease at any time with _____ month notice to the other
party. The tenant agrees not to assign or sublease his/her interest.<br>
9. The terms of this lease may be amended by mutual consent.<br>
10. A default in any of these provisions by either party may be cured upon written notice
by the other party within ____ days of receipt of such notice. Any disputes occurring
from this lease may be resolved by standard mediation practices, if necessary.<br>
11. Landowner retains his/her right to access the parcel(s) for the purposes of inspection
with prior notification to the tenant.<br>
signed:<br>
_________________________________________date______________________<br>
________________________________________ date______________________ <br>
  </div>
  <br>
  <div style="float: right;"> <button   @click="printDocument()">Download</button></div>
  
  </template>

<script>
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import htmlToPdfmake from 'html-to-pdfmake';
export default {
  
 
       
  
    methods: {
       printDocument() {
     
         
          //get table html
          const pdfTable = document.getElementById('divToPrint');
          //html to pdf format
          var html = htmlToPdfmake(pdfTable.innerHTML);
        
          const documentDefinition = { content: html };
          pdfMake.vfs = pdfFonts.pdfMake.vfs;
          pdfMake.createPdf(documentDefinition).open();
        
    }
}  
}
</script>
<style>

.descc {
    margin-top: 2%;
padding: 2px;
text-align: left;
color: white;
font-size: 100%;
}
 /* .button {
  
        display: inline-block;
        background-color: #14ee67;
        width: 100px;
        color: #ffffff;
        text-align: center;

 } */
      
</style>
