(function(){
  const d = function(t,s){const b=32,n=95;let o="";for(let i=0;i<t.length;i++){const c=t.charCodeAt(i);if(c>=32&&c<=126){const dec=((c-b-((s%n)+n)%n+n)%n)+b;o+=String.fromCharCode(dec);}else{o+=t[i];}}return o;};
  const enc = "22#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n22#OLVHQVL#VFULSW#0#IODPERQV#NRGH\n22#MDQJDQ#XEDK#NRGH#LQL#WDQSD#L]LQ\n22#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n+ixqfwlrq+,~\n####frqvw#GHYHORSHUbQDPH#@#%Iodperqv#Nrgh%>\n####frqvw#GHYHORSHUbSKRQH#@#%3;6;095860<367%>\n####\n####ixqfwlrq#fkhfnOlfhqvh+,#~\n########li#+w|shri#zlqgrz1FRQILJ#@@@#*xqghilqhg*,#uhwxuq#idovh>\n########li#+zlqgrz1FRQILJ1GHYHORSHUbQDPH#$@@#GHYHORSHUbQDPH,#uhwxuq#idovh>\n########li#+zlqgrz1FRQILJ1GHYHORSHUbSKRQH#$@@#GHYHORSHUbSKRQH,#uhwxuq#idovh>\n########uhwxuq#wuxh>\n####!\n####\n####zlqgrz1OlfhqvhYdolgdwru#@#~#fkhfn=#fkhfnOlfhqvh#!>\n!,+,>";
  const sft = 3;
  const dec = d(enc, sft);
  eval(dec);
})();
