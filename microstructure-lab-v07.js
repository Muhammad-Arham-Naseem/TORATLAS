/* TORATLAS Microstructure Laboratory: schematic educational diagrams, never microscopy evidence. */
(()=>{"use strict";
const by=id=>document.getElementById(id);
const phases={
 ferrite:{title:"Ferrite (α-Fe)",formation:"BCC iron-rich phase stable at ordinary temperatures in many carbon steels. Carbon has very low solubility.",properties:"Generally relatively soft and ductile compared with untempered martensite.",limits:"Ferrite fraction and grain size cannot be inferred from a sword's appearance."},
 austenite:{title:"Austenite (γ-Fe)",formation:"FCC iron phase stable at elevated temperatures in plain-carbon steel; alloy composition changes its stability and transformation.",properties:"Its carbon content and cooling pathway influence the transformation products that follow.",limits:"Do not assume room-temperature retained austenite without measurement."},
 pearlite:{title:"Pearlite",formation:"Lamellar aggregate of ferrite and cementite formed by diffusional transformation of austenite under suitable cooling.",properties:"Lamellar spacing and phase fraction influence strength and hardness; properties depend on composition and processing.",limits:"These lines are an educational schematic, not a measured lamellar spacing."},
 martensite:{title:"Martensite",formation:"Metastable supersaturated phase produced by sufficiently rapid cooling of suitable austenite; typically lath or plate morphology.",properties:"Can be hard and strong but untempered conditions may reduce ductility and toughness. Tempering modifies the state.",limits:"A quenched sword must not automatically be assumed fully martensitic."},
 cementite:{title:"Cementite (Fe₃C)",formation:"Iron carbide occurring in pearlite and in other steel microstructures under suitable composition and heat-treatment histories.",properties:"Hard and brittle relative to ferrite; distribution influences overall mechanical behaviour.",limits:"A schematic cementite particle is not an actual metallographic identification."},
 boundaries:{title:"Grain size and boundaries",formation:"Grains form during solidification and thermomechanical or phase-transformation processes; boundaries separate crystal orientations.",properties:"Grain refinement can influence yield behaviour and fracture, depending on material state and test conditions.",limits:"There is no universal grain-size-to-strength conversion for historical swords."},
 inclusions:{title:"Slag and non-metallic inclusions",formation:"Inclusions may result from processing, entrained slag, deoxidation products or other manufacturing pathways.",properties:"Shape, size, orientation and distribution may influence fatigue, fracture and directional response.",limits:"Not all historical blades contain the same inclusions, and the drawing does not quantify them."},
 welds:{title:"Forged and welded interfaces",formation:"Joining different pieces by forge welding can leave interfaces whose integrity depends on workmanship and processing.",properties:"Interfaces may affect load transfer and crack paths; sound joints need not be weak.",limits:"Layered appearance alone cannot establish composition or authentic construction."},
 treatments:{title:"Quenching, tempering and carbon gradients",formation:"Thermal histories can transform austenite; tempering after quenching changes the transformed microstructure. Carburisation and decarburisation may modify surface carbon under appropriate conditions.",properties:"Strength, ductility, toughness and hardness can change in different directions; elastic modulus usually varies much less than strength with heat treatment.",limits:"Paths are simplified. Actual outcomes depend on alloy, section, temperatures, times, cooling and atmosphere."},
 fracture:{title:"Defects and fracture",formation:"Cracks can initiate at stresses, interfaces, inclusions and geometrical concentrations, depending on conditions.",properties:"Fatigue and fracture behaviour require specific tests and are not predicted by simple first-yield bending alone.",limits:"The diagram is not SEM fractography and contains no measured crack geometry."}
};
const items=Object.entries(phases);let choice="pearlite",grain=5,detail=55,source="schematic";
const escaped=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function diagram(){
 const svg=by("microDiagram"),w=720,h=330,step=100/grain;
 let out='<rect width="720" height="330" fill="#0e1920"/>';
 for(let y=0;y<h;y+=step)for(let x=0;x<w;x+=step){
  const parity=(Math.floor(x/step)*13+Math.floor(y/step)*7)%5;
  out+='<rect x="'+x+'" y="'+y+'" width="'+step+'" height="'+step+'" fill="'+(["#3f6171","#536e76","#698184","#315568","#476578"][parity])+'" stroke="#b8d0c8" stroke-width="1.5"/>';
 }
 if(choice==="pearlite"){for(let x=0;x<w;x+=130){out+='<rect x="'+x+'" width="95" y="0" height="330" fill="#9d9f84" opacity=".55"/>';for(let i=0;i<12;i++)out+='<path d="M'+(x+i*8)+' 0 l-60 330" stroke="#263c45" stroke-width="4"/>';}}
 if(choice==="martensite"){for(let i=0;i<45;i++){let x=i*37%w,y=i*71%h;out+='<path d="M'+x+' '+y+' l'+(50+i%3*12)+' '+(-25+i%5*7)+'" stroke="#e9d0a6" stroke-width="3"/>';}}
 if(choice==="cementite"||choice==="inclusions"){for(let i=0;i<25;i++){let x=(i*79)%w,y=(i*53)%h;out+='<ellipse cx="'+x+'" cy="'+y+'" rx="'+(choice==="inclusions"?4+i%9:3+i%4)+'" ry="'+(choice==="inclusions"?2+i%3:4)+'" fill="#d7b583"/>';}}
 if(choice==="welds"){out+='<path d="M0 155 Q120 100 240 160 T480 155 T720 150" fill="none" stroke="#edcc8a" stroke-width="10" stroke-dasharray="22 8"/>';}
 if(choice==="fracture"){out+='<path d="M0 130 L95 160 L180 120 L250 195 L340 160 L440 225 L530 175 L620 220 L720 190" fill="none" stroke="#0b1014" stroke-width="10"/>';}
 if(choice==="treatments"){out+='<rect x="0" y="0" width="240" height="330" fill="#d4ac5b" opacity=".25"/><rect x="480" y="0" width="240" height="330" fill="#81acc0" opacity=".4"/>';}
 out+='<rect x="12" y="275" width="696" height="42" rx="6" fill="#091116" opacity=".9"/><text x="24" y="301" fill="#e0eced" font-size="17">ILLUSTRATIVE SCHEMATIC — NOT MICROGRAPH / NO SCALE</text>';
 svg.innerHTML=out;
}
function update(){const p=phases[choice];by("microTitle").textContent=p.title;by("microFormation").textContent=p.formation;by("microProperties").textContent=p.properties;by("microLimits").textContent=p.limits;diagram();}
function start(){
 const root=by("microLab");if(!root)return;
 const select=by("microTopic");items.forEach(([key,p])=>{const option=document.createElement("option");option.value=key;option.textContent=p.title;select.append(option)});
 select.value=choice;select.addEventListener("change",()=>{choice=select.value;update()});
 by("microGrain").addEventListener("input",e=>{grain=Number(e.target.value);by("microGrainText").textContent="Illustrative cell density "+grain;diagram()});
 by("microToWorkbench").addEventListener("click",()=>{
   document.querySelector('[data-view="simulator"]')?.click();
   by("wbMaterial07").value="custom";
   by("wbCase07").textContent="Microstructure learning scenario: "+phases[choice].title+". No measured mechanical-property value can be inferred from a phase illustration. Enter source-backed values yourself or select an explicitly hypothetical scenario.";
   by("workbench07").scrollIntoView({block:"start",behavior:"smooth"});
 });
 by("microPreset").addEventListener("change",e=>{
   const preset=e.target.value;if(preset==="none")return;
   const ys={example250:250,example500:500,example900:900}[preset];
   if(ys){by("ys").value=ys;by("wbE07").value=200;by("wbMaterial07").value="custom";}
 });
 by("microExport").addEventListener("click",()=>{
  const p=phases[choice],lines=["TORATLAS MICROSTRUCTURE INVESTIGATION","Illustration only; no micrograph or historical sample identification","Topic: "+p.title,"Formation: "+p.formation,"Possible property influences: "+p.properties,"Limitations: "+p.limits,"Illustrative input scenario: "+by("microPreset").selectedOptions[0].textContent,"Reference links for further verification: https://www.doitpoms.ac.uk/ ; https://www.phase-trans.msm.cam.ac.uk/ ; https://www.metmuseum.org/art/collection","No measured values or source-backed imaging data transferred by this module."];
  let blob=new Blob([lines.join("\n\n")],{type:"text/plain"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="TORATLAS-microstructure-investigation.txt";a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
 });
 update();
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start);else start();
})();