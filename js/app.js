(()=>{var fm=Object.defineProperty;var pm=(n,e)=>{for(var t in e)fm(n,t,{get:e[t],enumerable:!0})};var If=0,Lh=1,Lf=2;var po=1,Nf=2,Wa=3,ys=0,Qt=1,St=2,Gn=0,Xa=1,Sn=2,Nh=3,Dh=4,Df=5;var Ws=100,qf=101,Uf=102,Bf=103,Of=104,Ff=200,Hf=201,zf=202,kf=203,qh=204,Uh=205,Vf=206,Gf=207,Wf=208,Xf=209,$f=210,Yf=211,jf=212,Jf=213,Zf=214,Hl=0,zl=1,kl=2,Ca=3,Vl=4,Gl=5,Wl=6,Xl=7,yc=0,Kf=1,Qf=2,oi=0,mo=1,go=2,xo=3,Xs=4,_o=5,vo=6,yo=7;var Bh=300,bs=301,$s=302,bc=303,Mc=304,bo=306,Pa=1e3,_i=1001,$l=1002,rn=1003,ep=1004;var Mo=1005;var cn=1006,Sc=1007;var Ms=1008;var wn=1009,Oh=1010,Fh=1011,$a=1012,Ec=1013,li=1014,Wn=1015,un=1016,Tc=1017,wc=1018,Ya=1020,Hh=35902,zh=35899,kh=1021,Vh=1022,Xn=1023,vi=1026,Ss=1027,Ac=1028,Rc=1029,Es=1030,Cc=1031;var Pc=1033,So=33776,Eo=33777,To=33778,wo=33779,Ic=35840,Lc=35841,Nc=35842,Dc=35843,qc=36196,Uc=37492,Bc=37496,Oc=37488,Fc=37489,Ao=37490,Hc=37491,zc=37808,kc=37809,Vc=37810,Gc=37811,Wc=37812,Xc=37813,$c=37814,Yc=37815,jc=37816,Jc=37817,Zc=37818,Kc=37819,Qc=37820,eu=37821,tu=36492,nu=36494,iu=36495,su=36283,au=36284,Ro=36285,ru=36286;var Ir=2300,Yl=2301,Ol=2302,_h=2303,vh=2400,yh=2401,bh=2402;var tp=3200;var Co=0,np=1,Ji="",Ut="srgb",Lr="srgb-linear",Nr="linear",_t="srgb";var Fl=7680;var ip=519,sp=512,ap=513,rp=514,ou=515,op=516,lp=517,lu=518,cp=519,Gh=35044;var Wh="300 es",ti=2e3,Ia=2001;function mm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function gm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function La(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function up(){let n=La("canvas");return n.style.display="block",n}var jd={},Na=null;function Dr(...n){let e="THREE."+n.shift();Na?Na("log",e,...n):console.log(e,...n)}function hp(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Xe(...n){n=hp(n);let e="THREE."+n.shift();if(Na)Na("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function je(...n){n=hp(n);let e="THREE."+n.shift();if(Na)Na("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function zs(...n){let e=n.join(" ");e in jd||(jd[e]=!0,Xe(...n))}function dp(n,e,t){return new Promise(function(i,s){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}var fp={[Hl]:zl,[kl]:Wl,[Vl]:Xl,[Ca]:Gl,[zl]:Hl,[Wl]:kl,[Xl]:Vl,[Gl]:Ca},yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,e);e.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Wu=Math.PI/180,qr=180/Math.PI;function ki(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function lt(n,e,t){return Math.max(e,Math.min(t,n))}function xm(n,e){return(n%e+e)%e}function Xu(n,e,t){return(1-t)*n+t*e}function xi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Tt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var le=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*i-r*s+e.x,this.y=a*s+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},In=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,r,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],d=a[r+0],f=a[r+1],p=a[r+2],x=a[r+3];if(h!==x||l!==d||c!==f||u!==p){let g=l*d+c*f+u*p+h*x;g<0&&(d=-d,f=-f,p=-p,x=-x,g=-g);let m=1-o;if(g<.9995){let y=Math.acos(g),T=Math.sin(y);m=Math.sin(m*y)/T,o=Math.sin(o*y)/T,l=l*m+d*o,c=c*m+f*o,u=u*m+p*o,h=h*m+x*o}else{l=l*m+d*o,c=c*m+f*o,u=u*m+p*o,h=h*m+x*o;let y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=a[r],d=a[r+1],f=a[r+2],p=a[r+3];return e[t]=o*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-o*f,e[t+2]=c*p+u*f+o*d-l*h,e[t+3]=u*p-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,a=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(a/2),d=l(i/2),f=l(s/2),p=l(a/2);switch(r){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],a=t[8],r=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(a-c)*f,this._z=(r-s)*f}else if(i>o&&i>h){let f=2*Math.sqrt(1+i-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(a+c)/f}else if(o>h){let f=2*Math.sqrt(1+o-i-h);this._w=(a-c)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-i-o);this._w=(r-s)/f,this._x=(a+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,a=e._z,r=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+r*o+s*c-a*l,this._y=s*u+r*l+a*o-i*c,this._z=a*u+r*c+i*l-s*o,this._w=r*u-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,a=e._z,r=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+a*t,this._w=this._w*l+r*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+a*t,this._w=this._w*l+r*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,a=e.elements,r=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,a=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*s-o*i),u=2*(o*t-a*s),h=2*(a*i-r*t);return this.x=t+l*c+r*h-o*u,this.y=i+l*u+o*c-a*h,this.z=s+l*h+a*u-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,a=e.z,r=t.x,o=t.y,l=t.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $u.copy(this).projectOnVector(e),this.sub($u)}reflect(e){return this.sub($u.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$u=new I,Jd=new In,Ze=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,r,o,l,c)}set(e,t,i,s,a,r,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=a,u[5]=l,u[6]=i,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],p=i[8],x=s[0],g=s[3],m=s[6],y=s[1],T=s[4],v=s[7],E=s[2],M=s[5],P=s[8];return a[0]=r*x+o*y+l*E,a[3]=r*g+o*T+l*M,a[6]=r*m+o*v+l*P,a[1]=c*x+u*y+h*E,a[4]=c*g+u*T+h*M,a[7]=c*m+u*v+h*P,a[2]=d*x+f*y+p*E,a[5]=d*g+f*T+p*M,a[8]=d*m+f*v+p*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*r*u-t*o*c-i*a*u+i*o*l+s*a*c-s*r*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*r-o*c,d=o*l-u*a,f=c*a-r*l,p=t*h+i*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=h*x,e[1]=(s*c-u*i)*x,e[2]=(o*i-s*r)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*a-o*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(r*t-i*a)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+e,-s*c,s*l,-s*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yu.makeScale(e,t)),this}rotate(e){return zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yu.makeRotation(-e)),this}translate(e,t){return zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Yu=new Ze,Zd=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kd=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _m(){let n={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===_t&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===_t&&(s.r=Aa(s.r),s.g=Aa(s.g),s.b=Aa(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ji?Nr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return zs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return zs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Lr]:{primaries:e,whitePoint:i,transfer:Nr,toXYZ:Zd,fromXYZ:Kd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:Zd,fromXYZ:Kd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),n}var ct=_m();function Vi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Aa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var la,jl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{la===void 0&&(la=La("canvas")),la.width=e.width,la.height=e.height;let s=la.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=la}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=La("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Vi(a[r]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Vi(t[i]/255)*255):t[i]=Vi(t[i]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},vm=0,Da=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(ju(s[r].image)):a.push(ju(s[r]))}else a=ju(s);i.url=a}return t||(e.images[this.uuid]=i),i}};function ju(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?jl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}var ym=0,Ju=new I,_n=class n extends yi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=_i,s=_i,a=cn,r=Ms,o=Xn,l=wn,c=n.DEFAULT_ANISOTROPY,u=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=ki(),this.name="",this.source=new Da(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ju).x}get height(){return this.source.getSize(Ju).y}get depth(){return this.source.getSize(Ju).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pa:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case $l:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pa:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case $l:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Bh;_n.DEFAULT_ANISOTROPY=1;var qt=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*t+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*t+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*t+r[7]*i+r[11]*s+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,v=(f+1)/2,E=(m+1)/2,M=(u+d)/4,P=(h+x)/4,b=(p+g)/4;return T>v&&T>E?T<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(T),s=M/i,a=P/i):v>E?v<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(v),i=M/s,a=b/s):E<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(E),i=P/a,s=b/a),this.set(i,s,a,t),this}let y=Math.sqrt((g-p)*(g-p)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(h-x)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jl=class extends yi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},a=new _n(s),r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Da(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kt=class extends Jl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ur=class extends _n{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Zl=class extends _n{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var mt=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,a,r,o,l,c,u,h,d,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,r,o,l,c,u,h,d,f,p,x,g)}set(e,t,i,s,a,r,o,l,c,u,h,d,f,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=a,m[5]=r,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/ca.setFromMatrixColumn(e,0).length(),a=1/ca.setFromMatrixColumn(e,1).length(),r=1/ca.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,a=e.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){let d=r*u,f=r*h,p=o*u,x=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=p+f*c,t[10]=r*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,p=c*u,x=c*h;t[0]=d+x*o,t[4]=p*o-f,t[8]=r*c,t[1]=r*h,t[5]=r*u,t[9]=-o,t[2]=f*o-p,t[6]=x+d*o,t[10]=r*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,p=c*u,x=c*h;t[0]=d-x*o,t[4]=-r*h,t[8]=p+f*o,t[1]=f+p*o,t[5]=r*u,t[9]=x-d*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){let d=r*u,f=r*h,p=o*u,x=o*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){let d=r*l,f=r*c,p=o*l,x=o*c;t[0]=l*u,t[4]=x-d*h,t[8]=p*h+f,t[1]=h,t[5]=r*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-x*h}else if(e.order==="XZY"){let d=r*l,f=r*c,p=o*l,x=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=r*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=o*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bm,e,Mm)}lookAt(e,t,i){let s=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),cs.crossVectors(i,Cn),cs.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),cs.crossVectors(i,Cn)),cs.normalize(),hl.crossVectors(Cn,cs),s[0]=cs.x,s[4]=hl.x,s[8]=Cn.x,s[1]=cs.y,s[5]=hl.y,s[9]=Cn.y,s[2]=cs.z,s[6]=hl.z,s[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],p=i[2],x=i[6],g=i[10],m=i[14],y=i[3],T=i[7],v=i[11],E=i[15],M=s[0],P=s[4],b=s[8],w=s[12],L=s[1],U=s[5],z=s[9],G=s[13],q=s[2],V=s[6],Q=s[10],j=s[14],he=s[3],te=s[7],ae=s[11],oe=s[15];return a[0]=r*M+o*L+l*q+c*he,a[4]=r*P+o*U+l*V+c*te,a[8]=r*b+o*z+l*Q+c*ae,a[12]=r*w+o*G+l*j+c*oe,a[1]=u*M+h*L+d*q+f*he,a[5]=u*P+h*U+d*V+f*te,a[9]=u*b+h*z+d*Q+f*ae,a[13]=u*w+h*G+d*j+f*oe,a[2]=p*M+x*L+g*q+m*he,a[6]=p*P+x*U+g*V+m*te,a[10]=p*b+x*z+g*Q+m*ae,a[14]=p*w+x*G+g*j+m*oe,a[3]=y*M+T*L+v*q+E*he,a[7]=y*P+T*U+v*V+E*te,a[11]=y*b+T*z+v*Q+E*ae,a[15]=y*w+T*G+v*j+E*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],r=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],x=e[7],g=e[11],m=e[15],y=l*f-c*d,T=o*f-c*h,v=o*d-l*h,E=r*f-c*u,M=r*d-l*u,P=r*h-o*u;return t*(x*y-g*T+m*v)-i*(p*y-g*E+m*M)+s*(p*T-x*E+m*P)-a*(p*v-x*M+g*P)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],a=e[1],r=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(r*u-o*c)-i*(a*u-o*l)+s*(a*c-r*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],x=e[13],g=e[14],m=e[15],y=t*o-i*r,T=t*l-s*r,v=t*c-a*r,E=i*l-s*o,M=i*c-a*o,P=s*c-a*l,b=u*x-h*p,w=u*g-d*p,L=u*m-f*p,U=h*g-d*x,z=h*m-f*x,G=d*m-f*g,q=y*G-T*z+v*U+E*L-M*w+P*b;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/q;return e[0]=(o*G-l*z+c*U)*V,e[1]=(s*z-i*G-a*U)*V,e[2]=(x*P-g*M+m*E)*V,e[3]=(d*M-h*P-f*E)*V,e[4]=(l*L-r*G-c*w)*V,e[5]=(t*G-s*L+a*w)*V,e[6]=(g*v-p*P-m*T)*V,e[7]=(u*P-d*v+f*T)*V,e[8]=(r*z-o*L+c*b)*V,e[9]=(i*L-t*z-a*b)*V,e[10]=(p*M-x*v+m*y)*V,e[11]=(h*v-u*M-f*y)*V,e[12]=(o*w-r*U-l*b)*V,e[13]=(t*U-i*w+s*b)*V,e[14]=(x*T-p*E-g*y)*V,e[15]=(u*E-h*T+d*y)*V,this}scale(e){let t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),a=1-i,r=e.x,o=e.y,l=e.z,c=a*r,u=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*r,0,c*l-s*o,u*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,r){return this.set(1,i,a,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,a=t._x,r=t._y,o=t._z,l=t._w,c=a+a,u=r+r,h=o+o,d=a*c,f=a*u,p=a*h,x=r*u,g=r*h,m=o*h,y=l*c,T=l*u,v=l*h,E=i.x,M=i.y,P=i.z;return s[0]=(1-(x+m))*E,s[1]=(f+v)*E,s[2]=(p-T)*E,s[3]=0,s[4]=(f-v)*M,s[5]=(1-(d+m))*M,s[6]=(g+y)*M,s[7]=0,s[8]=(p+T)*P,s[9]=(g-y)*P,s[10]=(1-(d+x))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),t.identity(),this;let r=ca.set(s[0],s[1],s[2]).length(),o=ca.set(s[4],s[5],s[6]).length(),l=ca.set(s[8],s[9],s[10]).length();a<0&&(r=-r),Zn.copy(this);let c=1/r,u=1/o,h=1/l;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=u,Zn.elements[5]*=u,Zn.elements[6]*=u,Zn.elements[8]*=h,Zn.elements[9]*=h,Zn.elements[10]*=h,t.setFromRotationMatrix(Zn),i.x=r,i.y=o,i.z=l,this}makePerspective(e,t,i,s,a,r,o=ti,l=!1){let c=this.elements,u=2*a/(t-e),h=2*a/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),p,x;if(l)p=a/(r-a),x=r*a/(r-a);else if(o===ti)p=-(r+a)/(r-a),x=-2*r*a/(r-a);else if(o===Ia)p=-r/(r-a),x=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,a,r,o=ti,l=!1){let c=this.elements,u=2/(t-e),h=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s),p,x;if(l)p=1/(r-a),x=r/(r-a);else if(o===ti)p=-2/(r-a),x=-(r+a)/(r-a);else if(o===Ia)p=-1/(r-a),x=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ca=new I,Zn=new mt,bm=new I(0,0,0),Mm=new I(1,1,1),cs=new I,hl=new I,Cn=new I,Qd=new mt,ef=new In,Ln=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-lt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Qd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ef.setFromEuler(this),this.setFromQuaternion(ef,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ln.DEFAULT_ORDER="XYZ";var Br=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Sm=0,tf=new I,ua=new In,qi=new mt,dl=new I,vr=new I,Em=new I,Tm=new In,nf=new I(1,0,0),sf=new I(0,1,0),af=new I(0,0,1),rf={type:"added"},wm={type:"removed"},ha={type:"childadded",child:null},Zu={type:"childremoved",child:null},zt=class n extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new Ln,i=new In,s=new I(1,1,1);function a(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new Ze}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Br,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ua.setFromAxisAngle(e,t),this.quaternion.multiply(ua),this}rotateOnWorldAxis(e,t){return ua.setFromAxisAngle(e,t),this.quaternion.premultiply(ua),this}rotateX(e){return this.rotateOnAxis(nf,e)}rotateY(e){return this.rotateOnAxis(sf,e)}rotateZ(e){return this.rotateOnAxis(af,e)}translateOnAxis(e,t){return tf.copy(e).applyQuaternion(this.quaternion),this.position.add(tf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nf,e)}translateY(e){return this.translateOnAxis(sf,e)}translateZ(e){return this.translateOnAxis(af,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?dl.copy(e):dl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(vr,dl,this.up):qi.lookAt(dl,vr,this.up),this.quaternion.setFromRotationMatrix(qi),s&&(qi.extractRotation(s.matrixWorld),ua.setFromRotationMatrix(qi),this.quaternion.premultiply(ua.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rf),ha.child=e,this.dispatchEvent(ha),ha.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wm),Zu.child=e,this.dispatchEvent(Zu),Zu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rf),ha.child=e,this.dispatchEvent(ha),ha.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,Em),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,Tm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*i-a[8]*s,a[13]+=i-a[1]*t-a[5]*i-a[9]*s,a[14]+=s-a[2]*t-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];a(e.shapes,h)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(e.animations,l))}}if(t){let o=r(e.geometries),l=r(e.materials),c=r(e.textures),u=r(e.images),h=r(e.shapes),d=r(e.skeletons),f=r(e.animations),p=r(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function r(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};zt.DEFAULT_UP=new I(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pt=class extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Am={type:"move"},qa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Am)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new pt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},pp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},fl={h:0,s:0,l:0};function Ku(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ve=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ct.workingColorSpace){if(e=xm(e,1),t=lt(t,0,1),i=lt(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,r=2*i-a;this.r=Ku(r,a,e+1/3),this.g=Ku(r,a,e),this.b=Ku(r,a,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=Ut){function i(a){a!==void 0&&parseFloat(a)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){let i=pp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=Aa(e.r),this.g=Aa(e.g),this.b=Aa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return ct.workingToColorSpace(xn.copy(this),e),Math.round(lt(xn.r*255,0,255))*65536+Math.round(lt(xn.g*255,0,255))*256+Math.round(lt(xn.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(xn.copy(this),t);let i=xn.r,s=xn.g,a=xn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,u=(o+r)/2;if(o===r)l=0,c=0;else{let h=r-o;switch(c=u<=.5?h/(r+o):h/(2-r-o),r){case i:l=(s-a)/h+(s<a?6:0);break;case s:l=(a-i)/h+2;break;case a:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Ut){ct.workingToColorSpace(xn.copy(this),e);let t=xn.r,i=xn.g,s=xn.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(us),this.setHSL(us.h+e,us.s+t,us.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(us),e.getHSL(fl);let i=Xu(us.h,fl.h,t),s=Xu(us.s,fl.s,t),a=Xu(us.l,fl.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new Ve;Ve.NAMES=pp;var Or=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Gi=class extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Kn=new I,Ui=new I,Qu=new I,Bi=new I,da=new I,fa=new I,of=new I,eh=new I,th=new I,nh=new I,ih=new qt,sh=new qt,ah=new qt,zi=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Kn.subVectors(e,t),s.cross(Kn);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){Kn.subVectors(s,t),Ui.subVectors(i,t),Qu.subVectors(e,t);let r=Kn.dot(Kn),o=Kn.dot(Ui),l=Kn.dot(Qu),c=Ui.dot(Ui),u=Ui.dot(Qu),h=r*c-o*o;if(h===0)return a.set(0,0,0),null;let d=1/h,f=(c*l-o*u)*d,p=(r*u-o*l)*d;return a.set(1-f-p,p,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,i,s,a,r,o,l){return this.getBarycoord(e,t,i,s,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Bi.x),l.addScaledVector(r,Bi.y),l.addScaledVector(o,Bi.z),l)}static getInterpolatedAttribute(e,t,i,s,a,r){return ih.setScalar(0),sh.setScalar(0),ah.setScalar(0),ih.fromBufferAttribute(e,t),sh.fromBufferAttribute(e,i),ah.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(ih,a.x),r.addScaledVector(sh,a.y),r.addScaledVector(ah,a.z),r}static isFrontFacing(e,t,i,s){return Kn.subVectors(i,t),Ui.subVectors(e,t),Kn.cross(Ui).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),Kn.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,a=this.c,r,o;da.subVectors(s,i),fa.subVectors(a,i),eh.subVectors(e,i);let l=da.dot(eh),c=fa.dot(eh);if(l<=0&&c<=0)return t.copy(i);th.subVectors(e,s);let u=da.dot(th),h=fa.dot(th);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return r=l/(l-u),t.copy(i).addScaledVector(da,r);nh.subVectors(e,a);let f=da.dot(nh),p=fa.dot(nh);if(p>=0&&f<=p)return t.copy(a);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(i).addScaledVector(fa,o);let g=u*p-f*h;if(g<=0&&h-u>=0&&f-p>=0)return of.subVectors(a,s),o=(h-u)/(h-u+(f-p)),t.copy(s).addScaledVector(of,o);let m=1/(g+x+d);return r=x*m,o=d*m,t.copy(i).addScaledVector(da,r).addScaledVector(fa,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},bi=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Qn):Qn.fromBufferAttribute(a,r),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pl.copy(i.boundingBox)),pl.applyMatrix4(e.matrixWorld),this.union(pl)}let s=e.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),ml.subVectors(this.max,yr),pa.subVectors(e.a,yr),ma.subVectors(e.b,yr),ga.subVectors(e.c,yr),hs.subVectors(ma,pa),ds.subVectors(ga,ma),Bs.subVectors(pa,ga);let t=[0,-hs.z,hs.y,0,-ds.z,ds.y,0,-Bs.z,Bs.y,hs.z,0,-hs.x,ds.z,0,-ds.x,Bs.z,0,-Bs.x,-hs.y,hs.x,0,-ds.y,ds.x,0,-Bs.y,Bs.x,0];return!rh(t,pa,ma,ga,ml)||(t=[1,0,0,0,1,0,0,0,1],!rh(t,pa,ma,ga,ml))?!1:(gl.crossVectors(hs,ds),t=[gl.x,gl.y,gl.z],rh(t,pa,ma,ga,ml))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Oi=[new I,new I,new I,new I,new I,new I,new I,new I],Qn=new I,pl=new bi,pa=new I,ma=new I,ga=new I,hs=new I,ds=new I,Bs=new I,yr=new I,ml=new I,gl=new I,Os=new I;function rh(n,e,t,i,s){for(let a=0,r=n.length-3;a<=r;a+=3){Os.fromArray(n,a);let o=s.x*Math.abs(Os.x)+s.y*Math.abs(Os.y)+s.z*Math.abs(Os.z),l=e.dot(Os),c=t.dot(Os),u=i.dot(Os);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var jt=new I,xl=new le,Rm=0,Zt=class extends yi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Gh,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xl.fromBufferAttribute(this,t),xl.applyMatrix3(e),this.setXY(t,xl.x,xl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=xi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Tt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),s=Tt(s,this.array),a=Tt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Fr=class extends Zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Hr=class extends Zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var et=class extends Zt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Cm=new bi,br=new I,oh=new I,Wi=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Cm.setFromPoints(e).getCenter(i);let s=0;for(let a=0,r=e.length;a<r;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;br.subVectors(e,this.center);let t=br.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(br,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(br.copy(e.center).add(oh)),this.expandByPoint(br.copy(e.center).sub(oh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Pm=0,zn=new mt,lh=new zt,xa=new I,Pn=new bi,Mr=new bi,an=new I,yt=class n extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mm(e)?Hr:Fr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Ze().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,i){return zn.makeTranslation(e,t,i),this.applyMatrix4(zn),this}scale(e,t,i){return zn.makeScale(e,t,i),this.applyMatrix4(zn),this}lookAt(e){return lh.lookAt(e),lh.updateMatrix(),this.applyMatrix4(lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xa).negate(),this.translate(xa.x,xa.y,xa.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,a=e.length;s<a;s++){let r=e[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new et(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let a=t[i];Pn.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){let o=t[a];Mr.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(Pn.min,Mr.min),Pn.expandByPoint(an),an.addVectors(Pn.max,Mr.max),Pn.expandByPoint(an)):(Pn.expandByPoint(Mr.min),Pn.expandByPoint(Mr.max))}Pn.getCenter(i);let s=0;for(let a=0,r=e.count;a<r;a++)an.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(an));if(t)for(let a=0,r=t.length;a<r;a++){let o=t[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)an.fromBufferAttribute(o,c),l&&(xa.fromBufferAttribute(e,c),an.add(xa)),s=Math.max(s,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,a=t.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new Zt(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[];for(let b=0;b<i.count;b++)o[b]=new I,l[b]=new I;let c=new I,u=new I,h=new I,d=new le,f=new le,p=new le,x=new I,g=new I;function m(b,w,L){c.fromBufferAttribute(i,b),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,L),d.fromBufferAttribute(a,b),f.fromBufferAttribute(a,w),p.fromBufferAttribute(a,L),u.sub(c),h.sub(c),f.sub(d),p.sub(d);let U=1/(f.x*p.y-p.x*f.y);isFinite(U)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(U),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(U),o[b].add(x),o[w].add(x),o[L].add(x),l[b].add(g),l[w].add(g),l[L].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let b=0,w=y.length;b<w;++b){let L=y[b],U=L.start,z=L.count;for(let G=U,q=U+z;G<q;G+=3)m(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let T=new I,v=new I,E=new I,M=new I;function P(b){E.fromBufferAttribute(s,b),M.copy(E);let w=o[b];T.copy(w),T.sub(E.multiplyScalar(E.dot(w))).normalize(),v.crossVectors(M,w);let U=v.dot(l[b])<0?-1:1;r.setXYZW(b,T.x,T.y,T.z,U)}for(let b=0,w=y.length;b<w;++b){let L=y[b],U=L.start,z=L.count;for(let G=U,q=U+z;G<q;G+=3)P(e.getX(G+0)),P(e.getX(G+1)),P(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new I,a=new I,r=new I,o=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,x),r.fromBufferAttribute(t,g),u.subVectors(r,a),h.subVectors(s,a),u.cross(h),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),u.subVectors(r,a),h.subVectors(s,a),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),f=0,p=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*u;for(let m=0;m<u;m++)d[p++]=c[f++]}return new Zt(d,u,h)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let a=e.morphAttributes;for(let c in a){let u=[],h=a[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let c=0,u=r.length;c<u;c++){let h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Gh,this.updateRanges=[],this.version=0,this.uuid=ki()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Mn=new I,zr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix4(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.applyNormalMatrix(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.transformDirection(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=xi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Tt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),s=Tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),s=Tt(s,this.array),a=Tt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){Dr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new Zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Dr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ch=new I,Im=new I,Lm=new Ze,ei=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=ch.subVectors(i,t).cross(Im.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(ch),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(s,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Lm.getNormalMatrix(e),s=this.coplanarPoint(ch).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Nm=0,ii=class extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=Xa,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qh,this.blendDst=Uh,this.blendEquation=Ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ip,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fl,this.stencilZFail=Fl,this.stencilZPass=Fl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(t){let a=s(e.textures),r=s(e.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ei().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new le().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ua=class extends ii{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},_a,Sr=new I,va=new I,ya=new I,ba=new le,Er=new le,mp=new mt,_l=new I,Tr=new I,vl=new I,lf=new le,uh=new le,cf=new le,kr=class extends zt{constructor(e=new Ua){if(super(),this.isSprite=!0,this.type="Sprite",_a===void 0){_a=new yt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Kl(t,5);_a.setIndex([0,1,2,0,2,3]),_a.setAttribute("position",new zr(i,3,0,!1)),_a.setAttribute("uv",new zr(i,2,3,!1))}this.geometry=_a,this.material=e,this.center=new le(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&je('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),va.setFromMatrixScale(this.matrixWorld),mp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ya.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&va.multiplyScalar(-ya.z);let i=this.material.rotation,s,a;i!==0&&(a=Math.cos(i),s=Math.sin(i));let r=this.center;yl(_l.set(-.5,-.5,0),ya,r,va,s,a),yl(Tr.set(.5,-.5,0),ya,r,va,s,a),yl(vl.set(.5,.5,0),ya,r,va,s,a),lf.set(0,0),uh.set(1,0),cf.set(1,1);let o=e.ray.intersectTriangle(_l,Tr,vl,!1,Sr);if(o===null&&(yl(Tr.set(-.5,.5,0),ya,r,va,s,a),uh.set(0,1),o=e.ray.intersectTriangle(_l,vl,Tr,!1,Sr),o===null))return;let l=e.ray.origin.distanceTo(Sr);l<e.near||l>e.far||t.push({distance:l,point:Sr.clone(),uv:zi.getInterpolation(Sr,_l,Tr,vl,lf,uh,cf,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function yl(n,e,t,i,s,a){ba.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Er.x=a*ba.x-s*ba.y,Er.y=s*ba.x+a*ba.y):Er.copy(ba),n.copy(e),n.x+=Er.x,n.y+=Er.y,n.applyMatrix4(mp)}var Fi=new I,hh=new I,bl=new I,Ml=new I,Vr=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){hh.copy(e).add(t).multiplyScalar(.5),bl.copy(t).sub(e).normalize(),Ml.copy(this.origin).sub(hh);let a=e.distanceTo(t)*.5,r=-this.direction.dot(bl),o=Ml.dot(this.direction),l=-Ml.dot(bl),c=Ml.lengthSq(),u=Math.abs(1-r*r),h,d,f,p;if(u>0)if(h=r*l-o,d=r*o-l,p=a*u,h>=0)if(d>=-p)if(d<=p){let x=1/u;h*=x,d*=x,f=h*(h+r*d+2*o)+d*(r*h+d+2*l)+c}else d=a,h=Math.max(0,-(r*d+o)),f=-h*h+d*(d+2*l)+c;else d=-a,h=Math.max(0,-(r*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-r*a+o)),d=h>0?-a:Math.min(Math.max(-a,-l),a),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-a,-l),a),f=d*(d+2*l)+c):(h=Math.max(0,-(r*a+o)),d=h>0?a:Math.min(Math.max(-a,-l),a),f=-h*h+d*(d+2*l)+c);else d=r>0?-a:a,h=Math.max(0,-(r*d+o)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(hh).addScaledVector(bl,d),f}intersectSphere(e,t){if(e.radius<0)return null;Fi.subVectors(e.center,this.origin);let i=Fi.dot(this.direction),s=Fi.dot(Fi)-i*i,a=e.radius*e.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,r,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(a=(e.min.y-d.y)*u,r=(e.max.y-d.y)*u):(a=(e.max.y-d.y)*u,r=(e.min.y-d.y)*u),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,i,s,a){let r=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=e.x-r.x,d=e.y-r.y,f=e.z-r.z,p=t.x-r.x,x=t.y-r.y,g=t.z-r.z,m=i.x-r.x,y=i.y-r.y,T=i.z-r.z,v=Math.abs(l),E=Math.abs(c),M=Math.abs(u),P,b,w,L,U,z,G,q,V,Q,j,he;if(v>=E&&v>=M?(w=l,z=h,V=p,he=m,l>=0?(P=c,b=u,L=d,U=f,G=x,q=g,Q=y,j=T):(P=u,b=c,L=f,U=d,G=g,q=x,Q=T,j=y)):E>=M?(w=c,z=d,V=x,he=y,c>=0?(P=u,b=l,L=f,U=h,G=g,q=p,Q=T,j=m):(P=l,b=u,L=h,U=f,G=p,q=g,Q=m,j=T)):(w=u,z=f,V=g,he=T,u>=0?(P=l,b=c,L=h,U=d,G=p,q=x,Q=m,j=y):(P=c,b=l,L=d,U=h,G=x,q=p,Q=y,j=m)),w===0)return null;let te=P/w,ae=b/w,oe=1/w,Ne=L-te*z,Ce=U-ae*z,ft=G-te*V,Je=q-ae*V,at=Q-te*he,H=j-ae*he,Z=at*Je-H*ft,me=Ne*H-Ce*at,Pe=ft*Ce-Je*Ne;if(s){if(Z<0||me<0||Pe<0)return null}else if((Z<0||me<0||Pe<0)&&(Z>0||me>0||Pe>0))return null;let _e=Z+me+Pe;if(_e===0)return null;let De=oe*(Z*z+me*V+Pe*he);return(_e>0?De<0:De>0)?null:this.at(De/_e,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},It=class extends ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},uf=new mt,Fs=new Vr,Sl=new Wi,hf=new I,El=new I,Tl=new I,wl=new I,dh=new I,Al=new I,df=new I,Rl=new I,ie=class extends zt{constructor(e=new yt,t=new It){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(a&&o){Al.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let u=o[l],h=a[l];u!==0&&(dh.fromBufferAttribute(h,e),r?Al.addScaledVector(dh,u):Al.addScaledVector(dh.sub(t),u))}t.add(Al)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sl.copy(i.boundingSphere),Sl.applyMatrix4(a),Fs.copy(e.ray).recast(e.near),!(Sl.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(Sl,hf)===null||Fs.origin.distanceToSquared(hf)>(e.far-e.near)**2))&&(uf.copy(a).invert(),Fs.copy(e.ray).applyMatrix4(uf),!(i.boundingBox!==null&&Fs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Fs)))}_computeIntersections(e,t,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,h=a.attributes.normal,d=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=r[g.materialIndex],y=Math.max(g.start,f.start),T=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=y,E=T;v<E;v+=3){let M=o.getX(v),P=o.getX(v+1),b=o.getX(v+2);s=Cl(this,m,e,i,c,u,h,M,P,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let y=o.getX(g),T=o.getX(g+1),v=o.getX(g+2);s=Cl(this,r,e,i,c,u,h,y,T,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=r[g.materialIndex],y=Math.max(g.start,f.start),T=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=y,E=T;v<E;v+=3){let M=v,P=v+1,b=v+2;s=Cl(this,m,e,i,c,u,h,M,P,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let y=g,T=g+1,v=g+2;s=Cl(this,r,e,i,c,u,h,y,T,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Dm(n,e,t,i,s,a,r,o){let l;if(e.side===Qt?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,e.side===ys,o),l===null)return null;Rl.copy(o),Rl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Rl);return c<t.near||c>t.far?null:{distance:c,point:Rl.clone(),object:n}}function Cl(n,e,t,i,s,a,r,o,l,c){n.getVertexPosition(o,El),n.getVertexPosition(l,Tl),n.getVertexPosition(c,wl);let u=Dm(n,e,t,i,El,Tl,wl,df);if(u){let h=new I;zi.getBarycoord(df,El,Tl,wl,h),s&&(u.uv=zi.getInterpolatedAttribute(s,o,l,c,h,new le)),a&&(u.uv1=zi.getInterpolatedAttribute(a,o,l,c,h,new le)),r&&(u.normal=zi.getInterpolatedAttribute(r,o,l,c,h,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new I,materialIndex:0};zi.getNormal(El,Tl,wl,d.normal),u.face=d,u.barycoord=h}return u}var Gr=class extends _n{constructor(e=null,t=1,i=1,s,a,r,o,l,c=rn,u=rn,h,d){super(null,r,o,l,c,u,s,a,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wr=class extends Zt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ma=new mt,ff=new mt,Pl=[],pf=new bi,qm=new mt,wr=new ie,Ar=new Wi,Nn=class extends ie{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Wr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,qm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ma),pf.copy(e.boundingBox).applyMatrix4(Ma),this.boundingBox.union(pf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ma),Ar.copy(e.boundingSphere).applyMatrix4(Ma),this.boundingSphere.union(Ar)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,r=e*a+1;for(let o=0;o<i.length;o++)i[o]=s[r+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(wr.geometry=this.geometry,wr.material=this.material,wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ar.copy(this.boundingSphere),Ar.applyMatrix4(i),e.ray.intersectsSphere(Ar)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,Ma),ff.multiplyMatrices(i,Ma),wr.matrixWorld=ff,wr.raycast(e,Pl);for(let r=0,o=Pl.length;r<o;r++){let l=Pl[r];l.instanceId=a,l.object=this,t.push(l)}Pl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Wr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Gr(new Float32Array(s*this.count),s,this.count,Ac,Wn));let a=this.morphTexture.source.data.data,r=0;for(let c=0;c<i.length;c++)r+=i[c];let o=this.geometry.morphTargetsRelative?1:1-r,l=s*e;return a[l]=o,a.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Hs=new Wi,Um=new le(.5,.5),Il=new I,Ba=class{constructor(e=new ei,t=new ei,i=new ei,s=new ei,a=new ei,r=new ei){this.planes=[e,t,i,s,a,r]}set(e,t,i,s,a,r){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ti,i=!1){let s=this.planes,a=e.elements,r=a[0],o=a[1],l=a[2],c=a[3],u=a[4],h=a[5],d=a[6],f=a[7],p=a[8],x=a[9],g=a[10],m=a[11],y=a[12],T=a[13],v=a[14],E=a[15];if(s[0].setComponents(c-r,f-u,m-p,E-y).normalize(),s[1].setComponents(c+r,f+u,m+p,E+y).normalize(),s[2].setComponents(c+o,f+h,m+x,E+T).normalize(),s[3].setComponents(c-o,f-h,m-x,E-T).normalize(),i)s[4].setComponents(l,d,g,v).normalize(),s[5].setComponents(c-l,f-d,m-g,E-v).normalize();else if(s[4].setComponents(c-l,f-d,m-g,E-v).normalize(),t===ti)s[5].setComponents(c+l,f+d,m+g,E+v).normalize();else if(t===Ia)s[5].setComponents(l,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hs)}intersectsSprite(e){Hs.center.set(0,0,0);let t=Um.distanceTo(e.center);return Hs.radius=.7071067811865476+t,Hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Il.x=s.normal.x>0?e.max.x:e.min.x,Il.y=s.normal.y>0?e.max.y:e.min.y,Il.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Il)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Mi=class extends ii{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},mf=new mt,Mh=new Vr,Ll=new Wi,Nl=new I,Xi=class extends zt{constructor(e=new yt,t=new Mi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ll.copy(i.boundingSphere),Ll.applyMatrix4(s),Ll.radius+=a,e.ray.intersectsSphere(Ll)===!1)return;mf.copy(s).invert(),Mh.copy(e.ray).applyMatrix4(mf);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){let d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let p=d,x=f;p<x;p++){let g=c.getX(p);Nl.fromBufferAttribute(h,g),gf(Nl,g,l,s,e,t,this)}}else{let d=Math.max(0,r.start),f=Math.min(h.count,r.start+r.count);for(let p=d,x=f;p<x;p++)Nl.fromBufferAttribute(h,p),gf(Nl,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function gf(n,e,t,i,s,a,r){let o=Mh.distanceSqToPoint(n);if(o<t){let l=new I;Mh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}var Xr=class extends _n{constructor(e=[],t=bs,i,s,a,r,o,l,c,u){super(e,t,i,s,a,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Tn=class extends _n{constructor(e,t,i,s,a,r,o,l,c){super(e,t,i,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ps=class extends _n{constructor(e,t,i=li,s,a,r,o=rn,l=rn,c,u=vi,h=1){if(u!==vi&&u!==Ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,a,r,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Da(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ql=class extends ps{constructor(e,t=li,i=bs,s,a,r=rn,o=rn,l,c=vi){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,a,r,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},$r=class extends _n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},kt=class n extends yt{constructor(e=1,t=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,i,t,e,r,a,0),p("z","y","x",1,-1,i,t,-e,r,a,1),p("x","z","y",1,1,e,i,t,s,r,2),p("x","z","y",1,-1,e,i,-t,s,r,3),p("x","y","z",1,-1,e,t,i,s,a,4),p("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(u,3)),this.setAttribute("uv",new et(h,2));function p(x,g,m,y,T,v,E,M,P,b,w){let L=v/P,U=E/b,z=v/2,G=E/2,q=M/2,V=P+1,Q=b+1,j=0,he=0,te=new I;for(let ae=0;ae<Q;ae++){let oe=ae*U-G;for(let Ne=0;Ne<V;Ne++){let Ce=Ne*L-z;te[x]=Ce*y,te[g]=oe*T,te[m]=q,c.push(te.x,te.y,te.z),te[x]=0,te[g]=0,te[m]=M>0?1:-1,u.push(te.x,te.y,te.z),h.push(Ne/P),h.push(1-ae/b),j+=1}}for(let ae=0;ae<b;ae++)for(let oe=0;oe<P;oe++){let Ne=d+oe+V*ae,Ce=d+oe+V*(ae+1),ft=d+(oe+1)+V*(ae+1),Je=d+(oe+1)+V*ae;l.push(Ne,Ce,Je),l.push(Ce,ft,Je),he+=6}o.addGroup(f,he,w),f+=he,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},$i=class n extends yt{constructor(e=1,t=1,i=4,s=8,a=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:a},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),a=Math.max(1,Math.floor(a));let r=[],o=[],l=[],c=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,p=i*2+a,x=s+1,g=new I,m=new I;for(let y=0;y<=p;y++){let T=0,v=0,E=0,M=0;if(y<=i){let w=y/i,L=w*Math.PI/2;v=-u-e*Math.cos(L),E=e*Math.sin(L),M=-e*Math.cos(L),T=w*h}else if(y<=i+a){let w=(y-i)/a;v=-u+w*t,E=e,M=0,T=h+w*d}else{let w=(y-i-a)/i,L=w*Math.PI/2;v=u+e*Math.sin(L),E=e*Math.cos(L),M=e*Math.sin(L),T=h+d+w*h}let P=Math.max(0,Math.min(1,T/f)),b=0;y===0?b=.5/s:y===p&&(b=-.5/s);for(let w=0;w<=s;w++){let L=w/s,U=L*Math.PI*2,z=Math.sin(U),G=Math.cos(U);m.x=-E*G,m.y=v,m.z=E*z,o.push(m.x,m.y,m.z),g.set(-E*G,M,E*z),g.normalize(),l.push(g.x,g.y,g.z),c.push(L+b,P)}if(y>0){let w=(y-1)*x;for(let L=0;L<s;L++){let U=w+L,z=w+L+1,G=y*x+L,q=y*x+L+1;r.push(U,z,G),r.push(z,q,G)}}}this.setIndex(r),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Si=class n extends yt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let a=[],r=[],o=[],l=[],c=new I,u=new le;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=i+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),r.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(r[d]/e+1)/2,u.y=(r[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)a.push(h,h+1,0);this.setIndex(a),this.setAttribute("position",new et(r,3)),this.setAttribute("normal",new et(o,3)),this.setAttribute("uv",new et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Mt=class n extends yt{constructor(e=1,t=1,i=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),a=Math.floor(a);let u=[],h=[],d=[],f=[],p=0,x=[],g=i/2,m=0;y(),r===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new et(h,3)),this.setAttribute("normal",new et(d,3)),this.setAttribute("uv",new et(f,2));function y(){let v=new I,E=new I,M=0,P=(t-e)/i;for(let b=0;b<=a;b++){let w=[],L=b/a,U=L*(t-e)+e;for(let z=0;z<=s;z++){let G=z/s,q=G*l+o,V=Math.sin(q),Q=Math.cos(q);E.x=U*V,E.y=-L*i+g,E.z=U*Q,h.push(E.x,E.y,E.z),v.set(V,P,Q).normalize(),d.push(v.x,v.y,v.z),f.push(G,1-L),w.push(p++)}x.push(w)}for(let b=0;b<s;b++)for(let w=0;w<a;w++){let L=x[w][b],U=x[w+1][b],z=x[w+1][b+1],G=x[w][b+1];(e>0||w!==0)&&(u.push(L,U,G),M+=3),(t>0||w!==a-1)&&(u.push(U,z,G),M+=3)}c.addGroup(m,M,0),m+=M}function T(v){let E=p,M=new le,P=new I,b=0,w=v===!0?e:t,L=v===!0?1:-1;for(let z=1;z<=s;z++)h.push(0,g*L,0),d.push(0,L,0),f.push(.5,.5),p++;let U=p;for(let z=0;z<=s;z++){let q=z/s*l+o,V=Math.cos(q),Q=Math.sin(q);P.x=w*Q,P.y=g*L,P.z=w*V,h.push(P.x,P.y,P.z),d.push(0,L,0),M.x=V*.5+.5,M.y=Q*.5*L+.5,f.push(M.x,M.y),p++}for(let z=0;z<s;z++){let G=E+z,q=U+z;v===!0?u.push(q,q+1,G):u.push(q+1,q,G),b+=3}c.addGroup(m,b,v===!0?1:2),m+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Yi=class n extends Mt{constructor(e=1,t=1,i=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,e,t,i,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),a=0;t.push(0);for(let r=1;r<=e;r++)i=this.getPoint(r/e),a+=i.distanceTo(s),t.push(a),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,a=i.length,r;t?r=t:r=e*i[a-1];let o=0,l=a-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-r,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===r)return s/(a-1);let u=i[s],d=i[s+1]-u,f=(r-u)/d;return(s+f)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);let r=this.getPoint(s),o=this.getPoint(a),l=t||(r.isVector2?new le:new I);return l.copy(o).sub(r).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new I,s=[],a=[],r=[],o=new I,l=new mt;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new I)}a[0]=new I,r[0]=new I;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let f=1;f<=e;f++){if(a[f]=a[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(lt(s[f-1].dot(s[f]),-1,1));a[f].applyMatrix4(l.makeRotationAxis(o,p))}r[f].crossVectors(s[f],a[f])}if(t===!0){let f=Math.acos(lt(a[0].dot(a[e]),-1,1));f/=e,s[0].dot(o.crossVectors(a[0],a[e]))>0&&(f=-f);for(let p=1;p<=e;p++)a[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),r[p].crossVectors(s[p],a[p])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Oa=class extends Dn{constructor(e=0,t=0,i=1,s=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new le){let i=t,s=Math.PI*2,a=this.aEndAngle-this.aStartAngle,r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);let o=this.aStartAngle+e*a,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ec=class extends Oa{constructor(e,t,i,s,a,r){super(e,t,i,i,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}};function Xh(){let n=0,e=0,t=0,i=0;function s(a,r,o,l){n=a,e=o,t=-3*a+3*r-2*o-l,i=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){s(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,u,h){let d=(r-a)/c-(o-a)/(c+u)+(o-r)/u,f=(o-r)/u-(l-r)/(u+h)+(l-o)/h;d*=u,f*=u,s(r,o,d,f)},calc:function(a){let r=a*a,o=r*a;return n+e*a+t*r+i*o}}}var xf=new I,_f=new I,fh=new Xh,ph=new Xh,mh=new Xh,kn=class extends Dn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){let i=t,s=this.points,a=s.length,r=(a-(this.closed?0:1))*e,o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%a]:(_f.subVectors(s[0],s[1]).add(s[0]),c=_f);let h=s[o%a],d=s[(o+1)%a];if(this.closed||o+2<a?u=s[(o+2)%a]:(xf.subVectors(s[a-1],s[a-2]).add(s[a-1]),u=xf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),fh.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,x,g),ph.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,x,g),mh.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,x,g)}else this.curveType==="catmullrom"&&(fh.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),ph.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),mh.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(fh.calc(l),ph.calc(l),mh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function vf(n,e,t,i,s){let a=(i-e)*.5,r=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+a+r)*l+(-3*t+3*i-2*a-r)*o+a*n+t}function Bm(n,e){let t=1-n;return t*t*e}function Om(n,e){return 2*(1-n)*n*e}function Fm(n,e){return n*n*e}function Cr(n,e,t,i){return Bm(n,e)+Om(n,t)+Fm(n,i)}function Hm(n,e){let t=1-n;return t*t*t*e}function zm(n,e){let t=1-n;return 3*t*t*n*e}function km(n,e){return 3*(1-n)*n*n*e}function Vm(n,e){return n*n*n*e}function Pr(n,e,t,i,s){return Hm(n,e)+zm(n,t)+km(n,i)+Vm(n,s)}var Yr=class extends Dn{constructor(e=new le,t=new le,i=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new le){let i=t,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(Pr(e,s.x,a.x,r.x,o.x),Pr(e,s.y,a.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},tc=class extends Dn{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){let i=t,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(Pr(e,s.x,a.x,r.x,o.x),Pr(e,s.y,a.y,r.y,o.y),Pr(e,s.z,a.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},jr=class extends Dn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nc=class extends Dn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jr=class extends Dn{constructor(e=new le,t=new le,i=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new le){let i=t,s=this.v0,a=this.v1,r=this.v2;return i.set(Cr(e,s.x,a.x,r.x),Cr(e,s.y,a.y,r.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zr=class extends Dn{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){let i=t,s=this.v0,a=this.v1,r=this.v2;return i.set(Cr(e,s.x,a.x,r.x),Cr(e,s.y,a.y,r.y),Cr(e,s.z,a.z,r.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kr=class extends Dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let i=t,s=this.points,a=(s.length-1)*e,r=Math.floor(a),o=a-r,l=s[r===0?r:r-1],c=s[r],u=s[r>s.length-2?s.length-1:r+1],h=s[r>s.length-3?s.length-1:r+2];return i.set(vf(o,l.x,c.x,u.x,h.x),vf(o,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new le().fromArray(s))}return this}},ic=Object.freeze({__proto__:null,ArcCurve:ec,CatmullRomCurve3:kn,CubicBezierCurve:Yr,CubicBezierCurve3:tc,EllipseCurve:Oa,LineCurve:jr,LineCurve3:nc,QuadraticBezierCurve:Jr,QuadraticBezierCurve3:Zr,SplineCurve:Kr}),sc=class extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ic[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),a=0;for(;a<s.length;){if(s[a]>=i){let r=s[a]-i,o=this.curves[a],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,a=this.curves;s<a.length;s++){let r=a[s],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,l=r.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new ic[s.type]().fromJSON(s))}return this}},ks=class extends sc{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new jr(this.currentPoint.clone(),new le(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let a=new Jr(this.currentPoint.clone(),new le(e,t),new le(i,s));return this.curves.push(a),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,a,r){let o=new Yr(this.currentPoint.clone(),new le(e,t),new le(i,s),new le(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Kr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,a,r){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,a,r),this}absarc(e,t,i,s,a,r){return this.absellipse(e,t,i,i,s,a,r),this}ellipse(e,t,i,s,a,r,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,a,r,o,l),this}absellipse(e,t,i,s,a,r,o,l){let c=new Oa(e,t,i,s,a,r,o,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Vn=class extends ks{constructor(e){super(e),this.uuid=ki(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new ks().fromJSON(s))}return this}};function Gm(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,a=gp(n,0,s,t,!0),r=[];if(!a||a.next===a.prev)return r;let o,l,c;if(i&&(a=jm(n,e,a,t)),n.length>80*t){o=n[0],l=n[1];let u=o,h=l;for(let d=t;d<s;d+=t){let f=n[d],p=n[d+1];f<o&&(o=f),p<l&&(l=p),f>u&&(u=f),p>h&&(h=p)}c=Math.max(u-o,h-l),c=c!==0?32767/c:0}return Qr(a,r,t,o,l,c,0),r}function gp(n,e,t,i,s){let a;if(s===r1(n,e,t,i)>0)for(let r=e;r<t;r+=i)a=yf(r/i|0,n[r],n[r+1],a);else for(let r=t-i;r>=e;r-=i)a=yf(r/i|0,n[r],n[r+1],a);return a&&Fa(a,a.next)&&(to(a),a=a.next),a}function Vs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Fa(t,t.next)||Bt(t.prev,t,t.next)===0)){if(to(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Qr(n,e,t,i,s,a,r){if(!n)return;!r&&a&&e1(n,i,s,a);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(a?Xm(n,i,s,a):Wm(n)){e.push(l.i,n.i,c.i),to(n),n=c.next,o=c.next;continue}if(n=c,n===o){r?r===1?(n=$m(Vs(n),e),Qr(n,e,t,i,s,a,2)):r===2&&Ym(n,e,t,i,s,a):Qr(Vs(n),e,t,i,s,a,1);break}}}function Wm(n){let e=n.prev,t=n,i=n.next;if(Bt(e,t,i)>=0)return!1;let s=e.x,a=t.x,r=i.x,o=e.y,l=t.y,c=i.y,u=Math.min(s,a,r),h=Math.min(o,l,c),d=Math.max(s,a,r),f=Math.max(o,l,c),p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&Rr(s,o,a,l,r,c,p.x,p.y)&&Bt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Xm(n,e,t,i){let s=n.prev,a=n,r=n.next;if(Bt(s,a,r)>=0)return!1;let o=s.x,l=a.x,c=r.x,u=s.y,h=a.y,d=r.y,f=Math.min(o,l,c),p=Math.min(u,h,d),x=Math.max(o,l,c),g=Math.max(u,h,d),m=Sh(f,p,e,t,i),y=Sh(x,g,e,t,i),T=n.prevZ,v=n.nextZ;for(;T&&T.z>=m&&v&&v.z<=y;){if(T.x>=f&&T.x<=x&&T.y>=p&&T.y<=g&&T!==s&&T!==r&&Rr(o,u,l,h,c,d,T.x,T.y)&&Bt(T.prev,T,T.next)>=0||(T=T.prevZ,v.x>=f&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==r&&Rr(o,u,l,h,c,d,v.x,v.y)&&Bt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;T&&T.z>=m;){if(T.x>=f&&T.x<=x&&T.y>=p&&T.y<=g&&T!==s&&T!==r&&Rr(o,u,l,h,c,d,T.x,T.y)&&Bt(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==r&&Rr(o,u,l,h,c,d,v.x,v.y)&&Bt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function $m(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Fa(i,s)&&_p(i,t,t.next,s)&&eo(i,s)&&eo(s,i)&&(e.push(i.i,t.i,s.i),to(t),to(t.next),t=n=s),t=t.next}while(t!==n);return Vs(t)}function Ym(n,e,t,i,s,a){let r=n;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&i1(r,o)){let l=vp(r,o);r=Vs(r,r.next),l=Vs(l,l.next),Qr(r,e,t,i,s,a,0),Qr(l,e,t,i,s,a,0);return}o=o.next}r=r.next}while(r!==n)}function jm(n,e,t,i){let s=[];for(let a=0,r=e.length;a<r;a++){let o=e[a]*i,l=a<r-1?e[a+1]*i:n.length,c=gp(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(n1(c))}s.sort(Jm);for(let a=0;a<s.length;a++)t=Zm(s[a],t);return t}function Jm(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Zm(n,e){let t=Km(n,e);if(!t)return e;let i=vp(t,n);return Vs(i,i.next),Vs(t,t.next)}function Km(n,e){let t=e,i=n.x,s=n.y,a=-1/0,r;if(Fa(n,t))return t;do{if(Fa(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>a&&(a=h,r=t.x<t.next.x?t:t.next,h===i))return r}t=t.next}while(t!==e);if(!r)return null;let o=r,l=r.x,c=r.y,u=1/0;t=r;do{if(i>=t.x&&t.x>=l&&i!==t.x&&xp(s<c?i:a,s,l,c,s<c?a:i,s,t.x,t.y)){let h=Math.abs(s-t.y)/(i-t.x);eo(t,n)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&Qm(r,t)))&&(r=t,u=h)}t=t.next}while(t!==o);return r}function Qm(n,e){return Bt(n.prev,n,e.prev)<0&&Bt(e.next,n,n.next)<0}function e1(n,e,t,i){let s=n;do s.z===0&&(s.z=Sh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,t1(s)}function t1(n){let e,t=1;do{let i=n,s;n=null;let a=null;for(e=0;i;){e++;let r=i,o=0;for(let c=0;c<t&&(o++,r=r.nextZ,!!r);c++);let l=t;for(;o>0||l>0&&r;)o!==0&&(l===0||!r||i.z<=r.z)?(s=i,i=i.nextZ,o--):(s=r,r=r.nextZ,l--),a?a.nextZ=s:n=s,s.prevZ=a,a=s;i=r}a.nextZ=null,t*=2}while(e>1);return n}function Sh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function n1(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function xp(n,e,t,i,s,a,r,o){return(s-r)*(e-o)>=(n-r)*(a-o)&&(n-r)*(i-o)>=(t-r)*(e-o)&&(t-r)*(a-o)>=(s-r)*(i-o)}function Rr(n,e,t,i,s,a,r,o){return!(n===r&&e===o)&&xp(n,e,t,i,s,a,r,o)}function i1(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!s1(n,e)&&(eo(n,e)&&eo(e,n)&&a1(n,e)&&(Bt(n.prev,n,e.prev)||Bt(n,e.prev,e))||Fa(n,e)&&Bt(n.prev,n,n.next)>0&&Bt(e.prev,e,e.next)>0)}function Bt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Fa(n,e){return n.x===e.x&&n.y===e.y}function _p(n,e,t,i){let s=ql(Bt(n,e,t)),a=ql(Bt(n,e,i)),r=ql(Bt(t,i,n)),o=ql(Bt(t,i,e));return!!(s!==a&&r!==o||s===0&&Dl(n,t,e)||a===0&&Dl(n,i,e)||r===0&&Dl(t,n,i)||o===0&&Dl(t,e,i))}function Dl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ql(n){return n>0?1:n<0?-1:0}function s1(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&_p(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function eo(n,e){return Bt(n.prev,n,n.next)<0?Bt(n,e,n.next)>=0&&Bt(n,n.prev,e)>=0:Bt(n,e,n.prev)<0||Bt(n,n.next,e)<0}function a1(n,e){let t=n,i=!1,s=(n.x+e.x)/2,a=(n.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&s<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function vp(n,e){let t=Eh(n.i,n.x,n.y),i=Eh(e.i,e.x,e.y),s=n.next,a=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,a.next=i,i.prev=a,i}function yf(n,e,t,i){let s=Eh(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function to(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Eh(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function r1(n,e,t,i){let s=0;for(let a=e,r=t-i;a<t;a+=i)s+=(n[r]-n[a])*(n[a+1]+n[r+1]),r=a;return s}var Th=class{static triangulate(e,t,i=2){return Gm(e,t,i)}},ni=class n{static area(e){let t=e.length,i=0;for(let s=t-1,a=0;a<t;s=a++)i+=e[s].x*e[a].y-e[a].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],a=[];bf(e),Mf(i,e);let r=e.length;t.forEach(bf);for(let l=0;l<t.length;l++)s.push(r),r+=t[l].length,Mf(i,t[l]);let o=Th.triangulate(i,s);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}};function bf(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Mf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var si=class n extends yt{constructor(e=new Vn([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];r(c)}this.setAttribute("position",new et(s,3)),this.setAttribute("uv",new et(a,2)),this.computeVertexNormals();function r(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:o1,T,v=!1,E,M,P,b;if(m){T=m.getSpacedPoints(u),v=!0,d=!1;let ee=m.isCatmullRomCurve3?m.closed:!1;E=m.computeFrenetFrames(u,ee),M=new I,P=new I,b=new I}d||(g=0,f=0,p=0,x=0);let w=o.extractPoints(c),L=w.shape,U=w.holes;if(!ni.isClockWise(L)){L=L.reverse();for(let ee=0,$=U.length;ee<$;ee++){let ue=U[ee];ni.isClockWise(ue)&&(U[ee]=ue.reverse())}}function G(ee){let ue=10000000000000001e-36,ce=ee[0];for(let ge=1;ge<=ee.length;ge++){let He=ge%ee.length,Be=ee[He],Oe=Be.x-ce.x,$e=Be.y-ce.y,D=Oe*Oe+$e*$e,xt=Math.max(Math.abs(Be.x),Math.abs(Be.y),Math.abs(ce.x),Math.abs(ce.y)),rt=ue*xt*xt;if(D<=rt){ee.splice(He,1),ge--;continue}ce=Be}}G(L),U.forEach(G);let q=U.length,V=L;for(let ee=0;ee<q;ee++){let $=U[ee];L=L.concat($)}function Q(ee,$,ue){return $||je("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector($,ue)}let j=L.length;function he(ee,$,ue){let ce,ge,He,Be=ee.x-$.x,Oe=ee.y-$.y,$e=ue.x-ee.x,D=ue.y-ee.y,xt=Be*Be+Oe*Oe,rt=Be*D-Oe*$e;if(Math.abs(rt)>Number.EPSILON){let C=Math.sqrt(xt),_=Math.sqrt($e*$e+D*D),k=$.x-Oe/C,Y=$.y+Be/C,ne=ue.x-D/_,fe=ue.y+$e/_,ye=((ne-k)*D-(fe-Y)*$e)/(Be*D-Oe*$e);ce=k+Be*ye-ee.x,ge=Y+Oe*ye-ee.y;let se=ce*ce+ge*ge;if(se<=2)return new le(ce,ge);He=Math.sqrt(se/2)}else{let C=!1;Be>Number.EPSILON?$e>Number.EPSILON&&(C=!0):Be<-Number.EPSILON?$e<-Number.EPSILON&&(C=!0):Math.sign(Oe)===Math.sign(D)&&(C=!0),C?(ce=-Oe,ge=Be,He=Math.sqrt(xt)):(ce=Be,ge=Oe,He=Math.sqrt(xt/2))}return new le(ce/He,ge/He)}let te=[];for(let ee=0,$=V.length,ue=$-1,ce=ee+1;ee<$;ee++,ue++,ce++)ue===$&&(ue=0),ce===$&&(ce=0),te[ee]=he(V[ee],V[ue],V[ce]);let ae=[],oe,Ne=te.concat();for(let ee=0,$=q;ee<$;ee++){let ue=U[ee];oe=[];for(let ce=0,ge=ue.length,He=ge-1,Be=ce+1;ce<ge;ce++,He++,Be++)He===ge&&(He=0),Be===ge&&(Be=0),oe[ce]=he(ue[ce],ue[He],ue[Be]);ae.push(oe),Ne=Ne.concat(oe)}let Ce;if(g===0)Ce=ni.triangulateShape(V,U);else{let ee=[],$=[];for(let ue=0;ue<g;ue++){let ce=ue/g,ge=f*Math.cos(ce*Math.PI/2),He=p*Math.sin(ce*Math.PI/2)+x;for(let Be=0,Oe=V.length;Be<Oe;Be++){let $e=Q(V[Be],te[Be],He);me($e.x,$e.y,-ge),ce===0&&ee.push($e)}for(let Be=0,Oe=q;Be<Oe;Be++){let $e=U[Be];oe=ae[Be];let D=[];for(let xt=0,rt=$e.length;xt<rt;xt++){let C=Q($e[xt],oe[xt],He);me(C.x,C.y,-ge),ce===0&&D.push(C)}ce===0&&$.push(D)}}Ce=ni.triangulateShape(ee,$)}let ft=Ce.length,Je=p+x;for(let ee=0;ee<j;ee++){let $=d?Q(L[ee],Ne[ee],Je):L[ee];v?(P.copy(E.normals[0]).multiplyScalar($.x),M.copy(E.binormals[0]).multiplyScalar($.y),b.copy(T[0]).add(P).add(M),me(b.x,b.y,b.z)):me($.x,$.y,0)}for(let ee=1;ee<=u;ee++)for(let $=0;$<j;$++){let ue=d?Q(L[$],Ne[$],Je):L[$];v?(P.copy(E.normals[ee]).multiplyScalar(ue.x),M.copy(E.binormals[ee]).multiplyScalar(ue.y),b.copy(T[ee]).add(P).add(M),me(b.x,b.y,b.z)):me(ue.x,ue.y,h/u*ee)}for(let ee=g-1;ee>=0;ee--){let $=ee/g,ue=f*Math.cos($*Math.PI/2),ce=p*Math.sin($*Math.PI/2)+x;for(let ge=0,He=V.length;ge<He;ge++){let Be=Q(V[ge],te[ge],ce);me(Be.x,Be.y,h+ue)}for(let ge=0,He=U.length;ge<He;ge++){let Be=U[ge];oe=ae[ge];for(let Oe=0,$e=Be.length;Oe<$e;Oe++){let D=Q(Be[Oe],oe[Oe],ce);v?me(D.x,D.y+T[u-1].y,T[u-1].x+ue):me(D.x,D.y,h+ue)}}}at(),H();function at(){let ee=s.length/3;if(d){let $=0,ue=j*$;for(let ce=0;ce<ft;ce++){let ge=Ce[ce];Pe(ge[2]+ue,ge[1]+ue,ge[0]+ue)}$=u+g*2,ue=j*$;for(let ce=0;ce<ft;ce++){let ge=Ce[ce];Pe(ge[0]+ue,ge[1]+ue,ge[2]+ue)}}else{for(let $=0;$<ft;$++){let ue=Ce[$];Pe(ue[2],ue[1],ue[0])}for(let $=0;$<ft;$++){let ue=Ce[$];Pe(ue[0]+j*u,ue[1]+j*u,ue[2]+j*u)}}i.addGroup(ee,s.length/3-ee,0)}function H(){let ee=s.length/3,$=0;Z(V,$),$+=V.length;for(let ue=0,ce=U.length;ue<ce;ue++){let ge=U[ue];Z(ge,$),$+=ge.length}i.addGroup(ee,s.length/3-ee,1)}function Z(ee,$){let ue=ee.length;for(;--ue>=0;){let ce=ue,ge=ue-1;ge<0&&(ge=ee.length-1);for(let He=0,Be=u+g*2;He<Be;He++){let Oe=j*He,$e=j*(He+1),D=$+ce+Oe,xt=$+ge+Oe,rt=$+ge+$e,C=$+ce+$e;_e(D,xt,rt,C)}}}function me(ee,$,ue){l.push(ee),l.push($),l.push(ue)}function Pe(ee,$,ue){De(ee),De($),De(ue);let ce=s.length/3,ge=y.generateTopUV(i,s,ce-3,ce-2,ce-1);Ye(ge[0]),Ye(ge[1]),Ye(ge[2])}function _e(ee,$,ue,ce){De(ee),De($),De(ce),De($),De(ue),De(ce);let ge=s.length/3,He=y.generateSideWallUV(i,s,ge-6,ge-3,ge-2,ge-1);Ye(He[0]),Ye(He[1]),Ye(He[3]),Ye(He[1]),Ye(He[2]),Ye(He[3])}function De(ee){s.push(l[ee*3+0]),s.push(l[ee*3+1]),s.push(l[ee*3+2])}function Ye(ee){a.push(ee.x),a.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return l1(t,i,e)}static fromJSON(e,t){let i=[];for(let a=0,r=e.shapes.length;a<r;a++){let o=t[e.shapes[a]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ic[s.type]().fromJSON(s)),new n(i,e.options)}},o1={generateTopUV:function(n,e,t,i,s){let a=e[t*3],r=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new le(a,r),new le(o,l),new le(c,u)]},generateSideWallUV:function(n,e,t,i,s,a){let r=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],x=e[a*3],g=e[a*3+1],m=e[a*3+2];return Math.abs(o-u)<Math.abs(r-c)?[new le(r,1-l),new le(c,1-h),new le(d,1-p),new le(x,1-m)]:[new le(o,1-l),new le(u,1-h),new le(f,1-p),new le(g,1-m)]}};function l1(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let a=n[i];t.shapes.push(a.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var no=class n extends yt{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=lt(s,0,Math.PI*2);let a=[],r=[],o=[],l=[],c=[],u=1/t,h=new I,d=new le,f=new I,p=new I,x=new I,g=0,m=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,f.x=m*1,f.y=-g,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let y=0;y<=t;y++){let T=i+y*u*s,v=Math.sin(T),E=Math.cos(T);for(let M=0;M<=e.length-1;M++){h.x=e[M].x*v,h.y=e[M].y,h.z=e[M].x*E,r.push(h.x,h.y,h.z),d.x=y/t,d.y=M/(e.length-1),o.push(d.x,d.y);let P=l[3*M+0]*v,b=l[3*M+1],w=l[3*M+0]*E;c.push(P,b,w)}}for(let y=0;y<t;y++)for(let T=0;T<e.length-1;T++){let v=T+y*e.length,E=v,M=v+e.length,P=v+e.length+1,b=v+1;a.push(E,M,b),a.push(P,b,M)}this.setIndex(a),this.setAttribute("position",new et(r,3)),this.setAttribute("uv",new et(o,2)),this.setAttribute("normal",new et(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var tn=class n extends yt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let a=e/2,r=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,f=[],p=[],x=[],g=[];for(let m=0;m<u;m++){let y=m*d-r;for(let T=0;T<c;T++){let v=T*h-a;p.push(v,-y,0),x.push(0,0,1),g.push(T/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){let T=y+c*m,v=y+c*(m+1),E=y+1+c*(m+1),M=y+1+c*m;f.push(T,v,M),f.push(v,E,M)}this.setIndex(f),this.setAttribute("position",new et(p,3)),this.setAttribute("normal",new et(x,3)),this.setAttribute("uv",new et(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},io=class n extends yt{constructor(e=.5,t=1,i=32,s=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:a,thetaLength:r},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],u=[],h=e,d=(t-e)/s,f=new I,p=new le;for(let x=0;x<=s;x++){for(let g=0;g<=i;g++){let m=a+g/i*r;f.x=h*Math.cos(m),f.y=h*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}h+=d}for(let x=0;x<s;x++){let g=x*(i+1);for(let m=0;m<i;m++){let y=m+g,T=y,v=y+i+1,E=y+i+2,M=y+1;o.push(T,v,M),o.push(v,E,M)}}this.setIndex(o),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ha=class n extends yt{constructor(e=new Vn([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],a=[],r=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new et(s,3)),this.setAttribute("normal",new et(a,3)),this.setAttribute("uv",new et(r,2));function c(u){let h=s.length/3,d=u.extractPoints(t),f=d.shape,p=d.holes;ni.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){let y=p[g];ni.isClockWise(y)===!0&&(p[g]=y.reverse())}let x=ni.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){let y=p[g];f=f.concat(y)}for(let g=0,m=f.length;g<m;g++){let y=f[g];s.push(y.x,y.y,0),a.push(0,0,1),r.push(y.x,y.y)}for(let g=0,m=x.length;g<m;g++){let y=x[g],T=y[0]+h,v=y[1]+h,E=y[2]+h;i.push(T,v,E),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return c1(t,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let r=t[e.shapes[s]];i.push(r)}return new n(i,e.curveSegments)}};function c1(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var Lt=class n extends yt{constructor(e=1,t=32,i=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(r+o,Math.PI),c=0,u=[],h=new I,d=new I,f=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let y=[],T=m/i,v=r+T*o,E=e*Math.cos(v),M=Math.sqrt(e*e-E*E),P=0;m===0&&r===0?P=.5/t:m===i&&l===Math.PI&&(P=-.5/t);for(let b=0;b<=t;b++){let w=b/t,L=s+w*a;h.x=-M*Math.cos(L),h.y=E,h.z=M*Math.sin(L),p.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),g.push(w+P,1-T),y.push(c++)}u.push(y)}for(let m=0;m<i;m++)for(let y=0;y<t;y++){let T=u[m][y+1],v=u[m][y],E=u[m+1][y],M=u[m+1][y+1];(m!==0||r>0)&&f.push(T,v,M),(m!==i-1||l<Math.PI)&&f.push(v,E,M)}this.setIndex(f),this.setAttribute("position",new et(p,3)),this.setAttribute("normal",new et(x,3)),this.setAttribute("uv",new et(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ot=class n extends yt{constructor(e=1,t=.4,i=12,s=48,a=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:a,thetaStart:r,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],u=[],h=[],d=new I,f=new I,p=new I;for(let x=0;x<=i;x++){let g=r+x/i*o;for(let m=0;m<=s;m++){let y=m/s*a;f.x=(e+t*Math.cos(g))*Math.cos(y),f.y=(e+t*Math.cos(g))*Math.sin(y),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),p.subVectors(f,d).normalize(),u.push(p.x,p.y,p.z),h.push(m/s),h.push(x/i)}}for(let x=1;x<=i;x++)for(let g=1;g<=s;g++){let m=(s+1)*x+g-1,y=(s+1)*(x-1)+g-1,T=(s+1)*(x-1)+g,v=(s+1)*x+g;l.push(m,y,v),l.push(y,T,v)}this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(u,3)),this.setAttribute("uv",new et(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var ai=class n extends yt{constructor(e=new Zr(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,i=1,s=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:a};let r=e.computeFrenetFrames(t,a);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;let o=new I,l=new I,c=new le,u=new I,h=[],d=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new et(h,3)),this.setAttribute("normal",new et(d,3)),this.setAttribute("uv",new et(f,2));function x(){for(let T=0;T<t;T++)g(T);g(a===!1?t:0),y(),m()}function g(T){u=e.getPointAt(T/t,u);let v=r.normals[T],E=r.binormals[T];for(let M=0;M<=s;M++){let P=M/s*Math.PI*2,b=Math.sin(P),w=-Math.cos(P);l.x=w*v.x+b*E.x,l.y=w*v.y+b*E.y,l.z=w*v.z+b*E.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+i*l.x,o.y=u.y+i*l.y,o.z=u.z+i*l.z,h.push(o.x,o.y,o.z)}}function m(){for(let T=1;T<=t;T++)for(let v=1;v<=s;v++){let E=(s+1)*(T-1)+(v-1),M=(s+1)*T+(v-1),P=(s+1)*T+v,b=(s+1)*(T-1)+v;p.push(E,M,b),p.push(M,P,b)}}function y(){for(let T=0;T<=t;T++)for(let v=0;v<=s;v++)c.x=T/t,c.y=v/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new ic[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Ys(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Sf(s))s.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Sf(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();e[t][i]=a}else e[t][i]=s.slice();else e[t][i]=s}}return e}function vn(n){let e={};for(let t=0;t<n.length;t++){let i=Ys(n[t]);for(let s in i)e[s]=i[s]}return e}function Sf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function u1(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function $h(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var Zi={clone:Ys,merge:vn},h1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,d1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Wt=class extends ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=h1,this.fragmentShader=d1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=u1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ve().setHex(s.value);break;case"v2":this.uniforms[i].value=new le().fromArray(s.value);break;case"v3":this.uniforms[i].value=new I().fromArray(s.value);break;case"v4":this.uniforms[i].value=new qt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ze().fromArray(s.value);break;case"m4":this.uniforms[i].value=new mt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},za=class extends Wt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ft=class extends ii{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Co,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ka=class extends Ft{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var so=class extends ii{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Co,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=yc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ac=class extends ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},rc=class extends ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Sa(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function gh(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ms=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],a=t[i-1];n:{e:{let r;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=t[++i],e<s)break e}r=t.length;break t}if(!(e>=a)){let o=t[1];e<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=t[--i-1],e>=a)break e}r=i,i=0;break t}break n}for(;i<r;){let o=i+r>>>1;e<t[o]?r=o:i=o+1}if(s=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s;for(let r=0;r!==s;++r)t[r]=i[a+r];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},oc=class extends ms{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vh,endingEnd:vh}}intervalChanged_(e,t,i){let s=this.parameterPositions,a=e-2,r=e+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case yh:a=e,o=2*t-i;break;case bh:a=s.length-2,o=t+s[a]-s[a+1];break;default:a=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case yh:r=e,l=2*i-t;break;case bh:r=1,l=i+s[1]-s[0];break;default:r=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=a*u,this._offsetNext=r*u}interpolate_(e,t,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-t)/(s-t),x=p*p,g=x*p,m=-d*g+2*d*x-d*p,y=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*p+1,T=(-1-f)*g+(1.5+f)*x+.5*p,v=f*g-f*x;for(let E=0;E!==o;++E)a[E]=m*r[u+E]+y*r[c+E]+T*r[l+E]+v*r[h+E];return a}},lc=class extends ms{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)a[d]=r[c+d]*h+r[l+d]*u;return a}},cc=class extends ms{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},uc=class extends ms{interpolate_(e,t,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(i-t)/(s-t),x=1-p;for(let g=0;g!==o;++g)a[g]=r[c+g]*x+r[l+g]*p;return a}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let x=r[c+p],g=r[l+p],m=f*d+p*2,y=h[m],T=h[m+1],v=e*d+p*2,E=u[v],M=u[v+1],P=p1(i,t,y,E,s);a[p]=yp(P,x,T,M,g)}return a}};function yp(n,e,t,i,s){let a=1-n;return a*a*a*e+3*a*a*n*t+3*a*n*n*i+n*n*n*s}function f1(n,e,t,i,s){let a=1-n;return 3*a*a*(t-e)+6*a*n*(i-t)+3*n*n*(s-i)}function p1(n,e,t,i,s){let a=(n-e)/(s-e);for(let r=0;r<8;r++){let o=yp(a,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=f1(a,e,t,i,s);if(Math.abs(l)<1e-10)break;a=Math.max(0,Math.min(1,a-o/l))}return a}var qn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sa(t,this.TimeBufferType),this.values=Sa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Sa(e.times,Array),values:Sa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),gh(e.settings)&&(i.settings={inTangents:Sa(e.settings.inTangents,Array),outTangents:Sa(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new cc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new lc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new uc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ir:t=this.InterpolantFactoryMethodDiscrete;break;case Yl:t=this.InterpolantFactoryMethodLinear;break;case Ol:t=this.InterpolantFactoryMethodSmooth;break;case _h:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Xe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ir;case this.InterpolantFactoryMethodLinear:return Yl;case this.InterpolantFactoryMethodSmooth:return Ol;case this.InterpolantFactoryMethodBezier:return _h}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;gh(this.settings)&&(Ef(this.settings.inTangents,e),Ef(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<e;)++a;for(;r!==-1&&i[r]>t;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,a=i.length;a===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){je("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){je("KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(s!==void 0&&gm(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){je("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ol,a=e.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*i,d=h-i,f=h+i;for(let p=0;p!==i;++p){let x=t[h+p];if(x!==t[d+p]||x!==t[f+p]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];let h=o*i,d=r*i;for(let f=0;f!==i;++f)t[d+f]=t[h+f]}++r}}if(a>0){e[r]=e[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)t[l+c]=t[o+c];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,gh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ef(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}qn.prototype.ValueTypeName="";qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=Yl;var gs=class extends qn{constructor(e,t,i){super(e,t,i)}};gs.prototype.ValueTypeName="bool";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Ir;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var hc=class extends qn{constructor(e,t,i,s){super(e,t,i,s)}};hc.prototype.ValueTypeName="color";var dc=class extends qn{constructor(e,t,i,s){super(e,t,i,s)}};dc.prototype.ValueTypeName="number";var fc=class extends ms{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)In.slerpFlat(a,0,r,c-o,r,c,l);return a}},ao=class extends qn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new fc(this.times,this.values,this.getValueSize(),e)}};ao.prototype.ValueTypeName="quaternion";ao.prototype.InterpolantFactoryMethodSmooth=void 0;var xs=class extends qn{constructor(e,t,i){super(e,t,i)}};xs.prototype.ValueTypeName="string";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=Ir;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var pc=class extends qn{constructor(e,t,i,s){super(e,t,i,s)}};pc.prototype.ValueTypeName="vector";var Ra={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Tf(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Tf(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Tf(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var mc=class{constructor(e,t,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,a===!1&&s.onStart!==void 0&&s.onStart(u,r,o),a=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},bp=new mc,ji=class{constructor(e){this.manager=e!==void 0?e:bp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,a){i.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ji.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hi={},wh=class extends Error{constructor(e,t){super(e),this.response=t}},ro=class extends ji{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=Ra.get(`file:${e}`);if(a!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0);return}if(Hi[e]!==void 0){Hi[e].push({onLoad:t,onProgress:i,onError:s});return}Hi[e]=[],Hi[e].push({onLoad:t,onProgress:i,onError:s});let r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Xe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Hi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,x=0,g=new ReadableStream({start(m){y();function y(){h.read().then(({done:T,value:v})=>{if(T)m.close();else{x+=v.byteLength;let E=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let M=0,P=u.length;M<P;M++){let b=u[M];b.onProgress&&b.onProgress(E)}m.enqueue(v),y()}},T=>{m.error(T)})}}});return new Response(g)}else throw new wh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Ra.add(`file:${e}`,c);let u=Hi[e];delete Hi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=Hi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Hi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ea=new WeakMap,gc=class extends ji{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,r=Ra.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(r),a.manager.itemEnd(e)},0);else{let h=Ea.get(r);h===void 0&&(h=[],Ea.set(r,h)),h.push({onLoad:t,onError:s})}return r}let o=La("img");function l(){u(),t&&t(this);let h=Ea.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}Ea.delete(this),a.manager.itemEnd(e)}function c(h){u(),s&&s(h),Ra.remove(`image:${e}`);let d=Ea.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(h)}Ea.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ra.add(`image:${e}`,o),a.manager.itemStart(e),o.src=e,o}};var oo=class extends ji{constructor(e){super(e)}load(e,t,i,s){let a=new _n,r=new gc(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},i,s),a}},Gs=class extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},_s=class extends Gs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},xh=new mt,wf=new I,Af=new I,Va=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ba,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;wf.setFromMatrixPosition(e.matrixWorld),t.position.copy(wf),Af.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Af),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){xh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(xh,e.coordinateSystem,e.reversedDepth);let a=this._frameExtents,r=s?s.z/a.x:1,o=s?s.w/a.y:1,l=s?s.x/a.x:0,c=s?s.y/a.y:0;e.coordinateSystem===Ia||e.reversedDepth?t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(xh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ul=new I,Bl=new In,gi=new I,lo=class extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ul,Bl,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ul,Bl,gi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ul,Bl,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ul,Bl,gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fs=new I,Rf=new le,Cf=new le,Jt=class extends lo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=qr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Wu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qr*2*Math.atan(Math.tan(Wu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fs.x,fs.y).multiplyScalar(-e/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fs.x,fs.y).multiplyScalar(-e/fs.z)}getViewSize(e,t){return this.getViewBounds(e,Rf,Cf),t.subVectors(Cf,Rf)}setViewOffset(e,t,i,s,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Wu*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,t-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ah=class extends Va{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=qr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(i!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ga=class extends Gs{constructor(e,t,i=0,s=Math.PI/3,a=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.distance=i,this.angle=s,this.penumbra=a,this.decay=r,this.map=null,this.shadow=new Ah}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Rh=class extends Va{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0}},ri=class extends Gs{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Rh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},vs=class extends lo{constructor(e=-1,t=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-e,r=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ch=class extends Va{constructor(){super(new vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},co=class extends Gs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new Ch}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ta=-90,wa=1,xc=class extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Jt(Ta,wa,e,t);s.layers=this.layers,this.add(s);let a=new Jt(Ta,wa,e,t);a.layers=this.layers,this.add(a);let r=new Jt(Ta,wa,e,t);r.layers=this.layers,this.add(r);let o=new Jt(Ta,wa,e,t);o.layers=this.layers,this.add(o);let l=new Jt(Ta,wa,e,t);l.layers=this.layers,this.add(l);let c=new Jt(Ta,wa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,a,r,o,l]=t;for(let c of t)this.remove(c);if(e===ti)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ia)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},_c=class extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},uo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=m1.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function m1(){this._document.hidden===!1&&this.reset()}var Yh="\\[\\]\\.:\\/",g1=new RegExp("["+Yh+"]","g"),jh="[^"+Yh+"]",x1="[^"+Yh.replace("\\.","")+"]",_1=/((?:WC+[\/:])*)/.source.replace("WC",jh),v1=/(WCOD+)?/.source.replace("WCOD",x1),y1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jh),b1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jh),M1=new RegExp("^"+_1+v1+y1+b1+"$"),S1=["material","materials","bones","map"],Ph=class{constructor(e,t,i){let s=i||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Pt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(g1,"")}static parseTrackName(e){let t=M1.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);S1.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,a=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Xe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let r=e[s];if(r===void 0){let c=t.nodeName;je("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=Ph;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var x3=new Float32Array(1);var ho=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Xe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Ih=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let a=this.elements;return a[0]=e,a[2]=t,a[1]=i,a[3]=s,this}},Pf=new le,vc=class{constructor(e=new le(1/0,1/0),t=new le(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Pf.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pf).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};var fo=class{constructor(){this.type="ShapePath",this.color=new Ve,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new ks,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,s){return this.currentPath.quadraticCurveTo(e,t,i,s),this}bezierCurveTo(e,t,i,s,a,r){return this.currentPath.bezierCurveTo(e,t,i,s,a,r),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(l,c){let u=!1,h=c.length;for(let d=0,f=h-1;d<h;f=d++){let p=c[d],x=c[f];p.y>l.y!=x.y>l.y&&l.x<(x.x-p.x)*(l.y-p.y)/(x.y-p.y)+p.x&&(u=!u)}return u}function t(l,c){let u=c.getCenter(new le);if(e(u,l))return u;let h=u.y,d=[],f=l.length;for(let p=0;p<f;p++){let x=l[p],g=l[(p+1)%f];if(x.y>h!=g.y>h){let m=x.x+(h-x.y)*(g.x-x.x)/(g.y-x.y);d.push(m)}}return d.length>1&&(d.sort((p,x)=>p-x),u.x=(d[0]+d[1])/2),u}let i=this.userData.style&&this.userData.style.fillRule||"nonzero";i!=="nonzero"&&i!=="evenodd"&&(Xe('Fill-rule "'+i+'" is not supported, falling back to "nonzero".'),i="nonzero");let s=i==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),a=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let u=ni.area(c);if(u===0)continue;let h=new vc;for(let d=0;d<c.length;d++)h.expandByPoint(c[d]);a.push({subPath:l,points:c,boundingBox:h,interiorPoint:t(c,h),absArea:Math.abs(u),winding:u<0?-1:1,container:null,exclude:!1,role:null})}a.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<a.length;l++){let c=a[l],u=0;for(let h=l-1;h>=0;h--){let d=a[h];if(d.boundingBox.containsBox(c.boundingBox)&&e(c.interiorPoint,d.points)){c.container=d.exclude?d.container:d,u=d.winding,c.winding+=u;break}}s(c.winding)===s(u)&&(c.exclude=!0)}for(let l of a)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let r=[],o=new Map;for(let l of a){if(l.exclude||l.role!=="outer")continue;let c=new Vn;c.curves=l.subPath.curves,r.push(c),o.set(l,c)}for(let l of a){if(l.exclude||l.role!=="hole")continue;let c=o.get(l.container);if(!c)continue;let u=new ks;u.curves=l.subPath.curves,c.holes.push(u)}return r}};function Jh(n,e,t,i){let s=E1(i);switch(t){case kh:return n*e;case Ac:return n*e/s.components*s.byteLength;case Rc:return n*e/s.components*s.byteLength;case Es:return n*e*2/s.components*s.byteLength;case Cc:return n*e*2/s.components*s.byteLength;case Vh:return n*e*3/s.components*s.byteLength;case Xn:return n*e*4/s.components*s.byteLength;case Pc:return n*e*4/s.components*s.byteLength;case So:case Eo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case To:case wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Lc:case Dc:return Math.max(n,16)*Math.max(e,8)/4;case Ic:case Nc:return Math.max(n,8)*Math.max(e,8)/2;case qc:case Uc:case Oc:case Fc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Bc:case Ao:case Hc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Vc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case $c:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Yc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case jc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Kc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Qc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case eu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case tu:case nu:case iu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case su:case au:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ro:case ru:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function E1(n){switch(n){case wn:case Oh:return{byteLength:1,components:1};case $a:case Fh:case un:return{byteLength:2,components:1};case Tc:case wc:return{byteLength:2,components:4};case li:case Ec:case Wn:return{byteLength:4,components:1};case Hh:case zh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Vp(){let n=null,e=!1,t=null,i=null;function s(a,r){i=n.requestAnimationFrame(s),t(a,r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function w1(n){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){let p=h[d],x=h[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){let x=h[f];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var A1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,R1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,C1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,P1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,L1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,D1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,q1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,U1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,B1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,F1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,H1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,z1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,k1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,V1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,G1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Y1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,j1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,J1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Z1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,K1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Q1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ng=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ig="gl_FragColor = linearToOutputTexel( gl_FragColor );",sg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ag=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,rg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,og=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ug=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_g=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,vg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,yg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Eg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Tg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ag=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Pg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ig=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ng=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ug=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Og=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Gg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Jg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ex=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ix=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ax=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ox=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ux=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,px=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_x=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ax=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Px=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Dx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ux=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ox=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$x=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Kx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,n2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,r2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,st={alphahash_fragment:A1,alphahash_pars_fragment:R1,alphamap_fragment:C1,alphamap_pars_fragment:P1,alphatest_fragment:I1,alphatest_pars_fragment:L1,aomap_fragment:N1,aomap_pars_fragment:D1,batching_pars_vertex:q1,batching_vertex:U1,begin_vertex:B1,beginnormal_vertex:O1,bsdfs:F1,iridescence_fragment:H1,bumpmap_pars_fragment:z1,clipping_planes_fragment:k1,clipping_planes_pars_fragment:V1,clipping_planes_pars_vertex:G1,clipping_planes_vertex:W1,color_fragment:X1,color_pars_fragment:$1,color_pars_vertex:Y1,color_vertex:j1,common:J1,cube_uv_reflection_fragment:Z1,defaultnormal_vertex:K1,displacementmap_pars_vertex:Q1,displacementmap_vertex:eg,emissivemap_fragment:tg,emissivemap_pars_fragment:ng,colorspace_fragment:ig,colorspace_pars_fragment:sg,envmap_fragment:ag,envmap_common_pars_fragment:rg,envmap_pars_fragment:og,envmap_pars_vertex:lg,envmap_physical_pars_fragment:vg,envmap_vertex:cg,fog_vertex:ug,fog_pars_vertex:hg,fog_fragment:dg,fog_pars_fragment:fg,gradientmap_pars_fragment:pg,lightmap_pars_fragment:mg,lights_lambert_fragment:gg,lights_lambert_pars_fragment:xg,lights_pars_begin:_g,lights_toon_fragment:yg,lights_toon_pars_fragment:bg,lights_phong_fragment:Mg,lights_phong_pars_fragment:Sg,lights_physical_fragment:Eg,lights_physical_pars_fragment:Tg,lights_fragment_begin:wg,lights_fragment_maps:Ag,lights_fragment_end:Rg,lightprobes_pars_fragment:Cg,logdepthbuf_fragment:Pg,logdepthbuf_pars_fragment:Ig,logdepthbuf_pars_vertex:Lg,logdepthbuf_vertex:Ng,map_fragment:Dg,map_pars_fragment:qg,map_particle_fragment:Ug,map_particle_pars_fragment:Bg,metalnessmap_fragment:Og,metalnessmap_pars_fragment:Fg,morphinstance_vertex:Hg,morphcolor_vertex:zg,morphnormal_vertex:kg,morphtarget_pars_vertex:Vg,morphtarget_vertex:Gg,normal_fragment_begin:Wg,normal_fragment_maps:Xg,normal_pars_fragment:$g,normal_pars_vertex:Yg,normal_vertex:jg,normalmap_pars_fragment:Jg,clearcoat_normal_fragment_begin:Zg,clearcoat_normal_fragment_maps:Kg,clearcoat_pars_fragment:Qg,iridescence_pars_fragment:ex,opaque_fragment:tx,packing:nx,premultiplied_alpha_fragment:ix,project_vertex:sx,dithering_fragment:ax,dithering_pars_fragment:rx,roughnessmap_fragment:ox,roughnessmap_pars_fragment:lx,shadowmap_pars_fragment:cx,shadowmap_pars_vertex:ux,shadowmap_vertex:hx,shadowmask_pars_fragment:dx,skinbase_vertex:fx,skinning_pars_vertex:px,skinning_vertex:mx,skinnormal_vertex:gx,specularmap_fragment:xx,specularmap_pars_fragment:_x,tonemapping_fragment:vx,tonemapping_pars_fragment:yx,transmission_fragment:bx,transmission_pars_fragment:Mx,uv_pars_fragment:Sx,uv_pars_vertex:Ex,uv_vertex:Tx,worldpos_vertex:wx,background_vert:Ax,background_frag:Rx,backgroundCube_vert:Cx,backgroundCube_frag:Px,cube_vert:Ix,cube_frag:Lx,depth_vert:Nx,depth_frag:Dx,distance_vert:qx,distance_frag:Ux,equirect_vert:Bx,equirect_frag:Ox,linedashed_vert:Fx,linedashed_frag:Hx,meshbasic_vert:zx,meshbasic_frag:kx,meshlambert_vert:Vx,meshlambert_frag:Gx,meshmatcap_vert:Wx,meshmatcap_frag:Xx,meshnormal_vert:$x,meshnormal_frag:Yx,meshphong_vert:jx,meshphong_frag:Jx,meshphysical_vert:Zx,meshphysical_frag:Kx,meshtoon_vert:Qx,meshtoon_frag:e2,points_vert:t2,points_frag:n2,shadow_vert:i2,shadow_frag:s2,sprite_vert:a2,sprite_frag:r2},Te={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Ti={basic:{uniforms:vn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:vn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:vn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:vn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:vn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Ve(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:vn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:vn([Te.points,Te.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:vn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:vn([Te.common,Te.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:vn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:vn([Te.sprite,Te.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:vn([Te.common,Te.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:vn([Te.lights,Te.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Ti.physical={uniforms:vn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var cu={r:0,b:0,g:0},o2=new mt,Gp=new Ze;Gp.set(-1,0,0,0,1,0,0,0,1);function l2(n,e,t,i,s,a){let r=new Ve(0),o=s===!0?0:1,l,c,u=null,h=0,d=null;function f(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){let v=y.backgroundBlurriness>0;T=e.get(T,v)}return T}function p(y){let T=!1,v=f(y);v===null?g(r,o):v&&v.isColor&&(g(v,1),T=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(y,T){let v=f(T);v&&(v.isCubeTexture||v.mapping===bo)?(c===void 0&&(c=new ie(new kt(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:Ys(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,M,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(o2.makeRotationFromEuler(T.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Gp),c.material.toneMapped=ct.getTransfer(v.colorSpace)!==_t,(u!==v||h!==v.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ie(new tn(2,2),new Wt({name:"BackgroundMaterial",uniforms:Ys(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=ct.getTransfer(v.colorSpace)!==_t,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,d=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,T){y.getRGB(cu,$h(n)),t.buffers.color.setClear(cu.r,cu.g,cu.b,T,a)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(y,T=1){r.set(y),o=T,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(r,o)},render:p,addToRenderList:x,dispose:m}}function c2(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),a=s,r=!1;function o(U,z,G,q,V){let Q=!1,j=h(U,q,G,z);a!==j&&(a=j,c(a.object)),Q=f(U,q,G,V),Q&&p(U,q,G,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(Q||r)&&(r=!1,v(U,z,G,q),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function c(U){return n.bindVertexArray(U)}function u(U){return n.deleteVertexArray(U)}function h(U,z,G,q){let V=q.wireframe===!0,Q=i[z.id];Q===void 0&&(Q={},i[z.id]=Q);let j=U.isInstancedMesh===!0?U.id:0,he=Q[j];he===void 0&&(he={},Q[j]=he);let te=he[G.id];te===void 0&&(te={},he[G.id]=te);let ae=te[V];return ae===void 0&&(ae=d(l()),te[V]=ae),ae}function d(U){let z=[],G=[],q=[];for(let V=0;V<t;V++)z[V]=0,G[V]=0,q[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:G,attributeDivisors:q,object:U,attributes:{},index:null}}function f(U,z,G,q){let V=a.attributes,Q=z.attributes,j=0,he=G.getAttributes();for(let te in he)if(he[te].location>=0){let oe=V[te],Ne=Q[te];if(Ne===void 0&&(te==="instanceMatrix"&&U.instanceMatrix&&(Ne=U.instanceMatrix),te==="instanceColor"&&U.instanceColor&&(Ne=U.instanceColor)),oe===void 0||oe.attribute!==Ne||Ne&&oe.data!==Ne.data)return!0;j++}return a.attributesNum!==j||a.index!==q}function p(U,z,G,q){let V={},Q=z.attributes,j=0,he=G.getAttributes();for(let te in he)if(he[te].location>=0){let oe=Q[te];oe===void 0&&(te==="instanceMatrix"&&U.instanceMatrix&&(oe=U.instanceMatrix),te==="instanceColor"&&U.instanceColor&&(oe=U.instanceColor));let Ne={};Ne.attribute=oe,oe&&oe.data&&(Ne.data=oe.data),V[te]=Ne,j++}a.attributes=V,a.attributesNum=j,a.index=q}function x(){let U=a.newAttributes;for(let z=0,G=U.length;z<G;z++)U[z]=0}function g(U){m(U,0)}function m(U,z){let G=a.newAttributes,q=a.enabledAttributes,V=a.attributeDivisors;G[U]=1,q[U]===0&&(n.enableVertexAttribArray(U),q[U]=1),V[U]!==z&&(n.vertexAttribDivisor(U,z),V[U]=z)}function y(){let U=a.newAttributes,z=a.enabledAttributes;for(let G=0,q=z.length;G<q;G++)z[G]!==U[G]&&(n.disableVertexAttribArray(G),z[G]=0)}function T(U,z,G,q,V,Q,j){j===!0?n.vertexAttribIPointer(U,z,G,V,Q):n.vertexAttribPointer(U,z,G,q,V,Q)}function v(U,z,G,q){x();let V=q.attributes,Q=G.getAttributes(),j=z.defaultAttributeValues;for(let he in Q){let te=Q[he];if(te.location>=0){let ae=V[he];if(ae===void 0&&(he==="instanceMatrix"&&U.instanceMatrix&&(ae=U.instanceMatrix),he==="instanceColor"&&U.instanceColor&&(ae=U.instanceColor)),ae!==void 0){let oe=ae.normalized,Ne=ae.itemSize,Ce=e.get(ae);if(Ce===void 0)continue;let ft=Ce.buffer,Je=Ce.type,at=Ce.bytesPerElement,H=Je===n.INT||Je===n.UNSIGNED_INT||ae.gpuType===Ec;if(ae.isInterleavedBufferAttribute){let Z=ae.data,me=Z.stride,Pe=ae.offset;if(Z.isInstancedInterleavedBuffer){for(let _e=0;_e<te.locationSize;_e++)m(te.location+_e,Z.meshPerAttribute);U.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let _e=0;_e<te.locationSize;_e++)g(te.location+_e);n.bindBuffer(n.ARRAY_BUFFER,ft);for(let _e=0;_e<te.locationSize;_e++)T(te.location+_e,Ne/te.locationSize,Je,oe,me*at,(Pe+Ne/te.locationSize*_e)*at,H)}else{if(ae.isInstancedBufferAttribute){for(let Z=0;Z<te.locationSize;Z++)m(te.location+Z,ae.meshPerAttribute);U.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Z=0;Z<te.locationSize;Z++)g(te.location+Z);n.bindBuffer(n.ARRAY_BUFFER,ft);for(let Z=0;Z<te.locationSize;Z++)T(te.location+Z,Ne/te.locationSize,Je,oe,Ne*at,Ne/te.locationSize*Z*at,H)}}else if(j!==void 0){let oe=j[he];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(te.location,oe);break;case 3:n.vertexAttrib3fv(te.location,oe);break;case 4:n.vertexAttrib4fv(te.location,oe);break;default:n.vertexAttrib1fv(te.location,oe)}}}}y()}function E(){w();for(let U in i){let z=i[U];for(let G in z){let q=z[G];for(let V in q){let Q=q[V];for(let j in Q)u(Q[j].object),delete Q[j];delete q[V]}}delete i[U]}}function M(U){if(i[U.id]===void 0)return;let z=i[U.id];for(let G in z){let q=z[G];for(let V in q){let Q=q[V];for(let j in Q)u(Q[j].object),delete Q[j];delete q[V]}}delete i[U.id]}function P(U){for(let z in i){let G=i[z];for(let q in G){let V=G[q];if(V[U.id]===void 0)continue;let Q=V[U.id];for(let j in Q)u(Q[j].object),delete Q[j];delete V[U.id]}}}function b(U){for(let z in i){let G=i[z],q=U.isInstancedMesh===!0?U.id:0,V=G[q];if(V!==void 0){for(let Q in V){let j=V[Q];for(let he in j)u(j[he].object),delete j[he];delete V[Q]}delete G[q],Object.keys(G).length===0&&delete i[z]}}}function w(){L(),r=!0,a!==s&&(a=s,c(a.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:L,dispose:E,releaseStatesOfGeometry:M,releaseStatesOfObject:b,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function u2(n,e,t){let i;function s(l){i=l}function a(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function r(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];t.update(d,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function h2(n,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(P){return!(P!==Xn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let b=P===un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==wn&&P!==Wn&&!b&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Xe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:v,maxSamples:E,samples:M}}function d2(n){let e=this,t=null,i=0,s=!1,a=!1,r=new ei,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let p=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,m=n.get(h);if(!s||p===null||p.length===0||a&&!g)a?u(null):c();else{let y=a?0:i,T=y*4,v=m.clippingState||null;l.value=v,v=u(p,d,T,f);for(let E=0;E!==T;++E)v[E]=t[E];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,p){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let T=0,v=f;T!==x;++T,v+=4)r.copy(h[T]).applyMatrix4(y,o),r.normal.toArray(g,v),g[v+3]=r.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var Ja=4,f2=6,p2=20,m2=256,Po=new vs,Mp=new Ve,Zh=null,Kh=0,Qh=0,ed=!1,g2=new I,js=new I,Ts=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,a={}){let{size:r=256,position:o=g2}=a;Zh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),Qh=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ep(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zh,Kh,Qh),this._renderer.xr.enabled=ed,e.scissorTest=!1,ja(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bs||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),Qh=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:un,format:Xn,colorSpace:Lr,depthBuffer:!1},s=Sp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sp(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=x2(a)),this._blurMaterial=v2(a,e,t),this._ggxMaterial=_2(a,e,t)}return s}_compileMaterial(e){let t=new ie(new yt,e);this._renderer.compile(t,Po)}_sceneToCubeUV(e,t,i,s,a){let l=new Jt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Mp),h.toneMapping=oi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ie(new kt,new It({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,m=!0):(g.color.copy(Mp),m=!0);for(let T=0;T<6;T++){let v=T%3;v===0?(l.up.set(0,c[T],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+u[T],a.y,a.z)):v===1?(l.up.set(0,0,c[T]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+u[T],a.z)):(l.up.set(0,c[T],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+u[T]));let E=this._cubeSize;ja(s,v*E,T>2?E:0,E,E),h.setRenderTarget(s),m&&h.render(x,l),h.render(e,l)}h.toneMapping=f,h.autoClear=d,e.background=y}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===bs||e.mapping===$s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ep());let a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;let o=a.uniforms;o.envMap.value=e;let l=this._cubeSize;ja(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(r,Po)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let l=r.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=c*1.25,f=h*d,{_lodMax:p}=this,x=this._sizeLods[i],g=3*x*(i>p-Ja?i-p+Ja:0),m=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,ja(a,g,m,3*x,2*x),s.setRenderTarget(a),s.render(o,Po),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=p-i,ja(e,g,m,3*x,2*x),s.setRenderTarget(e),s.render(o,Po)}_blur(e,t,i,s){let a=this._pingPongRenderTarget,r=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,r),this._blurPass(a,e,i,i,r)}_blurPass(e,t,i,s,a){let r=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=a,c.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-Ja?s-this._lodMax+Ja:0),d=4*(this._cubeSize-u);ja(t,h,d,3*u,2*u),r.setRenderTarget(t),r.render(l,Po)}};function x2(n){let e=[],t=[],i=n,s=n-Ja+1+f2;for(let a=0;a<s;a++){let r=Math.pow(2,i);e.push(r);let o=1/(r-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,f=3,p=new Float32Array(f*d*h),x=new Float32Array(f*d*h);for(let m=0;m<h;m++){let y=m%3*2/3-1,T=m>2?0:-1,v=[y,T,0,y+2/3,T,0,y+2/3,T+1,0,y,T,0,y+2/3,T+1,0,y,T+1,0];p.set(v,f*d*m);for(let E=0;E<d;E++){let M=u[E*2]*2-1,P=u[E*2+1]*2-1;m===0?js.set(1,P,M):m===1?js.set(-M,1,-P):m===2?js.set(-M,P,1):m===3?js.set(-1,P,-M):m===4?js.set(-M,-1,P):js.set(M,P,-1),js.toArray(x,(m*d+E)*f)}}let g=new yt;g.setAttribute("position",new Zt(p,f)),g.setAttribute("outputDirection",new Zt(x,f)),t.push(new ie(g,null)),i>Ja&&i--}return{lodMeshes:t,sizeLods:e}}function Sp(n,e,t){let i=new Kt(n,e,t);return i.texture.mapping=bo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ja(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function _2(n,e,t){return new Wt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:m2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function v2(n,e,t){return new Wt({name:"SphericalGaussianBlur",defines:{SAMPLES:p2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:fu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Ep(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Tp(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function fu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var hu=class extends Kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Xr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new kt(5,5,5),a=new Wt({name:"CubemapFromEquirect",uniforms:Ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:Gn});a.uniforms.tEquirect.value=t;let r=new ie(s,a),o=t.minFilter;return t.minFilter===Ms&&(t.minFilter=cn),new xc(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,s);e.setRenderTarget(a)}};function y2(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?r(d):a(d)}function a(d){if(d&&d.isTexture){let f=d.mapping;if(f===bc||f===Mc)if(e.has(d)){let p=e.get(d).texture;return o(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new hu(p.height);return x.fromEquirectangularTexture(n,d),e.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function r(d){if(d&&d.isTexture){let f=d.mapping,p=f===bc||f===Mc,x=f===bs||f===$s;if(p||x){let g=t.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new Ts(n)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let y=d.image;return p&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new Ts(n)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function o(d,f){return f===bc?d.mapping=bs:f===Mc&&(d.mapping=$s),d}function l(d){let f=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function b2(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&zs("WebGLRenderer: "+i+" extension not supported."),s}}}function M2(n,e,t,i){let s={},a=new WeakMap;function r(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",r),delete s[d.id];let f=a.get(d);f&&(e.remove(f),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)e.update(d[f],n.ARRAY_BUFFER)}function c(h){let d=[],f=h.index,p=h.attributes.position,x=0;if(p===void 0)return;if(f!==null){let y=f.array;x=f.version;for(let T=0,v=y.length;T<v;T+=3){let E=y[T+0],M=y[T+1],P=y[T+2];d.push(E,M,M,P,P,E)}}else{let y=p.array;x=p.version;for(let T=0,v=y.length/3-1;T<v;T+=3){let E=T+0,M=T+1,P=T+2;d.push(E,M,M,P,P,E)}}let g=new(p.count>=65535?Hr:Fr)(d,1);g.version=x;let m=a.get(h);m&&e.remove(m),a.set(h,g)}function u(h){let d=a.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return a.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function S2(n,e,t){let i;function s(h){i=h}let a,r;function o(h){a=h.type,r=h.bytesPerElement}function l(h,d){n.drawElements(i,d,a,h*r),t.update(d,i,1)}function c(h,d,f){f!==0&&(n.drawElementsInstanced(i,d,a,h*r,f),t.update(d,i,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,a,h,0,f);let x=0;for(let g=0;g<f;g++)x+=d[g];t.update(x,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function E2(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(t.calls++,r){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:je("WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function T2(n,e,t){let i=new WeakMap,s=new qt;function a(r,o,l){let c=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=i.get(o);if(d===void 0||d.count!==h){let w=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],T=0;f===!0&&(T=1),p===!0&&(T=2),x===!0&&(T=3);let v=o.attributes.position.count*T,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let M=new Float32Array(v*E*4*h),P=new Ur(M,v,E,h);P.type=Wn,P.needsUpdate=!0;let b=T*4;for(let L=0;L<h;L++){let U=g[L],z=m[L],G=y[L],q=v*E*4*L;for(let V=0;V<U.count;V++){let Q=V*b;f===!0&&(s.fromBufferAttribute(U,V),M[q+Q+0]=s.x,M[q+Q+1]=s.y,M[q+Q+2]=s.z,M[q+Q+3]=0),p===!0&&(s.fromBufferAttribute(z,V),M[q+Q+4]=s.x,M[q+Q+5]=s.y,M[q+Q+6]=s.z,M[q+Q+7]=0),x===!0&&(s.fromBufferAttribute(G,V),M[q+Q+8]=s.x,M[q+Q+9]=s.y,M[q+Q+10]=s.z,M[q+Q+11]=G.itemSize===4?s.w:1)}}d={count:h,texture:P,size:new le(v,E)},i.set(o,d),o.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",r.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:a}}function w2(n,e,t,i,s){let a=new WeakMap;function r(c){let u=s.render.frame,h=c.geometry,d=e.get(c,h);if(a.get(d)!==u&&(e.update(d),a.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),a.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;a.get(f)!==u&&(f.update(),a.set(f,u))}return d}function o(){a=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:o}}var A2={[mo]:"LINEAR_TONE_MAPPING",[go]:"REINHARD_TONE_MAPPING",[xo]:"CINEON_TONE_MAPPING",[Xs]:"ACES_FILMIC_TONE_MAPPING",[vo]:"AGX_TONE_MAPPING",[yo]:"NEUTRAL_TONE_MAPPING",[_o]:"CUSTOM_TONE_MAPPING"};function R2(n,e,t,i,s,a){let r=new Kt(e,t,{type:n,depthBuffer:s,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new yt;c.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new et([0,2,0,0,2,0],2));let u=new za({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new ie(c,u),d=new vs(-1,1,1,-1,0,1),f=null,p=null,x=!1,g,m=null,y=[],T=!1;this.setSize=function(v,E){r.setSize(v,E),o!==null&&o.setSize(v,E),l!==null&&l.setSize(v,E);for(let M=0;M<y.length;M++){let P=y[M];P.setSize&&P.setSize(v,E)}},this.setEffects=function(v){y=v,T=y.length>0&&y[0].isRenderPass===!0;let E=r.width,M=r.height;y.length>0&&o===null&&(o=new Kt(E,M,{type:un,depthBuffer:!1,stencilBuffer:!1}),l=new Kt(E,M,{type:un,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<y.length;P++){let b=y[P];b.setSize&&b.setSize(E,M)}},this.begin=function(v,E){if(x||v.toneMapping===oi&&y.length===0)return!1;if(m=E,E!==null){let M=E.width,P=E.height;(r.width!==M||r.height!==P)&&this.setSize(M,P)}return T===!1&&v.setRenderTarget(r),g=v.toneMapping,v.toneMapping=oi,!0},this.hasRenderPass=function(){return T},this.end=function(v,E){v.toneMapping=g,x=!0;let M=r,P=o;for(let b=0;b<y.length;b++){let w=y[b];w.enabled!==!1&&(w.render(v,P,M,E),w.needsSwap!==!1&&(M=P,P=P===o?l:o))}if(f!==v.outputColorSpace||p!==v.toneMapping){f=v.outputColorSpace,p=v.toneMapping,u.defines={},ct.getTransfer(f)===_t&&(u.defines.SRGB_TRANSFER="");let b=A2[p];b&&(u.defines[b]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(m),v.render(h,d),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Wp=new _n,id=new ps(1,1),Xp=new Ur,$p=new Zl,Yp=new Xr,wp=[],Ap=[],Rp=new Float32Array(16),Cp=new Float32Array(9),Pp=new Float32Array(4);function Ka(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,a=wp[s];if(a===void 0&&(a=new Float32Array(s),wp[s]=a),e!==0){i.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,n[r].toArray(a,o)}return a}function nn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function sn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function pu(n,e){let t=Ap[e];t===void 0&&(t=new Int32Array(e),Ap[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function C2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function P2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2fv(this.addr,e),sn(t,e)}}function I2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;n.uniform3fv(this.addr,e),sn(t,e)}}function L2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4fv(this.addr,e),sn(t,e)}}function N2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,i))return;Pp.set(i),n.uniformMatrix2fv(this.addr,!1,Pp),sn(t,i)}}function D2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,i))return;Cp.set(i),n.uniformMatrix3fv(this.addr,!1,Cp),sn(t,i)}}function q2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,i))return;Rp.set(i),n.uniformMatrix4fv(this.addr,!1,Rp),sn(t,i)}}function U2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function B2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2iv(this.addr,e),sn(t,e)}}function O2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;n.uniform3iv(this.addr,e),sn(t,e)}}function F2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4iv(this.addr,e),sn(t,e)}}function H2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function z2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2uiv(this.addr,e),sn(t,e)}}function k2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;n.uniform3uiv(this.addr,e),sn(t,e)}}function V2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4uiv(this.addr,e),sn(t,e)}}function G2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let a;this.type===n.SAMPLER_2D_SHADOW?(id.compareFunction=t.isReversedDepthBuffer()?lu:ou,a=id):a=Wp,t.setTexture2D(e||a,s)}function W2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||$p,s)}function X2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Yp,s)}function $2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Xp,s)}function Y2(n){switch(n){case 5126:return C2;case 35664:return P2;case 35665:return I2;case 35666:return L2;case 35674:return N2;case 35675:return D2;case 35676:return q2;case 5124:case 35670:return U2;case 35667:case 35671:return B2;case 35668:case 35672:return O2;case 35669:case 35673:return F2;case 5125:return H2;case 36294:return z2;case 36295:return k2;case 36296:return V2;case 35678:case 36198:case 36298:case 36306:case 35682:return G2;case 35679:case 36299:case 36307:return W2;case 35680:case 36300:case 36308:case 36293:return X2;case 36289:case 36303:case 36311:case 36292:return $2}}function j2(n,e){n.uniform1fv(this.addr,e)}function J2(n,e){let t=Ka(e,this.size,2);n.uniform2fv(this.addr,t)}function Z2(n,e){let t=Ka(e,this.size,3);n.uniform3fv(this.addr,t)}function K2(n,e){let t=Ka(e,this.size,4);n.uniform4fv(this.addr,t)}function Q2(n,e){let t=Ka(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function e_(n,e){let t=Ka(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function t_(n,e){let t=Ka(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function n_(n,e){n.uniform1iv(this.addr,e)}function i_(n,e){n.uniform2iv(this.addr,e)}function s_(n,e){n.uniform3iv(this.addr,e)}function a_(n,e){n.uniform4iv(this.addr,e)}function r_(n,e){n.uniform1uiv(this.addr,e)}function o_(n,e){n.uniform2uiv(this.addr,e)}function l_(n,e){n.uniform3uiv(this.addr,e)}function c_(n,e){n.uniform4uiv(this.addr,e)}function u_(n,e,t){let i=this.cache,s=e.length,a=pu(t,s);nn(i,a)||(n.uniform1iv(this.addr,a),sn(i,a));let r;this.type===n.SAMPLER_2D_SHADOW?r=id:r=Wp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||r,a[o])}function h_(n,e,t){let i=this.cache,s=e.length,a=pu(t,s);nn(i,a)||(n.uniform1iv(this.addr,a),sn(i,a));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||$p,a[r])}function d_(n,e,t){let i=this.cache,s=e.length,a=pu(t,s);nn(i,a)||(n.uniform1iv(this.addr,a),sn(i,a));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||Yp,a[r])}function f_(n,e,t){let i=this.cache,s=e.length,a=pu(t,s);nn(i,a)||(n.uniform1iv(this.addr,a),sn(i,a));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||Xp,a[r])}function p_(n){switch(n){case 5126:return j2;case 35664:return J2;case 35665:return Z2;case 35666:return K2;case 35674:return Q2;case 35675:return e_;case 35676:return t_;case 5124:case 35670:return n_;case 35667:case 35671:return i_;case 35668:case 35672:return s_;case 35669:case 35673:return a_;case 5125:return r_;case 36294:return o_;case 36295:return l_;case 36296:return c_;case 35678:case 36198:case 36298:case 36306:case 35682:return u_;case 35679:case 36299:case 36307:return h_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return f_}}var sd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Y2(t.type)}},ad=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=p_(t.type)}},rd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(e,t[o.id],i)}}},td=/(\w+)(\])?(\[|\.)?/g;function Ip(n,e){n.seq.push(e),n.map[e.id]=e}function m_(n,e,t){let i=n.name,s=i.length;for(td.lastIndex=0;;){let a=td.exec(i),r=td.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){Ip(t,c===void 0?new sd(o,n,e):new ad(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new rd(o),Ip(t,h)),t=h}}}var Za=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);m_(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(e,t,i,s){let a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,r=t.length;a!==r;++a){let o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,a=e.length;s!==a;++s){let r=e[s];r.id in t&&i.push(r)}return i}};function Lp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var g_=37297,x_=0;function __(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return i.join(`
`)}var Np=new Ze;function v_(n){ct._getMatrix(Np,ct.workingColorSpace,n);let e=`mat3( ${Np.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(n)){case Nr:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Dp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+a+`

`+__(n.getShaderSource(e),o)}else return a}function y_(n,e){let t=v_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var b_={[mo]:"Linear",[go]:"Reinhard",[xo]:"Cineon",[Xs]:"ACESFilmic",[vo]:"AgX",[yo]:"Neutral",[_o]:"Custom"};function M_(n,e){let t=b_[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var uu=new I;function S_(){ct.getLuminanceCoefficients(uu);let n=uu.x.toFixed(4),e=uu.y.toFixed(4),t=uu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function T_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function w_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=n.getActiveAttrib(e,s),r=a.name,o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:n.getAttribLocation(e,r),locationSize:o}}return t}function Lo(n){return n!==""}function qp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Up(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var A_=/^[ \t]*#include +<([\w\d./]+)>/gm;function od(n){return n.replace(A_,C_)}var R_=new Map;function C_(n,e){let t=st[e];if(t===void 0){let i=R_.get(e);if(i!==void 0)t=st[i],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return od(t)}var P_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bp(n){return n.replace(P_,I_)}function I_(n,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Op(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var L_={[po]:"SHADOWMAP_TYPE_PCF",[Wa]:"SHADOWMAP_TYPE_VSM"};function N_(n){return L_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var D_={[bs]:"ENVMAP_TYPE_CUBE",[$s]:"ENVMAP_TYPE_CUBE",[bo]:"ENVMAP_TYPE_CUBE_UV"};function q_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":D_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var U_={[$s]:"ENVMAP_MODE_REFRACTION"};function B_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":U_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var O_={[yc]:"ENVMAP_BLENDING_MULTIPLY",[Kf]:"ENVMAP_BLENDING_MIX",[Qf]:"ENVMAP_BLENDING_ADD"};function F_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":O_[n.combine]||"ENVMAP_BLENDING_NONE"}function H_(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function z_(n,e,t,i){let s=n.getContext(),a=t.defines,r=t.vertexShader,o=t.fragmentShader,l=N_(t),c=q_(t),u=B_(t),h=F_(t),d=H_(t),f=E_(t),p=T_(a),x=s.createProgram(),g,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Lo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Lo).join(`
`),m.length>0&&(m+=`
`)):(g=[Op(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),m=[Op(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?st.tonemapping_pars_fragment:"",t.toneMapping!==oi?M_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,y_("linearToOutputTexel",t.outputColorSpace),S_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lo).join(`
`)),r=od(r),r=qp(r,t),r=Up(r,t),o=od(o),o=qp(o,t),o=Up(o,t),r=Bp(r),o=Bp(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let T=y+g+r,v=y+m+o,E=Lp(s,s.VERTEX_SHADER,T),M=Lp(s,s.FRAGMENT_SHADER,v);s.attachShader(x,E),s.attachShader(x,M),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(U){if(n.debug.checkShaderErrors){let z=s.getProgramInfoLog(x)||"",G=s.getShaderInfoLog(E)||"",q=s.getShaderInfoLog(M)||"",V=z.trim(),Q=G.trim(),j=q.trim(),he=!0,te=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(he=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,E,M);else{let ae=Dp(s,E,"vertex"),oe=Dp(s,M,"fragment");je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+V+`
`+ae+`
`+oe)}else V!==""?Xe("WebGLProgram: Program Info Log:",V):(Q===""||j==="")&&(te=!1);te&&(U.diagnostics={runnable:he,programLog:V,vertexShader:{log:Q,prefix:g},fragmentShader:{log:j,prefix:m}})}s.deleteShader(E),s.deleteShader(M),b=new Za(s,x),w=w_(s,x)}let b;this.getUniforms=function(){return b===void 0&&P(this),b};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(x,g_)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=x_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=M,this}var k_=0,ld=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new cd(e),t.set(e,i)),i}},cd=class{constructor(e){this.id=k_++,this.code=e,this.usedTimes=0}};function V_(n){return n===Es||n===Ao||n===Ro}function G_(n,e,t,i,s,a){let r=new Br,o=new ld,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer,d=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(b){return l.add(b),b===0?"uv":`uv${b}`}function x(b,w,L,U,z,G){let q=U.fog,V=z.geometry,Q=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,j=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,he=e.get(b.envMap||Q,j),te=he&&he.mapping===bo?he.image.height:null,ae=f[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&Xe("WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let oe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ne=oe!==void 0?oe.length:0,Ce=0;V.morphAttributes.position!==void 0&&(Ce=1),V.morphAttributes.normal!==void 0&&(Ce=2),V.morphAttributes.color!==void 0&&(Ce=3);let ft,Je,at,H;if(ae){let ot=Ti[ae];ft=ot.vertexShader,Je=ot.fragmentShader}else{ft=b.vertexShader,Je=b.fragmentShader;let ot=o.getVertexShaderStage(b),nt=o.getFragmentShaderStage(b);o.update(b,ot,nt),at=ot.id,H=nt.id}let Z=n.getRenderTarget(),me=n.state.buffers.depth.getReversed(),Pe=z.isInstancedMesh===!0,_e=z.isBatchedMesh===!0,De=!!b.map,Ye=!!b.matcap,ee=!!he,$=!!b.aoMap,ue=!!b.lightMap,ce=!!b.bumpMap&&b.wireframe===!1,ge=!!b.normalMap,He=!!b.displacementMap,Be=!!b.emissiveMap,Oe=!!b.metalnessMap,$e=!!b.roughnessMap,D=b.anisotropy>0,xt=b.clearcoat>0,rt=b.dispersion>0,C=b.retroreflectivity>0,_=b.iridescence>0,k=b.sheen>0,Y=b.transmission>0,ne=D&&!!b.anisotropyMap,fe=xt&&!!b.clearcoatMap,ye=xt&&!!b.clearcoatNormalMap,se=xt&&!!b.clearcoatRoughnessMap,re=_&&!!b.iridescenceMap,be=_&&!!b.iridescenceThicknessMap,ze=k&&!!b.sheenColorMap,Me=k&&!!b.sheenRoughnessMap,ve=!!b.specularMap,Fe=!!b.specularColorMap,We=!!b.specularIntensityMap,Qe=Y&&!!b.transmissionMap,F=Y&&!!b.thicknessMap,A=!!b.gradientMap,R=!!b.alphaMap,N=b.alphaTest>0,O=!!b.alphaHash,J=!!b.extensions,xe=oi;b.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(xe=n.toneMapping);let Se={shaderID:ae,shaderType:b.type,shaderName:b.name,vertexShader:ft,fragmentShader:Je,defines:b.defines,customVertexShaderID:at,customFragmentShaderID:H,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:_e,batchingColor:_e&&z._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&z.instanceColor!==null,instancingMorph:Pe&&z.morphTexture!==null,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:De,matcap:Ye,envMap:ee,envMapMode:ee&&he.mapping,envMapCubeUVHeight:te,aoMap:$,lightMap:ue,bumpMap:ce,normalMap:ge,displacementMap:He,emissiveMap:Be,normalMapObjectSpace:ge&&b.normalMapType===np,normalMapTangentSpace:ge&&b.normalMapType===Co,packedNormalMap:ge&&b.normalMapType===Co&&V_(b.normalMap.format),metalnessMap:Oe,roughnessMap:$e,anisotropy:D,anisotropyMap:ne,clearcoat:xt,clearcoatMap:fe,clearcoatNormalMap:ye,clearcoatRoughnessMap:se,dispersion:rt,retroreflection:C,iridescence:_,iridescenceMap:re,iridescenceThicknessMap:be,sheen:k,sheenColorMap:ze,sheenRoughnessMap:Me,specularMap:ve,specularColorMap:Fe,specularIntensityMap:We,transmission:Y,transmissionMap:Qe,thicknessMap:F,gradientMap:A,opaque:b.transparent===!1&&b.blending===Xa&&b.alphaToCoverage===!1,alphaMap:R,alphaTest:N,alphaHash:O,combine:b.combine,mapUv:De&&p(b.map.channel),aoMapUv:$&&p(b.aoMap.channel),lightMapUv:ue&&p(b.lightMap.channel),bumpMapUv:ce&&p(b.bumpMap.channel),normalMapUv:ge&&p(b.normalMap.channel),displacementMapUv:He&&p(b.displacementMap.channel),emissiveMapUv:Be&&p(b.emissiveMap.channel),metalnessMapUv:Oe&&p(b.metalnessMap.channel),roughnessMapUv:$e&&p(b.roughnessMap.channel),anisotropyMapUv:ne&&p(b.anisotropyMap.channel),clearcoatMapUv:fe&&p(b.clearcoatMap.channel),clearcoatNormalMapUv:ye&&p(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&p(b.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&p(b.iridescenceMap.channel),iridescenceThicknessMapUv:be&&p(b.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&p(b.sheenColorMap.channel),sheenRoughnessMapUv:Me&&p(b.sheenRoughnessMap.channel),specularMapUv:ve&&p(b.specularMap.channel),specularColorMapUv:Fe&&p(b.specularColorMap.channel),specularIntensityMapUv:We&&p(b.specularIntensityMap.channel),transmissionMapUv:Qe&&p(b.transmissionMap.channel),thicknessMapUv:F&&p(b.thicknessMap.channel),alphaMapUv:R&&p(b.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ge||D),vertexNormals:!!V.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!V.attributes.uv&&(De||R),fog:!!q,useFog:b.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||V.attributes.normal===void 0&&ge===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:me,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:Ce,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:xe,decodeVideoTexture:De&&b.map.isVideoTexture===!0&&ct.getTransfer(b.map.colorSpace)===_t,decodeVideoTextureEmissive:Be&&b.emissiveMap.isVideoTexture===!0&&ct.getTransfer(b.emissiveMap.colorSpace)===_t,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===St,flipSided:b.side===Qt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:J&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(J&&b.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Se.vertexUv1s=l.has(1),Se.vertexUv2s=l.has(2),Se.vertexUv3s=l.has(3),l.clear(),Se}function g(b){let w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(let L in b.defines)w.push(L),w.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(m(w,b),y(w,b),w.push(n.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function m(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numSunLights),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numSunLightShadows),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function y(b,w){r.disableAll(),w.instancing&&r.enable(0),w.instancingColor&&r.enable(1),w.instancingMorph&&r.enable(2),w.matcap&&r.enable(3),w.envMap&&r.enable(4),w.normalMapObjectSpace&&r.enable(5),w.normalMapTangentSpace&&r.enable(6),w.clearcoat&&r.enable(7),w.iridescence&&r.enable(8),w.alphaTest&&r.enable(9),w.vertexColors&&r.enable(10),w.vertexAlphas&&r.enable(11),w.vertexUv1s&&r.enable(12),w.vertexUv2s&&r.enable(13),w.vertexUv3s&&r.enable(14),w.vertexTangents&&r.enable(15),w.anisotropy&&r.enable(16),w.alphaHash&&r.enable(17),w.batching&&r.enable(18),w.dispersion&&r.enable(19),w.retroreflection&&r.enable(24),w.batchingColor&&r.enable(20),w.gradientMap&&r.enable(21),w.packedNormalMap&&r.enable(22),w.vertexNormals&&r.enable(23),b.push(r.mask),r.disableAll(),w.fog&&r.enable(0),w.useFog&&r.enable(1),w.flatShading&&r.enable(2),w.logarithmicDepthBuffer&&r.enable(3),w.reversedDepthBuffer&&r.enable(4),w.skinning&&r.enable(5),w.morphTargets&&r.enable(6),w.morphNormals&&r.enable(7),w.morphColors&&r.enable(8),w.premultipliedAlpha&&r.enable(9),w.shadowMapEnabled&&r.enable(10),w.doubleSided&&r.enable(11),w.flipSided&&r.enable(12),w.useDepthPacking&&r.enable(13),w.dithering&&r.enable(14),w.transmission&&r.enable(15),w.sheen&&r.enable(16),w.opaque&&r.enable(17),w.pointsUvs&&r.enable(18),w.decodeVideoTexture&&r.enable(19),w.decodeVideoTextureEmissive&&r.enable(20),w.alphaToCoverage&&r.enable(21),w.numLightProbeGrids>0&&r.enable(22),w.hasPositionAttribute&&r.enable(23),b.push(r.mask)}function T(b){let w=f[b.type],L;if(w){let U=Ti[w];L=Zi.clone(U.uniforms)}else L=b.uniforms;return L}function v(b,w){let L=u.get(w);return L!==void 0?++L.usedTimes:(L=new z_(n,w,b,s),c.push(L),u.set(w,L)),L}function E(b){if(--b.usedTimes===0){let w=c.indexOf(b);c[w]=c[c.length-1],c.pop(),u.delete(b.cacheKey),b.destroy()}}function M(b){o.remove(b)}function P(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:T,acquireProgram:v,releaseProgram:E,releaseShaderCache:M,programs:c,dispose:P}}function W_(){let n=new WeakMap;function e(r){return n.has(r)}function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function i(r){n.delete(r)}function s(r,o,l){n.get(r)[o]=l}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function X_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Fp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Hp(){let n=[],e=0,t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function r(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,x,g,m){let y=n[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:p,materialVariant:r(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:m},n[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=p,y.materialVariant=r(d),y.groupOrder=x,y.renderOrder=d.renderOrder,y.z=g,y.group=m),e++,y}function l(d,f,p,x,g,m,y){y.reversedDepth===!0&&(g=-g);let T=o(d,f,p,x,g,m);p.transmission>0?i.push(T):p.transparent===!0?s.push(T):t.push(T)}function c(d,f,p,x,g,m){let y=o(d,f,p,x,g,m);p.transmission>0?i.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function u(d,f){t.length>1&&t.sort(d||X_),i.length>1&&i.sort(f||Fp),s.length>1&&s.sort(f||Fp)}function h(){for(let d=e,f=n.length;d<f;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:h,sort:u}}function $_(){let n=new WeakMap;function e(i,s){let a=n.get(i),r;return a===void 0?(r=new Hp,n.set(i,[r])):s>=a.length?(r=new Hp,a.push(r)):r=a[s],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function Y_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new Ve};break;case"SpotLight":t={position:new I,direction:new I,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function j_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var J_=0;function Z_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function K_(n){let e=new Y_,t=j_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,a=new mt,r=new mt;function o(c){let u=0,h=0,d=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,y=0,T=0,v=0,E=0,M=0,P=0,b=0,w=0,L=0;c.sort(Z_);for(let z=0,G=c.length;z<G;z++){let q=c[z],V=q.color,Q=q.intensity,j=q.distance,he=null;if(q.shadow&&q.shadow.map&&(q.shadow.map.texture.format===Es?he=q.shadow.map.texture:he=q.shadow.map.depthTexture||q.shadow.map.texture),q.isAmbientLight)u+=V.r*Q,h+=V.g*Q,d+=V.b*Q;else if(q.isLightProbe){for(let te=0;te<9;te++)i.probe[te].addScaledVector(q.sh.coefficients[te],Q);L++}else if(q.isSunLight){let te=e.get(q);if(te.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){let ae=q.shadow,oe=t.get(q);oe.shadowIntensity=ae.intensity,oe.shadowBias=ae.bias,oe.shadowNormalBias=ae.normalBias,oe.shadowRadius=ae.radius,oe.shadowMapSize.copy(ae.mapSize).multiply(ae.getFrameExtents()),i.sunShadow[p]=oe,i.sunShadowMap[p]=he;let Ne=ae.getViewportCount();for(let Ce=0;Ce<Ne;Ce++)i.sunShadowMatrix[x+Ce]=ae.getMatrix(Ce),i.sunShadowCascade[x+Ce]=ae._cascadeData[Ce];x+=Ne,p++}i.sun[f]=te,f++}else if(q.isDirectionalLight){let te=e.get(q);if(te.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){let ae=q.shadow,oe=t.get(q);oe.shadowIntensity=ae.intensity,oe.shadowBias=ae.bias,oe.shadowNormalBias=ae.normalBias,oe.shadowRadius=ae.radius,oe.shadowMapSize=ae.mapSize,i.directionalShadow[g]=oe,i.directionalShadowMap[g]=he,i.directionalShadowMatrix[g]=q.shadow.matrix,E++}i.directional[g]=te,g++}else if(q.isSpotLight){let te=e.get(q);te.position.setFromMatrixPosition(q.matrixWorld),te.color.copy(V).multiplyScalar(Q),te.distance=j,te.coneCos=Math.cos(q.angle),te.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),te.decay=q.decay,i.spot[y]=te;let ae=q.shadow;if(q.map&&(i.spotLightMap[b]=q.map,b++,ae.updateMatrices(q),q.castShadow&&w++),i.spotLightMatrix[y]=ae.matrix,q.castShadow){let oe=t.get(q);oe.shadowIntensity=ae.intensity,oe.shadowBias=ae.bias,oe.shadowNormalBias=ae.normalBias,oe.shadowRadius=ae.radius,oe.shadowMapSize=ae.mapSize,i.spotShadow[y]=oe,i.spotShadowMap[y]=he,P++}y++}else if(q.isRectAreaLight){let te=e.get(q);te.color.copy(V).multiplyScalar(Q),te.halfWidth.set(q.width*.5,0,0),te.halfHeight.set(0,q.height*.5,0),i.rectArea[T]=te,T++}else if(q.isPointLight){let te=e.get(q);if(te.color.copy(q.color).multiplyScalar(q.intensity),te.distance=q.distance,te.decay=q.decay,q.castShadow){let ae=q.shadow,oe=t.get(q);oe.shadowIntensity=ae.intensity,oe.shadowBias=ae.bias,oe.shadowNormalBias=ae.normalBias,oe.shadowRadius=ae.radius,oe.shadowMapSize=ae.mapSize,oe.shadowCameraNear=ae.camera.near,oe.shadowCameraFar=ae.camera.far,i.pointShadow[m]=oe,i.pointShadowMap[m]=he,i.pointShadowMatrix[m]=q.shadow.matrix,M++}i.point[m]=te,m++}else if(q.isHemisphereLight){let te=e.get(q);te.skyColor.copy(q.color).multiplyScalar(Q),te.groundColor.copy(q.groundColor).multiplyScalar(Q),i.hemi[v]=te,v++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;let U=i.hash;(U.sunLength!==f||U.directionalLength!==g||U.pointLength!==m||U.spotLength!==y||U.rectAreaLength!==T||U.hemiLength!==v||U.numSunShadows!==p||U.numDirectionalShadows!==E||U.numPointShadows!==M||U.numSpotShadows!==P||U.numSpotMaps!==b||U.numLightProbes!==L)&&(i.sun.length=f,i.directional.length=g,i.spot.length=y,i.rectArea.length=T,i.point.length=m,i.hemi.length=v,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=M,i.pointShadowMap.length=M,i.pointShadowMatrix.length=M,i.spotShadow.length=P,i.spotShadowMap.length=P,i.spotLightMatrix.length=P+b-w,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=L,U.sunLength=f,U.directionalLength=g,U.pointLength=m,U.spotLength=y,U.rectAreaLength=T,U.hemiLength=v,U.numSunShadows=p,U.numDirectionalShadows=E,U.numPointShadows=M,U.numSpotShadows=P,U.numSpotMaps=b,U.numLightProbes=L,i.version=J_++)}function l(c,u){let h=0,d=0,f=0,p=0,x=0,g=0,m=u.matrixWorldInverse;for(let y=0,T=c.length;y<T;y++){let v=c[y];if(v.isSunLight){let E=i.sun[h];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(m),h++}else if(v.isDirectionalLight){let E=i.directional[d];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),d++}else if(v.isSpotLight){let E=i.spot[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let E=i.rectArea[x];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),r.identity(),a.copy(v.matrixWorld),a.premultiply(m),r.extractRotation(a),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),x++}else if(v.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let E=i.hemi[g];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function zp(n){let e=new K_(n),t=[],i=[],s=[];function a(d){h.camera=d,t.length=0,i.length=0,s.length=0}function r(d){t.push(d)}function o(d){i.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:h,setupLights:c,setupLightsView:u,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function Q_(n){let e=new WeakMap;function t(s,a=0){let r=e.get(s),o;return r===void 0?(o=new zp(n),e.set(s,[o])):a>=r.length?(o=new zp(n),r.push(o)):o=r[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var ev=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,nv=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],iv=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],kp=new mt,Io=new I,nd=new I;function sv(n,e,t){let i=new Ba,s=new le,a=new le,r=new qt,o=new ac,l=new rc,c={},u=t.maxTextureSize,h={[ys]:Qt,[Qt]:ys,[St]:St},d=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:ev,fragmentShader:tv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new yt;p.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ie(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=po;let m=this.type;this.render=function(M,P,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===Nf&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=po);let w=n.getRenderTarget(),L=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Gn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let G=m!==this.type;G&&P.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(V=>V.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,V=M.length;q<V;q++){let Q=M[q],j=Q.shadow;if(j===void 0){Xe("WebGLShadowMap:",Q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let he=j.getFrameExtents();s.multiply(he),a.copy(j.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(a.x=Math.floor(u/he.x),s.x=a.x*he.x,j.mapSize.x=a.x),s.y>u&&(a.y=Math.floor(u/he.y),s.y=a.y*he.y,j.mapSize.y=a.y));let te=n.state.buffers.depth.getReversed();if(j.camera._reversedDepth=te,j.map===null||G===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Wa){if(Q.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new Kt(s.x,s.y,{format:Es,type:un,minFilter:cn,magFilter:cn,generateMipmaps:!1}),j.map.texture.name=Q.name+".shadowMap",j.map.depthTexture=new ps(s.x,s.y,Wn),j.map.depthTexture.name=Q.name+".shadowMapDepth",j.map.depthTexture.format=vi,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=rn,j.map.depthTexture.magFilter=rn}else Q.isPointLight?(j.map=new hu(s.x),j.map.depthTexture=new Ql(s.x,li)):(j.map=new Kt(s.x,s.y),j.map.depthTexture=new ps(s.x,s.y,li)),j.map.depthTexture.name=Q.name+".shadowMap",j.map.depthTexture.format=vi,this.type===po?(j.map.depthTexture.compareFunction=te?lu:ou,j.map.depthTexture.minFilter=cn,j.map.depthTexture.magFilter=cn):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=rn,j.map.depthTexture.magFilter=rn);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==s.x||j.map.height!==s.y)&&j.map.setSize(s.x,s.y);let ae=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();Q.isPointLight!==!0&&j.updateMatrices(Q,b);for(let oe=0;oe<ae;oe++){let Ne=j.getCamera(oe);if(Q.isPointLight){let Ce=j.camera,ft=j.matrix,Je=Q.distance||Ce.far;Je!==Ce.far&&(Ce.far=Je,Ce.updateProjectionMatrix()),Io.setFromMatrixPosition(Q.matrixWorld),Ce.position.copy(Io),nd.copy(Ce.position),nd.add(nv[oe]),Ce.up.copy(iv[oe]),Ce.lookAt(nd),Ce.updateMatrixWorld(),ft.makeTranslation(-Io.x,-Io.y,-Io.z),kp.multiplyMatrices(Ce.projectionMatrix,Ce.matrixWorldInverse),j._frustum.setFromProjectionMatrix(kp,Ce.coordinateSystem,Ce.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)n.setRenderTarget(j.map,oe),n.clear();else{oe===0&&(n.setRenderTarget(j.map),n.clear());let Ce=j.getViewport(oe);r.set(a.x*Ce.x,a.y*Ce.y,a.x*Ce.z,a.y*Ce.w),z.viewport(r)}i=j.getFrustum(oe),v(P,b,Ne,Q,this.type)}j.isPointLightShadow!==!0&&this.type===Wa&&y(j,b),j.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(w,L,U)};function y(M,P){let b=e.update(x);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new Kt(s.x,s.y,{format:Es,type:un}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(P,null,b,d,x,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(P,null,b,f,x,null)}function T(M,P,b,w){let L=null,U=b.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(U!==void 0)L=U;else if(L=b.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let z=L.uuid,G=P.uuid,q=c[z];q===void 0&&(q={},c[z]=q);let V=q[G];V===void 0&&(V=L.clone(),q[G]=V,P.addEventListener("dispose",E)),L=V}if(L.visible=P.visible,L.wireframe=P.wireframe,w===Wa?L.side=P.shadowSide!==null?P.shadowSide:P.side:L.side=P.shadowSide!==null?P.shadowSide:h[P.side],L.alphaMap=P.alphaMap,L.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,L.map=P.map,L.clipShadows=P.clipShadows,L.clippingPlanes=P.clippingPlanes,L.clipIntersection=P.clipIntersection,L.displacementMap=P.displacementMap,L.displacementScale=P.displacementScale,L.displacementBias=P.displacementBias,L.wireframeLinewidth=P.wireframeLinewidth,L.linewidth=P.linewidth,b.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let z=n.properties.get(L);z.light=b}return L}function v(M,P,b,w,L){if(M.visible===!1)return;if(M.layers.test(P.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&L===Wa)&&(!M.frustumCulled||M.intersectsFrustum(i))){M.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,M.matrixWorld);let G=e.update(M),q=M.material;if(Array.isArray(q)){let V=G.groups;for(let Q=0,j=V.length;Q<j;Q++){let he=V[Q],te=q[he.materialIndex];if(te&&te.visible){let ae=T(M,te,w,L);M.onBeforeShadow(n,M,P,b,G,ae,he),n.renderBufferDirect(b,null,G,ae,M,he),M.onAfterShadow(n,M,P,b,G,ae,he)}}}else if(q.visible){let V=T(M,q,w,L);M.onBeforeShadow(n,M,P,b,G,V,null),n.renderBufferDirect(b,null,G,V,M,null),M.onAfterShadow(n,M,P,b,G,V,null)}}let z=M.children;for(let G=0,q=z.length;G<q;G++)v(z[G],P,b,w,L)}function E(M){M.target.removeEventListener("dispose",E);for(let b in c){let w=c[b],L=M.target.uuid;L in w&&(w[L].dispose(),delete w[L])}}}function av(n,e){function t(){let F=!1,A=new qt,R=null,N=new qt(0,0,0,0);return{setMask:function(O){R!==O&&!F&&(n.colorMask(O,O,O,O),R=O)},setLocked:function(O){F=O},setClear:function(O,J,xe,Se,ot){ot===!0&&(O*=Se,J*=Se,xe*=Se),A.set(O,J,xe,Se),N.equals(A)===!1&&(n.clearColor(O,J,xe,Se),N.copy(A))},reset:function(){F=!1,R=null,N.set(-1,0,0,0)}}}function i(){let F=!1,A=!1,R=null,N=null,O=null;return{setReversed:function(J){if(A!==J){let xe=e.get("EXT_clip_control");J?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),A=J;let Se=O;O=null,this.setClear(Se)}},getReversed:function(){return A},setTest:function(J){J?Z(n.DEPTH_TEST):me(n.DEPTH_TEST)},setMask:function(J){R!==J&&!F&&(n.depthMask(J),R=J)},setFunc:function(J){if(A&&(J=fp[J]),N!==J){switch(J){case Hl:n.depthFunc(n.NEVER);break;case zl:n.depthFunc(n.ALWAYS);break;case kl:n.depthFunc(n.LESS);break;case Ca:n.depthFunc(n.LEQUAL);break;case Vl:n.depthFunc(n.EQUAL);break;case Gl:n.depthFunc(n.GEQUAL);break;case Wl:n.depthFunc(n.GREATER);break;case Xl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}N=J}},setLocked:function(J){F=J},setClear:function(J){O!==J&&(O=J,A&&(J=1-J),n.clearDepth(J))},reset:function(){F=!1,R=null,N=null,O=null,A=!1}}}function s(){let F=!1,A=null,R=null,N=null,O=null,J=null,xe=null,Se=null,ot=null;return{setTest:function(nt){F||(nt?Z(n.STENCIL_TEST):me(n.STENCIL_TEST))},setMask:function(nt){A!==nt&&!F&&(n.stencilMask(nt),A=nt)},setFunc:function(nt,$t,En){(R!==nt||N!==$t||O!==En)&&(n.stencilFunc(nt,$t,En),R=nt,N=$t,O=En)},setOp:function(nt,$t,En){(J!==nt||xe!==$t||Se!==En)&&(n.stencilOp(nt,$t,En),J=nt,xe=$t,Se=En)},setLocked:function(nt){F=nt},setClear:function(nt){ot!==nt&&(n.clearStencil(nt),ot=nt)},reset:function(){F=!1,A=null,R=null,N=null,O=null,J=null,xe=null,Se=null,ot=null}}}let a=new t,r=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},h={},d={},f=new WeakMap,p=[],x=null,g=!1,m=null,y=null,T=null,v=null,E=null,M=null,P=null,b=new Ve(0,0,0),w=0,L=!1,U=null,z=null,G=null,q=null,V=null,Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,he=0,te=n.getParameter(n.VERSION);te.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(te)[1]),j=he>=1):te.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),j=he>=2);let ae=null,oe={},Ne=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),ft=new qt().fromArray(Ne),Je=new qt().fromArray(Ce);function at(F,A,R,N){let O=new Uint8Array(4),J=n.createTexture();n.bindTexture(F,J),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let xe=0;xe<R;xe++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(A,0,n.RGBA,1,1,N,0,n.RGBA,n.UNSIGNED_BYTE,O):n.texImage2D(A+xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,O);return J}let H={};H[n.TEXTURE_2D]=at(n.TEXTURE_2D,n.TEXTURE_2D,1),H[n.TEXTURE_CUBE_MAP]=at(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[n.TEXTURE_2D_ARRAY]=at(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),H[n.TEXTURE_3D]=at(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Z(n.DEPTH_TEST),r.setFunc(Ca),ce(!1),ge(Lh),Z(n.CULL_FACE),$(Gn);function Z(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function me(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Pe(F,A){return d[F]!==A?(n.bindFramebuffer(F,A),d[F]=A,F===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=A),F===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=A),!0):!1}function _e(F,A){let R=p,N=!1;if(F){R=f.get(A),R===void 0&&(R=[],f.set(A,R));let O=F.textures;if(R.length!==O.length||R[0]!==n.COLOR_ATTACHMENT0){for(let J=0,xe=O.length;J<xe;J++)R[J]=n.COLOR_ATTACHMENT0+J;R.length=O.length,N=!0}}else R[0]!==n.BACK&&(R[0]=n.BACK,N=!0);N&&n.drawBuffers(R)}function De(F){return x!==F?(n.useProgram(F),x=F,!0):!1}let Ye={[Ws]:n.FUNC_ADD,[qf]:n.FUNC_SUBTRACT,[Uf]:n.FUNC_REVERSE_SUBTRACT};Ye[Bf]=n.MIN,Ye[Of]=n.MAX;let ee={[Ff]:n.ZERO,[Hf]:n.ONE,[zf]:n.SRC_COLOR,[qh]:n.SRC_ALPHA,[$f]:n.SRC_ALPHA_SATURATE,[Wf]:n.DST_COLOR,[Vf]:n.DST_ALPHA,[kf]:n.ONE_MINUS_SRC_COLOR,[Uh]:n.ONE_MINUS_SRC_ALPHA,[Xf]:n.ONE_MINUS_DST_COLOR,[Gf]:n.ONE_MINUS_DST_ALPHA,[Yf]:n.CONSTANT_COLOR,[jf]:n.ONE_MINUS_CONSTANT_COLOR,[Jf]:n.CONSTANT_ALPHA,[Zf]:n.ONE_MINUS_CONSTANT_ALPHA};function $(F,A,R,N,O,J,xe,Se,ot,nt){if(F===Gn){g===!0&&(me(n.BLEND),g=!1);return}if(g===!1&&(Z(n.BLEND),g=!0),F!==Df){if(F!==m||nt!==L){if((y!==Ws||E!==Ws)&&(n.blendEquation(n.FUNC_ADD),y=Ws,E=Ws),nt)switch(F){case Xa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sn:n.blendFunc(n.ONE,n.ONE);break;case Nh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:je("WebGLState: Invalid blending: ",F);break}else switch(F){case Xa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Nh:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dh:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",F);break}T=null,v=null,M=null,P=null,b.set(0,0,0),w=0,m=F,L=nt}return}O=O||A,J=J||R,xe=xe||N,(A!==y||O!==E)&&(n.blendEquationSeparate(Ye[A],Ye[O]),y=A,E=O),(R!==T||N!==v||J!==M||xe!==P)&&(n.blendFuncSeparate(ee[R],ee[N],ee[J],ee[xe]),T=R,v=N,M=J,P=xe),(Se.equals(b)===!1||ot!==w)&&(n.blendColor(Se.r,Se.g,Se.b,ot),b.copy(Se),w=ot),m=F,L=!1}function ue(F,A){F.side===St?me(n.CULL_FACE):Z(n.CULL_FACE);let R=F.side===Qt;A&&(R=!R),ce(R),F.blending===Xa&&F.transparent===!1?$(Gn):$(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),r.setFunc(F.depthFunc),r.setTest(F.depthTest),r.setMask(F.depthWrite),a.setMask(F.colorWrite);let N=F.stencilWrite;o.setTest(N),N&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Be(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):me(n.SAMPLE_ALPHA_TO_COVERAGE)}function ce(F){U!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),U=F)}function ge(F){F!==If?(Z(n.CULL_FACE),F!==z&&(F===Lh?n.cullFace(n.BACK):F===Lf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):me(n.CULL_FACE),z=F}function He(F){F!==G&&(j&&n.lineWidth(F),G=F)}function Be(F,A,R){F?(Z(n.POLYGON_OFFSET_FILL),(q!==A||V!==R)&&(q=A,V=R,r.getReversed()&&(A=-A),n.polygonOffset(A,R))):me(n.POLYGON_OFFSET_FILL)}function Oe(F){F?Z(n.SCISSOR_TEST):me(n.SCISSOR_TEST)}function $e(F){F===void 0&&(F=n.TEXTURE0+Q-1),ae!==F&&(n.activeTexture(F),ae=F)}function D(F,A,R){R===void 0&&(ae===null?R=n.TEXTURE0+Q-1:R=ae);let N=oe[R];N===void 0&&(N={type:void 0,texture:void 0},oe[R]=N),(N.type!==F||N.texture!==A)&&(ae!==R&&(n.activeTexture(R),ae=R),n.bindTexture(F,A||H[F]),N.type=F,N.texture=A)}function xt(){let F=oe[ae];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function rt(){try{n.compressedTexImage2D(...arguments)}catch(F){je("WebGLState:",F)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(F){je("WebGLState:",F)}}function _(){try{n.texSubImage2D(...arguments)}catch(F){je("WebGLState:",F)}}function k(){try{n.texSubImage3D(...arguments)}catch(F){je("WebGLState:",F)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(F){je("WebGLState:",F)}}function ne(){try{n.compressedTexSubImage3D(...arguments)}catch(F){je("WebGLState:",F)}}function fe(){try{n.texStorage2D(...arguments)}catch(F){je("WebGLState:",F)}}function ye(){try{n.texStorage3D(...arguments)}catch(F){je("WebGLState:",F)}}function se(){try{n.texImage2D(...arguments)}catch(F){je("WebGLState:",F)}}function re(){try{n.texImage3D(...arguments)}catch(F){je("WebGLState:",F)}}function be(F){return h[F]!==void 0?h[F]:n.getParameter(F)}function ze(F,A){h[F]!==A&&(n.pixelStorei(F,A),h[F]=A)}function Me(F){ft.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),ft.copy(F))}function ve(F){Je.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Je.copy(F))}function Fe(F,A){let R=c.get(A);R===void 0&&(R=new WeakMap,c.set(A,R));let N=R.get(F);N===void 0&&(N=n.getUniformBlockIndex(A,F.name),R.set(F,N))}function We(F,A){let N=c.get(A).get(F);l.get(A)!==N&&(n.uniformBlockBinding(A,N,F.__bindingPointIndex),l.set(A,N))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},ae=null,oe={},d={},f=new WeakMap,p=[],x=null,g=!1,m=null,y=null,T=null,v=null,E=null,M=null,P=null,b=new Ve(0,0,0),w=0,L=!1,U=null,z=null,G=null,q=null,V=null,ft.set(0,0,n.canvas.width,n.canvas.height),Je.set(0,0,n.canvas.width,n.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:Z,disable:me,bindFramebuffer:Pe,drawBuffers:_e,useProgram:De,setBlending:$,setMaterial:ue,setFlipSided:ce,setCullFace:ge,setLineWidth:He,setPolygonOffset:Be,setScissorTest:Oe,activeTexture:$e,bindTexture:D,unbindTexture:xt,compressedTexImage2D:rt,compressedTexImage3D:C,texImage2D:se,texImage3D:re,pixelStorei:ze,getParameter:be,updateUBOMapping:Fe,uniformBlockBinding:We,texStorage2D:fe,texStorage3D:ye,texSubImage2D:_,texSubImage3D:k,compressedTexSubImage2D:Y,compressedTexSubImage3D:ne,scissor:Me,viewport:ve,reset:Qe}}function rv(n,e,t,i,s,a,r){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new le,u=new WeakMap,h=new Set,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,_){return p?new OffscreenCanvas(C,_):La("canvas")}function g(C,_,k){let Y=1,ne=rt(C);if((ne.width>k||ne.height>k)&&(Y=k/Math.max(ne.width,ne.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let fe=Math.floor(Y*ne.width),ye=Math.floor(Y*ne.height);d===void 0&&(d=x(fe,ye));let se=_?x(fe,ye):d;return se.width=fe,se.height=ye,se.getContext("2d").drawImage(C,0,0,fe,ye),Xe("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+fe+"x"+ye+")."),se}else return"data"in C&&Xe("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),C;return C}function m(C){return C.generateMipmaps}function y(C){n.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(C,_,k,Y,ne,fe=!1){if(C!==null){if(n[C]!==void 0)return n[C];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ye;Y&&(ye=e.get("EXT_texture_norm16"),ye||Xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let se=_;if(_===n.RED&&(k===n.FLOAT&&(se=n.R32F),k===n.HALF_FLOAT&&(se=n.R16F),k===n.UNSIGNED_BYTE&&(se=n.R8),k===n.UNSIGNED_SHORT&&ye&&(se=ye.R16_EXT),k===n.SHORT&&ye&&(se=ye.R16_SNORM_EXT)),_===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(se=n.R8UI),k===n.UNSIGNED_SHORT&&(se=n.R16UI),k===n.UNSIGNED_INT&&(se=n.R32UI),k===n.BYTE&&(se=n.R8I),k===n.SHORT&&(se=n.R16I),k===n.INT&&(se=n.R32I)),_===n.RG&&(k===n.FLOAT&&(se=n.RG32F),k===n.HALF_FLOAT&&(se=n.RG16F),k===n.UNSIGNED_BYTE&&(se=n.RG8),k===n.UNSIGNED_SHORT&&ye&&(se=ye.RG16_EXT),k===n.SHORT&&ye&&(se=ye.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(se=n.RG8UI),k===n.UNSIGNED_SHORT&&(se=n.RG16UI),k===n.UNSIGNED_INT&&(se=n.RG32UI),k===n.BYTE&&(se=n.RG8I),k===n.SHORT&&(se=n.RG16I),k===n.INT&&(se=n.RG32I)),_===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(se=n.RGB8UI),k===n.UNSIGNED_SHORT&&(se=n.RGB16UI),k===n.UNSIGNED_INT&&(se=n.RGB32UI),k===n.BYTE&&(se=n.RGB8I),k===n.SHORT&&(se=n.RGB16I),k===n.INT&&(se=n.RGB32I)),_===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(se=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(se=n.RGBA16UI),k===n.UNSIGNED_INT&&(se=n.RGBA32UI),k===n.BYTE&&(se=n.RGBA8I),k===n.SHORT&&(se=n.RGBA16I),k===n.INT&&(se=n.RGBA32I)),_===n.RGB&&(k===n.UNSIGNED_SHORT&&ye&&(se=ye.RGB16_EXT),k===n.SHORT&&ye&&(se=ye.RGB16_SNORM_EXT),k===n.UNSIGNED_INT_5_9_9_9_REV&&(se=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(se=n.R11F_G11F_B10F)),_===n.RGBA){let re=fe?Nr:ct.getTransfer(ne);k===n.FLOAT&&(se=n.RGBA32F),k===n.HALF_FLOAT&&(se=n.RGBA16F),k===n.UNSIGNED_BYTE&&(se=re===_t?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT&&ye&&(se=ye.RGBA16_EXT),k===n.SHORT&&ye&&(se=ye.RGBA16_SNORM_EXT),k===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function E(C,_){let k;return C?_===null||_===li||_===Ya?k=n.DEPTH24_STENCIL8:_===Wn?k=n.DEPTH32F_STENCIL8:_===$a&&(k=n.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===li||_===Ya?k=n.DEPTH_COMPONENT24:_===Wn?k=n.DEPTH_COMPONENT32F:_===$a&&(k=n.DEPTH_COMPONENT16),k}function M(C,_){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==rn&&C.minFilter!==cn?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function P(C){let _=C.target;_.removeEventListener("dispose",P),w(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&h.delete(_)}function b(C){let _=C.target;_.removeEventListener("dispose",b),U(_)}function w(C){let _=i.get(C);if(_.__webglInit===void 0)return;let k=C.source,Y=f.get(k);if(Y){let ne=Y[_.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&L(C),Object.keys(Y).length===0&&f.delete(k)}i.remove(C)}function L(C){let _=i.get(C);n.deleteTexture(_.__webglTexture);let k=C.source,Y=f.get(k);delete Y[_.__cacheKey],r.memory.textures--}function U(C){let _=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let ne=0;ne<_.__webglFramebuffer[Y].length;ne++)n.deleteFramebuffer(_.__webglFramebuffer[Y][ne]);else n.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)n.deleteFramebuffer(_.__webglFramebuffer[Y]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let k=C.textures;for(let Y=0,ne=k.length;Y<ne;Y++){let fe=i.get(k[Y]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),r.memory.textures--),i.remove(k[Y])}i.remove(C)}let z=0;function G(){z=0}function q(){return z}function V(C){z=C}function Q(){let C=z;return C>=s.maxTextures&&Xe("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,C}function j(C){let _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function he(C,_){let k=i.get(C);if(C.isVideoTexture&&D(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){let Y=C.image;if(Y===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{me(k,C,_);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+_)}function te(C,_){let k=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){me(k,C,_);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+_)}function ae(C,_){let k=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){me(k,C,_);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+_)}function oe(C,_){let k=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&k.__version!==C.version){Pe(k,C,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+_)}let Ne={[Pa]:n.REPEAT,[_i]:n.CLAMP_TO_EDGE,[$l]:n.MIRRORED_REPEAT},Ce={[rn]:n.NEAREST,[ep]:n.NEAREST_MIPMAP_NEAREST,[Mo]:n.NEAREST_MIPMAP_LINEAR,[cn]:n.LINEAR,[Sc]:n.LINEAR_MIPMAP_NEAREST,[Ms]:n.LINEAR_MIPMAP_LINEAR},ft={[sp]:n.NEVER,[cp]:n.ALWAYS,[ap]:n.LESS,[ou]:n.LEQUAL,[rp]:n.EQUAL,[lu]:n.GEQUAL,[op]:n.GREATER,[lp]:n.NOTEQUAL};function Je(C,_){if(_.type===Wn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===cn||_.magFilter===Sc||_.magFilter===Mo||_.magFilter===Ms||_.minFilter===cn||_.minFilter===Sc||_.minFilter===Mo||_.minFilter===Ms)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,Ne[_.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,Ne[_.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,Ne[_.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Ce[_.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Ce[_.minFilter]),_.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,ft[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===rn||_.minFilter!==Mo&&_.minFilter!==Ms||_.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function at(C,_){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",P));let Y=_.source,ne=f.get(Y);ne===void 0&&(ne={},f.set(Y,ne));let fe=j(_);if(fe!==C.__cacheKey){ne[fe]===void 0&&(ne[fe]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,k=!0),ne[fe].usedTimes++;let ye=ne[C.__cacheKey];ye!==void 0&&(ne[C.__cacheKey].usedTimes--,ye.usedTimes===0&&L(_)),C.__cacheKey=fe,C.__webglTexture=ne[fe].texture}return k}function H(C,_,k){return Math.floor(Math.floor(C/k)/_)}function Z(C,_,k,Y){let fe=C.updateRanges;if(fe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,k,Y,_.data);else{fe.sort((ze,Me)=>ze.start-Me.start);let ye=0;for(let ze=1;ze<fe.length;ze++){let Me=fe[ye],ve=fe[ze],Fe=Me.start+Me.count,We=H(ve.start,_.width,4),Qe=H(Me.start,_.width,4);ve.start<=Fe+1&&We===Qe&&H(ve.start+ve.count-1,_.width,4)===We?Me.count=Math.max(Me.count,ve.start+ve.count-Me.start):(++ye,fe[ye]=ve)}fe.length=ye+1;let se=t.getParameter(n.UNPACK_ROW_LENGTH),re=t.getParameter(n.UNPACK_SKIP_PIXELS),be=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let ze=0,Me=fe.length;ze<Me;ze++){let ve=fe[ze],Fe=Math.floor(ve.start/4),We=Math.ceil(ve.count/4),Qe=Fe%_.width,F=Math.floor(Fe/_.width),A=We,R=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Qe),t.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,Qe,F,A,R,k,Y,_.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,se),t.pixelStorei(n.UNPACK_SKIP_PIXELS,re),t.pixelStorei(n.UNPACK_SKIP_ROWS,be)}}function me(C,_,k){let Y=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=n.TEXTURE_3D);let ne=at(C,_),fe=_.source;t.bindTexture(Y,C.__webglTexture,n.TEXTURE0+k);let ye=i.get(fe);if(fe.version!==ye.__version||ne===!0){if(t.activeTexture(n.TEXTURE0+k),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let R=ct.getPrimaries(ct.workingColorSpace),N=_.colorSpace===Ji?null:ct.getPrimaries(_.colorSpace),O=_.colorSpace===Ji||R===N?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,O)}t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let re=g(_.image,!1,s.maxTextureSize);re=xt(_,re);let be=a.convert(_.format,_.colorSpace),ze=a.convert(_.type),Me=v(_.internalFormat,be,ze,_.normalized,_.colorSpace,_.isVideoTexture);Je(Y,_);let ve,Fe=_.mipmaps,We=_.isVideoTexture!==!0,Qe=ye.__version===void 0||ne===!0,F=fe.dataReady,A=M(_,re);if(_.isDepthTexture)Me=E(_.format===Ss,_.type),Qe&&(We?t.texStorage2D(n.TEXTURE_2D,1,Me,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Me,re.width,re.height,0,be,ze,null));else if(_.isDataTexture)if(Fe.length>0){We&&Qe&&t.texStorage2D(n.TEXTURE_2D,A,Me,Fe[0].width,Fe[0].height);for(let R=0,N=Fe.length;R<N;R++)ve=Fe[R],We?F&&t.texSubImage2D(n.TEXTURE_2D,R,0,0,ve.width,ve.height,be,ze,ve.data):t.texImage2D(n.TEXTURE_2D,R,Me,ve.width,ve.height,0,be,ze,ve.data);_.generateMipmaps=!1}else We?(Qe&&t.texStorage2D(n.TEXTURE_2D,A,Me,re.width,re.height),F&&Z(_,re,be,ze)):t.texImage2D(n.TEXTURE_2D,0,Me,re.width,re.height,0,be,ze,re.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){We&&Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,A,Me,Fe[0].width,Fe[0].height,re.depth);for(let R=0,N=Fe.length;R<N;R++)if(ve=Fe[R],_.format!==Xn)if(be!==null)if(We){if(F)if(_.layerUpdates.size>0){let O=Jh(ve.width,ve.height,_.format,_.type);for(let J of _.layerUpdates){let xe=ve.data.subarray(J*O/ve.data.BYTES_PER_ELEMENT,(J+1)*O/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,R,0,0,J,ve.width,ve.height,1,be,xe)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,R,0,0,0,ve.width,ve.height,re.depth,be,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,R,Me,ve.width,ve.height,re.depth,0,ve.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,R,0,0,0,ve.width,ve.height,re.depth,be,ze,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,R,Me,ve.width,ve.height,re.depth,0,be,ze,ve.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{We&&Qe&&t.texStorage2D(n.TEXTURE_2D,A,Me,Fe[0].width,Fe[0].height);for(let R=0,N=Fe.length;R<N;R++)ve=Fe[R],_.format!==Xn?be!==null?We?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,R,0,0,ve.width,ve.height,be,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,R,Me,ve.width,ve.height,0,ve.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?F&&t.texSubImage2D(n.TEXTURE_2D,R,0,0,ve.width,ve.height,be,ze,ve.data):t.texImage2D(n.TEXTURE_2D,R,Me,ve.width,ve.height,0,be,ze,ve.data)}else if(_.isDataArrayTexture)if(We){if(Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,A,Me,re.width,re.height,re.depth),F)if(_.layerUpdates.size>0){let R=Jh(re.width,re.height,_.format,_.type);for(let N of _.layerUpdates){let O=re.data.subarray(N*R/re.data.BYTES_PER_ELEMENT,(N+1)*R/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,N,re.width,re.height,1,be,ze,O)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,be,ze,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,re.width,re.height,re.depth,0,be,ze,re.data);else if(_.isData3DTexture)We?(Qe&&t.texStorage3D(n.TEXTURE_3D,A,Me,re.width,re.height,re.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,be,ze,re.data)):t.texImage3D(n.TEXTURE_3D,0,Me,re.width,re.height,re.depth,0,be,ze,re.data);else if(_.isFramebufferTexture){if(Qe)if(We)t.texStorage2D(n.TEXTURE_2D,A,Me,re.width,re.height);else{let R=re.width,N=re.height;for(let O=0;O<A;O++)t.texImage2D(n.TEXTURE_2D,O,Me,R,N,0,be,ze,null),R>>=1,N>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let R=n.canvas;if(R.hasAttribute("layoutsubtree")||R.setAttribute("layoutsubtree","true"),re.parentNode!==R){R.appendChild(re),h.add(_),R.onpaint=N=>{let O=N.changedElements;for(let J of h)O.includes(J.image)&&(J.needsUpdate=!0)},R.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,re);else{let O=n.RGBA,J=n.RGBA,xe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,O,J,xe,re)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Fe.length>0){if(We&&Qe){let R=rt(Fe[0]);t.texStorage2D(n.TEXTURE_2D,A,Me,R.width,R.height)}for(let R=0,N=Fe.length;R<N;R++)ve=Fe[R],We?F&&t.texSubImage2D(n.TEXTURE_2D,R,0,0,be,ze,ve):t.texImage2D(n.TEXTURE_2D,R,Me,be,ze,ve);_.generateMipmaps=!1}else if(We){if(Qe){let R=rt(re);t.texStorage2D(n.TEXTURE_2D,A,Me,R.width,R.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,ze,re)}else t.texImage2D(n.TEXTURE_2D,0,Me,be,ze,re);m(_)&&y(Y),ye.__version=fe.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Pe(C,_,k){if(_.image.length!==6)return;let Y=at(C,_),ne=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+k);let fe=i.get(ne);if(ne.version!==fe.__version||Y===!0){t.activeTexture(n.TEXTURE0+k);let ye=ct.getPrimaries(ct.workingColorSpace),se=_.colorSpace===Ji?null:ct.getPrimaries(_.colorSpace),re=_.colorSpace===Ji||ye===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let be=_.isCompressedTexture||_.image[0].isCompressedTexture,ze=_.image[0]&&_.image[0].isDataTexture,Me=[];for(let J=0;J<6;J++)!be&&!ze?Me[J]=g(_.image[J],!0,s.maxCubemapSize):Me[J]=ze?_.image[J].image:_.image[J],Me[J]=xt(_,Me[J]);let ve=Me[0],Fe=a.convert(_.format,_.colorSpace),We=a.convert(_.type),Qe=v(_.internalFormat,Fe,We,_.normalized,_.colorSpace),F=_.isVideoTexture!==!0,A=fe.__version===void 0||Y===!0,R=ne.dataReady,N=M(_,ve);Je(n.TEXTURE_CUBE_MAP,_);let O;if(be){F&&A&&t.texStorage2D(n.TEXTURE_CUBE_MAP,N,Qe,ve.width,ve.height);for(let J=0;J<6;J++){O=Me[J].mipmaps;for(let xe=0;xe<O.length;xe++){let Se=O[xe];_.format!==Xn?Fe!==null?F?R&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe,0,0,Se.width,Se.height,Fe,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe,Qe,Se.width,Se.height,0,Se.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?R&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe,0,0,Se.width,Se.height,Fe,We,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe,Qe,Se.width,Se.height,0,Fe,We,Se.data)}}}else{if(O=_.mipmaps,F&&A){O.length>0&&N++;let J=rt(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,N,Qe,J.width,J.height)}for(let J=0;J<6;J++)if(ze){F?R&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Me[J].width,Me[J].height,Fe,We,Me[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Qe,Me[J].width,Me[J].height,0,Fe,We,Me[J].data);for(let xe=0;xe<O.length;xe++){let ot=O[xe].image[J].image;F?R&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe+1,0,0,ot.width,ot.height,Fe,We,ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe+1,Qe,ot.width,ot.height,0,Fe,We,ot.data)}}else{F?R&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Fe,We,Me[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Qe,Fe,We,Me[J]);for(let xe=0;xe<O.length;xe++){let Se=O[xe];F?R&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe+1,0,0,Fe,We,Se.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe+1,Qe,Fe,We,Se.image[J])}}}m(_)&&y(n.TEXTURE_CUBE_MAP),fe.__version=ne.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function _e(C,_,k,Y,ne,fe){let ye=a.convert(k.format,k.colorSpace),se=a.convert(k.type),re=v(k.internalFormat,ye,se,k.normalized,k.colorSpace),be=i.get(_),ze=i.get(k);if(ze.__renderTarget=_,!be.__hasExternalTextures){let Me=Math.max(1,_.width>>fe),ve=Math.max(1,_.height>>fe);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,fe,re,Me,ve,_.depth,0,ye,se,null):t.texImage2D(ne,fe,re,Me,ve,0,ye,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),$e(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,ne,ze.__webglTexture,0,Oe(_)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,ne,ze.__webglTexture,fe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(C,_,k){if(n.bindRenderbuffer(n.RENDERBUFFER,C),_.depthBuffer){let Y=_.depthTexture,ne=Y&&Y.isDepthTexture?Y.type:null,fe=E(_.stencilBuffer,ne),ye=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;$e(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Oe(_),fe,_.width,_.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe(_),fe,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,fe,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,C)}else{let Y=_.textures;for(let ne=0;ne<Y.length;ne++){let fe=Y[ne],ye=a.convert(fe.format,fe.colorSpace),se=a.convert(fe.type),re=v(fe.internalFormat,ye,se,fe.normalized,fe.colorSpace);$e(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Oe(_),re,_.width,_.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe(_),re,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,re,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ye(C,_,k){let Y=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=i.get(_.depthTexture);if(ne.__renderTarget=_,(!ne.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,_.depthTexture.addEventListener("dispose",P)),ne.__webglTexture===void 0){ne.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),Je(n.TEXTURE_CUBE_MAP,_.depthTexture);let be=a.convert(_.depthTexture.format),ze=a.convert(_.depthTexture.type),Me;_.depthTexture.format===vi?Me=n.DEPTH_COMPONENT24:_.depthTexture.format===Ss&&(Me=n.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Me,_.width,_.height,0,be,ze,null)}}else he(_.depthTexture,0);let fe=ne.__webglTexture,ye=Oe(_),se=Y?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,re=_.depthTexture.format===Ss?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===vi)$e(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,se,fe,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,re,se,fe,0);else if(_.depthTexture.format===Ss)$e(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,se,fe,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,re,se,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ee(C){let _=i.get(C),k=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){let Y=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){let ne=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",ne)};Y.addEventListener("dispose",ne),_.__depthDisposeCallback=ne}_.__boundDepthTexture=Y}if(C.depthTexture&&!_.__autoAllocateDepthBuffer)if(k)for(let Y=0;Y<6;Y++)Ye(_.__webglFramebuffer[Y],C,Y);else{let Y=C.texture.mipmaps;Y&&Y.length>0?Ye(_.__webglFramebuffer[0],C,0):Ye(_.__webglFramebuffer,C,0)}else if(k){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=n.createRenderbuffer(),De(_.__webglDepthbuffer[Y],C,!1);else{let ne=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=_.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,fe)}}else{let Y=C.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),De(_.__webglDepthbuffer,C,!1);else{let ne=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,fe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function $(C,_,k){let Y=i.get(C);_!==void 0&&_e(Y.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&ee(C)}function ue(C){let _=C.texture,k=i.get(C),Y=i.get(_);C.addEventListener("dispose",b);let ne=C.textures,fe=C.isWebGLCubeRenderTarget===!0,ye=ne.length>1;if(ye||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=_.version,r.memory.textures++),fe){k.__webglFramebuffer=[];for(let se=0;se<6;se++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[se]=[];for(let re=0;re<_.mipmaps.length;re++)k.__webglFramebuffer[se][re]=n.createFramebuffer()}else k.__webglFramebuffer[se]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let se=0;se<_.mipmaps.length;se++)k.__webglFramebuffer[se]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(ye)for(let se=0,re=ne.length;se<re;se++){let be=i.get(ne[se]);be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture(),r.memory.textures++)}if(C.samples>0&&$e(C)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let se=0;se<ne.length;se++){let re=ne[se];k.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[se]);let be=a.convert(re.format,re.colorSpace),ze=a.convert(re.type),Me=v(re.internalFormat,be,ze,re.normalized,re.colorSpace,C.isXRRenderTarget===!0),ve=Oe(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,Me,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,k.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),De(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(fe){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Je(n.TEXTURE_CUBE_MAP,_);for(let se=0;se<6;se++)if(_.mipmaps&&_.mipmaps.length>0)for(let re=0;re<_.mipmaps.length;re++)_e(k.__webglFramebuffer[se][re],C,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,re);else _e(k.__webglFramebuffer[se],C,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(_)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let se=0,re=ne.length;se<re;se++){let be=ne[se],ze=i.get(be),Me=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Me=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Me,ze.__webglTexture),Je(Me,be),_e(k.__webglFramebuffer,C,be,n.COLOR_ATTACHMENT0+se,Me,0),m(be)&&y(Me)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(se=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,Y.__webglTexture),Je(se,_),_.mipmaps&&_.mipmaps.length>0)for(let re=0;re<_.mipmaps.length;re++)_e(k.__webglFramebuffer[re],C,_,n.COLOR_ATTACHMENT0,se,re);else _e(k.__webglFramebuffer,C,_,n.COLOR_ATTACHMENT0,se,0);m(_)&&y(se),t.unbindTexture()}C.depthBuffer&&ee(C)}function ce(C){let _=C.textures;for(let k=0,Y=_.length;k<Y;k++){let ne=_[k];if(m(ne)){let fe=T(C),ye=i.get(ne).__webglTexture;t.bindTexture(fe,ye),y(fe),t.unbindTexture()}}}let ge=[],He=[];function Be(C){if(C.samples>0){if($e(C)===!1){let _=C.textures,k=C.width,Y=C.height,ne=n.COLOR_BUFFER_BIT,fe=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(C),se=_.length>1;if(se)for(let be=0;be<_.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);let re=C.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let be=0;be<_.length;be++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[be]);let ze=i.get(_[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ze,0)}n.blitFramebuffer(0,0,k,Y,0,0,k,Y,ne,n.NEAREST),l===!0&&(ge.length=0,He.length=0,ge.push(n.COLOR_ATTACHMENT0+be),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(ge.push(fe),He.push(fe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,He)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ge))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let be=0;be<_.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,ye.__webglColorRenderbuffer[be]);let ze=i.get(_[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let _=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Oe(C){return Math.min(s.maxSamples,C.samples)}function $e(C){let _=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function D(C){let _=r.render.frame;u.get(C)!==_&&(u.set(C,_),C.update())}function xt(C,_){let k=C.colorSpace,Y=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==Lr&&k!==Ji&&(ct.getTransfer(k)===_t?(Y!==Xn||ne!==wn)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",k)),_}function rt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=G,this.getTextureUnits=q,this.setTextureUnits=V,this.setTexture2D=he,this.setTexture2DArray=te,this.setTexture3D=ae,this.setTextureCube=oe,this.rebindTextures=$,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=$e,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ov(n,e){function t(i,s=Ji){let a,r=ct.getTransfer(s);if(i===wn)return n.UNSIGNED_BYTE;if(i===Tc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Hh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===zh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Oh)return n.BYTE;if(i===Fh)return n.SHORT;if(i===$a)return n.UNSIGNED_SHORT;if(i===Ec)return n.INT;if(i===li)return n.UNSIGNED_INT;if(i===Wn)return n.FLOAT;if(i===un)return n.HALF_FLOAT;if(i===kh)return n.ALPHA;if(i===Vh)return n.RGB;if(i===Xn)return n.RGBA;if(i===vi)return n.DEPTH_COMPONENT;if(i===Ss)return n.DEPTH_STENCIL;if(i===Ac)return n.RED;if(i===Rc)return n.RED_INTEGER;if(i===Es)return n.RG;if(i===Cc)return n.RG_INTEGER;if(i===Pc)return n.RGBA_INTEGER;if(i===So||i===Eo||i===To||i===wo)if(r===_t)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===So)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Eo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===To)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===So)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Eo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===To)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ic||i===Lc||i===Nc||i===Dc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Ic)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Lc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Nc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Dc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qc||i===Uc||i===Bc||i===Oc||i===Fc||i===Ao||i===Hc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===qc||i===Uc)return r===_t?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Bc)return r===_t?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Oc)return a.COMPRESSED_R11_EAC;if(i===Fc)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Ao)return a.COMPRESSED_RG11_EAC;if(i===Hc)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===zc||i===kc||i===Vc||i===Gc||i===Wc||i===Xc||i===$c||i===Yc||i===jc||i===Jc||i===Zc||i===Kc||i===Qc||i===eu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===zc)return r===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===kc)return r===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vc)return r===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gc)return r===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wc)return r===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xc)return r===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$c)return r===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yc)return r===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===jc)return r===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jc)return r===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zc)return r===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Kc)return r===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qc)return r===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===eu)return r===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===tu||i===nu||i===iu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===tu)return r===_t?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===iu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===su||i===au||i===Ro||i===ru)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===su)return a.COMPRESSED_RED_RGTC1_EXT;if(i===au)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ro)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ru)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ya?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var lv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ud=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new $r(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Wt({vertexShader:lv,fragmentShader:cv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ie(new tn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hd=class extends yi{constructor(e,t){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null,x=typeof XRWebGLBinding<"u",g=new ud,m={},y=t.getContextAttributes(),T=null,v=null,E=[],M=[],P=new le,b=null,w=null,L=new Jt;L.viewport=new qt;let U=new Jt;U.viewport=new qt;let z=[L,U],G=new _c,q=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Z=E[H];return Z===void 0&&(Z=new qa,E[H]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(H){let Z=E[H];return Z===void 0&&(Z=new qa,E[H]=Z),Z.getGripSpace()},this.getHand=function(H){let Z=E[H];return Z===void 0&&(Z=new qa,E[H]=Z),Z.getHandSpace()};function Q(H){let Z=M.indexOf(H.inputSource);if(Z===-1)return;let me=E[Z];me!==void 0&&(me.update(H.inputSource,H.frame,c||r),me.dispatchEvent({type:H.type,data:H.inputSource}))}function j(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",he);for(let H=0;H<E.length;H++){let Z=M[H];Z!==null&&(M[H]=null,E[H].disconnect(Z))}q=null,V=null,g.reset();for(let H in m)delete m[H];if(e.setRenderTarget(T),f=null,d=null,h=null,s=null,v=null,at.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(P.width,P.height,!1),w!==null){let H=w.camera;H.fov=w.fov,H.zoom=w.zoom,H.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){a=H,i.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,i.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",j),s.addEventListener("inputsourceschange",he),y.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Pe=null,_e=null;y.depth&&(_e=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=y.stencil?Ss:vi,Pe=y.stencil?Ya:li);let De={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:a};h=this.getBinding(),d=h.createProjectionLayer(De),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Kt(d.textureWidth,d.textureHeight,{format:Xn,type:wn,depthTexture:new ps(d.textureWidth,d.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let me={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Kt(f.framebufferWidth,f.framebufferHeight,{format:Xn,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),at.setContext(s),at.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function he(H){for(let Z=0;Z<H.removed.length;Z++){let me=H.removed[Z],Pe=M.indexOf(me);Pe>=0&&(M[Pe]=null,E[Pe].disconnect(me))}for(let Z=0;Z<H.added.length;Z++){let me=H.added[Z],Pe=M.indexOf(me);if(Pe===-1){for(let De=0;De<E.length;De++)if(De>=M.length){M.push(me),Pe=De;break}else if(M[De]===null){M[De]=me,Pe=De;break}if(Pe===-1)break}let _e=E[Pe];_e&&_e.connect(me)}}let te=new I,ae=new I;function oe(H,Z,me){te.setFromMatrixPosition(Z.matrixWorld),ae.setFromMatrixPosition(me.matrixWorld);let Pe=te.distanceTo(ae),_e=Z.projectionMatrix.elements,De=me.projectionMatrix.elements,Ye=_e[14]/(_e[10]-1),ee=_e[14]/(_e[10]+1),$=(_e[9]+1)/_e[5],ue=(_e[9]-1)/_e[5],ce=(_e[8]-1)/_e[0],ge=(De[8]+1)/De[0],He=Ye*ce,Be=Ye*ge,Oe=Pe/(-ce+ge),$e=Oe*-ce;if(Z.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX($e),H.translateZ(Oe),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),_e[10]===-1)H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let D=Ye+Oe,xt=ee+Oe,rt=He-$e,C=Be+(Pe-$e),_=$*ee/xt*D,k=ue*ee/xt*D;H.projectionMatrix.makePerspective(rt,C,_,k,D,xt),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function Ne(H,Z){Z===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Z.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let Z=H.near,me=H.far;g.texture!==null&&(g.depthNear>0&&(Z=g.depthNear),g.depthFar>0&&(me=g.depthFar)),G.near=U.near=L.near=Z,G.far=U.far=L.far=me,(q!==G.near||V!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),q=G.near,V=G.far),G.layers.mask=H.layers.mask|6,L.layers.mask=G.layers.mask&-5,U.layers.mask=G.layers.mask&-3;let Pe=H.parent,_e=G.cameras;Ne(G,Pe);for(let De=0;De<_e.length;De++)Ne(_e[De],Pe);_e.length===2?oe(G,L,U):G.projectionMatrix.copy(L.projectionMatrix),w===null&&H.isPerspectiveCamera&&(w={camera:H,fov:H.fov,zoom:H.zoom}),Ce(H,G,Pe)};function Ce(H,Z,me){me===null?H.matrix.copy(Z.matrixWorld):(H.matrix.copy(me.matrixWorld),H.matrix.invert(),H.matrix.multiply(Z.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=qr*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(G)},this.getCameraTexture=function(H){return m[H]};let ft=null;function Je(H,Z){if(u=Z.getViewerPose(c||r),p=Z,u!==null){let me=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Pe=!1;me.length!==G.cameras.length&&(G.cameras.length=0,Pe=!0);for(let ee=0;ee<me.length;ee++){let $=me[ee],ue=null;if(f!==null)ue=f.getViewport($);else{let ge=h.getViewSubImage(d,$);ue=ge.viewport,ee===0&&(e.setRenderTargetTextures(v,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(v))}let ce=z[ee];ce===void 0&&(ce=new Jt,ce.layers.enable(ee),ce.viewport=new qt,z[ee]=ce),ce.matrix.fromArray($.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray($.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(ue.x,ue.y,ue.width,ue.height),ee===0&&(G.matrix.copy(ce.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Pe===!0&&G.cameras.push(ce)}let _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=i.getBinding();let ee=h.getDepthInformation(me[0]);ee&&ee.isValid&&ee.texture&&g.init(ee,s.renderState)}if(_e&&_e.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let ee=0;ee<me.length;ee++){let $=me[ee].camera;if($){let ue=m[$];ue||(ue=new $r,m[$]=ue);let ce=h.getCameraImage($);ue.sourceTexture=ce}}}}for(let me=0;me<E.length;me++){let Pe=M[me],_e=E[me];Pe!==null&&_e!==void 0&&_e.update(Pe,Z,c||r)}ft&&ft(H,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),p=null}let at=new Vp;at.setAnimationLoop(Je),this.setAnimationLoop=function(H){ft=H},this.dispose=function(){}}},uv=new mt,jp=new Ze;jp.set(-1,0,0,0,1,0,0,0,1);function hv(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,$h(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,y,T,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?a(g,m):m.isMeshLambertMaterial?(a(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(a(g,m),h(g,m)):m.isMeshPhongMaterial?(a(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(a(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(a(g,m),p(g,m)):m.isMeshDepthMaterial?a(g,m):m.isMeshDistanceMaterial?(a(g,m),x(g,m)):m.isMeshNormalMaterial?a(g,m):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,y,T):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Qt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Qt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let y=e.get(m),T=y.envMap,v=y.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(uv.makeRotationFromEuler(v)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(jp),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=T*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Qt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function dv(n,e,t,i){let s={},a={},r=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){let M=E.program;i.uniformBlockBinding(v,M)}function c(v,E){let M=s[v.id];M===void 0&&(g(v),M=u(v),s[v.id]=M,v.addEventListener("dispose",y));let P=E.program;i.updateUBOMapping(v,P);let b=e.render.frame;a[v.id]!==b&&(d(v),a[v.id]=b)}function u(v){let E=h();v.__bindingPointIndex=E;let M=n.createBuffer(),P=v.__size,b=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,P,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,M),M}function h(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let E=s[v.id],M=v.uniforms,P=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let b=0,w=M.length;b<w;b++){let L=M[b];if(Array.isArray(L))for(let U=0,z=L.length;U<z;U++)f(L[U],b,U,P);else f(L,b,0,P)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,E,M,P){if(x(v,E,M,P)===!0){let b=v.__offset,w=v.value;if(Array.isArray(w)){let L=0;for(let U=0;U<w.length;U++){let z=w[U],G=m(z);p(z,v.__data,L),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(L+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(w,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,b,v.__data)}}function p(v,E,M){typeof v=="number"||typeof v=="boolean"?E[0]=v:v.isMatrix3?(E[0]=v.elements[0],E[1]=v.elements[1],E[2]=v.elements[2],E[3]=0,E[4]=v.elements[3],E[5]=v.elements[4],E[6]=v.elements[5],E[7]=0,E[8]=v.elements[6],E[9]=v.elements[7],E[10]=v.elements[8],E[11]=0):ArrayBuffer.isView(v)?E.set(new v.constructor(v.buffer,v.byteOffset,E.length)):v.toArray(E,M)}function x(v,E,M,P){let b=v.value,w=E+"_"+M;if(P[w]===void 0)return typeof b=="number"||typeof b=="boolean"?P[w]=b:ArrayBuffer.isView(b)?P[w]=b.slice():P[w]=b.clone(),!0;{let L=P[w];if(typeof b=="number"||typeof b=="boolean"){if(L!==b)return P[w]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(L.equals(b)===!1)return L.copy(b),!0}}return!1}function g(v){let E=v.uniforms,M=0,P=16;for(let w=0,L=E.length;w<L;w++){let U=Array.isArray(E[w])?E[w]:[E[w]];for(let z=0,G=U.length;z<G;z++){let q=U[z],V=Array.isArray(q.value)?q.value:[q.value];for(let Q=0,j=V.length;Q<j;Q++){let he=V[Q],te=m(he),ae=M%P,oe=ae%te.boundary,Ne=ae+oe;M+=oe,Ne!==0&&P-Ne<te.storage&&(M+=P-Ne),q.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=M,M+=te.storage}}}let b=M%P;return b>0&&(M+=P-b),v.__size=M,v.__cache={},this}function m(v){let E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):Xe("WebGLRenderer: Unsupported uniform value type.",v),E}function y(v){let E=v.target;E.removeEventListener("dispose",y);let M=r.indexOf(E.__bindingPointIndex);r.splice(M,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete a[E.id]}function T(){for(let v in s)n.deleteBuffer(s[v]);r=[],s={},a={}}return{bind:l,update:c,dispose:T}}var fv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ei=null;function pv(){return Ei===null&&(Ei=new Gr(fv,16,16,Es,un),Ei.name="DFG_LUT",Ei.minFilter=cn,Ei.magFilter=cn,Ei.wrapS=_i,Ei.wrapT=_i,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}var du=class{constructor(e={}){let{canvas:t=up(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=wn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;let x=f,g=new Set([Pc,Cc,Rc]),m=new Set([wn,li,$a,Ya,Tc,wc]),y=new Uint32Array(4),T=new Int32Array(4),v=new I,E=null,M=null,P=[],b=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,U=!1,z=null,G=null,q=null,V=null;this._outputColorSpace=Ut;let Q=0,j=0,he=null,te=-1,ae=null,oe=new qt,Ne=new qt,Ce=null,ft=new Ve(0),Je=0,at=t.width,H=t.height,Z=1,me=null,Pe=null,_e=new qt(0,0,at,H),De=new qt(0,0,at,H),Ye=!1,ee=new Ba,$=!1,ue=!1,ce=new mt,ge=new I,He=new qt,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Oe=!1;function $e(){return he===null?Z:1}let D=i;function xt(S,B){return t.getContext(S,B)}let rt,C,_,k,Y,ne,fe,ye,se,re,be,ze,Me,ve,Fe,We,Qe,F,A,R,N,O,J;try{let S={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",ot,!1),t.addEventListener("webglcontextrestored",nt,!1),t.addEventListener("webglcontextcreationerror",$t,!1),D===null){let B="webgl2";if(D=xt(B,S),D===null)throw xt(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}xe()}catch(S){throw t.removeEventListener("webglcontextlost",ot,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",$t,!1),je("WebGLRenderer: "+S.message),S}function xe(){rt=new b2(D),rt.init(),N=new ov(D,rt),C=new h2(D,rt,e,N),_=new av(D,rt),C.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),G=D.createFramebuffer(),q=D.createFramebuffer(),V=D.createFramebuffer(),k=new E2(D),Y=new W_,ne=new rv(D,rt,_,Y,C,N,k),fe=new y2(L),ye=new w1(D),O=new c2(D,ye),se=new M2(D,ye,k,O),re=new w2(D,se,ye,O,k),F=new T2(D,C,ne),Fe=new d2(Y),be=new G_(L,fe,rt,C,O,Fe),ze=new hv(L,Y),Me=new $_,ve=new Q_(rt),Qe=new l2(L,fe,_,re,p,l),We=new sv(L,re,C),J=new dv(D,k,C,_),A=new u2(D,rt,k),R=new S2(D,rt,k),k.programs=be.programs,L.capabilities=C,L.extensions=rt,L.properties=Y,L.renderLists=Me,L.shadowMap=We,L.state=_,L.info=k}x!==wn&&(w=new R2(x,t.width,t.height,o,s,a));let Se=new hd(L,D);this.xr=Se,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let S=rt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=rt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(S){S!==void 0&&(Z=S,this.setSize(at,H,!1))},this.getSize=function(S){return S.set(at,H)},this.setSize=function(S,B,K=!0){if(Se.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}at=S,H=B,t.width=Math.floor(S*Z),t.height=Math.floor(B*Z),K===!0&&(t.style.width=S+"px",t.style.height=B+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(at*Z,H*Z).floor()},this.setDrawingBufferSize=function(S,B,K){at=S,H=B,Z=K,t.width=Math.floor(S*K),t.height=Math.floor(B*K),this.setViewport(0,0,S,B)},this.setEffects=function(S){if(x===wn){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let B=0;B<S.length;B++)if(S[B].isOutputPass===!0){Xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(oe)},this.getViewport=function(S){return S.copy(_e)},this.setViewport=function(S,B,K,W){S.isVector4?_e.set(S.x,S.y,S.z,S.w):_e.set(S,B,K,W),_.viewport(oe.copy(_e).multiplyScalar(Z).round())},this.getScissor=function(S){return S.copy(De)},this.setScissor=function(S,B,K,W){S.isVector4?De.set(S.x,S.y,S.z,S.w):De.set(S,B,K,W),_.scissor(Ne.copy(De).multiplyScalar(Z).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(S){_.setScissorTest(Ye=S)},this.setOpaqueSort=function(S){me=S},this.setTransparentSort=function(S){Pe=S},this.getClearColor=function(S){return S.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(S=!0,B=!0,K=!0){let W=0;if(S){let X=!1;if(he!==null){let Re=he.texture.format;X=g.has(Re)}if(X){let Re=he.texture.type,Le=m.has(Re),Ae=Qe.getClearColor(),qe=Qe.getClearAlpha(),ke=Ae.r,it=Ae.g,ht=Ae.b;Le?(y[0]=ke,y[1]=it,y[2]=ht,y[3]=qe,D.clearBufferuiv(D.COLOR,0,y)):(T[0]=ke,T[1]=it,T[2]=ht,T[3]=qe,D.clearBufferiv(D.COLOR,0,T))}else W|=D.COLOR_BUFFER_BIT}B&&(W|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),z=S},this.dispose=function(){t.removeEventListener("webglcontextlost",ot,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",$t,!1),Qe.dispose(),Me.dispose(),ve.dispose(),Y.dispose(),fe.dispose(),re.dispose(),O.dispose(),J.dispose(),be.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Hd),Se.removeEventListener("sessionend",zd),Us.stop()};function ot(S){S.preventDefault(),Dr("WebGLRenderer: Context Lost."),U=!0}function nt(){Dr("WebGLRenderer: Context Restored."),U=!1;let S=k.autoReset,B=We.enabled,K=We.autoUpdate,W=We.needsUpdate,X=We.type;xe(),k.autoReset=S,We.enabled=B,We.autoUpdate=K,We.needsUpdate=W,We.type=X}function $t(S){je("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function En(S){let B=S.target;B.removeEventListener("dispose",En),ku(B)}function ku(S){om(S),Y.remove(S)}function om(S){let B=Y.get(S).programs;B!==void 0&&(B.forEach(function(K){be.releaseProgram(K)}),S.isShaderMaterial&&be.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,K,W,X,Re){B===null&&(B=Be);let Le=X.isMesh&&X.matrixWorld.determinantAffine()<0,Ae=um(S,B,K,W,X);_.setMaterial(W,Le);let qe=K.index,ke=1;if(W.wireframe===!0){if(qe=se.getWireframeAttribute(K),qe===void 0)return;ke=2}let it=K.drawRange,ht=K.attributes.position,Ue=it.start*ke,vt=(it.start+it.count)*ke;Re!==null&&(Ue=Math.max(Ue,Re.start*ke),vt=Math.min(vt,(Re.start+Re.count)*ke)),qe!==null?(Ue=Math.max(Ue,0),vt=Math.min(vt,qe.count)):ht!=null&&(Ue=Math.max(Ue,0),vt=Math.min(vt,ht.count));let Yt=vt-Ue;if(Yt<0||Yt===1/0)return;O.setup(X,W,Ae,K,qe);let Ct,wt=A;if(qe!==null&&(Ct=ye.get(qe),wt=R,wt.setIndex(Ct)),X.isMesh)W.wireframe===!0?(_.setLineWidth(W.wireframeLinewidth*$e()),wt.setMode(D.LINES)):wt.setMode(D.TRIANGLES);else if(X.isLine){let mn=W.linewidth;mn===void 0&&(mn=1),_.setLineWidth(mn*$e()),X.isLineSegments?wt.setMode(D.LINES):X.isLineLoop?wt.setMode(D.LINE_LOOP):wt.setMode(D.LINE_STRIP)}else X.isPoints?wt.setMode(D.POINTS):X.isSprite&&wt.setMode(D.TRIANGLES);if(X.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))wt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let mn=X._multiDrawStarts,Ie=X._multiDrawCounts,bn=X._multiDrawCount,gt=qe?ye.get(qe).bytesPerElement:1,Hn=Y.get(W).currentProgram.getUniforms();for(let mi=0;mi<bn;mi++)Hn.setValue(D,"_gl_DrawID",mi),wt.render(mn[mi]/gt,Ie[mi])}else if(X.isInstancedMesh)wt.renderInstances(Ue,Yt,X.count);else if(K.isInstancedBufferGeometry){let mn=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ie=Math.min(K.instanceCount,mn);wt.renderInstances(Ue,Yt,Ie)}else wt.render(Ue,Yt)};function Fd(S,B,K,W){z!==null&&S.isNodeMaterial&&z.setObject(W,S),$===!0&&Fe.setState(S,K,!1),S.transparent===!0&&S.side===St&&S.forceSinglePass===!1?(S.side=Qt,S.needsUpdate=!0,ul(S,B,W),S.side=ys,S.needsUpdate=!0,ul(S,B,W),S.side=St):ul(S,B,W)}this.compile=function(S,B,K=null){K===null&&(K=S),z!==null&&z.renderStart(S,B,K),M=ve.get(K),M.init(B),b.push(M),K.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(M.pushLight(X),X.castShadow&&M.pushShadow(X))}),S!==K&&S.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(M.pushLight(X),X.castShadow&&M.pushShadow(X))}),M.setupLights(),z!==null&&z.updateLights(M.state.lightsArray),ue=this.localClippingEnabled,$=Fe.init(this.clippingPlanes,ue),$===!0&&Fe.setGlobalState(this.clippingPlanes,B),z!==null&&We.render(M.state.shadowsArray,K,B);let W=new Set;return S.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Re=X.material;if(Re)if(Array.isArray(Re))for(let Le=0;Le<Re.length;Le++){let Ae=Re[Le];Fd(Ae,K,B,X),W.add(Ae)}else Fd(Re,K,B,X),W.add(Re)}),M=b.pop(),z!==null&&z.renderEnd(),W},this.compileAsync=function(S,B,K=null){let W=this.compile(S,B,K);return new Promise(X=>{function Re(){if(W.forEach(function(Le){let qe=Y.get(Le).currentProgram;(qe===void 0||qe.isReady())&&W.delete(Le)}),W.size===0){X(S);return}setTimeout(Re,10)}rt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Vu=null;function lm(S){Vu&&Vu(S)}function Hd(){Us.stop()}function zd(){Us.start()}let Us=new Vp;Us.setAnimationLoop(lm),typeof self<"u"&&Us.setContext(self),this.setAnimationLoop=function(S){Vu=S,Se.setAnimationLoop(S),S===null?Us.stop():Us.start()},Se.addEventListener("sessionstart",Hd),Se.addEventListener("sessionend",zd),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;z!==null&&z.renderStart(S,B);let K=Se.enabled===!0&&Se.isPresenting===!0,W=w!==null&&(he===null||K)&&w.begin(L,he);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(B),B=Se.getCamera()),S.isScene===!0&&S.onBeforeRender(L,S,B,he),M=ve.get(S,b.length),M.init(B),M.state.textureUnits=ne.getTextureUnits(),b.push(M),ce.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ee.setFromProjectionMatrix(ce,ti,B.reversedDepth),ue=this.localClippingEnabled,$=Fe.init(this.clippingPlanes,ue),E=Me.get(S,P.length),E.init(),P.push(E),Se.enabled===!0&&Se.isPresenting===!0){let Le=L.xr.getDepthSensingMesh();Le!==null&&Gu(Le,B,-1/0,L.sortObjects)}Gu(S,B,0,L.sortObjects),E.finish(),z!==null&&z.updateLights(M.state.lightsArray),L.sortObjects===!0&&E.sort(me,Pe),Oe=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,Oe&&Qe.addToRenderList(E,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),$===!0&&Fe.beginShadows();let X=M.state.shadowsArray;if(We.render(X,S,B),$===!0&&Fe.endShadows(),(W&&w.hasRenderPass())===!1){let Le=E.opaque,Ae=E.transmissive;if(M.setupLights(),B.isArrayCamera){let qe=B.cameras;if(Ae.length>0)for(let ke=0,it=qe.length;ke<it;ke++){let ht=qe[ke];Vd(Le,Ae,S,ht)}Oe&&Qe.render(S);for(let ke=0,it=qe.length;ke<it;ke++){let ht=qe[ke];kd(E,S,ht,ht.viewport)}}else Ae.length>0&&Vd(Le,Ae,S,B),Oe&&Qe.render(S),kd(E,S,B)}he!==null&&j===0&&(ne.updateMultisampleRenderTarget(he),ne.updateRenderTargetMipmap(he)),W&&w.end(L),S.isScene===!0&&S.onAfterRender(L,S,B),O.resetDefaultState(),te=-1,ae=null,b.pop(),b.length>0?(M=b[b.length-1],ne.setTextureUnits(M.state.textureUnits),$===!0&&Fe.setGlobalState(L.clippingPlanes,M.state.camera)):M=null,P.pop(),P.length>0?E=P[P.length-1]:E=null,z!==null&&z.renderEnd()};function Gu(S,B,K,W){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)K=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLightProbeGrid)M.pushLightProbeGrid(S);else if(S.isLight)M.pushLight(S),S.castShadow&&M.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(ee)){W&&He.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ce);let Le=re.update(S),Ae=S.material;Ae.visible&&E.push(S,Le,Ae,K,He.z,null,B)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(ee))){let Le=re.update(S),Ae=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),He.copy(S.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),He.copy(Le.boundingSphere.center)),He.applyMatrix4(S.matrixWorld).applyMatrix4(ce)),Array.isArray(Ae)){let qe=Le.groups;for(let ke=0,it=qe.length;ke<it;ke++){let ht=qe[ke],Ue=Ae[ht.materialIndex];Ue&&Ue.visible&&E.push(S,Le,Ue,K,He.z,ht,B)}}else Ae.visible&&E.push(S,Le,Ae,K,He.z,null,B)}}let Re=S.children;for(let Le=0,Ae=Re.length;Le<Ae;Le++)Gu(Re[Le],B,K,W)}function kd(S,B,K,W){let{opaque:X,transmissive:Re,transparent:Le}=S;M.setupLightsView(K),$===!0&&Fe.setGlobalState(L.clippingPlanes,K),W&&_.viewport(oe.copy(W)),X.length>0&&cl(X,B,K),Re.length>0&&cl(Re,B,K),Le.length>0&&cl(Le,B,K),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Vd(S,B,K,W){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[W.id]===void 0){let Ue=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[W.id]=new Kt(1,1,{generateMipmaps:!0,type:Ue?un:wn,minFilter:Ms,samples:Math.max(4,C.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}let Re=M.state.transmissionRenderTarget[W.id],Le=W.viewport||oe;Re.setSize(Le.z*L.transmissionResolutionScale,Le.w*L.transmissionResolutionScale);let Ae=L.getRenderTarget(),qe=L.getActiveCubeFace(),ke=L.getActiveMipmapLevel();L.setRenderTarget(Re),L.getClearColor(ft),Je=L.getClearAlpha(),Je<1&&L.setClearColor(16777215,.5),L.clear(),Oe&&Qe.render(K);let it=L.toneMapping;L.toneMapping=oi;let ht=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),M.setupLightsView(W),$===!0&&Fe.setGlobalState(L.clippingPlanes,W),cl(S,K,W),ne.updateMultisampleRenderTarget(Re),ne.updateRenderTargetMipmap(Re),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let vt=0,Yt=B.length;vt<Yt;vt++){let Ct=B[vt],{object:wt,geometry:mn,material:Ie,group:bn}=Ct;if(Ie.side===St&&wt.layers.test(W.layers)){let gt=Ie.side;Ie.side=Qt,Ie.needsUpdate=!0,Gd(wt,K,W,mn,Ie,bn),Ie.side=gt,Ie.needsUpdate=!0,Ue=!0}}Ue===!0&&(ne.updateMultisampleRenderTarget(Re),ne.updateRenderTargetMipmap(Re))}L.setRenderTarget(Ae,qe,ke),L.setClearColor(ft,Je),ht!==void 0&&(W.viewport=ht),L.toneMapping=it}function cl(S,B,K){let W=B.isScene===!0?B.overrideMaterial:null;for(let X=0,Re=S.length;X<Re;X++){let Le=S[X],{object:Ae,geometry:qe,group:ke}=Le,it=Le.material;it.allowOverride===!0&&W!==null&&(it=W),Ae.layers.test(K.layers)&&Gd(Ae,B,K,qe,it,ke)}}function Gd(S,B,K,W,X,Re){z!==null&&X.isNodeMaterial&&z.setObject(S,X),S.onBeforeRender(L,B,K,W,X,Re),S.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),X.onBeforeRender(L,B,K,W,S,Re),X.transparent===!0&&X.side===St&&X.forceSinglePass===!1?(X.side=Qt,X.needsUpdate=!0,L.renderBufferDirect(K,B,W,X,S,Re),X.side=ys,X.needsUpdate=!0,L.renderBufferDirect(K,B,W,X,S,Re),X.side=St):L.renderBufferDirect(K,B,W,X,S,Re),S.onAfterRender(L,B,K,W,X,Re)}function ul(S,B,K){B.isScene!==!0&&(B=Be);let W=Y.get(S),X=M.state.lights,Re=M.state.shadowsArray,Le=X.state.version,Ae=be.getParameters(S,X.state,Re,B,K,M.state.lightProbeGridArray),qe=be.getProgramCacheKey(Ae),ke=W.programs;W.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?B.environment:null,W.fog=B.fog;let it=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;W.envMap=fe.get(S.envMap||W.environment,it),W.envMapRotation=W.environment!==null&&S.envMap===null?B.environmentRotation:S.envMapRotation,ke===void 0&&(S.addEventListener("dispose",En),ke=new Map,W.programs=ke);let ht=ke.get(qe);if(ht!==void 0){if(W.currentProgram===ht&&W.lightsStateVersion===Le)return Xd(S,Ae),ht}else Ae.uniforms=be.getUniforms(S),z!==null&&S.isNodeMaterial&&z.build(S,K,Ae),S.onBeforeCompile(Ae,L),ht=be.acquireProgram(Ae,qe),ke.set(qe,ht),W.uniforms=Ae.uniforms;let Ue=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ue.clippingPlanes=Fe.uniform),Xd(S,Ae),W.needsLights=dm(S),W.lightsStateVersion=Le,W.needsLights&&(Ue.ambientLightColor.value=X.state.ambient,Ue.lightProbe.value=X.state.probe,Ue.sunLights.value=X.state.sun,Ue.sunLightShadows.value=X.state.sunShadow,Ue.directionalLights.value=X.state.directional,Ue.directionalLightShadows.value=X.state.directionalShadow,Ue.spotLights.value=X.state.spot,Ue.spotLightShadows.value=X.state.spotShadow,Ue.rectAreaLights.value=X.state.rectArea,Ue.ltc_1.value=X.state.rectAreaLTC1,Ue.ltc_2.value=X.state.rectAreaLTC2,Ue.pointLights.value=X.state.point,Ue.pointLightShadows.value=X.state.pointShadow,Ue.hemisphereLights.value=X.state.hemi,Ue.sunShadowMatrix.value=X.state.sunShadowMatrix,Ue.sunShadowCascade.value=X.state.sunShadowCascade,Ue.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ue.spotLightMatrix.value=X.state.spotLightMatrix,Ue.spotLightMap.value=X.state.spotLightMap,Ue.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=M.state.lightProbeGridArray.length>0,W.currentProgram=ht,W.uniformsList=null,ht}function Wd(S){if(S.uniformsList===null){let B=S.currentProgram.getUniforms();S.uniformsList=Za.seqWithValue(B.seq,S.uniforms)}return S.uniformsList}function Xd(S,B){let K=Y.get(S);K.outputColorSpace=B.outputColorSpace,K.batching=B.batching,K.batchingColor=B.batchingColor,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.instancingMorph=B.instancingMorph,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function cm(S,B){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;v.setFromMatrixPosition(B.matrixWorld);for(let K=0,W=S.length;K<W;K++){let X=S[K];if(X.texture!==null&&X.boundingBox.containsPoint(v))return X}return null}function um(S,B,K,W,X){B.isScene!==!0&&(B=Be),ne.resetTextureUnits();let Re=B.fog,Le=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?B.environment:null,Ae=he===null?L.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:ct.workingColorSpace,qe=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,ke=fe.get(W.envMap||Le,qe),it=W.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ht=!!K.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ue=!!K.morphAttributes.position,vt=!!K.morphAttributes.normal,Yt=!!K.morphAttributes.color,Ct=oi;W.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Ct=L.toneMapping);let wt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,mn=wt!==void 0?wt.length:0,Ie=Y.get(W),bn=M.state.lights;if($===!0&&(ue===!0||S!==ae)){let At=S===ae&&W.id===te;Fe.setState(W,S,At)}let gt=!1;W.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==bn.state.version||Ie.outputColorSpace!==Ae||X.isBatchedMesh&&Ie.batching===!1||!X.isBatchedMesh&&Ie.batching===!0||X.isBatchedMesh&&Ie.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Ie.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Ie.instancing===!1||!X.isInstancedMesh&&Ie.instancing===!0||X.isSkinnedMesh&&Ie.skinning===!1||!X.isSkinnedMesh&&Ie.skinning===!0||X.isInstancedMesh&&Ie.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ie.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ie.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ie.instancingMorph===!1&&X.morphTexture!==null||Ie.envMap!==ke||W.fog===!0&&Ie.fog!==Re||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==Fe.numPlanes||Ie.numIntersection!==Fe.numIntersection)||Ie.vertexAlphas!==it||Ie.vertexTangents!==ht||Ie.morphTargets!==Ue||Ie.morphNormals!==vt||Ie.morphColors!==Yt||Ie.toneMapping!==Ct||Ie.morphTargetsCount!==mn||!!Ie.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(gt=!0):(gt=!0,Ie.__version=W.version);let Hn=Ie.currentProgram;gt===!0&&(Hn=ul(W,B,X),z&&W.isNodeMaterial&&z.onUpdateProgram(W,Hn,Ie));let mi=!1,rs=!1,ra=!1,Et=Hn.getUniforms(),Gt=Ie.uniforms;if(_.useProgram(Hn.program)&&(mi=!0,rs=!0,ra=!0),W.id!==te&&(te=W.id,rs=!0),Ie.needsLights){let At=cm(M.state.lightProbeGridArray,X);Ie.lightProbeGrid!==At&&(Ie.lightProbeGrid=At,rs=!0)}if(mi||ae!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Et.setValue(D,"projectionMatrix",S.projectionMatrix),Et.setValue(D,"viewMatrix",S.matrixWorldInverse);let ls=Et.map.cameraPosition;ls!==void 0&&ls.setValue(D,ge.setFromMatrixPosition(S.matrixWorld)),C.logarithmicDepthBuffer&&Et.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Et.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),ae!==S&&(ae=S,rs=!0,ra=!0)}if(Ie.needsLights&&(bn.state.sunShadowMap.length>0&&Et.setValue(D,"sunShadowMap",bn.state.sunShadowMap,ne),bn.state.directionalShadowMap.length>0&&Et.setValue(D,"directionalShadowMap",bn.state.directionalShadowMap,ne),bn.state.spotShadowMap.length>0&&Et.setValue(D,"spotShadowMap",bn.state.spotShadowMap,ne),bn.state.pointShadowMap.length>0&&Et.setValue(D,"pointShadowMap",bn.state.pointShadowMap,ne)),X.isSkinnedMesh){Et.setOptional(D,X,"bindMatrix"),Et.setOptional(D,X,"bindMatrixInverse");let At=X.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),Et.setValue(D,"boneTexture",At.boneTexture,ne))}X.isBatchedMesh&&(Et.setOptional(D,X,"batchingTexture"),Et.setValue(D,"batchingTexture",X._matricesTexture,ne),Et.setOptional(D,X,"batchingIdTexture"),Et.setValue(D,"batchingIdTexture",X._indirectTexture,ne),Et.setOptional(D,X,"batchingColorTexture"),X._colorsTexture!==null&&Et.setValue(D,"batchingColorTexture",X._colorsTexture,ne));let os=K.morphAttributes;if((os.position!==void 0||os.normal!==void 0||os.color!==void 0)&&F.update(X,K,Hn),(rs||Ie.receiveShadow!==X.receiveShadow)&&(Ie.receiveShadow=X.receiveShadow,Et.setValue(D,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&B.environment!==null&&(Gt.envMapIntensity.value=B.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=pv()),rs){if(Et.setValue(D,"toneMappingExposure",L.toneMappingExposure),Ie.needsLights&&hm(Gt,ra),Re&&W.fog===!0&&ze.refreshFogUniforms(Gt,Re),ze.refreshMaterialUniforms(Gt,W,Z,H,M.state.transmissionRenderTarget[S.id]),Ie.needsLights&&Ie.lightProbeGrid){let At=Ie.lightProbeGrid;Gt.probesSH.value=At.texture,Gt.probesMin.value.copy(At.boundingBox.min),Gt.probesMax.value.copy(At.boundingBox.max),Gt.probesResolution.value.copy(At.resolution)}Za.upload(D,Wd(Ie),Gt,ne)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Za.upload(D,Wd(Ie),Gt,ne),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Et.setValue(D,"center",X.center),Et.setValue(D,"modelViewMatrix",X.modelViewMatrix),Et.setValue(D,"normalMatrix",X.normalMatrix),Et.setValue(D,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){let At=W.uniformsGroups;for(let ls=0,oa=At.length;ls<oa;ls++){let Yd=At[ls];J.update(Yd,Hn),J.bind(Yd,Hn)}}return Hn}function hm(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.sunLights.needsUpdate=B,S.sunLightShadows.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function dm(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return he},this.setRenderTargetTextures=function(S,B,K){let W=Y.get(S);W.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Y.get(S.texture).__webglTexture=B,Y.get(S.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:K,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,B){let K=Y.get(S);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(S,B=0,K=0){he=S,Q=B,j=K;let W=null,X=!1,Re=!1;if(S){let Ae=Y.get(S);if(Ae.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(D.FRAMEBUFFER,Ae.__webglFramebuffer),oe.copy(S.viewport),Ne.copy(S.scissor),Ce=S.scissorTest,_.viewport(oe),_.scissor(Ne),_.setScissorTest(Ce),te=-1;return}else if(Ae.__webglFramebuffer===void 0)ne.setupRenderTarget(S);else if(Ae.__hasExternalTextures)ne.rebindTextures(S,Y.get(S.texture).__webglTexture,Y.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let it=S.depthTexture;if(Ae.__boundDepthTexture!==it){if(it!==null&&Y.has(it)&&(S.width!==it.image.width||S.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(S)}}let qe=S.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Re=!0);let ke=Y.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ke[B])?W=ke[B][K]:W=ke[B],X=!0):S.samples>0&&ne.useMultisampledRTT(S)===!1?W=Y.get(S).__webglMultisampledFramebuffer:Array.isArray(ke)?W=ke[K]:W=ke,oe.copy(S.viewport),Ne.copy(S.scissor),Ce=S.scissorTest}else oe.copy(_e).multiplyScalar(Z).floor(),Ne.copy(De).multiplyScalar(Z).floor(),Ce=Ye;if(K!==0&&(W=G),_.bindFramebuffer(D.FRAMEBUFFER,W)&&_.drawBuffers(S,W),_.viewport(oe),_.scissor(Ne),_.setScissorTest(Ce),X){let Ae=Y.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ae.__webglTexture,K)}else if(Re){let Ae=B;for(let qe=0;qe<S.textures.length;qe++){let ke=Y.get(S.textures[qe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+qe,ke.__webglTexture,K,Ae)}}else if(S!==null&&K!==0){let Ae=Y.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ae.__webglTexture,K)}te=-1};function $d(S){let B=Y.get(S);return(B.__readFormat!==S.format||B.__readType!==S.type)&&(B.__readFormat=S.format,B.__readType=S.type,B.__formatReadable=C.textureFormatReadable(S.format),B.__typeReadable=C.textureTypeReadable(S.type)),B}this.readRenderTargetPixels=function(S,B,K,W,X,Re,Le,Ae=0){if(!(S&&S.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=Y.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Le!==void 0&&(qe=qe[Le]),qe){_.bindFramebuffer(D.FRAMEBUFFER,qe);try{let ke=S.textures[Ae],it=ke.format,ht=ke.type;S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ae);let Ue=$d(ke);if(Ue.__formatReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ue.__typeReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-W&&K>=0&&K<=S.height-X&&D.readPixels(B,K,W,X,N.convert(it),N.convert(ht),Re)}finally{let ke=he!==null?Y.get(he).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(S,B,K,W,X,Re,Le,Ae=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=Y.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Le!==void 0&&(qe=qe[Le]),qe)if(B>=0&&B<=S.width-W&&K>=0&&K<=S.height-X){_.bindFramebuffer(D.FRAMEBUFFER,qe);let ke=S.textures[Ae],it=ke.format,ht=ke.type;S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ae);let Ue=$d(ke);if(Ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let vt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,vt),D.bufferData(D.PIXEL_PACK_BUFFER,Re.byteLength,D.STREAM_READ),D.readPixels(B,K,W,X,N.convert(it),N.convert(ht),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Yt=he!==null?Y.get(he).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,Yt);let Ct=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await dp(D,Ct,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,vt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Re),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(vt),D.deleteSync(Ct),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,B=null,K=0){let W=Math.pow(2,-K),X=Math.floor(S.image.width*W),Re=Math.floor(S.image.height*W),Le=B!==null?B.x:0,Ae=B!==null?B.y:0;ne.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,K,0,0,Le,Ae,X,Re),_.unbindTexture()},this.copyTextureToTexture=function(S,B,K=null,W=null,X=0,Re=0){let Le,Ae,qe,ke,it,ht,Ue,vt,Yt,Ct=S.isCompressedTexture?S.mipmaps[Re]:S.image;if(K!==null)Le=K.max.x-K.min.x,Ae=K.max.y-K.min.y,qe=K.isBox3?K.max.z-K.min.z:1,ke=K.min.x,it=K.min.y,ht=K.isBox3?K.min.z:0;else{let Gt=Math.pow(2,-X);Le=Math.floor(Ct.width*Gt),Ae=Math.floor(Ct.height*Gt),S.isDataArrayTexture?qe=Ct.depth:S.isData3DTexture?qe=Math.floor(Ct.depth*Gt):qe=1,ke=0,it=0,ht=0}W!==null?(Ue=W.x,vt=W.y,Yt=W.z):(Ue=0,vt=0,Yt=0);let wt=N.convert(B.format),mn=N.convert(B.type),Ie;B.isData3DTexture?(ne.setTexture3D(B,0),Ie=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(ne.setTexture2DArray(B,0),Ie=D.TEXTURE_2D_ARRAY):(ne.setTexture2D(B,0),Ie=D.TEXTURE_2D),_.activeTexture(D.TEXTURE0),_.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),_.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),_.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);let bn=_.getParameter(D.UNPACK_ROW_LENGTH),gt=_.getParameter(D.UNPACK_IMAGE_HEIGHT),Hn=_.getParameter(D.UNPACK_SKIP_PIXELS),mi=_.getParameter(D.UNPACK_SKIP_ROWS),rs=_.getParameter(D.UNPACK_SKIP_IMAGES);_.pixelStorei(D.UNPACK_ROW_LENGTH,Ct.width),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ct.height),_.pixelStorei(D.UNPACK_SKIP_PIXELS,ke),_.pixelStorei(D.UNPACK_SKIP_ROWS,it),_.pixelStorei(D.UNPACK_SKIP_IMAGES,ht);let ra=S.isDataArrayTexture||S.isData3DTexture,Et=B.isDataArrayTexture||B.isData3DTexture;if(S.isDepthTexture){let Gt=Y.get(S),os=Y.get(B),At=Y.get(Gt.__renderTarget),ls=Y.get(os.__renderTarget);_.bindFramebuffer(D.READ_FRAMEBUFFER,At.__webglFramebuffer),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,ls.__webglFramebuffer);for(let oa=0;oa<qe;oa++)ra&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Y.get(S).__webglTexture,X,ht+oa),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Y.get(B).__webglTexture,Re,Yt+oa)),D.blitFramebuffer(ke,it,Le,Ae,Ue,vt,Le,Ae,D.DEPTH_BUFFER_BIT,D.NEAREST);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(X!==0||S.isRenderTargetTexture||Y.has(S)){let Gt=Y.get(S),os=Y.get(B);_.bindFramebuffer(D.READ_FRAMEBUFFER,q),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,V);for(let At=0;At<qe;At++)ra?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Gt.__webglTexture,X,ht+At):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Gt.__webglTexture,X),Et?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,os.__webglTexture,Re,Yt+At):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,os.__webglTexture,Re),X!==0?D.blitFramebuffer(ke,it,Le,Ae,Ue,vt,Le,Ae,D.COLOR_BUFFER_BIT,D.NEAREST):Et?D.copyTexSubImage3D(Ie,Re,Ue,vt,Yt+At,ke,it,Le,Ae):D.copyTexSubImage2D(Ie,Re,Ue,vt,ke,it,Le,Ae);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Et?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(Ie,Re,Ue,vt,Yt,Le,Ae,qe,wt,mn,Ct.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(Ie,Re,Ue,vt,Yt,Le,Ae,qe,wt,Ct.data):D.texSubImage3D(Ie,Re,Ue,vt,Yt,Le,Ae,qe,wt,mn,Ct):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Re,Ue,vt,Le,Ae,wt,mn,Ct.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Re,Ue,vt,Ct.width,Ct.height,wt,Ct.data):D.texSubImage2D(D.TEXTURE_2D,Re,Ue,vt,Le,Ae,wt,mn,Ct);_.pixelStorei(D.UNPACK_ROW_LENGTH,bn),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gt),_.pixelStorei(D.UNPACK_SKIP_PIXELS,Hn),_.pixelStorei(D.UNPACK_SKIP_ROWS,mi),_.pixelStorei(D.UNPACK_SKIP_IMAGES,rs),Re===0&&B.generateMipmaps&&D.generateMipmap(Ie),_.unbindTexture()},this.initRenderTarget=function(S){Y.get(S).__webglFramebuffer===void 0&&ne.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ne.setTextureCube(S,0):S.isData3DTexture?ne.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ne.setTexture2DArray(S,0):ne.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){Q=0,j=0,he=null,_.reset(),O.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};var Qa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Un=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},mv=new vs(-1,1,1,-1,0,1),dd=class extends yt{constructor(){super(),this.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new et([0,2,0,0,2,0],2))}},gv=new dd,ws=class{constructor(e){this._mesh=new ie(gv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,mv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var er=class extends Un{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Zi.clone(e.uniforms),this.material=new Wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ws(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Do=class extends Un{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}},mu=class extends Un{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var tr=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new le);this._width=i.width,this._height=i.height,t=new Kt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:un}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new er(Qa),this.copyPass.material.blending=Gn,this.timer=new uo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,a=this.passes.length;s<a;s++){let r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),r.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Do!==void 0&&(r instanceof Do?i=!0:r instanceof mu&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var nr=class extends Un{constructor(e,t,i=null,s=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ve}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let a,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=s}};var Jp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ve(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var As=class n extends Un{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new le(e.x,e.y):new le(256,256),this.clearColor=new Ve(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Kt(a,r,{type:un,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let h=new Kt(a,r,{type:un,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let d=new Kt(a,r,{type:un,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),a=Math.round(a/2),r=Math.round(r/2)}let o=Jp;this.highPassUniforms=Zi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Wt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new le(1/a,1/r),a=Math.round(a/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Zi.clone(Qa.uniforms),this.blendMaterial=new Wt({uniforms:this.copyUniforms,vertexShader:Qa.vertexShader,fragmentShader:Qa.fragmentShader,premultipliedAlpha:!0,blending:Sn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ve,this._oldClearAlpha=1,this._basic=new It,this._fsQuad=new ws(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,s),this.renderTargetsVertical[a].setSize(i,s),this.separableBlurMaterials[a].uniforms.invSize.value=new le(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,a){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=r}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(i*i))/i);let s=[],a=[];for(let r=1;r<e;r+=2){let o=t[r],l=r+1<e?t[r+1]:0,c=o+l;s.push((r*o+(r+1)*l)/c),a.push(c)}return new Wt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new le(.5,.5)},direction:{value:new le(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:a}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Wt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};As.BlurDirectionX=new le(1,0);As.BlurDirectionY=new le(0,1);var qo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var ir=class extends Un{constructor(){super(),this.isOutputPass=!0,this.uniforms=Zi.clone(qo.uniforms),this.material=new za({name:qo.name,uniforms:this.uniforms,vertexShader:qo.vertexShader,fragmentShader:qo.fragmentShader}),this._fsQuad=new ws(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ct.getTransfer(this._outputColorSpace)===_t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===mo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===go?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===xo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Xs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===vo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===yo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===_o&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ar=class extends Gi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new kt;e.deleteAttribute("uv");let t=new Ft({side:Qt}),i=new Ft,s=new ri(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let a=new ie(e,t);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let r=new Nn(e,i,6),o=new zt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),r.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),r.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),r.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),r.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),r.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),r.setMatrixAt(5,o.matrix),this.add(r);let l=new ie(e,sr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ie(e,sr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new ie(e,sr(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new ie(e,sr(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let d=new ie(e,sr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new ie(e,sr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function sr(n){return new so({color:0,emissive:16777215,emissiveIntensity:n})}var gu=class extends ji{constructor(e){super(e)}load(e,t,i,s){let a=this,r=new ro(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,function(o){let l=a.parse(JSON.parse(o));t&&t(l)},i,s)}parse(e){return new Uo(e)}},Uo=class{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100,i="ltr"){let s=[],a=xv(e,t,this.data,i);for(let r=0,o=a.length;r<o;r++)s.push(...a[r].toShapes());return s}};function xv(n,e,t,i){let s=Array.from(n),a=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*a,o=[],l=0,c=0;(i=="rtl"||i=="tb")&&s.reverse();for(let u=0;u<s.length;u++){let h=s[u];if(h===`
`)l=0,c-=r;else{let d=_v(h,a,l,c,t);i=="tb"?(l=0,c+=t.ascender*a):l+=d.offsetX,o.push(d.path)}}return o}function _v(n,e,t,i,s){let a=s.glyphs[n]||s.glyphs["?"];if(!a){console.error('THREE.Font: character "'+n+'" does not exists in font family '+s.familyName+".");return}let r=new fo,o,l,c,u,h,d,f,p;if(a.o){let x=a._cachedOutline||(a._cachedOutline=a.o.split(" "));for(let g=0,m=x.length;g<m;)switch(x[g++]){case"m":o=x[g++]*e+t,l=x[g++]*e+i,r.moveTo(o,l);break;case"l":o=x[g++]*e+t,l=x[g++]*e+i,r.lineTo(o,l);break;case"q":c=x[g++]*e+t,u=x[g++]*e+i,h=x[g++]*e+t,d=x[g++]*e+i,r.quadraticCurveTo(h,d,c,u);break;case"b":c=x[g++]*e+t,u=x[g++]*e+i,h=x[g++]*e+t,d=x[g++]*e+i,f=x[g++]*e+t,p=x[g++]*e+i,r.bezierCurveTo(h,d,f,p,c,u);break}}return{offsetX:a.ha*e,path:r}}var rr=class n extends si{constructor(e,t={}){let i=t.font;if(i===void 0)super();else{let s=i.generateShapes(e,t.size,t.direction);t.depth===void 0&&(t.depth=50),t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(s,t)}this.type="TextGeometry"}toJSON(){return super.toJSON()}static fromJSON(e){let t=e.options;return t.font=new Uo(t.font.data),new n(t.text,t)}};var Zp={glyphs:{\u03BF:{x_min:0,x_max:764,ha:863,o:"m 380 -25 q 105 87 211 -25 q 0 372 0 200 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 372 764 544 q 658 87 764 200 q 380 -25 552 -25 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 218 204 283 q 379 142 294 142 "},S:{x_min:0,x_max:826,ha:915,o:"m 826 306 q 701 55 826 148 q 423 -29 587 -29 q 138 60 255 -29 q 0 318 13 154 l 208 318 q 288 192 216 238 q 437 152 352 152 q 559 181 506 152 q 623 282 623 217 q 466 411 623 372 q 176 487 197 478 q 18 719 18 557 q 136 958 18 869 q 399 1040 244 1040 q 670 956 561 1040 q 791 713 791 864 l 591 713 q 526 826 583 786 q 393 866 469 866 q 277 838 326 866 q 218 742 218 804 q 374 617 218 655 q 667 542 646 552 q 826 306 826 471 "},"\xA6":{x_min:0,x_max:143,ha:240,o:"m 143 462 l 0 462 l 0 984 l 143 984 l 143 462 m 143 -242 l 0 -242 l 0 280 l 143 280 l 143 -242 "},"/":{x_min:196.109375,x_max:632.5625,ha:828,o:"m 632 1040 l 289 -128 l 196 -128 l 538 1040 l 632 1040 "},\u03A4:{x_min:-.609375,x_max:808,ha:878,o:"m 808 831 l 508 831 l 508 0 l 298 0 l 298 831 l 0 831 l 0 1013 l 808 1013 l 808 831 "},y:{x_min:0,x_max:738.890625,ha:828,o:"m 738 749 l 444 -107 q 361 -238 413 -199 q 213 -277 308 -277 q 156 -275 176 -277 q 120 -271 131 -271 l 120 -110 q 147 -113 134 -111 q 179 -116 161 -116 q 247 -91 226 -116 q 269 -17 269 -67 q 206 173 269 -4 q 84 515 162 301 q 0 749 41 632 l 218 749 l 376 207 l 529 749 l 738 749 "},\u03A0:{x_min:0,x_max:809,ha:922,o:"m 809 0 l 598 0 l 598 836 l 208 836 l 208 0 l 0 0 l 0 1012 l 809 1012 l 809 0 "},\u0390:{x_min:-162,x_max:364,ha:364,o:"m 364 810 l 235 810 l 235 952 l 364 952 l 364 810 m 301 1064 l 86 810 l -12 810 l 123 1064 l 301 1064 m -33 810 l -162 810 l -162 952 l -33 952 l -33 810 m 200 0 l 0 0 l 0 748 l 200 748 l 200 0 "},g:{x_min:0,x_max:724,ha:839,o:"m 724 48 q 637 -223 724 -142 q 357 -304 551 -304 q 140 -253 226 -304 q 23 -72 36 -192 l 243 -72 q 290 -127 255 -110 q 368 -144 324 -144 q 504 -82 470 -144 q 530 71 530 -38 l 530 105 q 441 25 496 51 q 319 0 386 0 q 79 115 166 0 q 0 377 0 219 q 77 647 0 534 q 317 775 166 775 q 534 656 456 775 l 534 748 l 724 748 l 724 48 m 368 167 q 492 237 447 167 q 530 382 530 297 q 490 529 530 466 q 364 603 444 603 q 240 532 284 603 q 201 386 201 471 q 240 239 201 300 q 368 167 286 167 "},"\xB2":{x_min:0,x_max:463,ha:560,o:"m 463 791 q 365 627 463 706 q 151 483 258 555 l 455 483 l 455 382 l 0 382 q 84 565 0 488 q 244 672 97 576 q 331 784 331 727 q 299 850 331 824 q 228 876 268 876 q 159 848 187 876 q 132 762 132 820 l 10 762 q 78 924 10 866 q 228 976 137 976 q 392 925 322 976 q 463 791 463 874 "},"\u2013":{x_min:0,x_max:704.171875,ha:801,o:"m 704 297 l 0 297 l 0 450 l 704 450 l 704 297 "},\u039A:{x_min:0,x_max:899.671875,ha:969,o:"m 899 0 l 646 0 l 316 462 l 208 355 l 208 0 l 0 0 l 0 1013 l 208 1013 l 208 596 l 603 1013 l 863 1013 l 460 603 l 899 0 "},\u0192:{x_min:-46,x_max:440,ha:525,o:"m 440 609 l 316 609 l 149 -277 l -46 -277 l 121 609 l 14 609 l 14 749 l 121 749 q 159 949 121 894 q 344 1019 208 1019 l 440 1015 l 440 855 l 377 855 q 326 841 338 855 q 314 797 314 827 q 314 773 314 786 q 314 749 314 761 l 440 749 l 440 609 "},e:{x_min:0,x_max:708,ha:808,o:"m 708 321 l 207 321 q 254 186 207 236 q 362 141 298 141 q 501 227 453 141 l 700 227 q 566 36 662 104 q 362 -26 477 -26 q 112 72 213 -26 q 0 369 0 182 q 95 683 0 573 q 358 793 191 793 q 619 677 531 793 q 708 321 708 561 m 501 453 q 460 571 501 531 q 353 612 420 612 q 247 570 287 612 q 207 453 207 529 l 501 453 "},\u03CC:{x_min:0,x_max:764,ha:863,o:"m 380 -25 q 105 87 211 -25 q 0 372 0 200 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 372 764 544 q 658 87 764 200 q 380 -25 552 -25 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 218 204 283 q 379 142 294 142 m 593 1039 l 391 823 l 293 823 l 415 1039 l 593 1039 "},J:{x_min:0,x_max:649,ha:760,o:"m 649 294 q 573 48 649 125 q 327 -29 497 -29 q 61 82 136 -29 q 0 375 0 173 l 200 375 l 199 309 q 219 194 199 230 q 321 145 249 145 q 418 193 390 145 q 441 307 441 232 l 441 1013 l 649 1013 l 649 294 "},"\xBB":{x_min:-.234375,x_max:526,ha:624,o:"m 526 286 l 297 87 l 296 250 l 437 373 l 297 495 l 297 660 l 526 461 l 526 286 m 229 286 l 0 87 l 0 250 l 140 373 l 0 495 l 0 660 l 229 461 l 229 286 "},"\xA9":{x_min:3,x_max:1007,ha:1104,o:"m 507 -6 q 129 153 269 -6 q 3 506 3 298 q 127 857 3 713 q 502 1017 266 1017 q 880 855 740 1017 q 1007 502 1007 711 q 882 152 1007 295 q 507 -6 743 -6 m 502 934 q 184 800 302 934 q 79 505 79 680 q 184 210 79 331 q 501 76 302 76 q 819 210 701 76 q 925 507 925 331 q 820 800 925 682 q 502 934 704 934 m 758 410 q 676 255 748 313 q 506 197 605 197 q 298 291 374 197 q 229 499 229 377 q 297 713 229 624 q 494 811 372 811 q 666 760 593 811 q 752 616 739 710 l 621 616 q 587 688 621 658 q 509 719 554 719 q 404 658 441 719 q 368 511 368 598 q 403 362 368 427 q 498 298 438 298 q 624 410 606 298 l 758 410 "},\u03CE:{x_min:0,x_max:945,ha:1051,o:"m 566 528 l 372 528 l 372 323 q 372 298 372 311 q 373 271 372 285 q 360 183 373 211 q 292 142 342 142 q 219 222 243 142 q 203 365 203 279 q 241 565 203 461 q 334 748 273 650 l 130 748 q 36 552 68 650 q 0 337 0 444 q 69 96 0 204 q 276 -29 149 -29 q 390 0 337 -29 q 470 78 444 28 q 551 0 495 30 q 668 -29 608 -29 q 874 96 793 -29 q 945 337 945 205 q 910 547 945 444 q 814 748 876 650 l 610 748 q 703 565 671 650 q 742 365 742 462 q 718 189 742 237 q 651 142 694 142 q 577 190 597 142 q 565 289 565 221 l 565 323 l 566 528 m 718 1039 l 516 823 l 417 823 l 540 1039 l 718 1039 "},"^":{x_min:197.21875,x_max:630.5625,ha:828,o:"m 630 836 l 536 836 l 413 987 l 294 836 l 197 836 l 331 1090 l 493 1090 l 630 836 "},"\xAB":{x_min:0,x_max:526.546875,ha:624,o:"m 526 87 l 297 286 l 297 461 l 526 660 l 526 495 l 385 373 l 526 250 l 526 87 m 229 87 l 0 286 l 0 461 l 229 660 l 229 495 l 88 373 l 229 250 l 229 87 "},D:{x_min:0,x_max:864,ha:968,o:"m 400 1013 q 736 874 608 1013 q 864 523 864 735 q 717 146 864 293 q 340 0 570 0 l 0 0 l 0 1013 l 400 1013 m 398 837 l 206 837 l 206 182 l 372 182 q 584 276 507 182 q 657 504 657 365 q 594 727 657 632 q 398 837 522 837 "},"\u2219":{x_min:0,x_max:207,ha:304,o:"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 "},\u00FF:{x_min:0,x_max:47,ha:125,o:"m 47 3 q 37 -7 47 -7 q 28 0 30 -7 q 39 -4 32 -4 q 45 3 45 -1 l 37 0 q 28 9 28 0 q 39 19 28 19 l 47 16 l 47 19 l 47 3 m 37 1 q 44 8 44 1 q 37 16 44 16 q 30 8 30 16 q 37 1 30 1 m 26 1 l 23 22 l 14 0 l 3 22 l 3 3 l 0 25 l 13 1 l 22 25 l 26 1 "},w:{x_min:0,x_max:1056.953125,ha:1150,o:"m 1056 749 l 848 0 l 647 0 l 527 536 l 412 0 l 211 0 l 0 749 l 202 749 l 325 226 l 429 748 l 633 748 l 740 229 l 864 749 l 1056 749 "},$:{x_min:0,x_max:704,ha:800,o:"m 682 693 l 495 693 q 468 782 491 749 q 391 831 441 824 l 391 579 q 633 462 562 534 q 704 259 704 389 q 616 57 704 136 q 391 -22 528 -22 l 391 -156 l 308 -156 l 308 -22 q 76 69 152 -7 q 0 300 0 147 l 183 300 q 215 191 190 230 q 308 128 245 143 l 308 414 q 84 505 157 432 q 12 700 12 578 q 89 902 12 824 q 308 981 166 981 l 308 1069 l 391 1069 l 391 981 q 595 905 521 981 q 682 693 670 829 m 308 599 l 308 831 q 228 796 256 831 q 200 712 200 762 q 225 642 200 668 q 308 599 251 617 m 391 128 q 476 174 449 140 q 504 258 504 207 q 391 388 504 354 l 391 128 "},"\\":{x_min:-.03125,x_max:434.765625,ha:532,o:"m 434 -128 l 341 -128 l 0 1039 l 91 1040 l 434 -128 "},\u00B5:{x_min:0,x_max:647,ha:754,o:"m 647 0 l 478 0 l 478 68 q 412 9 448 30 q 330 -11 375 -11 q 261 3 296 -11 q 199 43 226 18 l 199 -277 l 0 -277 l 0 749 l 199 749 l 199 358 q 216 221 199 267 q 322 151 244 151 q 435 240 410 151 q 448 401 448 283 l 448 749 l 647 749 l 647 0 "},\u0399:{x_min:42,x_max:250,ha:413,o:"m 250 0 l 42 0 l 42 1013 l 250 1013 l 250 0 "},\u038E:{x_min:0,x_max:1211.15625,ha:1289,o:"m 1211 1012 l 907 376 l 907 0 l 697 0 l 697 376 l 374 1012 l 583 1012 l 802 576 l 1001 1012 l 1211 1012 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"\u2019":{x_min:0,x_max:192,ha:289,o:"m 192 834 q 137 692 192 751 q 0 626 83 634 l 0 697 q 101 831 101 723 l 0 831 l 0 1013 l 192 1013 l 192 834 "},\u039D:{x_min:0,x_max:833,ha:946,o:"m 833 0 l 617 0 l 206 696 l 206 0 l 0 0 l 0 1013 l 216 1013 l 629 315 l 629 1013 l 833 1013 l 833 0 "},"-":{x_min:27.78125,x_max:413.890625,ha:525,o:"m 413 279 l 27 279 l 27 468 l 413 468 l 413 279 "},Q:{x_min:0,x_max:995.59375,ha:1096,o:"m 995 49 l 885 -70 l 762 42 q 641 -12 709 4 q 497 -29 572 -29 q 135 123 271 -29 q 0 504 0 276 q 131 881 0 731 q 497 1040 270 1040 q 859 883 719 1040 q 994 506 994 731 q 966 321 994 413 q 884 152 938 229 l 995 49 m 730 299 q 767 395 755 344 q 779 504 779 446 q 713 743 779 644 q 505 857 638 857 q 284 745 366 857 q 210 501 210 644 q 279 265 210 361 q 492 157 357 157 q 615 181 557 157 l 508 287 l 620 405 l 730 299 "},\u03C2:{x_min:0,x_max:731.78125,ha:768,o:"m 731 448 l 547 448 q 485 571 531 533 q 369 610 440 610 q 245 537 292 610 q 204 394 204 473 q 322 186 204 238 q 540 133 430 159 q 659 -15 659 98 q 643 -141 659 -80 q 595 -278 627 -202 l 423 -278 q 458 -186 448 -215 q 474 -88 474 -133 q 352 0 474 -27 q 123 80 181 38 q 0 382 0 170 q 98 660 0 549 q 367 777 202 777 q 622 683 513 777 q 731 448 731 589 "},M:{x_min:0,x_max:1019,ha:1135,o:"m 1019 0 l 823 0 l 823 819 l 618 0 l 402 0 l 194 818 l 194 0 l 0 0 l 0 1013 l 309 1012 l 510 241 l 707 1013 l 1019 1013 l 1019 0 "},\u03A8:{x_min:0,x_max:995,ha:1085,o:"m 995 698 q 924 340 995 437 q 590 200 841 227 l 590 0 l 404 0 l 404 200 q 70 340 152 227 q 0 698 0 437 l 0 1013 l 188 1013 l 188 694 q 212 472 188 525 q 404 383 254 383 l 404 1013 l 590 1013 l 590 383 q 781 472 740 383 q 807 694 807 525 l 807 1013 l 995 1013 l 995 698 "},C:{x_min:0,x_max:970.828125,ha:1043,o:"m 970 345 q 802 70 933 169 q 490 -29 672 -29 q 130 130 268 -29 q 0 506 0 281 q 134 885 0 737 q 502 1040 275 1040 q 802 939 668 1040 q 965 679 936 838 l 745 679 q 649 809 716 761 q 495 857 582 857 q 283 747 361 857 q 214 508 214 648 q 282 267 214 367 q 493 154 359 154 q 651 204 584 154 q 752 345 718 255 l 970 345 "},"!":{x_min:0,x_max:204,ha:307,o:"m 204 739 q 182 515 204 686 q 152 282 167 398 l 52 282 q 13 589 27 473 q 0 739 0 704 l 0 1013 l 204 1013 l 204 739 m 204 0 l 0 0 l 0 203 l 204 203 l 204 0 "},"{":{x_min:0,x_max:501.390625,ha:599,o:"m 501 -285 q 229 -209 301 -285 q 176 -35 176 -155 q 182 47 176 -8 q 189 126 189 103 q 156 245 189 209 q 0 294 112 294 l 0 438 q 154 485 111 438 q 189 603 189 522 q 186 666 189 636 q 176 783 176 772 q 231 945 176 894 q 501 1015 306 1015 l 501 872 q 370 833 408 872 q 340 737 340 801 q 342 677 340 705 q 353 569 353 579 q 326 451 353 496 q 207 366 291 393 q 327 289 294 346 q 353 164 353 246 q 348 79 353 132 q 344 17 344 26 q 372 -95 344 -58 q 501 -141 408 -141 l 501 -285 "},X:{x_min:0,x_max:894.453125,ha:999,o:"m 894 0 l 654 0 l 445 351 l 238 0 l 0 0 l 316 516 l 0 1013 l 238 1013 l 445 659 l 652 1013 l 894 1013 l 577 519 l 894 0 "},"#":{x_min:0,x_max:1019.453125,ha:1117,o:"m 1019 722 l 969 582 l 776 581 l 717 417 l 919 417 l 868 279 l 668 278 l 566 -6 l 413 -5 l 516 279 l 348 279 l 247 -6 l 94 -6 l 196 278 l 0 279 l 49 417 l 245 417 l 304 581 l 98 582 l 150 722 l 354 721 l 455 1006 l 606 1006 l 507 721 l 673 722 l 776 1006 l 927 1006 l 826 721 l 1019 722 m 627 581 l 454 581 l 394 417 l 567 417 l 627 581 "},\u03B9:{x_min:42,x_max:242,ha:389,o:"m 242 0 l 42 0 l 42 749 l 242 749 l 242 0 "},\u0386:{x_min:0,x_max:995.828125,ha:1072,o:"m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 m 995 0 l 776 0 l 708 208 l 315 208 l 247 0 l 29 0 l 390 1012 l 629 1012 l 995 0 m 652 376 l 509 809 l 369 376 l 652 376 "},")":{x_min:0,x_max:389,ha:486,o:"m 389 357 q 319 14 389 187 q 145 -293 259 -134 l 0 -293 q 139 22 90 -142 q 189 358 189 187 q 139 689 189 525 q 0 1013 90 853 l 145 1013 q 319 703 258 857 q 389 357 389 528 "},\u03B5:{x_min:16.671875,x_max:652.78125,ha:742,o:"m 652 259 q 565 49 652 123 q 340 -25 479 -25 q 102 39 188 -25 q 16 197 16 104 q 45 299 16 249 q 134 390 75 348 q 58 456 86 419 q 25 552 25 502 q 120 717 25 653 q 322 776 208 776 q 537 710 456 776 q 625 508 625 639 l 445 508 q 415 585 445 563 q 327 608 386 608 q 254 590 293 608 q 215 544 215 573 q 252 469 215 490 q 336 453 280 453 q 369 455 347 453 q 400 456 391 456 l 400 308 l 329 308 q 247 291 280 308 q 204 223 204 269 q 255 154 204 172 q 345 143 286 143 q 426 174 398 143 q 454 259 454 206 l 652 259 "},\u0394:{x_min:0,x_max:981.953125,ha:1057,o:"m 981 0 l 0 0 l 386 1013 l 594 1013 l 981 0 m 715 175 l 490 765 l 266 175 l 715 175 "},"}":{x_min:0,x_max:500,ha:597,o:"m 500 294 q 348 246 390 294 q 315 128 315 209 q 320 42 315 101 q 326 -48 326 -17 q 270 -214 326 -161 q 0 -285 196 -285 l 0 -141 q 126 -97 90 -141 q 154 8 154 -64 q 150 91 154 37 q 146 157 146 145 q 172 281 146 235 q 294 366 206 339 q 173 451 208 390 q 146 576 146 500 q 150 655 146 603 q 154 731 154 708 q 126 831 154 799 q 0 872 90 872 l 0 1015 q 270 944 196 1015 q 326 777 326 891 q 322 707 326 747 q 313 593 313 612 q 347 482 313 518 q 500 438 390 438 l 500 294 "},"\u2030":{x_min:0,x_max:1681,ha:1775,o:"m 861 484 q 1048 404 979 484 q 1111 228 1111 332 q 1048 51 1111 123 q 859 -29 979 -29 q 672 50 740 -29 q 610 227 610 122 q 672 403 610 331 q 861 484 741 484 m 861 120 q 939 151 911 120 q 967 226 967 183 q 942 299 967 270 q 861 333 912 333 q 783 301 811 333 q 756 226 756 269 q 783 151 756 182 q 861 120 810 120 m 904 984 l 316 -28 l 205 -29 l 793 983 l 904 984 m 250 984 q 436 904 366 984 q 499 730 499 832 q 436 552 499 626 q 248 472 366 472 q 62 552 132 472 q 0 728 0 624 q 62 903 0 831 q 250 984 132 984 m 249 835 q 169 801 198 835 q 140 725 140 768 q 167 652 140 683 q 247 621 195 621 q 327 654 298 621 q 357 730 357 687 q 329 803 357 772 q 249 835 301 835 m 1430 484 q 1618 404 1548 484 q 1681 228 1681 332 q 1618 51 1681 123 q 1429 -29 1548 -29 q 1241 50 1309 -29 q 1179 227 1179 122 q 1241 403 1179 331 q 1430 484 1311 484 m 1431 120 q 1509 151 1481 120 q 1537 226 1537 183 q 1511 299 1537 270 q 1431 333 1482 333 q 1352 301 1380 333 q 1325 226 1325 269 q 1352 151 1325 182 q 1431 120 1379 120 "},a:{x_min:0,x_max:700,ha:786,o:"m 700 0 l 488 0 q 465 93 469 45 q 365 5 427 37 q 233 -26 303 -26 q 65 37 130 -26 q 0 205 0 101 q 120 409 0 355 q 343 452 168 431 q 465 522 465 468 q 424 588 465 565 q 337 611 384 611 q 250 581 285 611 q 215 503 215 552 l 26 503 q 113 707 26 633 q 328 775 194 775 q 538 723 444 775 q 657 554 657 659 l 657 137 q 666 73 657 101 q 700 33 675 45 l 700 0 m 465 297 l 465 367 q 299 322 358 340 q 193 217 193 287 q 223 150 193 174 q 298 127 254 127 q 417 175 370 127 q 465 297 465 224 "},"\u2014":{x_min:0,x_max:941.671875,ha:1039,o:"m 941 297 l 0 297 l 0 450 l 941 450 l 941 297 "},"=":{x_min:29.171875,x_max:798.609375,ha:828,o:"m 798 502 l 29 502 l 29 635 l 798 635 l 798 502 m 798 204 l 29 204 l 29 339 l 798 339 l 798 204 "},N:{x_min:0,x_max:833,ha:949,o:"m 833 0 l 617 0 l 206 695 l 206 0 l 0 0 l 0 1013 l 216 1013 l 629 315 l 629 1013 l 833 1013 l 833 0 "},\u03C1:{x_min:0,x_max:722,ha:810,o:"m 364 -17 q 271 0 313 -17 q 194 48 230 16 l 194 -278 l 0 -278 l 0 370 q 87 656 0 548 q 358 775 183 775 q 626 655 524 775 q 722 372 722 541 q 621 95 722 208 q 364 -17 520 -17 m 360 607 q 237 529 280 607 q 201 377 201 463 q 234 229 201 292 q 355 147 277 147 q 467 210 419 147 q 515 374 515 273 q 471 537 515 468 q 360 607 428 607 "},"2":{x_min:64,x_max:764,ha:828,o:"m 764 685 q 675 452 764 541 q 484 325 637 415 q 307 168 357 250 l 754 168 l 754 0 l 64 0 q 193 301 64 175 q 433 480 202 311 q 564 673 564 576 q 519 780 564 737 q 416 824 475 824 q 318 780 358 824 q 262 633 270 730 l 80 633 q 184 903 80 807 q 415 988 276 988 q 654 907 552 988 q 764 685 764 819 "},"\xAF":{x_min:0,x_max:775,ha:771,o:"m 775 958 l 0 958 l 0 1111 l 775 1111 l 775 958 "},Z:{x_min:0,x_max:804.171875,ha:906,o:"m 804 836 l 251 182 l 793 182 l 793 0 l 0 0 l 0 176 l 551 830 l 11 830 l 11 1013 l 804 1013 l 804 836 "},u:{x_min:0,x_max:668,ha:782,o:"m 668 0 l 474 0 l 474 89 q 363 9 425 37 q 233 -19 301 -19 q 61 53 123 -19 q 0 239 0 126 l 0 749 l 199 749 l 199 296 q 225 193 199 233 q 316 146 257 146 q 424 193 380 146 q 469 304 469 240 l 469 749 l 668 749 l 668 0 "},k:{x_min:0,x_max:688.890625,ha:771,o:"m 688 0 l 450 0 l 270 316 l 196 237 l 196 0 l 0 0 l 0 1013 l 196 1013 l 196 483 l 433 748 l 675 748 l 413 469 l 688 0 "},\u0397:{x_min:0,x_max:837,ha:950,o:"m 837 0 l 627 0 l 627 450 l 210 450 l 210 0 l 0 0 l 0 1013 l 210 1013 l 210 635 l 627 635 l 627 1013 l 837 1013 l 837 0 "},\u0391:{x_min:0,x_max:966.671875,ha:1043,o:"m 966 0 l 747 0 l 679 208 l 286 208 l 218 0 l 0 0 l 361 1013 l 600 1013 l 966 0 m 623 376 l 480 809 l 340 376 l 623 376 "},s:{x_min:0,x_max:681,ha:775,o:"m 681 229 q 568 33 681 105 q 340 -29 471 -29 q 107 39 202 -29 q 0 245 0 114 l 201 245 q 252 155 201 189 q 358 128 295 128 q 436 144 401 128 q 482 205 482 166 q 363 284 482 255 q 143 348 181 329 q 25 533 25 408 q 129 716 25 647 q 340 778 220 778 q 554 710 465 778 q 658 522 643 643 l 463 522 q 419 596 458 570 q 327 622 380 622 q 255 606 290 622 q 221 556 221 590 q 339 473 221 506 q 561 404 528 420 q 681 229 681 344 "},B:{x_min:0,x_max:835,ha:938,o:"m 674 547 q 791 450 747 518 q 835 304 835 383 q 718 75 835 158 q 461 0 612 0 l 0 0 l 0 1013 l 477 1013 q 697 951 609 1013 q 797 754 797 880 q 765 630 797 686 q 674 547 734 575 m 438 621 q 538 646 495 621 q 590 730 590 676 q 537 814 590 785 q 436 838 494 838 l 199 838 l 199 621 l 438 621 m 445 182 q 561 211 513 182 q 618 311 618 247 q 565 410 618 375 q 444 446 512 446 l 199 446 l 199 182 l 445 182 "},"\u2026":{x_min:0,x_max:819,ha:963,o:"m 206 0 l 0 0 l 0 207 l 206 207 l 206 0 m 512 0 l 306 0 l 306 207 l 512 207 l 512 0 m 819 0 l 613 0 l 613 207 l 819 207 l 819 0 "},"?":{x_min:1,x_max:687,ha:785,o:"m 687 734 q 621 563 687 634 q 501 454 560 508 q 436 293 436 386 l 251 293 l 251 391 q 363 557 251 462 q 476 724 476 653 q 432 827 476 788 q 332 866 389 866 q 238 827 275 866 q 195 699 195 781 l 1 699 q 110 955 1 861 q 352 1040 210 1040 q 582 963 489 1040 q 687 734 687 878 m 446 0 l 243 0 l 243 203 l 446 203 l 446 0 "},H:{x_min:0,x_max:838,ha:953,o:"m 838 0 l 628 0 l 628 450 l 210 450 l 210 0 l 0 0 l 0 1013 l 210 1013 l 210 635 l 628 635 l 628 1013 l 838 1013 l 838 0 "},\u03BD:{x_min:0,x_max:740.28125,ha:828,o:"m 740 749 l 473 0 l 266 0 l 0 749 l 222 749 l 373 211 l 529 749 l 740 749 "},c:{x_min:0,x_max:751.390625,ha:828,o:"m 751 282 q 625 58 725 142 q 384 -26 526 -26 q 107 84 215 -26 q 0 366 0 195 q 98 651 0 536 q 370 774 204 774 q 616 700 518 774 q 751 486 715 626 l 536 486 q 477 570 516 538 q 380 607 434 607 q 248 533 298 607 q 204 378 204 466 q 242 219 204 285 q 377 139 290 139 q 483 179 438 139 q 543 282 527 220 l 751 282 "},"\xB6":{x_min:0,x_max:566.671875,ha:678,o:"m 21 892 l 52 892 l 98 761 l 145 892 l 176 892 l 178 741 l 157 741 l 157 867 l 108 741 l 88 741 l 40 871 l 40 741 l 21 741 l 21 892 m 308 854 l 308 731 q 252 691 308 691 q 227 691 240 691 q 207 696 213 695 l 207 712 l 253 706 q 288 733 288 706 l 288 763 q 244 741 279 741 q 193 797 193 741 q 261 860 193 860 q 287 860 273 860 q 308 854 302 855 m 288 842 l 263 843 q 213 796 213 843 q 248 756 213 756 q 288 796 288 756 l 288 842 m 566 988 l 502 988 l 502 -1 l 439 -1 l 439 988 l 317 988 l 317 -1 l 252 -1 l 252 602 q 81 653 155 602 q 0 805 0 711 q 101 989 0 918 q 309 1053 194 1053 l 566 1053 l 566 988 "},\u03B2:{x_min:0,x_max:703,ha:789,o:"m 510 539 q 651 429 600 501 q 703 262 703 357 q 617 53 703 136 q 404 -29 532 -29 q 199 51 279 -29 l 199 -278 l 0 -278 l 0 627 q 77 911 0 812 q 343 1021 163 1021 q 551 957 464 1021 q 649 769 649 886 q 613 638 649 697 q 510 539 577 579 m 344 136 q 452 181 408 136 q 497 291 497 227 q 435 409 497 369 q 299 444 381 444 l 299 600 q 407 634 363 600 q 452 731 452 669 q 417 820 452 784 q 329 857 382 857 q 217 775 246 857 q 199 622 199 725 l 199 393 q 221 226 199 284 q 344 136 254 136 "},\u039C:{x_min:0,x_max:1019,ha:1132,o:"m 1019 0 l 823 0 l 823 818 l 617 0 l 402 0 l 194 818 l 194 0 l 0 0 l 0 1013 l 309 1013 l 509 241 l 708 1013 l 1019 1013 l 1019 0 "},\u038C:{x_min:.15625,x_max:1174,ha:1271,o:"m 676 -29 q 312 127 451 -29 q 179 505 179 277 q 311 883 179 733 q 676 1040 449 1040 q 1040 883 901 1040 q 1174 505 1174 733 q 1041 127 1174 277 q 676 -29 903 -29 m 676 154 q 890 266 811 154 q 961 506 961 366 q 891 745 961 648 q 676 857 812 857 q 462 747 541 857 q 392 506 392 648 q 461 266 392 365 q 676 154 540 154 m 314 1034 l 98 779 l 0 779 l 136 1034 l 314 1034 "},\u0389:{x_min:0,x_max:1248,ha:1361,o:"m 1248 0 l 1038 0 l 1038 450 l 621 450 l 621 0 l 411 0 l 411 1012 l 621 1012 l 621 635 l 1038 635 l 1038 1012 l 1248 1012 l 1248 0 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"\u2022":{x_min:-27.78125,x_max:691.671875,ha:775,o:"m 691 508 q 588 252 691 358 q 331 147 486 147 q 77 251 183 147 q -27 508 -27 355 q 75 761 -27 655 q 331 868 179 868 q 585 763 479 868 q 691 508 691 658 "},"\xA5":{x_min:0,x_max:836,ha:931,o:"m 195 625 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 l 650 625 l 777 625 l 777 472 l 578 472 l 538 389 l 777 389 l 777 236 l 532 236 l 532 0 l 322 0 l 322 236 l 79 236 l 79 389 l 315 389 l 273 472 l 79 472 l 79 625 l 195 625 "},"(":{x_min:0,x_max:388.890625,ha:486,o:"m 388 -293 l 243 -293 q 70 14 130 -134 q 0 357 0 189 q 69 703 0 526 q 243 1013 129 856 l 388 1013 q 248 695 297 860 q 200 358 200 530 q 248 24 200 187 q 388 -293 297 -138 "},U:{x_min:0,x_max:813,ha:926,o:"m 813 362 q 697 79 813 187 q 405 -29 582 -29 q 114 78 229 -29 q 0 362 0 186 l 0 1013 l 210 1013 l 210 387 q 260 226 210 291 q 408 154 315 154 q 554 226 500 154 q 603 387 603 291 l 603 1013 l 813 1013 l 813 362 "},\u03B3:{x_min:.0625,x_max:729.234375,ha:815,o:"m 729 749 l 457 37 l 457 -278 l 257 -278 l 257 37 q 218 155 243 95 q 170 275 194 215 l 0 749 l 207 749 l 363 284 l 522 749 l 729 749 "},\u03B1:{x_min:-1,x_max:722,ha:835,o:"m 722 0 l 531 0 l 530 101 q 433 8 491 41 q 304 -25 375 -25 q 72 104 157 -25 q -1 372 -1 216 q 72 643 -1 530 q 308 775 158 775 q 433 744 375 775 q 528 656 491 713 l 528 749 l 722 749 l 722 0 m 361 601 q 233 527 277 601 q 196 375 196 464 q 232 224 196 288 q 358 144 277 144 q 487 217 441 144 q 528 370 528 281 q 489 523 528 457 q 361 601 443 601 "},F:{x_min:0,x_max:706.953125,ha:778,o:"m 706 837 l 206 837 l 206 606 l 645 606 l 645 431 l 206 431 l 206 0 l 0 0 l 0 1013 l 706 1013 l 706 837 "},"\xAD":{x_min:0,x_max:704.171875,ha:801,o:"m 704 297 l 0 297 l 0 450 l 704 450 l 704 297 "},":":{x_min:0,x_max:207,ha:304,o:"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 m 207 0 l 0 0 l 0 207 l 207 207 l 207 0 "},\u03A7:{x_min:0,x_max:894.453125,ha:978,o:"m 894 0 l 654 0 l 445 351 l 238 0 l 0 0 l 316 516 l 0 1013 l 238 1013 l 445 660 l 652 1013 l 894 1013 l 577 519 l 894 0 "},"*":{x_min:115,x_max:713,ha:828,o:"m 713 740 l 518 688 l 651 525 l 531 438 l 412 612 l 290 439 l 173 523 l 308 688 l 115 741 l 159 880 l 342 816 l 343 1013 l 482 1013 l 481 816 l 664 880 l 713 740 "},"\u2020":{x_min:0,x_max:809,ha:894,o:"m 509 804 l 809 804 l 809 621 l 509 621 l 509 0 l 299 0 l 299 621 l 0 621 l 0 804 l 299 804 l 299 1011 l 509 1011 l 509 804 "},"\xB0":{x_min:-1,x_max:363,ha:460,o:"m 181 808 q 46 862 94 808 q -1 992 -1 917 q 44 1118 -1 1066 q 181 1175 96 1175 q 317 1118 265 1175 q 363 991 363 1066 q 315 862 363 917 q 181 808 267 808 m 181 908 q 240 933 218 908 q 263 992 263 958 q 242 1051 263 1027 q 181 1075 221 1075 q 120 1050 142 1075 q 99 991 99 1026 q 120 933 99 958 q 181 908 142 908 "},V:{x_min:0,x_max:895.828125,ha:997,o:"m 895 1013 l 550 0 l 347 0 l 0 1013 l 231 1013 l 447 256 l 666 1013 l 895 1013 "},\u039E:{x_min:0,x_max:751.390625,ha:800,o:"m 733 826 l 5 826 l 5 1012 l 733 1012 l 733 826 m 681 432 l 65 432 l 65 617 l 681 617 l 681 432 m 751 0 l 0 0 l 0 183 l 751 183 l 751 0 "},"\xA0":{x_min:0,x_max:0,ha:853},\u03AB:{x_min:-.21875,x_max:836.171875,ha:914,o:"m 610 1046 l 454 1046 l 454 1215 l 610 1215 l 610 1046 m 369 1046 l 212 1046 l 212 1215 l 369 1215 l 369 1046 m 836 1012 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1012 l 208 1012 l 427 576 l 626 1012 l 836 1012 "},"0":{x_min:51,x_max:779,ha:828,o:"m 415 -26 q 142 129 242 -26 q 51 476 51 271 q 141 825 51 683 q 415 984 242 984 q 687 825 585 984 q 779 476 779 682 q 688 131 779 271 q 415 -26 587 -26 m 415 137 q 529 242 485 137 q 568 477 568 338 q 530 713 568 619 q 415 821 488 821 q 303 718 344 821 q 262 477 262 616 q 301 237 262 337 q 415 137 341 137 "},"\u201D":{x_min:0,x_max:469,ha:567,o:"m 192 834 q 137 692 192 751 q 0 626 83 634 l 0 697 q 101 831 101 723 l 0 831 l 0 1013 l 192 1013 l 192 834 m 469 834 q 414 692 469 751 q 277 626 360 634 l 277 697 q 379 831 379 723 l 277 831 l 277 1013 l 469 1013 l 469 834 "},"@":{x_min:0,x_max:1276,ha:1374,o:"m 1115 -52 q 895 -170 1015 -130 q 647 -211 776 -211 q 158 -34 334 -211 q 0 360 0 123 q 179 810 0 621 q 698 1019 377 1019 q 1138 859 981 1019 q 1276 514 1276 720 q 1173 210 1276 335 q 884 75 1062 75 q 784 90 810 75 q 737 186 749 112 q 647 104 698 133 q 532 75 596 75 q 360 144 420 75 q 308 308 308 205 q 398 568 308 451 q 638 696 497 696 q 731 671 690 696 q 805 604 772 647 l 840 673 l 964 673 q 886 373 915 490 q 856 239 856 257 q 876 201 856 214 q 920 188 895 188 q 1084 284 1019 188 q 1150 511 1150 380 q 1051 779 1150 672 q 715 905 934 905 q 272 734 439 905 q 121 363 121 580 q 250 41 121 170 q 647 -103 394 -103 q 863 -67 751 -103 q 1061 26 975 -32 l 1115 -52 m 769 483 q 770 500 770 489 q 733 567 770 539 q 651 596 695 596 q 508 504 566 596 q 457 322 457 422 q 483 215 457 256 q 561 175 509 175 q 671 221 625 175 q 733 333 718 268 l 769 483 "},\u038A:{x_min:0,x_max:619,ha:732,o:"m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 m 619 0 l 411 0 l 411 1012 l 619 1012 l 619 0 "},i:{x_min:14,x_max:214,ha:326,o:"m 214 830 l 14 830 l 14 1013 l 214 1013 l 214 830 m 214 0 l 14 0 l 14 748 l 214 748 l 214 0 "},\u0392:{x_min:0,x_max:835,ha:961,o:"m 675 547 q 791 450 747 518 q 835 304 835 383 q 718 75 835 158 q 461 0 612 0 l 0 0 l 0 1013 l 477 1013 q 697 951 609 1013 q 797 754 797 880 q 766 630 797 686 q 675 547 734 575 m 439 621 q 539 646 496 621 q 590 730 590 676 q 537 814 590 785 q 436 838 494 838 l 199 838 l 199 621 l 439 621 m 445 182 q 561 211 513 182 q 618 311 618 247 q 565 410 618 375 q 444 446 512 446 l 199 446 l 199 182 l 445 182 "},\u03C5:{x_min:0,x_max:656,ha:767,o:"m 656 416 q 568 55 656 145 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 191 l 0 749 l 200 749 l 200 369 q 216 222 200 268 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 749 l 656 749 l 656 416 "},"]":{x_min:0,x_max:349,ha:446,o:"m 349 -300 l 0 -300 l 0 -154 l 163 -154 l 163 866 l 0 866 l 0 1013 l 349 1013 l 349 -300 "},m:{x_min:0,x_max:1065,ha:1174,o:"m 1065 0 l 866 0 l 866 483 q 836 564 866 532 q 759 596 807 596 q 663 555 700 596 q 627 454 627 514 l 627 0 l 433 0 l 433 481 q 403 563 433 531 q 323 596 374 596 q 231 554 265 596 q 197 453 197 513 l 197 0 l 0 0 l 0 748 l 189 748 l 189 665 q 279 745 226 715 q 392 775 333 775 q 509 744 455 775 q 606 659 563 713 q 695 744 640 713 q 814 775 749 775 q 992 702 920 775 q 1065 523 1065 630 l 1065 0 "},\u03C7:{x_min:0,x_max:759.71875,ha:847,o:"m 759 -299 l 548 -299 l 379 66 l 215 -299 l 0 -299 l 261 233 l 13 749 l 230 749 l 379 400 l 527 749 l 738 749 l 500 238 l 759 -299 "},"8":{x_min:57,x_max:770,ha:828,o:"m 625 516 q 733 416 697 477 q 770 284 770 355 q 675 69 770 161 q 415 -29 574 -29 q 145 65 244 -29 q 57 273 57 150 q 93 413 57 350 q 204 516 130 477 q 112 609 142 556 q 83 718 83 662 q 177 905 83 824 q 414 986 272 986 q 650 904 555 986 q 745 715 745 822 q 716 608 745 658 q 625 516 688 558 m 414 590 q 516 624 479 590 q 553 706 553 659 q 516 791 553 755 q 414 828 480 828 q 311 792 348 828 q 275 706 275 757 q 310 624 275 658 q 414 590 345 590 m 413 135 q 527 179 487 135 q 564 279 564 218 q 525 386 564 341 q 411 436 482 436 q 298 387 341 436 q 261 282 261 344 q 300 178 261 222 q 413 135 340 135 "},\u03AF:{x_min:42,x_max:371.171875,ha:389,o:"m 242 0 l 42 0 l 42 748 l 242 748 l 242 0 m 371 1039 l 169 823 l 71 823 l 193 1039 l 371 1039 "},\u0396:{x_min:0,x_max:804.171875,ha:886,o:"m 804 835 l 251 182 l 793 182 l 793 0 l 0 0 l 0 176 l 551 829 l 11 829 l 11 1012 l 804 1012 l 804 835 "},R:{x_min:0,x_max:836.109375,ha:947,o:"m 836 0 l 608 0 q 588 53 596 20 q 581 144 581 86 q 581 179 581 162 q 581 215 581 197 q 553 345 581 306 q 428 393 518 393 l 208 393 l 208 0 l 0 0 l 0 1013 l 491 1013 q 720 944 630 1013 q 819 734 819 869 q 778 584 819 654 q 664 485 738 513 q 757 415 727 463 q 794 231 794 358 l 794 170 q 800 84 794 116 q 836 31 806 51 l 836 0 m 462 838 l 208 838 l 208 572 l 452 572 q 562 604 517 572 q 612 704 612 640 q 568 801 612 765 q 462 838 525 838 "},o:{x_min:0,x_max:764,ha:871,o:"m 380 -26 q 105 86 211 -26 q 0 371 0 199 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 371 764 544 q 658 86 764 199 q 380 -26 552 -26 m 379 141 q 515 216 466 141 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 217 204 282 q 379 141 294 141 "},"5":{x_min:59,x_max:767,ha:828,o:"m 767 319 q 644 59 767 158 q 382 -29 533 -29 q 158 43 247 -29 q 59 264 59 123 l 252 264 q 295 165 252 201 q 400 129 339 129 q 512 172 466 129 q 564 308 564 220 q 514 437 564 387 q 398 488 464 488 q 329 472 361 488 q 271 420 297 456 l 93 428 l 157 958 l 722 958 l 722 790 l 295 790 l 271 593 q 348 635 306 621 q 431 649 389 649 q 663 551 560 649 q 767 319 767 453 "},"7":{x_min:65.28125,x_max:762.5,ha:828,o:"m 762 808 q 521 435 604 626 q 409 0 438 244 l 205 0 q 313 422 227 234 q 548 789 387 583 l 65 789 l 65 958 l 762 958 l 762 808 "},K:{x_min:0,x_max:900,ha:996,o:"m 900 0 l 647 0 l 316 462 l 208 355 l 208 0 l 0 0 l 0 1013 l 208 1013 l 208 595 l 604 1013 l 863 1013 l 461 603 l 900 0 "},",":{x_min:0,x_max:206,ha:303,o:"m 206 5 q 150 -151 206 -88 q 0 -238 94 -213 l 0 -159 q 84 -100 56 -137 q 111 -2 111 -62 l 0 -2 l 0 205 l 206 205 l 206 5 "},d:{x_min:0,x_max:722,ha:836,o:"m 722 0 l 530 0 l 530 101 q 303 -26 449 -26 q 72 103 155 -26 q 0 373 0 214 q 72 642 0 528 q 305 775 156 775 q 433 743 373 775 q 530 656 492 712 l 530 1013 l 722 1013 l 722 0 m 361 600 q 234 523 280 600 q 196 372 196 458 q 233 220 196 286 q 358 143 278 143 q 489 216 442 143 q 530 369 530 280 q 491 522 530 456 q 361 600 443 600 "},"\xA8":{x_min:212,x_max:609,ha:933,o:"m 609 1046 l 453 1046 l 453 1216 l 609 1216 l 609 1046 m 369 1046 l 212 1046 l 212 1216 l 369 1216 l 369 1046 "},E:{x_min:0,x_max:761.109375,ha:824,o:"m 761 0 l 0 0 l 0 1013 l 734 1013 l 734 837 l 206 837 l 206 621 l 690 621 l 690 446 l 206 446 l 206 186 l 761 186 l 761 0 "},Y:{x_min:0,x_max:836,ha:931,o:"m 836 1013 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 "},'"':{x_min:0,x_max:357,ha:454,o:"m 357 604 l 225 604 l 225 988 l 357 988 l 357 604 m 132 604 l 0 604 l 0 988 l 132 988 l 132 604 "},"\u2039":{x_min:35.984375,x_max:791.671875,ha:828,o:"m 791 17 l 36 352 l 35 487 l 791 823 l 791 672 l 229 421 l 791 168 l 791 17 "},"\u201E":{x_min:0,x_max:483,ha:588,o:"m 206 5 q 150 -151 206 -88 q 0 -238 94 -213 l 0 -159 q 84 -100 56 -137 q 111 -2 111 -62 l 0 -2 l 0 205 l 206 205 l 206 5 m 483 5 q 427 -151 483 -88 q 277 -238 371 -213 l 277 -159 q 361 -100 334 -137 q 388 -2 388 -62 l 277 -2 l 277 205 l 483 205 l 483 5 "},\u03B4:{x_min:6,x_max:732,ha:835,o:"m 732 352 q 630 76 732 177 q 354 -25 529 -25 q 101 74 197 -25 q 6 333 6 174 q 89 581 6 480 q 323 690 178 690 q 66 864 201 787 l 66 1013 l 669 1013 l 669 856 l 348 856 q 532 729 461 789 q 673 566 625 651 q 732 352 732 465 m 419 551 q 259 496 321 551 q 198 344 198 441 q 238 208 198 267 q 357 140 283 140 q 484 203 437 140 q 526 344 526 260 q 499 466 526 410 q 419 551 473 521 "},\u03AD:{x_min:16.671875,x_max:652.78125,ha:742,o:"m 652 259 q 565 49 652 123 q 340 -25 479 -25 q 102 39 188 -25 q 16 197 16 104 q 45 299 16 250 q 134 390 75 348 q 58 456 86 419 q 25 552 25 502 q 120 717 25 653 q 322 776 208 776 q 537 710 456 776 q 625 508 625 639 l 445 508 q 415 585 445 563 q 327 608 386 608 q 254 590 293 608 q 215 544 215 573 q 252 469 215 490 q 336 453 280 453 q 369 455 347 453 q 400 456 391 456 l 400 308 l 329 308 q 247 291 280 308 q 204 223 204 269 q 255 154 204 172 q 345 143 286 143 q 426 174 398 143 q 454 259 454 206 l 652 259 m 579 1039 l 377 823 l 279 823 l 401 1039 l 579 1039 "},\u03C9:{x_min:0,x_max:945,ha:1051,o:"m 565 323 l 565 289 q 577 190 565 221 q 651 142 597 142 q 718 189 694 142 q 742 365 742 237 q 703 565 742 462 q 610 749 671 650 l 814 749 q 910 547 876 650 q 945 337 945 444 q 874 96 945 205 q 668 -29 793 -29 q 551 0 608 -29 q 470 78 495 30 q 390 0 444 28 q 276 -29 337 -29 q 69 96 149 -29 q 0 337 0 204 q 36 553 0 444 q 130 749 68 650 l 334 749 q 241 565 273 650 q 203 365 203 461 q 219 222 203 279 q 292 142 243 142 q 360 183 342 142 q 373 271 373 211 q 372 298 372 285 q 372 323 372 311 l 372 528 l 566 528 l 565 323 "},"\xB4":{x_min:0,x_max:132,ha:299,o:"m 132 604 l 0 604 l 0 988 l 132 988 l 132 604 "},"\xB1":{x_min:29,x_max:798,ha:828,o:"m 798 480 l 484 480 l 484 254 l 344 254 l 344 480 l 29 480 l 29 615 l 344 615 l 344 842 l 484 842 l 484 615 l 798 615 l 798 480 m 798 0 l 29 0 l 29 136 l 798 136 l 798 0 "},"|":{x_min:0,x_max:143,ha:240,o:"m 143 462 l 0 462 l 0 984 l 143 984 l 143 462 m 143 -242 l 0 -242 l 0 280 l 143 280 l 143 -242 "},\u03CB:{x_min:0,x_max:656,ha:767,o:"m 535 810 l 406 810 l 406 952 l 535 952 l 535 810 m 271 810 l 142 810 l 142 952 l 271 952 l 271 810 m 656 417 q 568 55 656 146 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 200 369 q 216 222 200 268 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 748 l 656 748 l 656 417 "},"\xA7":{x_min:0,x_max:633,ha:731,o:"m 633 469 q 601 356 633 406 q 512 274 569 305 q 570 197 548 242 q 593 105 593 152 q 501 -76 593 -5 q 301 -142 416 -142 q 122 -82 193 -142 q 43 108 43 -15 l 212 108 q 251 27 220 53 q 321 1 283 1 q 389 23 360 1 q 419 83 419 46 q 310 194 419 139 q 108 297 111 295 q 0 476 0 372 q 33 584 0 537 q 120 659 62 626 q 72 720 91 686 q 53 790 53 755 q 133 978 53 908 q 312 1042 207 1042 q 483 984 412 1042 q 574 807 562 921 l 409 807 q 379 875 409 851 q 307 900 349 900 q 244 881 270 900 q 218 829 218 862 q 324 731 218 781 q 524 636 506 647 q 633 469 633 565 m 419 334 q 473 411 473 372 q 451 459 473 436 q 390 502 430 481 l 209 595 q 167 557 182 577 q 153 520 153 537 q 187 461 153 491 q 263 413 212 440 l 419 334 "},b:{x_min:0,x_max:722,ha:822,o:"m 416 -26 q 289 6 346 -26 q 192 101 232 39 l 192 0 l 0 0 l 0 1013 l 192 1013 l 192 656 q 286 743 226 712 q 415 775 346 775 q 649 644 564 775 q 722 374 722 533 q 649 106 722 218 q 416 -26 565 -26 m 361 600 q 232 524 279 600 q 192 371 192 459 q 229 221 192 284 q 357 145 275 145 q 487 221 441 145 q 526 374 526 285 q 488 523 526 460 q 361 600 442 600 "},q:{x_min:0,x_max:722,ha:833,o:"m 722 -298 l 530 -298 l 530 97 q 306 -25 449 -25 q 73 104 159 -25 q 0 372 0 216 q 72 643 0 529 q 305 775 156 775 q 430 742 371 775 q 530 654 488 709 l 530 750 l 722 750 l 722 -298 m 360 601 q 234 527 278 601 q 197 378 197 466 q 233 225 197 291 q 357 144 277 144 q 488 217 441 144 q 530 370 530 282 q 491 523 530 459 q 360 601 443 601 "},\u03A9:{x_min:-.03125,x_max:1008.53125,ha:1108,o:"m 1008 0 l 589 0 l 589 199 q 717 368 670 265 q 764 580 764 471 q 698 778 764 706 q 504 855 629 855 q 311 773 380 855 q 243 563 243 691 q 289 360 243 458 q 419 199 336 262 l 419 0 l 0 0 l 0 176 l 202 176 q 77 355 123 251 q 32 569 32 459 q 165 908 32 776 q 505 1040 298 1040 q 844 912 711 1040 q 977 578 977 785 q 931 362 977 467 q 805 176 886 256 l 1008 176 l 1008 0 "},\u03CD:{x_min:0,x_max:656,ha:767,o:"m 656 417 q 568 55 656 146 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 201 369 q 218 222 201 269 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 748 l 656 748 l 656 417 m 579 1039 l 378 823 l 279 823 l 401 1039 l 579 1039 "},z:{x_min:0,x_max:663.890625,ha:753,o:"m 663 0 l 0 0 l 0 154 l 411 591 l 25 591 l 25 749 l 650 749 l 650 584 l 245 165 l 663 165 l 663 0 "},"\u2122":{x_min:0,x_max:951,ha:1063,o:"m 405 921 l 255 921 l 255 506 l 149 506 l 149 921 l 0 921 l 0 1013 l 405 1013 l 405 921 m 951 506 l 852 506 l 852 916 l 750 506 l 643 506 l 539 915 l 539 506 l 442 506 l 442 1013 l 595 1012 l 695 625 l 794 1013 l 951 1013 l 951 506 "},\u03AE:{x_min:0,x_max:669,ha:779,o:"m 669 -278 l 469 -278 l 469 390 q 448 526 469 473 q 348 606 417 606 q 244 553 288 606 q 201 441 201 501 l 201 0 l 0 0 l 0 749 l 201 749 l 201 665 q 301 744 244 715 q 423 774 359 774 q 606 685 538 774 q 669 484 669 603 l 669 -278 m 495 1039 l 293 823 l 195 823 l 317 1039 l 495 1039 "},\u0398:{x_min:0,x_max:993,ha:1092,o:"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 133 883 0 733 q 497 1040 272 1040 q 861 883 722 1040 q 993 505 993 733 q 861 127 993 277 q 497 -29 722 -29 m 497 154 q 711 266 631 154 q 782 506 782 367 q 712 746 782 648 q 497 858 634 858 q 281 746 361 858 q 211 506 211 648 q 280 266 211 365 q 497 154 359 154 m 676 430 l 316 430 l 316 593 l 676 593 l 676 430 "},"\xAE":{x_min:3,x_max:1007,ha:1104,o:"m 507 -6 q 129 153 269 -6 q 3 506 3 298 q 127 857 3 713 q 502 1017 266 1017 q 880 855 740 1017 q 1007 502 1007 711 q 882 152 1007 295 q 507 -6 743 -6 m 502 934 q 184 800 302 934 q 79 505 79 680 q 184 210 79 331 q 501 76 302 76 q 819 210 701 76 q 925 507 925 331 q 820 800 925 682 q 502 934 704 934 m 782 190 l 639 190 q 627 225 632 202 q 623 285 623 248 l 623 326 q 603 411 623 384 q 527 439 584 439 l 388 439 l 388 190 l 257 190 l 257 829 l 566 829 q 709 787 654 829 q 772 654 772 740 q 746 559 772 604 q 675 497 720 514 q 735 451 714 483 q 756 341 756 419 l 756 299 q 760 244 756 265 q 782 212 764 223 l 782 190 m 546 718 l 388 718 l 388 552 l 541 552 q 612 572 584 552 q 641 635 641 593 q 614 695 641 672 q 546 718 587 718 "},"~":{x_min:0,x_max:851,ha:949,o:"m 851 968 q 795 750 851 831 q 599 656 730 656 q 406 744 506 656 q 259 832 305 832 q 162 775 193 832 q 139 656 139 730 l 0 656 q 58 871 0 787 q 251 968 124 968 q 442 879 341 968 q 596 791 544 791 q 691 849 663 791 q 712 968 712 892 l 851 968 "},\u0395:{x_min:0,x_max:761.546875,ha:824,o:"m 761 0 l 0 0 l 0 1012 l 735 1012 l 735 836 l 206 836 l 206 621 l 690 621 l 690 446 l 206 446 l 206 186 l 761 186 l 761 0 "},"\xB3":{x_min:0,x_max:467,ha:564,o:"m 467 555 q 393 413 467 466 q 229 365 325 365 q 70 413 134 365 q 0 565 0 467 l 123 565 q 163 484 131 512 q 229 461 190 461 q 299 486 269 461 q 329 553 329 512 q 281 627 329 607 q 187 641 248 641 l 187 722 q 268 737 237 722 q 312 804 312 758 q 285 859 312 837 q 224 882 259 882 q 165 858 189 882 q 135 783 140 834 l 12 783 q 86 930 20 878 q 230 976 145 976 q 379 931 314 976 q 444 813 444 887 q 423 744 444 773 q 365 695 402 716 q 439 640 412 676 q 467 555 467 605 "},"[":{x_min:0,x_max:347.21875,ha:444,o:"m 347 -300 l 0 -300 l 0 1013 l 347 1013 l 347 866 l 188 866 l 188 -154 l 347 -154 l 347 -300 "},L:{x_min:0,x_max:704.171875,ha:763,o:"m 704 0 l 0 0 l 0 1013 l 208 1013 l 208 186 l 704 186 l 704 0 "},\u03C3:{x_min:0,x_max:851.3125,ha:940,o:"m 851 594 l 712 594 q 761 369 761 485 q 658 83 761 191 q 379 -25 555 -25 q 104 87 208 -25 q 0 372 0 200 q 103 659 0 544 q 378 775 207 775 q 464 762 407 775 q 549 750 521 750 l 851 750 l 851 594 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 608 465 608 q 244 530 293 608 q 203 373 203 465 q 244 218 203 283 q 379 142 293 142 "},\u03B6:{x_min:0,x_max:622,ha:701,o:"m 622 -32 q 604 -158 622 -98 q 551 -278 587 -218 l 373 -278 q 426 -180 406 -229 q 446 -80 446 -131 q 421 -22 446 -37 q 354 -8 397 -8 q 316 -9 341 -8 q 280 -11 291 -11 q 75 69 150 -11 q 0 283 0 150 q 87 596 0 437 q 291 856 162 730 l 47 856 l 47 1013 l 592 1013 l 592 904 q 317 660 422 800 q 197 318 197 497 q 306 141 197 169 q 510 123 408 131 q 622 -32 622 102 "},\u03B8:{x_min:0,x_max:714,ha:817,o:"m 357 1022 q 633 833 534 1022 q 714 486 714 679 q 634 148 714 288 q 354 -25 536 -25 q 79 147 175 -25 q 0 481 0 288 q 79 831 0 679 q 357 1022 177 1022 m 510 590 q 475 763 510 687 q 351 862 430 862 q 233 763 272 862 q 204 590 204 689 l 510 590 m 510 440 l 204 440 q 233 251 204 337 q 355 131 274 131 q 478 248 434 131 q 510 440 510 337 "},\u039F:{x_min:0,x_max:995,ha:1092,o:"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 132 883 0 733 q 497 1040 270 1040 q 861 883 722 1040 q 995 505 995 733 q 862 127 995 277 q 497 -29 724 -29 m 497 154 q 711 266 632 154 q 781 506 781 365 q 711 745 781 647 q 497 857 632 857 q 283 747 361 857 q 213 506 213 647 q 282 266 213 365 q 497 154 361 154 "},\u0393:{x_min:0,x_max:703.84375,ha:742,o:"m 703 836 l 208 836 l 208 0 l 0 0 l 0 1012 l 703 1012 l 703 836 "}," ":{x_min:0,x_max:0,ha:375},"%":{x_min:0,x_max:1111,ha:1213,o:"m 861 484 q 1048 404 979 484 q 1111 228 1111 332 q 1048 51 1111 123 q 859 -29 979 -29 q 672 50 740 -29 q 610 227 610 122 q 672 403 610 331 q 861 484 741 484 m 861 120 q 939 151 911 120 q 967 226 967 183 q 942 299 967 270 q 861 333 912 333 q 783 301 811 333 q 756 226 756 269 q 783 151 756 182 q 861 120 810 120 m 904 984 l 316 -28 l 205 -29 l 793 983 l 904 984 m 250 984 q 436 904 366 984 q 499 730 499 832 q 436 552 499 626 q 248 472 366 472 q 62 552 132 472 q 0 728 0 624 q 62 903 0 831 q 250 984 132 984 m 249 835 q 169 801 198 835 q 140 725 140 768 q 167 652 140 683 q 247 621 195 621 q 327 654 298 621 q 357 730 357 687 q 329 803 357 772 q 249 835 301 835 "},P:{x_min:0,x_max:771,ha:838,o:"m 208 361 l 208 0 l 0 0 l 0 1013 l 450 1013 q 682 919 593 1013 q 771 682 771 826 q 687 452 771 544 q 466 361 604 361 l 208 361 m 421 837 l 208 837 l 208 544 l 410 544 q 525 579 480 544 q 571 683 571 615 q 527 792 571 747 q 421 837 484 837 "},\u0388:{x_min:0,x_max:1172.546875,ha:1235,o:"m 1172 0 l 411 0 l 411 1012 l 1146 1012 l 1146 836 l 617 836 l 617 621 l 1101 621 l 1101 446 l 617 446 l 617 186 l 1172 186 l 1172 0 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},\u038F:{x_min:.4375,x_max:1189.546875,ha:1289,o:"m 1189 0 l 770 0 l 770 199 q 897 369 849 263 q 945 580 945 474 q 879 778 945 706 q 685 855 810 855 q 492 773 561 855 q 424 563 424 691 q 470 360 424 458 q 600 199 517 262 l 600 0 l 180 0 l 180 176 l 383 176 q 258 355 304 251 q 213 569 213 459 q 346 908 213 776 q 686 1040 479 1040 q 1025 912 892 1040 q 1158 578 1158 785 q 1112 362 1158 467 q 986 176 1067 256 l 1189 176 l 1189 0 m 314 1092 l 99 837 l 0 837 l 136 1092 l 314 1092 "},_:{x_min:61.109375,x_max:766.671875,ha:828,o:"m 766 -333 l 61 -333 l 61 -190 l 766 -190 l 766 -333 "},\u03AA:{x_min:-56,x_max:342,ha:503,o:"m 342 1046 l 186 1046 l 186 1215 l 342 1215 l 342 1046 m 101 1046 l -56 1046 l -56 1215 l 101 1215 l 101 1046 m 249 0 l 41 0 l 41 1012 l 249 1012 l 249 0 "},"+":{x_min:43,x_max:784,ha:828,o:"m 784 353 l 483 353 l 483 0 l 343 0 l 343 353 l 43 353 l 43 489 l 343 489 l 343 840 l 483 840 l 483 489 l 784 489 l 784 353 "},"\xBD":{x_min:0,x_max:1090,ha:1188,o:"m 1090 380 q 992 230 1090 301 q 779 101 886 165 q 822 94 784 95 q 924 93 859 93 l 951 93 l 973 93 l 992 93 l 1009 93 q 1046 93 1027 93 q 1085 93 1066 93 l 1085 0 l 650 0 l 654 38 q 815 233 665 137 q 965 376 965 330 q 936 436 965 412 q 869 461 908 461 q 806 435 831 461 q 774 354 780 409 l 659 354 q 724 505 659 451 q 870 554 783 554 q 1024 506 958 554 q 1090 380 1090 459 m 868 998 l 268 -28 l 154 -27 l 757 999 l 868 998 m 272 422 l 147 422 l 147 799 l 0 799 l 0 875 q 126 900 91 875 q 170 973 162 926 l 272 973 l 272 422 "},\u03A1:{x_min:0,x_max:771,ha:838,o:"m 208 361 l 208 0 l 0 0 l 0 1012 l 450 1012 q 682 919 593 1012 q 771 681 771 826 q 687 452 771 544 q 466 361 604 361 l 208 361 m 422 836 l 209 836 l 209 544 l 410 544 q 525 579 480 544 q 571 683 571 614 q 527 791 571 747 q 422 836 484 836 "},"'":{x_min:0,x_max:192,ha:289,o:"m 192 834 q 137 692 192 751 q 0 626 82 632 l 0 697 q 101 830 101 726 l 0 830 l 0 1013 l 192 1013 l 192 834 "},\u00AA:{x_min:0,x_max:350,ha:393,o:"m 350 625 l 245 625 q 237 648 241 636 q 233 672 233 661 q 117 611 192 611 q 33 643 66 611 q 0 727 0 675 q 116 846 0 828 q 233 886 233 864 q 211 919 233 907 q 168 931 190 931 q 108 877 108 931 l 14 877 q 56 977 14 942 q 165 1013 98 1013 q 270 987 224 1013 q 329 903 329 955 l 329 694 q 332 661 329 675 q 350 641 336 648 l 350 625 m 233 774 l 233 809 q 151 786 180 796 q 97 733 97 768 q 111 700 97 712 q 149 689 126 689 q 210 713 187 689 q 233 774 233 737 "},"\u0385":{x_min:57,x_max:584,ha:753,o:"m 584 810 l 455 810 l 455 952 l 584 952 l 584 810 m 521 1064 l 305 810 l 207 810 l 343 1064 l 521 1064 m 186 810 l 57 810 l 57 952 l 186 952 l 186 810 "},T:{x_min:0,x_max:809,ha:894,o:"m 809 831 l 509 831 l 509 0 l 299 0 l 299 831 l 0 831 l 0 1013 l 809 1013 l 809 831 "},\u03A6:{x_min:0,x_max:949,ha:1032,o:"m 566 0 l 385 0 l 385 121 q 111 230 222 121 q 0 508 0 340 q 112 775 0 669 q 385 892 219 875 l 385 1013 l 566 1013 l 566 892 q 836 776 732 875 q 949 507 949 671 q 838 231 949 341 q 566 121 728 121 l 566 0 m 566 285 q 701 352 650 285 q 753 508 753 419 q 703 658 753 597 q 566 729 653 720 l 566 285 m 385 285 l 385 729 q 245 661 297 717 q 193 516 193 604 q 246 356 193 427 q 385 285 300 285 "},j:{x_min:-45.828125,x_max:242,ha:361,o:"m 242 830 l 42 830 l 42 1013 l 242 1013 l 242 830 m 242 -119 q 180 -267 242 -221 q 20 -308 127 -308 l -45 -308 l -45 -140 l -24 -140 q 25 -130 8 -140 q 42 -88 42 -120 l 42 748 l 242 748 l 242 -119 "},\u03A3:{x_min:0,x_max:772.21875,ha:849,o:"m 772 0 l 0 0 l 0 140 l 368 526 l 18 862 l 18 1012 l 740 1012 l 740 836 l 315 836 l 619 523 l 298 175 l 772 175 l 772 0 "},"1":{x_min:197.609375,x_max:628,ha:828,o:"m 628 0 l 434 0 l 434 674 l 197 674 l 197 810 q 373 837 318 810 q 468 984 450 876 l 628 984 l 628 0 "},"\u203A":{x_min:36.109375,x_max:792,ha:828,o:"m 792 352 l 36 17 l 36 168 l 594 420 l 36 672 l 36 823 l 792 487 l 792 352 "},"<":{x_min:35.984375,x_max:791.671875,ha:828,o:"m 791 17 l 36 352 l 35 487 l 791 823 l 791 672 l 229 421 l 791 168 l 791 17 "},"\xA3":{x_min:0,x_max:716.546875,ha:814,o:"m 716 38 q 603 -9 658 5 q 502 -24 548 -24 q 398 -10 451 -24 q 239 25 266 25 q 161 12 200 25 q 77 -29 122 0 l 0 113 q 110 211 81 174 q 151 315 151 259 q 117 440 151 365 l 0 440 l 0 515 l 73 515 q 35 610 52 560 q 15 710 15 671 q 119 910 15 831 q 349 984 216 984 q 570 910 480 984 q 693 668 674 826 l 501 668 q 455 791 501 746 q 353 830 414 830 q 256 795 298 830 q 215 705 215 760 q 249 583 215 655 q 283 515 266 548 l 479 515 l 479 440 l 309 440 q 316 394 313 413 q 319 355 319 374 q 287 241 319 291 q 188 135 263 205 q 262 160 225 152 q 332 168 298 168 q 455 151 368 168 q 523 143 500 143 q 588 152 558 143 q 654 189 617 162 l 716 38 "},t:{x_min:0,x_max:412,ha:511,o:"m 412 -6 q 349 -8 391 -6 q 287 -11 307 -11 q 137 38 177 -11 q 97 203 97 87 l 97 609 l 0 609 l 0 749 l 97 749 l 97 951 l 297 951 l 297 749 l 412 749 l 412 609 l 297 609 l 297 191 q 315 152 297 162 q 366 143 334 143 q 389 143 378 143 q 412 143 400 143 l 412 -6 "},"\xAC":{x_min:0,x_max:704,ha:801,o:"m 704 93 l 551 93 l 551 297 l 0 297 l 0 450 l 704 450 l 704 93 "},\u03BB:{x_min:0,x_max:701.390625,ha:775,o:"m 701 0 l 491 0 l 345 444 l 195 0 l 0 0 l 238 697 l 131 1013 l 334 1013 l 701 0 "},W:{x_min:0,x_max:1291.671875,ha:1399,o:"m 1291 1013 l 1002 0 l 802 0 l 645 777 l 490 0 l 288 0 l 0 1013 l 215 1013 l 388 298 l 534 1012 l 757 1013 l 904 299 l 1076 1013 l 1291 1013 "},">":{x_min:36.109375,x_max:792,ha:828,o:"m 792 352 l 36 17 l 36 168 l 594 420 l 36 672 l 36 823 l 792 487 l 792 352 "},v:{x_min:0,x_max:740.28125,ha:828,o:"m 740 749 l 473 0 l 266 0 l 0 749 l 222 749 l 373 211 l 529 749 l 740 749 "},\u03C4:{x_min:.28125,x_max:618.734375,ha:699,o:"m 618 593 l 409 593 l 409 0 l 210 0 l 210 593 l 0 593 l 0 749 l 618 749 l 618 593 "},\u03BE:{x_min:0,x_max:640,ha:715,o:"m 640 -14 q 619 -157 640 -84 q 563 -299 599 -230 l 399 -299 q 442 -194 433 -223 q 468 -85 468 -126 q 440 -25 468 -41 q 368 -10 412 -10 q 333 -11 355 -10 q 302 -13 311 -13 q 91 60 179 -13 q 0 259 0 138 q 56 426 0 354 q 201 530 109 493 q 106 594 144 553 q 65 699 65 642 q 94 787 65 747 q 169 856 123 828 l 22 856 l 22 1013 l 597 1013 l 597 856 l 497 857 q 345 840 398 857 q 257 736 257 812 q 366 614 257 642 q 552 602 416 602 l 552 446 l 513 446 q 313 425 379 446 q 199 284 199 389 q 312 162 199 184 q 524 136 418 148 q 640 -14 640 105 "},"&":{x_min:-1,x_max:910.109375,ha:1007,o:"m 910 -1 l 676 -1 l 607 83 q 291 -47 439 -47 q 50 100 135 -47 q -1 273 -1 190 q 51 431 -1 357 q 218 568 104 505 q 151 661 169 629 q 120 769 120 717 q 201 951 120 885 q 382 1013 276 1013 q 555 957 485 1013 q 635 789 635 894 q 584 644 635 709 q 468 539 548 597 l 615 359 q 664 527 654 440 l 844 527 q 725 223 824 359 l 910 -1 m 461 787 q 436 848 461 826 q 381 870 412 870 q 325 849 349 870 q 301 792 301 829 q 324 719 301 757 q 372 660 335 703 q 430 714 405 680 q 461 787 461 753 m 500 214 l 318 441 q 198 286 198 363 q 225 204 198 248 q 347 135 268 135 q 425 153 388 135 q 500 214 462 172 "},\u039B:{x_min:0,x_max:894.453125,ha:974,o:"m 894 0 l 666 0 l 447 757 l 225 0 l 0 0 l 344 1013 l 547 1013 l 894 0 "},I:{x_min:41,x_max:249,ha:365,o:"m 249 0 l 41 0 l 41 1013 l 249 1013 l 249 0 "},G:{x_min:0,x_max:971,ha:1057,o:"m 971 -1 l 829 -1 l 805 118 q 479 -29 670 -29 q 126 133 261 -29 q 0 509 0 286 q 130 884 0 737 q 493 1040 268 1040 q 790 948 659 1040 q 961 698 920 857 l 736 698 q 643 813 709 769 q 500 857 578 857 q 285 746 364 857 q 213 504 213 644 q 285 263 213 361 q 505 154 365 154 q 667 217 598 154 q 761 374 736 280 l 548 374 l 548 548 l 971 548 l 971 -1 "},\u03B0:{x_min:0,x_max:655,ha:767,o:"m 583 810 l 454 810 l 454 952 l 583 952 l 583 810 m 186 810 l 57 809 l 57 952 l 186 952 l 186 810 m 516 1039 l 315 823 l 216 823 l 338 1039 l 516 1039 m 655 417 q 567 55 655 146 q 326 -25 489 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 201 369 q 218 222 201 269 q 326 142 245 142 q 439 247 410 142 q 455 422 455 304 l 455 748 l 655 748 l 655 417 "},"`":{x_min:0,x_max:190,ha:288,o:"m 190 654 l 0 654 l 0 830 q 55 970 0 909 q 190 1040 110 1031 l 190 969 q 111 922 134 952 q 88 836 88 892 l 190 836 l 190 654 "},"\xB7":{x_min:0,x_max:207,ha:304,o:"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 "},\u03A5:{x_min:-.21875,x_max:836.171875,ha:914,o:"m 836 1013 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 "},r:{x_min:0,x_max:431.9375,ha:513,o:"m 431 564 q 269 536 320 564 q 200 395 200 498 l 200 0 l 0 0 l 0 748 l 183 748 l 183 618 q 285 731 224 694 q 431 768 345 768 l 431 564 "},x:{x_min:0,x_max:738.890625,ha:826,o:"m 738 0 l 504 0 l 366 238 l 230 0 l 0 0 l 252 382 l 11 749 l 238 749 l 372 522 l 502 749 l 725 749 l 488 384 l 738 0 "},\u03BC:{x_min:0,x_max:647,ha:754,o:"m 647 0 l 477 0 l 477 68 q 411 9 448 30 q 330 -11 374 -11 q 261 3 295 -11 q 199 43 226 18 l 199 -278 l 0 -278 l 0 749 l 199 749 l 199 358 q 216 222 199 268 q 322 152 244 152 q 435 240 410 152 q 448 401 448 283 l 448 749 l 647 749 l 647 0 "},h:{x_min:0,x_max:669,ha:782,o:"m 669 0 l 469 0 l 469 390 q 449 526 469 472 q 353 607 420 607 q 248 554 295 607 q 201 441 201 501 l 201 0 l 0 0 l 0 1013 l 201 1013 l 201 665 q 303 743 245 715 q 425 772 362 772 q 609 684 542 772 q 669 484 669 605 l 669 0 "},".":{x_min:0,x_max:206,ha:303,o:"m 206 0 l 0 0 l 0 207 l 206 207 l 206 0 "},\u03C6:{x_min:-1,x_max:921,ha:990,o:"m 542 -278 l 367 -278 l 367 -22 q 99 92 200 -22 q -1 376 -1 206 q 72 627 -1 520 q 288 769 151 742 l 288 581 q 222 495 243 550 q 202 378 202 439 q 240 228 202 291 q 367 145 285 157 l 367 776 l 515 776 q 807 667 694 776 q 921 379 921 558 q 815 93 921 209 q 542 -22 709 -22 l 542 -278 m 542 145 q 672 225 625 145 q 713 381 713 291 q 671 536 713 470 q 542 611 624 611 l 542 145 "},";":{x_min:0,x_max:208,ha:306,o:"m 208 528 l 0 528 l 0 735 l 208 735 l 208 528 m 208 6 q 152 -151 208 -89 q 0 -238 96 -212 l 0 -158 q 87 -100 61 -136 q 113 0 113 -65 l 0 0 l 0 207 l 208 207 l 208 6 "},f:{x_min:0,x_max:424,ha:525,o:"m 424 609 l 300 609 l 300 0 l 107 0 l 107 609 l 0 609 l 0 749 l 107 749 q 145 949 107 894 q 328 1019 193 1019 l 424 1015 l 424 855 l 362 855 q 312 841 324 855 q 300 797 300 827 q 300 773 300 786 q 300 749 300 761 l 424 749 l 424 609 "},"\u201C":{x_min:0,x_max:468,ha:567,o:"m 190 631 l 0 631 l 0 807 q 55 947 0 885 q 190 1017 110 1010 l 190 947 q 88 813 88 921 l 190 813 l 190 631 m 468 631 l 278 631 l 278 807 q 333 947 278 885 q 468 1017 388 1010 l 468 947 q 366 813 366 921 l 468 813 l 468 631 "},A:{x_min:0,x_max:966.671875,ha:1069,o:"m 966 0 l 747 0 l 679 208 l 286 208 l 218 0 l 0 0 l 361 1013 l 600 1013 l 966 0 m 623 376 l 480 810 l 340 376 l 623 376 "},"6":{x_min:57,x_max:771,ha:828,o:"m 744 734 l 544 734 q 500 802 533 776 q 425 828 466 828 q 315 769 359 828 q 264 571 264 701 q 451 638 343 638 q 691 537 602 638 q 771 315 771 449 q 683 79 771 176 q 420 -29 586 -29 q 134 123 227 -29 q 57 455 57 250 q 184 865 57 721 q 452 988 293 988 q 657 916 570 988 q 744 734 744 845 m 426 128 q 538 178 498 128 q 578 300 578 229 q 538 422 578 372 q 415 479 493 479 q 303 430 342 479 q 264 313 264 381 q 308 184 264 240 q 426 128 352 128 "},"\u2018":{x_min:0,x_max:190,ha:289,o:"m 190 631 l 0 631 l 0 807 q 55 947 0 885 q 190 1017 110 1010 l 190 947 q 88 813 88 921 l 190 813 l 190 631 "},\u03CA:{x_min:-55,x_max:337,ha:389,o:"m 337 810 l 208 810 l 208 952 l 337 952 l 337 810 m 74 810 l -55 810 l -55 952 l 74 952 l 74 810 m 242 0 l 42 0 l 42 748 l 242 748 l 242 0 "},\u03C0:{x_min:.5,x_max:838.890625,ha:938,o:"m 838 593 l 750 593 l 750 0 l 549 0 l 549 593 l 287 593 l 287 0 l 88 0 l 88 593 l 0 593 l 0 749 l 838 749 l 838 593 "},\u03AC:{x_min:-1,x_max:722,ha:835,o:"m 722 0 l 531 0 l 530 101 q 433 8 491 41 q 304 -25 375 -25 q 72 104 157 -25 q -1 372 -1 216 q 72 643 -1 530 q 308 775 158 775 q 433 744 375 775 q 528 656 491 713 l 528 749 l 722 749 l 722 0 m 361 601 q 233 527 277 601 q 196 375 196 464 q 232 224 196 288 q 358 144 277 144 q 487 217 441 144 q 528 370 528 281 q 489 523 528 457 q 361 601 443 601 m 579 1039 l 377 823 l 279 823 l 401 1039 l 579 1039 "},O:{x_min:0,x_max:994,ha:1094,o:"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 131 883 0 733 q 497 1040 270 1040 q 860 883 721 1040 q 994 505 994 733 q 862 127 994 277 q 497 -29 723 -29 m 497 154 q 710 266 631 154 q 780 506 780 365 q 710 745 780 647 q 497 857 631 857 q 283 747 361 857 q 213 506 213 647 q 282 266 213 365 q 497 154 361 154 "},n:{x_min:0,x_max:669,ha:782,o:"m 669 0 l 469 0 l 469 452 q 442 553 469 513 q 352 601 412 601 q 245 553 290 601 q 200 441 200 505 l 200 0 l 0 0 l 0 748 l 194 748 l 194 659 q 289 744 230 713 q 416 775 349 775 q 600 700 531 775 q 669 509 669 626 l 669 0 "},"3":{x_min:61,x_max:767,ha:828,o:"m 767 290 q 653 51 767 143 q 402 -32 548 -32 q 168 48 262 -32 q 61 300 61 140 l 250 300 q 298 173 250 219 q 405 132 343 132 q 514 169 471 132 q 563 282 563 211 q 491 405 563 369 q 343 432 439 432 l 343 568 q 472 592 425 568 q 534 701 534 626 q 493 793 534 758 q 398 829 453 829 q 306 789 344 829 q 268 669 268 749 l 80 669 q 182 909 80 823 q 410 986 274 986 q 633 916 540 986 q 735 719 735 840 q 703 608 735 656 q 615 522 672 561 q 727 427 687 486 q 767 290 767 369 "},"9":{x_min:58,x_max:769,ha:828,o:"m 769 492 q 646 90 769 232 q 384 -33 539 -33 q 187 35 271 -33 q 83 224 98 107 l 282 224 q 323 154 286 182 q 404 127 359 127 q 513 182 471 127 q 563 384 563 248 q 475 335 532 355 q 372 315 418 315 q 137 416 224 315 q 58 642 58 507 q 144 877 58 781 q 407 984 239 984 q 694 827 602 984 q 769 492 769 699 m 416 476 q 525 521 488 476 q 563 632 563 566 q 521 764 563 709 q 403 826 474 826 q 297 773 337 826 q 258 649 258 720 q 295 530 258 577 q 416 476 339 476 "},l:{x_min:41,x_max:240,ha:363,o:"m 240 0 l 41 0 l 41 1013 l 240 1013 l 240 0 "},"\xA4":{x_min:40.265625,x_max:727.203125,ha:825,o:"m 727 792 l 594 659 q 620 552 620 609 q 598 459 620 504 l 725 331 l 620 224 l 491 352 q 382 331 443 331 q 273 352 322 331 l 144 224 l 40 330 l 167 459 q 147 552 147 501 q 172 658 147 608 l 40 794 l 147 898 l 283 759 q 383 776 330 776 q 482 759 434 776 l 620 898 l 727 792 m 383 644 q 308 617 334 644 q 283 551 283 590 q 309 489 283 517 q 381 462 335 462 q 456 488 430 462 q 482 554 482 515 q 455 616 482 588 q 383 644 429 644 "},\u03BA:{x_min:0,x_max:691.84375,ha:779,o:"m 691 0 l 479 0 l 284 343 l 196 252 l 196 0 l 0 0 l 0 749 l 196 749 l 196 490 l 440 749 l 677 749 l 416 479 l 691 0 "},"4":{x_min:53,x_max:775.21875,ha:828,o:"m 775 213 l 660 213 l 660 0 l 470 0 l 470 213 l 53 213 l 53 384 l 416 958 l 660 958 l 660 370 l 775 370 l 775 213 m 474 364 l 474 786 l 204 363 l 474 364 "},p:{x_min:0,x_max:722,ha:824,o:"m 415 -26 q 287 4 346 -26 q 192 92 228 34 l 192 -298 l 0 -298 l 0 750 l 192 750 l 192 647 q 289 740 230 706 q 416 775 347 775 q 649 645 566 775 q 722 375 722 534 q 649 106 722 218 q 415 -26 564 -26 m 363 603 q 232 529 278 603 q 192 375 192 465 q 230 222 192 286 q 360 146 276 146 q 487 221 441 146 q 526 371 526 285 q 488 523 526 458 q 363 603 443 603 "},"\u2021":{x_min:0,x_max:809,ha:894,o:"m 299 621 l 0 621 l 0 804 l 299 804 l 299 1011 l 509 1011 l 509 804 l 809 804 l 809 621 l 509 621 l 509 387 l 809 387 l 809 205 l 509 205 l 509 0 l 299 0 l 299 205 l 0 205 l 0 387 l 299 387 l 299 621 "},\u03C8:{x_min:0,x_max:875,ha:979,o:"m 522 142 q 657 274 620 163 q 671 352 671 316 l 671 748 l 875 748 l 875 402 q 806 134 875 240 q 525 -22 719 -1 l 525 -278 l 349 -278 l 349 -22 q 65 135 152 -1 q 0 402 0 238 l 0 748 l 204 748 l 204 352 q 231 240 204 295 q 353 142 272 159 l 353 922 l 524 922 l 522 142 "},\u03B7:{x_min:0,x_max:669,ha:779,o:"m 669 -278 l 469 -278 l 469 390 q 448 526 469 473 q 348 606 417 606 q 244 553 288 606 q 201 441 201 501 l 201 0 l 0 0 l 0 749 l 201 749 l 201 665 q 301 744 244 715 q 423 774 359 774 q 606 685 538 774 q 669 484 669 603 l 669 -278 "}},cssFontWeight:"bold",ascender:1216,underlinePosition:-100,cssFontStyle:"normal",boundingBox:{yMin:-333,xMin:-162,yMax:1216,xMax:1681},resolution:1e3,original_font_information:{postscript_name:"Helvetiker-Bold",version_string:"Version 1.00 2004 initial release",vendor_url:"http://www.magenta.gr",full_font_name:"Helvetiker Bold",font_family_name:"Helvetiker",copyright:"Copyright (c) Magenta ltd, 2004.",description:"",trademark:"",designer:"",designer_url:"",unique_font_identifier:"Magenta ltd:Helvetiker Bold:22-10-104",license_url:"http://www.ellak.gr/fonts/MgOpen/license.html",license_description:`Copyright (c) 2004 by MAGENTA Ltd. All Rights Reserved.\r
\r
Permission is hereby granted, free of charge, to any person obtaining a copy of the fonts accompanying this license ("Fonts") and associated documentation files (the "Font Software"), to reproduce and distribute the Font Software, including without limitation the rights to use, copy, merge, publish, distribute, and/or sell copies of the Font Software, and to permit persons to whom the Font Software is furnished to do so, subject to the following conditions: \r
\r
The above copyright and this permission notice shall be included in all copies of one or more of the Font Software typefaces.\r
\r
The Font Software may be modified, altered, or added to, and in particular the designs of glyphs or characters in the Fonts may be modified and additional glyphs or characters may be added to the Fonts, only if the fonts are renamed to names not containing the word "MgOpen", or if the modifications are accepted for inclusion in the Font Software itself by the each appointed Administrator.\r
\r
This License becomes null and void to the extent applicable to Fonts or Font Software that has been modified and is distributed under the "MgOpen" name.\r
\r
The Font Software may be sold as part of a larger software package but no copy of one or more of the Font Software typefaces may be sold by itself. \r
\r
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL MAGENTA OR PERSONS OR BODIES IN CHARGE OF ADMINISTRATION AND MAINTENANCE OF THE FONT SOFTWARE BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.`,manufacturer_name:"Magenta ltd",font_sub_family_name:"Bold"},descender:-334,familyName:"Helvetiker",lineHeight:1549,underlineThickness:50};var fd=new gu().parse(Zp),yv="ABCDEFGHIJLMN\xD1OPQRSTUVXYZ".split("");function Ge(n,e={}){return new Ft({color:n,roughness:.45,metalness:.1,...e})}function bt(n,e=1.5,t={}){return new Ft({color:0,emissive:n,emissiveIntensity:e,roughness:.6,...t})}function Rs(n,{size:e=1,depth:t=.2,bevel:i=!0,material:s,curveSegments:a=6}={}){let r=new rr(n,{font:fd,size:e,depth:t,curveSegments:a,bevelEnabled:i,bevelThickness:t*.15,bevelSize:e*.02,bevelSegments:2});r.computeBoundingBox();let o=r.boundingBox;return r.translate(-(o.max.x+o.min.x)/2,-o.min.y,-(o.max.z+o.min.z)/2),new ie(r,s||Ge(16777215))}function Bo({body:n=3364266,legs:e=2236979,skin:t=13148282,hair:i=2759184,seated:s=!1,scale:a=1}={}){let r=new pt,o=Ge(n,{roughness:.7}),l=Ge(e,{roughness:.8}),c=Ge(t,{roughness:.8}),u=Ge(i,{roughness:.9}),h=new ie(new $i(.2,.45,4,12),o);h.scale.set(1.05,1,.7);let d=new ie(new Lt(.13,16,12),c),f=new ie(new Lt(.138,16,12,0,Math.PI*2,0,Math.PI*.55),u);f.rotation.x=-.35;let p=new $i(.06,.45,3,8),x=new ie(p,o),g=new ie(p,o),m=new $i(.08,.6,3,8),y=new ie(m,l),T=new ie(m,l);return s?(y.position.set(-.1,.05,.25),T.position.set(.1,.05,.25),y.rotation.x=T.rotation.x=Math.PI/2,h.position.y=.4,d.position.y=.86,f.position.y=.88,x.position.set(-.28,.42,.15),g.position.set(.28,.42,.15),x.rotation.x=g.rotation.x=-.9):(y.position.set(-.1,.4,0),T.position.set(.1,.4,0),h.position.y=1.05,d.position.y=1.5,f.position.y=1.52,x.position.set(-.28,1.05,0),g.position.set(.28,1.05,0),x.rotation.z=.12,g.rotation.z=-.12),r.add(h,d,f,x,g,y,T),r.scale.setScalar(a),r.traverse(v=>{v.isMesh&&(v.castShadow=!0)}),r}function xu(n,e,t,{repeatX:i=1}={}){let s=document.createElement("canvas");s.width=n,s.height=e;let a=s.getContext("2d"),r=new Tn(s);r.colorSpace=Ut,i!==1&&(r.wrapS=Pa,r.repeat.x=i);let o={tex:r,canvas:s,update(l){t(a,n,e,l),r.needsUpdate=!0}};return o.update(0),o}function Kp({rows:n=6,cols:e=18,width:t=16,seat:i=2776319,step:s=1712960,rail:a=null,railTex:r=null,colorsPublico:o}={}){let l=new pt;for(let y=0;y<n;y++){let T=new ie(new kt(t,.45*(y+1),1),Ge(s,{roughness:.5}));T.position.set(0,.225*(y+1),y*1),l.add(T);let v=new ie(new kt(t,.03,.03),bt(10473727,1.2));v.position.set(0,.45*(y+1),y-.5),l.add(v)}let c=n*e,u=new Nn(new kt(.55,.5,.12),Ge(i,{roughness:.4}),c),h=new Nn(new $i(.2,.35,3,8),Ge(16777215,{roughness:.8}),c),d=new Nn(new Lt(.12,10,8),Ge(16777215,{roughness:.9}),c);h.userData.publico=!0,d.userData.publico=!0;let f=o||[13777723,3104720,15790320,2236968,15245344,2793568,9058992,5921386,15231648,3850448],p=[1708040,3810322,6963232,12103840,13672528,14726282,10119750],x=new mt,g=new Ve,m=0;for(let y=0;y<n;y++)for(let T=0;T<e;T++){let v=-t/2+(T+.5)*t/e,E=.45*(y+1),M=y;x.makeTranslation(v,E+.3,M+.35),u.setMatrixAt(m,x);let P=Math.random()<.85;x.makeTranslation(v,E+.45,M+.1),P||x.scale(new I(0,0,0)),h.setMatrixAt(m,x),h.setColorAt(m,g.setHex(f[Math.random()*f.length|0])),x.makeTranslation(v,E+.95,M+.1),P||x.scale(new I(0,0,0)),d.setMatrixAt(m,x),d.setColorAt(m,g.setHex(p[Math.random()*p.length|0])),m++}if(l.add(u,h,d),a){let y=new ie(new tn(t,1.1),new Ft({color:12574975,transparent:!0,opacity:.22,roughness:.05,metalness:.2,side:St,map:r||null,emissive:r?16777215:0,emissiveMap:r||null,emissiveIntensity:1.2}));y.position.set(0,.55,-.9),y.rotation.y=Math.PI,l.add(y);let T=new ie(new kt(t,.05,.06),bt(a,1.6));T.position.set(0,1.1,-.9),l.add(T)}return l}function Qp(n,e,t=[16777215,8374527,11563263]){let i=new pt,s=Ge(1381914,{metalness:.6,roughness:.4});return e.forEach(([a,r,o],l)=>{let c=new pt;c.position.set(a,r,o),i.add(c);let u=new ie(new kt(.5,.15,.3),s);u.position.y=.25,c.add(u);let h=new ie(new Mt(.2,.26,.5,12),s);c.add(h);let d=t[l%t.length],f=new ie(new Si(.2,16),bt(d,3));f.rotation.x=Math.PI/2,f.position.y=-.26,c.add(f);let p=r-.3,x=new ie(new Yi(1.1,p,20,1,!0),new It({color:d,transparent:!0,opacity:.02,blending:Sn,depthWrite:!1,side:St}));x.position.y=-p/2-.26,c.add(x),n.push(g=>{c.rotation.z=Math.sin(g*.6+l)*.4,c.rotation.x=Math.cos(g*.5+l*1.3)*.3})}),i}function pd(n,{w:e=4,h:t=1,color:i="#fff",bg:s=null,font:a="700 80px Arial",emissive:r=!0}={}){let o=document.createElement("canvas");o.width=1024,o.height=Math.round(1024*t/e);let l=o.getContext("2d");s&&(l.fillStyle=s,l.fillRect(0,0,o.width,o.height)),l.fillStyle=i,l.font=a,l.textAlign="center",l.textBaseline="middle";let c=parseInt(a.match(/(\d+)px/)[1]);for(;l.measureText(n).width>o.width*.92&&c>10;)c-=4,l.font=a.replace(/\d+px/,c+"px");l.fillText(n,o.width/2,o.height/2);let u=new Tn(o);return u.colorSpace=Ut,new ie(new tn(e,t),new It({map:u,transparent:!s,toneMapped:!r,side:St}))}function Oo(n,e,t,i,s,a=16,r=0,o=3){let l=o,c=()=>(l=(l*9301+49297)%233280)/233280;n.beginPath();for(let u=0;u<a*2;u++){let h=r+u*Math.PI/a,d=u%2?s*(.85+c()*.3):i*(.8+c()*.35),f=e+Math.cos(h)*d*1.35,p=t+Math.sin(h)*d;u?n.lineTo(f,p):n.moveTo(f,p)}n.closePath()}function md(n,e,t,i,s=0,{texto:a="\xA1BOOM!",sub:r=null}={}){let o=1+.03*Math.sin(s*4);n.save(),n.translate(e,t),n.scale(o,o);let l=i*.36;Oo(n,0,0,l*1.05,l*.72,14,s*.05,5),n.fillStyle="#e8141c",n.fill(),n.lineWidth=i*.012,n.strokeStyle="#1a0a0a",n.stroke(),Oo(n,0,0,l*.9,l*.62,12,.2-s*.04,9),n.fillStyle="#ff7a10",n.fill(),Oo(n,0,0,l*.72,l*.5,11,.5,13),n.fillStyle="#ffe23a",n.fill(),n.save(),Oo(n,0,0,l*.72,l*.5,11,.5,13),n.clip(),n.fillStyle="rgba(255,140,0,0.35)";for(let x=-l;x<l;x+=i*.02)for(let g=-l*1.4;g<l*1.4;g+=i*.02)n.beginPath(),n.arc(g+x/(i*.02)%2*i*.01,x,i*.004*(1+x/l),0,7),n.fill();n.restore();let c=-l*1.05,u=l*.42,h=l*.2;n.fillStyle="#121218",n.beginPath(),n.arc(c,u,h,0,7),n.fill(),n.fillStyle="rgba(255,255,255,0.45)",n.beginPath(),n.arc(c-h*.35,u-h*.35,h*.25,0,7),n.fill(),n.fillStyle="#3a3a44",n.fillRect(c-h*.3,u-h*1.2,h*.6,h*.35),n.strokeStyle="#c8a060",n.lineWidth=i*.008,n.beginPath(),n.moveTo(c,u-h*1.2),n.quadraticCurveTo(c+h*.6,u-h*2,c+h*.2,u-h*2.4),n.stroke();let d=.6+.4*Math.sin(s*20);n.fillStyle="#fff6a0",Oo(n,c+h*.2,u-h*2.4,h*.45*d,h*.15,6,s*3,2),n.fill(),n.rotate(-.08);let f=i*(a.length>7?.13:.17);n.font=`900 ${f}px "Arial Black", Impact, Arial, sans-serif`,n.textAlign="center",n.textBaseline="middle",n.lineJoin="round",n.lineWidth=f*.32,n.strokeStyle="#14080a",n.strokeText(a,0,f*.04),n.lineWidth=f*.14,n.strokeStyle="#ffffff",n.strokeText(a,0,0);let p=n.createLinearGradient(0,-f/2,0,f/2);p.addColorStop(0,"#fff07a"),p.addColorStop(.45,"#ffb800"),p.addColorStop(1,"#e8300c"),n.fillStyle=p,n.fillText(a,0,0),n.fillStyle="rgba(255,255,255,0.55)",n.font=`900 ${f*.98}px "Arial Black", Impact, Arial, sans-serif`,n.save(),n.beginPath(),n.rect(-i,-f,i*2,f*.42),n.clip(),n.fillText(a,0,-f*.02),n.restore(),r&&(n.rotate(.08),n.font=`900 ${i*.045}px Arial`,n.lineWidth=i*.01,n.strokeStyle="#000",n.strokeText(r,0,l*.62),n.fillStyle="#fff",n.fillText(r,0,l*.62)),n.restore()}function e0(n,e,t,i,s,a){let r=i&&i.logoPantalla;if(r&&r.complete&&r.naturalWidth){let o=Math.min(e*.7/r.naturalWidth,t*.7/r.naturalHeight)*(1+.02*Math.sin(s*3));n.drawImage(r,(e-r.naturalWidth*o)/2,(t-r.naturalHeight*o)/2,r.naturalWidth*o,r.naturalHeight*o);return}md(n,e/2,t/2,Math.min(e,t*1.6),s,a)}var Yn={azul:{nombre:"Azul",rombo:["#0f3fd0","#3f8cff","#cfe8ff"],gap:"#030716",franjas:16760912,borde:16735432,aro:16738992,marco:16747040,luces:[4161023,16732080],fondo:132110},naranja:{nombre:"Naranja / salm\xF3n",rombo:["#c8402a","#ff8a6a","#ffe0d0"],gap:"#1c0604",franjas:16773344,borde:16742944,aro:16740416,marco:16734752,luces:[16742960,16777215],fondo:918530},dorado:{nombre:"Dorado (liga de campeones)",rombo:["#8a5a10","#e0a838","#fff2b8"],gap:"#0c0802",franjas:16769162,borde:16764992,aro:16760880,marco:16760880,luces:[16765024,8453984],fondo:394242}},$n=(n,e,t=0)=>new I(Math.sin(e)*n,t,Math.cos(e)*n);function bv(n,e,t,i,s,a,r=64){let o=new Vn;for(let u=0;u<=r;u++){let h=t+(i-t)*u/r,d=Math.sin(h)*e,f=-Math.cos(h)*e;u?o.lineTo(d,f):o.moveTo(d,f)}for(let u=r;u>=0;u--){let h=t+(i-t)*u/r;o.lineTo(Math.sin(h)*n,-Math.cos(h)*n)}let l=new si(o,{depth:s,bevelEnabled:!1,curveSegments:4}),c=new ie(l,a);return c.rotation.x=-Math.PI/2,c.receiveShadow=!0,c}function t0(n,e=4096,t=1024){let i=document.createElement("canvas");i.width=e,i.height=t;let s=i.getContext("2d");s.fillStyle=n.gap,s.fillRect(0,0,e,t);let a=7,r=t/a,o=r*1.25,l=11,c=()=>(l=(l*9301+49297)%233280)/233280;for(let h=0;h<=a;h++)for(let d=0;d*o*.5<e+o;d++){let f=d*o*.5,p=h*r+(d%2?r/2:0),x=.86,g=s.createLinearGradient(f-o/2,p-r/2,f+o/2,p+r/2),m=c();g.addColorStop(0,n.rombo[2]),g.addColorStop(.35+m*.2,n.rombo[1]),g.addColorStop(1,n.rombo[0]),s.fillStyle=g,s.globalAlpha=.65+.35*m,s.beginPath(),s.moveTo(f,p-r/2*x),s.lineTo(f+o/2*x,p),s.lineTo(f,p+r/2*x),s.lineTo(f-o/2*x,p),s.closePath(),s.fill()}s.globalAlpha=1;let u=new Tn(i);return u.colorSpace=Ut,u.anisotropy=8,u}function Fo(n,e,t,i,s=1.05,a=48){let r=new pt,o=Ge(14212582,{metalness:.95,roughness:.2}),l=[];for(let d=0;d<=a;d++)l.push($n(n,e+(t-e)*d/a,i+s));let c=new kn(l);r.add(new ie(new ai(c,a*2,.045,8,!1),o));let u=l.map(d=>d.clone().setY(i+s*.5));r.add(new ie(new ai(new kn(u),a*2,.025,6,!1),o));let h=Math.max(2,Math.round(Math.abs(t-e)*n/1.6));for(let d=0;d<=h;d++){let f=$n(n,e+(t-e)*d/h,i+s/2),p=new ie(new Mt(.035,.035,s,8),o);p.position.copy(f),r.add(p)}return r}function Mv({tipo:n="negra",aroColor:e=16738992}={}){let t=new pt,i=new ie(new Mt(.42,.48,.5,32),Ge(15921910,{roughness:.25}));i.position.y=.25,t.add(i);let s=new ie(new Ot(.47,.035,8,48),bt(e,2.4));s.rotation.x=Math.PI/2,s.position.y=.48,t.add(s);let a=new ie(new Ot(.62,.03,8,48),bt(e,1.6));a.rotation.x=Math.PI/2,a.position.y=.02,t.add(a);let r;n==="plata"?r=Ge(14673132,{metalness:1,roughness:.18}):n==="cristal"?r=new ka({color:14217471,transparent:!0,opacity:.32,roughness:.02,metalness:.1,clearcoat:1,side:St,depthWrite:!1}):r=Ge(723728,{metalness:.6,roughness:.22});let o=new ie(new Lt(.42,32,24),r);if(o.position.y=.92,o.castShadow=n!=="cristal",t.add(o),n==="cristal"){let c=new ie(new Mt(.12,.12,.36,16),bt(16724016,1.8));c.position.y=.92,t.add(c)}let l=new ie(new Mt(.14,.17,.14,20),Ge(3158586,{metalness:.9,roughness:.3}));return l.position.y=1.38,t.add(l),n!=="plata"&&[16722474,2780159,16769066,2281568,16777215].forEach((c,u)=>{let h=u*1.25,d=[new I(Math.cos(h)*.1,1.36,Math.sin(h)*.1),new I(Math.cos(h)*.36,1.22,Math.sin(h)*.36),new I(Math.cos(h)*.45,.98,Math.sin(h)*.45)];t.add(new ie(new ai(new kn(d),12,.018,6),bt(c,.9,{color:c})))}),t.userData={aro:s,aroB:a,esf:o,base:e},t}function n0(n,{fg:e="#fff",bg:t=null,size:i=128}={}){let s=document.createElement("canvas");s.width=s.height=i;let a=s.getContext("2d");t&&(a.fillStyle=t,a.fillRect(0,0,i,i)),a.font=`900 ${i*.6}px Arial`,a.textAlign="center",a.textBaseline="middle",a.fillStyle=e,a.fillText(String(n),i/2,i/2+4);let r=new Tn(s);return r.colorSpace=Ut,r}var Sv={rojo:15212586,azul:2059263},Ev={rojo:[{body:13113892,legs:1710626,hair:2759184},{body:14168122,legs:2236970,hair:6963232},{body:11538464,legs:1710626,hair:1118481},{body:14696520,legs:2763316,hair:13672528}],azul:[{body:1724624,legs:1710626,hair:3810322},{body:2780159,legs:2236970,hair:12103840},{body:1065136,legs:1710626,hair:1118481},{body:3832575,legs:2763316,hair:10119750}]};function a0(n,e,t){let i=new pt;i.name="boom",n.add(i);let s=[],a=[],r=e.paleta||Yn.azul;if(n.background=new Ve(r.fondo),n.fog=new Or(r.fondo,45,95),t&&!n.environment){let A=new Ts(t);n.environment=A.fromScene(new ar,.04).texture,n.environmentIntensity=.55}let o=[],l=(A,R=2)=>{let N=bt(r[A],R);return o.push({m:N,k:A}),N};i.add(new _s(12570879,1052704,.75));let c=new Ga(16777215,260,60,Math.PI/5,.5,1.4);c.position.set(0,18,14),c.target.position.set(0,0,-2),c.castShadow=!0,c.shadow.mapSize.set(1024,1024),c.shadow.bias=-5e-4,i.add(c,c.target);let u=[];[[-9,7,-6],[9,7,-6],[0,9,6],[-12,5,6],[12,5,6]].forEach(([A,R,N],O)=>{let J=new ri(r.luces[O%2],40,30,1.6);J.position.set(A,R,N),i.add(J),u.push(J)});let h=xu(2048,2048,(A,R,N)=>{let O=A.createRadialGradient(R/2,N/2,50,R/2,N/2,R/2);O.addColorStop(0,"#c8ccd8"),O.addColorStop(.45,"#9aa0b4"),O.addColorStop(1,"#14161e"),A.fillStyle=O,A.fillRect(0,0,R,N),A.strokeStyle="rgba(255,255,255,0.18)",A.lineWidth=4;for(let J=260;J<R/2;J+=130)A.beginPath(),A.arc(R/2,N/2,J,0,7),A.stroke()}),d=new ie(new Si(40,96),new Ft({map:h.tex,roughness:.18,metalness:.35}));d.rotation.x=-Math.PI/2,d.receiveShadow=!0,i.add(d),[[3.2,8.2,1],[-6.5,8.6,.8],[7.6,6.2,.7]].forEach(([A,R,N])=>{let O=new ie(new Ot(N,.07,8,48),bt(16777215,2.2));O.rotation.x=Math.PI/2,O.position.set(A,.05,R),i.add(O)});let f=16.5,p=Math.PI-1.5,x=Math.PI+1.5,g=12,m=new Mt(f,f,g,160,1,!0,p,x-p);{let A=m.attributes.uv;for(let R=0;R<A.count;R++)A.setX(R,1-A.getX(R))}let y=new It({map:t0(r),side:Qt,toneMapped:!1});y.color.setScalar(1.15);let T=new ie(m,y);T.position.y=1+g/2,i.add(T);let v=new ie(new Mt(f+.3,f+.3,g+2,96,1,!0,p,x-p),Ge(526348,{side:St}));v.position.y=1+g/2,i.add(v);let E=(A,R,N,O)=>{let J=new ie(new Mt(f-.12,f-.12,R,160,1,!0,p,x-p),l(N,O));J.material.side=St,J.position.y=A,i.add(J)};E(1+g+.15,.3,"borde",2.4),E(1.1,.12,"borde",1.6);let M=Math.PI+.62;for(let A=0;A<9;A++){let R=new ie(new Mt(f-.2,f-.2,.13,64,1,!0,M-.5,1),l("franjas",1.8));R.material.side=St,R.position.y=3.6+A*.75,i.add(R)}{let A=new ie(new Mt(f-.15,f-.15,7.4,64,1,!0,M-.52,1.04),Ge(328967,{side:St}));A.position.y=6.6,i.add(A)}let P=7.2,b=4.4,w=1.3,L=(A,R,N)=>{let O=new Vn;return O.moveTo(-A/2+N,R/2),O.lineTo(A/2-N,R/2),O.lineTo(A/2,0),O.lineTo(A/2-N,-R/2),O.lineTo(-A/2+N,-R/2),O.lineTo(-A/2,0),O.closePath(),O},U=xu(1024,640,(A,R,N,O)=>{let J=A.createRadialGradient(R/2,N/2,20,R/2,N/2,R*.6);J.addColorStop(0,"#5a2a9a"),J.addColorStop(.6,"#1a1050"),J.addColorStop(1,"#08041a"),A.fillStyle=J,A.fillRect(0,0,R,N),A.strokeStyle="rgba(255,200,80,0.15)",A.lineWidth=6;for(let xe=0;xe<24;xe++){let Se=xe/24*Math.PI*2+O*.1;A.beginPath(),A.moveTo(R/2,N/2),A.lineTo(R/2+Math.cos(Se)*R,N/2+Math.sin(Se)*R),A.stroke()}if(e.pantallaInfo){let xe=e.pantallaInfo;A.textAlign="center",A.textBaseline="middle",A.fillStyle="#ffd34d",A.font="900 58px Arial",A.fillText(xe.title,R/2,90),A.font="700 38px Arial",(xe.rows||[]).slice(0,6).forEach(([Se,ot],nt)=>{let $t=180+nt*72;A.fillStyle="rgba(255,255,255,0.12)",A.fillRect(150,$t-30,R-300,60),A.textAlign="left",A.fillStyle="#9fd0ff",A.fillText(Se,170,$t),A.textAlign="right",A.fillStyle="#fff",A.fillText(ot,R-170,$t)})}else e.pantallaTexto?(A.fillStyle="#ffe48a",A.font="900 64px Arial",A.textAlign="center",A.textBaseline="middle",e.pantallaTexto.split(`
`).forEach((xe,Se,ot)=>A.fillText(xe,R/2,N/2+(Se-(ot.length-1)/2)*80))):e0(A,R,N,e,O)}),z=new Ha(L(P,b,w));{let A=z.attributes.uv,R=z.attributes.position;for(let N=0;N<A.count;N++)A.setXY(N,R.getX(N)/P+.5,R.getY(N)/b+.5)}let G=new pt,q=new ie(z,new It({map:U.tex,toneMapped:!1}));q.position.z=.12,G.add(q);let V=L(P+.5,b+.5,w+.2);V.holes.push(L(P,b,w));let Q=new ie(new si(V,{depth:.25,bevelEnabled:!1}),l("marco",2.2));G.add(Q);let j=new ie(new Ha(L(P+.5,b+.5,w+.2)),Ge(657936));j.position.z=-.02,G.add(j),G.position.copy($n(f-.7,M,6.7)),G.rotation.y=M+Math.PI,i.add(G),s.push(A=>{U.update(A)});let he=Ge(15264498,{roughness:.28,metalness:.15}),te=Ge(1381918,{roughness:.3,metalness:.4}),ae=new ie(new Mt(6,6.15,.7,128),[he,te,te]);ae.position.y=.35,ae.receiveShadow=!0,i.add(ae);let oe=new ie(new Ot(6.02,.05,8,160),l("aro",2.2));oe.rotation.x=Math.PI/2,oe.position.y=.7,i.add(oe);let Ne=new ie(new Ot(6.16,.05,8,160),l("aro",1.5));Ne.rotation.x=Math.PI/2,Ne.position.y=.04,i.add(Ne);for(let A=0;A<9;A++){let R=.15+A*.17,N=new ie(new Ot(.28,.05,8,32),bt(16777215,2.6));N.rotation.x=Math.PI/2,N.position.copy($n(5.35,R,.72)),i.add(N)}let Ce=new ie(new Mt(3.6,3.6,1.2,128),[he,Ge(16053496,{roughness:.2}),he]);Ce.position.y=1.3,Ce.castShadow=!0,Ce.receiveShadow=!0,i.add(Ce);let ft=xu(1024,1024,(A,R,N)=>{A.fillStyle="#1a1c26",A.fillRect(0,0,R,N),A.strokeStyle="rgba(200,210,255,0.25)";for(let O=60;O<512;O+=38)A.lineWidth=O%76?3:8,A.beginPath(),A.arc(R/2,N/2,O,0,7),A.stroke()}),Je=new ie(new Si(3.25,96),new Ft({map:ft.tex,roughness:.25,metalness:.5}));Je.rotation.x=-Math.PI/2,Je.position.y=1.905,i.add(Je);let at=new ie(new Ot(3.6,.05,8,128),l("aro",2.6));at.rotation.x=Math.PI/2,at.position.y=1.9,i.add(at);let H=new ie(new Ot(3.62,.035,8,128),l("aro",1.2));H.rotation.x=Math.PI/2,H.position.y=1,i.add(H);let Z=new ie(new Mt(.75,.95,.65,48),Ge(2763830,{metalness:.8,roughness:.25}));Z.position.y=1.9+.325,i.add(Z);let me=[.05,.6].map(A=>{let R=new ie(new Ot(.88-A*.2,.035,8,64),bt(16765024,2.6));return R.rotation.x=Math.PI/2,R.position.y=1.9+A,i.add(R),R}),Pe=Ge(16761674,{metalness:1,roughness:.2}),_e=new ie(new Lt(.95,48,32),Pe);_e.position.y=3.45,_e.castShadow=!0,i.add(_e);let De=new ie(new Mt(.3,.36,.25,24),Ge(9071146,{metalness:1,roughness:.3}));De.position.y=4.45,i.add(De);let Ye=new ie(new Ot(.96,.05,8,64),bt(16726560,1.8));Ye.rotation.x=Math.PI/2,Ye.position.y=3.45,i.add(Ye);let ee=[0,1,2].map(A=>{let R=new ie(new Ot(1.3,.025,6,64),new It({color:16769162,transparent:!0,opacity:.6,toneMapped:!1}));return R.rotation.x=Math.PI/2,i.add(R),R});s.push(A=>{ee.forEach((R,N)=>{let O=(A*.35+N/3)%1;R.position.y=2+O*3.2,R.material.opacity=.7*(1-O),R.scale.setScalar(1+.2*Math.sin(O*3))}),_e.rotation.y=A*.2});let $=[];for(let A=0;A<15;A++){let R=-1.25+A*.17857142857142858,N=A%2?2.25:2.75,O=new pt;O.position.copy($n(N,R,1.9));let J=new ie(new Mt(.2,.24,.12,20),Ge(14672618,{metalness:.6,roughness:.3}));J.position.y=.06,O.add(J);let xe=new Ft({color:657930,emissive:3211104,emissiveIntensity:.5,roughness:.15,metalness:.2,transparent:!0,opacity:.92}),Se=new ie(new Lt(.22,24,16),xe);Se.position.y=.34,O.add(Se);let ot=new ie(new Mt(.06,.07,.07,12),Ge(3158586,{metalness:.9}));ot.position.y=.58,O.add(ot);let nt=new ie(new tn(.22,.22),new It({map:n0(A+1),transparent:!0,depthWrite:!1,toneMapped:!1}));nt.position.set(0,.34,.23),O.add(nt),O.lookAt($n(14,R,1.9).add(new I(0,0,0))),O.lookAt(new I(0,1.9,14)),i.add(O),$.push({g:O,m:xe,estado:"off"})}let ue={off:[3211104,.35],ok:[1113920,2.2],boom:[16764928,2.2],ko:[16715792,2.4],sel:[16777215,2.4]};s.push(A=>$.forEach((R,N)=>{let[O,J]=ue[R.estado]||ue.off;R.m.emissive.setHex(O),R.m.emissiveIntensity=R.estado==="boom"?J*(.4+.6*(Math.sin(A*9)>0?1:.2)):R.estado==="off"?.25+.2*Math.max(0,Math.sin(A*2-N*.4)):R.estado==="sel"?J*(.6+.4*Math.sin(A*12)):J}));let ce=[];["negra","negra","negra","negra","plata","cristal"].forEach((A,R)=>{let N=Mv({tipo:A,aroColor:r.aro}),O=-.42-R*.24,J=R%2?4.4:5.15;N.position.copy($n(J,O,.7)),i.add(N),ce.push(N),o.push({m:N.userData.aro.material,k:"aro"},{m:N.userData.aroB.material,k:"aro"})});let ge=ce[4],He=[];for(let A=0;A<20;A++){let R=A/20*Math.PI*1.6-.8,N=new ie(new Lt(.035,8,6),bt(16769120,2.5));N.position.set(Math.cos(R)*.62,.55+A*.045,Math.sin(R)*.62),ge.add(N),He.push(N)}let Be=1,Oe=Math.PI-1,$e=Math.PI+1,D=bv(8,12.5,Oe,$e,1,Ge(13949154,{roughness:.25,metalness:.2}));i.add(D);let xt=new ie(new ai(new kn(Array.from({length:41},(A,R)=>$n(8.02,Oe+($e-Oe)*R/40,1))),120,.04,6),l("borde",2));i.add(xt);let rt=new ie(new ai(new kn(Array.from({length:41},(A,R)=>$n(8.02,Oe+($e-Oe)*R/40,.05))),120,.04,6),l("borde",1.4));i.add(rt);for(let A=0;A<4;A++){let R=new ie(new kt(2.6,.25*(A+1),.4),Ge(13159638,{roughness:.3}));R.position.set(0,.125*(A+1),-6.6-A*.4),i.add(R);let N=new ie(new kt(2.5,.02,.02),bt(16777215,1.8));N.position.set(0,.25*(A+1),-6.4-A*.4),i.add(N)}i.add(Fo(8.25,Oe+.02,Math.PI-.14,1),Fo(8.25,Math.PI+.14,$e-.02,1)),i.add(Fo(10.8,.95,1.85,0),Fo(10.8,-1.85,-.95,0),Fo(7.3,-.3,-1.35,0,1));let C={rojo:[],azul:[]},_=(A,R,N=!0)=>n0(A,{fg:N?"#ffffff":"#444",bg:N?R:"#111"});for(let A of["rojo","azul"])for(let R=0;R<4;R++){let N=A==="rojo"?Math.PI+.78-R*.13:Math.PI-.39-R*.13,O=new pt;O.position.copy($n(9.6,N,1)),O.rotation.y=N+Math.PI;let J=A==="rojo"?"#d0101c":"#1a5cff",xe=new ie(new kt(.95,1.15,.6),Ge(1447710,{metalness:.6,roughness:.3}));xe.position.y=.575,O.add(xe);let Se=new ie(new tn(.75,.85),new It({map:_(R+1,J),toneMapped:!1}));Se.position.set(0,.6,.305),O.add(Se);let ot=new ie(new kt(1.05,.06,.7),bt(Sv[A],1.8));ot.position.y=1.18,O.add(ot);let nt=Bo({...Ev[A][R],scale:1});nt.position.set(0,0,-.7),O.add(nt),i.add(O),C[A].push({g:O,panel:Se,fig:nt,col:J,n:R+1,cae:0,vivo:!0})}let k=Bo({body:2237486,legs:1447452,hair:2759184,scale:1.04});k.position.copy($n(4.6,.62,.7)),k.lookAt(0,.7,20),i.add(k),s.push(A=>{k.rotation.z=Math.sin(A*1.7)*.02}),[[-1.62,14.2,18],[1.62,14.2,18],[-.72,15.5,12],[.72,15.5,12]].forEach(([A,R,N])=>{let O=Kp({rows:7,cols:Math.round(N*1.25),width:N,seat:2763316,step:1381918});O.position.copy($n(R,A,0)),O.rotation.y=A,i.add(O)});let Y=Ge(9080472,{metalness:.9,roughness:.35});[12,6].forEach((A,R)=>{let N=new ie(new Ot(A,.12,6,96),Y);N.rotation.x=Math.PI/2,N.position.y=15-R*.4,i.add(N);let O=N.clone();O.position.y=15.6-R*.4,i.add(O)});for(let A=0;A<6;A++){let R=new ie(new kt(.25,.25,26),Y);R.position.y=15.3,R.rotation.y=A*Math.PI/6,i.add(R)}let ne=[];for(let A=0;A<14;A++){let R=A/14*Math.PI*2;ne.push([Math.sin(R)*12,14.6,Math.cos(R)*12])}for(let A=0;A<6;A++){let R=A/6*Math.PI*2+.3;ne.push([Math.sin(R)*6,14.2,Math.cos(R)*6])}i.add(Qp(s,ne,[16777215,r.luces[0],r.luces[1],16769184]));let fe=[];for(let A=0;A<8;A++){let R=new ie(new Yi(1.4,16,20,1,!0),new It({color:16777215,transparent:!0,opacity:.045,blending:Sn,depthWrite:!1,side:St})),N=new pt,O=A/8*Math.PI*2;N.position.set(Math.sin(O)*10,14.5,Math.cos(O)*10-3),R.position.y=-8,N.add(R),i.add(N),fe.push(N),s.push(J=>{N.rotation.z=Math.sin(J*.5+A)*.45,N.rotation.x=Math.cos(J*.4+A*1.7)*.35})}let ye=(()=>{let A=document.createElement("canvas");A.width=A.height=64;let R=A.getContext("2d"),N=R.createRadialGradient(32,32,0,32,32,32);return N.addColorStop(0,"rgba(255,255,255,1)"),N.addColorStop(.3,"rgba(255,200,80,0.8)"),N.addColorStop(1,"rgba(255,80,0,0)"),R.fillStyle=N,R.fillRect(0,0,64,64),new Tn(A)})();function se(A,{color:R=16747040,n:N=260,size:O=1}={}){let J=new yt,xe=new Float32Array(N*3),Se=[];for(let En=0;En<N;En++){xe.set([A.x,A.y,A.z],En*3);let ku=new I().randomDirection().multiplyScalar((2+Math.random()*6)*O);Se.push(ku)}J.setAttribute("position",new Zt(xe,3));let ot=new Xi(J,new Mi({size:.45*O,map:ye,transparent:!0,depthWrite:!1,blending:Sn,color:R})),nt=new ri(R,300,25,1.5);nt.position.copy(A);let $t=new ie(new Ot(.5,.08,8,64),new It({color:16769184,transparent:!0,toneMapped:!1}));$t.rotation.x=Math.PI/2,$t.position.copy(A),i.add(ot,nt,$t),a.push({pts:ot,luz:nt,onda:$t,v:Se,t:0})}s.push((A,R)=>{for(let N=a.length-1;N>=0;N--){let O=a[N];O.t+=R;let J=O.pts.geometry.attributes.position;for(let xe=0;xe<O.v.length;xe++)J.setXYZ(xe,J.getX(xe)+O.v[xe].x*R,J.getY(xe)+O.v[xe].y*R,J.getZ(xe)+O.v[xe].z*R),O.v[xe].y-=3*R,O.v[xe].multiplyScalar(.97);J.needsUpdate=!0,O.pts.material.opacity=Math.max(0,1-O.t/1.6),O.luz.intensity=Math.max(0,300*(1-O.t/.6)),O.onda.scale.setScalar(1+O.t*12),O.onda.material.opacity=Math.max(0,1-O.t/.8),O.t>1.8&&(i.remove(O.pts,O.luz,O.onda),O.pts.geometry.dispose(),a.splice(N,1))}for(let N of["rojo","azul"])for(let O of C[N])!O.vivo&&O.cae<1&&(O.cae=Math.min(1,O.cae+R*1.4),O.fig.position.y=-2.4*O.cae*O.cae,O.fig.visible=O.cae<1),O.vivo&&O.cae>0&&(O.cae=0,O.fig.position.y=0,O.fig.visible=!O.oculto);He.forEach((N,O)=>{let J=O/He.length<Be;N.material.emissiveIntensity=J?O===Math.ceil(Be*He.length)-1?2.5+2*Math.sin(A*20):2.2:.05}),ce.forEach((N,O)=>{N.userData.aro.material.emissiveIntensity=N.userData.activa?2+1.5*Math.sin(A*8):2.2})});let re=new pt;i.add(re);let be=[];i0(re,e.deco,be,{tema:r}),s.push((A,R)=>be.forEach(N=>N(A,R)));function ze(A){i.remove(re),re.traverse(R=>{R.geometry&&R.geometry.dispose()}),re=new pt,i.add(re),be.length=0,e.deco=A,i0(re,A,be,{tema:r})}let Me=Bo({body:13113892,legs:1710626,hair:2759184});Me.visible=!1,i.add(Me);let ve=new ie(new Ot(.55,.06,8,40),bt(4259712,3));ve.rotation.x=Math.PI/2,ve.visible=!1,i.add(ve),s.push(A=>{ve.visible&&ve.scale.setScalar(1+.15*Math.sin(A*5))});let Fe=(A,R)=>Math.atan2(A,R);function We(A,R){let N=Math.hypot(A,R),O=Fe(A,R);return O<0&&(O+=Math.PI*2),N>8&&N<12.5&&O>Oe&&O<$e?1:0}function Qe(A,R){let N=Math.hypot(A,R);if(N>15.5||N<6.3)return!0;let O=Fe(A,R);return O<0&&(O+=Math.PI*2),O>Oe&&O<$e&&N>7.7&&N<8.3&&Math.abs(O-Math.PI)>.16}function F(A){r=(typeof A=="string"?Yn[A]:A)||Yn.azul,e.paleta=r,y.map.dispose(),y.map=t0(r),y.needsUpdate=!0,o.forEach(({m:R,k:N})=>R.emissive.setHex(r[N])),u.forEach((R,N)=>R.color.setHex(r.luces[N%2])),n.background.setHex(r.fondo),n.fog.color.setHex(r.fondo)}return{root:i,minis:$,bombas:ce,atriles:C,presentador:k,bote:_e,plata:ge,walker:Me,marca:ve,alturaEn:We,bloqueado:Qe,setTema:F,setDeco:ze,setFiguraEquipo(A){Me.traverse(R=>{R.isMesh&&R.material.color&&R.position.y>.8&&R.position.y<1.3&&R.material.color.setHex(A==="azul"?1724624:13113892)})},posAtril(A,R=0){let N=C[A][R],O=new I;return N.fig.getWorldPosition(O),O},ocultarAtril(A,R,N){C[A][R].fig.visible=!N,C[A][R].oculto=N},setMinis(A){A.forEach((R,N)=>{$[N]&&($[N].estado=R)})},setMecha(A){Be=Math.max(0,Math.min(1,A))},activarBomba(A){ce.forEach((R,N)=>R.userData.activa=N===A)},explotar(A){let R=A==="bote"?new I(0,3.45,0):A==="mini"?new I(0,2.4,2.5):ce[typeof A=="number"?A:0].localToWorld(new I(0,.92,0));se(R,{size:A==="bote"?1.6:1})},celebrar(){for(let A=0;A<4;A++)setTimeout(()=>se(new I((Math.random()-.5)*10,6+Math.random()*4,(Math.random()-.5)*6),{color:[3211104,16764992,4235519,16728224][A]}),A*300)},eliminar(A,R){let N=C[A][R];!N||!N.vivo||(N.vivo=!1,N.panel.material.map=_(N.n,N.col,!1),N.panel.material.needsUpdate=!0)},revivir(A,R){let N=C[A][R];N&&(N.vivo=!0,N.panel.material.map=_(N.n,N.col,!0),N.panel.material.needsUpdate=!0)},revivirTodos(){for(let A of["rojo","azul"])C[A].forEach((R,N)=>this.revivir(A,N))},update(A,R){for(let N of s)N(A,R)},dispose(){n.remove(i),i.traverse(A=>{A.geometry&&A.geometry.dispose()})}}}function i0(n,e,t,{tema:i}={}){if(!e||e==="normal")return;let s=Math.random;if(e==="navidad"){let a=new pt;a.position.set(-4.2,1,-9.8);let r=new ie(new Mt(.15,.2,.6,12),Ge(5913114));r.position.y=.3,a.add(r);for(let p=0;p<4;p++){let x=new ie(new Yi(1.5-p*.3,1.4,24),Ge(940586,{roughness:.8}));x.position.y=1+p*.8,a.add(x)}let o=Rs("*",{size:.9,depth:.12,material:bt(16769120,3)});o.position.y=4.2,a.add(o);let l=[];for(let p=0;p<70;p++){let x=s()*3.4,g=(1.5-x/3.4*1.3)*.98,m=s()*7,y=new ie(new Lt(.06,8,6),bt([16764992,16724016,4235519,16777215][p%4],2.5));y.position.set(Math.cos(m)*g,.7+x,Math.sin(m)*g),a.add(y),l.push(y)}for(let p=0;p<8;p++){let x=new ie(new Lt(.12,12,10),Ge([13639712,16764992][p%2],{metalness:.8,roughness:.2})),g=p*.8,m=.5+p*.35;x.position.set(Math.cos(g)*(1.4-m*.35),.7+m,Math.sin(g)*(1.4-m*.35)),a.add(x)}n.add(a),t.push(p=>{l.forEach((x,g)=>x.material.emissiveIntensity=1+2*(Math.sin(p*3+g*1.7)>0?1:.2)),o.rotation.y=p});let c=1400,u=new Nn(new Lt(.03,6,4),bt(16773312,2.4),c),h=new mt,d=0,f=(p,x,g,m,y)=>{for(let T=0;T<c/4&&d<c;T++,d++){let v=x+(g-x)*s();h.makeTranslation(Math.sin(v)*p,m+s()*y,Math.cos(v)*p),u.setMatrixAt(d,h)}};f(10.8,.95,1.85,0,1.05),f(10.8,-1.85,-.95,0,1.05),f(8.25,Math.PI-1,Math.PI+1,1,1.05),f(7.3,-.3,-1.35,0,1),n.add(u);for(let p=0;p<5;p++){let x=new ie(new Ot(.5,.06,8,24),Ge(13638170));x.position.set(-8+p*4,13.6,-12),n.add(x)}}if(e==="finanio"){let a=String(new Date().getFullYear()+(new Date().getMonth()===11?1:0)),r=Rs(a,{size:1.6,depth:.35,material:Ge(16765514,{metalness:.9,roughness:.2,emissive:6702080,emissiveIntensity:.7})});r.position.set(5,8.6,-14),r.rotation.y=-.3,n.add(r);let o=pd("\xA1FELIZ A\xD1O NUEVO!",{w:6,h:.9,color:"#ffffff",font:"900 110px Arial"});o.position.set(5,7.6,-13.6),o.rotation.y=-.3,n.add(o);let l=new pt;l.position.set(-9,9,-12),l.rotation.y=.6,l.add(new ie(new Si(1.4,48),Ge(16052448,{emissive:4209184})));let c=new ie(new kt(.08,1.2,.05),Ge(1118481));c.position.set(0,.55,.03),l.add(c);let u=new ie(new kt(.1,.8,.05),Ge(1118481));u.position.set(0,.35,.04),l.add(u),n.add(l);let h=new Nn(new tn(.12,.06),new It({side:St}),600),d=[];for(let y=0;y<600;y++)d.push([(s()-.5)*30,s()*15,(s()-.5)*24,s()*6]),h.setColorAt(y,new Ve([16764992,16726634,3854591,16777215,6356832][y%5]));n.add(h);let f=new mt,p=new In,x=new Ln,g=new I(1,1,1),m=new I;t.push(y=>{d.forEach((T,v)=>{let E=15-(T[1]+y*.8)%15;x.set(y*2+T[3],y+T[3],0),p.setFromEuler(x),f.compose(m.set(T[0]+Math.sin(y+T[3])*.4,E,T[2]),p,g),h.setMatrixAt(v,f)}),h.instanceMatrix.needsUpdate=!0})}if(e==="ninos"){for(let r=0;r<40;r++){let o=new ie(new Lt(.42,16,12),Ge([16726891,3920383,16765514,8257387,11563263][r%5],{roughness:.3}));o.scale.y=1.2;let l=Math.PI+(s()-.5)*2.6,c=12+s()*3;o.position.set(Math.sin(l)*c,4+s()*8,Math.cos(l)*c),n.add(o);let u=o.position.y;t.push(h=>{o.position.y=u+Math.sin(h+r)*.25})}let a=pd("ESPECIAL NI\xD1OS",{w:8,h:1.2,color:"#7dff6b",font:"900 120px Arial"});a.position.set(5,13.8,-12.5),a.rotation.y=-.35,n.add(a)}if(e==="famosos"){let a=new ie(new tn(2.6,6),Ge(11538458,{roughness:.9}));a.rotation.x=-Math.PI/2,a.position.set(0,.02,9.5),n.add(a);for(let o=0;o<10;o++){let l=Rs("*",{size:1.4,depth:.12,material:bt(16765514,2.4)});l.position.set(-12+o%5*6,13.2-(o>4?1.5:0),-11+o%2),n.add(l),t.push(c=>{l.rotation.y=c+o})}let r=Rs("ESPECIAL FAMOSOS",{size:.8,depth:.15,material:bt(16765514,1.8)});r.position.set(5,13.8,-12.5),r.rotation.y=-.35,n.add(r)}if(e==="campeones"){let a=new pt,r=Ge(16763978,{metalness:1,roughness:.2}),o=new ie(new no([[0,0],[.5,0],[.5,.15],[.15,.3],[.12,.9],[.6,1.4],[.75,2.2],[.7,2.25],[0,1.5]].map(([c,u])=>new le(c,u)),32),r);a.add(o),[-1,1].forEach(c=>{let u=new ie(new Ot(.35,.06,8,24,Math.PI),r);u.position.set(c*.75,1.8,0),u.rotation.z=c>0?-Math.PI/2:Math.PI/2,a.add(u)}),a.position.set(5.5,1,-10.5),a.scale.setScalar(1.3),n.add(a),t.push(c=>{a.rotation.y=c*.6});let l=Rs("SEMANA DE CAMPEONES",{size:.7,depth:.15,material:bt(16765514,1.8)});l.position.set(5,13.8,-12.5),l.rotation.y=-.35,n.add(l)}if(e==="nochebuena"){let a=Rs("*",{size:3,depth:.3,material:bt(16769120,3)});a.position.set(4,11,-13),n.add(a),t.push(o=>{a.rotation.y=o*.5});let r=[];for(let o=0;o<14;o++){let l=Math.PI+(o-6.5)*.12,c=new pt,u=new ie(new Mt(.08,.08,.5,10),Ge(16774368));u.position.y=.25,c.add(u);let h=new ie(new Lt(.06,8,6),bt(16752688,3));h.position.y=.58,h.scale.y=1.6,c.add(h),c.position.set(Math.sin(l)*8.6,1,Math.cos(l)*8.6),n.add(c),r.push(h)}t.push(o=>r.forEach((l,c)=>l.material.emissiveIntensity=2+Math.sin(o*13+c*3)*.8)),s0(n,t)}if(e==="navidad"&&s0(n,t,500),e==="halloween"){for(let o=0;o<16;o++){let l=new pt,c=new ie(new Lt(.4,14,10),bt(16742912,.6,{color:16742912}));c.scale.y=.75,l.add(c);let u=new ie(new Mt(.04,.05,.18,6),Ge(3824144));u.position.y=.34,l.add(u);let h=o/16*Math.PI*2;l.position.set(Math.sin(h)*7,.3,Math.cos(h)*7),n.add(l)}let a=[];for(let o=0;o<12;o++){let l=new pt,c=Ge(1118481);[-1,1].forEach(u=>{let h=new ie(new tn(.6,.25),c);h.material.side=St,h.position.x=u*.3,l.add(h)}),n.add(l),a.push(l)}t.push(o=>a.forEach((l,c)=>{let u=o*.4+c;l.position.set(Math.sin(u)*(6+c%4),8+Math.sin(o+c)*2,Math.cos(u)*(6+c%4)-3),l.children.forEach((h,d)=>h.rotation.y=(d?1:-1)*Math.sin(o*12+c)*.7)}));let r=new ie(new Si(6,6),new It({color:14540253,wireframe:!0,transparent:!0,opacity:.35}));r.position.set(-12,9,-9),r.rotation.y=.9,n.add(r)}if(e==="carnaval"){Tv(n,t,[16711850,62932,16704576,8072383]),wv(n,t,[16711850,62932,16704576,16777215]);for(let a=0;a<3;a++){let r=new ie(new Ot(1,.35,10,30),Ge([16711850,16704576,62932][a],{metalness:.6,roughness:.3}));r.scale.set(1.6,.7,.4),r.position.set(-6+a*6,12.5,-13),n.add(r)}}if(e==="sanvalentin"){let a=new Vn;a.moveTo(0,-1),a.bezierCurveTo(-1.6,.2,-.9,1.4,0,.6),a.bezierCurveTo(.9,1.4,1.6,.2,0,-1);let r=new si(a,{depth:.3,bevelEnabled:!0,bevelSize:.08,bevelThickness:.08,bevelSegments:2});for(let o=0;o<18;o++){let l=new ie(r,bt(o%2?16731501:16764117,1.4,{color:16731501})),c=Math.PI+(o-8.5)*.17;l.position.set(Math.sin(c)*14,5+o%3*2.6,Math.cos(c)*14),l.lookAt(0,l.position.y,0),l.scale.setScalar(.6+o%3*.2),n.add(l);let u=l.position.y;t.push(h=>{l.position.y=u+Math.sin(h*1.5+o)*.2})}}if(e==="semanasanta"){for(let a=0;a<20;a++){let r=Math.PI+(a-9.5)*.1,o=new pt,l=new ie(new Mt(.06,.06,.9,10),Ge(16183264));l.position.y=.45,o.add(l);let c=new ie(new Lt(.05,8,6),bt(16752688,3));c.position.y=.95,c.scale.y=1.7,o.add(c),o.position.set(Math.sin(r)*11.6,1,Math.cos(r)*11.6),n.add(o),t.push(u=>c.material.emissiveIntensity=2+Math.sin(u*11+a*2)*.8)}for(let a=0;a<6;a++){let r=new ie(new tn(2.2,9),Ge(4855912,{side:St,roughness:.9})),o=Math.PI+(a-2.5)*.45;r.position.set(Math.sin(o)*16,8,Math.cos(o)*16),r.lookAt(0,8,0),n.add(r)}}if(e==="verano"){let a=new ie(new Lt(1.6,24,16),bt(16765286,2.4));a.position.set(8,12,-13),n.add(a);for(let o=0;o<4;o++){let l=new pt,c=new ie(new Mt(.04,.04,2.4,8),Ge(16777215));c.position.y=1.2,l.add(c);let u=new ie(new Yi(1.3,.5,12,1,!0),Ge(o%2?15681391:46296,{side:St}));u.position.y=2.4,l.add(u);let h=[-1.25,1.25,-1.45,1.45][o];l.position.set(Math.sin(h)*9,0,Math.cos(h)*9),n.add(l)}let r=new ie(new Lt(.5,16,12),Ge(16777215,{roughness:.3}));n.add(r),t.push(o=>r.position.set(Math.sin(o)*6.6,.5+Math.abs(Math.sin(o*3))*1.2,Math.cos(o)*6.6));for(let o=0;o<4;o++){let l=new ie(new Ot(.4,.06,6,20,Math.PI*1.8),Ge([15681391,16765286,448160,1149618][o]));l.position.set(Math.sin(o*1.7)*8,.5,Math.cos(o*1.7)*8),n.add(l)}}}function s0(n,e,t=900){let i=new yt,s=new Float32Array(t*3);for(let r=0;r<t;r++)s.set([(Math.random()-.5)*34,Math.random()*16,(Math.random()-.5)*30],r*3);i.setAttribute("position",new Zt(s,3));let a=new Xi(i,new Mi({color:16777215,size:.08,transparent:!0,opacity:.85}));n.add(a),e.push((r,o)=>{let l=i.attributes.position;for(let c=0;c<t;c++){let u=l.getY(c)-o*.7;u<0&&(u=16),l.setY(c,u)}l.needsUpdate=!0})}function Tv(n,e,t){for(let i=0;i<36;i++){let s=new ie(new Lt(.42,16,12),Ge(t[i%t.length],{roughness:.3}));s.scale.y=1.2;let a=Math.PI+(Math.random()-.5)*2.6,r=12+Math.random()*3;s.position.set(Math.sin(a)*r,4+Math.random()*8,Math.cos(a)*r),n.add(s);let o=s.position.y;e.push(l=>{s.position.y=o+Math.sin(l+i)*.25})}}function wv(n,e,t){let i=new Nn(new tn(.12,.06),new It({side:St}),500),s=[];for(let u=0;u<500;u++)s.push([(Math.random()-.5)*30,Math.random()*15,(Math.random()-.5)*24,Math.random()*6]),i.setColorAt(u,new Ve(t[u%t.length]));n.add(i);let a=new mt,r=new In,o=new Ln,l=new I(1,1,1),c=new I;e.push(u=>{s.forEach((h,d)=>{let f=15-(h[1]+u*.8)%15;o.set(u*2+h[3],u+h[3],0),r.setFromEuler(o),a.compose(c.set(h[0]+Math.sin(u+h[3])*.4,f,h[2]),r,l),i.setMatrixAt(d,a)}),i.instanceMatrix.needsUpdate=!0})}var Av="boom3d",xd="media",Rv=["mp3","ogg","wav","m4a"],Cv=["png","webp","jpg","jpeg","svg"];function Pv(){return new Promise((n,e)=>{if(!("indexedDB"in window))return e(new Error("Sin IndexedDB"));let t=indexedDB.open(Av,1);t.onupgradeneeded=()=>t.result.createObjectStore(xd),t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)})}async function gd(n,e){let t=await Pv();return new Promise((i,s)=>{let a=t.transaction(xd,n),r=a.objectStore(xd),o=e(r);a.oncomplete=()=>i(o&&o.result),a.onerror=()=>s(a.error)})}var ci={get:n=>gd("readonly",e=>e.get(n)).catch(()=>{}),put:(n,e)=>gd("readwrite",t=>t.put(e,n)),del:n=>gd("readwrite",e=>e.delete(n))};function Iv(n){return new Promise(e=>{let t=new Audio,i=!1,s=a=>{i||(i=!0,e(a?n:null))};t.preload="metadata",t.onloadedmetadata=()=>s(!0),t.onerror=()=>s(!1),setTimeout(()=>s(!1),2500),t.src=n})}function Lv(n){return new Promise(e=>{let t=new Image;t.onload=()=>e(n),t.onerror=()=>e(null),t.src=n,setTimeout(()=>e(null),2500)})}async function r0(n,e,t){for(let i of e){let s=await t(`${n}.${i}`);if(s)return s}return null}var o0={};function zo(n){return o0["a:"+n]??=r0(`audio/${n}`,Rv,Iv)}function Nv(n){return o0["i:"+n]??=r0(`logos/${n}`,Cv,Lv)}var _u={};async function Dv(n){let e=await ci.get(n);return!e||!e.blob?null:(_u[n]&&URL.revokeObjectURL(_u[n].url),_u[n]={url:URL.createObjectURL(e.blob),name:e.name},_u[n])}async function Js(n,e){let t=await Dv(`${n}:${e.id}`);if(t)return{url:t.url,origen:"subido",nombre:t.name};let i=n==="musica"?e.archivosMusica:e.archivosLogo;for(let s of i||[]){let a=n==="musica"?await zo(s):await Nv(s);if(a)return{url:a,origen:"carpeta",nombre:a}}return null}async function _d(n,e,t){await ci.put(`${n}:${e}`,{blob:t,name:t.name,type:t.type,fecha:Date.now()})}async function vd(n,e){await ci.del(`${n}:${e}`)}var Ho=null;function ko(){return Ho||(Ho=new(window.AudioContext||window.webkitAudioContext)),Ho.state==="suspended"&&Ho.resume(),Ho}var dt={tone(n,e,t,i,s,a="sine",r=.2){let o=n.createOscillator(),l=n.createGain();o.type=a,o.frequency.setValueAtTime(i,t),l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(r,t+.01),l.gain.exponentialRampToValueAtTime(1e-4,t+s),o.connect(l).connect(e),o.start(t),o.stop(t+s+.05)},noiseBuffer(n,e=2){let t=n.createBuffer(1,n.sampleRate*e,n.sampleRate),i=t.getChannelData(0);for(let s=0;s<i.length;s++)i[s]=Math.random()*2-1;return t},whoosh(n,e,t,i=.7,s=-1,a=1,r=.35){let o=n.createBufferSource();o.buffer=dt.noiseBuffer(n,i+.1);let l=n.createBiquadFilter();l.type="bandpass",l.Q.value=1.2,l.frequency.setValueAtTime(300,t),l.frequency.exponentialRampToValueAtTime(3500,t+i*.6),l.frequency.exponentialRampToValueAtTime(600,t+i);let c=n.createGain();c.gain.setValueAtTime(1e-4,t),c.gain.exponentialRampToValueAtTime(r,t+i*.55),c.gain.exponentialRampToValueAtTime(1e-4,t+i);let u=n.createStereoPanner?n.createStereoPanner():null;o.connect(l).connect(c),u?(u.pan.setValueAtTime(s,t),u.pan.linearRampToValueAtTime(a,t+i),c.connect(u).connect(e)):c.connect(e),o.start(t),o.stop(t+i+.1)},kick(n,e,t,i=.5){let s=n.createOscillator(),a=n.createGain();s.frequency.setValueAtTime(140,t),s.frequency.exponentialRampToValueAtTime(42,t+.18),a.gain.setValueAtTime(i,t),a.gain.exponentialRampToValueAtTime(1e-4,t+.3),s.connect(a).connect(e),s.start(t),s.stop(t+.35)},hat(n,e,t,i=.06){let s=n.createBufferSource();s.buffer=dt.noiseBuffer(n,.06);let a=n.createBiquadFilter();a.type="highpass",a.frequency.value=7e3;let r=n.createGain();r.gain.setValueAtTime(i,t),r.gain.exponentialRampToValueAtTime(1e-4,t+.05),s.connect(a).connect(r).connect(e),s.start(t)},chord(n,e,t,i,s=2.5,a=.09){let r=n.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(400,t),r.frequency.exponentialRampToValueAtTime(4e3,t+.08),r.frequency.exponentialRampToValueAtTime(900,t+s),r.connect(e);for(let o of i)for(let l of[-6,6]){let c=n.createOscillator(),u=n.createGain();c.type="sawtooth",c.frequency.value=o,c.detune.value=l,u.gain.setValueAtTime(0,t),u.gain.linearRampToValueAtTime(a,t+.03),u.gain.setTargetAtTime(0,t+s*.5,s*.25),c.connect(u).connect(r),c.start(t),c.stop(t+s+.5)}},applause(n,e,t,i=3.5,s=.5){let a=dt.noiseBuffer(n,.03),r=n.createGain();r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(s,t+.4),r.gain.setValueAtTime(s,t+i-1),r.gain.exponentialRampToValueAtTime(1e-4,t+i),r.connect(e);let o=Math.floor(i*160);for(let l=0;l<o;l++){let c=n.createBufferSource();c.buffer=a;let u=n.createBiquadFilter();u.type="bandpass",u.frequency.value=900+Math.random()*2200,u.Q.value=.8;let h=n.createGain();h.gain.value=.25+Math.random()*.5;let d=n.createStereoPanner?n.createStereoPanner():null;c.connect(u).connect(h),d?(d.pan.value=Math.random()*2-1,h.connect(d).connect(r)):h.connect(r),c.start(t+Math.random()*i)}}};var Vo=9.6,An=5,or=(n,e,t)=>{let i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)},l0=n=>1+2.70158*Math.pow(n-1,3)+1.70158*Math.pow(n-1,2);function qv(){let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.3,"rgba(255,210,90,0.85)"),t.addColorStop(1,"rgba(255,80,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Tn(n)}function Uv(n){let e=document.createElement("canvas");e.width=1024,e.height=512;let t=e.getContext("2d"),i=t.createRadialGradient(512,256,30,512,256,600);i.addColorStop(0,n?"#1a6a8a":"#4a1a8a"),i.addColorStop(1,"#050210"),t.fillStyle=i,t.fillRect(0,0,1024,512),t.fillStyle="rgba(255,255,255,0.07)";for(let a=0;a<512;a+=14)for(let r=0;r<1024;r+=14){let o=Math.hypot(r-512,a-256)/600;t.beginPath(),t.arc(r+a/14%2*7,a,1+4*(1-o),0,7),t.fill()}let s=new Tn(e);return s.colorSpace=Ut,s}function c0(n,e,t,i){let s=new rr(n,{font:fd,size:e,depth:t,curveSegments:6,bevelEnabled:!0,bevelThickness:t*.25,bevelSize:e*.04,bevelSegments:3});s.computeBoundingBox();let a=s.boundingBox;return s.translate(-(a.max.x+a.min.x)/2,-(a.max.y+a.min.y)/2,-t/2),{mesh:new ie(s,i),w:a.max.x-a.min.x}}function u0(n,{logoUrl:e=null,cuatro:t=!1}={}){let i=new Gi,s=new Jt(55,n.domElement.width/n.domElement.height,.1,500),a=new Ts(n),r=a.fromScene(new ar,.04);i.environment=r.texture;let o=Uv(t);i.background=o,i.add(new _s(16777215,3153984,.8));let l=new co(16777215,2.2);l.position.set(3,5,8),i.add(l);let c=new ri(16752704,30,12,1.5);i.add(c);let u=[];for(let H=0;H<=40;H++){let Z=H/40;u.push(new I(-26+Z*26,Math.sin(Z*9)*2.2*(1-Z)+1.6*Z,-Math.cos(Z*6)*3*(1-Z)))}u.push(new I(0,1.75,0));let h=new kn(u),d=new ai(h,400,.07,8,!1),f=new Ft({color:13148256,roughness:.9}),p=new ie(d,f);i.add(p);let x=d.index.count,g=new pt;i.add(g);let m=new Ft({color:789522,metalness:.6,roughness:.2,emissive:16715792,emissiveIntensity:0});g.add(new ie(new Lt(1.4,48,32),m));let y=new ie(new Mt(.42,.5,.4,24),new Ft({color:3816518,metalness:.9,roughness:.3}));y.position.y=1.45,g.add(y);let T=600,v=new yt,E=new Float32Array(T*3),M=[],P=new Float32Array(T);for(let H=0;H<T;H++)M.push(new I),P[H]=-1;v.setAttribute("position",new Zt(E,3));let b=qv(),w=new Xi(v,new Mi({size:.35,map:b,transparent:!0,depthWrite:!1,blending:Sn,color:16765056}));i.add(w);let L=new kr(new Ua({map:b,color:16769184,blending:Sn,depthWrite:!1}));L.scale.setScalar(1.4),i.add(L);let U=900,z=new yt,G=new Float32Array(U*3),q=[];for(let H=0;H<U;H++)q.push(new I().randomDirection().multiplyScalar(4+Math.random()*14));z.setAttribute("position",new Zt(G,3));let V=new Xi(z,new Mi({size:.8,map:b,transparent:!0,depthWrite:!1,blending:Sn,color:16751152}));V.visible=!1,i.add(V);let Q=new ie(new io(.8,1.2,64),new It({color:16773296,transparent:!0,side:St,toneMapped:!1}));i.add(Q),Q.visible=!1;let j=new pt;j.position.set(0,1.4,0),i.add(j),j.visible=!1;let he=[[3.6,2.5,15209500,-.5,14,5],[3.1,2.15,16742928,-.3,12,9],[2.6,1.8,16769594,-.1,11,13]].map(([H,Z,me,Pe,_e,De])=>{let Ye=new Vn,ee=De,$=()=>(ee=(ee*9301+49297)%233280)/233280;for(let ce=0;ce<_e*2;ce++){let ge=ce*Math.PI/_e,He=ce%2?Z*(.85+$()*.3):H*(.8+$()*.35),Be=Math.cos(ge)*He*1.45,Oe=Math.sin(ge)*He;ce?Ye.lineTo(Be,Oe):Ye.moveTo(Be,Oe)}let ue=new ie(new si(Ye,{depth:.25,bevelEnabled:!0,bevelThickness:.08,bevelSize:.06,bevelSegments:2}),new Ft({color:me,emissive:me,emissiveIntensity:.35,roughness:.4}));return ue.position.z=Pe,j.add(ue),ue}),te=[];if(e){let H=new oo().load(e,me=>{let Pe=me.image.width/me.image.height;Z.scale.set(Math.min(7,4.2*Pe),Math.min(7,4.2*Pe)/Pe,1)});H.colorSpace=Ut;let Z=new ie(new tn(1,1),new It({map:H,transparent:!0,toneMapped:!1}));Z.position.z=.6,j.add(Z),te.push({mesh:Z,x:0,i:0,img:!0})}else{let H=new Ft({color:16761370,emissive:16738816,emissiveIntensity:.35,metalness:.3,roughness:.3}),Z=new Ft({color:1312778,roughness:.6}),me=["!","B","O","O","M","!"],Pe=0,_e=[];me.forEach((Ye,ee)=>{let $=c0(Ye,1.45,.6,H),ue=c0(Ye,1.45,.3,Z);ue.mesh.scale.set(1.12,1.1,1),ue.mesh.position.z=-.35;let ce=new pt;ce.add($.mesh,ue.mesh),ee===0&&(ce.rotation.z=Math.PI),_e.push({g:ce,w:$.w})}),Pe=-_e.reduce((Ye,ee)=>Ye+ee.w+.18,-.18)/2,_e.forEach((Ye,ee)=>{let $=Ye.g;$.position.x=Pe+Ye.w/2,Pe+=Ye.w+.18,$.position.y=ee%2?.1:-.1,j.add($),te.push({mesh:$,x:$.position.x,i:ee})}),j.rotation.z=.08}let ae=new pt;ae.position.set(0,1.4,-2),i.add(ae),ae.visible=!1;for(let H=0;H<18;H++){let Z=new ie(new tn(.6,30),new It({color:H%2?16764992:16732192,transparent:!0,opacity:.25,blending:Sn,depthWrite:!1,side:St,toneMapped:!1}));Z.rotation.z=H/18*Math.PI,ae.add(Z)}let oe=new tr(n);oe.addPass(new nr(i,s));let Ne=new As(new le(256,256),.6,.5,.75);oe.addPass(Ne),oe.addPass(new ir);let Ce=0,ft=7,Je=()=>(ft=ft*16807%2147483647)/2147483647;function at(H){let Z=Math.max(0,Math.min(.05,H-Ce));Ce=H;let me=or(0,An-.3,H)*.92+Math.min(1,H/(An-.3))*.08,Pe=h.getPointAt(Math.min(1,me));d.setDrawRange(Math.floor(x*Math.min(1,me)),x);let _e=H<An;L.visible=_e,L.position.copy(Pe),L.scale.setScalar(1+.5*Math.sin(H*40)*.5+.4),c.position.copy(Pe),c.intensity=_e?30+10*Math.sin(H*50):0;let De=v.attributes.position;for(let $=0;$<T;$++)P[$]<=0&&_e&&Je()<.08&&(P[$]=.4+Je()*.5,De.setXYZ($,Pe.x,Pe.y,Pe.z),M[$].set((Je()-.5)*6,Je()*5,(Je()-.5)*6)),P[$]>0&&(P[$]-=Z,M[$].y-=9*Z,De.setXYZ($,De.getX($)+M[$].x*Z,De.getY($)+M[$].y*Z,De.getZ($)+M[$].z*Z),P[$]<=0&&De.setXYZ($,0,-999,0));De.needsUpdate=!0,g.visible=H<An;let Ye=or(3.4,An,H);if(m.emissiveIntensity=Ye*(.5+.5*Math.sin(H*(10+Ye*30))),g.scale.setScalar(1+Ye*.12*Math.abs(Math.sin(H*18))),H<3.6){let $=new I(2.5,1.2,5.5);s.position.copy(Pe).add($),s.lookAt(Pe.x+3,Pe.y,Pe.z)}else if(H<An){let $=or(3.6,An,H);s.position.set(2.5-$*2.5,1.2+1.6+$*.2,5.5+3+$*2.5),s.lookAt(0,1.2,0)}else{let $=or(An,Vo,H),ue=Math.max(0,1-(H-An)/.8)*.35;s.position.set(Math.sin(H*60)*ue,1.4+Math.cos(H*53)*ue,11-$*2),s.lookAt(0,1.4,0)}let ee=H-An;if(V.visible=ee>0&&ee<2.5,Q.visible=ee>0&&ee<1,ee>0){let $=z.attributes.position,ue=1-Math.exp(-ee*2.2);for(let ce=0;ce<U;ce++)$.setXYZ(ce,q[ce].x*ue,1.2+q[ce].y*ue-ee*ee*.6,q[ce].z*ue);$.needsUpdate=!0,V.material.opacity=Math.max(0,1-ee/2.2),Q.scale.setScalar(1+ee*20),Q.material.opacity=Math.max(0,1-ee),Q.position.set(0,1.2,0),Q.lookAt(s.position)}j.visible=ee>.1,ae.visible=ee>.2,j.visible&&(he.forEach(($,ue)=>{let ce=l0(Math.min(1,Math.max(0,(ee-.1-ue*.08)/.45)));$.scale.setScalar(Math.max(.001,ce)),$.rotation.z=(ue-1)*.06+Math.sin(H*2+ue)*.03}),te.forEach($=>{let ue=l0(Math.min(1,Math.max(0,(ee-.35-$.i*.12)/.4)));$.mesh.scale.setScalar(Math.max(.001,ue)),$.img||($.mesh.position.y=($.i%2?.1:-.1)+Math.sin(H*6+$.i)*.06)}),j.rotation.y=Math.sin(H*1.2)*.15),ae.rotation.z=H*.3,ae.children.forEach($=>$.material.opacity=.22*or(An+.2,An+1,H)),oe.render()}return{render:at,overlay(H){return{streak:0,flash:Math.max(0,1-Math.abs(H-An-.05)/.25),fade:or(Vo-.8,Vo,H)}},resize(H,Z){s.aspect=H/Z,s.updateProjectionMatrix(),oe.setSize(H,Z),Ne.setSize(H,Z)},dispose(){oe.dispose?.(),i.traverse(H=>{H.geometry&&H.geometry.dispose()}),r.dispose(),a.dispose(),o.dispose(),n.toneMappingExposure=1}}}function h0(n,e,t){for(let u=0;u<9;u++)dt.tone(n,e,t+.2+u*.5,u%2?1200:1600,.05,"square",.05);let i=n.createBufferSource();i.buffer=dt.noiseBuffer(n,5);let s=n.createBiquadFilter();s.type="highpass",s.frequency.value=3e3;let a=n.createGain();a.gain.setValueAtTime(1e-4,t),a.gain.exponentialRampToValueAtTime(.06,t+.3),a.gain.setValueAtTime(.06,t+4.7),a.gain.exponentialRampToValueAtTime(1e-4,t+5),i.connect(s).connect(a).connect(e),i.start(t),i.stop(t+5.1);let r=t+An;dt.kick(n,e,r,.9),dt.kick(n,e,r+.05,.6);let o=n.createBufferSource();o.buffer=dt.noiseBuffer(n,2.5);let l=n.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(3e3,r),l.frequency.exponentialRampToValueAtTime(120,r+2);let c=n.createGain();c.gain.setValueAtTime(.7,r),c.gain.exponentialRampToValueAtTime(1e-4,r+2.3),o.connect(l).connect(c).connect(e),o.start(r),[[.35,[349,440,523]],[.95,[392,494,587]],[1.35,[440,554,659]]].forEach(([u,h])=>dt.chord(n,e,r+u,h,.35,.07)),dt.chord(n,e,r+1.9,[262,330,392,523],2.6,.08);for(let u=0;u<12;u++)dt.hat(n,e,r+1.9+u*.2,.05);dt.applause(n,e,r+3.2,1.5,.25)}var Ki=(n,e,t,i,s,a,r,o)=>({rombo:n,gap:e,franjas:t,borde:i,aro:s,marco:a,luces:r,fondo:o}),Rn={clasico:{name:"Normal",emoji:"\u2B50",paleta:null,deco:null,hashtag:"#Boom"},prime:{name:"Especial Prime Time",emoji:"\u{1F31F}",deco:"campeones",banner:"ESPECIAL PRIME TIME",paleta:"dorado",hashtag:"#BoomPrimeTime",festivo:!0,saludo:"\xA1Bienvenidos a esta gala especial de \xA1Boom! en prime time! Esta noche todos los premios valen el doble.",extra:["Y el bote\u2026 \xA1tambi\xE9n es doble! As\xED que mucho cuidado con los cables."]},halloween:{name:"Halloween",emoji:"\u{1F383}",deco:"halloween",banner:"ESPECIAL HALLOWEEN",hashtag:"#BoomHalloween",paleta:Ki(["#2a0a3d","#7a2aa0","#ff9a40"],"#060208",16742912,16742912,16729344,16742912,[16738816,10170623],328200),saludo:"\xA1Muajaja! Bienvenidos al especial de Halloween de \xA1Boom! Esta noche las bombas dan m\xE1s miedo que nunca."},ninos:{name:"Ni\xF1os",emoji:"\u{1F9F8}",deco:"ninos",banner:"ESPECIAL NI\xD1OS",hashtag:"#BoomNi\xF1os",festivo:!0,paleta:Ki(["#0062a0","#00a6d6","#ffe0f0"],"#020a14",16766474,16735400,16735400,16766474,[16735400,16766474],133652),saludo:"\xA1Hola, chicos y chicas! Bienvenidos al especial de ni\xF1os de \xA1Boom!, con las preguntas m\xE1s divertidas."},nochebuena:{name:"Nochebuena",emoji:"\u{1F56F}\uFE0F",deco:"nochebuena",banner:"ESPECIAL NOCHEBUENA",hashtag:"#BoomNochebuena",paleta:Ki(["#0a3a20","#20a050","#d8ffd0"],"#020a04",16766720,16766720,16764992,16766720,[16765024,4259712],133123),saludo:"\xA1Feliz Nochebuena! Bienvenidos a un \xA1Boom! muy especial, antes de la cena en familia."},navidad:{name:"Navidad",emoji:"\u{1F384}",deco:"navidad",banner:"ESPECIAL NAVIDAD",hashtag:"#BoomNavidad",festivo:!0,paleta:Ki(["#0f3fd0","#3f8cff","#cfe8ff"],"#030716",16760912,16735432,16738992,16747040,[4161023,16726586],132110),saludo:"\xA1Feliz Navidad! Bienvenidos al especial navide\xF1o de \xA1Boom! Que la \xFAnica bomba que explote hoy sea la de alegr\xEDa."},carnaval:{name:"Carnaval",emoji:"\u{1F3AD}",deco:"carnaval",banner:"ESPECIAL CARNAVAL",hashtag:"#BoomCarnaval",festivo:!0,paleta:Ki(["#3c096c","#7b2cbf","#00f5d4"],"#05020a",16704576,62932,16711850,16704576,[16711850,62932],328202),saludo:"\xA1Bienvenidos al Carnaval de \xA1Boom! Hoy hasta las bombas vienen disfrazadas."},nochevieja:{name:"Fin de A\xF1o",emoji:"\u{1F942}",deco:"finanio",banner:"ESPECIAL FIN DE A\xD1O",hashtag:"#BoomFinDeA\xF1o",festivo:!0,paleta:Ki(["#4a3008","#c89a30","#fff4c0"],"#050402",16777215,16764992,16769152,16764992,[16765024,16777215],262914),saludo:"\xA1Bienvenidos al especial de fin de a\xF1o de \xA1Boom! Despedimos el a\xF1o a lo grande\u2026 \xA1y con mucha mecha!"},verano:{name:"Verano",emoji:"\u{1F3D6}\uFE0F",deco:"verano",banner:"ESPECIAL VERANO",hashtag:"#BoomVerano",paleta:Ki(["#0077b6","#00b4d8","#fff3b0"],"#02101a",16765286,16765286,15681391,16765286,[16765286,16777215],135192),saludo:"\xA1Bienvenidos al especial de verano de \xA1Boom! Crema solar, chanclas\u2026 y nervios de acero."},especial300:{name:"Especial 300 suscriptores",emoji:"\u{1F3C6}",deco:"campeones",banner:"ESPECIAL 300 SUSCRIPTORES",hashtag:"#Boom300",festivo:!0,paleta:"dorado",saludo:"\xA1Bienvenidos a este \xA1Boom! muy especial! Est\xE1 dedicado a los suscriptores del canal de YouTube \xABIkeriano el campe\xF3n 2\xBB.",extra:["\xA1Ya sois 300! Muchas gracias por estar ah\xED. \xA1Vamos con el programa!"]},sanvalentin:{name:"San Valent\xEDn",emoji:"\u{1F498}",deco:"sanvalentin",banner:"ESPECIAL SAN VALENT\xCDN",hashtag:"#BoomSanValent\xEDn",paleta:Ki(["#590d22","#c9184a","#ffccd5"],"#0c0204",16764117,16748451,16731501,16748451,[16731501,16764117],786948),saludo:"\xA1Feliz San Valent\xEDn! Hoy en \xA1Boom! los corazones laten m\xE1s r\xE1pido que las mechas."},semanasanta:{name:"Semana Santa",emoji:"\u{1F54A}\uFE0F",deco:"semanasanta",banner:"ESPECIAL SEMANA SANTA",hashtag:"#BoomSemanaSanta",paleta:Ki(["#1d0829","#3c1053","#d4af37"],"#040106",13938487,13938487,10910720,13938487,[9323693,16764032],262406),saludo:"Bienvenidos al especial de Semana Santa de \xA1Boom! Torrijas en la mesa y cables en el atril."},famosos:{name:"Famosos",emoji:"\u{1F3A4}",deco:"famosos",banner:"ESPECIAL FAMOSOS",hashtag:"#BoomFamosos",paleta:null,festivo:!0,saludo:"\xA1Bienvenidos al especial de famosos de \xA1Boom! Hoy juegan estrellas\u2026 inventadas, eso s\xED."},campeones:{name:"Campeones",emoji:"\u{1F947}",deco:"campeones",banner:"SEMANA DE CAMPEONES",hashtag:"#BoomCampeones",paleta:"dorado",saludo:"\xA1Bienvenidos a la semana de campeones de \xA1Boom! Solo juegan los mejores equipos de la historia."}};function yd(n,e="azul"){let t=Rn[n]||Rn.clasico;return t.paleta?typeof t.paleta=="string"?Yn[t.paleta]:t.paleta:Yn[e]||Yn.azul}var vu={navidad:{bote:[["\xC1rbol que se suele decorar en Navidad","Abeto|pino"],["Planta de hojas rojas t\xEDpica de Navidad","Flor de Pascua|poinsettia"],["Nombre del primer premio de la Loter\xEDa de Navidad","El Gordo|Gordo"],["Dulce navide\xF1o de almendra y miel","Turr\xF3n"],["Lo que cae del cielo en una Navidad blanca","Nieve"]],clas:[["\xBFCu\xE1ntos Reyes Magos hay?",["3","4"],0],["\xBFQu\xE9 d\xEDa se celebra Navidad?",["25 de diciembre","24 de diciembre"],0]]},nochebuena:{bote:[["Misa de medianoche de Nochebuena: misa del\u2026","Gallo"],["Carbonero que trae regalos en el Pa\xEDs Vasco y Navarra","Olentzero"],["Pescado en salaz\xF3n que se cena en muchas casas","Bacalao"],["Figuras que representan el nacimiento de Jes\xFAs","Bel\xE9n|nacimiento"],["Canci\xF3n t\xEDpica de Navidad","Villancico"]],clas:[["\xBFNochebuena es el 24 o el 25 de diciembre?",["24","25"],0],["\xBFEl Olentzero es vasco o andaluz?",["Vasco","Andaluz"],0]]},nochevieja:{bote:[["N\xFAmero de uvas que se comen con las campanadas","12|doce"],["Plaza de Madrid donde se dan las campanadas","Puerta del Sol|Sol"],["\xDAltimo d\xEDa del a\xF1o en Espa\xF1a","Nochevieja|31 de diciembre"],["Bebida espumosa para brindar","Cava|champ\xE1n|champan"],["Fruta que se come con las campanadas","Uva|uvas"]],clas:[["\xBFCu\xE1ntas campanadas suenan a medianoche?",["12","10"],0],["\xBFA\xF1o Nuevo es el 1 de enero?",["S\xED","No"],0]]},halloween:{bote:[["Hortaliza que se vac\xEDa y se talla con una cara","Calabaza"],["Conde vampiro creado por Bram Stoker","Dr\xE1cula|Dracula"],["Mes en el que se celebra Halloween","Octubre"],["Mam\xEDfero volador que duerme cabeza abajo","Murci\xE9lago"],["En Halloween los ni\xF1os piden: \xBFtruco o\u2026?","Trato"]],clas:[["\xBFHalloween es el 31 de octubre?",["S\xED","No"],0],["\xBFSamhain era una fiesta celta o romana?",["Celta","Romana"],0]]},carnaval:{bote:[["Objeto que cubre la cara en Carnaval","M\xE1scara|antifaz"],["Ciudad andaluza famosa por sus chirigotas","C\xE1diz"],["Entierro con el que acaba el Carnaval: el entierro de la\u2026","Sardina"],["Isla canaria con un gran Carnaval en su capital","Tenerife|Gran Canaria"],["Ciudad italiana del Carnaval de las m\xE1scaras","Venecia"]],clas:[["\xBFEl Carnaval se celebra antes o despu\xE9s de la Cuaresma?",["Antes","Despu\xE9s"],0]]},sanvalentin:{bote:[["Mes en el que se celebra San Valent\xEDn","Febrero"],["Dios romano del amor con arco y flechas","Cupido"],["Flor que se regala en San Valent\xEDn","Rosa"],["\xD3rgano que simboliza el amor","Coraz\xF3n"],["D\xEDa del mes de San Valent\xEDn","14|catorce"]],clas:[["\xBFSan Valent\xEDn es el 14 de febrero?",["S\xED","No"],0]]},semanasanta:{bote:[["Periodo de cuarenta d\xEDas antes de Semana Santa","Cuaresma"],["Domingo con el que empieza la Semana Santa","Ramos|Domingo de Ramos"],["Dulce de pan frito t\xEDpico de Semana Santa","Torrija|torrijas"],["Instrumento que resuena durante horas en Calanda","Tambor"],["Gorro alto y puntiagudo de los nazarenos","Capirote"]],clas:[["\xBFLa Semana Santa acaba el Domingo de Resurrecci\xF3n?",["S\xED","No"],0]]},verano:{bote:[["Estaci\xF3n m\xE1s calurosa del a\xF1o","Verano"],["Sopa fr\xEDa andaluza de tomate","Gazpacho"],["Lo que se pone para protegerse del sol","Crema solar|protector solar|gorra"],["Mes del a\xF1o con el d\xEDa m\xE1s largo en Espa\xF1a","Junio"],["Lugar con arena junto al mar","Playa"]],clas:[["\xBFEl verano empieza en junio en Espa\xF1a?",["S\xED","No"],0]]},ninos:{bote:[["Animal que dice \xABguau\xBB","Perro"],["Color del cielo en un d\xEDa despejado","Azul"],["N\xFAmero de ruedas de una bicicleta","2|dos"],["Personaje de cuento que pierde un zapato de cristal","Cenicienta"],["Animal que pone huevos y hace \xABcocoric\xF3\xBB si es macho","Gallo|gallina"]],clas:[["\xBFLas vacas dan leche?",["S\xED","No"],0],["\xBFCu\xE1ntas patas tiene un perro?",["4","6"],0]]}};var Ov={music:!0,musicVol:.8,sfx:!0,sfxVol:.9,publico:!0,publicoVol:.8,gradas:!0,voz:!0,lee:!1,leeVel:"normal",chistes:!0,monologo:!1,cabecera:"3d",color:"azul",quality:"media",nombre:"",profesion:"",equipoNombre:"Los Mechas",presentador:"Rober Mecha",presentaciones:!0,platoLuz:"auto"},bd="1.2",we=Object.assign({},Ov,JSON.parse(localStorage.getItem("boom3d_cfg")||"{}")),Fv=new Set;function Go(){localStorage.setItem("boom3d_cfg",JSON.stringify(we)),Fv.forEach(n=>n(we))}function Hv(n,e){let t=new TextEncoder().encode(n+"|"+String(e).trim()),i=2166136261;for(let s of t)i^=s,i=Math.imul(i,16777619)>>>0;return i.toString(16).padStart(8,"0")}var d0={davefx:{id:"davefx",modelo:"es_ES-davefx-medium",licencia:"CC0",sexo:"m"},sharvard:{id:"sharvard",modelo:"es_ES-sharvard-medium",licencia:"CC BY 3.0 (Univ. de Edimburgo)",sexo:"m"},carlfm:{id:"carlfm",modelo:"es_ES-carlfm-x_low",licencia:"dominio p\xFAblico",sexo:"m"},ald:{id:"ald",modelo:"es_MX-ald-medium",licencia:"Unlicense",sexo:"m"},daniela:{id:"daniela",modelo:"es_AR-daniela-high",licencia:"CC BY-SA 4.0 (corpus OpenSLR 61)",sexo:"f"}},p0=["Voces sint\xE9ticas gen\xE9ricas (Piper TTS)",["Presentador: davefx (CC0)","Concursantes: sharvard (CC BY 3.0, Univ. de Edimburgo),","carlfm (dominio p\xFAblico), ald (Unlicense),","daniela (CC BY-SA 4.0, corpus OpenSLR 61)"]],f0={p:null,q:null},Sd="./",Md=n=>f0[n]||(f0[n]=fetch(`${Sd}voz/${n==="q"?"q/":""}index.json`).then(e=>e.ok?e.json():{}).catch(()=>({}))),lr=null,Wo=null,Cs={activo:()=>!0,volumen:()=>1,rapida:()=>!1,velocidad:()=>1};function m0(n){Object.assign(Cs,n),n.base&&(Sd=n.base),Md("p"),Md("q")}function zv(){if(Wo)return Wo;let n=speechSynthesis.getVoices();if(!n.length)return null;let e=n.filter(a=>/^es(-|_)ES/i.test(a.lang)),t=n.filter(a=>/^es/i.test(a.lang)),i=/(male|hombre|pablo|jorge|[áa]lvaro|diego|enrique|carlos|ra[uú]l|antonio|juan|miguel|manuel|sergio|david|xavier|javier)/i,s=/(female|mujer|helena|laura|lucia|luc[íi]a|m[oó]nica|paulina|elvira|conchita|sabina|marisol|esperanza|dalia|elena)/i;return Wo=e.find(a=>i.test(a.name))||e.find(a=>!s.test(a.name))||t.find(a=>i.test(a.name))||e[0]||t[0]||null,Wo}typeof speechSynthesis<"u"&&(speechSynthesis.onvoiceschanged=()=>{Wo=null});function Ed(){lr&&(lr.pause(),lr=null);try{speechSynthesis.cancel()}catch{}}async function g0(n,{voz:e="davefx",pregunta:t=!1,pitch:i=1,rate:s=1,minMs:a=0}={}){if(Ed(),!n||!Cs.activo())return;let r=Hv(e,n),o=await Md(t?"q":"p"),l=Cs.velocidad();if(o[r]!=null){let c=new Audio(`${Sd}voz/${t?"q/":""}${r}.mp3`);return c.volume=Math.min(1,Cs.volumen()),c.playbackRate=Cs.rapida()?1.25:1,lr=c,new Promise(u=>{let h=!1,d=()=>{h||(h=!0,lr===c&&(lr=null),u())};c.onended=d,c.onerror=d,c.onpause=d,c.play().catch(d),setTimeout(d,(o[r]*1e3+1500)/(Cs.rapida()?1.25:1))})}return typeof speechSynthesis>"u"?new Promise(c=>setTimeout(c,Math.max(a,n.length*55)/l)):new Promise(c=>{let u=new SpeechSynthesisUtterance(n);u.lang="es-ES",u.pitch=i*(d0[e]?.sexo==="f"?1.1:.85),u.rate=s*(Cs.rapida()?1.25:1),u.volume=Math.min(1,Cs.volumen());let h=zv();h&&d0[e]?.sexo!=="f"&&(u.voice=h);let d=!1,f=()=>{d||(d=!0,c())};u.onend=f,u.onerror=f,setTimeout(f,Math.max(3e3,n.length*90)),speechSynthesis.speak(u)})}m0({activo:()=>we.voz,volumen:()=>1,rapida:()=>we.leeVel==="rapida",velocidad:()=>1});var kv=new Set(["aplausos","risas"]),yu=[],cr=localStorage.getItem("boom3d_mute")==="1",Xo=new Set,Bn=null,bu=null,Zs=null,x0=()=>{let n=ko();return Zs||(Zs=n.createGain(),Zs.connect(n.destination)),Zs.gain.value=cr?0:1,[n,Zs]},Vv={tecla:(n,e,t)=>dt.tone(n,e,t,900,.05,"square",.05),pop:(n,e,t)=>{dt.tone(n,e,t,500,.08,"sine",.2),dt.tone(n,e,t+.05,900,.1,"sine",.15)},acierto:(n,e,t)=>{dt.tone(n,e,t,880,.15,"triangle",.2),dt.tone(n,e,t+.12,1320,.3,"triangle",.2)},fallo:(n,e,t)=>{dt.tone(n,e,t,220,.45,"square",.08),dt.tone(n,e,t+.05,165,.5,"square",.06)},corte:(n,e,t)=>{dt.hat(n,e,t,.25),dt.tone(n,e,t,2400,.04,"square",.06)},tictac:(n,e,t)=>dt.tone(n,e,t,1500,.03,"square",.05),explosion:(n,e,t)=>{dt.kick(n,e,t,.9);let i=n.createBufferSource();i.buffer=dt.noiseBuffer(n,1.6);let s=n.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(2500,t),s.frequency.exponentialRampToValueAtTime(100,t+1.4);let a=n.createGain();a.gain.setValueAtTime(.7,t),a.gain.exponentialRampToValueAtTime(1e-4,t+1.5),i.connect(s).connect(a).connect(e),i.start(t)},aplausos:(n,e,t)=>dt.applause(n,e,t,3,.4),risas:(n,e,t)=>{for(let i=0;i<10;i++)dt.tone(n,e,t+i*.13,300+Math.random()*200,.1,"sawtooth",.03);dt.applause(n,e,t,1.6,.15)},badumtss:(n,e,t)=>{dt.kick(n,e,t,.4),dt.kick(n,e,t+.16,.4),dt.hat(n,e,t+.35,.2)},banner:(n,e,t)=>dt.chord(n,e,t,[392,494,587],.6,.06),bote:(n,e,t)=>{[523,659,784,1046].forEach((i,s)=>dt.tone(n,e,t+s*.12,i,.3,"triangle",.15))}},Gv={menu:{bpm:112,notas:[262,330,392,330,294,349,440,349]},tension:{bpm:140,notas:[110,110,131,110,98,110,147,131]},trilha:{bpm:120,notas:[196,247,294,247,220,262,330,262]}},Ee={get muted(){return cr},get voiceOn(){return we.voz},setMuted(n){cr=n,localStorage.setItem("boom3d_mute",n?"1":"0"),Xo.forEach(e=>e.muted=n),Zs&&(Zs.gain.value=n?0:1),n&&speechSynthesis?.cancel?.()},setVoice(n){we.voz=n,n||this.stopVoice()},aplicarNiveles(){Bn?.a&&(Bn.a.volume=we.music?we.musicVol:0),Bn?.g&&(Bn.g.gain.value=we.music?.5*we.musicVol:0)},async play(n,{volume:e=1}={}){let t=kv.has(n);if(t?!we.publico:!we.sfx)return null;e*=t?we.publicoVol:we.sfxVol;let i=await zo(n);if(i){let s=new Audio(i);return s.volume=Math.min(1,e),s.muted=cr,Xo.add(s),s.onended=()=>Xo.delete(s),s.play().catch(()=>{}),s}try{let[s,a]=x0(),r=s.createGain();r.gain.value=e,r.connect(a),Vv[n]?.(s,r,s.currentTime+.01),setTimeout(()=>r.disconnect(),6e3)}catch{}return null},async music(n,{etapa:e=null}={}){this.stopMusic();let t=null;if(e){let s=await Js("musica",e);s&&(t=s.url)}if(!t&&n==="tension"&&yu.length&&(t=yu[Math.floor(Math.random()*yu.length)]),t||(t=await zo("musica_"+n)),t){let s=new Audio(t);s.loop=n!=="cabecera",s.volume=we.music?we.musicVol:0,s.muted=cr,Bn={a:s},s.play().catch(()=>{});return}let i=Gv[n];if(i)try{let[s,a]=x0(),r=s.createGain();r.gain.value=we.music?.5*we.musicVol:0,r.connect(a);let o=s.currentTime+.05,l=0,c=60/i.bpm/2;Bn={iv:setInterval(()=>{for(;o<s.currentTime+.4;)dt.tone(s,r,o,i.notas[l%i.notas.length],c*.9,"triangle",.05),l%4===0&&dt.kick(s,r,o,.12),l%2&&dt.hat(s,r,o,.015),o+=c,l++},120),g:r}}catch{}},setCanciones(n){yu=n||[]},stopMusic(){if(Bn){if(Bn.a&&Bn.a.pause(),Bn.iv){clearInterval(Bn.iv);try{Bn.g.disconnect()}catch{}}Bn=null}},voice(n,e,{pregunta:t=!1,voz:i="davefx"}={}){let s=String(e||"").replace(/<[^>]+>/g,"").trim();return s&&(window.__vozLog||(window.__vozLog=new Map)).set(i+"|"+s+"|"+t,{v:i,t:s,q:t}),new Promise(async a=>{if(!we.voz||cr)return setTimeout(a,300);this.stopVoice();let r=n?await zo("voz/"+n):null;if(r){let o=new Audio(r);bu=o,o.onended=o.onerror=()=>a(),o.play().catch(()=>a()),setTimeout(a,3e4);return}if(!s)return setTimeout(a,300);await g0(s,{voz:i,pregunta:t}),a()})},stopVoice(){bu&&(bu.pause(),bu=null),Ed()},stopAll(){Xo.forEach(n=>n.pause()),Xo.clear(),this.stopMusic(),this.stopVoice()}};var Mu={caliente:[{d:"Plato t\xEDpico espa\xF1ol hecho con huevos y patatas",f:"{1} de {2}",a:["tortilla","sopa","crema"],ra:0,b:["patatas","verduras","arroz"],rb:0},{d:"Pan rectangular y blando que se vende en rebanadas",f:"{1} de {2}",a:["bizcocho","pan","torta"],ra:1,b:["horno","le\xF1a","molde"],rb:2},{d:"Ventana redonda de los barcos",f:"{1} de {2}",a:["ojo","boca","puerta"],ra:0,b:["pez","buey","gato"],rb:1},{d:"Gigantesco enga\xF1o de madera de la mitolog\xEDa griega",f:"{1} de {2}",a:["toro","carro","caballo"],ra:2,b:["Troya","Esparta","Atenas"],rb:0},{d:"Se dice de algo muy esperado y beneficioso",f:"{1} de {2}",a:["sol","agua","viento"],ra:1,b:["enero","abril","mayo"],rb:2},{d:"Animal marino con forma de cinco brazos",f:"{1} de {2}",a:["estrella","flor","luna"],ra:0,b:["r\xEDo","lago","mar"],rb:2},{d:"Herramienta ajustable para apretar tuercas",f:"{1} {2}",a:["sierra","llave","lima"],ra:1,b:["inglesa","francesa","alemana"],rb:0},{d:"Forma cari\xF1osa de llamar a la pareja ideal",f:"{1} {2}",a:["gran","dulce","media"],ra:2,b:["naranja","manzana","pera"],rb:0},{d:"Viaje de los reci\xE9n casados",f:"{1} de {2}",a:["noche","luna","tarde"],ra:1,b:["plata","az\xFAcar","miel"],rb:2},{d:"Punto d\xE9bil de una persona",f:"{1} de {2}",a:["tal\xF3n","rodilla","codo"],ra:0,b:["H\xE9rcules","Aquiles","Ulises"],rb:1},{d:"Cuento de Andersen sobre un ave que resulta ser un cisne",f:"El {1} {2}",a:["pollito","gatito","patito"],ra:2,b:["feo","triste","perdido"],rb:0},{d:"Juego de lanzar una moneda al aire",f:"{1} o {2}",a:["cara","rey","sol"],ra:0,b:["reina","luna","cruz"],rb:2},{d:"Fen\xF3meno de meteoros que cruzan el cielo nocturno",f:"{1} de {2}",a:["nube","lluvia","r\xEDo"],ra:1,b:["estrellas","planetas","lunas"],rb:0},{d:"Construcci\xF3n b\xEDblica en la que surgieron las distintas lenguas",f:"{1} de {2}",a:["puerta","casa","torre"],ra:2,b:["Bel\xE9n","Babel","Roma"],rb:1},{d:"Punto estrecho que frena un proceso",f:"{1} de {2}",a:["cuello","pie","brazo"],ra:0,b:["jarra","botella","taza"],rb:1},{d:"Espect\xE1culo de cohetes y luces de colores en el cielo",f:"{1} {2}",a:["juegos","fuegos","rayos"],ra:1,b:["el\xE9ctricos","nocturnos","artificiales"],rb:2},{d:"Persona que destaca negativamente en su familia",f:"{1} {2}",a:["oveja","cabra","vaca"],ra:0,b:["negra","blanca","loca"],rb:0},{d:"Ave que golpea los troncos con el pico",f:"{1} {2}",a:["gallo","p\xE1jaro","pato"],ra:1,b:["herrero","cartero","carpintero"],rb:2},{d:"Regi\xF3n del espacio de la que ni la luz puede escapar",f:"{1} {2}",a:["pozo","t\xFAnel","agujero"],ra:2,b:["negro","rojo","blanco"],rb:0},{d:"Objeto que usan los adivinos para ver el futuro",f:"{1} de {2}",a:["bola","caja","copa"],ra:0,b:["plata","cristal","oro"],rb:1},{d:"Reuni\xF3n en la que varias personas debaten",f:"{1} {2}",a:["silla","mesa","rueda"],ra:1,b:["redonda","larga","alta"],rb:0},{d:"Persona que pasa mucho tiempo leyendo y estudiando",f:"{1} de {2}",a:["gato","b\xFAho","rat\xF3n"],ra:2,b:["biblioteca","museo","oficina"],rb:0},{d:"Marinero con mucha experiencia",f:"{1} de {2}",a:["perro","lobo","oso"],ra:1,b:["puerto","barco","mar"],rb:2},{d:"Dulce navide\xF1o blando de almendra, t\xEDpico de la provincia de Alicante",f:"{1} de {2}",a:["turr\xF3n","mazap\xE1n","polvor\xF3n"],ra:0,b:["chocolate","Jijona","coco"],rb:1}],cables4:[{p:"\xBFCu\xE1l es la capital de Australia?",op:["S\xEDdney","Melbourne","Canberra","Perth"],r:2},{p:"\xBFCu\xE1ntos jugadores tiene un equipo de baloncesto en la pista?",op:["5","6","7","11"],r:0},{p:"\xBFQu\xE9 planeta es conocido como el planeta rojo?",op:["Venus","Marte","J\xFApiter","Saturno"],r:1},{p:"\xBFQui\xE9n escribi\xF3 \xABLa casa de Bernarda Alba\xBB?",op:["Garc\xEDa Lorca","Machado","Valle-Incl\xE1n","Unamuno"],r:0},{p:"\xBFEn qu\xE9 a\xF1o lleg\xF3 el ser humano a la Luna?",op:["1965","1969","1972","1975"],r:1},{p:"\xBFQu\xE9 r\xEDo pasa por Sevilla?",op:["Ebro","Tajo","Guadalquivir","Duero"],r:2},{p:"\xBFCu\xE1l es el oc\xE9ano m\xE1s grande del planeta?",op:["Atl\xE1ntico","\xCDndico","Pac\xEDfico","\xC1rtico"],r:2},{p:"\xBFQu\xE9 instrumento tiene normalmente 88 teclas?",op:["\xD3rgano","Piano","Acorde\xF3n","Arpa"],r:1},{p:"\xBFCu\xE1l es el metal m\xE1s abundante en la corteza terrestre?",op:["Hierro","Aluminio","Cobre","Oro"],r:1},{p:"\xBFQui\xE9n pint\xF3 \xABLas Meninas\xBB?",op:["Goya","El Greco","Vel\xE1zquez","Murillo"],r:2},{p:"\xBFCu\xE1ntos lados tiene un hex\xE1gono?",op:["5","6","7","8"],r:1},{p:"\xBFEn qu\xE9 pa\xEDs est\xE1n las pir\xE1mides de Guiza?",op:["M\xE9xico","Per\xFA","Egipto","Sud\xE1n"],r:2},{p:"\xBFQu\xE9 gas necesitamos respirar para vivir?",op:["Nitr\xF3geno","Ox\xEDgeno","Helio","Hidr\xF3geno"],r:1},{p:"\xBFCu\xE1l es el animal terrestre m\xE1s r\xE1pido?",op:["Le\xF3n","Guepardo","Caballo","Gacela"],r:1},{p:"\xBFEn qu\xE9 ciudad est\xE1 la Sagrada Familia?",op:["Madrid","Valencia","Barcelona","Bilbao"],r:2},{p:"\xBFQu\xE9 idioma se habla oficialmente en Brasil?",op:["Espa\xF1ol","Portugu\xE9s","Franc\xE9s","Italiano"],r:1},{p:"\xBFCu\xE1ntos minutos son una hora y media?",op:["60","80","90","120"],r:2},{p:"\xBFQui\xE9n compuso \xABLas cuatro estaciones\xBB?",op:["Vivaldi","Mozart","Bach","Beethoven"],r:0},{p:"\xBFQu\xE9 \xF3rgano bombea la sangre por el cuerpo?",op:["Pulm\xF3n","H\xEDgado","Coraz\xF3n","Ri\xF1\xF3n"],r:2},{p:"\xBFCu\xE1l es el s\xEDmbolo qu\xEDmico del oro?",op:["Ag","Au","Or","Fe"],r:1},{p:"\xBFCu\xE1l es la isla m\xE1s grande de Canarias?",op:["Gran Canaria","Tenerife","Lanzarote","Fuerteventura"],r:1},{p:"\xBFEn qu\xE9 deporte se usa un \xABtee\xBB?",op:["Tenis","Golf","Hockey","Polo"],r:1},{p:"\xBFQu\xE9 continente tiene m\xE1s pa\xEDses?",op:["Asia","Europa","\xC1frica","Am\xE9rica"],r:2},{p:"\xBFC\xF3mo se llama la cr\xEDa del caballo?",op:["Ternero","Potro","Cordero","Lech\xF3n"],r:1},{p:"\xBFCu\xE1l es la monta\xF1a m\xE1s alta de Espa\xF1a?",op:["Mulhac\xE9n","Teide","Aneto","Veleta"],r:1},{p:"\xBFQu\xE9 escritor cre\xF3 a Sherlock Holmes?",op:["Agatha Christie","Arthur Conan Doyle","Edgar Allan Poe","Charles Dickens"],r:1},{p:"\xBFCu\xE1ntos huesos tiene aproximadamente un adulto?",op:["106","206","306","186"],r:1},{p:"\xBFQu\xE9 moneda se usaba en Espa\xF1a antes del euro?",op:["Escudo","Peseta","Lira","Franco"],r:1},{p:"\xBFEn qu\xE9 a\xF1o cay\xF3 el Muro de Berl\xEDn?",op:["1985","1989","1991","1993"],r:1},{p:"\xBFQu\xE9 color sale al mezclar azul y amarillo?",op:["Verde","Morado","Naranja","Marr\xF3n"],r:0}],cables5:[{p:"\xBFQu\xE9 planeta est\xE1 m\xE1s cerca del Sol?",op:["Venus","Mercurio","Tierra","Marte","J\xFApiter"],r:1},{p:"\xBFCu\xE1l es el r\xEDo m\xE1s largo de la pen\xEDnsula ib\xE9rica?",op:["Ebro","Duero","Tajo","Guadiana","Guadalquivir"],r:2},{p:"\xBFQui\xE9n escribi\xF3 \xABCien a\xF1os de soledad\xBB?",op:["Vargas Llosa","Garc\xEDa M\xE1rquez","Cort\xE1zar","Borges","Neruda"],r:1},{p:"\xBFCu\xE1l es la capital de Canad\xE1?",op:["Toronto","Montreal","Vancouver","Ottawa","Quebec"],r:3},{p:"\xBFCu\xE1ntos jugadores de un equipo de f\xFAtbol hay en el campo?",op:["9","10","11","12","13"],r:2},{p:"\xBFQu\xE9 elemento qu\xEDmico tiene el s\xEDmbolo \xABNa\xBB?",op:["Nitr\xF3geno","Sodio","Ne\xF3n","N\xEDquel","Potasio"],r:1},{p:"\xBFEn qu\xE9 ciudad se encuentra la Alhambra?",op:["C\xF3rdoba","Sevilla","Granada","M\xE1laga","Toledo"],r:2},{p:"\xBFQui\xE9n pint\xF3 el \xABGuernica\xBB?",op:["Dal\xED","Mir\xF3","Picasso","Sorolla","Goya"],r:2},{p:"\xBFCu\xE1l es el pa\xEDs m\xE1s grande del mundo por superficie?",op:["China","EE. UU.","Canad\xE1","Rusia","Brasil"],r:3},{p:"\xBFCu\xE1ntas cuerdas tiene una guitarra espa\xF1ola cl\xE1sica?",op:["4","5","6","7","12"],r:2},{p:"\xBFEn qu\xE9 a\xF1o se celebraron los Juegos Ol\xEDmpicos de Barcelona?",op:["1988","1990","1992","1994","1996"],r:2},{p:"\xBFQu\xE9 mar ba\xF1a la ciudad de Valencia?",op:["Cant\xE1brico","Mediterr\xE1neo","Egeo","Adri\xE1tico","B\xE1ltico"],r:1},{p:"\xBFCu\xE1l es el hueso m\xE1s largo del cuerpo humano?",op:["H\xFAmero","Tibia","F\xE9mur","Peron\xE9","Radio"],r:2},{p:"\xBFCu\xE1l es el animal m\xE1s grande del planeta?",op:["Elefante africano","Ballena azul","Cachalote","Jirafa","Orca"],r:1},{p:"\xBFQu\xE9 n\xFAmero representa la letra romana D?",op:["50","100","500","1000","5000"],r:2},{p:"\xBFCu\xE1l de estos es un gas noble?",op:["Ox\xEDgeno","Arg\xF3n","Cloro","Fl\xFAor","Hidr\xF3geno"],r:1},{p:"\xBFQu\xE9 capital est\xE1 atravesada por el r\xEDo Danubio?",op:["Praga","Budapest","Varsovia","Berl\xEDn","Roma"],r:1},{p:"\xBFQu\xE9 ciudad espa\xF1ola es conocida como \xABla Ciudad Condal\xBB?",op:["Madrid","Barcelona","Valencia","Zaragoza","Bilbao"],r:1},{p:"\xBFQui\xE9n pint\xF3 \xABLa noche estrellada\xBB?",op:["Monet","Van Gogh","Renoir","C\xE9zanne","Degas"],r:1},{p:"\xBFQu\xE9 lengua tiene m\xE1s hablantes nativos del mundo?",op:["Ingl\xE9s","Espa\xF1ol","Chino mandar\xEDn","Hindi","\xC1rabe"],r:2},{p:"\xBFCu\xE1ntos grados suman los \xE1ngulos de un tri\xE1ngulo?",op:["90","120","180","270","360"],r:2},{p:"\xBFQu\xE9 oc\xE9ano ba\xF1a las costas de Galicia?",op:["Atl\xE1ntico","Pac\xEDfico","\xCDndico","\xC1rtico","Ant\xE1rtico"],r:0},{p:"\xBFEn qu\xE9 pa\xEDs naci\xF3 la pizza margarita?",op:["Francia","Italia","Grecia","Espa\xF1a","EE. UU."],r:1},{p:"\xBFQu\xE9 tipo de animal es la tortuga?",op:["Anfibio","Reptil","Mam\xEDfero","Pez","Ave"],r:1},{p:"\xBFQu\xE9 d\xEDa se celebra la festividad de los Reyes Magos?",op:["1 de enero","6 de enero","25 de diciembre","19 de marzo","2 de febrero"],r:1}],estrategica:[{t:"Pa\xEDses de Sudam\xE9rica",ok:["Per\xFA","Chile","Colombia","Uruguay","Paraguay","Bolivia","Ecuador"],ko:["M\xE9xico","Cuba","Panam\xE1"]},{t:"Planetas del sistema solar",ok:["Mercurio","Venus","Marte","J\xFApiter","Saturno","Urano","Neptuno"],ko:["Plut\xF3n","Luna","Sol"]},{t:"Comunidades aut\xF3nomas con costa",ok:["Galicia","Asturias","Cantabria","Andaluc\xEDa","Murcia","Catalu\xF1a","C. Valenciana"],ko:["Arag\xF3n","Castilla-La Mancha","Extremadura"]},{t:"Obras de Shakespeare",ok:["Hamlet","Otelo","Macbeth","El rey Lear","Romeo y Julieta","La tempestad","Julio C\xE9sar"],ko:["Fausto","El Quijote","La Celestina"]},{t:"Mam\xEDferos",ok:["Delf\xEDn","Murci\xE9lago","Ballena","Ornitorrinco","Elefante","Caballo","Canguro"],ko:["Tibur\xF3n","Ping\xFCino","Cocodrilo"]},{t:"Instrumentos de cuerda",ok:["Viol\xEDn","Viola","Violonchelo","Contrabajo","Guitarra","Arpa","La\xFAd"],ko:["Flauta","Oboe","Timbal"]},{t:"Capitales europeas",ok:["Lisboa","Viena","Praga","Dubl\xEDn","Oslo","Atenas","Varsovia"],ko:["Oporto","Mil\xE1n","Ginebra"]},{t:"Colores del arco\xEDris",ok:["Rojo","Naranja","Amarillo","Verde","Azul","A\xF1il","Violeta"],ko:["Rosa","Marr\xF3n","Blanco"]},{t:"Elementos qu\xEDmicos met\xE1licos",ok:["Hierro","Cobre","Plata","Sodio","Zinc","Aluminio","Mercurio"],ko:["Ox\xEDgeno","Azufre","Ne\xF3n"]},{t:"Deportes ol\xEDmpicos de verano",ok:["Atletismo","Nataci\xF3n","Judo","Remo","Esgrima","Tenis","Baloncesto"],ko:["Esqu\xED","Curling","Bobsleigh"]}],desempate:[{t:"Islas espa\xF1olas",ok:["Mallorca","Menorca","Ibiza","Tenerife","La Palma","Lanzarote"],ko:["Madeira","C\xF3rcega","Cerde\xF1a","Malta"]},{t:"Frutas",ok:["Mango","Kiwi","Papaya","Melocot\xF3n","Ciruela","Granada"],ko:["Zanahoria","Calabac\xEDn","Puerro","Esp\xE1rrago"]},{t:"N\xFAmeros primos",ok:["2","3","5","7","11","13"],ko:["9","15","21","1"]},{t:"Ciudades andaluzas",ok:["C\xE1diz","Huelva","Ja\xE9n","Almer\xEDa","C\xF3rdoba","Granada"],ko:["Murcia","Badajoz","Albacete","Ciudad Real"]}],clasificatoria:[{p:"\xBFEl Sol es una estrella o un planeta?",op:["Estrella","Planeta"],r:0},{p:"\xBFCu\xE1l es m\xE1s grande, la Tierra o Marte?",op:["La Tierra","Marte"],r:0},{p:"\xBFLa capital de Portugal es Lisboa u Oporto?",op:["Lisboa","Oporto"],r:0},{p:"\xBFEl Everest est\xE1 en el Himalaya o en los Andes?",op:["Himalaya","Andes"],r:0},{p:"\xBFCu\xE1ntas patas tiene una ara\xF1a?",op:["6","8"],r:1},{p:"\xBFQui\xE9n escribi\xF3 el Quijote?",op:["Cervantes","Quevedo"],r:0},{p:"\xBFA cu\xE1ntos grados hierve el agua a nivel del mar?",op:["100 \xBAC","90 \xBAC"],r:0},{p:"\xBFEl delf\xEDn es un pez o un mam\xEDfero?",op:["Pez","Mam\xEDfero"],r:1},{p:"\xBFCu\xE1ntos d\xEDas tiene un a\xF1o bisiesto?",op:["366","365"],r:0},{p:"\xBFEn qu\xE9 pa\xEDs est\xE1 Roma?",op:["Italia","Grecia"],r:0},{p:"\xBFEn qu\xE9 isla est\xE1 el Teide?",op:["Tenerife","Gran Canaria"],r:0},{p:"\xBFQui\xE9n pint\xF3 la Gioconda?",op:["Leonardo da Vinci","Miguel \xC1ngel"],r:0},{p:"\xBFPuede volar el ping\xFCino?",op:["S\xED","No"],r:1},{p:"\xBFQu\xE9 mes tiene 31 d\xEDas?",op:["Abril","Mayo"],r:1},{p:"\xBFCu\xE1l es la f\xF3rmula del agua?",op:["H2O","CO2"],r:0},{p:"\xBFJ\xFApiter es un planeta gaseoso o rocoso?",op:["Gaseoso","Rocoso"],r:0},{p:"\xBFCu\xE1ntos gramos tiene un kilo?",op:["1.000","100"],r:0},{p:"\xBFEl flamenco es t\xEDpico de Andaluc\xEDa o de Galicia?",op:["Andaluc\xEDa","Galicia"],r:0},{p:"\xBFCada cu\xE1ntos a\xF1os hay Juegos Ol\xEDmpicos de verano?",op:["4","2"],r:0},{p:"\xBFPor d\xF3nde respira la ballena?",op:["Pulmones","Branquias"],r:0},{p:"\xBFEn qu\xE9 ciudad est\xE1 el Museo del Prado?",op:["Madrid","Barcelona"],r:0},{p:"\xBFQu\xE9 pesa m\xE1s, un kilo de hierro o un kilo de paja?",op:["Pesan lo mismo","El hierro"],r:0},{p:"\xBFEn qu\xE9 ciudad est\xE1 el Big Ben?",op:["Londres","Par\xEDs"],r:0},{p:"\xBFTiene luz propia la Luna?",op:["S\xED","No"],r:1},{p:"\xBFEl c\xF3ndor es un ave o un reptil?",op:["Ave","Reptil"],r:0},{p:"\xBFEn qu\xE9 ciudad est\xE1 la Torre Eiffel?",op:["Par\xEDs","Lyon"],r:0},{p:"\xBFCu\xE1ntos lados tiene un tri\xE1ngulo?",op:["3","4"],r:0},{p:"\xBFCon qu\xE9 se elabora el chocolate?",op:["Cacao","Caf\xE9"],r:0},{p:"\xBFMozart era austriaco o alem\xE1n?",op:["Austriaco","Alem\xE1n"],r:0},{p:"\xBFLa paella es t\xEDpica de Valencia o de Asturias?",op:["Valencia","Asturias"],r:0},{p:"\xBFEn qu\xE9 continente est\xE1 el r\xEDo Amazonas?",op:["Am\xE9rica","\xC1frica"],r:0},{p:"\xBFCu\xE1ntas casillas tiene un tablero de ajedrez?",op:["64","81"],r:0},{p:"\xBFDe qu\xE9 pa\xEDs es originario el oso panda?",op:["China","Jap\xF3n"],r:0},{p:"\xBFCu\xE1ntas cavidades tiene el coraz\xF3n humano?",op:["4","2"],r:0},{p:"\xBFQu\xE9 d\xEDa es Navidad?",op:["25 de diciembre","6 de enero"],r:0},{p:"\xBFEl kiwi es tambi\xE9n un ave?",op:["S\xED","No"],r:0},{p:"\xBFPor qu\xE9 es famosa Venecia?",op:["Sus canales","Sus monta\xF1as"],r:0},{p:"\xBFQu\xE9 animal es el m\xE1s alto del mundo?",op:["Jirafa","Elefante"],r:0},{p:"\xBFEn qu\xE9 pa\xEDs est\xE1 Machu Picchu?",op:["Per\xFA","Bolivia"],r:0},{p:"\xBFCu\xE1ntos colores tiene la bandera de Espa\xF1a?",op:["2","3"],r:0},{p:"\xBFDe qu\xE9 color es la clorofila?",op:["Verde","Roja"],r:0},{p:"\xBFCu\xE1ntos minutos tiene una hora?",op:["60","100"],r:0},{p:"\xBFQu\xE9 es m\xE1s grande, un oc\xE9ano o un mar?",op:["Un oc\xE9ano","Un mar"],r:0},{p:"\xBFEl S\xE1hara es un desierto de \xC1frica o de Asia?",op:["\xC1frica","Asia"],r:0},{p:"\xBFCu\xE1l es el planeta m\xE1s grande del sistema solar?",op:["J\xFApiter","Saturno"],r:0},{p:"\xBFQu\xE9 es el murci\xE9lago?",op:["Mam\xEDfero","Ave"],r:0}],bote:[{p:"Capital de Francia",r:"Par\xEDs"},{p:"Animal conocido como el rey de la selva",r:"Le\xF3n"},{p:"Sat\xE9lite natural de la Tierra",r:"Luna"},{p:"Mes del a\xF1o que tiene 28 o 29 d\xEDas",r:"Febrero"},{p:"Color que resulta de mezclar rojo y blanco",r:"Rosa"},{p:"N\xFAmero de patas que tiene un insecto",r:"6|seis"},{p:"Apellido del autor de \xABDon Quijote de la Mancha\xBB",r:"Cervantes|Miguel de Cervantes"},{p:"Planeta famoso por sus grandes anillos",r:"Saturno"},{p:"Capital de Italia",r:"Roma"},{p:"Deporte en el que se batea un \xABhome run\xBB",r:"B\xE9isbol"},{p:"Metal precioso de color amarillo",r:"Oro"},{p:"Continente en el que est\xE1 Egipto",r:"\xC1frica"},{p:"N\xFAmero de d\xEDas de una semana",r:"7|siete"},{p:"Ave que es s\xEDmbolo de la paz",r:"Paloma"},{p:"Instrumento con teclas blancas y negras",r:"Piano"},{p:"Producto dulce que elaboran las abejas",r:"Miel"},{p:"Capital de Jap\xF3n",r:"Tokio|Tokyo"},{p:"Estaci\xF3n del a\xF1o que empieza en diciembre en Espa\xF1a",r:"Invierno"},{p:"Animal que tiene trompa",r:"Elefante"},{p:"Idioma oficial de Brasil",r:"Portugu\xE9s"},{p:"Moneda oficial de Espa\xF1a",r:"Euro|el euro"},{p:"N\xFAmero de jugadores de un equipo de f\xFAtbol en el campo",r:"11|once"},{p:"Oc\xE9ano que separa Europa de Am\xE9rica",r:"Atl\xE1ntico"},{p:"Capital de Alemania",r:"Berl\xEDn"},{p:"Fruta amarilla y alargada que se pela",r:"Pl\xE1tano|banana"},{p:"Piedra preciosa m\xE1s dura",r:"Diamante"},{p:"Pa\xEDs con forma de bota",r:"Italia"},{p:"Animal que nos da la lana",r:"Oveja"},{p:"N\xFAmero de a\xF1os de un siglo",r:"100|cien"},{p:"Instrumento \xF3ptico para observar las estrellas",r:"Telescopio"},{p:"Capital de Andaluc\xEDa",r:"Sevilla"},{p:"Lo contrario de \xABnoche\xBB",r:"D\xEDa|el d\xEDa"},{p:"Parte de la planta que crece bajo tierra",r:"Ra\xEDz"},{p:"\xDAnico mam\xEDfero capaz de volar",r:"Murci\xE9lago"},{p:"Primer mes del a\xF1o",r:"Enero"},{p:"Bebida que se obtiene de la uva fermentada",r:"Vino"},{p:"Pa\xEDs cuya capital es Lisboa",r:"Portugal"},{p:"Rey de los dioses griegos",r:"Zeus"},{p:"Agua en estado s\xF3lido",r:"Hielo"},{p:"Ciudad donde est\xE1 la Puerta de Alcal\xE1",r:"Madrid"},{p:"Animal con caparaz\xF3n que camina muy despacio",r:"Tortuga"},{p:"Planeta en el que vivimos",r:"Tierra|la Tierra"},{p:"N\xFAmero de colores del arco\xEDris",r:"7|siete"},{p:"Profesional que apaga incendios",r:"Bombero|bombera"},{p:"N\xFAmero de horas que tiene un d\xEDa",r:"24|veinticuatro"},{p:"Instrumento de seis cuerdas t\xEDpico del flamenco",r:"Guitarra"},{p:"Capital de Rusia",r:"Mosc\xFA"},{p:"Estrella que nos da luz y calor",r:"Sol|el Sol"},{p:"Animal que hace \xABmiau\xBB",r:"Gato"},{p:"Fruto seco con forma de cerebro",r:"Nuez"},{p:"Persona que cura a los enfermos en un hospital",r:"M\xE9dico|m\xE9dica|doctor|doctora"},{p:"Ciudad espa\xF1ola con la Torre del Oro",r:"Sevilla"},{p:"P\xE1jaro que repite palabras",r:"Loro"},{p:"Mar que ba\xF1a Barcelona",r:"Mediterr\xE1neo"},{p:"Juego de mesa con reyes, damas y alfiles",r:"Ajedrez"},{p:"Lugar donde se guardan y prestan libros",r:"Biblioteca"},{p:"Estaci\xF3n del a\xF1o en la que caen las hojas",r:"Oto\xF1o"},{p:"Prenda que se pone en la cabeza",r:"Gorro|sombrero|gorra"},{p:"Animal que es el mejor amigo del hombre",r:"Perro"},{p:"Pa\xEDs de los canguros",r:"Australia"}]};var pe=n=>document.querySelector(n),de=n=>String(n??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Yo=()=>window.__VEL||1,Nt=n=>Number(n).toLocaleString("es-ES")+" \u20AC",_0=n=>String(n||"").toLowerCase().replace(/ñ/g,"n").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ").trim(),v0=(n,e)=>{let t=_0(n);return!!t&&String(e).split("|").some(i=>{let s=_0(i);return s===t||s.replace(/^(el|la|los|las) /,"")===t.replace(/^(el|la|los|las) /,"")})},ui=n=>{n=n.slice();for(let e=n.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[n[e],n[t]]=[n[t],n[e]]}return n},wi=n=>n[Math.floor(Math.random()*n.length)],Qs={abort:!0},$o=0,Qi=new Set;function Su(){$o++;let n=[...Qi];return Qi=new Set,n.forEach(e=>e()),$o}function y0(n){if(n!==$o)throw Qs}var Rt=(n,e=$o)=>new Promise((t,i)=>{let s=()=>{clearTimeout(a),i(Qs)},a=setTimeout(()=>{Qi.delete(s),e===$o?t():i(Qs)},n/Yo());Qi.add(s)}),Ht=n=>new Promise((e,t)=>{let i=()=>t(Qs);Qi.add(i),n.then(s=>{Qi.delete(i),e(s)},s=>{Qi.delete(i),t(s)})});addEventListener("unhandledrejection",n=>{n.reason===Qs&&n.preventDefault()});var hi=class{constructor(e,t){this.ilimitado=!e||e===1/0,this.rest=this.ilimitado?1/0:e,this.onTick=t,this.corriendo=!1,this.terminado=!1,this.fin=new Promise(i=>this._res=i),this._iv=setInterval(()=>{!this.corriendo||this.terminado||this.ilimitado||(this.rest=Math.max(0,this.rest-.1*Yo()),this.onTick&&this.onTick(this.rest),this.rest<=0&&(this.terminado=!0,clearInterval(this._iv),this._res("TIEMPO")))},100),this._l=()=>this.stop(),Qi.add(this._l),t&&t(this.rest)}start(){return this.corriendo=!0,this}pause(){this.corriendo=!1}sumar(e){this.ilimitado||(this.rest=Math.max(.1,this.rest+e)),this.onTick&&this.onTick(this.rest)}stop(){Qi.delete(this._l),!this.terminado&&(this.terminado=!0,clearInterval(this._iv),this._res("STOP"))}},Xv=n=>n===1/0?"\u221E":`${String(Math.floor(Math.ceil(n)/60)).padStart(1,"0")}:${String(Math.ceil(n)%60).padStart(2,"0")}`;function $v(n){let e=window.PREGUNTAS_EXTRA&&window.PREGUNTAS_EXTRA[n]||[];return[...Mu[n]||[],...e]}var di=class{constructor(e,t=[]){this.items=ui([...t,...$v(e)]),this.i=0,this.nombre=e}pick(){return this.i>=this.items.length&&(this.items=ui(this.items),this.i=0),this.items[this.i++]}},Ks=()=>pe("#overlay");function ea(){Ks().classList.add("hidden"),Ks().innerHTML=""}function Td(n,e=!1){Ks().innerHTML=n,Ks().classList.remove("hidden"),e?Ks().onclick=ea:Ks().onclick=null}async function Ai(n,e="",t=2600){Ee.play("banner"),ut.sinTimer(),Td(`<div class="banner-boom"><svg viewBox="-110 -70 220 140" class="bb-burst"><polygon points="${Yv()}" /></svg><div class="bb-t">${de(n)}</div>${e?`<div class="bb-s">${de(e)}</div>`:""}</div>`),await Rt(t),ea()}function Yv(){let n=[];for(let e=0;e<28;e++){let t=e*Math.PI/14,i=e%2?48:70+e%4*4;n.push(`${(Math.cos(t)*i*1.45).toFixed(1)},${(Math.sin(t)*i).toFixed(1)}`)}return n.join(" ")}function ta(n,e="[data-z]"){return Td(n),Ht(new Promise(t=>{let i=Ks().querySelectorAll(e);i.forEach(s=>s.onclick=a=>{a.stopPropagation(),Ee.play("tecla"),t(s.dataset.z)}),window.__AUTO&&i.length&&setTimeout(()=>t(i[window.__AUTO_ELIGE?Math.min(i.length-1,window.__AUTO_ELIGE):0].dataset.z),400/Yo())})).finally(ea)}async function on(n,e="",t=2600){Td(`<div class="txt">${n}</div>${e?`<div class="sub">${e}</div>`:""}`),await Rt(t),ea()}var Ps={hasta:0,nombre:"Presentador"};function Xt(n,e=3500){let t=pe("#bubble");t.innerHTML=`<b>${de(Ps.nombre)}:</b> ${n}`,t.classList.remove("hidden"),Ps.hasta=performance.now()+e/Yo()}async function es(n,e,t=3800){Xt(e,t+1500),await Ht(Ee.voice(n,e,Ps.voz||{}))}var ut={show(n){pe("#hud").classList.toggle("hidden",!n)},set(n){n&&n.eq.forEach((e,t)=>{let i=pe(`#hud .marc.l${t}`);i&&(i.querySelector(".n").textContent=e.nombre+(e.tuyo?" (T\xDA)":""),i.querySelector(".d").textContent=Nt(e.dinero),i.querySelector(".j").innerHTML=e.jug.map(s=>`<i class="${s.vivo?s.banquillo?"bq":"":"off"}" title="${de(s.nombre)}"></i>`).join(""),i.querySelector(".v").textContent=e.ventajas.length?"\u2605 "+e.ventajas.map(s=>Eu[s]||s).join(", "):"")})},timer(n,e=10){let t=pe("#timer");t.textContent=Xv(n),t.classList.toggle("low",n!==1/0&&n<=e)},sinTimer(){pe("#timer").textContent="",pe("#timer").classList.remove("low")},ronda(n){pe("#roundTxt").textContent=n}},Eu={cable_blanco:"Cable blanco",siguen_todos:"Siguen todos",elige_tema:"Elige tema",uno_menos:"Uno menos",mas10:"+10 s",menos10:"\u221210 s al rival"},Vt={set(n,e=""){let t=pe("#qpanel");return t.className=e,t.innerHTML=n,t.classList.remove("hidden"),t},hide(){pe("#qpanel").classList.add("hidden"),pe("#qpanel").innerHTML=""},clic(n="[data-v]",e=[]){let t=pe("#qpanel");return Ht(Promise.race([new Promise(i=>t.querySelectorAll(n).forEach(s=>s.onclick=()=>{Ee.play("tecla"),i(s.dataset.v)})),...e])).finally(()=>t.querySelectorAll(n).forEach(i=>i.disabled=!0))},escribir({pasar:n="\xA1BOOM! (pasar)",ph:e="Escribe la respuesta y pulsa Intro"}={},t=[]){let i=pe("#qpanel"),s=document.createElement("div");s.className="q-resp",s.innerHTML=`<input type="text" autocomplete="off" placeholder="${de(e)}"><button data-a="ok">Responder</button>${n?`<button data-a="boom" class="boom">${de(n)}</button>`:""}`,i.appendChild(s);let a=s.querySelector("input");return setTimeout(()=>a.focus(),30),Ht(Promise.race([new Promise(r=>{a.onkeydown=o=>{o.key==="Enter"&&r(a.value)},s.querySelectorAll("button").forEach(o=>o.onclick=()=>r(o.dataset.a==="ok"?a.value:"BOOM"))}),...t])).finally(()=>s.remove())}};function jo(n){we.lee&&we.voz&&Ee.voice(null,n,{pregunta:!0})}function Ls(n){let e=pe("#hashtag");e.textContent=n||"",e.classList.toggle("on",!!n)}async function wd(n,e="",t=3200){let i=pe("#lower3"),s=document.createElement("div");s.className="l3",s.innerHTML=`<b>${de(n)}</b>${e?`<span>${de(e)}</span>`:""}`,i.appendChild(s),i.classList.remove("hidden"),await Rt(t),s.classList.add("out"),setTimeout(()=>{s.remove(),i.children.length||i.classList.add("hidden")},400)}function b0(){pe("#lower3").innerHTML="",pe("#lower3").classList.add("hidden")}function Is(n,e=2500){let t=pe("#toast");t.textContent=n,t.classList.remove("hidden"),clearTimeout(Is._t),Is._t=setTimeout(()=>t.classList.add("hidden"),e)}function ts(n){let e=pe("#actions");e.innerHTML="",(n||[]).forEach(t=>{let i=document.createElement("button");i.className="abtn "+(t.cls||""),i.textContent=t.label,i.onclick=s=>{s.stopPropagation(),Ee.play("tecla"),e.innerHTML="",t.fn()},e.appendChild(i)})}async function M0(n,e=14e3){let t=pe("#credits"),i=pe("#creditsRoll");i.innerHTML=n.map(([a,r])=>`<h4>${de(a)}</h4>${r.map(de).join("<br>")}`).join(""),t.classList.remove("hidden","fadeout"),i.style.transition="none",i.style.transform="translateY(0)",i.offsetHeight;let s=e/Yo();i.style.transition=`transform ${s}ms linear`,i.style.transform=`translateY(calc(-100% - ${t.clientHeight}px))`;try{await Rt(e)}finally{t.classList.add("hidden")}}function Tu(){pe("#credits").classList.add("hidden")}var Cd={};pm(Cd,{bombaBote:()=>Pu,bombaCables:()=>Au,bombaCaliente:()=>wu,bombaClasificatoria:()=>Cu,bombaEstrategica:()=>Ru,desempate:()=>A0,eliminar:()=>Ad,fasePrincipal:()=>Rd,vivos:()=>hn});var jv=[["rojo","#ff2a2a"],["azul","#2a6bff"],["amarillo","#ffd21a"],["verde","#22c55e"],["morado","#a855f7"]],hn=n=>n.jug.map((e,t)=>({...e,i:t})).filter(e=>e.vivo&&!e.banquillo),On=n=>1-n,Jo=(n,e=.8)=>Math.random()<e*(n.dificultad||1),ur=(n=1.2,e=3)=>Rt((n+Math.random()*(e-n))*1e3);function Ad(n,e,t,i=""){let s=n.eq[e],a=s.jug[t];!a||!a.vivo||(a.vivo=!1,n.P?.eliminar(s.id,t),ut.set(n),Xt(`${de(a.nombre)} (${de(s.nombre)}) queda eliminado${i?" \xB7 "+de(i):""}.`,3e3),!hn(s).length&&!s.jug.some(r=>r.banquillo&&r.vivo)&&(s.fuera=!0))}function Zo(n,e){Ee.play("explosion"),n.P?.explotar(e),pe("#fx-flash").style.opacity=.9,setTimeout(()=>pe("#fx-flash").style.opacity=0,160)}async function T0(n,e,t,i="ELIGE TU VENTAJA"){let s=n.eq[e],a;if(s.humano?a=await ta(`<div class="txt">${de(i)}</div><div class="sub">Equipo ${de(s.nombre)}</div><div class="btns ov">${t.map(r=>`<button data-z="${r}">${de(Eu[r]||"Rescatar a un eliminado")}</button>`).join("")}</div>`):(a=wi(t),await Rt(900)),a==="rescatar"){let r=s.jug.findIndex(o=>!o.vivo);r>=0&&(s.jug[r].vivo=!0,s.fuera=!1,n.P?.revivir(s.id,r),Xt(`\xA1${de(s.jug[r].nombre)} vuelve al juego!`))}else s.ventajas.push(a);return ut.set(n),await on(`Equipo ${de(s.nombre)}`,`Ventaja: <b>${de(Eu[a]||"Rescatar a un eliminado")}</b>`,2e3),a}async function wu(n){n.cam?.("general"),ut.ronda("BOMBA CALIENTE"),await Ai("BOMBA CALIENTE","La minibomba pasa de mano en mano \xB7 3 segundos por pregunta");let e=new di("caliente"),t=[];for(let h=0;h<2;h++)for(let d of[0,1]){let f=hn(n.eq[d]);f[h]&&t.push([d,f[h].i])}if(t.length<2)return;let i=[0,0],s=0,a=!1,r=new hi(n.ilimitado?40:22+Math.random()*16,null).start();r.fin.then(h=>{h==="TIEMPO"&&(a=!0)});let o=()=>`<div class="q-marc"><span class="r">${de(n.eq[0].nombre)} ${i[0]}</span> \xB7 <span class="a">${de(n.eq[1].nombre)} ${i[1]}</span></div>`;for(;!a;){let[h,d]=t[s%t.length],f=n.eq[h],p=e.pick(),x=de(p.f).replace("{1}","<u>____</u>").replace("{2}","<u>____</u>"),g=ui([0,1,2]),m=ui([0,1,2]);Vt.set(`${o()}<div class="q-tit">\u{1F4A3} Tiene la bomba: <b style="color:${f.color}">${de(f.jug[d].nombre)}</b> (${de(f.nombre)})</div>
      <div class="q-p">${de(p.d)}</div><div class="q-frase">${x}</div>
      <div class="q-op">${g.map(M=>`<button data-v="a${M}">${de(p.a[M])}</button>`).join("")}</div>
      <div class="q-op">${m.map(M=>`<button data-v="b${M}">${de(p.b[M])}</button>`).join("")}</div>`,"caliente");let y=new hi(n.ilimitado?0:3,M=>ut.timer(M,1.5)).start(),T=null,v=null;if(f.humano){let M=pe("#qpanel");await Ht(Promise.race([y.fin,new Promise(P=>M.querySelectorAll("[data-v]").forEach(b=>b.onclick=()=>{Ee.play("tecla");let w=b.dataset.v;w[0]==="a"?T=+w[1]:v=+w[1],b.parentNode.querySelectorAll("button").forEach(L=>L.classList.toggle("sel",L===b)),T!=null&&v!=null&&P()}))]))}else if(await Ht(Promise.race([y.fin,ur(.8,2.4)])),!y.terminado){let M=Jo(n,.7);T=M?p.ra:(p.ra+1)%3,v=M||Math.random()<.5?p.rb:(p.rb+2)%3}y.stop();let E=T===p.ra&&v===p.rb;i[h]+=E?1:-1,Ee.play(E?"acierto":"fallo"),Xt(E?`\xA1Correcto! \xAB${de(p.f.replace("{1}",p.a[p.ra]).replace("{2}",p.b[p.rb]))}\xBB. Punto para ${de(f.nombre)}.`:`No. Era \xAB${de(p.f.replace("{1}",p.a[p.ra]).replace("{2}",p.b[p.rb]))}\xBB. Punto menos para ${de(f.nombre)}.`,2200),await Rt(1100),s++,n.preguntasCaliente&&s>=n.preguntasCaliente&&(a=!0)}r.stop();let[l]=t[(s-1+t.length)%t.length];Zo(n,"mini"),Vt.hide(),await on("\xA1BOOM!",`La bomba explota en manos del equipo ${de(n.eq[l].nombre)}`,1800);let c=i[0]===i[1]?On(l):i[0]>i[1]?0:1;if(await on(`Gana el equipo ${de(n.eq[c].nombre)}`,`${i[0]} \u2013 ${i[1]}`,1800),await T0(n,c,["cable_blanco","siguen_todos","elige_tema","uno_menos"],"VENTAJA DE LA BOMBA CALIENTE")==="uno_menos"){let h=n.eq[On(c)],d=hn(h);d.length>1&&(h.jug[d[d.length-1].i].banquillo=!0,n.P?.ocultarAtril?.(h.id,d[d.length-1].i,!0),Xt(`El equipo ${de(h.nombre)} jugar\xE1 la fase principal con un jugador menos.`))}return ut.set(n),c}async function Rd(n,{nBombas:e=4}={}){n.cam?.("bombas"),ut.ronda("BOMBAS CON CABLES"),await Ai("\xA1A DESACTIVAR!",`Cortad los cables de las respuestas err\xF3neas \xB7 ${n.valores.slice(0,e).map(Nt).join(" \xB7 ")}`);for(let t=0;t<e;t++)for(let i of[0,1])n.eq[i].fuera||!hn(n.eq[i]).length||await Au(n,i,t);n.eq.forEach((t,i)=>t.jug.forEach((s,a)=>{s.banquillo&&(s.banquillo=!1,n.P?.ocultarAtril?.(t.id,a,!1))})),ut.set(n)}async function Au(n,e,t){let i=n.eq[e],s=t<2?4:5,a=t<2?45:60,r=n.valores[t]*(n.mult||1),o=n.variante?.cristal&&t===3,l=n.pools[s===4?"c4":"c5"].pick(),u=ui(l.op.map((m,y)=>y)).map((m,y)=>({txt:l.op[m],ok:m===l.r,col:jv[y],cortado:!1}));n.P?.activarBomba(o?5:t),ut.ronda(`${o?"BOMBA DE CRISTAL":"BOMBA "+(t+1)} \xB7 ${i.nombre.toUpperCase()} \xB7 ${Nt(r)}`),await Ai(o?"BOMBA DE CRISTAL":`BOMBA ${t+1}`,`Equipo ${i.nombre} \xB7 ${Nt(r)} \xB7 ${a} s \xB7 ${s} cables`,1800);let h=0,d=null,f=!1;jo(l.p);let p=new hi(n.ilimitado?0:a,m=>{ut.timer(m);let y=pe("#qpanel .bomba-led");y&&(y.textContent=m===1/0?"--:--":`00:${String(Math.ceil(m)).padStart(2,"0")}`),m<=10&&m>0&&Math.abs(m-Math.round(m))<.05&&Ee.play("tictac")}).start(),x=()=>{let m=hn(i),y=m[h%m.length],T=i.ventajas.includes("cable_blanco")&&!f;return Vt.set(`<div class="bomba-w ${o?"cristal":""}">
      <div class="bomba-svg"><svg viewBox="0 0 120 120"><circle cx="60" cy="66" r="46" fill="${o?"rgba(200,235,255,.25)":"#0b0b12"}" stroke="${o?"#cfeaff":"#333"}" stroke-width="3"/><rect x="48" y="10" width="24" height="16" rx="3" fill="#444"/><circle cx="44" cy="50" r="9" fill="rgba(255,255,255,.25)"/></svg><div class="bomba-led">--:--</div><div class="bomba-val">${Nt(r)}</div></div>
      <div class="bomba-q"><div class="q-tit">Corta: <b style="color:${i.color}">${de(y?y.nombre:"")}</b> (${de(i.nombre)}) \xB7 quedan ${u.filter(v=>!v.cortado).length-1} cables por cortar</div>
      <div class="q-p">${de(l.p)}</div>
      <div class="cables">${u.map((v,E)=>`<button class="cable ${v.cortado?"cortado":""}" data-v="${E}" ${v.cortado||!i.humano?"disabled":""} style="--c:${v.col[1]}"><span class="hilo"></span><span class="t">${de(v.txt)}</span>${v.cortado?'<span class="tij">\u2702</span>':""}</button>`).join("")}
      ${T?`<button class="cable blanco" data-v="blanco" ${i.humano?"":"disabled"} style="--c:#fff"><span class="hilo"></span><span class="t">Usar CABLE BLANCO (corta uno err\xF3neo)</span></button>`:""}</div></div></div>`,"cables"),p.onTick(p.rest),y};for(;!d;){if(!x()){d="boom";break}let y;if(i.humano)y=await Vt.clic("[data-v]",[p.fin]);else if(await Ht(Promise.race([p.fin,ur(1.6,4.5)])),p.terminado)y="TIEMPO";else if(i.ventajas.includes("cable_blanco")&&!f&&s===5)y="blanco";else{let T=u.map((E,M)=>({c:E,i:M})).filter(E=>!E.c.cortado),v=T.filter(E=>!E.c.ok);y=String((Jo(n,.87)||!T.some(E=>E.c.ok)?wi(v):T.find(E=>E.c.ok)).i)}if(y==="TIEMPO"){d="tiempo";break}if(y==="STOP"){d="boom";break}if(y==="blanco"){f=!0,i.ventajas.splice(i.ventajas.indexOf("cable_blanco"),1);let T=u.find(v=>!v.cortado&&!v.ok);T.cortado=!0,Ee.play("corte"),Xt("\xA1Cable blanco! Se corta solo un cable err\xF3neo."),ut.set(n)}else{let T=u[+y];if(T.cortado=!0,Ee.play("corte"),T.ok){d="boom",T.fatal=!0;break}Xt(`\xAB${de(T.txt)}\xBB no era. \xA1Cable cortado!`,1600),h++}u.filter(T=>!T.cortado).length===1&&(d="ok"),await Rt(500)}p.stop(),n.P?.activarBomba(-1);let g=u.find(m=>m.ok).txt;if(d==="ok")Ee.play("acierto"),i.dinero+=r,ut.set(n),x(),n.P?.celebrar?.(),await on("\xA1BOMBA DESACTIVADA!",`Respuesta correcta: <b>${de(g)}</b> \xB7 +${Nt(r)} para ${de(i.nombre)}`,2300);else{Zo(n,o?5:t);let m=hn(i),y=m[h%m.length];await on("\xA1BOOM!",`${d==="tiempo"?"Se acab\xF3 el tiempo":`Han cortado \xAB${de(g)}\xBB, la respuesta correcta`} \xB7 se pierden ${Nt(r)}`,2300),i.ventajas.includes("siguen_todos")?(i.ventajas.splice(i.ventajas.indexOf("siguen_todos"),1),Xt("Ventaja \xABSiguen todos\xBB: nadie queda eliminado esta vez."),ut.set(n)):y&&Ad(n,e,y.i)}Vt.hide(),await Rt(600)}async function S0(n,e,t,{segs:i=60,necesarios:s=7,items:a,encontrados:r=new Set,consulta:o=!0,titulo:l="BOMBA ESTRAT\xC9GICA"}={}){let c=n.eq[e],u=!o,h=null,d=0,f=null,p=new hi(n.ilimitado?0:i,m=>ut.timer(m)).start(),x=()=>{let m=hn(c),y=m[d%Math.max(1,m.length)];return Vt.set(`<div class="q-tit">${de(l)} \xB7 <b style="color:${c.color}">${de(c.nombre)}</b>${y?" \xB7 responde "+de(y.nombre):""} \xB7 aciertos ${[...r].filter(T=>a[T].ok).length}/${s}</div>
      <div class="q-p">${de(t.t)}</div><div class="panel10">${a.map((T,v)=>`<button data-v="${v}" class="${r.has(v)?"ok":""} ${f===v?"ko":""} ${h===v?"sug":""}" ${r.has(v)||!c.humano?"disabled":""}>${de(T.txt)}</button>`).join("")}</div>
      ${!u&&c.humano?'<div class="q-op"><button data-v="consulta" class="consulta">\u{1F5E3} Comod\xEDn de consulta (10 s)</button></div>':""}`,"diez"),y},g=()=>[...r].filter(m=>a[m].ok).length>=s;for(;!g();){if(!x()){f=-1;break}let y;if(c.humano)y=await Vt.clic("[data-v]",[p.fin]);else if(await Ht(Promise.race([p.fin,ur(1.2,3.2)])),p.terminado)y="TIEMPO";else if(!u&&Math.random()<.15)y="consulta";else{let v=a.map((M,P)=>({it:M,i:P})).filter(M=>!r.has(M.i)),E=v.filter(M=>M.it.ok);y=String((Jo(n,.9)&&E.length?wi(E):wi(v)).i)}if(y==="TIEMPO"||y==="STOP"){f=-1;break}if(y==="consulta"){u=!0,p.pause(),Xt("Comod\xEDn de consulta: el equipo tiene 10 segundos para hablarlo.");let v=a.map((M,P)=>({it:M,i:P})).filter(M=>!r.has(M.i)),E=v.filter(M=>M.it.ok);h=(Math.random()<.8&&E.length?wi(E):wi(v)).i;for(let M=10;M>0;M--)ut.timer(M),x(),await Rt(c.humano?1e3:250);p.start(),ut.timer(p.rest);continue}let T=+y;if(Ee.play("tecla"),a[T].ok)r.add(T),Ee.play("acierto"),d++,h=h===T?null:h;else{f=T;break}await Rt(300)}return p.stop(),x(),{ok:f==null,fallo:f,jugador:hn(c)[d%Math.max(1,hn(c).length)],encontrados:r}}function w0(n){return ui([...n.ok.map(e=>({txt:e,ok:!0})),...n.ko.map(e=>({txt:e,ok:!1}))])}async function Ru(n){n.cam?.("bombas"),ut.ronda("BOMBA ESTRAT\xC9GICA"),await Ai("BOMBA ESTRAT\xC9GICA","6 temas \xB7 10 respuestas, 7 correctas \xB7 60 s \xB7 rebote de 30 s");let e=ui(n.pools.est.items).slice(0,6),t=new Set,i=n.eq[0].dinero<=n.eq[1].dinero?[0,1]:[1,0];for(let s of i){let a=n.eq[s];if(a.fuera||!hn(a).length)continue;let r=a.ventajas.includes("elige_tema")?s:On(s);r===s&&a.ventajas.splice(a.ventajas.indexOf("elige_tema"),1);let o=e.map((d,f)=>({t:d,i:f})).filter(d=>!t.has(d.i)),l;n.eq[r].humano?l=+await ta(`<div class="txt">${r===s?"ELIGE TU TEMA":`ELIGE EL TEMA DEL EQUIPO ${de(a.nombre.toUpperCase())}`}</div><div class="btns ov">${o.map(d=>`<button data-z="${d.i}">${de(d.t.t)}</button>`).join("")}</div>`):(await Rt(1200),l=wi(o).i),t.add(l);let c=e[l],u=w0(c);Xt(`Tema para el equipo ${de(a.nombre)}: \xAB${de(c.t)}\xBB.`,2500),jo(c.t),n.P?.activarBomba(2);let h=await S0(n,s,c,{items:u});if(n.P?.activarBomba(-1),h.ok)Ee.play("acierto"),n.P?.celebrar?.(),await on("\xA1BOMBA DESACTIVADA!",`El equipo ${de(a.nombre)} encuentra las 7 respuestas`,2e3),await E0(n,s);else{Zo(n,2),await on("\xA1BOOM!",h.fallo>=0?`\xAB${de(u[h.fallo].txt)}\xBB no era correcta`:"Se acab\xF3 el tiempo",2e3),h.jugador&&Ad(n,s,h.jugador.i);let d=On(s),f=n.eq[d];if(!f.fuera&&hn(f).length){let p=7-[...h.encontrados].filter(g=>u[g].ok).length;await Ai("\xA1REBOTE!",`El equipo ${f.nombre} tiene 30 s para encontrar las ${p} que faltan`,2e3),(await S0(n,d,c,{items:u,segs:30,necesarios:7,encontrados:new Set([...h.encontrados]),consulta:!1,titulo:"REBOTE"})).ok?(Ee.play("acierto"),await on("\xA1REBOTE CONSEGUIDO!",`La ventaja es para ${de(f.nombre)}`,1800),await E0(n,d)):(Ee.play("fallo"),await on("Rebote fallido","Nadie se lleva la ventaja",1600))}}Vt.hide()}}async function E0(n,e){let t=["mas10","menos10"];n.eq[e].jug.some(i=>!i.vivo)&&t.unshift("rescatar"),await T0(n,e,t,"VENTAJA DE LA BOMBA ESTRAT\xC9GICA")}async function A0(n,e=0){await Ai("DESEMPATE","Panel de 10 respuestas con 6 correctas \xB7 turnos alternos \xB7 pierde quien falle",2200);let t=n.pools.des.pick(),i=w0(t),s=new Set,a=e;for(;;){let r=n.eq[a];Vt.set(`<div class="q-tit">DESEMPATE \xB7 turno de <b style="color:${r.color}">${de(r.nombre)}</b></div><div class="q-p">${de(t.t)}</div>
      <div class="panel10">${i.map((c,u)=>`<button data-v="${u}" class="${s.has(u)?"ok":""}" ${s.has(u)||!r.humano?"disabled":""}>${de(c.txt)}</button>`).join("")}</div>`,"diez");let o=new hi(n.ilimitado?0:10,c=>ut.timer(c)).start(),l;if(r.humano)l=await Vt.clic("[data-v]",[o.fin]);else{await Ht(Promise.race([o.fin,ur(1,2.5)]));let c=i.map((h,d)=>({it:h,i:d})).filter(h=>!s.has(h.i)),u=c.filter(h=>h.it.ok);l=String((Jo(n,.85)&&u.length?wi(u):wi(c)).i)}if(o.stop(),l==="TIEMPO"||!i[+l]?.ok)return Ee.play("fallo"),Vt.hide(),await on(`Falla el equipo ${de(r.nombre)}`,`Gana el desempate ${de(n.eq[On(a)].nombre)}`,1800),On(a);s.add(+l),Ee.play("acierto"),a=On(a),await Rt(300)}}async function Cu(n){n.cam?.("clasif"),ut.ronda("BOMBA CLASIFICATORIA");let e=[0,1].filter(h=>!n.eq[h].fuera&&hn(n.eq[h]).length);if(e.length<2)return e[0]??0;await Ai("BOMBA CLASIFICATORIA",`2 minutos por equipo \xB7 preguntas de 2 opciones \xB7 \xB1${Nt(n.clasif*(n.mult||1))}`);let t=n.clasif*(n.mult||1),i=[0,1].map(h=>{let d=120,f=n.eq[h],p=n.eq[On(h)];return f.ventajas.includes("mas10")&&(d+=10),p.ventajas.includes("menos10")&&(d-=10),d});n.eq.forEach(h=>{h.ventajas=h.ventajas.filter(d=>d!=="mas10"&&d!=="menos10")}),ut.set(n),(i[0]!==120||i[1]!==120)&&Xt(`Tiempos: ${de(n.eq[0].nombre)} ${i[0]} s \xB7 ${de(n.eq[1].nombre)} ${i[1]} s`,3e3);let s=n.eq[0].dinero>n.eq[1].dinero?0:n.eq[1].dinero>n.eq[0].dinero?1:await A0(n,0);Xt(`Empieza el equipo ${de(n.eq[s].nombre)}, que es el que m\xE1s dinero tiene.`,2500);let a=i.map(h=>new hi(n.ilimitado?0:h,null)),r=[0,0],o=n.pools.clas,l=async(h,d)=>{let f=n.eq[h],p=o.pick(),x=ui([0,1]),g=hn(f),m=g[r[h]++%g.length],y=(E=null)=>Vt.set(`<div class="clas-w">${[0,1].map(M=>`<div class="mecha l${M} ${M===h?"act":""}"><b>${de(n.eq[M].nombre)}</b><div class="barra"><i style="width:${a[M].ilimitado?100:a[M].rest/i[M]*100}%"></i></div><span>${a[M].ilimitado?"\u221E":Math.ceil(a[M].rest)+" s"}</span></div>`).join("")}</div>
      <div class="q-tit">Responde <b style="color:${f.color}">${de(m.nombre)}</b> (${de(f.nombre)})</div><div class="q-p">${de(p.p)}</div>
      <div class="q-op dos">${x.map(M=>`<button data-v="${M}" ${f.humano?"":"disabled"} class="${E===M?M===p.r?"okb":"kob":""}">${de(p.op[M])}</button>`).join("")}</div>`,"clas");y(),jo(p.p),d.onTick=E=>{ut.timer(E),n.P?.setMecha(d.ilimitado?1:E/i[h]);let M=pe(`#qpanel .mecha.l${h} i`);M&&(M.style.width=E/i[h]*100+"%");let P=pe(`#qpanel .mecha.l${h} span`);P&&(P.textContent=Math.ceil(E)+" s")},d.start();let T;if(f.humano?T=await Vt.clic("[data-v]",[d.fin.then(()=>"TIEMPO")]):(await Ht(Promise.race([d.fin,ur(1.1,3)])),T=d.terminado?"TIEMPO":String(Jo(n,.8)?p.r:1-p.r)),d.pause(),T==="TIEMPO")return"tiempo";let v=+T===p.r;return y(+T),v?(f.dinero+=t,Ee.play("acierto")):(f.dinero=Math.max(0,f.dinero-t),Ee.play("fallo")),ut.set(n),await Rt(700),v};for(;!(![0,1].filter(f=>!a[f].terminado).length||(a[s].terminado&&(s=On(s)),a[s].ilimitado&&r[0]+r[1]>=12));){let d=await l(s,a[s]);if(d==="tiempo"){Ee.play("explosion"),Xt(`\xA1Se consumi\xF3 la mecha del equipo ${de(n.eq[s].nombre)}!`,2200),s=On(s),await Rt(1200);continue}!d&&!a[On(s)].terminado&&(s=On(s),Xt(`Fallo: el turno pasa al equipo ${de(n.eq[s].nombre)}.`,1800))}a.forEach(h=>h.stop());let c;if(n.eq[0].dinero===n.eq[1].dinero){await Ai("MUERTE S\xDABITA","Una pregunta por equipo hasta que uno falle y el otro acierte",2e3);for(let h=0;c==null&&h<20;h++){let d=[];for(let f of[0,1]){let p=new hi(n.ilimitado?0:10,null),x=await l(f,p);p.stop(),d.push(x===!0)}d[0]!==d[1]&&(c=d[0]?0:1)}c==null&&(c=0)}else c=n.eq[0].dinero>n.eq[1].dinero?0:1;let u=On(c);return n.P?.setMecha(0),Zo(n,4),Vt.hide(),await on(`\xA1El equipo ${de(n.eq[c].nombre)} juega la Bomba bote!`,`${de(n.eq[u].nombre)} se despide con la bomba plateada.`,2600),n.eq[u].fuera=!0,n.P?.setMecha(1),c}async function Pu(n,e){let t=n.eq[e];n.cam?.("bote"),ut.ronda(`BOMBA BOTE \xB7 ${Nt(n.bote)}`),await Ai("BOMBA BOTE",`15 minibombas \xB7 2 minutos \xB7 bote de ${Nt(n.bote)}`,2400);let i=(vu[n.tema]?.bote||[]).map(([p,x])=>({p,r:x})),s=new di("bote",i),a=Array(15).fill("off"),r=[],o=1,l=!1,c=()=>n.P?.setMinis(a),u=new hi(n.ilimitado?0:120,p=>{ut.timer(p,15)}).start(),h=(p,x,g="")=>Vt.set(`<div class="minis">${a.map((m,y)=>`<button data-n="${y}" class="mini ${m} ${y===p?"cur":""}" ${o===1||m==="ok"||!t.humano||p!=null?"disabled":""}>${y+1}</button>`).join("")}</div>
      ${x?`<div class="q-tit">Minibomba <b>${p+1}</b> \xB7 ${o===1?"primera vuelta":"segunda vuelta: el primer fallo hace explotar la bomba"}</div><div class="q-p">${de(x.p)}</div>`:`<div class="q-tit">${g}</div>`}`,"bote"),d=async p=>{a[p]="sel",c();let x=s.pick();r[p]=x,h(p,x),jo(x.p);let g;if(t.humano)g=await Vt.escribir({pasar:"\xA1BOOM! (pasar)"},[u.fin.then(()=>"TIEMPO")]);else{if(await Ht(Promise.race([u.fin,ur(1.4,3.6)])),u.terminado)g="TIEMPO";else{let m=Math.random();g=m<.74*(n.dificultad||1)?x.r.split("|")[0]:m<.9?"BOOM":"zzz"}Xt(`${de(t.nombre)}: \xAB${de(g==="BOOM"?"\xA1Boom!":g==="TIEMPO"?"\u2026":g)}\xBB`,1300),await Rt(500)}return g==="TIEMPO"||g==="STOP"?"tiempo":g==="BOOM"?(a[p]="boom",Ee.play("pop"),c(),"boom"):v0(g,x.r)?(a[p]="ok",Ee.play("acierto"),c(),"ok"):(a[p]="ko",Ee.play("fallo"),c(),Xt(`No. La respuesta era \xAB${de(x.r.split("|")[0])}\xBB.`,1800),"ko")};for(let p=0;p<15&&!l;p++)await d(p)==="tiempo"&&(l=!0),await Rt(250);for(o=2;!l&&a.some(p=>p!=="ok");){h(null,null,"Segunda vuelta: elegid el n\xFAmero de una minibomba pendiente");let p;if(t.humano){let g=pe("#qpanel");p=await Ht(Promise.race([u.fin.then(()=>"TIEMPO"),new Promise(m=>g.querySelectorAll("[data-n]:not([disabled])").forEach(y=>y.onclick=()=>m(y.dataset.n)))]))}else await Ht(Promise.race([u.fin,Rt(800)])),p=u.terminado?"TIEMPO":String(a.findIndex(g=>g!=="ok"));if(p==="TIEMPO"){l=!0;break}let x=await d(+p);if(x==="tiempo"||x==="ko"){l=!0;break}await Rt(250)}u.stop();let f=a.filter(p=>p==="ok").length;if(!l&&f===15){Ee.play("bote"),Ee.play("aplausos"),n.P?.celebrar?.(),n.ganoBote=!0;let p=n.bote;n.ganado=t.dinero+p,await on("\xA1BOTE CONSEGUIDO!",`El equipo ${de(t.nombre)} desactiva las 15 minibombas y gana ${Nt(p)} + ${Nt(t.dinero)}`,4200)}else Zo(n,"bote"),a.forEach((p,x)=>{p!=="ok"&&(a[x]="ko")}),c(),n.ganado=t.dinero,n.ganoBote=!1,await on("\xA1BOOM!",`${f} de 15 minibombas desactivadas \xB7 el equipo ${de(t.nombre)} se lleva ${Nt(t.dinero)}`,3600);return Vt.hide(),{aciertos:f,gano:n.ganoBote}}var Ri={a3:{id:"a3",nombre:"Antena 3 (2014-2023)",valores:[200,400,600,800],clasif:200,archivosMusica:["cabecera_antena3","cabecera"],archivosLogo:["logo_antena3","logo"],variantes:[{id:"a3-2014",nombre:"Sep 2014 \u2013 mar 2018 (bombas, clasificatoria y bote)",caliente:!1,estrategica:!1,cristal:!1},{id:"a3-2018",nombre:"Mar 2018 \u2013 oct 2021 (+ Bomba estrat\xE9gica)",caliente:!1,estrategica:!0,cristal:!1},{id:"a3-2021",nombre:"Oct 2021 \u2013 ene 2022 (+ Bomba caliente)",caliente:!0,estrategica:!0,cristal:!1},{id:"a3-2022",nombre:"Desde ene 2022 (+ bomba de cristal)",caliente:!0,estrategica:!0,cristal:!0}]},cuatro:{id:"cuatro",nombre:"Cuatro (2024)",valores:[100,200,300,500],clasif:100,archivosMusica:["cabecera_cuatro","cabecera"],archivosLogo:["logo_cuatro","logo"],variantes:[{id:"cuatro",nombre:"Sep \u2013 dic 2024",caliente:!0,estrategica:!0,cristal:!1}]}},R0=5e4,Jv=5e3,C0=n=>`boom3d_bote_${n}`,Zv=n=>+localStorage.getItem(C0(n))||R0,hr={rojo:["Nerea","Iker","Luc\xEDa","Bruno"],azul:["Marta","Rub\xE9n","Celia","\xD3scar"],ninos:["Leo","Vega","Hugo","Alba","Pau","Noa","Teo","L\xEDa"],famosos:["Estrella Fugaz","Capit\xE1n Trueno Pop","Diva Lumi\xE8re","Mago Chispitas","Rocky Balada","Lola Purpurina","Doctor Risas","Tina Tormenta"]},Fn={rojo:"Los Mechas",azul:"Los Petardos",campR:"Las Centellas",campA:"Los Cometas",famR:"Famosos Rojos",famA:"Famosos Azules",ninR:"Los Peques",ninA:"Los Chispitas"},Lu=["\xBFSab\xE9is por qu\xE9 las bombas nunca cuentan chistes? Porque siempre acaban\u2026 \xA1explotando de risa!","Me han dicho que corte por lo sano\u2026 y aqu\xED todos los cables parecen sanos.","\xBFQu\xE9 le dice un cable rojo a uno azul? \xABTranquilo, que hoy no nos corta nadie\xBB.","En este plat\xF3 tenemos la mecha m\xE1s corta de la tele\u2026 y el presentador m\xE1s largo de paciencia.","Mi abuela dec\xEDa: \xABHijo, no juegues con fuego\xBB. Y aqu\xED estoy, presentando un concurso de bombas.","Para este programa no hace falta gimnasio: con los nervios ya sudamos bastante.","\xBFPor qu\xE9 el equipo azul nunca pierde las llaves? Porque siempre tiene un plan\u2026 \xA1de desactivaci\xF3n!","El que corta el cable equivocado no se moja\u2026 bueno, s\xED, un poco. \xA1Se moja entero!"];function P0({etapa:n="a3",variante:e=null,equipoHumano:t="rojo",tema:i="clasico",mult:s=1,entreno:a=!1,ilimitado:r=!1}={},o){let l=Ri[n],c=e||l.variantes[l.variantes.length-1],u=i==="famosos"?"famosos":i==="ninos"?"ninos":i==="campeones"||i==="prime"?"camp":null,h=u==="famosos"?[Fn.famR,Fn.famA]:u==="ninos"?[Fn.ninR,Fn.ninA]:u==="camp"?[Fn.campR,Fn.campA]:[Fn.rojo,Fn.azul],d=g=>u==="famosos"?ui(hr.famosos).slice(0,4):u==="ninos"?hr.ninos.slice(g*4,g*4+4):hr[g?"azul":"rojo"],f=(vu[i]?.clas||[]).map(([g,m,y])=>({p:g,op:m,r:y})),p={etapa:n,E:l,variante:c,valores:l.valores,clasif:l.clasif,mult:s,tema:i,entreno:a,ilimitado:r,bote:Zv(n)*s,dificultad:u==="ninos"?.85:1,eq:["rojo","azul"].map((g,m)=>({id:g,nombre:h[m],color:m?"#2a7bff":"#ff3b3b",dinero:0,ventajas:[],fuera:!1,humano:g===t&&!window.__AUTO,tuyo:g===t,jug:d(m).map(y=>({nombre:y,vivo:!0,banquillo:!1}))})),pools:{c4:new di("cables4"),c5:new di("cables5"),est:new di("estrategica"),des:new di("desempate"),clas:new di("clasificatoria",f)},P:o.P(),cam:o.cam},x=p.eq.find(g=>g.tuyo);return x&&!u&&(we.equipoNombre&&(x.nombre=we.equipoNombre),we.nombre&&(x.jug[0].nombre=we.nombre),x.id==="azul"&&x.nombre==="Los Mechas"&&(x.nombre="Los Petardos")),p.P?.revivirTodos(),ut.set(p),p}async function Kv(n){if(n==="prime")return{etapa:"a3",variante:Ri.a3.variantes[3]};let e=Object.values(Ri).flatMap(i=>i.variantes.map(s=>({E:i,v:s}))),t=await ta(`<div class="txt">ELIGE LA ETAPA</div><div class="btns ov vert">${e.map((i,s)=>`<button data-z="${s}"><b>${de(i.E.nombre)}</b><br><small>${de(i.v.nombre)}</small></button>`).join("")}</div>`);return{etapa:e[+t].E.id,variante:e[+t].v}}async function Qv(){return ta('<div class="txt">\xBFCON QU\xC9 EQUIPO JUEGAS?</div><div class="btns ov"><button data-z="rojo" class="rojo">\u{1F534} Equipo rojo<br><small>los aspirantes</small></button><button data-z="azul" class="azul">\u{1F535} Equipo azul<br><small>los veteranos</small></button></div>')}async function e3(){await ta(`<div class="reglas-card"><h2>C\xD3MO SE JUEGA</h2>
    <p><b>Bomba caliente</b>: una minibomba pasa de mano en mano. 3 s para completar la frase con dos huecos (3 opciones por hueco): +1 si aciertas, \u22121 si fallas. El que gana elige ventaja: Cable blanco, Siguen todos, Elige tema o Uno menos.</p>
    <p><b>Bombas con cables</b>: cada cable es una respuesta. Corta los de las <u>err\xF3neas</u>. 45 s y 4 cables en las dos primeras, 60 s y 5 cables en las dos \xFAltimas. Si cortas la correcta o se acaba el tiempo\u2026 \xA1BOOM!: se pierde el dinero y cae un jugador.</p>
    <p><b>Bomba estrat\xE9gica</b>: 10 respuestas, 7 correctas, 60 s. Si fall\xE1is, rebote de 30 s para el rival. Comod\xEDn de consulta de 10 s.</p>
    <p><b>Bomba clasificatoria</b>: 2 minutos por equipo, preguntas de 2 opciones (\xB1200 \u20AC, \xB1100 \u20AC en Cuatro). Al fallar, el turno pasa al rival. Gana quien m\xE1s dinero tenga.</p>
    <p><b>Bomba bote</b>: 15 minibombas en 2 minutos. Di \xAB\xA1Boom!\xBB para pasar. En la segunda vuelta, el primer fallo hace explotar la bomba.</p>
    </div><div class="btns ov"><button data-z="go" class="gold">\xA1JUGAR!</button></div>`)}var t3={Nerea:"Cortadora oficial de cables de auriculares",Iker:"Campe\xF3n de concursos de su sal\xF3n",Luc\u00EDa:"Domadora de despertadores rebeldes",Bruno:"Inspector de petardos de feria",Marta:"Contadora profesional de segundos",Rub\u00E9n:"Afinador de relojes de cuco",Celia:"Catadora oficial de churros con chocolate",\u00D3scar:"Desactivador de globos de cumplea\xF1os"};function Pd(n){let e=we.presentador||"Rober Mecha",t=n?n.eq.map(a=>({nombre:a.nombre,jug:a.jug.map(r=>r.nombre)})):[{nombre:we.equipoNombre||Fn.rojo,jug:[we.nombre||hr.rojo[0],...hr.rojo.slice(1)]},{nombre:(we.equipoNombre||Fn.rojo)===Fn.azul?Fn.rojo:Fn.azul,jug:hr.azul}],i=0,s=(a,r,o)=>r===0&&o===0&&we.nombre&&a===we.nombre?we.profesion||"Concursante central":t3[a]||"Concursante de \xA1Boom!";return[["Presentado por",[`${e} (presentador virtual)`]],["Concursantes",t.flatMap((a,r)=>a.jug.map((o,l)=>`${++i}. ${o} \xB7 ${s(o,r,l)} (${a.nombre})`))],["Juego creado por",["Iker"]],["Basado en",["El concurso \xAB\xA1Boom!\xBB (adaptaci\xF3n no oficial)","Formato israel\xED \xB7 Antena 3 / Gestmusic \xB7 Cuatro"]],["Plat\xF3, logo, cabecera y grafismos",["Creaci\xF3n original en 3D (Three.js)"]],["M\xFAsica y sonidos",["Los que subas t\xFA desde Opciones","o efectos sintetizados por el propio juego"]],p0,["P\xFAblico de las gradas",["Aplausos y risas sintetizados (no son grabaciones)"]],["Interfaz",["Basada en el APK \xAB\xA1Ahora Caigo! El juego 3D\xBB de Iker"]],["Programaci\xF3n",["Grok Bot"]]]}async function Iu(n="entre"){if(!we.chistes)return;let e=Lu[Math.floor(Math.random()*Lu.length)];await es(null,e,4e3),Ee.play("badumtss"),Ee.play("risas"),await Rt(1200)}async function I0(n,e){let t=n!=="mini",i=e.tema(),s=Rn[i]||Rn.clasico,a=i==="prime";n==="mini"&&await e3();let{etapa:r,variante:o}=n==="mini"?{etapa:"a3",variante:{id:"mini",nombre:"Minijuego",caliente:!1,estrategica:!1,cristal:!1}}:await Kv(a?"prime":n),l=await Qv(),c=P0({etapa:r,variante:o,equipoHumano:l,tema:i,mult:a?2:1},e);if(e.setEtapa(r),Ls(s.hashtag||"#Boom"),t){ut.show(!1),await e.cabecera(),e.cam("presentador"),Ee.play("aplausos"),Ee.music("trilha"),await es(a?"bienvenida_prime":"bienvenida",s.saludo||`\xA1Muy buenas y bienvenidos a \xA1Boom! Hoy el equipo ${c.eq[0].nombre} se enfrenta al equipo ${c.eq[1].nombre}. \xA1Que no os tiemble el pulso!`);for(let m of s.extra||[])await es(null,m);if(s.festivo&&(c.P?.celebrar?.(),Ee.play("aplausos")),we.monologo&&await e.monologo(null,!0),we.presentaciones){e.cam("atriles"),wd(`Presentado por ${we.presentador||"Rober Mecha"}`,"Presentador virtual",3e3);for(let m of c.eq)await wd(`Equipo ${m.id} \xB7 ${m.nombre}${m.tuyo?" (T\xDA)":""}`,m.jug.map(y=>y.nombre).join(" \xB7 "),3e3)}await Iu("intro"),await e.paseo(l)}ut.show(!0),ut.set(c),ut.sinTimer(),c.cam("general"),t||(Ee.music("trilha"),await es("bienvenida",`\xA1Bienvenidos a \xA1Boom! ${c.eq[0].nombre} contra ${c.eq[1].nombre}!`)),Ee.play("bote"),await on("BOTE",`<span class="bote-n">${Nt(c.bote)}</span>`,2600),Ee.music("tension"),o.caliente&&(await wu(c),t&&await Iu()),await Rd(c),t&&await Iu(),o.estrategica&&c.eq.every(m=>!m.fuera)&&(await Ru(c),t&&await Iu());let u,h=[0,1].filter(m=>!c.eq[m].fuera&&hn(c.eq[m]).length);h.length===0?u=c.eq[0].dinero>=c.eq[1].dinero?0:1:h.length===1?(u=h[0],await on(`\xA1El equipo ${de(c.eq[1-u].nombre)} se ha quedado sin jugadores!`,`${de(c.eq[u].nombre)} pasa directamente a la Bomba bote`,2600)):u=await Cu(c),await es("bote",`Llega el momento de la verdad. El equipo ${c.eq[u].nombre} juega por un bote de ${Nt(c.bote)}.`);let d=await Pu(c,u),f=c.bote/c.mult,p=d.gano?R0:f+Jv;localStorage.setItem(C0(r),String(p)),Ee.stopMusic(),Ee.play("aplausos");let x=c.eq.find(m=>m.tuyo),g=c.eq[u].tuyo?`\xA1Tu equipo se lleva ${Nt(c.ganado)}!`:`Tu equipo (${x.nombre}) cae hoy. ${c.eq[u].nombre} se lleva ${Nt(c.ganado)}.`;if(ut.show(!1),Vt.hide(),t){e.orbita(),Ee.music("trilha");let m=es(c.eq[u].tuyo?"granprograma":"gracias",`${c.eq[u].tuyo?"\xA1Qu\xE9 gran programa!":"\xA1Gracias por jugar!"} El bote para ma\xF1ana es de ${Nt(p)}. \xA1Hasta ma\xF1ana!`);c.P?.celebrar?.(),await e.saltable(Promise.all([m,M0(Pd(c),16e3)])),Tu()}await on("FIN DEL PROGRAMA",`${de(g)}<br>Bote para el pr\xF3ximo programa: <b>${Nt(p)}</b> (${d.gano?"vuelve a 50.000 \u20AC":"+5.000 \u20AC"})`,3e3),e.marcador(`${de(g)}<br><small>Bote del pr\xF3ximo programa: ${Nt(p)}</small>`),ts([{label:"Jugar otra vez",cls:"gold",fn:()=>e.iniciar(n)},{label:"Men\xFA",fn:()=>e.menu("play")}]),await Ht(new Promise(()=>{}))}var Nu={caliente:"Bomba caliente",cables:"Bombas con cables",estrategica:"Bomba estrat\xE9gica",clasificatoria:"Bomba clasificatoria",bote:"Bomba bote"};async function L0(n,e,{ilimitado:t=!1}={}){for(;;){let i=P0({etapa:"a3",equipoHumano:"rojo",tema:e.tema(),entreno:!0,ilimitado:t},e);n==="caliente"&&(i.preguntasCaliente=t?8:0),ut.show(!0),ut.set(i),ut.ronda("ENTRENAMIENTO \xB7 "+Nu[n].toUpperCase()),Ls("#BoomEntrena"),Ee.music("tension");let s="";if(n==="caliente"){let r=await wu(i);s=`Gana la bomba caliente: ${de(i.eq[r].nombre)}`}if(n==="cables"){for(let r=0;r<4;r++)await Au(i,0,r);s=`Dinero conseguido: ${Nt(i.eq[0].dinero)} \xB7 jugadores en pie: ${hn(i.eq[0]).length}/4`}if(n==="estrategica"&&(i.eq[0].dinero=0,i.eq[1].dinero=1,await Ru(i),s=`Ventajas: ${i.eq[0].ventajas.length?i.eq[0].ventajas.join(", "):"ninguna"}`),n==="clasificatoria"){i.eq[0].dinero=1e3,i.eq[1].dinero=800;let r=await Cu(i);s=`Gana: ${de(i.eq[r].nombre)} \xB7 ${Nt(i.eq[0].dinero)} \u2013 ${Nt(i.eq[1].dinero)}`}n==="bote"&&(s=`Minibombas desactivadas: ${(await Pu(i,0)).aciertos}/15`),Ee.stopMusic(),ut.show(!1),e.marcador(`${de(Nu[n])}<br><small>${s}</small>`);let a=await Ht(new Promise(r=>ts([{label:"Repetir",cls:"gold",fn:()=>r("otra")},{label:"Entrenamiento",fn:()=>r("menu")}])));if(e.marcador(null),a==="menu")return e.menu("train")}}var Ko={nombre:"Rober Mecha",voz:{pitch:1,rate:1.06}},N0=[[0,9,25],[0,3,-4]],Du=[[3.5,4.2,9.5],[0,3.2,0]],D0=[[0,4,4],[0,2.5,-9.5]],n3=[[4,6,6],[-9.5,6.7,-12.5]],q0=[[0,6,6],[-13,2,2]],U0=[[-.5,2.6,8.6],[-3.2,1.2,3.4]],qu=[{t:"Un formato con origen en Israel",sub:"\xA1Boom! es la adaptaci\xF3n espa\xF1ola del concurso israel\xED del mismo nombre, emitido all\xED por Canal 2. En su primera etapa lo produjo Gestmusic, del grupo Banijay, y se emiti\xF3 en Antena 3.",scr:{title:"ORIGEN",rows:[["Formato original","\xA1Boom! (Israel)"],["Cadena original","Canal 2"],["1.\xAA etapa","Antena 3 \xB7 Gestmusic"],["2.\xAA etapa","Cuatro \xB7 Mediacrest"]]},cam:n3},{t:"El estreno",sub:"Se estren\xF3 el 9 de septiembre de 2014 y se emit\xEDa de lunes a viernes de 20:00 a 21:00 en Antena 3.",scr:{title:"ESTRENO",rows:[["Fecha","9-sep-2014"],["Cadena","Antena 3"],["Horario","L-V 20:00-21:00"]]},cam:N0},{t:"Cambio de horario",sub:"El 15 de mayo de 2020 adelant\xF3 su horario a las 19:00, porque Pasapalabra lleg\xF3 a las tardes de la cadena y ocup\xF3 su franja habitual.",scr:{title:"2020",rows:[["Desde","15-may-2020"],["Nuevo horario","19:00"],["Motivo","Llega Pasapalabra"]]},cam:q0},{t:"C\xF3mo se juega",sub:"Dos equipos de cuatro, el rojo y el azul, desactivan bombas respondiendo preguntas: cada cable es una respuesta y hay que cortar los de las err\xF3neas. Si cortan el cable equivocado o se acaba el tiempo, la bomba explota: el equipo pierde a un jugador y el dinero de esa bomba.",scr:{title:"MEC\xC1NICA",rows:[["Equipos","Rojo y azul"],["Jugadores","4 por equipo"],["Bombas","10 (5 por equipo)"],["Fallo","Explota y cae uno"]]},cam:U0},{t:"Las fases",sub:"La Bomba caliente lleg\xF3 el 18 de octubre de 2021. Despu\xE9s vienen las bombas con cables, la Bomba estrat\xE9gica, la Bomba clasificatoria con su mecha y, al final, la Bomba bote con sus quince minibombas.",scr:{title:"FASES",rows:[["1","Bomba caliente"],["2","Bombas con cables"],["3","Bomba estrat\xE9gica"],["4","Bomba clasificatoria"],["5","Bomba bote"]]},cam:Du},{t:"El primer gran r\xE9cord",sub:"El 8 de junio de 2016 el equipo RockCampers se llev\xF3 el mayor premio de la televisi\xF3n en Espa\xF1a hasta entonces: 2.326.500 euros. Ese d\xEDa \xA1Boom! super\xF3 por primera vez a Pasapalabra, con 2.300.000 espectadores.",scr:{title:"8-JUN-2016",rows:[["Equipo","RockCampers"],["Premio total","2.326.500 \u20AC"],["Bote","1.935.000 \u20AC"],["Audiencia","2.300.000"]]},cam:Du},{t:"Los Lobos",sub:"El equipo Los Lobos empez\xF3 el 16 de mayo de 2017 y tiene el Guinness al equipo que m\xE1s tiempo ha concursado sin interrupci\xF3n en un programa de televisi\xF3n: 505 programas.",scr:{title:"LOS LOBOS",rows:[["Debut","16-may-2017"],["Programas","505"],["R\xE9cord","Guinness"],["Plenos fase 1","192"]]},cam:D0},{t:"El bote m\xE1s alto del mundo",sub:"El 8 de julio de 2019, en prime time, Los Lobos se llevaron un bote de 4.130.000 euros. Sumando todo lo que ganaron, 6.689.700 euros: el mayor premio dado jam\xE1s en un concurso de televisi\xF3n en todo el mundo.",scr:{title:"8-JUL-2019",rows:[["Equipo","Los Lobos"],["Bote","4.130.000 \u20AC"],["Total acumulado","6.689.700 \u20AC"],["Emisi\xF3n","Prime time"]]},cam:Du},{t:"Ganadores del bote",sub:"Los primeros botes fueron para Boomberos, con 140.000 euros el 2 de octubre de 2014, y Furi\xF3, con 155.000 euros el 3 de noviembre de 2014. Despu\xE9s llegaron RockCampers y Los Lobos.",scr:{title:"BOTES",rows:[["Boomberos","140.000 \u20AC"],["Furi\xF3","155.000 \u20AC"],["RockCampers","1.935.000 \u20AC"],["Los Lobos","4.130.000 \u20AC"]]},cam:Du},{t:"Los equipos m\xE1s longevos",sub:"Tras Los Lobos vienen Los Dispersos, con 324 programas, Sindulfos con 174, Lib\xE9rrimos con 145 y Extremis con 116. Los Dispersos acumularon 1.546.400 euros.",scr:{title:"PERMANENCIA",rows:[["Los Lobos","505"],["Los Dispersos","324"],["Sindulfos","174"],["Lib\xE9rrimos","145"],["Extremis","116"],["Uep!!","102"]]},cam:D0},{t:"Especiales",sub:"Hubo especiales de ni\xF1os, de fin de a\xF1o, de campeones, de famosos, un cruce con otro concurso y una semana de campeones, que gan\xF3 RockCampers. En julio de 2022, Los Lobos ganaron la Superliga.",scr:{title:"ESPECIALES",rows:[["Ni\xF1os","29-dic-2014"],["Fin de a\xF1o","31-dic-2014/2015"],["Campeones","29-feb-2016"],["Semana de campeones","sep-2016"],["Famosos","28-nov-2016"]]},cam:q0},{t:"Pausa y regreso",sub:"La tira diaria termin\xF3 el 21 de octubre de 2022. Volvi\xF3 los fines de semana el 18 de marzo de 2023, y se retir\xF3 el 30 de abril de 2023, cuando a\xFAn quedaban 12 entregas por emitir.",scr:{title:"2022-2023",rows:[["Fin tira diaria","21-oct-2022"],["Regreso","18-mar-2023"],["Retirada","30-abr-2023"],["Sin emitir","12 programas"]]},cam:N0},{t:"La etapa de Cuatro",sub:"El 9 de septiembre de 2024 empez\xF3 una nueva etapa en Cuatro, de lunes a viernes de 19:00 a 20:00, producida por Mediacrest. Estuvo en antena hasta el 5 de diciembre de 2024.",scr:{title:"CUATRO",rows:[["Estreno","9-sep-2024"],["Horario","L-V 19:00-20:00"],["Final","5-dic-2024"],["Bombas","100/200/300/500 \u20AC"]]},cam:U0}];var Ci=[{id:"pub-saludo",tipo:"publico",titulo:"Bajando a saludar",cam:"publico",lineas:["\xA1Un momento, un momento! Antes de empezar voy a saludar a mi gente de las gradas.","\xA1Hola, hola! \xBFQu\xE9 tal est\xE1is? Se\xF1ora de la tercera fila, \xA1ese abanico es m\xE1s r\xE1pido que nuestra mecha!","Caballero, \xBFusted viene todos los d\xEDas? \xA1Si ya tiene hasta su butaca con nombre!","Y vosotros, los del fondo, \xA1aplaudid fuerte, que si no la bomba se duerme!","\xA1Muchas gracias! Me vuelvo al plat\xF3 antes de que alguien corte un cable sin m\xED."]},{id:"pub-cumple",tipo:"publico",titulo:"Un cumplea\xF1os en el p\xFAblico",cam:"publico",lineas:["Me dice producci\xF3n que hoy hay alguien de cumplea\xF1os en el p\xFAblico.","\xA1Ah\xED est\xE1! \xA1Felicidades! \xBFCu\xE1ntos cumples? No, no me lo digas, que lo dice la mecha.","Aqu\xED no tenemos velas\u2026 tenemos bombas. \xA1Pide un deseo y sopla, pero flojito!","\xA1Un aplauso para nuestra cumplea\xF1era! Y ahora s\xED: \xA1empezamos!"]},{id:"tel-mama",tipo:"telefono",titulo:"Llama mi madre",cam:"presentador",lineas:["\xA1Perdonad, perdonad! Me est\xE1 sonando el m\xF3vil\u2026 \xA1Es mi madre! No puedo no cogerlo.","\xBFS\xED, mam\xE1? S\xED, estoy trabajando. S\xED, en la tele. No, mam\xE1, las bombas no son de verdad.","\xBFQue si he comido? Mam\xE1, que estamos en directo\u2026 S\xED, un bocadillo de tortilla.","\xBFQue corte el cable azul? Mam\xE1, \xA1que no te puedo dar las respuestas!","Vale, te quiero, adi\xF3s. Perdonad\u2026 es que mi madre ve todos los programas. \xA1Y acierta m\xE1s que yo!"]},{id:"tel-tecnico",tipo:"telefono",titulo:"El t\xE9cnico de las bombas",cam:"bombas",lineas:["Un segundo, que me llama el t\xE9cnico de las bombas.","\xBFS\xED? \xBFQue la bomba tres hace un ruido raro? \xBFQu\xE9 ruido? \xBFTic-tac? \xA1Eso es normal, hombre!","\xBFQue se te ha olvidado qu\xE9 cable era el bueno? \xA1Pues como a todos los concursantes!","Nada, nada, todo controlado. Bueno\u2026 casi todo. \xA1Seguimos!"]},{id:"normas-nuevas",tipo:"normas",titulo:"Cambiando las normas",cam:"general",lineas:["Atenci\xF3n, que hoy tengo normas nuevas para el programa.","Norma uno: prohibido cortar cables con los dientes. S\xED, alguien lo intent\xF3.","Norma dos: si la bomba explota, no vale decir \xAByo no he sido\xBB.","Norma tres: el presentador siempre tiene raz\xF3n\u2026 salvo cuando se equivoca.","Y norma cuatro: \xA1aqu\xED se viene a disfrutar! Bueno, y a ganar el bote. \xA1Vamos all\xE1!"]}],B0={publico:"\u{1F44F}",telefono:"\u{1F4F1}",normas:"\u{1F4DC}"},O0={publico:"Con el p\xFAblico",telefono:"Al tel\xE9fono",normas:"Cambiando las normas"};var Pi=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),ns=()=>{},F0=n=>{ns=n},dn=n=>n&&n.stopPropagation();function H0(n,e,t,i){let s=document.createElement("button");return s.className="mbtn "+(t||""),s.innerHTML=`<span class="fp"></span><span>${n}${e?`<small>${e}</small>`:""}</span>`,s.onclick=a=>{dn(a),ns(),i()},s}function z0(n){let e=document.createElement("button");return e.className="tbtn back",e.textContent="\u27F5 Volver",e.onclick=t=>{dn(t),ns(),n()},e}function is(n){let e=document.createElement("h2");return e.textContent=n,e}function Ii(n,e="onote"){let t=document.createElement("p");return t.className=e,t.textContent=n,t}function en(n,...e){let t=document.createElement("div");t.className="orow";let i=document.createElement("label");return i.textContent=n,t.append(i,...e),t}function k0(n,e,t){let i=document.createElement("button"),s=()=>{i.className="tbtn"+(n[e]?" sel":""),i.textContent=n[e]?"S\xED":"No"};return s(),i.onclick=a=>{dn(a),n[e]=!n[e],s(),ns(),t&&t(n[e])},i}function V0(n,e,t,i){return t.map(([s,a])=>{let r=document.createElement("button");return r.className="tbtn"+(n[e]===s?" sel":""),r.textContent=a,r.dataset.v=s,r.onclick=o=>{dn(o),n[e]=s,ns(),r.parentNode.querySelectorAll(".tbtn[data-v]").forEach(l=>l.classList.toggle("sel",l.dataset.v===s)),i&&i(s)},r})}function G0(n,e,t,i){let s=document.createElement("input");return s.type="range",s.min=0,s.max=100,s.value=Math.round((n[e]??1)*100),s.oninput=()=>{n[e]=s.value/100,t&&t(n[e])},s.onchange=()=>i&&i(n[e]),s.onpointerdown=dn,s}function dr(n,...e){let t=document.createElement("div");t.className="ocustom";let i=document.createElement("div");return i.className="olabel",i.textContent=n,t.append(i,...e.filter(Boolean)),t}function Ns(n,e="oname"){let t=document.createElement("div");return t.className=e,t.innerHTML=n,t}function Li(n){let e=document.createElement("div");e.className="obtns";for(let t of n){let i;if(t.file){i=document.createElement("label");let s=document.createElement("input");s.type="file",s.accept=t.file.accept,s.onclick=dn,s.onchange=()=>s.files[0]&&t.file.onFile(s.files[0]),i.append(document.createTextNode(t.t),s)}else i=document.createElement("button"),i.textContent=t.t,i.disabled=!!t.disabled,i.onclick=s=>{dn(s),ns(),t.fn&&t.fn(i)};i.className="tbtn"+(t.sel?" sel":"")+(t.full?" full":""),e.appendChild(i)}return e}function W0(n,e,t,i,s){let a=document.createElement("input");return a.className="otext",a.value=n[e]||"",a.placeholder=t,a.maxLength=i,a.oninput=()=>{n[e]=a.value.trim(),s&&s(n[e])},a.onkeydown=dn,a.onpointerdown=dn,a}function X0(n,e,t){let i=document.createElement("div");i.className="themes";for(let[s,a]of Object.entries(n)){let r=document.createElement("button");r.className="tbtn"+(s===e?" sel":""),r.innerHTML=`<span>${a.emoji}</span>${Pi(a.name)}`,r.onclick=o=>{dn(o),ns(),t(s)},i.appendChild(r)}return i}function $0(n,{logo:e,sub:t="El juego",tap:i="Toca para empezar",onStart:s}){n.classList.remove("hidden"),n.innerHTML=`<div class="title"><img class="tlogo" src="${e}" alt=""><div class="tsub">${Pi(t)}</div><div class="ttap">${Pi(i)}</div></div>`;let a=r=>{dn(r),n.removeEventListener("pointerup",a),removeEventListener("keydown",a),s()};setTimeout(()=>{n.addEventListener("pointerup",a),addEventListener("keydown",a)},200)}function Y0(n,{logo:e,tag:t,version:i,cls:s=""}){n.classList.remove("hidden"),n.innerHTML="";let a=document.createElement("div");a.className="mbox";let r=document.createElement("div");r.className="logo",r.innerHTML=`<img class="mlogo" src="${e}" alt=""><div class="mtag">${Pi(t)}</div>`;let o=document.createElement("div");o.className="col ui "+s;let l=document.createElement("div");return l.className="mver",l.textContent="v"+i,a.append(l,r,o),n.appendChild(a),o}function j0(n,e){let t=document.createElement("div");return t.className="modal ui",t.innerHTML=`<div class="mcard">${e}<button class="tbtn back" data-cerrar>Cerrar</button></div>`,n.appendChild(t),t.querySelector("[data-cerrar]").onclick=i=>{dn(i),t.remove()},t}function J0({total:n,presentador:e="El presentador",padre:t=document.body}){document.getElementById("historia")?.remove();let i=document.createElement("div");i.id="historia",i.className="ui",i.innerHTML=`<div class="hcard" id="hCard"></div><div class="hsub" id="hSub"><b>${Pi(e)}</b><span></span></div>
    <div class="hctl"><button class="tbtn" id="hPrev">\u25C4 Anterior</button><button class="tbtn" id="hSkip">\u23ED Saltar</button><button class="tbtn sel" id="hNext">Siguiente \u25BA</button></div>
    <div class="hdots" id="hDots">${Array.from({length:n},(a,r)=>`<i data-i="${r}"></i>`).join("")}</div>`,t.appendChild(i);let s=a=>i.querySelector("#"+a);return{el:i,mostrar(a,r){let o=s("hCard");o.classList.remove("in"),o.innerHTML=`<div class="hhead">${a>=0?`<span class="hnum">${a+1}/${n}</span>`:""}<span class="hemo">${r.emoji||""}</span><b>${Pi(r.t)}</b></div>`+(r.rows||[]).map(([l,c])=>`<div class="hrow"><small>${Pi(l)}</small><span>${Pi(c)}</span></div>`).join(""),o.offsetWidth,o.classList.add("in"),i.querySelectorAll("#hDots i").forEach((l,c)=>l.classList.toggle("on",c===a)),s("hPrev").disabled=a<=0,s("hNext").textContent=a>=n-1?"Terminar \u25BA":"Siguiente \u25BA"},subtitulo(a){s("hSub").querySelector("span").textContent=a,s("hSub").classList.toggle("vacio",!a)},on({prev:a,next:r,skip:o,ir:l}){s("hPrev").onclick=c=>{dn(c),ns(),a()},s("hNext").onclick=c=>{dn(c),ns(),r()},s("hSkip").onclick=c=>{dn(c),o()},s("hSub").onclick=c=>{dn(c),o()},i.querySelectorAll("#hDots i").forEach(c=>c.onclick=u=>{dn(u),l(+c.dataset.i)})},cerrar(){i.remove()}}}function Z0(n){return n.map(([e,t])=>`<p><b>${Pi(e)}</b><br>${t.map(Pi).join("<br>")}</p>`).join("")}var yn=new URLSearchParams(location.search);yn.get("vel")&&(window.__VEL=+yn.get("vel"));yn.has("auto")&&(window.__AUTO=!0,window.__AUTO_ELIGE=+(yn.get("elige")||0));Ps.nombre=we.presentador||Ko.nombre;Ps.voz=Ko.voz;var Ou=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,ln=new du({antialias:!Ou,preserveDrawingBuffer:yn.has("capture"),powerPreference:"high-performance"});ln.setPixelRatio(Math.min(devicePixelRatio,Ou?1.25:1.75));ln.setSize(innerWidth,innerHeight);ln.toneMapping=Xs;ln.toneMappingExposure=+(yn.get("exp")||.9);ln.shadowMap.enabled=!0;pe("#app").appendChild(ln.domElement);var Fu=new Gi,ia=new Jt(52,innerWidth/innerHeight,.1,220),s3={uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform sampler2D tDiffuse; varying vec2 vUv; void main(){ vec4 c = texture2D(tDiffuse, vUv); if (any(isnan(c)) || any(isinf(c))) c = vec4(0.0,0.0,0.0,1.0); gl_FragColor = clamp(c, 0.0, 2.5); }"},aa=new tr(ln);aa.addPass(new nr(Fu,ia));aa.addPass(new er(s3));var a3=new As(new le(innerWidth,innerHeight),+(yn.get("bs")??.18),.25,+(yn.get("bt")??1));aa.addPass(a3);aa.addPass(new ir);var em=yn.has("bloom")||we.quality==="alta",jn=yn.get("tema")||localStorage.getItem("boom3d_theme")||"clasico";Rn[jn]||(jn="clasico");var nl=yn.get("color")||we.color||"azul";Yn[nl]||(nl="azul");var gr="a3",fn={paleta:yd(jn,nl),deco:Rn[jn].deco,logoPantalla:null,pantallaInfo:null,pantallaTexto:null},Ke=a0(Fu,fn,ln);async function il(){let n=await Js("logo",Ri[gr]);if(!n)return fn.logoPantalla=null,null;let e=new Image;return e.src=n.url,fn.logoPantalla=e,n.url}function tl(n,e=!0){jn=n,fn.paleta=yd(n,nl);let t={blanco:[16777215,14543103],rojo:[16722474,16752704],rojoazul:[16722474,2780159]};t[we.platoLuz]&&(fn.paleta={...fn.paleta,luces:t[we.platoLuz]}),Ke.setTema(fn.paleta),Ke.setDeco(Rn[n].deco),fn.pantallaTexto=(Rn[n].banner&&!fn.logoPantalla,null),e&&localStorage.setItem("boom3d_theme",n)}var sl={general:[[0,9,25],[0,3,-4]],bombas:[[-.5,2.8,9.2],[-3.4,1.2,3.2]],atriles:[[0,4.2,3.5],[0,2.2,-9.5]],bote:[[0,4.6,8.4],[0,2.6,0]],clasif:[[-1.5,2.4,7.5],[-4.1,1.3,3.1]],pantalla:[[4,6,6],[-9.5,6.7,-12.5]],publico:[[0,6,6],[-13,2,2]]};{let n=new I;Ke.plata.getWorldPosition(n);let e=new I(-n.x,0,-n.z).normalize();sl.clasif=[[n.x-e.x*2.6,n.y+1.6,n.z-e.z*2.6],[n.x+e.x*2,n.y+.6,n.z+e.z*2]]}var tt={mode:"menu",pos:new I(0,9,26),look:new I(0,2,0),tPos:new I(0,9,26),tLook:new I(0,2,0),yaw:0,pitch:.3};function ll(n,e,t=!1){tt.mode="show",tt.tPos.set(...n),tt.tLook.set(...e),t&&(tt.pos.copy(tt.tPos),tt.look.copy(tt.tLook))}var al=n=>{let e=sl[n]||sl.general;ll(e[0],e[1])},Di=null;ln.domElement.addEventListener("pointerdown",n=>{Di={id:n.pointerId,x:n.clientX,y:n.clientY}});addEventListener("pointermove",n=>{if(!Di||Di.id!==n.pointerId)return;let e=n.clientX-Di.x,t=n.clientY-Di.y;Di.x=n.clientX,Di.y=n.clientY,tt.yaw-=e*.006,tt.pitch=Math.max(-.3,Math.min(1.1,tt.pitch+t*.004))});addEventListener("pointerup",n=>{Di&&Di.id===n.pointerId&&(Di=null)});var fi={};addEventListener("keydown",n=>{fi[n.code]=!0});addEventListener("keyup",n=>{fi[n.code]=!1});var pr={x:0,y:0};{let n=pe("#joy"),e=pe("#knob"),t=null,i=a=>{let r=n.getBoundingClientRect(),o=a.clientX-(r.left+r.width/2),l=a.clientY-(r.top+r.height/2),c=Math.hypot(o,l),u=r.width/2-10;c>u&&(o*=u/c,l*=u/c),e.style.transform=`translate(${o}px,${l}px)`,pr.x=o/u,pr.y=l/u};n.addEventListener("pointerdown",a=>{t=a.pointerId,n.setPointerCapture(t),i(a),a.stopPropagation()}),n.addEventListener("pointermove",a=>{a.pointerId===t&&i(a)});let s=a=>{a.pointerId===t&&(t=null,pr.x=pr.y=0,e.style.transform="")};n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s)}var rl=null;function tm(n){tt.mode=n?"walk":tt.mode,pe("#joy").classList.toggle("hidden",!(n&&Ou)),n&&(Ke.walker.visible=!0,tt.yaw=0,tt.pitch=.3)}function ol(n){let e=pe("#hint");e.textContent=n,e.classList.toggle("hidden",!n)}var pn=null;function Ud({outro:n=!1,fixedT:e=null}={}){return new Promise(async t=>{Hu();let i=await il(),s=u0(ln,{logoUrl:i,cuatro:gr==="cuatro"});if(s.resize(innerWidth,innerHeight),pn={inst:s,start:performance.now()/1e3,fixedT:e,res:t,gain:null},document.body.classList.add("en-cabecera"),pe("#btnSkip").classList.remove("hidden"),pe("#cabTexto").textContent=n?"\xA1Hasta ma\xF1ana!":"",e==null){Ee.stopMusic();let a=await Js("musica",Ri[gr]);if(a&&!Ee.muted)pn.audio=new Audio(a.url),pn.audio.play().catch(()=>{});else if(!Ee.muted)try{let r=ko(),o=r.createGain();o.connect(r.destination),pn.gain=o,h0(r,o,r.currentTime+.05)}catch{}}})}function Hu(){if(!pn)return;let n=pn;if(pn=null,n.audio){let e=n.audio,t=1,i=setInterval(()=>{t-=.1,e.volume=Math.max(0,t),t<=0&&(e.pause(),clearInterval(i))},80)}if(n.gain)try{n.gain.gain.setTargetAtTime(0,ko().currentTime,.2),setTimeout(()=>n.gain.disconnect(),2e3)}catch{}n.inst.dispose(),document.body.classList.remove("en-cabecera"),pe("#btnSkip").classList.add("hidden"),pe("#cabTexto").textContent="",pe("#fx-flash").style.opacity=0,pe("#fx-fade").style.opacity=1,pe("#fx-fade").classList.add("saliendo"),setTimeout(()=>{pe("#fx-fade").style.opacity=0},30),n.res()}window.__renderCabecera=async n=>(pn||(Ud({fixedT:n}),await new Promise(e=>setTimeout(e,400))),pn.fixedT=n,nm(n),!0);function nm(n){pn.inst.render(n);let e=pn.inst.overlay(n);pe("#fx-flash").style.opacity=e.flash,pe("#fx-fade").classList.remove("saliendo"),pe("#fx-fade").style.opacity=e.fade}async function r3(){let n=await ci.get("video:cabecera");if(!n||!n.blob)return!1;let e=URL.createObjectURL(n.blob),t=pe("#video"),i=t.querySelector("video");return new Promise(s=>{let a=!1,r=()=>{a||(a=!0,i.pause(),i.removeAttribute("src"),i.load(),t.classList.add("hidden"),pe("#btnSkip").classList.add("hidden"),URL.revokeObjectURL(e),xr=null,s(!0))};i.onended=r,i.onerror=r,xr=r,i.src=e,i.volume=we.music?we.musicVol:0,t.classList.remove("hidden"),pe("#btnSkip").classList.remove("hidden"),i.play().catch(()=>{i.muted=!0,i.play().catch(r)})})}var xr=null,o3=()=>{let n=new I;return Ke.presentador.getWorldPosition(n),[[n.x*.55+1.2,n.y+1.9,n.z*.55+3.6],[n.x,n.y+1.4,n.z]]},Jn={P:()=>Ke,tema:()=>jn,cam:n=>{if(!na)if(n==="presentador"){let e=o3();ll(e[0],e[1])}else al(n)},setEtapa(n){gr=n,il()},async cabecera(n={}){if(!(we.cabecera==="video"&&!n.outro&&await r3()))return Ht(Ud(n))},paseo(n){Ke.setFiguraEquipo(n),Ke.ocultarAtril(n,0,!0),Ke.walker.position.set(n==="rojo"?-3:3,0,14.2),Ke.walker.rotation.y=Math.PI;let e=Ke.posAtril(n,0);return Ke.marca.position.set(e.x,1.06,e.z),Ke.marca.visible=!0,tt.pos.set(Ke.walker.position.x,3.5,19),tm(!0),Xt("\xA1Concursante, sube a la tarima por la escalera central y ve hasta tu atril, el n\xFAmero 1!",6e3),Ee.voice("walk","\xA1Concursante, ve hasta tu atril!",Ko.voz),ol("\u{1F579}\uFE0F Camina hasta el aro verde de tu atril \xB7 PC: WASD + rat\xF3n"),ts([{label:"Ir a mi atril \u25B6",fn:()=>{Ke.walker.position.set(e.x,1,e.z)}}]),Ht(new Promise(t=>{rl=()=>{Ke.walker.position.distanceTo(new I(e.x,Ke.walker.position.y,e.z))<.9&&(rl=null,t())},yn.has("autopaseo")&&setTimeout(()=>{Ke.walker.position.set(e.x,1,e.z)},300)})).finally(()=>{ol(""),ts([]),Ke.marca.visible=!1,Ke.walker.visible=!1,mr=!1,Ke.ocultarAtril(n,0,!1),pe("#joy").classList.add("hidden"),al("general")})},orbita(){tt.mode="menu"},saltable(n){return pe("#btnSkip").classList.remove("hidden"),Ht(Promise.race([n,new Promise(e=>{xr=()=>e("skip")})])).finally(()=>{xr=null,pe("#btnSkip").classList.add("hidden"),Ee.stopVoice()})},marcador(n){let e=pe("#marcador");if(!n){e.classList.add("hidden");return}e.innerHTML=n,e.classList.remove("hidden")},monologo:(n,e=!1)=>im(n,e),iniciar:n=>pi(n),menu:(n="main")=>as(n)},sa="title",l3={title:null,main:"title",play:"main",train:"play",options:"main",help:"main",credits:"main",concursantes:"options",canciones:"options",monologos:"play"};F0(()=>Ee.play("tecla"));function K0(n=900,e=560){let t=document.createElement("canvas");t.width=n,t.height=e;let i=t.getContext("2d");if(fn.logoPantalla&&fn.logoPantalla.complete&&fn.logoPantalla.naturalWidth){let s=fn.logoPantalla,a=Math.min((n-40)/s.naturalWidth,(e-20)/s.naturalHeight);i.drawImage(s,(n-s.naturalWidth*a)/2,(e-s.naturalHeight*a)/2,s.naturalWidth*a,s.naturalHeight*a)}else md(i,n*.52,e*.52,n*.84,.3);return t.toDataURL("image/png")}var zu=()=>{Go(),Ee.aplicarNiveles()},ss=(n,e)=>k0(we,n,t=>{zu(),e&&e(t)}),Uu=(n,e,t)=>V0(we,n,e,i=>{zu(),t&&t(i)}),Id=n=>G0(we,n,zu,()=>Ee.play(n==="publicoVol"?"aplausos":"tecla")),fr="",Ds=null;function as(n="main"){Su(),Ee.stopAll(),Hu(),ea(),Vt.hide(),ut.show(!1),ol(""),pe("#bubble").classList.add("hidden"),Ni?.cerrar(),Ni=null,fn.pantallaInfo=null,rl=null,Ke.walker.visible=!1,Ke.marca.visible=!1,pe("#joy").classList.add("hidden"),mr=!1,na=null,b0(),ts([]),Tu(),Ls(""),Jn.marcador(null),pe("#video").classList.add("hidden"),pe("#topbar").classList.add("hidden"),pe("#glights").classList.add("hidden"),Ke.revivirTodos(),["rojo","azul"].forEach(e=>[0,1,2,3].forEach(t=>Ke.ocultarAtril(e,t,!1))),Ke.setMinis(Array(15).fill("off")),Ke.setMecha(1),Ke.activarBomba(-1),tt.mode="menu",_r||(Ee.music("menu"),_r=!0),Dt(n)}var _r=!1;function Dt(n){sa=n;let e=pe("#menu"),t=Rn[jn]||Rn.clasico;if(n==="title")return $0(e,{logo:K0(900,640),sub:"El juego",onStart:()=>{Ee.play("banner"),as("main")}});let i=Y0(e,{logo:K0(),tag:jn==="clasico"?"EL JUEGO \xB7 3D":t.emoji+" "+(t.banner||"Especial "+t.name),version:bd,cls:["options","concursantes","canciones"].includes(n)?"opts":["help","credits"].includes(n)?"text":""}),s=H0,a=r=>z0(()=>Dt(r));if(n==="main")i.append(s("Jugar","Programa completo, entrenamiento, cl\xE1sico\u2026","gold",()=>Dt("play")),s("Opciones","Sonido, calidad gr\xE1fica, pantalla completa","",()=>Dt("options")),s("La historia de \xA1Boom!",`${de(we.presentador)} te cuenta la historia del programa`,"",()=>pi("historia")),s("C\xF3mo se juega","Las reglas del concurso","",()=>Dt("help")),s("Cr\xE9ditos","","",()=>Dt("credits"))),matchMedia("(display-mode: standalone), (display-mode: fullscreen)").matches||i.append(s("Instalar app","Juega sin conexi\xF3n desde tu pantalla de inicio","inst",h3));else if(n==="play")i.append(s("Programa completo","Cabecera, bombas, clasificatoria, bomba bote y despedida","gold",()=>pi("programa")),s("Entrenamiento","Practica cada bomba por separado","",()=>Dt("train")),s("Cl\xE1sico","La partida r\xE1pida de siempre: cables, clasificatoria y bote","",()=>pi("mini")),s("Explorar el plat\xF3","Pasea libremente por el plat\xF3 3D","",()=>pi("explorar")),s("Mon\xF3logos del presentador","Sus n\xFAmeros de humor: con el p\xFAblico, al tel\xE9fono y las normas","",()=>Dt("monologos")),is("Programa especial"),X0(Rn,jn,r=>{tl(r),Dt("play")}),a("main"));else if(n==="train"){i.append(is("Entrenamiento (sin presi\xF3n)"));let r={caliente:"La minibomba pasa de mano en mano \xB7 3 s",cables:"4 bombas: corta las respuestas err\xF3neas",estrategica:"10 respuestas, 7 correctas, 60 s",clasificatoria:"2 minutos por equipo, 2 opciones",bote:"15 minibombas en 2 minutos"};Object.entries(Nu).forEach(([u,h],d)=>i.append(s(h,r[u],d===0?"gold":"",()=>pi("entreno:"+u))));let o=document.createElement("div");o.className="mrow";let l=document.createElement("button"),c=()=>{l.className="tbtn"+(el?" sel":""),l.innerHTML=el?"<span>\u267E\uFE0F</span>Tiempo ilimitado":"<span>\u23F1\uFE0F</span>Con reloj"};c(),l.onclick=u=>{u.stopPropagation(),el=!el,c(),Ee.play("tecla")},o.append(l,a("play")),i.append(o)}else if(n==="options"){i.append(is("Opciones")),i.append(en("\u{1F3B5} M\xFAsica",ss("music"),Id("musicVol"))),i.append(en("\u{1F3AC} Cabecera",...Uu("cabecera",[["video","Mi v\xEDdeo"],["3d","Plat\xF3 3D"]])));let r=dr("\u{1F3B6} M\xFAsica de la cabecera");r.id="optCab",i.append(r),c3(r),i.append(en("\u{1F50A} Efectos",ss("sfx"),Id("sfxVol")));let o=dr("",en("\u{1F44F} P\xFAblico",ss("publico"),Id("publicoVol")),en("\u{1F465} P\xFAblico en las gradas",ss("gradas",rm)),Ii("Aplausos, v\xEDtores y risas del p\xFAblico. Son sonidos sintetizados por el propio juego (no son grabaciones). Si tu m\xF3vil va justo, quitar el p\xFAblico de las gradas ayuda."));o.querySelector(".olabel").remove(),i.append(o),i.append(en("\u{1F3A4} Voz del presentador",ss("voz")),en("\u{1F4D6} El presentador lee las preguntas",ss("lee")),en("\u23E9 Velocidad de lectura",...Uu("leeVel",[["normal","Normal"],["rapida","R\xE1pida"]])),en("\u{1F604} Chistes del presentador",ss("chistes")),en("\u{1F3AD} Mon\xF3logo del presentador",ss("monologo"))),i.append(dr("\u{1F465} Concursantes",Ns(`${we.nombre?"T\xFA: "+de(we.nombre)+(we.profesion?" \xB7 "+de(we.profesion):""):"T\xFA: sin nombre"} \xB7 Tu equipo: ${de(we.equipoNombre)} \xB7 Presenta: ${de(we.presentador)}`),Li([{t:"\u270F\uFE0F Nombres y profesiones",sel:!0,full:!0,fn:()=>Dt("concursantes")}]))),i.append(en("\u{1F3DF}\uFE0F Plat\xF3",...Uu("color",[["azul","Azul"],["naranja","Naranja"],["dorado","Dorado"]],h=>{nl=h,tl(jn),Dt("options")}))),i.append(dr("\u{1F4A1} Luces del plat\xF3",Li([["auto","Auto"],["blanco","Blanco"],["rojo","Rojo"],["rojoazul","Rojo+azul"]].map(([h,d])=>({t:d,sel:we.platoLuz===h,fn:()=>{we.platoLuz=h,zu(),tl(jn),Dt("options")}}))))),i.append(Ii(`Plat\xF3 de \xA1Boom!: tarima circular con los atriles de los dos equipos, la gran bomba del bote al fondo y gradas a los lados. ${we.platoLuz==="auto"?"Las luces autom\xE1ticas siguen los colores de cada especial.":"Las luces fijas se mantienen en todos los especiales."}`,"mtext")),Nd().then(h=>{let d=dr("\u{1F3B5} Mis canciones",Ns(h.length?`${h.length} ${h.length===1?"canci\xF3n":"canciones"}: ${de(h.map(f=>f.name).join(", "))}`:"Sin canciones: suena la m\xFAsica del juego"),Li([{t:"\u{1F3B5} Gestionar mis canciones",sel:!0,full:!0,fn:()=>Dt("canciones")}]),Ii("Sube canciones desde tu dispositivo (se quedan solo en \xE9l). Suenan durante las bombas en lugar de la m\xFAsica del juego."));i.insertBefore(d,l)});let l=en("\u2728 Calidad gr\xE1fica",...Uu("quality",[["baja","Baja"],["media","Media"],["alta","Alta"]],am));i.append(l);let c=matchMedia("(display-mode: standalone), (display-mode: fullscreen)").matches,u=Li([{t:c?"Siempre (app)":document.fullscreenElement?"Salir":"Activar",sel:!!document.fullscreenElement,disabled:c,fn:async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else{await document.documentElement.requestFullscreen({navigationUI:"hide"});try{await screen.orientation.lock("landscape")}catch{}}}catch{Is("Tu navegador no permite pantalla completa aqu\xED")}setTimeout(()=>Dt("options"),300)}}]);i.append(en("\u26F6 Pantalla completa",u),Ii(`Rendimiento actual: ${Math.round(qd)} fps. Si el juego va lento en tu m\xF3vil, elige calidad \xABBaja\xBB.`,"mtext"),a("main"))}else if(n==="canciones"){i.append(is("Mis canciones"));let r=document.createElement("div");r.className="ocustom",i.append(r),Nd().then(o=>{r.innerHTML="",o.length||r.append(Ns("Todav\xEDa no has subido ninguna canci\xF3n.")),o.forEach((l,c)=>r.append(en("\u{1F3B5} "+l.name,...Li([{t:"\u25B6 Probar",fn:u=>Bd(URL.createObjectURL(l.blob),u)},{t:"\u{1F5D1} Quitar",fn:async()=>{o.splice(c,1),await ci.put("canciones",o),await Dd(),Dt("canciones")}}]).children))),r.append(Li([{t:"\u{1F4C2} Subir canci\xF3n de mi dispositivo",sel:!0,full:!0,file:{accept:"audio/*",onFile:async l=>{o.push({name:l.name.replace(/\.[^.]+$/,""),blob:l}),await ci.put("canciones",o),await Dd(),Is("\u2705 \xA1Canci\xF3n guardada en este dispositivo!"),Dt("canciones")}}}]))}),i.append(Ii("Las canciones se quedan solo en este dispositivo; no se suben ni se comparten."),a("options"))}else if(n==="concursantes"){i.append(is("Concursantes"));let r=(o,l,c)=>W0(we,o,l,c,()=>{Go(),o==="presentador"&&(Ps.nombre=we.presentador||"Rober Mecha")});i.append(en("\u{1F64B} Tu nombre",r("nombre","Ej.: Iker",18)),en("\u{1F4BC} Profesi\xF3n",r("profesion","Ej.: estudiante",24)),en("\u{1F6E1}\uFE0F Tu equipo",r("equipoNombre","Los Mechas",22)),en("\u{1F399}\uFE0F Presentador",r("presentador","Rober Mecha",22)),en("\u{1FAAA} Presentar a los equipos",ss("presentaciones")),Ii(`${we.presentador||"Rober Mecha"} te presentar\xE1 al empezar el Programa completo. Tu nombre sale en el marcador y en los cr\xE9ditos.`),a("options"))}else if(n==="monologos"){i.append(is("Mon\xF3logos del presentador"),s("\u{1F3B2} Al azar","Uno cualquiera (y luego \xABSiguiente\xBB)","gold",()=>pi("mono:azar")));let r=document.createElement("div");r.className="monolist",Ci.forEach(o=>{let l=document.createElement("button");l.className="tbtn",l.innerHTML=`<span>${B0[o.tipo]}</span><b>${de(o.titulo)}</b><small>${O0[o.tipo]}</small>`,l.onclick=c=>{c.stopPropagation(),Ee.play("tecla"),pi("mono:"+o.id)},r.appendChild(l)}),i.append(r,Ii(`${we.presentador} es un presentador virtual inventado con la voz del navegador. Pulsa \xABSaltar \u23ED\xBB para terminar el mon\xF3logo.`,"mtext"),a("play"))}else if(n==="help"){i.append(a("main"),is("C\xF3mo se juega"));let r=document.createElement("div");r.className="mtext",r.innerHTML=u3,i.append(r)}else if(n==="credits"){i.append(a("main"),is("Cr\xE9ditos"));let r=document.createElement("div");r.className="mtext creditos",r.innerHTML=Z0(Pd(null))+`<p><b>Especial 300 suscriptores</b><br>Dedicado a los suscriptores del canal de YouTube \xABIkeriano el campe\xF3n 2\xBB</p><p class="small">Versi\xF3n ${bd}</p><p class="small">Juego de fans sin \xE1nimo de lucro. \xAB\xA1Boom!\xBB es un formato de televisi\xF3n de sus respectivos due\xF1os; este juego no est\xE1 afiliado a ninguna cadena. El presentador es un personaje virtual inventado. Interfaz basada en el APK \xAB\xA1Ahora Caigo! El juego 3D\xBB de Iker.</p>`,i.append(r)}}function Bd(n,e){if(Ds){Ds.pause(),Ds=null,e&&(e.textContent="\u25B6 Probar"),_r=!1,Ee.music("menu"),_r=!0;return}Ee.stopMusic(),Ds=new Audio(n),Ds.volume=we.musicVol,Ds.play().catch(()=>{}),e&&(e.textContent="\u23F9 Parar");let t=Ds;setTimeout(()=>{Ds===t&&Bd(null,e)},12e3)}async function c3(n){let e=await Js("musica",Ri[gr]),t=await Js("logo",Ri[gr]),i=await ci.get("video:cabecera"),s=async a=>{for(let r of Object.values(Ri))await a(r.id)};n.append(Ns(e?`\u{1F3B5} <b>${de(e.nombre)}</b>`:"Sin audio propio: suena la m\xFAsica del juego"),Li([{t:"\u{1F4C2} Elegir audio de mi dispositivo",sel:!0,full:!0,file:{accept:"audio/*",onFile:async a=>{n.querySelector(".oname").textContent="\u23F3 Cargando \xAB"+a.name+"\xBB\u2026",await s(r=>_d("musica",r,a)),fr="\u2705 \xA1Audio guardado en este dispositivo!",Dt("options")}}},{t:"\u25B6 Probar",disabled:!e,fn:a=>Bd(e.url,a)},{t:"\u{1F5D1} Quitar",disabled:!e||e.origen!=="subido",fn:async()=>{await s(a=>vd("musica",a)),fr="Audio quitado: vuelve la m\xFAsica del juego",Dt("options")}}])),fr&&(n.append(Ns(fr,"omsg")),fr=""),n.append(Ii("El audio se queda solo en este dispositivo; no se sube ni se comparte."),Ii("Suena en la cabecera del Programa completo, con los mismos movimientos de c\xE1mara.")),n.append(Ns(`\u{1F39E}\uFE0F Mi v\xEDdeo de cabecera: ${i?"<b>"+de(i.name)+"</b>":"ninguno"}`),Li([{t:"\u{1F4C2} Elegir v\xEDdeo",file:{accept:"video/*",onFile:async a=>{await ci.put("video:cabecera",{blob:a,name:a.name,type:a.type}),we.cabecera="video",Go(),fr="\u2705 \xA1V\xEDdeo guardado!",Dt("options")}}},{t:"\u{1F5D1} Quitar v\xEDdeo",disabled:!i,fn:async()=>{await ci.del("video:cabecera"),we.cabecera="3d",Go(),Dt("options")}},{t:"\u25B6 Ver cabecera",fn:async()=>{pe("#menu").classList.add("hidden"),Su(),_r=!1;try{await Jn.cabecera()}catch{}as("options")}}])),n.append(Ns(`\u{1F5BC}\uFE0F Logo propio: ${t&&t.origen==="subido"?"<b>"+de(t.nombre)+"</b>":"el de \xA1Boom!"}`),Li([{t:"\u{1F4C2} Elegir imagen",file:{accept:"image/*",onFile:async a=>{await s(r=>_d("logo",r,a)),await il(),Dt("options")}}},{t:"\u{1F5D1} Quitar logo",disabled:!t||t.origen!=="subido",fn:async()=>{await s(a=>vd("logo",a)),await il(),Dt("options")}}]))}var Nd=async()=>await ci.get("canciones")||[];async function Dd(){let n=await Nd();Ee.setCanciones(n.map(e=>URL.createObjectURL(e.blob)))}var el=!1,u3=`<p><b>Objetivo:</b> dos equipos de cuatro, el <b>rojo</b> y el <b>azul</b>, desactivan bombas respondiendo preguntas. El que llegue a la final juega la <b>Bomba bote</b>.</p>
<p><b>1. Bomba caliente.</b> Una minibomba pasa de mano en mano: 3 segundos para completar una frase con dos huecos. +1 si aciertas, \u22121 si fallas. El ganador elige ventaja: Cable blanco, Siguen todos, Elige tema o Uno menos.</p>
<p><b>2. Bombas con cables.</b> Cada cable es una respuesta: corta los de las <b>err\xF3neas</b>. 4 cables y 45 s en las dos primeras; 5 cables y 60 s en las dos \xFAltimas (desde 2022 la \xFAltima es de cristal). Si cortas la correcta o se acaba el tiempo\u2026 <b>\xA1BOOM!</b>: se pierde el dinero y cae un jugador.</p>
<p><b>3. Bomba estrat\xE9gica.</b> 10 respuestas, 7 correctas, 60 s. Si fall\xE1is, el rival tiene un rebote de 30 s. Comod\xEDn de consulta de 10 s.</p>
<p><b>4. Bomba clasificatoria.</b> Bomba plateada con mecha: 2 minutos por equipo, preguntas de 2 opciones (\xB1200 \u20AC, \xB1100 \u20AC en Cuatro). Si fallas, el turno pasa al rival.</p>
<p><b>5. Bomba bote.</b> 15 minibombas en 2 minutos. Di \xAB\xA1Boom!\xBB para pasar. En la segunda vuelta, el primer fallo hace explotar la bomba.</p>
<p><b>Controles 3D:</b> joystick a la izquierda para andar, arrastra para mirar (PC: WASD + rat\xF3n). \u{1F441} cambia la c\xE1mara (primera/tercera persona al pasear). \u2630 vuelve al men\xFA. \xABSaltar \u23ED\xBB pasa la cabecera, la despedida y los mon\xF3logos.</p>`;function h3(){let n=j0(pe("#menu"),`<h2>Instalar \xA1Boom!</h2>${Bu?'<p><button class="mbtn gold" id="instNow">\u{1F4F2} Instalar ahora</button></p>':""}<p><b>Android (Chrome):</b> men\xFA \u22EE \u2192 \xABInstalar aplicaci\xF3n\xBB o \xABA\xF1adir a pantalla de inicio\xBB.</p><p><b>iPhone/iPad (Safari):</b> bot\xF3n Compartir \u2192 \xABA\xF1adir a pantalla de inicio\xBB.</p><p><b>PC (Chrome/Edge):</b> icono de instalar \u2295 en la barra de direcciones.</p><p>Una vez instalada funciona <b>sin conexi\xF3n</b>.</p>`),e=n.querySelector("#instNow");e&&(e.onclick=async t=>{t.stopPropagation();let i=Bu;Bu=null,i.prompt(),n.remove()})}var Bu=null;addEventListener("beforeinstallprompt",n=>{n.preventDefault(),Bu=n});async function pi(n){let e=Su();sa="juego",Ee.stopAll(),_r=!1,ea(),pe("#menu").classList.add("hidden"),pe("#topbar").classList.remove("hidden"),ts([]),Jn.marcador(null);try{if(n==="historia")return await f3(e),as("main");if(n==="explorar")return await d3(e);if(n.startsWith("mono:"))return await im(n.slice(5));if(n.startsWith("entreno:"))return await L0(n.slice(8),Jn,{ilimitado:el});await I0(n,Jn)}catch(t){t!==Qs&&(console.error(t),Is("Error: "+t.message,5e3),as("play"))}}async function d3(n){Ke.walker.position.set(0,0,10.5),Ke.setFiguraEquipo("rojo"),tm(!0),Ee.music("trilha"),Ls("#Boom"),ol("\u{1F579}\uFE0F Joystick / WASD para andar \xB7 arrastra para mirar \xB7 \u{1F441} cambia de c\xE1mara"),setTimeout(()=>ol(""),6e3),Xt("\xA1Bienvenido al plat\xF3 de \xA1Boom! Date una vuelta, pero no toques los cables.",4500);let e=!1,t=new I;for(;;){await Rt(300,n),Ke.presentador.getWorldPosition(t);let i=Math.hypot(t.x-Ke.walker.position.x,t.z-Ke.walker.position.z);i<2&&!e&&(e=!0,Xt("\xA1Hombre! \xBFVienes a por el bote? Pues ponte en tu atril, \xA1que empezamos enseguida!",3500)),i>3.5&&(e=!1)}}async function im(n,e=!1){let t=!n||n==="azar"?Ci[Math.floor(Math.random()*Ci.length)]:Ci.find(r=>r.id===n)||Ci[0];e||(Ee.play("aplausos"),Ls("#Boom")),t.cam==="presentador"?Jn.cam("presentador"):al(t.cam);let i=(async()=>{for(let r of t.lineas)await es(null,r,3500),await Rt(500);Ee.play("badumtss"),Ee.play("aplausos")})();if(await Jn.saltable(i),pe("#bubble").classList.add("hidden"),e)return;let s=Ci.indexOf(t),a=n==="azar"?"azar":Ci[(s+1)%Ci.length].id;Jn.marcador(`\u{1F3AD} \xAB${de(t.titulo)}\xBB`),Jn.orbita(),ts([{label:"Siguiente \u25B6",cls:"gold",fn:()=>pi("mono:"+a)},{label:"Repetir",fn:()=>pi("mono:"+t.id)},{label:"Lista",fn:()=>as("monologos")}]),await Ht(new Promise(()=>{}))}var mr=!1,na=null,Ld=[null,"general","bombas","bote","atriles","publico"];pe("#btnMenu").onclick=n=>{n.stopPropagation(),Ee.play("tecla"),as(sa==="juego"?"play":"main")};pe("#btnCam").onclick=n=>{if(n.stopPropagation(),Ee.play("tecla"),tt.mode==="walk"){mr=!mr,Is(mr?"\u{1F441} Primera persona":"\u{1F441} Tercera persona",1200);return}na=Ld[(Ld.indexOf(na)+1)%Ld.length],na&&al(na),Is("\u{1F441} C\xE1mara: "+(na||"autom\xE1tica"),1200)};pe("#btnSkip").onclick=n=>{n.stopPropagation(),pn?Hu():xr&&xr()};pe("#btnLuces").onclick=n=>{n.stopPropagation(),pe("#glights").classList.toggle("hidden")};function sm(){if(pe("#menu .modal"))return pe("#menu .modal").remove(),!0;if(pe("#menu").classList.contains("hidden"))return pe("#btnMenu").click(),!0;let n=l3[sa];return n?(Ee.play("tecla"),Dt(n),!0):!1}window.__back=sm;addEventListener("keydown",n=>{n.key==="Escape"&&sm()});var Od={vel:1};Ke.luces=Od;pe("#glights").innerHTML=`<div class="gl-head"><b>\u{1F4A1} Luces del plat\xF3</b><button data-close>\u2715</button></div>
  <label>Velocidad focos <input type="range" min="0" max="3" step="0.1" value="1" id="glVel"></label>
  <label>Exposici\xF3n <input type="range" min="0.4" max="1.6" step="0.05" value="0.9" id="glInt"></label>
  <div class="chips">${Object.entries(Yn).map(([n,e])=>`<button data-gl="${n}">${de(e.nombre)}</button>`).join("")}<button data-gl="flash">\u26A1 Fogonazo</button><button data-gl="boom">\u{1F4A5} \xA1Boom!</button></div>`;pe("#glights").addEventListener("click",n=>{n.stopPropagation(),n.target.closest("[data-close]")&&pe("#glights").classList.add("hidden");let e=n.target.closest("[data-gl]");if(!e)return;let t=e.dataset.gl;Yn[t]?Ke.setTema(Yn[t]):t==="flash"?(pe("#fx-flash").style.opacity=.8,setTimeout(()=>pe("#fx-flash").style.opacity=0,120)):(Ke.explotar("bote"),Ee.play("explosion"))});pe("#glVel").oninput=n=>{Od.vel=+n.target.value};pe("#glInt").oninput=n=>{ln.toneMappingExposure=+n.target.value};function am(){let n=we.quality;ln.setPixelRatio(n==="baja"?.75:n==="media"?Math.min(devicePixelRatio,Ou?1:1.25):Math.min(devicePixelRatio,1.75)),ln.shadowMap.enabled=n!=="baja",em=n==="alta"||yn.has("bloom"),ln.setSize(innerWidth,innerHeight),aa.setSize(innerWidth,innerHeight)}function rm(){Ke.root.traverse(n=>{n.userData&&n.userData.publico&&(n.visible=we.gradas)})}var Ni=null,Q0=["\u{1F30D}","\u{1F4FA}","\u{1F556}","\u{1F4DC}","\u{1F4A3}","\u{1F3C6}","\u{1F43A}","\u{1F4B0}","\u{1F389}","\u23F3","\u2B50","\u{1F501}","\u{1F3AC}","\u{1F4CA}","\u{1F399}\uFE0F"];async function f3(n){Ee.music("trilha"),Ls("#BoomHistoria");let e=qu.length;Ni=J0({total:e,presentador:we.presentador||"El presentador"});let t=0,i=null;Ni.on({prev:()=>i&&i(Math.max(0,t-1)),next:()=>i&&i(t+1),skip:()=>i&&i("skip"),ir:r=>i&&i(r)});let s=async(r,o)=>{Ni.subtitulo(r);let l=null,c=new Promise(u=>{i=h=>{l=h,u()}});return await Ht(Promise.race([Ee.voice(o,r,Ko.voz).then(()=>Rt(1800,n)),c])),Ee.stopVoice(),y0(n),l};Jn.cam("presentador"),Ni.mostrar(-1,{emoji:"\u{1F4D6}",t:"La historia de \xA1Boom!",rows:[["Cap\xEDtulos",String(e)],["Presenta",we.presentador||"Rober Mecha"]]});let a=await s(`\xA1Hola! Soy ${we.presentador||"Rober Mecha"}. Bienvenidos a la historia de \xA1Boom! Empecemos por el principio.`,"hist_intro");for(t=typeof a=="number"?a:0;t<e;){let r=qu[t];ll(r.cam[0],r.cam[1]),fn.pantallaInfo=r.scr,Ni.mostrar(t,{emoji:Q0[t%Q0.length],t:r.t,rows:(r.scr?.rows||[]).map(([o,l])=>[o,l])}),a=await s(r.sub,"hist_"+(t+1)),t=a==="skip"||a==null?t+1:a}fn.pantallaInfo=null,Jn.cam("presentador"),Ee.play("aplausos"),Ni.mostrar(e-1,{emoji:"\u2605",t:"\xA1Fin!",rows:[]}),await s("Y esta ha sido la historia de \xA1Boom! \xA1Gracias por acompa\xF1arme!","hist_fin"),Ni.cerrar(),Ni=null}addEventListener("resize",()=>{ia.aspect=innerWidth/innerHeight,ia.updateProjectionMatrix(),ln.setSize(innerWidth,innerHeight),aa.setSize(innerWidth,innerHeight),pn&&pn.inst.resize(innerWidth,innerHeight)});var p3=new ho,Qo=0,qd=60,qs=new I;function m3(){let n=Math.min(p3.getDelta(),.05);if(Qo+=n,qd=qd*.95+1/Math.max(n,.001)*.05,pn){if(pn.fixedT!=null)return;let s=performance.now()/1e3-pn.start;if(s>=Vo)Hu();else{nm(s);return}}let e=Ke.walker;if(tt.mode==="walk"){let s=pr.x,a=pr.y;(fi.KeyW||fi.ArrowUp)&&(a-=1),(fi.KeyS||fi.ArrowDown)&&(a+=1),(fi.KeyA||fi.ArrowLeft)&&(s-=1),(fi.KeyD||fi.ArrowRight)&&(s+=1);let r=Math.hypot(s,a);if(r>.1){let o=(fi.ShiftLeft?6:3.6)*Math.min(1,r)*n;s/=Math.max(1,r),a/=Math.max(1,r);let l=-Math.sin(tt.yaw),c=-Math.cos(tt.yaw),u=Math.cos(tt.yaw),h=-Math.sin(tt.yaw),d=(l*-a+u*s)*o,f=(c*-a+h*s)*o,p=e.position.x+d,x=e.position.z+f;Ke.bloqueado(p,x)?Ke.bloqueado(p,e.position.z)?Ke.bloqueado(e.position.x,x)||(e.position.z=x):e.position.x=p:(e.position.x=p,e.position.z=x),e.rotation.y=Math.atan2(d,f),e.children.forEach((g,m)=>{m>=5&&(g.rotation.x=Math.sin(Qo*10)*.5*(m%2?1:-1))})}if(e.position.y+=(Ke.alturaEn(e.position.x,e.position.z)-e.position.y)*Math.min(1,n*12),mr)e.visible=!1,tt.tPos.set(e.position.x,e.position.y+1.65,e.position.z),tt.tLook.set(e.position.x-Math.sin(tt.yaw)*5,e.position.y+1.65-tt.pitch*3,e.position.z-Math.cos(tt.yaw)*5);else{e.visible=!0;let o=4.4*Math.cos(tt.pitch*.6);tt.tPos.set(e.position.x+Math.sin(tt.yaw)*o,e.position.y+1.8+tt.pitch*2.6,e.position.z+Math.cos(tt.yaw)*o),tt.tLook.set(e.position.x,e.position.y+1.4,e.position.z)}rl&&rl()}else if(tt.mode==="menu"){let s=Qo*.07;tt.tPos.set(Math.sin(s)*22,7.5+Math.sin(Qo*.2)*1.5,Math.cos(s)*22+2),tt.tLook.set(0,2.5,-2)}let t=tt.mode==="walk"?10:2.2;tt.pos.lerp(tt.tPos,Math.min(1,n*t)),tt.look.lerp(tt.tLook,Math.min(1,n*t)),ia.position.copy(tt.pos),ia.lookAt(tt.look),Ke.update(Qo*Od.vel,n);let i=pe("#bubble");if(!i.classList.contains("hidden"))if(performance.now()>Ps.hasta)i.classList.add("hidden");else{Ke.presentador.getWorldPosition(qs),qs.y+=2,qs.project(ia);let s=qs.z<1&&Math.abs(qs.x)<1.1&&Math.abs(qs.y)<1.1;i.style.left=Math.max(160,Math.min(innerWidth-160,(qs.x*.5+.5)*innerWidth))+"px",i.style.top=Math.max(80,s?(-qs.y*.5+.5)*innerHeight:90)+"px"}em?aa.render():ln.render(Fu,ia)}ln.setAnimationLoop(m3);tl(jn,!1);am();rm();Dd();il().then(()=>{(sa==="title"||sa==="main")&&!pe("#menu").classList.contains("hidden")&&Dt(sa)});as(yn.has("main")?"main":"title");document.addEventListener("visibilitychange",()=>{document.hidden?Ee.stopMusic():pe("#menu").classList.contains("hidden")||Ee.music("menu")});addEventListener("pointerdown",function n(){pe("#menu").classList.contains("hidden")||Ee.music("menu"),removeEventListener("pointerdown",n)});setTimeout(()=>pe("#loading").classList.add("hidden"),600);yn.get("cam")&&(pe("#menu").classList.add("hidden"),ll(...sl[yn.get("cam")],!0));"serviceWorker"in navigator&&location.protocol==="https:"&&navigator.serviceWorker.register("sw.js").catch(()=>{});window.__frases=()=>{let n=[],e=(a,r=!1)=>{a=String(a||"").replace(/<[^>]+>/g,"").trim(),a&&n.push({v:"davefx",t:a,q:r})},t=we.presentador||"Rober Mecha";e(`\xA1Hola! Soy ${t}. Bienvenidos a la historia de \xA1Boom! Empecemos por el principio.`),e("Y esta ha sido la historia de \xA1Boom! \xA1Gracias por acompa\xF1arme!"),qu.forEach(a=>e(a.sub)),Ci.forEach(a=>a.lineas.forEach(r=>e(r))),Lu.forEach(a=>e(a)),e("\xA1Concursante, ve hasta tu atril!"),Object.values(Rn).forEach(a=>{e(a.saludo),(a.extra||[]).forEach(r=>e(r))});let i=Mu;if([...i.cables4,...i.cables5,...i.clasificatoria].forEach(a=>e(a.p,!0)),[...i.estrategica,...i.desempate].forEach(a=>e(a.t,!0)),i.bote.forEach(a=>e(a.p,!0)),window.__vozLog)for(let a of window.__vozLog.values())e(a.t,a.q);let s=new Set;return n.filter(a=>{let r=a.t+"|"+a.q;return s.has(r)?!1:(s.add(r),!0)})};window.__boom={P:Ke,api:Jn,iniciar:pi,irMenu:as,Lt:Dt,camara:al,show:ll,CAMS:sl,aplicarTema:tl,FASES:Cd,ETAPAS:Ri,ctx:fn,reproducirCabecera:Ud,cfg:we};window.__plato={ok:!0,scene:Fu,renderer:ln};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
