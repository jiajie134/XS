define(["exports","./when-c2e8ef35","./Check-c4f3a3fc","./Math-d30358ed","./Cartesian2-e875d9d2","./Transforms-e29bfb70","./ComponentDatatype-5d3f6452","./GeometryAttribute-ecc26160","./GeometryAttributes-57608efc","./IndexDatatype-e3260434","./GeometryOffsetAttribute-e6e9672c","./VertexFormat-ad523db1"],function(t,ut,e,lt,ft,ct,dt,Ct,pt,yt,_t,d){"use strict";var vt=new ft.Cartesian3,ht=new ft.Cartesian3,At=new ft.Cartesian3,xt=new ft.Cartesian3,bt=new ft.Cartesian3,l=new ft.Cartesian3(1,1,1),kt=Math.cos,wt=Math.sin;function C(t){t=ut.defaultValue(t,ut.defaultValue.EMPTY_OBJECT);var e=ut.defaultValue(t.radii,l),a=ut.defaultValue(t.innerRadii,e),i=ut.defaultValue(t.minimumClock,0),r=ut.defaultValue(t.maximumClock,lt.CesiumMath.TWO_PI),n=ut.defaultValue(t.minimumCone,0),o=ut.defaultValue(t.maximumCone,lt.CesiumMath.PI),m=Math.round(ut.defaultValue(t.stackPartitions,64)),s=Math.round(ut.defaultValue(t.slicePartitions,64)),u=ut.defaultValue(t.vertexFormat,d.VertexFormat.DEFAULT);this._radii=ft.Cartesian3.clone(e),this._innerRadii=ft.Cartesian3.clone(a),this._minimumClock=i,this._maximumClock=r,this._minimumCone=n,this._maximumCone=o,this._stackPartitions=m,this._slicePartitions=s,this._vertexFormat=d.VertexFormat.clone(u),this._offsetAttribute=t.offsetAttribute,this._workerName="createEllipsoidGeometry"}C.packedLength=2*ft.Cartesian3.packedLength+d.VertexFormat.packedLength+7,C.pack=function(t,e,a){return a=ut.defaultValue(a,0),ft.Cartesian3.pack(t._radii,e,a),a+=ft.Cartesian3.packedLength,ft.Cartesian3.pack(t._innerRadii,e,a),a+=ft.Cartesian3.packedLength,d.VertexFormat.pack(t._vertexFormat,e,a),a+=d.VertexFormat.packedLength,e[a++]=t._minimumClock,e[a++]=t._maximumClock,e[a++]=t._minimumCone,e[a++]=t._maximumCone,e[a++]=t._stackPartitions,e[a++]=t._slicePartitions,e[a]=ut.defaultValue(t._offsetAttribute,-1),e};var a,p=new ft.Cartesian3,y=new ft.Cartesian3,_=new d.VertexFormat,v={radii:p,innerRadii:y,vertexFormat:_,minimumClock:void 0,maximumClock:void 0,minimumCone:void 0,maximumCone:void 0,stackPartitions:void 0,slicePartitions:void 0,offsetAttribute:void 0};C.unpack=function(t,e,a){e=ut.defaultValue(e,0);var i=ft.Cartesian3.unpack(t,e,p);e+=ft.Cartesian3.packedLength;var r=ft.Cartesian3.unpack(t,e,y);e+=ft.Cartesian3.packedLength;var n=d.VertexFormat.unpack(t,e,_);e+=d.VertexFormat.packedLength;var o=t[e++],m=t[e++],s=t[e++],u=t[e++],l=t[e++],f=t[e++],c=t[e];return ut.defined(a)?(a._radii=ft.Cartesian3.clone(i,a._radii),a._innerRadii=ft.Cartesian3.clone(r,a._innerRadii),a._vertexFormat=d.VertexFormat.clone(n,a._vertexFormat),a._minimumClock=o,a._maximumClock=m,a._minimumCone=s,a._maximumCone=u,a._stackPartitions=l,a._slicePartitions=f,a._offsetAttribute=-1===c?void 0:c,a):(v.minimumClock=o,v.maximumClock=m,v.minimumCone=s,v.maximumCone=u,v.stackPartitions=l,v.slicePartitions=f,v.offsetAttribute=-1===c?void 0:c,new C(v))},C.createGeometry=function(t){var e=t._radii;if(!(e.x<=0||e.y<=0||e.z<=0)){var a=t._innerRadii;if(!(a.x<=0||a.y<=0||a.z<=0)){var i,r,n=t._minimumClock,o=t._maximumClock,m=t._minimumCone,s=t._maximumCone,u=t._vertexFormat,l=t._slicePartitions+1,f=t._stackPartitions+1;(l=Math.round(l*Math.abs(o-n)/lt.CesiumMath.TWO_PI))<2&&(l=2),(f=Math.round(f*Math.abs(s-m)/lt.CesiumMath.PI))<2&&(f=2);var c=0,d=[m],C=[n];for(i=0;i<f;i++)d.push(m+i*(s-m)/(f-1));for(d.push(s),r=0;r<l;r++)C.push(n+r*(o-n)/(l-1));C.push(o);var p=d.length,y=C.length,_=0,v=1,h=a.x!==e.x||a.y!==e.y||a.z!==e.z,A=!1,x=!1,b=!1;h&&(v=2,0<m&&(A=!0,_+=l-1),s<Math.PI&&(x=!0,_+=l-1),(o-n)%lt.CesiumMath.TWO_PI?(b=!0,_+=2*(f-1)+1):_+=1);var k=y*p*v,w=new Float64Array(3*k),F=_t.arrayFill(new Array(k),!1),P=_t.arrayFill(new Array(k),!1),g=l*f*v,V=6*(g+_+1-(l+f)*v),M=yt.IndexDatatype.createTypedArray(g,V),T=u.normal?new Float32Array(3*k):void 0,D=u.tangent?new Float32Array(3*k):void 0,G=u.bitangent?new Float32Array(3*k):void 0,L=u.st?new Float32Array(2*k):void 0,O=new Array(p),I=new Array(p);for(i=0;i<p;i++)O[i]=wt(d[i]),I[i]=kt(d[i]);var E=new Array(y),z=new Array(y);for(r=0;r<y;r++)z[r]=kt(C[r]),E[r]=wt(C[r]);for(i=0;i<p;i++)for(r=0;r<y;r++)w[c++]=e.x*O[i]*z[r],w[c++]=e.y*O[i]*E[r],w[c++]=e.z*I[i];var N,R,U,S,B=k/2;if(h)for(i=0;i<p;i++)for(r=0;r<y;r++)w[c++]=a.x*O[i]*z[r],w[c++]=a.y*O[i]*E[r],w[c++]=a.z*I[i],F[B]=!0,0<i&&i!==p-1&&0!==r&&r!==y-1&&(P[B]=!0),B++;for(c=0,i=1;i<p-2;i++)for(N=i*y,R=(i+1)*y,r=1;r<y-2;r++)M[c++]=R+r,M[c++]=R+r+1,M[c++]=N+r+1,M[c++]=R+r,M[c++]=N+r+1,M[c++]=N+r;if(h){var W=p*y;for(i=1;i<p-2;i++)for(N=W+i*y,R=W+(i+1)*y,r=1;r<y-2;r++)M[c++]=R+r,M[c++]=N+r,M[c++]=N+r+1,M[c++]=R+r,M[c++]=N+r+1,M[c++]=R+r+1}if(h){if(A)for(S=p*y,i=1;i<y-2;i++)M[c++]=i,M[c++]=i+1,M[c++]=S+i+1,M[c++]=i,M[c++]=S+i+1,M[c++]=S+i;if(x)for(U=p*y-y,S=p*y*v-y,i=1;i<y-2;i++)M[c++]=U+i+1,M[c++]=U+i,M[c++]=S+i,M[c++]=U+i+1,M[c++]=S+i,M[c++]=S+i+1}if(b){for(i=1;i<p-2;i++)S=y*p+y*i,U=y*i,M[c++]=S,M[c++]=U+y,M[c++]=U,M[c++]=S,M[c++]=S+y,M[c++]=U+y;for(i=1;i<p-2;i++)S=y*p+y*(i+1)-1,U=y*(i+1)-1,M[c++]=U+y,M[c++]=S,M[c++]=U,M[c++]=U+y,M[c++]=S+y,M[c++]=S}var Y=new pt.GeometryAttributes;u.position&&(Y.position=new Ct.GeometryAttribute({componentDatatype:dt.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:w}));var J,X=0,Z=0,j=0,q=0,H=k/2,K=ft.Ellipsoid.fromCartesian3(e),Q=ft.Ellipsoid.fromCartesian3(a);if(u.st||u.normal||u.tangent||u.bitangent){for(i=0;i<k;i++){J=F[i]?Q:K;var $=ft.Cartesian3.fromArray(w,3*i,vt),tt=J.geodeticSurfaceNormal($,ht);if(P[i]&&ft.Cartesian3.negate(tt,tt),u.st){var et=ft.Cartesian2.negate(tt,bt);L[X++]=Math.atan2(et.y,et.x)/lt.CesiumMath.TWO_PI+.5,L[X++]=Math.asin(tt.z)/Math.PI+.5}if(u.normal&&(T[Z++]=tt.x,T[Z++]=tt.y,T[Z++]=tt.z),u.tangent||u.bitangent){var at,it=At,rt=0;if(F[i]&&(rt=H),at=!A&&rt<=i&&i<rt+2*y?ft.Cartesian3.UNIT_X:ft.Cartesian3.UNIT_Z,ft.Cartesian3.cross(at,tt,it),ft.Cartesian3.normalize(it,it),u.tangent&&(D[j++]=it.x,D[j++]=it.y,D[j++]=it.z),u.bitangent){var nt=ft.Cartesian3.cross(tt,it,xt);ft.Cartesian3.normalize(nt,nt),G[q++]=nt.x,G[q++]=nt.y,G[q++]=nt.z}}}u.st&&(Y.st=new Ct.GeometryAttribute({componentDatatype:dt.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:L})),u.normal&&(Y.normal=new Ct.GeometryAttribute({componentDatatype:dt.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:T})),u.tangent&&(Y.tangent=new Ct.GeometryAttribute({componentDatatype:dt.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:D})),u.bitangent&&(Y.bitangent=new Ct.GeometryAttribute({componentDatatype:dt.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:G}))}if(ut.defined(t._offsetAttribute)){var ot=w.length,mt=new Uint8Array(ot/3),st=t._offsetAttribute===_t.GeometryOffsetAttribute.NONE?0:1;_t.arrayFill(mt,st),Y.applyOffset=new Ct.GeometryAttribute({componentDatatype:dt.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:mt})}return new Ct.Geometry({attributes:Y,indices:M,primitiveType:Ct.PrimitiveType.TRIANGLES,boundingSphere:ct.BoundingSphere.fromEllipsoid(K),offsetAttribute:t._offsetAttribute})}}},C.getUnitEllipsoid=function(){return ut.defined(a)||(a=C.createGeometry(new C({radii:new ft.Cartesian3(1,1,1),vertexFormat:d.VertexFormat.POSITION_ONLY}))),a},t.EllipsoidGeometry=C});
