class l{static formatDate(o){const t=("0"+o.getDate()).slice(-2),e=("0"+(o.getMonth()+1)).slice(-2),s=o.getFullYear(),c=("0"+o.getHours()).slice(-2),r=("0"+o.getMinutes()).slice(-2),a=("0"+o.getSeconds()).slice(-2);return s+"-"+e+"-"+t+" "+c+":"+r+":"+a}static timeStampToDateString(o){if(o==""||o==null)return"-";let t;(o+"").length<=10?t=new Date(o*1e3):t=new Date(o);const s=["1","2","3","4","5","6","7","8","9","10","11","12"],c=t.getFullYear(),r=s[t.getMonth()],a=t.getDate(),i=t.getHours(),u=t.getMinutes(),h=t.getSeconds(),g=i<10?"0"+t.getHours():t.getHours(),D=u<10?"0"+t.getMinutes():t.getMinutes();return h<10?""+t.getSeconds():t.getSeconds(),r+"-"+a+"-"+c+" "+g+":"+D}static getTimeStampDividedByOneThousand(o){const t=o/1e3;return Math.floor(t)}static sortinUserId(o,t){return o<t?o+"_"+t:t+"_"+o}static log(o){console.log(o)}static clear(){}static async waitingComponent(o,t=10,e=100){let s=0;for(;o.value==null&&(await new Promise(c=>setTimeout(c,e)),!(s++>t)););}static addParamToCurrentUrl(o){const t=window.location.origin+window.location.pathname+o;history.pushState(null,"",t)}static checkFlutterwaveCurrency(o){return["GBP","CAD","XAF","CLP","COP","EGP","EUR","GHS","GNF","KES","MWK","MAD","NGN","RWF","SLL","STD","ZAR","TZS","UGX","USD","XOF","ZMW"].includes(o)}}l.toHHMMSS=n=>{n=Number(n);const o=Math.floor(n/(3600*24)),t=Math.floor(n%(3600*24)/3600),e=Math.floor(n%3600/60),s=Math.floor(n%60),c=o>0?o+"d : ":"00d : ",r=t>0?t+"h : ":"00h : ",a=e>0?e+"m : ":"00m : ",i=s>0?s+"s ":"00s ";return c+r+a+i};l.secondToDuration=n=>{n=Number(n);const o=Math.floor(n/(3600*24)),t=Math.floor(n%(3600*24)/3600),e=Math.floor(n%3600/60),s=Math.floor(n%60),c=o>0?o+" day ":"",r=t>0?t+" hr ":"",a=e>0?e+" min ":"",i=s>0?s+" seconds ":"";return c+r+a+i};export{l as P};